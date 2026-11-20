import type { Metadata } from "next";
import { insightTopics } from "@/data/blog-topics";
import { editorialOrigin } from "./config";
import type { LivePost } from "./store";

export function publication(post: LivePost) {
  const { draft } = post;
  const origin = editorialOrigin();
  const url = origin + "/blog/" + draft.slug;
  const canonical = draft.seo.canonical || url;
  const title = draft.seo.title || draft.title;
  const description = draft.seo.description || draft.description;
  const socialTitle = draft.seo.socialTitle || title;
  const socialDescription = draft.seo.socialDescription || description;
  const image = new URL(draft.seo.socialImage || draft.cover.src, origin).href;
  const indexable = draft.seo.indexable;
  return { origin, url, canonical, title, description, socialTitle, socialDescription, image, indexable };
}

export function postMetadata(post: LivePost): Metadata {
  const page = publication(post);
  return {
    title: page.title, description: page.description, alternates: { canonical: page.canonical },
    robots: { index: page.indexable, follow: page.indexable },
    openGraph: {
      type: "article", url: page.canonical, siteName: "FyerX", locale: "en_IN",
      title: page.socialTitle, description: page.socialDescription, images: [page.image],
      publishedTime: post.published, modifiedTime: post.modified, section: insightTopics[post.draft.topic].label,
    },
    twitter: { card: "summary_large_image", title: page.socialTitle, description: page.socialDescription, images: [page.image] },
  };
}

export function postStructuredData(post: LivePost) {
  const page = publication(post);
  const { draft } = post;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting", headline: draft.title, description: page.description,
        mainEntityOfPage: page.canonical, image: page.image,
        author: { "@type": "Organization", name: draft.author },
        publisher: { "@type": "Organization", name: "FyerX" },
        datePublished: post.published, dateModified: post.modified,
        articleSection: insightTopics[draft.topic].label,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "FyerX Blogs", item: page.origin + "/blog" },
          { "@type": "ListItem", position: 2, name: insightTopics[draft.topic].label, item: page.origin + "/blog/" + draft.topic },
          { "@type": "ListItem", position: 3, name: draft.title, item: page.url },
        ],
      },
    ],
  };
}
