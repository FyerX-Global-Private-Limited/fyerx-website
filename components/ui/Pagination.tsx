import Link from "next/link";
import { pageHref, pageSizes, type paginate } from "@/lib/pagination";

export function Pagination({ path, pagination, filters = {} }: {
  path: string;
  pagination: ReturnType<typeof paginate>;
  filters?: Record<string, string>;
}) {
  const { page, pages, size, total, offset } = pagination;
  const href = (next: number) => pageHref(path, next, { ...filters, size: String(size) });
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-1 py-3 text-sm">
      <p aria-live="polite">{total ? `${offset + 1}–${Math.min(offset + size, total)} of ${total}` : "0 results"}</p>
      <nav aria-label="Pagination" className="flex items-center gap-3">
        {page > 1 && <Link href={href(page - 1)} rel="prev" prefetch={false} className="rounded-md border px-3 py-2">Previous</Link>}
        <span>Page {page} of {pages}</span>
        {page < pages && <Link href={href(page + 1)} rel="next" prefetch={false} className="rounded-md border px-3 py-2">Next</Link>}
      </nav>
      <form action={path} method="get" className="flex flex-wrap items-center gap-2">
        {Object.entries(filters).filter(([, value]) => value).map(([key, value]) => <input key={key} type="hidden" name={key} value={value} />)}
        <label className="flex items-center gap-2">Per page
          <select key={size} name="size" defaultValue={size} className="rounded-md border bg-white px-2 py-2">
            {pageSizes.map((value) => <option key={value} value={value}>{value}</option>)}
          </select>
        </label>
        <button className="rounded-md border px-3 py-2" type="submit">Apply</button>
      </form>
    </div>
  );
}
