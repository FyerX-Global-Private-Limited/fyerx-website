/** Encode spaces and `&` so public URLs do not 404 on the server. */
export function encodePublicSrc(src: string): string {
  if (!src.startsWith("/")) return src;
  return `/${src
    .split("/")
    .filter(Boolean)
    .map((segment) => segment.replace(/ /g, "%20").replace(/&/g, "%26"))
    .join("/")}`;
}
