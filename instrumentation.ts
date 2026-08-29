export async function register() {
  const runtime = process.env.NEXT_RUNTIME ?? "undefined";
  console.log(`[mysql] Server starting (runtime=${runtime}, env=${process.env.NODE_ENV ?? "undefined"})`);
  console.error(`[mysql] Server starting (runtime=${runtime}, env=${process.env.NODE_ENV ?? "undefined"})`);

  if (runtime === "edge") {
    console.log("[mysql] Skipping database check on Edge runtime");
    return;
  }

  const { checkDatabaseConnectionOnce, isNextBuildPhase } = await import("./lib/db");

  if (isNextBuildPhase()) {
    console.log("[mysql] Skipping database check during next build");
    console.error("[mysql] Skipping database check during next build");
    return;
  }

  const result = await checkDatabaseConnectionOnce();
  const line = result.ok
    ? `[mysql] STARTUP CONNECTION: SUCCESS — ${result.detail}`
    : `[mysql] STARTUP CONNECTION: FAILED — ${result.detail}`;
  console.log(line);
  console.error(line);
}
