import type { MetadataRoute } from "next";
import { ALL_INDEXABLE_ENTRIES, SITE_URL } from "@/data/seo-metadata";

import { serviceDirectory } from "@/lib/service-directory";
import { livePosts } from "@/lib/editorial/store";
import { publication } from "@/lib/editorial/metadata";

export const dynamic = "force-dynamic";

const LEGACY_SITEMAP_PATH =
  /\/(tag|category|author|wp-content|wp-admin|wp-includes|wp-json|blog)(\/|$)/i;

export default function sitemap(): MetadataRoute.Sitemap {
  const site = ALL_INDEXABLE_ENTRIES.filter(
    (entry) => entry.robots === "index,follow" && !LEGACY_SITEMAP_PATH.test(entry.path)
  ).map((entry) => ({
    url: entry.canonical,
  }));
  const blog = livePosts().flatMap((post) => {
    const page = publication(post);
    return page.indexable && page.canonical === page.url ? [{ url: page.url, lastModified: post.modified }] : [];
  });
  const listed = new Set(site.map(item => item.url));
  const services = serviceDirectory.map(entry => ({ url: SITE_URL + entry.path })).filter(item => !listed.has(item.url));
  return [...site, ...services, ...blog];
}
