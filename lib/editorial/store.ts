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
export type Post = { id: string; draft: Draft; revision: number; version: number; stage: Workflow; approved: number | null; liveSlug: string | null; liveRevision: number | null; updated: string; scheduledFor: string | null; scheduleError: string | null };
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
    CREATE TABLE IF NOT EXISTS post_trash (
      id TEXT PRIMARY KEY REFERENCES posts(id) ON DELETE CASCADE,
      trashed TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS publication_schedule (
      id TEXT PRIMARY KEY REFERENCES posts(id) ON DELETE CASCADE,
      revision INTEGER NOT NULL,
      due TEXT NOT NULL,
      error TEXT
    );
    CREATE INDEX IF NOT EXISTS editorial_schedule_due ON publication_schedule(due) WHERE error IS NULL;
    CREATE TABLE IF NOT EXISTS featured_order (
      id TEXT PRIMARY KEY REFERENCES live(id) ON DELETE CASCADE,
      position INTEGER NOT NULL
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

const postQuery = `SELECT p.*, l.slug AS liveSlug, l.revision AS liveRevision, s.due AS scheduledFor, s.error AS scheduleError
  FROM posts p LEFT JOIN live l ON l.id = p.id LEFT JOIN publication_schedule s ON s.id = p.id
  WHERE NOT EXISTS (SELECT 1 FROM post_trash t WHERE t.id = p.id)`;

function read(row: Row): Post {
  return { ...row, draft: JSON.parse(row.draft) };
}

export function posts() {
  return (db().prepare(postQuery + " ORDER BY p.updated DESC").all() as Row[]).map(read);
}

export function post(id: string) {
  const row = db().prepare(postQuery + " AND p.id = ?").get(id) as Row | undefined;
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

export function changePost(id: string, version: number, action: string, role: Role, draft?: Draft, scheduleAt?: unknown) {
  return transaction((connection) => {
    const row = post(id);
    if (!row) throw new WorkflowError("Post not found", 404);
    if (row.version !== version) throw new WorkflowError("This post changed elsewhere. Reload before continuing.");
    const now = new Date().toISOString();
    if (action === "save" && draft) {
      const lookup = connection.prepare("SELECT id FROM media WHERE id = ?");
      if (mediaSources(draft).some((key) => !lookup.get(key))) throw new WorkflowError("An image is missing", 400);
      if (JSON.stringify(row.draft) === JSON.stringify(draft)) return row;
      connection.prepare("DELETE FROM publication_schedule WHERE id = ?").run(id);
      connection.prepare("UPDATE posts SET draft = ?, revision = revision + 1, version = version + 1, stage = 'draft', approved = NULL, updated = ? WHERE id = ?")
        .run(JSON.stringify(draft), now, id);
      return post(id)!;
    }
    if (["approve", "unpublish"].includes(action) && role !== "owner") throw new WorkflowError("Only the owner can perform this action", 403);
    if (action === "publish" && role !== "owner") throw new WorkflowError("Only the owner can publish posts", 403);
    if (action === "schedule" || action === "cancel-schedule") {
      if (role !== "owner") throw new WorkflowError("Only the owner can schedule posts", 403);
      if (action === "cancel-schedule") {
        connection.prepare("DELETE FROM publication_schedule WHERE id = ?").run(id);
      } else {
        if (row.stage !== "approved" || row.approved !== row.revision || row.liveRevision === row.revision) {
          throw new WorkflowError("Approve this revision before scheduling it.");
        }
        const date = typeof scheduleAt === "string" && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(scheduleAt)
          ? new Date(scheduleAt + ":00+05:30") : new Date(NaN);
        if (!Number.isFinite(date.getTime()) || date.toISOString() <= now ||
            new Date(date.getTime() + 330 * 60000).toISOString().slice(0, 16) !== scheduleAt) {
          throw new WorkflowError("Choose a valid date and time in the future (IST).", 400);
        }
        connection.prepare(`INSERT INTO publication_schedule VALUES (?, ?, ?, NULL)
          ON CONFLICT(id) DO UPDATE SET revision = excluded.revision, due = excluded.due, error = NULL`)
          .run(id, row.revision, date.toISOString());
      }
    } else if (action === "submit" && row.stage === "draft") {
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
      if (!row.draft.featured) connection.prepare("DELETE FROM featured_order WHERE id = ?").run(id);
      connection.prepare("DELETE FROM publication_schedule WHERE id = ?").run(id);
      connection.prepare("DELETE FROM live_media WHERE post = ?").run(id);
      const insert = connection.prepare("INSERT INTO live_media VALUES (?, ?)");
      mediaSources(row.draft).forEach((media) => insert.run(id, media));
    } else if (action === "unpublish" && row.liveSlug) {
      connection.prepare("DELETE FROM publication_schedule WHERE id = ?").run(id);
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

export type BlogCard = { slug: string; topic: InsightTopic; title: string; description: string; cover: string; published: string };
type CardFilters = { topic?: InsightTopic; featured?: boolean; relatedTo?: { slug: string; topic: InsightTopic } };

const featuredFirst = "(SELECT position FROM featured_order WHERE id = live.id) ASC NULLS LAST, ";

type FeaturedArticle = { id: string; title: string; slug: string; topic: InsightTopic };

export function featuredArticles(connection = db()): FeaturedArticle[] {
  const rows = connection.prepare(`
    SELECT id, slug, json_extract(draft, '$.title') AS title, json_extract(draft, '$.topic') AS topic
    FROM live WHERE json_extract(draft, '$.featured') = 1
    ORDER BY ${featuredFirst} published DESC, slug
  `).all() as FeaturedArticle[];
  return rows.map((row) => ({ ...row }));
}

export function saveFeaturedOrder(previous: unknown, order: unknown) {
  if (!Array.isArray(previous) || !Array.isArray(order) ||
      !previous.every((id) => typeof id === "string") || !order.every((id) => typeof id === "string")) {
    throw new WorkflowError("Choose a valid article order.", 400);
  }

  transaction((connection) => {
    const current = featuredArticles(connection).map(({ id }) => id);
    if (previous.length !== current.length || current.some((id, index) => previous[index] !== id)) {
      throw new WorkflowError("The featured list changed. Reload the page and try again.");
    }

    const currentIds = new Set(current);
    const orderedIds = new Set(order);
    if (order.length !== current.length || orderedIds.size !== current.length || order.some((id) => !currentIds.has(id))) {
      throw new WorkflowError("The order must include each featured article once.", 400);
    }

    const save = connection.prepare(`
      INSERT INTO featured_order (id, position) VALUES (?, ?)
      ON CONFLICT(id) DO UPDATE SET position = excluded.position
    `);
    order.forEach((id, position) => save.run(id, position));
  });
}

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
    : filters.featured ? featuredFirst : "";
  if (filters.relatedTo) values.push(filters.relatedTo.topic);
  return db().prepare(`
    SELECT slug, published, json_extract(draft, '$.topic') AS topic, json_extract(draft, '$.title') AS title,
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

export function trashedPosts(query: Query) {
  const connection = db();
  const total = Number(connection.prepare("SELECT COUNT(*) AS total FROM post_trash").get()?.total ?? 0);
  const pagination = paginate(total, query);
  const articles = connection.prepare(`
    SELECT p.id, json_extract(p.draft, '$.title') AS title, t.trashed
    FROM post_trash t JOIN posts p ON p.id = t.id ORDER BY t.trashed DESC, p.id
    LIMIT ? OFFSET ?
  `).all(pagination.size, pagination.offset)
    .map((row) => ({ id: String(row.id), title: String(row.title ?? ""), trashed: String(row.trashed) }));
  return { articles, pagination };
}

export function changePosts(ids: unknown, action: "trash" | "restore" | "unpublish") {
  if (!Array.isArray(ids) || !ids.length || ids.length > 50 ||
      ids.some((id) => typeof id !== "string" || !id || id.length > 100)) {
    throw new WorkflowError("Select between 1 and 50 posts.", 400);
  }
  return transaction((connection) => {
    const now = new Date().toISOString();
    const isTrashed = connection.prepare("SELECT 1 FROM post_trash WHERE id = ?");
    const markTrash = connection.prepare("INSERT INTO post_trash VALUES (?, ?)");
    const restore = connection.prepare("DELETE FROM post_trash WHERE id = ?");
    const hide = connection.prepare("DELETE FROM live WHERE id = ?");
    const cancel = connection.prepare("DELETE FROM publication_schedule WHERE id = ?");
    const update = connection.prepare("UPDATE posts SET version = version + 1, updated = ? WHERE id = ?");
    const reset = connection.prepare("UPDATE posts SET stage = 'draft', approved = NULL WHERE id = ?");
    const removedSlugs: string[] = [];
    for (const id of new Set<string>(ids)) {
      if (action === "restore") {
        if (!isTrashed.get(id)) throw new WorkflowError("A selected post is no longer in Trash. Refresh and try again.");
        restore.run(id);
        reset.run(id);
      } else {
        const entry = post(id);
        if (!entry || (action === "unpublish" && !entry.liveSlug)) {
          throw new WorkflowError("A selected post is no longer available for this action. Refresh and try again.");
        }
        if (entry.liveSlug) removedSlugs.push(entry.liveSlug);
        if (action === "trash") markTrash.run(id, now);
        cancel.run(id);
        hide.run(id);
      }
      update.run(now, id);
    }
    return removedSlugs;
  });
}

export function publishDuePosts(now = new Date().toISOString()) {
  const connection = db();
  const due = connection.prepare(`
    SELECT p.id, p.version, s.due FROM publication_schedule s JOIN posts p ON p.id = s.id
    WHERE s.due <= ? AND s.error IS NULL AND s.revision = p.revision
    ORDER BY s.due, p.id LIMIT 25
  `).all(now) as { id: string; version: number; due: string }[];
  const published: string[] = [];
  for (const entry of due) {
    try {
      const previous = post(entry.id)?.liveSlug;
      const updated = changePost(entry.id, entry.version, "publish", "owner");
      if (previous) published.push(previous);
      if (updated.liveSlug) published.push(updated.liveSlug);
    } catch (failure) {
      if (!(failure instanceof WorkflowError)) throw failure;
      connection.prepare(`UPDATE publication_schedule SET error = ?
        WHERE id = ? AND due = ? AND EXISTS (SELECT 1 FROM posts WHERE id = ? AND version = ?)`)
        .run(failure.message, entry.id, entry.due, entry.id, entry.version);
    }
  }
  return published;
}
