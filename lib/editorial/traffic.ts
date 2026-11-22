import "server-only";
import { editorialMode } from "./config";
import { db } from "./store";
import { editorialDay, rangeDays, rangeStart, type Traffic, type ViewCount } from "./traffic-dates";

export function trafficEnabled() {
  return !!editorialMode() && process.env.BLOG_TRAFFIC !== "off";
}

function measurementStart(now = new Date().toISOString()) {
  const connection = db();
  const prior = connection.prepare("SELECT started FROM traffic_start WHERE slot = 1").get();
  if (prior) return String(prior.started);
  connection.prepare("INSERT OR IGNORE INTO traffic_start VALUES (1, ?)").run(now);
  return String(connection.prepare("SELECT started FROM traffic_start WHERE slot = 1").get()?.started);
}

export function recordArticleView(slug: string) {
  if (!trafficEnabled()) return;
  const now = new Date().toISOString();
  const connection = db();
  measurementStart(now);
  connection.prepare(`
    INSERT INTO article_daily_views (id, day, views)
    SELECT id, ?, 1 FROM live WHERE slug = ?
    ON CONFLICT (id, day) DO UPDATE SET views = views + 1
  `).run(editorialDay(now), slug);
}

export function trafficPeriod(): Traffic {
  const today = editorialDay();
  try {
    const started = trafficEnabled() ? editorialDay(measurementStart()) : null;
    return { today, started, sample: false, rows: [] };
  } catch {
    return { today, started: null, sample: false, rows: [] };
  }
}

export function readTraffic(sample: boolean, eligible: string[]): Traffic {
  const today = editorialDay();
  if (sample && editorialMode() === "isolated") {
    const days = rangeDays(today, 90);
    return {
      today, started: days[0], sample: true,
      rows: eligible.flatMap((id, rank) => days.map((day, i) => ({
        id, day, views: Math.round((10 + i * .62 + (i * 11 % 24) + 9 * Math.sin(i / 3)) / (rank + 1)),
      }))),
    };
  }
  const unavailable = { today, started: null, sample: false, rows: [] };
  if (!trafficEnabled()) return unavailable;
  try {
    const started = editorialDay(measurementStart());
    const earliest = rangeStart(today, 90);
    const stored = db().prepare("SELECT id, day, views FROM article_daily_views WHERE day BETWEEN ? AND ?")
      .all(earliest > started ? earliest : started, today) as ViewCount[];
    const rows = stored.map(({ id, day, views }) => ({ id, day, views }));
    return { today, started, sample: false, rows };
  } catch {
    return unavailable;
  }
}
