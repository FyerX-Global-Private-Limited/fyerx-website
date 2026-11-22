import { PHASE_PRODUCTION_BUILD } from "next/constants";
import { editorialMode } from "./config";
import { publishDuePosts } from "./store";
import { indexNowOrigin, submitIndexNow } from "@/lib/index-now";

export function startEditorialScheduler() {
  const mode = editorialMode();
  if (!mode || process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD) return;

  function publish() {
    try {
      const slugs = publishDuePosts();
      if (slugs.length && mode === "live" && process.env.BLOG_ORIGIN === indexNowOrigin) {
        void submitIndexNow(slugs.map((slug) => indexNowOrigin + "/blog/" + slug))
          .catch((failure) => console.error("IndexNow scheduled publication notification failed", failure));
      }
    } catch (failure) {
      console.error("Scheduled publication check failed", failure);
    }
  }

  setInterval(publish, 15_000).unref();
}
