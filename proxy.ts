import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getInsightTopic } from "@/data/blog-topics";
import { editorialMode } from "@/lib/editorial/config";
import { wordpressLegacyAction } from "@/lib/wordpress-legacy";

function gone() {
  return new NextResponse("Gone", {
    status: 410,
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}

export function proxy(request: NextRequest) {
  try {
    const url = request.nextUrl.clone();
    const host = request.headers.get("host") ?? "";
    let changed = false;

    if (host.split(":")[0] === "www.fyerx.com") {
      url.protocol = "https:";
      url.hostname = "fyerx.com";
      url.port = "";
      changed = true;
    }

    let pathname = url.pathname;
    if (pathname.length > 1 && pathname.endsWith("/")) {
      pathname = pathname.replace(/\/+$/, "");
      changed = true;
    }

    const lower = pathname.toLowerCase();
    if (lower !== pathname) {
      pathname = lower;
      changed = true;
    }

    if (pathname === "/service-review" && ["fyerx.com", "www.fyerx.com"].includes(host.split(":")[0])) {
      return new NextResponse(null, { status: 404 });
    }

    const mode = editorialMode();
    const isBlog = pathname === "/blog" || pathname.startsWith("/blog/");
    const isEditorial = pathname === "/editorial" || pathname.startsWith("/editorial/");
    const isDesignPreview = process.env.NODE_ENV === "development" &&
      (pathname === "/blog" || (isBlog && getInsightTopic(pathname.slice(6))));
    const legacy = isBlog && (mode || isDesignPreview) ? null : wordpressLegacyAction(pathname);
    if (legacy?.type === "gone") {
      return gone();
    }
    if (legacy?.type === "redirect") {
      url.pathname = legacy.destination;
      return NextResponse.redirect(url, 301);
    }

    url.pathname = pathname;

    if (changed) {
      return NextResponse.redirect(url, 301);
    }

    const response = NextResponse.next();
    const isStagingService = host.split(":")[0].endsWith(".hostingersite.com") &&
      /^\/(technology|talent|marketing)\/services(?:\/|$)/.test(pathname);
    if (isStagingService || isEditorial || (isBlog && mode !== "live")) {
      response.headers.set("X-Robots-Tag", "noindex, nofollow");
    }
    if (isEditorial || (isBlog && mode === "isolated")) {
      response.headers.set("Cache-Control", "private, no-store");
      response.headers.set("CDN-Cache-Control", "no-store");
    }
    if (isEditorial) {
      response.headers.set("Referrer-Policy", "no-referrer");
      const devEval = process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : "";
      response.headers.set("Content-Security-Policy", `default-src 'self'; script-src 'self' 'unsafe-inline'${devEval}; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; connect-src 'self'; form-action 'self'; frame-ancestors 'none'; base-uri 'self'`);
    }
    return response;
  } catch {
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/((?!_next/|api/|leads|.*\\..*).*)",
    "/wp-login.php",
    "/xmlrpc.php",
    "/index.php",
    "/wp-admin/:path*",
    "/wp-content/:path*",
    "/wp-includes/:path*",
    "/wp-json/:path*",
  ],
};
