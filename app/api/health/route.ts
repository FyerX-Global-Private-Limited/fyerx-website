import { NextResponse } from "next/server";
import { checkDatabaseConnectionOnce } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const result = await checkDatabaseConnectionOnce();
  return NextResponse.json(
    {
      ok: result.ok,
      detail: result.detail,
      runtime: process.env.NEXT_RUNTIME ?? "nodejs",
      env: process.env.NODE_ENV ?? "undefined",
    },
    { status: result.ok ? 200 : 503 }
  );
}
