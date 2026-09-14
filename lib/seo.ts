import type { Metadata } from "next";
import {
  CONTACT_NOINDEX_FORMS,
  SITE_OG_IMAGE,
  SITE_URL,
  getSeoEntry,
  type SeoEntry,
} from "@/data/seo-metadata";

function robotsFrom(entry: SeoEntry): Metadata["robots"] {
  const index = entry.robots.startsWith("index");
  return {
    index,
    follow: true,
    googleBot: {
      index,
      follow: true,
    },
  };
}

export function buildMetadata(entry: SeoEntry): Metadata {
  return {
    title: { absolute: entry.title },
    description: entry.description,
    alternates: { canonical: entry.canonical },
    robots: robotsFrom(entry),
    openGraph: {
      title: entry.title,
      description: entry.description,
      url: entry.canonical,
      type: entry.ogType === "article" ? "article" : "website",
      siteName: "FyerX",
      locale: "en_IN",
      images: [{ url: SITE_OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title: entry.title,
      description: entry.description,
      images: [SITE_OG_IMAGE],
    },
  };
}

export function metadataForPath(path: string): Metadata {
  const entry = getSeoEntry(path);
  if (!entry) {
    return {
      title: { absolute: "FyerX" },
      robots: { index: false, follow: true },
    };
  }
  return buildMetadata(entry);
}

export function contactPageMetadata(form?: string): Metadata {
  const contact = getSeoEntry("/contact");
  if (!contact) return metadataForPath("/contact");

  const isNoindexForm =
    typeof form === "string" &&
    (CONTACT_NOINDEX_FORMS as readonly string[]).includes(form);

  if (!isNoindexForm) return buildMetadata(contact);

  return buildMetadata({
    ...contact,
    robots: "noindex,follow",
    canonical: `${SITE_URL}/contact`,
  });
}

export const NOINDEX_METADATA: Metadata = {
  title: { absolute: "FyerX" },
  robots: { index: false, follow: false },
};
