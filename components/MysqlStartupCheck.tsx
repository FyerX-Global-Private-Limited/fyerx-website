import { checkDatabaseConnectionOnce } from "@/lib/db";

/** Runs the MySQL check on the first server render if instrumentation logs are not captured. */
export function MysqlStartupCheck() {
  void checkDatabaseConnectionOnce();
  return null;
}
