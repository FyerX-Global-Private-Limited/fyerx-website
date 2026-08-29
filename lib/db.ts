import mysql from "mysql2/promise";
import { lookup } from "node:dns/promises";

const LOG_PREFIX = "[mysql]";

export type MysqlConfig = {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
};

export type DbCheckResult = {
  ok: boolean;
  detail: string;
};

function dbLog(message: string, error = false) {
  const line = `${LOG_PREFIX} ${message}`;
  if (error) {
    console.error(line);
    return;
  }
  console.log(line);
  // Hostinger and similar panels often capture stderr only
  if (process.env.NODE_ENV === "production") {
    console.error(line);
  }
}

function normalizeMysqlPassword(password: string): string {
  let value = password.trim();
  if (
    (value.startsWith("'") && value.endsWith("'") && value.length >= 2) ||
    (value.startsWith('"') && value.endsWith('"') && value.length >= 2)
  ) {
    value = value.slice(1, -1);
  }
  // Next.js dotenv expands $$ → $. If Hostinger stored $$ literally, collapse it.
  return value.replaceAll("$$", "$");
}

export function getMysqlConfig(): MysqlConfig | null {
  const host = process.env.MYSQL_HOST?.trim();
  const user = process.env.MYSQL_USER?.trim();
  const password = process.env.MYSQL_PASSWORD
    ? normalizeMysqlPassword(process.env.MYSQL_PASSWORD)
    : undefined;
  const database = process.env.MYSQL_DATABASE?.trim();
  const port = Number(process.env.MYSQL_PORT ?? 3306);

  if (!host || !user || !password || !database || Number.isNaN(port)) {
    return null;
  }

  return { host, port, user, password, database };
}

async function resolveCandidates(hostname: string): Promise<string[]> {
  const ipv6 = await lookup(hostname, { family: 6 }).then((r) => r.address).catch(() => null);
  const ipv4 = await lookup(hostname, { family: 4 }).then((r) => r.address).catch(() => null);

  // Hostinger Node apps sit on the same machine as MySQL. Connecting via the
  // public hostname/IPv6 makes MariaDB see user@'<server-ipv6>' and reject it.
  // localhost / 127.0.0.1 authenticate as user@localhost, which Hostinger allows.
  // Always try those first; a local Windows machine will fail fast and fall through.
  const ordered = ["localhost", "127.0.0.1", hostname, ipv6, ipv4];

  return [...new Set(ordered.filter((value): value is string => Boolean(value)))];
}

function connectionOptions(config: MysqlConfig, host: string): mysql.ConnectionOptions {
  return {
    ...config,
    host,
    connectTimeout: 8_000,
  };
}

function attemptLabel(configuredHost: string, host: string) {
  return host === configuredHost ? host : `${configuredHost} (${host})`;
}

type PingRow = {
  ok: number;
  db: string | null;
  version: string;
};

const globalForDb = globalThis as unknown as {
  mysqlCheck?: Promise<DbCheckResult>;
  mysqlPool?: mysql.Pool;
  mysqlPoolHost?: string;
};

async function resolveWorkingHost(config: MysqlConfig): Promise<string> {
  if (globalForDb.mysqlPoolHost) {
    return globalForDb.mysqlPoolHost;
  }

  const candidates = await resolveCandidates(config.host);
  const failures: string[] = [];

  for (const host of candidates) {
    let connection: mysql.Connection | undefined;
    try {
      connection = await mysql.createConnection(connectionOptions(config, host));
      await connection.query("SELECT 1");
      globalForDb.mysqlPoolHost = host;
      return host;
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      failures.push(`${attemptLabel(config.host, host)}: ${message}`);
    } finally {
      if (connection) {
        await connection.end().catch(() => undefined);
      }
    }
  }

  throw new Error(failures.join(" | ") || "Unable to reach MySQL host");
}

export async function getPool(): Promise<mysql.Pool> {
  if (globalForDb.mysqlPool) {
    return globalForDb.mysqlPool;
  }

  const config = getMysqlConfig();
  if (!config) {
    throw new Error(
      "Missing MySQL configuration. Set MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, and MYSQL_DATABASE."
    );
  }

  const host = await resolveWorkingHost(config);
  const pool = mysql.createPool({
    ...connectionOptions(config, host),
    waitForConnections: true,
    connectionLimit: 5,
    maxIdle: 5,
    idleTimeout: 60_000,
    enableKeepAlive: true,
  });

  globalForDb.mysqlPool = pool;
  dbLog(`Connection pool ready via ${attemptLabel(config.host, host)}`);
  return pool;
}

export async function checkDatabaseConnection(): Promise<DbCheckResult> {
  const config = getMysqlConfig();

  if (!config) {
    const detail =
      "Skipped connection check: set MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, and MYSQL_DATABASE.";
    dbLog(detail, true);
    return { ok: false, detail };
  }

  const startedAt = Date.now();
  const candidates = await resolveCandidates(config.host);
  dbLog(`Checking connection to ${config.host}:${config.port} / ${config.database} ...`);

  const failures: string[] = [];

  for (const host of candidates) {
    let connection: mysql.Connection | undefined;
    const label = attemptLabel(config.host, host);

    try {
      dbLog(`Trying ${label} ...`);
      connection = await mysql.createConnection(connectionOptions(config, host));
      const [rows] = await connection.query<mysql.RowDataPacket[]>(
        "SELECT 1 AS ok, DATABASE() AS db, VERSION() AS version"
      );
      const row = rows[0] as PingRow | undefined;
      const elapsed = Date.now() - startedAt;
      const via = host === config.host ? "" : `, via ${host}`;
      const detail = row
        ? `Connection successful (database=${row.db ?? config.database}, version=${row.version}${via}, ${elapsed}ms)`
        : `Connection successful (${elapsed}ms)`;
      dbLog(detail);
      globalForDb.mysqlPoolHost = host;
      return { ok: true, detail };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      failures.push(`${label}: ${message}`);
      dbLog(`${label} failed: ${message}`, true);
    } finally {
      if (connection) {
        await connection.end().catch(() => undefined);
      }
    }
  }

  const detail = `Connection failed after ${Date.now() - startedAt}ms: ${failures.join(" | ")}`;
  dbLog(detail, true);
  return { ok: false, detail };
}

export function checkDatabaseConnectionOnce(): Promise<DbCheckResult> {
  if (!globalForDb.mysqlCheck) {
    globalForDb.mysqlCheck = checkDatabaseConnection().then((result) => {
      if (!result.ok) {
        globalForDb.mysqlCheck = undefined;
      }
      return result;
    });
  }
  return globalForDb.mysqlCheck;
}
