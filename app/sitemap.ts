import type { MetadataRoute } from "next";
import { serviceDirectory } from "@/lib/service-directory";
import { locationPages, locationsPath } from "@/data/location-pages";
import { ALL_INDEXABLE_ENTRIES, SITE_URL } from "@/data/seo-metadata";

import { livePosts } from "@/lib/editorial/store";
import { publication } from "@/lib/editorial/metadata";

export const dynamic = "force-dynamic";

const LEGACY_SITEMAP_PATH =
  /\/(tag|category|author|wp-content|wp-admin|wp-includes|wp-json|blog)(\/|$)/i;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ALL_INDEXABLE_ENTRIES.filter(
    (entry) => entry.robots === "index,follow" && !LEGACY_SITEMAP_PATH.test(entry.path)
  ).map((entry) => ({
    url: entry.canonical,
  }));
  const blog = livePosts().flatMap((post) => {
    const page = publication(post);
    return page.indexable && page.canonical === page.url ? [{ url: page.url, lastModified: post.modified }] : [];
  });
  const listed = new Set(pages.map(page => page.url));
  const services = serviceDirectory.map(service => ({ url: SITE_URL + service.path })).filter(page => !listed.has(page.url));
  const locations = [locationsPath, ...locationPages.map(page => "/" + page.slug)]
    .map(path => ({ url: SITE_URL + path }))
    .filter(page => !listed.has(page.url));
  return [...pages, ...services, ...locations, ...blog];
}

