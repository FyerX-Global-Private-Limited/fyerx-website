"use client";

import { useState } from "react";
import { Activity, ArrowRight, BarChart3, Eye, Files } from "lucide-react";
import { dateLabel, rangeDays, totals, trafficRanges, type TrafficRange } from "@/lib/editorial/traffic-dates";
import { insightTopics } from "@/data/blog-topics";
import type { DashboardData } from "../dashboard-data";
import { DashboardHeader, SampleMode, TrafficNote } from "../dashboard-shared";
import styles from "../dashboard.module.css";

const number = (value: number) => value.toLocaleString("en-IN");

export function AnalyticsDashboard({ entries, traffic, isolated, initialPost }: DashboardData & { initialPost: string }) {
  const [days, setDays] = useState<TrafficRange>(30);
  const articles = entries.filter((entry) => entry.hasPublication);
  const [selected, setSelected] = useState(articles.some((item) => item.id === initialPost) ? initialPost : "");
  const daysShown = rangeDays(traffic.today, days);
  const byDay = new Map<string, number>();
  for (const row of traffic.rows) {
    if (!selected || row.id === selected) byDay.set(row.day, (byDay.get(row.day) ?? 0) + row.views);
  }
  const measured = traffic.started ? daysShown.filter((day) => day >= traffic.started!) : [];
  const daysWithCounts = measured.map((day) => ({ day, views: byDay.get(day) ?? 0 }));
  const total = daysWithCounts.reduce((sum, row) => sum + row.views, 0);
  const peak = Math.max(0, ...daysWithCounts.map((row) => row.views));
  const ceiling = Math.max(4, Math.ceil(peak / 4) * 4);
  const daily = totals(traffic, days);
  const top = articles.map((post) => ({ post, count: daily.get(post.id) ?? 0 })).sort((a, b) => b.count - a.count || a.post.title.localeCompare(b.post.title));
  const measuredCount = measured.length;
  const metrics = [
    { label: "Page views", value: total, Icon: Eye },
    { label: "Average daily views", value: measuredCount ? Math.round(total / measuredCount * 10) / 10 : 0, Icon: Activity },
    { label: "Articles with views", value: top.filter((row) => row.count > 0 && (!selected || row.post.id === selected)).length, Icon: Files },
  ];
  const root = "/editorial/analytics" + (selected ? "?post=" + encodeURIComponent(selected) : "");

  return <div className={styles.dashboard}>
    <DashboardHeader title="Analytics" description="See how often published articles are read and which posts draw interest." actions={<span className={styles.heroStatus}><BarChart3 size={17} aria-hidden="true" /> Article traffic</span>} />
    <SampleMode isolated={isolated} traffic={traffic} path={root} />
    <section className={styles.analyticsControls} aria-label="Traffic filters">
      <div className={styles.rangeButtons} aria-label="Date range">
        {trafficRanges.map((range) => <button type="button" key={range} aria-pressed={days === range} onClick={() => setDays(range)}>{range} days</button>)}
      </div>
      <label>Article<select value={selected} onChange={(event) => setSelected(event.target.value)} aria-label="Filter traffic by article">
        <option value="">All tracked articles</option>{articles.map((article) => <option key={article.id} value={article.id}>{article.title || "Untitled post"}</option>)}
      </select></label>
    </section>
    <section className={styles.metrics} data-columns="3" aria-label="Traffic summary">
      {metrics.map(({ label, value, Icon }) => <div className={styles.metric} key={label}><Icon size={17} aria-hidden="true" /> <strong>{traffic.started ? number(value) : "—"}</strong><span>{label}</span></div>)}
    </section>
    <div className={styles.analyticsGrid}>
      <section className={styles.panel} aria-labelledby="trend">
        <div className={styles.panelTitle}><div><h2 id="trend">Traffic trend</h2><p>{dateLabel(daysShown[0])} – {dateLabel(traffic.today)} · Daily page views</p></div></div>
        {traffic.started && total > 0 ? <>
          <div className={styles.chart}>
            <div aria-hidden="true" className={styles.chartScale}>{[ceiling, ceiling * .75, ceiling / 2, ceiling / 4, 0].map((tick) => <span key={tick}>{number(tick)}</span>)}</div>
            <div className={styles.chartInner}>
              <div className={styles.bars} aria-hidden="true">
                {daysShown.map((day) => {
                  const value = byDay.get(day) ?? 0;
                  return <div key={day} data-covered={day >= traffic.started!} title={`${dateLabel(day)} · ${day >= traffic.started! ? number(value) + " views" : "Outside measurement"}`}><i style={{ height: (value / ceiling * 100) + "%" }} /></div>;
                })}
              </div>
              <div className={styles.chartDates}><span>{dateLabel(daysShown[0])}</span><span>{dateLabel(daysShown[Math.floor(days / 2)])}</span><span>{dateLabel(traffic.today)}</span></div>
            </div>
          </div>
          <details className={styles.daily}><summary>Daily values</summary><ul>{daysWithCounts.map(({ day, views }) => <li key={day}><time dateTime={day}>{dateLabel(day)}</time><span>{number(views)}</span></li>)}</ul></details>
        </> : <div className={styles.empty}><Activity size={25} aria-hidden="true" /><h3>{traffic.started ? "No views in this range" : "Traffic unavailable"}</h3><p>{traffic.started ? "Page views appear here when readers open published articles." : "Daily counts cannot be loaded right now."}</p></div>}
        <TrafficNote traffic={traffic} />
      </section>
      <section className={styles.panel} aria-labelledby="top">
        <div className={styles.panelTitle}><div><h2 id="top">Top articles</h2><p>Ranked by views across the blog</p></div><span className={styles.result}>{days} days</span></div>
        {traffic.started && top.some((row) => row.count > 0) ? <ol className={styles.topList}>
          {top.filter((row) => row.count > 0).map(({ post, count }, index) => <li key={post.id}>
            <button type="button" aria-pressed={selected === post.id} onClick={() => setSelected(selected === post.id ? "" : post.id)}>
              <span className={styles.rank}>{String(index + 1).padStart(2, "0")}</span>
              <span><strong>{post.title || "Untitled post"}</strong><small>{insightTopics[post.topic].label}{!post.liveSlug && " · Unpublished"}</small></span>
              <span className={styles.topCount}>{number(count)}<ArrowRight size={14} aria-hidden="true" /></span>
            </button>
          </li>)}
        </ol> : <div className={styles.empty}><Files size={25} aria-hidden="true" /><h3>{traffic.started ? "No articles with views yet" : "Rankings unavailable"}</h3><p>{traffic.started ? "Articles are ranked once recorded views are available." : "Rankings appear when traffic data is available."}</p></div>}
      </section>
    </div>
    <p className={styles.disclosure}>Counts are page opens. Repeat visits can count again.</p>
  </div>;
}
