export async function register() {
  const runtime = process.env.NEXT_RUNTIME ?? "undefined";
  console.log(`[mysql] Server starting (runtime=${runtime}, env=${process.env.NODE_ENV ?? "undefined"})`);
  console.error(`[mysql] Server starting (runtime=${runtime}, env=${process.env.NODE_ENV ?? "undefined"})`);

  if (runtime === "edge") {
    console.log("[mysql] Skipping database check on Edge runtime");
    return;
  }

  const { checkDatabaseConnectionOnce } = await import("./lib/db");
  await checkDatabaseConnectionOnce();
}
