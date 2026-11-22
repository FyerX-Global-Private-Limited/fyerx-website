"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { insightTopics } from "@/data/blog-topics";
import type { featuredArticles } from "@/lib/editorial/store";
import { editorialRequest } from "../api";
import dashboard from "../dashboard.module.css";
import workspace from "../workspace.module.css";
import styles from "./featured.module.css";

export function FeaturedOrder({ articles }: { articles: ReturnType<typeof featuredArticles> }) {
  const [order, setOrder] = useState(articles);
  const [saved, setSaved] = useState(articles);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const dirty = order.some((item, index) => item.id !== saved[index].id);

  function move(index: number, direction: number) {
    const target = index + direction;
    if (target < 0 || target >= order.length) return;
    const next = [...order];
    [next[index], next[target]] = [next[target], next[index]];
    setOrder(next);
    setNotice(`${next[target].title} moved to position ${target + 1}.`);
    setError("");
  }

  async function save() {
    setSaving(true);
    setError("");
    try {
      await editorialRequest("featured", { previous: saved.map(({ id }) => id), order: order.map(({ id }) => id) });
      setSaved(order);
      setNotice("Featured order saved.");
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : "Could not save the featured order.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className={dashboard.panel} aria-labelledby="featured-list">
      <div className={dashboard.panelTitle}>
        <div>
          <h2 id="featured-list">Published featured articles</h2>
          <p>Use the arrows to reorder. The homepage shows up to the first 10.</p>
        </div>
        {articles.length > 0 && <button type="button" className={workspace.primary} onClick={save} disabled={!dirty || saving}>{saving ? "Saving…" : "Save order"}</button>}
      </div>
      {order.length ? (
        <ol className={styles.list}>
          {order.map((article, index) => (
            <li key={article.id}>
              <div className={styles.position} aria-hidden="true">{index + 1}</div>
              <div className={styles.article}>
                <Link href={`/editorial/posts/${article.id}`}>{article.title}</Link>
                <span className={dashboard.chip} data-tone={article.topic}>{insightTopics[article.topic].label}</span>
              </div>
              <div className={styles.arrows}>
                <button type="button" aria-label={`Move up: ${article.title}`} disabled={saving || index === 0} onClick={() => move(index, -1)}><ArrowUp size={18} aria-hidden="true" /></button>
                <button type="button" aria-label={`Move down: ${article.title}`} disabled={saving || index === order.length - 1} onClick={() => move(index, 1)}><ArrowDown size={18} aria-hidden="true" /></button>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <div className={dashboard.empty}>
          <h3>No featured articles yet</h3>
          <p>Open a post, select “Feature this article when published,” and publish the revision.</p>
          <Link className={workspace.secondary} href="/editorial">Go to posts</Link>
        </div>
      )}
      {error && <p role="alert" className={styles.error}>{error}</p>}
      <p role="status" className={notice === "Featured order saved." ? styles.notice : "sr-only"}>{notice}</p>
    </section>
  );
}
