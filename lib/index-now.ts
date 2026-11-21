export const indexNowOrigin = "https://fyerx.com";
const key = "c6d49047a190c64aaaf3eb8c03a62baa";

export async function submitIndexNow(urls: readonly string[]) {
  const urlList = [...new Set(urls.map((value) => {
    const url = new URL(value, indexNowOrigin);
    if (url.origin !== indexNowOrigin || url.username || url.password || url.hash) {
      throw new Error("IndexNow URLs must be on the production site and have no fragments");
    }
    return url.href;
  }))];

  if (!urlList.length) return;
  if (urlList.length > 10_000) throw new Error("IndexNow allows up to 10,000 URLs per request");

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(indexNowOrigin).hostname,
      key,
      keyLocation: `${indexNowOrigin}/${key}.txt`,
      urlList,
    }),
    signal: AbortSignal.timeout(5000),
  });

  if (response.status !== 200 && response.status !== 202) {
    throw new Error(`IndexNow returned HTTP ${response.status}`);
  }
  return response.status;
}
