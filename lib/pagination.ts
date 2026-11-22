export type Query = Record<string, string | string[] | undefined>;
export const pageSizes = [10, 20, 50] as const;

export function pageRequest(query: Query) {
  const size = pageSizes.find((value) => String(value) === query.size) ?? 10;
  const requested = typeof query.page === "string" && /^\d+$/.test(query.page) ? Number(query.page) : 1;
  return { size, requested: Math.max(1, requested) };
}

export function paginate(total: number, query: Query) {
  const { size, requested } = pageRequest(query);
  const pages = Math.max(1, Math.ceil(total / size));
  const page = Math.min(requested, pages);
  return { size, pages, page, total, offset: (page - 1) * size };
}

export function pageHref(path: string, page: number, filters: Record<string, string> = {}) {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(filters)) {
    if (value && (key !== "size" || value !== "10")) query.set(key, value);
  }
  if (page > 1) query.set("page", String(page));
  return query.size ? path + "?" + query : path;
}
