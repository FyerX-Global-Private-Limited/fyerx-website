import type { InsightTopic } from "@/data/blog-topics";
import { getInsightTopic } from "@/data/blog-topics";

export const mediaId = /^[a-f0-9]{8}(?:-[a-f0-9]{4}){3}-[a-f0-9]{12}$/;
export const mediaPrefix = "/api/editorial/media/";
const sampleImages = ["/updatedmainpage/section9-2.webp", "/updatedmainpage/section9-3.webp"];
export const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export type Mark = { type: string; attrs?: { href: string } };
export type Node = { type: string; attrs?: Record<string, string | number>; text?: string; marks?: Mark[]; content?: Node[] };
export type Media = { src: string; alt: string; caption: string };
export type Draft = {
  title: string; description: string; slug: string; topic: InsightTopic; featured?: boolean; author: string;
  cover: Media; body: Node;
  seo: { title: string; description: string; canonical: string; socialTitle: string; socialDescription: string; socialImage: string; focusPhrase?: string; indexable: boolean };
};

export function blankDraft(): Draft {
  return {
    title: "", description: "", slug: "", topic: "talent", featured: false, author: "FyerX Editorial",
    cover: { src: "", alt: "", caption: "" }, body: { type: "doc", content: [{ type: "paragraph" }] },
    seo: { title: "", description: "", canonical: "", socialTitle: "", socialDescription: "", socialImage: "", indexable: true },
  };
}

function record(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("Invalid document field");
  return value as Record<string, unknown>;
}

function string(value: unknown, max: number) {
  if (typeof value !== "string" || value.length > max) throw new Error("A field is invalid or too long");
  return value;
}

export function safeLink(value: string) {
  if (value.startsWith("/") && !value.startsWith("//") && !/[\\\s]/.test(value)) return true;
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) && !url.username && !url.password;
  } catch {
    return false;
  }
}

function source(value: unknown) {
  const src = string(value, 150);
  if (!src || sampleImages.includes(src) || (src.startsWith(mediaPrefix) && mediaId.test(src.slice(mediaPrefix.length)))) return src;
  throw new Error("Choose an uploaded image");
}

function media(value: unknown): Media {
  const m = record(value);
  return { src: source(m.src), alt: string(m.alt ?? "", 300), caption: string(m.caption ?? "", 400) };
}

const children: Record<string, string[]> = {
  doc: ["paragraph", "heading", "blockquote", "bulletList", "orderedList", "inlineImage"],
  paragraph: ["text", "hardBreak"], heading: ["text", "hardBreak"],
  blockquote: ["paragraph", "heading", "bulletList", "orderedList"],
  bulletList: ["listItem"], orderedList: ["listItem"], listItem: ["paragraph", "bulletList", "orderedList", "blockquote"],
};

export function walk(node: Node, visit: (node: Node) => void) {
  visit(node);
  node.content?.forEach((child) => walk(child, visit));
}

export function mediaSources(draft: Draft) {
  const urls = [draft.cover.src, draft.seo.socialImage];
  walk(draft.body, (node) => {
    if (node.type === "inlineImage") urls.push(String(node.attrs?.src));
  });
  return [...new Set(urls.filter((url) => url.startsWith(mediaPrefix)))].map((url) => url.slice(mediaPrefix.length));
}

export function validateDraft(value: unknown): Draft {
  const d = record(value);
  const seo = record(d.seo);
  const topic = getInsightTopic(string(d.topic, 20));
  const slug = string(d.slug, 90).trim();
  if (!topic || (slug && (!slugPattern.test(slug) || getInsightTopic(slug) || slug === "featured"))) throw new Error("Use a lowercase, hyphenated slug distinct from a category");
  const canonical = string(seo.canonical, 400).trim();
  if (canonical && (!canonical.startsWith("https://") || !safeLink(canonical) || /[#?]/.test(canonical))) {
    throw new Error("Use a complete HTTPS canonical URL without a query or fragment");
  }
  if (typeof seo.indexable !== "boolean") throw new Error("Choose an indexability setting");

  let count = 0;
  function clean(input: unknown, parent: string, depth: number): Node {
    if (++count > 3000 || depth > 12) throw new Error("The document exceeds the editing limit");
    const n = record(input);
    const type = string(n.type, 30);
    if (parent ? !children[parent]?.includes(type) : type !== "doc") throw new Error("Unsupported document structure");
    if (type === "text") {
      const text = string(n.text, 30000);
      if (!Array.isArray(n.marks ?? []) || (n.marks as unknown[] | undefined)?.length && (n.marks as unknown[]).length > 3) throw new Error("Invalid text formatting");
      const marks = ((n.marks ?? []) as unknown[]).map((input) => {
        const m = record(input);
        const type = string(m.type, 10);
        if (type === "link") {
          const href = string(record(m.attrs).href, 1000);
          if (!safeLink(href)) throw new Error("Links must use HTTP, HTTPS or a site-relative path");
          return { type, attrs: { href } };
        }
        if (!["bold", "italic"].includes(type)) throw new Error("Unsupported text formatting");
        return { type };
      });
      return { type, text, ...(marks.length ? { marks } : {}) };
    }
    if (type === "inlineImage") {
      const image = media(n.attrs);
      if (!image.src) throw new Error("Upload an image before inserting it");
      return { type, attrs: image };
    }
    if (type === "hardBreak") return { type };
    if (!Array.isArray(n.content ?? [])) throw new Error("Invalid document blocks");
    const content = ((n.content ?? []) as unknown[]).map((child) => clean(child, type, depth + 1));
    const attrs = type === "heading" ? { level: record(n.attrs).level === 3 ? 3 : 2 } : undefined;
    return { type, ...(attrs ? { attrs } : {}), ...(content.length ? { content } : {}) };
  }

  return {
    title: string(d.title, 160).trim(), description: string(d.description, 500).trim(),
    slug, topic, featured: d.featured === true, author: string(d.author, 100).trim(), cover: media(d.cover),
    body: clean(d.body, "", 0),
    seo: {
      title: string(seo.title, 160).trim(), description: string(seo.description, 500).trim(),
      canonical, socialTitle: string(seo.socialTitle, 160).trim(),
      socialDescription: string(seo.socialDescription, 500).trim(),
      socialImage: source(seo.socialImage), focusPhrase: string(seo.focusPhrase ?? "", 120).trim(), indexable: seo.indexable,
    },
  };
}

export function publishIssues(draft: Draft) {
  const issues = [];
  if (draft.slug === "featured") issues.push("Choose a URL slug other than featured.");
  if (!draft.title || !draft.slug || !draft.description || !draft.author) issues.push("Add a title, slug, summary and author.");
  if (!draft.cover.src || !draft.cover.alt.trim()) issues.push("Add a cover image and describe it in alt text.");
  let hasText = false;
  let missingAlt = false;
  walk(draft.body, (node) => {
    if (node.text?.trim()) hasText = true;
    if (node.type === "inlineImage" && !String(node.attrs?.alt ?? "").trim()) missingAlt = true;
  });
  if (!hasText) issues.push("Write the article body.");
  if (missingAlt) issues.push("Describe each inline image in alt text.");
  return issues;
}
