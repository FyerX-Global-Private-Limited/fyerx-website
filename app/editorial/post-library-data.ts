import "server-only";
import { editorialMode } from "@/lib/editorial/config";
import { db } from "@/lib/editorial/store";
import { readTraffic, trafficPeriod } from "@/lib/editorial/traffic";
import { rangeStart, totals, type TrafficRange } from "@/lib/editorial/traffic-dates";
import { getInsightTopic, type InsightTopic } from "@/data/blog-topics";
import { paginate, type Query } from "@/lib/pagination";

const statusSQL = "CASE WHEN l.revision = p.revision THEN 'published' ELSE p.stage END";
const titleSQL = "json_extract(p.draft, '$.title')";
const topicSQL = "json_extract(p.draft, '$.topic')";
const slugSQL = "json_extract(p.draft, '$.slug')";
type Row = {
  id: string; title: string; topic: InsightTopic; slug: string; updated: string;
  status: "draft" | "review" | "approved" | "published"; liveSlug: string | null;
  hasPublication: number; views: number | null;
};

export function postLibraryData(query: Query) {
  const connection = db();
  const isolated = editorialMode() === "isolated";
  const sample = isolated && query.sample === "1";
  const eligible = sample ? connection.prepare("SELECT id FROM slug_claims UNION SELECT id FROM live ORDER BY id").all().map(({ id }) => String(id)) : [];
  const traffic = sample ? readTraffic(true, eligible) : trafficPeriod();
  const term = typeof query.q === "string" ? query.q.trim().slice(0, 200) : "";
  const topic = typeof query.topic === "string" ? getInsightTopic(query.topic) ?? "" : "";
  const status = typeof query.status === "string" && ["draft", "review", "approved", "published"].includes(query.status) ? query.status : "";
  const date = typeof query.date === "string" && ["7", "30", "90"].includes(query.date) ? query.date : "";
  const sort = query.sort === "views" ? "views" : "recent";
  const filters = { q: term, topic, status, date, sort: sort === "views" ? sort : "", sample: sample ? "1" : "" };
  const conditions: string[] = [];
  const args: string[] = [];
  if (term) {
    conditions.push(`instr(lower(coalesce(${titleSQL}, '') || ' ' || coalesce(${slugSQL}, '') || ' ' || coalesce(l.slug, '')), lower(?)) > 0`);
    args.push(term);
  }
  if (topic) {
    conditions.push(`${topicSQL} = ?`);
    args.push(topic);
  }
  if (status) {
    conditions.push(status === "published" ? "l.slug IS NOT NULL" : `(${statusSQL}) = ?`);
    if (status !== "published") args.push(status);
  }
  if (date) {
    conditions.push("date(p.updated, '+330 minutes') BETWEEN ? AND ?");
    args.push(rangeStart(traffic.today, Number(date) as TrafficRange), traffic.today);
  }
  const source = "FROM posts p LEFT JOIN live l ON l.id = p.id";
  const where = conditions.length ? "WHERE " + conditions.join(" AND ") : "";
  const summary = connection.prepare(`SELECT COUNT(*) AS allPosts, COUNT(l.id) AS live,
    COUNT(CASE WHEN ${statusSQL} = 'draft' THEN 1 END) AS drafts,
    COUNT(CASE WHEN ${statusSQL} = 'review' THEN 1 END) AS review ${source}`).get() as {
      allPosts: number; live: number; drafts: number; review: number;
    };
  const total = conditions.length
    ? Number(connection.prepare(`SELECT COUNT(*) AS total ${source} ${where}`).get(...args)?.total ?? 0)
    : summary.allPosts;
  const pagination = paginate(total, query);
  const metrics = sample ? JSON.stringify(Object.fromEntries(totals(traffic, 30))) : "{}";
  const views = sample
    ? "(SELECT value FROM json_each(?) WHERE key = p.id)"
    : "(SELECT SUM(views) FROM article_daily_views WHERE id = p.id AND day BETWEEN ? AND ?)";
  const earliest = rangeStart(traffic.today, 30);
  const viewArgs = sample ? [metrics] : [traffic.started && traffic.started > earliest ? traffic.started : earliest, traffic.today];
  const entries = connection.prepare(`
    SELECT id, title, topic, slug, updated, status, liveSlug, hasPublication, CASE WHEN hasPublication AND ? THEN coalesce(rawViews, 0) ELSE NULL END AS views
    FROM (
      SELECT p.id, ${titleSQL} AS title, ${topicSQL} AS topic, ${slugSQL} AS slug, p.updated,
        ${statusSQL} AS status, l.slug AS liveSlug,
        (l.id IS NOT NULL OR EXISTS (SELECT 1 FROM slug_claims WHERE id = p.id)) AS hasPublication,
        ${views} AS rawViews
      ${source} ${where}
    )
    ORDER BY ${sort === "views" ? "views DESC, " : ""} updated DESC, id
    LIMIT ? OFFSET ?
  `).all(traffic.started ? 1 : 0, ...viewArgs, ...args, pagination.size, pagination.offset) as Row[];
  return { entries: entries.map((row) => ({ ...row })), traffic: { ...traffic, rows: [] }, isolated, filters, summary: { ...summary }, pagination, sort };
}

export type PostLibraryData = ReturnType<typeof postLibraryData>;
