import { NextResponse } from "next/server";
import { checkDatabaseConnection } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const result = await checkDatabaseConnection();
  return NextResponse.json(
    {
      ok: result.ok,
      detail: result.detail,
      runtime: process.env.NEXT_RUNTIME ?? "nodejs",
      env: process.env.NODE_ENV ?? "undefined",
      checkedAt: new Date().toISOString(),
    },
    {
      status: result.ok ? 200 : 503,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        Pragma: "no-cache",
      },
    }
  );
}
