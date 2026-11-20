"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Eye, ImagePlus, Save } from "lucide-react";
import { useEffect, useState } from "react";
import { insightTopics, type InsightTopic } from "@/data/blog-topics";
import { publishIssues, type Draft } from "@/lib/editorial/document";
import type { Post, Role } from "@/lib/editorial/store";
import { editorialRequest } from "./api";
import { RichEditor, type ImageRequest } from "./rich-editor";
import { ImageDialog } from "./image-dialog";
import { SeoPanel } from "./seo-panel";
import styles from "./workspace.module.css";

const stage = { draft: "Draft", review: "In review", approved: "Approved" };
const slugify = (title: string) => title.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").slice(0, 90).replace(/^-|-$/g, "");

export function PostEditor({ initial, role, origin }: { initial: Post; role: Role; origin: string }) {
  const [saved, setSaved] = useState(initial);
  const [draft, setDraft] = useState(initial.draft);
  const [pane, setPane] = useState<"write" | "seo">("write");
  const [busy, setBusy] = useState("");
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState<ImageRequest | null>(null);
  const dirty = JSON.stringify(draft) !== JSON.stringify(saved.draft);
  const liveCurrent = saved.liveRevision === saved.revision;
  const issues = publishIssues(draft);

  useEffect(() => {
    if (!dirty) return;
    const guard = (event: BeforeUnloadEvent) => { event.preventDefault(); };
    window.addEventListener("beforeunload", guard);
    return () => window.removeEventListener("beforeunload", guard);
  }, [dirty]);

  function update(values: Partial<Draft>) {
    setDraft((current) => ({ ...current, ...values }));
    setNotice("");
  }

  async function doAction(action: string, label: string) {
    setBusy(action);
    setError("");
    setNotice("");
    try {
      const result = await editorialRequest(`posts/${saved.id}/${action}`, {
        version: saved.version,
        ...(action === "save" ? { draft } : {}),
      });
      setSaved(result.post);
      setDraft(result.post.draft);
      setNotice(label);
    } catch (failure) {
      setError((failure as Error).message);
    } finally {
      setBusy("");
    }
  }

  return <>
    <div className={styles.editNav}>
      <Link href="/editorial" onClick={(event) => {
        if (dirty && !window.confirm("Leave without saving your changes?")) event.preventDefault();
      }}><ArrowLeft size={16} /> All posts</Link>
      <span>Revision {saved.revision}</span>
    </div>
    <div className={styles.pageHead}>
      <div><p className={styles.kicker}>Post editor</p><h1>{saved.draft.title || "Untitled post"}</h1><p>{liveCurrent ? "Published" : stage[saved.stage]}{saved.liveSlug && !liveCurrent ? " · Earlier revision live" : ""}</p></div>
      <div className={styles.lineActions}>
        {dirty ? <button type="button" className={styles.secondary} disabled><Eye size={16} /> Preview</button> : <Link className={styles.secondary} prefetch={false} href={"/editorial/preview/" + saved.id}><Eye size={16} /> Preview</Link>}
        <button type="button" className={styles.primary} disabled={!dirty || !!busy} onClick={() => doAction("save", "Draft saved.")}><Save size={16} /> {busy === "save" ? "Saving…" : "Save changes"}</button>
      </div>
    </div>
    <div className={styles.saveLine} role="status">{busy ? "Working…" : dirty ? "Unsaved changes" : notice || "All changes saved"}</div>
    {error && <p className={styles.error} role="alert">{error}</p>}
    <div className={styles.workflow}>
      <div>
        <strong>Publication workflow</strong>
        <p>{saved.liveSlug
          ? `Revision ${saved.liveRevision} is visible on the blog. ${liveCurrent ? "It matches this saved revision." : "Draft changes remain private."}`
          : "This post is private until an owner publishes an approved revision."}</p>
        {dirty && <p>Save your changes before previewing or moving this revision forward.</p>}
        {!dirty && saved.stage === "review" && role !== "owner" && <p>Waiting for owner approval.</p>}
        {!dirty && saved.stage === "approved" && role === "editor" && !liveCurrent && <p>Waiting for a publisher.</p>}
        {!dirty && saved.stage === "draft" && issues.length > 0 && <ul>{issues.map((issue) => <li key={issue}>{issue}</li>)}</ul>}
      </div>
      <div className={styles.lineActions}>
        {saved.liveSlug && <Link className={styles.secondary} href={"/blog/" + saved.liveSlug}>View live <ExternalLink size={15} /></Link>}
        {saved.stage === "draft" && <button type="button" className={styles.secondary} disabled={dirty || !!busy || !!issues.length} onClick={() => doAction("submit", "Sent for owner review.")}>Send for review</button>}
        {role === "owner" && saved.stage === "review" && <button type="button" className={styles.primary} disabled={dirty || !!busy} onClick={() => doAction("approve", `Revision ${saved.revision} approved.`)}>Approve revision {saved.revision}</button>}
        {role !== "editor" && saved.stage === "approved" && !liveCurrent && <button type="button" className={styles.primary} disabled={dirty || !!busy} onClick={() => doAction("publish", `Revision ${saved.revision} published.`)}>Publish revision {saved.revision}</button>}
        {role === "owner" && saved.liveSlug && <button type="button" className={styles.secondary} disabled={dirty || !!busy} onClick={() => {
          if (window.confirm("Remove this article from the blog?")) void doAction("unpublish", "Post unpublished.");
        }}>Unpublish</button>}
      </div>
    </div>
    <div className={styles.editorTabs} aria-label="Post settings">
      <button type="button" aria-pressed={pane === "write"} onClick={() => setPane("write")}>Write</button>
      <button type="button" aria-pressed={pane === "seo"} onClick={() => setPane("seo")}>Search & social</button>
    </div>
    <fieldset className={styles.editorFields} disabled={!!busy} hidden={pane !== "write"}>
      <div className={styles.writing}>
        <label>Article title<input className={styles.titleInput} value={draft.title} maxLength={160} onChange={(event) => {
          const title = event.target.value;
          update({ title, ...(!draft.slug || draft.slug === slugify(draft.title) && !saved.liveSlug ? { slug: slugify(title) } : {}) });
        }} /></label>
        <label>Summary<textarea aria-label="Summary" rows={2} value={draft.description} maxLength={500} onChange={(event) => update({ description: event.target.value })} /></label>
        <div className={styles.twoFields}>
          <label>Category<select aria-label="Category" value={draft.topic} onChange={(event) => update({ topic: event.target.value as InsightTopic })}>
            {Object.entries(insightTopics).map(([topic, item]) => <option key={topic} value={topic}>{item.label}</option>)}
          </select></label>
          <label>Author<input value={draft.author} maxLength={100} onChange={(event) => update({ author: event.target.value })} /></label>
        </div>
        <div className={styles.coverEditor}>
          {draft.cover.src && <Image src={draft.cover.src} alt={draft.cover.alt} width={180} height={100} unoptimized />}
          <div><strong>Cover image</strong>{draft.cover.alt && <p>{draft.cover.alt}</p>}
            <button type="button" className={styles.secondary} onClick={() => setImage({ label: "Cover image", media: draft.cover, allowCaption: true, apply: (cover) => update({ cover }) })}><ImagePlus size={16} /> {draft.cover.src ? "Edit cover" : "Add cover"}</button>
          </div>
        </div>
        <h2>Article body</h2>
        <div inert={!!busy}><RichEditor body={draft.body} onChange={(body) => update({ body })} onImage={setImage} /></div>
      </div>
    </fieldset>
    <fieldset className={styles.editorFields} disabled={!!busy} hidden={pane !== "seo"}>
      <div className={styles.slugBox}>
        <label>URL slug<input value={draft.slug} maxLength={90} aria-describedby="slug-help" onChange={(event) => update({ slug: event.target.value })} /></label>
        <p id="slug-help" className={styles.hint}>Use lowercase words and hyphens. Publishing a changed slug redirects the previous URL.</p>
      </div>
      <SeoPanel draft={draft} origin={origin} update={(seo) => update({ seo: { ...draft.seo, ...seo } })} onImage={setImage} />
    </fieldset>
    {image && <ImageDialog request={image} close={() => setImage(null)} />}
  </>;
}
