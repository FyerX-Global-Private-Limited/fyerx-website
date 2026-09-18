import { NextResponse } from "next/server";
import { checkDatabaseConnection } from "@/lib/db";
import {
  isRecaptchaSecretConfigured,
  isRecaptchaSiteKeyConfigured,
} from "@/lib/recaptcha";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const result = await checkDatabaseConnection();
  const recaptcha = {
    siteKeyConfigured: isRecaptchaSiteKeyConfigured(),
    secretConfigured: isRecaptchaSecretConfigured(),
  };
  const configOk = result.ok && recaptcha.secretConfigured;

  return NextResponse.json(
    {
      ok: configOk,
      detail: result.detail,
      recaptcha,
      runtime: process.env.NEXT_RUNTIME ?? "nodejs",
      env: process.env.NODE_ENV ?? "undefined",
      checkedAt: new Date().toISOString(),
    },
    {
      status: configOk ? 200 : 503,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        Pragma: "no-cache",
      },
    }
  );
}
