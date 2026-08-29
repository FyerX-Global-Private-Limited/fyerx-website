import mysql from "mysql2/promise";
import { lookup } from "node:dns/promises";

const LOG_PREFIX = "[mysql]";

const UNIX_SOCKETS = [
  process.env.MYSQL_SOCKET?.trim(),
  "/tmp/mysql.sock",
  "/var/run/mysqld/mysqld.sock",
  "/run/mysqld/mysqld.sock",
  "/var/lib/mysql/mysql.sock",
].filter((value): value is string => Boolean(value));

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

export function isNextBuildPhase() {
  const phase = process.env.NEXT_PHASE ?? "";
  return phase === "phase-production-build" || phase === "phase-export";
}

type ConnectionTarget = {
  label: string;
  options: mysql.ConnectionOptions;
};

function dbLog(message: string, error = false) {
  const line = `${LOG_PREFIX} ${message}`;
  if (error) {
    console.error(line);
    return;
  }
  console.log(line);
  if (process.env.NODE_ENV === "production") {
    console.error(line);
  }
}

function readMysqlPassword(password: string): string {
  let value = password.trim().replace(/^\uFEFF/, "");
  if (
    (value.startsWith("'") && value.endsWith("'") && value.length >= 2) ||
    (value.startsWith('"') && value.endsWith('"') && value.length >= 2)
  ) {
    value = value.slice(1, -1);
  }
  return value;
}

export function getMysqlConfig(): MysqlConfig | null {
  const host = process.env.MYSQL_HOST?.trim();
  const user = process.env.MYSQL_USER?.trim();
  const password = process.env.MYSQL_PASSWORD
    ? readMysqlPassword(process.env.MYSQL_PASSWORD)
    : undefined;
  const database = process.env.MYSQL_DATABASE?.trim();
  const port = Number(process.env.MYSQL_PORT ?? 3306);

  if (!host || !user || !password || !database || Number.isNaN(port)) {
    return null;
  }

  return { host, port, user, password, database };
}

async function resolveTargets(config: MysqlConfig): Promise<ConnectionTarget[]> {
  const auth: mysql.ConnectionOptions = {
    user: config.user,
    password: config.password,
    database: config.database,
    connectTimeout: 8_000,
  };
  const ipv6 = await lookup(config.host, { family: 6 }).then((r) => r.address).catch(() => null);
  const ipv4 = await lookup(config.host, { family: 4 }).then((r) => r.address).catch(() => null);

  const targets: ConnectionTarget[] = [
    ...UNIX_SOCKETS.map((socketPath) => ({
      label: `unix:${socketPath}`,
      options: { ...auth, socketPath },
    })),
    {
      label: "localhost (unix socket)",
      options: { ...auth, host: "localhost" },
    },
  ];

  const hosts = [...new Set([config.host, ipv6, ipv4].filter((value): value is string => Boolean(value)))];
  for (const host of hosts) {
    targets.push({
      label: host === config.host ? host : `${config.host} (${host})`,
      options: { ...auth, host, port: config.port },
    });
  }

  return targets;
}

type PingRow = {
  ok: number;
  db: string | null;
  version: string;
};

const globalForDb = globalThis as unknown as {
  mysqlCheck?: Promise<DbCheckResult>;
  mysqlPool?: mysql.Pool;
  mysqlPoolOptions?: mysql.ConnectionOptions;
};

function isNoSocketError(message: string) {
  return (
    message.includes("ENOENT") ||
    message.includes("EPERM") ||
    message.includes("ENOTSOCK") ||
    message.includes("cannot find")
  );
}

async function tryTarget(
  target: ConnectionTarget
): Promise<{ ok: true; connection: mysql.Connection } | { ok: false; error: string }> {
  let connection: mysql.Connection | undefined;
  try {
    connection = await mysql.createConnection(target.options);
    await connection.query("SELECT 1");
    return { ok: true, connection };
  } catch (error) {
    if (connection) {
      await connection.end().catch(() => undefined);
    }
    return { ok: false, error: error instanceof Error ? error.message : String(error) };
  }
}

async function resolveWorkingOptions(config: MysqlConfig): Promise<mysql.ConnectionOptions> {
  if (globalForDb.mysqlPoolOptions) {
    return globalForDb.mysqlPoolOptions;
  }

  const failures: string[] = [];
  const targets = await resolveTargets(config);

  for (const target of targets) {
    const result = await tryTarget(target);
    if (result.ok) {
      await result.connection.end().catch(() => undefined);
      globalForDb.mysqlPoolOptions = target.options;
      return target.options;
    }
    if (!isNoSocketError(result.error)) {
      failures.push(`${target.label}: ${result.error}`);
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

  const options = await resolveWorkingOptions(config);
  const pool = mysql.createPool({
    ...options,
    waitForConnections: true,
    connectionLimit: 5,
    maxIdle: 5,
    idleTimeout: 60_000,
    enableKeepAlive: true,
  });

  globalForDb.mysqlPool = pool;
  const via = options.socketPath ?? options.host ?? "unknown";
  dbLog(`Connection pool ready via ${via}`);
  return pool;
}

export async function checkDatabaseConnection(): Promise<DbCheckResult> {
  if (isNextBuildPhase()) {
    return { ok: true, detail: "Skipped during next build (static generation)" };
  }

  const config = getMysqlConfig();

  if (!config) {
    const detail =
      "Skipped connection check: set MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, and MYSQL_DATABASE.";
    dbLog(detail, true);
    return { ok: false, detail };
  }

  const startedAt = Date.now();
  dbLog(`Checking connection to ${config.host}:${config.port} / ${config.database} ...`);

  const failures: string[] = [];
  const targets = await resolveTargets(config);

  for (const target of targets) {
    dbLog(`Trying ${target.label} ...`);
    const result = await tryTarget(target);
    if (result.ok) {
      try {
        const [rows] = await result.connection.query<mysql.RowDataPacket[]>(
          "SELECT 1 AS ok, DATABASE() AS db, VERSION() AS version"
        );
        const row = rows[0] as PingRow | undefined;
        const elapsed = Date.now() - startedAt;
        const via = target.options.socketPath ?? target.options.host ?? target.label;
        const detail = row
          ? `Connection successful (database=${row.db ?? config.database}, version=${row.version}, via ${via}, ${elapsed}ms)`
          : `Connection successful (via ${via}, ${elapsed}ms)`;
        dbLog(`STARTUP CONNECTION: SUCCESS — ${detail}`);
        globalForDb.mysqlPoolOptions = target.options;
        return { ok: true, detail };
      } finally {
        await result.connection.end().catch(() => undefined);
      }
    }

    if (isNoSocketError(result.error)) {
      dbLog(`${target.label} skipped: ${result.error}`);
    } else {
      failures.push(`${target.label}: ${result.error}`);
      dbLog(`${target.label} failed: ${result.error}`, true);
    }
  }

  const detail = `Connection failed after ${Date.now() - startedAt}ms: ${failures.join(" | ")}`;
  dbLog(`STARTUP CONNECTION: FAILED — ${detail}`, true);
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
