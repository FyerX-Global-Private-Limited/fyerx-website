const day = 86_400_000;
const offset = 330 * 60_000;
export const trafficRanges = [7, 30, 90] as const;
export type TrafficRange = (typeof trafficRanges)[number];

export function editorialDay(value: string | number = Date.now()) {
  return new Date((typeof value === "string" ? Date.parse(value) : value) + offset).toISOString().slice(0, 10);
}

export function rangeStart(today: string, days: TrafficRange) {
  return new Date(Date.parse(today) - (days - 1) * day).toISOString().slice(0, 10);
}

export function rangeDays(today: string, days: TrafficRange) {
  const start = Date.parse(rangeStart(today, days));
  return Array.from({ length: days }, (_, i) => new Date(start + i * day).toISOString().slice(0, 10));
}

export function dateLabel(value: string, year = false) {
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", ...(year && { year: "numeric" }), timeZone: "Asia/Kolkata" }).format(new Date(value));
}

export type ViewCount = { id: string; day: string; views: number };
export type Traffic = {
  today: string; started: string | null; sample: boolean; rows: ViewCount[];
};

export function totals(data: Traffic, days: TrafficRange) {
  const start = rangeStart(data.today, days);
  const byPost = new Map<string, number>();
  if (data.started) {
    for (const row of data.rows) {
      if (row.day >= start && row.day <= data.today) byPost.set(row.id, (byPost.get(row.id) ?? 0) + row.views);
    }
  }
  return byPost;
}
