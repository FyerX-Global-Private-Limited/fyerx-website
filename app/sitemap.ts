import type { MetadataRoute } from "next";
import { serviceDirectory } from "@/lib/service-directory";
import { ALL_INDEXABLE_ENTRIES, SITE_URL } from "@/data/seo-metadata";

const LEGACY_SITEMAP_PATH =
  /\/(tag|category|author|wp-content|wp-admin|wp-includes|wp-json|blog)(\/|$)/i;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ALL_INDEXABLE_ENTRIES.filter(
    (entry) => entry.robots === "index,follow" && !LEGACY_SITEMAP_PATH.test(entry.path)
  ).map((entry) => ({
    url: entry.canonical,
  }));
  const listed = new Set(pages.map(page => page.url));
  return [...pages, ...serviceDirectory.map(service => ({ url: SITE_URL + service.path })).filter(page => !listed.has(page.url))];
}
