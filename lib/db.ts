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

function connectionOptions(config: MysqlConfig): mysql.ConnectionOptions {
  return {
    ...config,
    connectTimeout: 10_000,
  };
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
  console.info(
    `${LOG_PREFIX} Checking connection to ${config.host}:${config.port} / ${config.database} ...`
  );

  let connection: mysql.Connection | undefined;

  try {
    connection = await mysql.createConnection(connectionOptions(config));
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
    const elapsed = Date.now() - startedAt;
    const message = error instanceof Error ? error.message : String(error);
    console.error(`${LOG_PREFIX} Connection failed after ${elapsed}ms: ${message}`);
    return false;
  } finally {
    if (connection) {
      await connection.end().catch(() => undefined);
    }
  }
}
