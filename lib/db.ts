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
  passwordLength?: number;
  passwordEndsWithDollar?: boolean;
  passwordFromBase64?: boolean;
  usedPasswordSource?: string;
  passwordCandidateCount?: number;
  lastCharCodes?: number[];
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

function normalizeMysqlPassword(password: string): string {
  let value = password.trim().replace(/^\uFEFF/, "");
  if (
    (value.startsWith("'") && value.endsWith("'") && value.length >= 2) ||
    (value.startsWith('"') && value.endsWith('"') && value.length >= 2)
  ) {
    value = value.slice(1, -1);
  }
  while (value.includes("$$")) {
    value = value.replaceAll("$$", "$");
  }
  return value;
}

function lastCharCodes(password: string, count = 3): number[] {
  return [...password].slice(-count).map((char) => char.charCodeAt(0));
}

type PasswordCandidate = {
  label: string;
  password: string;
};

function decodePasswordBase64(): string | null {
  const raw = process.env.MYSQL_PASSWORD_BASE64?.trim();
  if (!raw) return null;
  try {
    const decoded = Buffer.from(raw, "base64").toString("utf8");
    return decoded || null;
  } catch {
    return null;
  }
}

function collectPasswordCandidates(): PasswordCandidate[] {
  const seen = new Set<string>();
  const candidates: PasswordCandidate[] = [];

  const add = (password: string | null | undefined, label: string) => {
    if (!password || seen.has(password)) return;
    seen.add(password);
    candidates.push({ password, label });
  };

  add(decodePasswordBase64(), "base64");

  const raw = process.env.MYSQL_PASSWORD;
  if (raw) {
    const collapsed = normalizeMysqlPassword(raw);
    // Prefer collapsed (FyerxDb69$$ → FyerxDb69$). Do not try the doubled
    // Hostinger/runtime value first — that is what /api/health was sending.
    add(collapsed, "collapsed");
    if (collapsed.length === 11 && collapsed.endsWith("$")) {
      add(collapsed.slice(0, -1), "drop-extra-dollar");
    }
    if (!collapsed.endsWith("$")) {
      add(`${collapsed}$`, "collapsed+$");
    }
  }

  return candidates;
}

export function getMysqlConfig(): MysqlConfig | null {
  const host = process.env.MYSQL_HOST?.trim();
  const user = process.env.MYSQL_USER?.trim();
  const database = process.env.MYSQL_DATABASE?.trim();
  const port = Number(process.env.MYSQL_PORT ?? 3306);
  const password = collectPasswordCandidates()[0]?.password;

  if (!host || !user || !password || !database || Number.isNaN(port)) {
    return null;
  }

  return { host, port, user, password, database };
}

function baseAuth(config: MysqlConfig, password: string): mysql.ConnectionOptions {
  return {
    user: config.user,
    password,
    database: config.database,
    connectTimeout: 8_000,
  };
}

async function resolveTargets(config: MysqlConfig, password: string): Promise<ConnectionTarget[]> {
  const auth = baseAuth(config, password);
  const ipv6 = await lookup(config.host, { family: 6 }).then((r) => r.address).catch(() => null);
  const ipv4 = await lookup(config.host, { family: 4 }).then((r) => r.address).catch(() => null);

  const targets: ConnectionTarget[] = [
    // host:localhost + port forces TCP to ::1, which MariaDB treats as user@'::1'
    // (not user@localhost). Unix socket is what Hostinger grants.
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
  const passwords = collectPasswordCandidates();

  for (const { password, label } of passwords) {
    dbLog(`Trying password source=${label} length=${password.length} endsWith$=${password.endsWith("$")}`);
    const targets = await resolveTargets(config, password);
    for (const target of targets) {
      const result = await tryTarget(target);
      if (result.ok) {
        await result.connection.end().catch(() => undefined);
        globalForDb.mysqlPoolOptions = target.options;
        return target.options;
      }
      if (!isNoSocketError(result.error)) {
        failures.push(`[${label}] ${target.label}: ${result.error}`);
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
    const detail = "Skipped during next build (static generation)";
    return { ok: true, detail };
  }

  const config = getMysqlConfig();

  if (!config) {
    const detail =
      "Skipped connection check: set MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, and MYSQL_DATABASE.";
    dbLog(detail, true);
    return { ok: false, detail };
  }

  const startedAt = Date.now();
  const passwords = collectPasswordCandidates();
  const primary = passwords[0];
  dbLog(`Checking connection to ${config.host}:${config.port} / ${config.database} ...`);
  dbLog(
    `Password candidates=${passwords.length} primarySource=${primary?.label ?? "none"} length=${primary?.password.length ?? 0} endsWith$=${primary?.password.endsWith("$") ?? false}`
  );

  const failures: string[] = [];

  for (const { password, label } of passwords) {
    dbLog(`Trying password source=${label} ...`);
    const targets = await resolveTargets(config, password);
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
          return {
            ok: true,
            detail,
            passwordLength: password.length,
            passwordEndsWithDollar: password.endsWith("$"),
            passwordFromBase64: label === "base64",
            usedPasswordSource: label,
            passwordCandidateCount: passwords.length,
            lastCharCodes: lastCharCodes(password),
          };
        } finally {
          await result.connection.end().catch(() => undefined);
        }
      }

      if (isNoSocketError(result.error)) {
        dbLog(`${target.label} skipped: ${result.error}`);
      } else {
        failures.push(`[${label}] ${target.label}: ${result.error}`);
        dbLog(`${target.label} failed: ${result.error}`, true);
      }
    }
  }

  const detail = `Connection failed after ${Date.now() - startedAt}ms: ${failures.join(" | ")}`;
  dbLog(`STARTUP CONNECTION: FAILED — ${detail}`, true);
  return {
    ok: false,
    detail,
    passwordLength: primary?.password.length,
    passwordEndsWithDollar: primary?.password.endsWith("$"),
    passwordFromBase64: Boolean(decodePasswordBase64()),
    passwordCandidateCount: passwords.length,
    lastCharCodes: primary ? lastCharCodes(primary.password) : undefined,
  };
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
