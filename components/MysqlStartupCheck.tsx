import { checkDatabaseConnectionOnce, isNextBuildPhase } from "@/lib/db";

/** Optional one-shot server check. Instrumentation already logs on `next start`. */
export async function MysqlStartupCheck() {
  if (isNextBuildPhase()) {
    return null;
  }

  const result = await checkDatabaseConnectionOnce();
  const line = result.ok
    ? `[mysql] STARTUP CONNECTION: SUCCESS — ${result.detail}`
    : `[mysql] STARTUP CONNECTION: FAILED — ${result.detail}`;
  console.log(line);
  console.error(line);
  return null;
}
