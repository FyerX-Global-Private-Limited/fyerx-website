import { lookup } from "node:dns/promises";
import mysql from "mysql2/promise";

const LOG_PREFIX = "[mysql]";

export type MysqlConfig = {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
};

export function getMysqlConfig(): MysqlConfig | null {
  const host = process.env.MYSQL_HOST?.trim();
  const user = process.env.MYSQL_USER?.trim();
  const password = process.env.MYSQL_PASSWORD;
  const database = process.env.MYSQL_DATABASE?.trim();
  const port = Number(process.env.MYSQL_PORT ?? 3306);

  if (!host || !user || !password || !database || Number.isNaN(port)) {
    return null;
  }

  return { host, port, user, password, database };
}

async function resolveCandidates(hostname: string): Promise<string[]> {
  const candidates: string[] = [];

  try {
    candidates.push((await lookup(hostname, { family: 6 })).address);
  } catch {
    // IPv6 not published for this host
  }

  candidates.push(hostname);

  try {
    candidates.push((await lookup(hostname, { family: 4 })).address);
  } catch {
    // IPv4 not published for this host
  }

  return [...new Set(candidates)];
}

function connectionOptions(config: MysqlConfig, host: string): mysql.ConnectionOptions {
  return {
    ...config,
    host,
    connectTimeout: 8_000,
  };
}

function isTimeoutError(message: string) {
  return message.includes("ETIMEDOUT") || message.includes("ECONNREFUSED") || message.includes("ENETUNREACH");
}

type PingRow = {
  ok: number;
  db: string | null;
  version: string;
};

export async function checkDatabaseConnection(): Promise<boolean> {
  const config = getMysqlConfig();

  if (!config) {
    console.warn(
      `${LOG_PREFIX} Skipped connection check: set MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, and MYSQL_DATABASE.`
    );
    return false;
  }

  const startedAt = Date.now();
  const candidates = await resolveCandidates(config.host);
  console.info(
    `${LOG_PREFIX} Checking connection to ${config.host}:${config.port} / ${config.database} ...`
  );

  let lastError = "Unknown connection error";

  for (const host of candidates) {
    let connection: mysql.Connection | undefined;
    const attemptLabel = host === config.host ? host : `${config.host} (${host})`;

    try {
      console.info(`${LOG_PREFIX} Trying ${attemptLabel} ...`);
      connection = await mysql.createConnection(connectionOptions(config, host));
      const [rows] = await connection.query<mysql.RowDataPacket[]>(
        "SELECT 1 AS ok, DATABASE() AS db, VERSION() AS version"
      );
      const row = rows[0] as PingRow | undefined;
      const elapsed = Date.now() - startedAt;

      console.info(
        `${LOG_PREFIX} Connection successful` +
          (row
            ? ` (database=${row.db ?? config.database}, version=${row.version}, ${elapsed}ms)`
            : ` (${elapsed}ms)`)
      );
      return true;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      lastError = message;
      console.error(`${LOG_PREFIX} ${attemptLabel} failed: ${message}`);

      if (message.includes("Access denied")) {
        console.error(
          `${LOG_PREFIX} Access denied: check MYSQL_PASSWORD (use $$ for a literal $), and allow this machine in hPanel → Databases → Remote MySQL (add your IPv6/IPv4 or %).`
        );
        return false;
      }

      if (!isTimeoutError(message)) {
        return false;
      }
    } finally {
      if (connection) {
        await connection.end().catch(() => undefined);
      }
    }
  }

  console.error(
    `${LOG_PREFIX} Connection failed after ${Date.now() - startedAt}ms: ${lastError}`
  );
  return false;
}
