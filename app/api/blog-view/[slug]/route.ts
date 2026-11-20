import { editorialOrigin } from "@/lib/editorial/config";
import { slugPattern } from "@/lib/editorial/document";
import { recordArticleView, trafficEnabled } from "@/lib/editorial/traffic";

export const runtime = "nodejs";

export async function POST(request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const response = () => new Response(null, { status: 204, headers: { "Cache-Control": "no-store" } });
  if (!trafficEnabled()) return response();
  try {
    if (request.headers.get("origin") !== editorialOrigin() || request.headers.get("sec-fetch-site") !== "same-origin") return response();
    const { slug } = await params;
    if (slug.length <= 90 && slugPattern.test(slug)) recordArticleView(slug);
  } catch {
    // Reading an article must still work when analytics storage is unavailable.
  }
  return response();
}
