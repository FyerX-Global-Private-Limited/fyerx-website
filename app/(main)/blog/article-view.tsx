"use client";

import { useEffect, useRef } from "react";

export function ArticleView({ slug }: { slug: string }) {
  const sent = useRef(false);

  useEffect(() => {
    function count() {
      if (sent.current || document.visibilityState !== "visible") return;
      sent.current = true;
      void fetch("/api/blog-view/" + encodeURIComponent(slug), {
        method: "POST", credentials: "omit", referrerPolicy: "no-referrer", keepalive: true,
      }).catch(() => {});
    }

    count();
    document.addEventListener("visibilitychange", count);
    return () => document.removeEventListener("visibilitychange", count);
  }, [slug]);

  return null;
}
