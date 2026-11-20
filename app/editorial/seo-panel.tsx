"use client";

import Image from "next/image";
import { Check, Circle, Globe2, ImagePlus } from "lucide-react";
import { publishIssues, walk, type Draft } from "@/lib/editorial/document";
import type { ImageRequest } from "./rich-editor";
import styles from "./workspace.module.css";

export function SeoPanel({ draft, origin, update, onImage }: {
  draft: Draft; origin: string; update: (values: Partial<Draft["seo"]>) => void;
  onImage: (image: ImageRequest) => void;
}) {
  const { seo } = draft;
  const title = seo.title || draft.title || "Your page title";
  const summary = seo.description || draft.description || "Your meta description will appear here.";
  const socialImage = seo.socialImage || draft.cover.src;
  const url = origin + "/blog/" + (draft.slug || "your-article");
  let heading = false;
  let internalLink = false;
  walk(draft.body, (node) => {
    if (node.type === "heading" && node.content?.some((child) => child.text?.trim())) heading = true;
    if (node.marks?.some((mark) => mark.type === "link" && mark.attrs?.href.startsWith("/") && !mark.attrs.href.startsWith("//"))) internalLink = true;
  });
  const issues = publishIssues(draft);
  const checks = [
    [!!seo.title && seo.title.length <= 60, "Write a specific SEO title around 60 characters or fewer."],
    [seo.description.length >= 70 && seo.description.length <= 160, "Summarise the article in a meta description of about 70–160 characters."],
    [heading, "Break up the article with descriptive section headings."],
    [!issues.some((issue) => issue.includes("alt text")), "Add descriptive alt text to the cover and inline images."],
    [internalLink, "Link to a useful related page on the FyerX site."],
  ] as const;

  return <section className={styles.seo} aria-labelledby="seo-title">
    <div className={styles.panelHead}><Globe2 size={20} aria-hidden="true" /><div><h2 id="seo-title">Search & social</h2><p>Control how this post appears in search and shared links.</p></div></div>
    <div className={styles.seoBody}>
      <div className={styles.seoColumn}>
      <h3>Search snippet</h3>
      <div className={styles.snippet}><small>{seo.canonical || url}</small><strong>{title}</strong><p>{summary}</p></div>
      <label>SEO title <small>{seo.title.length} / 60 suggested</small>
        <input value={seo.title} maxLength={160} placeholder={draft.title || "Use the article title"} onChange={(event) => update({ title: event.target.value })} />
      </label>
      <label>Meta description <small>{seo.description.length} / 160 suggested</small>
        <textarea aria-label="Meta description" rows={3} value={seo.description} maxLength={500} placeholder={draft.description || "Use the article summary"} onChange={(event) => update({ description: event.target.value })} />
      </label>
      <label>Focus phrase
        <input value={seo.focusPhrase ?? ""} maxLength={120} placeholder="Primary search phrase" onChange={(event) => update({ focusPhrase: event.target.value })} />
      </label>
      <label>Canonical URL
        <input value={seo.canonical} maxLength={400} type="url" placeholder="Automatic · this article’s URL" onChange={(event) => update({ canonical: event.target.value })} />
      </label>
      <p className={styles.hint}>Leave blank to use the article URL. Set a full HTTPS URL only when another page is the primary version.</p>
      <label className={styles.checkbox}><input type="checkbox" checked={seo.indexable} onChange={(event) => update({ indexable: event.target.checked })} /> Allow indexing after publication</label>
      </div>
      <div className={styles.seoColumn}>
      <h3>Social card</h3>
      <div className={styles.social}>
        {socialImage && <Image src={socialImage} alt="" width={600} height={315} unoptimized />}
        <div><small>FyerX Blogs</small><strong>{seo.socialTitle || title}</strong><p>{seo.socialDescription || summary}</p></div>
      </div>
      <label>Social title<input value={seo.socialTitle} maxLength={160} placeholder="Use the SEO title" onChange={(event) => update({ socialTitle: event.target.value })} /></label>
      <label>Social description<textarea aria-label="Social description" rows={2} value={seo.socialDescription} maxLength={500} placeholder="Use the meta description" onChange={(event) => update({ socialDescription: event.target.value })} /></label>
      <div className={styles.lineActions}>
        <button type="button" className={styles.secondary} onClick={() => onImage({ label: "Social image", media: { src: seo.socialImage, alt: "", caption: "" }, apply: (image) => update({ socialImage: image.src }) })}><ImagePlus size={16} /> Social image</button>
        {seo.socialImage && <button type="button" className={styles.textButton} onClick={() => update({ socialImage: "" })}>Use cover</button>}
      </div>
      </div>
      <div className={styles.seoChecks}>
      <h3>Editorial checks</h3>
      <ul className={styles.checks}>
        {checks.map(([passed, label]) => <li key={label} data-passed={passed}>
          {passed ? <Check size={15} aria-hidden="true" /> : <Circle size={14} aria-hidden="true" />}
          <span><span className="sr-only">{passed ? "Complete. " : "To do. "}</span>{label}</span>
        </li>)}
      </ul>
      </div>
    </div>
  </section>;
}
