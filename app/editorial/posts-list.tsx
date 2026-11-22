"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowDown, BarChart3, CircleCheck, Eye, FileText, Files, Hourglass, Plus, Search } from "lucide-react";
import { insightTopics } from "@/data/blog-topics";
import { dateLabel } from "@/lib/editorial/traffic-dates";
import { pageHref } from "@/lib/pagination";
import { Pagination } from "@/components/ui/Pagination";
import type { PostLibraryData } from "./post-library-data";
import { DashboardHeader, SampleMode, TrafficNote } from "./dashboard-shared";
import { editorialRequest } from "./api";
import styles from "./dashboard.module.css";
import workspace from "./workspace.module.css";

const statuses = { draft: "Draft", review: "In review", approved: "Approved", published: "Published" } as const;
const path = "/editorial";

export function PostsList({ entries, traffic, isolated, filters, summary, pagination, sort }: PostLibraryData) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const size = String(pagination.size);
  const href = (changes: Partial<Record<keyof typeof filters, string>>) => pageHref(path, 1, { ...filters, size, ...changes });
  const clearHref = pageHref(path, 1, { size, sample: filters.sample });
  const cards = [
    ["All posts", summary.allPosts, Files, "all"],
    ["Drafts", summary.drafts, FileText, "draft"],
    ["In review", summary.review, Hourglass, "review"],
    ["Live articles", summary.live, CircleCheck, "published"],
  ] as const;
  const create = async () => {
    setBusy(true);
    setError("");
    try {
      const { post } = await editorialRequest("posts");
      router.push("/editorial/posts/" + post.id);
    } catch (failure) {
      setError((failure as Error).message);
      setBusy(false);
    }
  };

  return <div className={styles.dashboard}>
    <DashboardHeader title="Posts" description="Find articles, check what’s in review and track readership." actions={
      <button className={styles.heroAction} disabled={busy} onClick={create}><Plus size={18} aria-hidden="true" />{busy ? "Creating…" : "New post"}</button>
    } />
    <SampleMode isolated={isolated} traffic={traffic} path="/editorial" />
    <section className={styles.metrics} aria-label="Editorial summary">
      {cards.map(([label, value, Icon, metric]) => <button type="button" key={label} className={styles.metric} data-tone={metric} aria-pressed={metric === (filters.status || "all")} onClick={() => router.push(href({ status: metric === "all" ? "" : metric }))}>
        <Icon aria-hidden="true" size={17} /><strong>{value}</strong><span>{label}</span>
      </button>)}
    </section>
    {error && <p role="alert" className={workspace.error}>{error}</p>}
    <section className={styles.panel} aria-labelledby="library">
      <div className={styles.panelTitle}><div><h2 id="library">Post library</h2><p>Search by title or URL slug.</p></div><span className={styles.result} aria-live="polite">{pagination.total} of {summary.allPosts} posts</span></div>
      <form action={path} method="get" key={href({})}>
        {pagination.size !== 10 && <input type="hidden" name="size" value={size} />}
        {filters.sample && <input type="hidden" name="sample" value={filters.sample} />}
        <div className={styles.controls}>
          <label className={styles.search}><Search size={19} aria-hidden="true" /><input type="search" name="q" aria-label="Search posts" defaultValue={filters.q} placeholder="Search posts…" /></label>
          <label>Category<select name="topic" defaultValue={filters.topic}><option value="">All categories</option>{Object.entries(insightTopics).map(([value, entry]) => <option key={value} value={value}>{entry.label}</option>)}</select></label>
          <label>Status<select name="status" defaultValue={filters.status}><option value="">All statuses</option>{Object.entries(statuses).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
          <label>Updated<select name="date" defaultValue={filters.date}><option value="">Any time</option>{[7, 30, 90].map((n) => <option key={n} value={n}>Last {n} days</option>)}</select></label>
          <label>Sort by<select name="sort" defaultValue={sort}><option value="recent">Most recent</option><option value="views">Most viewed</option></select></label>
        </div>
        <div className="flex flex-wrap items-center gap-3 px-4 pb-3">
          <button className={workspace.secondary} type="submit">Apply filters</button>
          {(filters.q || filters.topic || filters.status || filters.date || filters.sort) && <Link className="text-sm underline" href={clearHref}>Clear filters</Link>}
        </div>
      </form>
      {entries.length ? <table className={styles.table}>
        <caption className="sr-only">Posts with 30-day page views</caption>
        <thead><tr>
          <th scope="col">Article</th><th scope="col">Category</th><th scope="col">Status</th>
          <th scope="col" aria-sort={sort === "recent" ? "descending" : "none"}><button type="button" onClick={() => router.push(href({ sort: "" }))}>Updated {sort === "recent" && <ArrowDown size={13} aria-hidden="true" />}</button></th>
          <th scope="col" aria-sort={sort === "views" ? "descending" : "none"}><button type="button" onClick={() => router.push(href({ sort: "views" }))}>Views · 30d {sort === "views" && <ArrowDown size={13} aria-hidden="true" />}</button></th>
          <th scope="col">Actions</th>
        </tr></thead>
        <tbody>
          {entries.map((post) => {
            const state = post.status;
            const title = post.title || "Untitled post";
            const value = post.views;
            return <tr key={post.id}>
              <td className={styles.articleCell}><Link href={"/editorial/posts/" + post.id}><span className={styles.fileIcon}><FileText size={17} aria-hidden="true" /></span><span><strong>{title}</strong>{post.slug && <small>/{post.slug}</small>}</span></Link></td>
              <td><span className={styles.chip} data-tone={post.topic}>{insightTopics[post.topic].label}</span></td>
              <td><span className={styles.chip} data-tone={state}>{statuses[state]}</span>{post.liveSlug && state !== "published" && <small>Earlier revision live</small>}</td>
              <td className={styles.updated}><time dateTime={post.updated}>{dateLabel(post.updated, true)}</time></td>
              <td className={styles.views}><span className={styles.mobileLabel}>30-day views</span>{value === null ? <span title={traffic.started ? "Never published" : "Traffic unavailable"}>—<span className="sr-only">{traffic.started ? "Never published" : "Traffic unavailable"}</span></span> : value.toLocaleString("en-IN")}</td>
              <td className={styles.actionCell}><div className={styles.actions}><Link href={"/editorial/posts/" + post.id}>Edit<span className="sr-only"> {title}</span></Link><Link prefetch={false} href={"/editorial/preview/" + post.id} title="Private preview" aria-label={"Preview " + title}><Eye size={17} aria-hidden="true" /></Link>{post.hasPublication && <Link href={"/editorial/analytics?post=" + encodeURIComponent(post.id) + (traffic.sample ? "&sample=1" : "")} aria-label={"Traffic for " + title} title="Article traffic"><BarChart3 size={17} aria-hidden="true" /></Link>}</div></td>
            </tr>;
          })}
        </tbody>
      </table> : <div className={styles.empty}><Search size={25} aria-hidden="true" /><h3>{summary.allPosts ? "No matching posts" : "No posts yet"}</h3><p>{summary.allPosts ? "Try a different search or remove a filter." : "Create a post to get your editorial queue started."}</p><button className={workspace.secondary} type="button" onClick={summary.allPosts ? () => router.push(clearHref) : create}>{summary.allPosts ? "Clear filters" : "Create a post"}</button></div>}
      <Pagination path={path} pagination={pagination} filters={filters} />
      <TrafficNote traffic={traffic} />
    </section>
  </div>;
}
