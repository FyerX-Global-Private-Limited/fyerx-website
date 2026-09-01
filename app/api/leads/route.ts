import { after, NextResponse } from "next/server";
import { sendLeadNotificationEmail } from "@/lib/lead-email";
import { insertLead, parseLeadPayload } from "@/lib/leads";
import { recaptchaActionForForm } from "@/lib/recaptcha-action";
import { verifyRecaptchaToken } from "@/lib/recaptcha";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function jsonError(status: number, error: string, details?: unknown) {
  return NextResponse.json(
    {
      ok: false,
      error,
      ...(details !== undefined ? { details } : {}),
    },
    { status }
  );
}

function readRecaptchaFields(body: unknown): { token: unknown; action: string | undefined } {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { token: undefined, action: undefined };
  }
  const record = body as Record<string, unknown>;
  const token = record.recaptchaToken ?? record.recaptcha_token;
  const actionRaw = record.recaptchaAction ?? record.recaptcha_action;
  const action = typeof actionRaw === "string" && actionRaw.trim() ? actionRaw.trim() : undefined;
  return { token, action };
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return jsonError(400, "Invalid JSON payload.");
  }

  const { data, errors } = parseLeadPayload(body);
  if (!data || errors.length > 0) {
    return jsonError(400, "Validation failed.", errors);
  }

  const { token, action } = readRecaptchaFields(body);
  const expectedAction = action || recaptchaActionForForm(data.formType);
  const captcha = await verifyRecaptchaToken(token, expectedAction);
  if (!captcha.ok) {
    return jsonError(400, captcha.error);
  }

  try {
    const id = await insertLead(data);
    console.log(
      `[leads] Stored ${data.formType} lead id=${id} email=${data.email} recaptchaScore=${captcha.score}`
    );
    after(async () => {
      await sendLeadNotificationEmail(data, id);
    });
    return NextResponse.json(
      {
        ok: true,
        id,
        formType: data.formType,
        message: "Lead stored successfully.",
      },
      { status: 201 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[leads] Insert failed: ${message}`);
    return jsonError(500, "Failed to store lead.", message);
  }
}

export async function GET() {
  return jsonError(405, "Method not allowed. Use POST with a JSON body.");
}
