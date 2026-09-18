/**
 * Legacy WordPress URLs still indexed for fyerx.com.
 * 301 only to the closest live Next.js page. 410 for gone/system paths.
 * Do not send unmatched URLs to the homepage.
 */

const LIVE_MARKETING_CASE_STUDIES = new Set([
  "wegofin",
  "avekshaa",
  "trndigital",
  "kaypee-space",
  "adro",
  "onroadz",
]);

export const WORDPRESS_GONE_PREFIXES = [
  "/wp-admin",
  "/wp-content",
  "/wp-includes",
  "/wp-json",
  "/wp-login.php",
  "/xmlrpc.php",
  "/index.php",
  "/feed",
  "/comments",
  "/author",
  "/tag",
  "/category",
  "/trackback",
  "/home",
  "/uncategorized",
  "/page",
] as const;

const EXACT_REDIRECTS: Record<string, string> = {
  "/about-us": "/about",
  "/the-story-that-goes-beyond-fyerx": "/about",
  "/contact-us": "/contact",
  "/digital-marketing": "/marketing/services",
  "/services": "/marketing/services",
  "/portfolio": "/marketing/case-studies",
  "/portfolio-all": "/marketing/case-studies",
  "/case-study": "/marketing/case-studies",
  "/case-studies": "/marketing/case-studies",
  "/website-development-company-in-bangalore": "/technology",
  "/ecommerce-website-development-company-in-bangalore": "/technology",
};

export type WordpressLegacyAction =
  | { type: "gone" }
  | { type: "redirect"; destination: string };

export function wordpressLegacyAction(pathname: string): WordpressLegacyAction | null {
  const path = (pathname.replace(/\/+$/, "") || "/").toLowerCase();

  if (path === "/blog" || path.startsWith("/blog/")) {
    return { type: "gone" };
  }

  for (const prefix of WORDPRESS_GONE_PREFIXES) {
    if (path === prefix || path.startsWith(`${prefix}/`)) {
      return { type: "gone" };
    }
  }

  const exact = EXACT_REDIRECTS[path];
  if (exact) return { type: "redirect", destination: exact };

  if (path.startsWith("/services/")) {
    return { type: "redirect", destination: "/marketing/services" };
  }

  if (path.startsWith("/case-study/")) {
    const slug = path.slice("/case-study/".length);
    if (LIVE_MARKETING_CASE_STUDIES.has(slug)) {
      return { type: "redirect", destination: `/marketing/case-studies/${slug}` };
    }
    return { type: "redirect", destination: "/marketing/case-studies" };
  }

  return null;
}

/** Permanent 301s for next.config.ts — destinations are live Next.js routes only. */
export function wordpressPermanentRedirects() {
  const exact = Object.entries(EXACT_REDIRECTS).map(([source, destination]) => ({
    source,
    destination,
    permanent: true as const,
  }));

  const caseStudies = [...LIVE_MARKETING_CASE_STUDIES].map((slug) => ({
    source: `/case-study/${slug}`,
    destination: `/marketing/case-studies/${slug}`,
    permanent: true as const,
  }));

  return [
    ...exact,
    ...caseStudies,
    {
      source: "/services/:path*",
      destination: "/marketing/services",
      permanent: true as const,
    },
    {
      source: "/case-study/:slug",
      destination: "/marketing/case-studies",
      permanent: true as const,
    },
  ];
}
