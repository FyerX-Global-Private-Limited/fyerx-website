export async function register() {
  const runtime = process.env.NEXT_RUNTIME ?? "undefined";
  console.log(`[mysql] Server starting (runtime=${runtime}, env=${process.env.NODE_ENV ?? "undefined"})`);
  console.error(`[mysql] Server starting (runtime=${runtime}, env=${process.env.NODE_ENV ?? "undefined"})`);

  if (runtime === "edge") {
    console.log("[mysql] Skipping database check on Edge runtime");
    return;
  }

  const { checkDatabaseConnectionOnce } = await import("./lib/db");
  const result = await checkDatabaseConnectionOnce();
  const line = result.ok
    ? `[mysql] STARTUP CONNECTION: SUCCESS — ${result.detail}`
    : `[mysql] STARTUP CONNECTION: FAILED — ${result.detail}`;
  console.log(line);
  console.error(line);
}
