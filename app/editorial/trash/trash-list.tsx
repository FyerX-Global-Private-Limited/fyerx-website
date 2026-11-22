"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { scheduleLabel } from "@/lib/editorial/traffic-dates";
import { editorialRequest } from "../api";
import dashboard from "../dashboard.module.css";
import workspace from "../workspace.module.css";
import styles from "../featured/featured.module.css";

export function TrashList({ articles }: { articles: { id: string; title: string; trashed: string }[] }) {
  const router = useRouter();
  const [busy, setBusy] = useState("");
  const [error, setError] = useState("");

  async function restore(id: string) {
    setBusy(id);
    setError("");
    try {
      await editorialRequest("post-actions", { ids: [id], action: "restore" });
      router.push("/editorial/posts/" + id);
      router.refresh();
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : "The draft could not be restored.");
      setBusy("");
    }
  }

  return <>
    <div className={dashboard.panelTitle}><h2>Deleted posts</h2><Link href="/editorial" className={workspace.secondary}>Back to posts</Link></div>
    {error && <p role="alert" className={workspace.error}>{error}</p>}
    {articles.length ? <ul className={styles.list}>
      {articles.map((article) => (
        <li key={article.id}>
          <div className={styles.article} style={{ gridColumn: "1 / 3" }}>
            <strong>{article.title || "Untitled post"}</strong>
            <time dateTime={article.trashed}>{scheduleLabel(article.trashed)}</time>
          </div>
          <button type="button" className={workspace.secondary} disabled={!!busy} onClick={() => restore(article.id)}>{busy === article.id ? "Restoring…" : "Restore"}</button>
        </li>
      ))}
    </ul> : <p className={dashboard.note}>Trash is empty.</p>}
  </>;
}
