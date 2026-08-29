import { checkDatabaseConnectionOnce } from "@/lib/db";

/** Runs the MySQL check on the first server render if instrumentation logs are not captured. */
export async function MysqlStartupCheck() {
  const result = await checkDatabaseConnectionOnce();
  const line = result.ok
    ? `[mysql] STARTUP CONNECTION: SUCCESS — ${result.detail}`
    : `[mysql] STARTUP CONNECTION: FAILED — ${result.detail}`;
  console.log(line);
  console.error(line);
  return null;
}
