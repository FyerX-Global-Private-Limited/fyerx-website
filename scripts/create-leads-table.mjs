import fs from "node:fs";
import dns from "node:dns/promises";
import mysql from "mysql2/promise";

function loadEnvFile(path) {
  if (!fs.existsSync(path)) return;
  for (const line of fs.readFileSync(path, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    // Next.js style: $$ => literal $
    value = value.replace(/\$\$/g, "$");
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadEnvFile(".env");

const config = {
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT || 3306),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  connectTimeout: 15_000,
};

const candidates = [];
try {
  candidates.push((await dns.lookup(config.host, { family: 6 })).address);
} catch {
  // ignore
}
candidates.push(config.host);
try {
  candidates.push((await dns.lookup(config.host, { family: 4 })).address);
} catch {
  // ignore
}

let connection;
let lastError;
for (const host of [...new Set(candidates)]) {
  try {
    connection = await mysql.createConnection({ ...config, host });
    console.log(`Connected via ${host}`);
    break;
  } catch (error) {
    lastError = error;
  }
}

if (!connection) {
  console.error(lastError);
  process.exit(1);
}

const sql = fs.readFileSync("db/leads.sql", "utf8");
await connection.query(sql);
const [rows] = await connection.query("SHOW TABLES LIKE 'leads'");
console.log("leads table ready:", rows);
await connection.end();
