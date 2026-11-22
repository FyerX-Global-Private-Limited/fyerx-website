import { after, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import sharp from "sharp";
import { createTeamMember, currentUser, sessionCookie, sessionSeconds, signIn, signOut } from "@/lib/editorial/auth";
import { editorialMode, editorialOrigin } from "@/lib/editorial/config";
import { mediaId, mediaPrefix, validateDraft } from "@/lib/editorial/document";
import { changePost, changePosts, createPost, db, livePost, post, saveFeaturedOrder, WorkflowError } from "@/lib/editorial/store";

import { publication } from "@/lib/editorial/metadata";
import { indexNowOrigin, submitIndexNow } from "@/lib/index-now";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Props = { params: Promise<{ parts: string[] }> };
const privateHeaders = {
  "Cache-Control": "private, no-store",
  "X-Robots-Tag": "noindex, nofollow",
  "X-Content-Type-Options": "nosniff",
};
const json = (body: unknown, status = 200) => NextResponse.json(body, { status, headers: privateHeaders });
const error = (message: string, status: number) => json({ error: message }, status);

function indexableArticleUrl(slug: string | null | undefined) {
  if (!slug) return undefined;
  const { article } = livePost(slug);
  if (!article) return undefined;
  const page = publication(article);
  if (page.indexable && page.canonical === page.url) return page.url;
}

async function readBody(request: Request, limit: number) {
  const reader = request.body?.getReader();
  if (!reader) throw new WorkflowError("Request body is missing", 400);
  const chunks: Uint8Array[] = [];
  let length = 0;
  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (done) return Buffer.concat(chunks, length);
      length += value.length;
      if (length > limit) {
        await reader.cancel();
        throw new WorkflowError("File or document exceeds the size limit", 413);
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
}

export async function GET(_: Request, { params }: Props) {
  const [resource, id, extra] = await params.then((value) => value.parts);
  if (!editorialMode() || resource !== "media" || !id || !mediaId.test(id) || extra) return error("Not found", 404);
  const connection = db();
  const published = Boolean(connection.prepare("SELECT 1 FROM live_media WHERE media = ?").get(id));
  if (!published && !(await currentUser())) {
    return error("Not found", 404);
  }
  const row = connection.prepare("SELECT blob FROM media WHERE id = ?").get(id);
  if (!row) return error("Not found", 404);
  return new NextResponse(Buffer.from(row.blob as Uint8Array), {
    headers: { ...privateHeaders, "Content-Type": "image/webp", "Cross-Origin-Resource-Policy": published ? "cross-origin" : "same-origin" },
  });
}

export async function POST(request: Request, { params }: Props) {
  const mode = editorialMode();
  if (!mode) return error("Not found", 404);
  if (request.headers.get("origin") !== editorialOrigin()) return error("Request origin is not allowed", 403);
  const { parts } = await params;
  const [resource, id, action] = parts;
  try {
    if (resource === "login" && parts.length === 1) {
      const { username, password } = JSON.parse((await readBody(request, 4096)).toString());
      if (typeof username !== "string" || username.length > 254 || typeof password !== "string" || password.length > 256) {
        return error("Invalid credentials", 401);
      }
      const result = await signIn(username, password);
      if (!result.token) return error(result.limited ? "Too many attempts. Try again in a few minutes." : "Invalid credentials", result.limited ? 429 : 401);
      await signOut();
      const response = json({ ok: true });
      response.cookies.set(sessionCookie, result.token, {
        httpOnly: true, secure: mode === "live", sameSite: "lax", path: "/", maxAge: sessionSeconds,
      });
      return response;
    }
    const user = await currentUser();
    if (!user) return error("Sign in to continue", 401);
    if (resource === "team" && parts.length === 1) {
      if (user.role !== "owner") return error("Only the owner can add team members.", 403);
      const data = JSON.parse((await readBody(request, 4096)).toString());
      return json({ member: await createTeamMember(data?.email, data?.password) }, 201);
    }
    if (resource === "post-actions" && parts.length === 1) {
      if (user.role !== "owner") return error("Only the owner can manage publication or Trash.", 403);
      const data = JSON.parse((await readBody(request, 16_000)).toString());
      if (data?.action !== "trash" && data?.action !== "restore" && data?.action !== "unpublish") return error("Invalid post action", 400);
      const slugs = changePosts(data.ids, data.action);
      if (mode === "live" && process.env.BLOG_ORIGIN === indexNowOrigin && slugs.length) {
        after(async () => {
          try {
            await submitIndexNow(slugs.map((slug) => indexNowOrigin + "/blog/" + slug));
          } catch (failure) {
            console.error("IndexNow notification failed", failure);
          }
        });
      }
      return json({ ok: true });
    }
    if (resource === "featured" && parts.length === 1) {
      if (user.role !== "owner") return error("Only the owner can reorder featured articles.", 403);
      const data = JSON.parse((await readBody(request, 512_000)).toString());
      saveFeaturedOrder(data?.previous, data?.order);
      return json({ ok: true });
    }
    if (resource === "logout" && parts.length === 1) {
      await signOut();
      const response = json({ ok: true });
      response.cookies.set(sessionCookie, "", { path: "/", maxAge: 0 });
      return response;
    }
    if (resource === "media" && parts.length === 1) {
      const bytes = await readBody(request, 5 * 1024 * 1024);
      const input = sharp(bytes, { limitInputPixels: 24_000_000, failOn: "warning" });
      let blob: Buffer;
      try {
        const { format, pages } = await input.metadata();
        if (!format || !["png", "jpeg", "webp"].includes(format) || (pages ?? 1) > 1) return error("Choose a still JPG, PNG or WebP image", 415);
        blob = await input.rotate().resize({ width: 1920, height: 1920, fit: "inside", withoutEnlargement: true }).webp({ quality: 85 }).toBuffer();
      } catch {
        return error("The image could not be decoded or exceeds the pixel limit", 415);
      }
      const key = randomUUID();
      db().prepare("INSERT INTO media VALUES (?, ?)").run(key, blob);
      return json({ src: mediaPrefix + key }, 201);
    }
    if (resource === "posts" && parts.length === 1) return json({ post: createPost() }, 201);
    if (resource === "posts" && id && action && parts.length === 3) {
      if (!["save", "submit", "approve", "publish", "unpublish", "schedule", "cancel-schedule"].includes(action)) return error("Not found", 404);
      const data = JSON.parse((await readBody(request, 512_000)).toString());
      if (!Number.isSafeInteger(data.version)) return error("A saved version is required", 400);
      let draft;
      if (action === "save") {
        try {
          draft = validateDraft(data.draft);
        } catch (failure) {
          return error(failure instanceof Error ? failure.message : "Invalid draft", 400);
        }
      }
      const affectsSearch = mode === "live" && process.env.BLOG_ORIGIN === indexNowOrigin &&
        (action === "publish" || action === "unpublish");
      const previousUrl = affectsSearch ? indexableArticleUrl(post(id)?.liveSlug) : undefined;
      const updated = changePost(id, data.version, action, user.role, draft, data.scheduleAt);
      if (affectsSearch) {
        after(async () => {
          try {
            const currentUrl = indexableArticleUrl(updated.liveSlug);
            await submitIndexNow([previousUrl, currentUrl].filter((url) => url !== undefined));
          } catch (failure) {
            console.error("IndexNow notification failed", failure);
          }
        });
      }
      return json({ post: updated });
    }
    return error("Not found", 404);
  } catch (failure) {
    if (failure instanceof WorkflowError) return error(failure.message, failure.status);
    if (failure instanceof SyntaxError) return error("Invalid request", 400);
    console.error("Editorial request failed", failure);
    return error("The workspace could not save this operation", 500);
  }
}
