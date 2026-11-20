import { createHash, randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { cookies } from "next/headers";
import { db, type Role } from "./store";
import { editorialMode } from "./config";

const derive = promisify(scrypt);
export const sessionCookie = "fyerx_editorial";
export const sessionSeconds = 8 * 60 * 60;
const digest = (token: string) => createHash("sha256").update(token).digest("hex");

type Account = { username: string; role: Role; salt: string; hash: string };
function account(username: string): Account | undefined {
  const configured: Account[] = JSON.parse(process.env.BLOG_ACCOUNTS ?? "[]");
  return configured.find((user) => user.username === username && ["owner", "publisher", "editor"].includes(user.role)
    && /^[a-f0-9]{32}$/.test(user.salt) && /^[a-f0-9]{128}$/.test(user.hash));
}

export async function currentUser() {
  if (!editorialMode()) return null;
  const token = (await cookies()).get(sessionCookie)?.value;
  if (!token || !/^[a-f0-9]{64}$/.test(token)) return null;
  const row = db().prepare("SELECT username FROM sessions WHERE token = ? AND expires > ?").get(digest(token), Date.now());
  const user = row && account(String(row.username));
  return user ? { username: user.username, role: user.role } : null;
}

export async function signIn(username: string, password: string) {
  const connection = db();
  const now = Date.now();
  connection.prepare("DELETE FROM login_attempts WHERE at < ?").run(now - 300_000);
  const attempts = connection.prepare("SELECT COUNT(*) AS total FROM login_attempts").get();
  if (Number(attempts?.total) >= 20) return { limited: true };
  connection.prepare("INSERT INTO login_attempts VALUES (?)").run(now);
  const user = account(username);
  const hash = await derive(password, user?.salt ?? "00000000000000000000000000000000", 64) as Buffer;
  if (!user || !timingSafeEqual(hash, Buffer.from(user.hash, "hex"))) return {};
  const token = randomBytes(32).toString("hex");
  connection.prepare("DELETE FROM sessions WHERE expires <= ?").run(now);
  connection.prepare("INSERT INTO sessions VALUES (?, ?, ?)").run(digest(token), user.username, now + sessionSeconds * 1000);
  return { token };
}

export async function signOut() {
  const token = (await cookies()).get(sessionCookie)?.value;
  if (token && /^[a-f0-9]{64}$/.test(token)) db().prepare("DELETE FROM sessions WHERE token = ?").run(digest(token));
}
