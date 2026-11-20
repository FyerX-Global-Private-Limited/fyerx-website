import "server-only";
import { editorialMode } from "@/lib/editorial/config";
import { db, posts } from "@/lib/editorial/store";
import { readTraffic } from "@/lib/editorial/traffic";

export function dashboardData(sampleMode?: string | string[]) {
  const connection = db();
  const published = new Set(connection.prepare("SELECT DISTINCT id FROM slug_claims UNION SELECT id FROM live").all().map((row) => String(row.id)));
  const entries = posts().map(({ id, draft, stage, revision, liveSlug, liveRevision, updated }) => ({
    id, title: draft.title, topic: draft.topic, slug: draft.slug, stage, revision, liveSlug, liveRevision, updated,
    hasPublication: published.has(id),
  }));
  const isolated = editorialMode() === "isolated";
  return {
    entries,
    traffic: readTraffic(isolated && sampleMode === "1", [...published].sort()),
    isolated,
  };
}

export type DashboardData = ReturnType<typeof dashboardData>;
export type DashboardPost = DashboardData["entries"][number];
