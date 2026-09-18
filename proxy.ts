import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
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

    const legacy = wordpressLegacyAction(pathname);
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

    return NextResponse.next();
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
