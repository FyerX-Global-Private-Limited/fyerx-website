"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowDown, BarChart3, CircleCheck, Eye, FileText, Files, Hourglass, Plus, Search, X } from "lucide-react";
import { insightTopics, type InsightTopic } from "@/data/blog-topics";
import { dateLabel, editorialDay, rangeStart, totals, type TrafficRange } from "@/lib/editorial/traffic-dates";
import type { DashboardData, DashboardPost } from "./dashboard-data";
import { DashboardHeader, SampleMode, TrafficNote } from "./dashboard-shared";
import { editorialRequest } from "./api";
import styles from "./dashboard.module.css";
import workspace from "./workspace.module.css";

const statuses = { draft: "Draft", review: "In review", approved: "Approved", published: "Published" } as const;
type Status = keyof typeof statuses;

function editorialStatus(post: DashboardPost): Status {
  return post.liveRevision === post.revision ? "published" : post.stage;
}

export function PostsList({ entries, traffic, isolated }: DashboardData) {
  const router = useRouter();
  const [status, setStatus] = useState("");
  const [topic, setTopic] = useState("");
  const [query, setQuery] = useState("");
  const [date, setDate] = useState("");
  const [sort, setSort] = useState<"recent" | "views">("recent");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const views = totals(traffic, 30);
  const count = (p: DashboardPost) => traffic.started && p.hasPublication ? views.get(p.id) ?? 0 : null;
  const search = query.trim().toLowerCase();
  const earliest = date ? rangeStart(traffic.today, Number(date) as TrafficRange) : "";
  const filters = [
    search && ["Search · " + query.trim(), () => setQuery("")],
    topic && [insightTopics[topic as InsightTopic].label, () => setTopic("")],
    status && [statuses[status as Status], () => setStatus("")],
    date && ["Updated in last " + date + " days", () => setDate("")],
  ].filter(Boolean) as [string, () => void][];
  const clear = () => { setQuery(""); setTopic(""); setStatus(""); setDate(""); };
  const matches = entries.filter((post) =>
    (!status || (status === "published" ? !!post.liveSlug : editorialStatus(post) === status)) &&
    (!topic || post.topic === topic) &&
    (!earliest || (editorialDay(post.updated) >= earliest && editorialDay(post.updated) <= traffic.today)) &&
    (!search || [post.title, post.slug, post.liveSlug].join(" ").toLowerCase().includes(search)),
  ).sort((a, b) => (sort === "views" ? (count(b) ?? -1) - (count(a) ?? -1) : 0) ||
    b.updated.localeCompare(a.updated) || a.id.localeCompare(b.id));
  const cards = [
    ["All posts", entries.length, Files, "all"],
    ["Drafts", entries.filter((post) => editorialStatus(post) === "draft").length, FileText, "draft"],
    ["In review", entries.filter((post) => editorialStatus(post) === "review").length, Hourglass, "review"],
    ["Live articles", entries.filter((post) => post.liveSlug).length, CircleCheck, "published"],
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
      {cards.map(([label, value, Icon, metric]) => <button type="button" key={label} className={styles.metric} data-tone={metric} aria-pressed={metric === (status || "all")} onClick={() => setStatus(metric === "all" ? "" : metric)}>
        <Icon aria-hidden="true" size={17} /><strong>{value}</strong><span>{label}</span>
      </button>)}
    </section>
    {error && <p role="alert" className={workspace.error}>{error}</p>}
    <section className={styles.panel} aria-labelledby="library">
      <div className={styles.panelTitle}><div><h2 id="library">Post library</h2><p>Search by title or URL slug.</p></div><span className={styles.result} aria-live="polite">{matches.length} of {entries.length} posts</span></div>
      <div className={styles.controls}>
        <label className={styles.search}><Search size={19} aria-hidden="true" /><input type="search" aria-label="Search posts" value={query} placeholder="Search posts…" onChange={(event) => setQuery(event.target.value)} /></label>
        <label>Category<select value={topic} onChange={(event) => setTopic(event.target.value)} aria-label="Filter by category"><option value="">All categories</option>{Object.entries(insightTopics).map(([value, entry]) => <option key={value} value={value}>{entry.label}</option>)}</select></label>
        <label>Status<select value={status} onChange={(event) => setStatus(event.target.value)} aria-label="Filter by status"><option value="">All statuses</option>{Object.entries(statuses).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
        <label>Updated<select value={date} onChange={(event) => setDate(event.target.value)} aria-label="Filter by updated date"><option value="">Any time</option>{[7, 30, 90].map((n) => <option key={n} value={n}>Last {n} days</option>)}</select></label>
        <label>Sort by<select value={sort} onChange={(event) => setSort(event.target.value as typeof sort)} aria-label="Sort posts"><option value="recent">Most recent</option><option value="views">Most viewed</option></select></label>
      </div>
      {!!filters.length && <div className={styles.filterBar} aria-label="Active filters"><span>Active filters</span>{filters.map(([label, remove]) => <button type="button" key={label} onClick={remove} aria-label={"Remove filter: " + label}>{label}<X size={13} aria-hidden="true" /></button>)}<button type="button" className={styles.clear} onClick={clear}>Clear all</button></div>}
      {matches.length ? <table className={styles.table}>
        <caption className="sr-only">Posts with 30-day page views</caption>
        <thead><tr>
          <th scope="col">Article</th><th scope="col">Category</th><th scope="col">Status</th>
          <th scope="col" aria-sort={sort === "recent" ? "descending" : "none"}><button type="button" onClick={() => setSort("recent")}>Updated {sort === "recent" && <ArrowDown size={13} aria-hidden="true" />}</button></th>
          <th scope="col" aria-sort={sort === "views" ? "descending" : "none"}><button type="button" onClick={() => setSort("views")}>Views · 30d {sort === "views" && <ArrowDown size={13} aria-hidden="true" />}</button></th>
          <th scope="col">Actions</th>
        </tr></thead>
        <tbody>
          {matches.map((post) => {
            const state = editorialStatus(post);
            const title = post.title || "Untitled post";
            const value = count(post);
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
      </table> : <div className={styles.empty}><Search size={25} aria-hidden="true" /><h3>{entries.length ? "No matching posts" : "No posts yet"}</h3><p>{entries.length ? "Try a different search or remove a filter." : "Create a post to get your editorial queue started."}</p><button className={workspace.secondary} type="button" onClick={entries.length ? clear : create}>{entries.length ? "Clear filters" : "Create a post"}</button></div>}
      <TrafficNote traffic={traffic} />
    </section>
  </div>;
}
