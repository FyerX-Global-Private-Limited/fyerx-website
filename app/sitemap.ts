import type { MetadataRoute } from "next";
import { ALL_INDEXABLE_ENTRIES } from "@/data/seo-metadata";

const LEGACY_SITEMAP_PATH =
  /\/(tag|category|author|wp-content|wp-admin|wp-includes|wp-json|blog)(\/|$)/i;

export default function sitemap(): MetadataRoute.Sitemap {
  return ALL_INDEXABLE_ENTRIES.filter(
    (entry) => entry.robots === "index,follow" && !LEGACY_SITEMAP_PATH.test(entry.path)
  ).map((entry) => ({
    url: entry.canonical,
  }));
}
