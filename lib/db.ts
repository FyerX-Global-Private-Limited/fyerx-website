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
  const ipv6 = await lookup(hostname, { family: 6 }).then((r) => r.address).catch(() => null);
  const ipv4 = await lookup(hostname, { family: 4 }).then((r) => r.address).catch(() => null);

  // Local Windows often reaches Hostinger over IPv6; Hostinger Node apps usually need IPv4.
  const ordered =
    process.env.NODE_ENV === "production"
      ? [hostname, ipv4, ipv6]
      : [ipv6, hostname, ipv4];

  return [...new Set(ordered.filter((value): value is string => Boolean(value)))];
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
  let lastError = "Unable to reach MySQL host";

  for (const host of candidates) {
    let connection: mysql.Connection | undefined;
    try {
      connection = await mysql.createConnection(connectionOptions(config, host));
      await connection.query("SELECT 1");
      globalForDb.mysqlPoolHost = host;
      return host;
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error);
      if (!isTimeoutError(lastError) && !lastError.includes("Access denied")) {
        continue;
      }
    } finally {
      if (connection) {
        await connection.end().catch(() => undefined);
      }
    }
  }

  throw new Error(lastError);
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
  dbLog(`Connection pool ready via ${host === config.host ? host : `${config.host} (${host})`}`);
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

  let lastError = "Unknown connection error";

  for (const host of candidates) {
    let connection: mysql.Connection | undefined;
    const attemptLabel = host === config.host ? host : `${config.host} (${host})`;

    try {
      dbLog(`Trying ${attemptLabel} ...`);
      connection = await mysql.createConnection(connectionOptions(config, host));
      const [rows] = await connection.query<mysql.RowDataPacket[]>(
        "SELECT 1 AS ok, DATABASE() AS db, VERSION() AS version"
      );
      const row = rows[0] as PingRow | undefined;
      const elapsed = Date.now() - startedAt;
      const detail = row
        ? `Connection successful (database=${row.db ?? config.database}, version=${row.version}, ${elapsed}ms)`
        : `Connection successful (${elapsed}ms)`;
      dbLog(detail);
      globalForDb.mysqlPoolHost = host;
      return { ok: true, detail };
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      lastError = message;
      dbLog(`${attemptLabel} failed: ${message}`, true);

      if (message.includes("Access denied")) {
        dbLog(
          "Access denied: check MYSQL_PASSWORD (use $$ for a literal $), and allow this machine in hPanel → Databases → Remote MySQL (add your IPv6/IPv4 or %).",
          true
        );
        return { ok: false, detail: message };
      }

      if (!isTimeoutError(message)) {
        return { ok: false, detail: message };
      }
    } finally {
      if (connection) {
        await connection.end().catch(() => undefined);
      }
    }
  }

  const detail = `Connection failed after ${Date.now() - startedAt}ms: ${lastError}`;
  dbLog(detail, true);
  return { ok: false, detail };
}

export function checkDatabaseConnectionOnce(): Promise<DbCheckResult> {
  if (!globalForDb.mysqlCheck) {
    globalForDb.mysqlCheck = checkDatabaseConnection();
  }
  return globalForDb.mysqlCheck;
}
