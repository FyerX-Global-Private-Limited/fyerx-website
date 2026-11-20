export async function checkLeadsAtStartup() {
  const runtime = process.env.NEXT_RUNTIME ?? "undefined";
  console.log(`[mysql] Server starting (runtime=${runtime}, env=${process.env.NODE_ENV ?? "undefined"})`);
  console.error(`[mysql] Server starting (runtime=${runtime}, env=${process.env.NODE_ENV ?? "undefined"})`);

  const { checkDatabaseConnectionOnce, isNextBuildPhase } = await import("./lib/db");

  if (isNextBuildPhase()) {
    console.log("[mysql] Skipping database check during next build");
    console.error("[mysql] Skipping database check during next build");
    return;
  }

  const result = await checkDatabaseConnectionOnce();
  const line = result.ok
    ? `[mysql] STARTUP CONNECTION: SUCCESS ΓÇö ${result.detail}`
    : `[mysql] STARTUP CONNECTION: FAILED ΓÇö ${result.detail}`;
  console.log(line);
  console.error(line);
}
