import { NextResponse } from "next/server";
import { insertLead, parseLeadPayload } from "@/lib/leads";

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

  try {
    const id = await insertLead(data);
    console.log(`[leads] Stored ${data.formType} lead id=${id} email=${data.email}`);
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
