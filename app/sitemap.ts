import type { MetadataRoute } from "next";
import { ALL_INDEXABLE_ENTRIES } from "@/data/seo-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  return ALL_INDEXABLE_ENTRIES.filter((entry) => entry.robots === "index,follow").map(
    (entry) => ({
      url: entry.canonical,
    })
  );
}
