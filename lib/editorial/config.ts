export function editorialMode() {
  if (process.env.BLOG_MODE === "isolated" && process.env.NODE_ENV === "development") return "isolated";
  if (process.env.BLOG_MODE === "live" && process.env.NODE_ENV === "production") return "live";
  return null;
}

export function editorialOrigin() {
  const mode = editorialMode();
  const origin = process.env.BLOG_ORIGIN;
  if (!mode || !origin) throw new Error("Editorial origin is not configured");
  const url = new URL(origin);
  if (url.origin !== origin ||
      (mode === "live" && url.protocol !== "https:") ||
      (mode === "isolated" && !["127.0.0.1", "localhost"].includes(url.hostname))) {
    throw new Error("Invalid editorial origin");
  }
  return url.origin;
}
