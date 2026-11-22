import { DatabaseSync } from "node:sqlite";
import { randomUUID } from "node:crypto";
import { dirname, isAbsolute } from "node:path";
import { chmodSync, mkdirSync } from "node:fs";
import { insights } from "@/data/insights";
import { blankDraft, mediaSources, publishIssues, type Draft, type Node } from "./document";
import type { InsightTopic } from "@/data/blog-topics";
import { paginate, type Query } from "@/lib/pagination";
import { editorialMode, editorialOrigin } from "./config";

export type Role = "owner" | "editor";
export type Workflow = "draft" | "review" | "approved";
export type Post = { id: string; draft: Draft; revision: number; version: number; stage: Workflow; approved: number | null; liveSlug: string | null; liveRevision: number | null; updated: string };
type Row = Omit<Post, "draft"> & { draft: string };
export type LivePost = { id: string; draft: Draft; published: string; modified: string };
type LiveRow = Omit<LivePost, "draft"> & { draft: string };
let database: DatabaseSync | undefined;

export function db() {
  if (database) return database;
  const mode = editorialMode();
  const path = process.env.BLOG_DB_PATH;
  if (!mode || !path || !isAbsolute(path)) throw new Error("An absolute BLOG_DB_PATH is required");
  editorialOrigin();
  mkdirSync(dirname(path), { recursive: true, mode: 0o700 });
  const connection = new DatabaseSync(path);
  chmodSync(path, 0o600);
  connection.exec(`
    PRAGMA journal_mode=WAL;
    PRAGMA busy_timeout=5000;
    PRAGMA foreign_keys=ON;
    CREATE TABLE IF NOT EXISTS posts (
      id TEXT PRIMARY KEY, draft TEXT NOT NULL, revision INTEGER NOT NULL,
      version INTEGER NOT NULL, stage TEXT NOT NULL, approved INTEGER, updated TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS live (
      id TEXT PRIMARY KEY REFERENCES posts(id), slug TEXT UNIQUE NOT NULL,
      draft TEXT NOT NULL, revision INTEGER NOT NULL, published TEXT NOT NULL, modified TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS slug_claims (slug TEXT PRIMARY KEY, id TEXT NOT NULL REFERENCES posts(id));
    CREATE TABLE IF NOT EXISTS redirects (slug TEXT PRIMARY KEY, id TEXT NOT NULL REFERENCES posts(id));
    CREATE TABLE IF NOT EXISTS media (id TEXT PRIMARY KEY, blob BLOB NOT NULL);
    CREATE TABLE IF NOT EXISTS live_media (
      post TEXT REFERENCES live(id) ON DELETE CASCADE, media TEXT REFERENCES media(id),
      PRIMARY KEY (post, media)
    );
    CREATE TABLE IF NOT EXISTS traffic_start (slot INTEGER PRIMARY KEY CHECK (slot = 1), started TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS article_daily_views (
      id TEXT NOT NULL REFERENCES posts(id), day TEXT NOT NULL, views INTEGER NOT NULL CHECK (views > 0),
      PRIMARY KEY (id, day)
    );
    CREATE INDEX IF NOT EXISTS article_views_day ON article_daily_views(day);
    CREATE TABLE IF NOT EXISTS sessions (token TEXT PRIMARY KEY, username TEXT NOT NULL, expires INTEGER NOT NULL);
    CREATE TABLE IF NOT EXISTS editorial_users (
      email TEXT PRIMARY KEY, salt TEXT NOT NULL, hash TEXT NOT NULL, created TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS login_attempts (at INTEGER NOT NULL);
  `);
  database = connection;
  if (mode === "isolated") seed();
  return connection;
}

function transaction<T>(operation: (connection: DatabaseSync) => T) {
  const connection = db();
  connection.exec("BEGIN IMMEDIATE");
  try {
    const result = operation(connection);
    connection.exec("COMMIT");
    return result;
  } catch (error) {
    connection.exec("ROLLBACK");
    throw error;
  }
}

function seed() {
  transaction((connection) => {
    const insert = connection.prepare("INSERT OR IGNORE INTO posts VALUES (?, ?, 1, 1, 'draft', NULL, ?)");
    for (const article of insights) {
      const body: Node = { type: "doc", content: article.sections.flatMap((section): Node[] => [
        { type: "heading", attrs: { level: 2 }, content: [{ type: "text", text: section.title }] },
        ...section.paragraphs.map((text) => ({ type: "paragraph", content: [{ type: "text", text }] })),
        ...(section.checklist ? [{ type: "bulletList", content: section.checklist.map((text) => ({
          type: "listItem", content: [{ type: "paragraph", content: [{ type: "text", text }] }],
        })) }] : []),
      ]) };
      const draft: Draft = { ...blankDraft(), ...{
        title: article.title, description: article.description, topic: article.topic, slug: article.slug, author: article.author,
        cover: { src: article.image, alt: article.imageAlt, caption: "" }, body,
      } };
      insert.run(article.topic + "-sample", JSON.stringify(draft), new Date().toISOString());
    }
  });
}

const postQuery = "SELECT p.*, l.slug AS liveSlug, l.revision AS liveRevision FROM posts p LEFT JOIN live l ON l.id = p.id";

function read(row: Row): Post {
  return { ...row, draft: JSON.parse(row.draft) };
}

export function posts() {
  return (db().prepare(postQuery + " ORDER BY p.updated DESC").all() as Row[]).map(read);
}

export function post(id: string) {
  const row = db().prepare(postQuery + " WHERE p.id = ?").get(id) as Row | undefined;
  return row && read(row);
}

export function createPost() {
  const id = randomUUID();
  db().prepare("INSERT INTO posts VALUES (?, ?, 1, 1, 'draft', NULL, ?)").run(id, JSON.stringify(blankDraft()), new Date().toISOString());
  return post(id)!;
}

export class WorkflowError extends Error {
  constructor(message: string, public status = 409) { super(message); }
}

export function changePost(id: string, version: number, action: string, role: Role, draft?: Draft) {
  return transaction((connection) => {
    const row = post(id);
    if (!row) throw new WorkflowError("Post not found", 404);
    if (row.version !== version) throw new WorkflowError("This post changed elsewhere. Reload before continuing.");
    const now = new Date().toISOString();
    if (action === "save" && draft) {
      const lookup = connection.prepare("SELECT id FROM media WHERE id = ?");
      if (mediaSources(draft).some((key) => !lookup.get(key))) throw new WorkflowError("An image is missing", 400);
      if (JSON.stringify(row.draft) === JSON.stringify(draft)) return row;
      connection.prepare("UPDATE posts SET draft = ?, revision = revision + 1, version = version + 1, stage = 'draft', approved = NULL, updated = ? WHERE id = ?")
        .run(JSON.stringify(draft), now, id);
      return post(id)!;
    }
    if (["approve", "unpublish"].includes(action) && role !== "owner") throw new WorkflowError("Only the owner can perform this action", 403);
    if (action === "publish" && role !== "owner") throw new WorkflowError("Only the owner can publish posts", 403);
    if (action === "submit" && row.stage === "draft") {
      const issues = publishIssues(row.draft);
      if (issues.length) throw new WorkflowError(issues.join(" "), 400);
      connection.prepare("UPDATE posts SET stage = 'review' WHERE id = ?").run(id);
    } else if (action === "approve" && row.stage === "review") {
      connection.prepare("UPDATE posts SET stage = 'approved', approved = revision WHERE id = ?").run(id);
    } else if (action === "publish" && row.stage === "approved" && row.approved === row.revision) {
      const slug = row.draft.slug;
      const claim = connection.prepare("SELECT id FROM slug_claims WHERE slug = ?").get(slug);
      const previous = connection.prepare("SELECT slug FROM slug_claims WHERE id = ? AND slug NOT IN (SELECT slug FROM redirects)").get(id);
      if (claim && (claim.id !== id || previous?.slug !== slug)) throw new WorkflowError("Choose a slug that has not been used by a different publication or redirect");
      if (previous && previous.slug !== slug) {
        connection.prepare("INSERT INTO redirects VALUES (?, ?)").run(previous.slug, id);
      }
      connection.prepare("INSERT OR IGNORE INTO slug_claims VALUES (?, ?)").run(slug, id);
      connection.prepare(`INSERT INTO live VALUES (?, ?, ?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET slug = excluded.slug, draft = excluded.draft, revision = excluded.revision, modified = excluded.modified`)
        .run(id, slug, JSON.stringify(row.draft), row.revision, now, now);
      connection.prepare("DELETE FROM live_media WHERE post = ?").run(id);
      const insert = connection.prepare("INSERT INTO live_media VALUES (?, ?)");
      mediaSources(row.draft).forEach((media) => insert.run(id, media));
    } else if (action === "unpublish" && row.liveSlug) {
      connection.prepare("DELETE FROM live WHERE id = ?").run(id);
    } else {
      throw new WorkflowError("This action does not apply to the current revision");
    }
    connection.prepare("UPDATE posts SET version = version + 1, updated = ? WHERE id = ?").run(now, id);
    return post(id)!;
  });
}

export function livePosts(): LivePost[] {
  if (!editorialMode()) return [];
  return (db().prepare("SELECT id, draft, published, modified FROM live ORDER BY published DESC").all() as LiveRow[])
    .map((row) => ({ ...row, draft: JSON.parse(row.draft) }));
}

export function livePost(slug: string) {
  if (!editorialMode()) return {};
  const row = db().prepare("SELECT id, draft, published, modified FROM live WHERE slug = ?").get(slug) as LiveRow | undefined;
  if (row) return { article: { ...row, draft: JSON.parse(row.draft) } as LivePost };
  const redirect = db().prepare("SELECT live.slug FROM redirects JOIN live USING (id) WHERE redirects.slug = ?").get(slug);
  return { redirect: redirect?.slug as string | undefined };
}

export type BlogCard = { slug: string; topic: InsightTopic; title: string; description: string; cover: string };
type CardFilters = { topic?: InsightTopic; featured?: boolean; relatedTo?: { slug: string; topic: InsightTopic } };

function cardConditions({ topic, featured, relatedTo }: CardFilters) {
  const conditions = [];
  const values: string[] = [];
  if (topic) {
    conditions.push("json_extract(draft, '$.topic') = ?");
    values.push(topic);
  }
  if (featured) conditions.push("json_extract(draft, '$.featured') = 1");
  if (relatedTo) {
    conditions.push("slug <> ?");
    values.push(relatedTo.slug);
  }
  return { where: conditions.length ? "WHERE " + conditions.join(" AND ") : "", values };
}

export function blogCards(filters: CardFilters, limit = 10, offset = 0): BlogCard[] {
  if (!editorialMode()) return [];
  const { where, values } = cardConditions(filters);
  const priority = filters.relatedTo
    ? "CASE WHEN json_extract(draft, '$.topic') = ? THEN 0 ELSE 1 END, "
    : "";
  if (filters.relatedTo) values.push(filters.relatedTo.topic);
  return db().prepare(`
    SELECT slug, json_extract(draft, '$.topic') AS topic, json_extract(draft, '$.title') AS title,
      json_extract(draft, '$.description') AS description, json_extract(draft, '$.cover.src') AS cover
    FROM live ${where}
    ORDER BY ${priority} published DESC, slug
    LIMIT ? OFFSET ?
  `).all(...values, limit, offset) as BlogCard[];
}

export function blogCardPagination(filters: CardFilters, query: Query) {
  const { where, values } = cardConditions(filters);
  const total = editorialMode()
    ? Number(db().prepare(`SELECT COUNT(*) AS total FROM live ${where}`).get(...values)?.total ?? 0)
    : 0;
  return paginate(total, query);
}

export function blogCardPage(filters: CardFilters, query: Query) {
  const pagination = blogCardPagination(filters, query);
  return { pagination, articles: blogCards(filters, pagination.size, pagination.offset) };
}
