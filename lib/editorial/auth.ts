import { createHash, randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import { cookies } from "next/headers";
import { db, WorkflowError, type Role } from "./store";
import { editorialMode, editorialOrigin } from "./config";

const derive = promisify(scrypt);
export const sessionCookie = "fyerx_editorial";
export const sessionSeconds = 8 * 60 * 60;
const digest = (token: string) => createHash("sha256").update(token).digest("hex");

type Account = { username: string; role: Role; salt: string; hash: string };
type ConfiguredAccount = Omit<Account, "role"> & { role: Role | "publisher" };
const teamEmail = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+$/i;

const ownerEmail = () => process.env.BLOG_OWNER_EMAIL?.trim().toLowerCase();

function configuredAccounts(): ConfiguredAccount[] {
  return JSON.parse(process.env.BLOG_ACCOUNTS ?? "[]");
}

function account(username: string): Account | undefined {
  const normalized = username.trim().toLowerCase();
  const hostname = new URL(editorialOrigin()).hostname;
  const requiresOwnerEmail = hostname === "fyerx.com" || hostname === "www.fyerx.com";
  const configured = configuredAccounts().find((user) =>
    user.username.toLowerCase() === normalized && ["owner", "publisher", "editor"].includes(user.role)
    && /^[a-f0-9]{32}$/.test(user.salt) && /^[a-f0-9]{128}$/.test(user.hash));
  if (configured) {
    const role = configured.role === "owner" && (!requiresOwnerEmail || normalized === ownerEmail()) ? "owner" : "editor";
    return { ...configured, role };
  }
  const row = db().prepare("SELECT salt, hash FROM editorial_users WHERE email = ?").get(normalized);
  if (row) return { username: normalized, role: "editor", salt: String(row.salt), hash: String(row.hash) };
}

export function teamMembers() {
  return db().prepare("SELECT email, created FROM editorial_users ORDER BY email").all().map((row) => ({
    email: String(row.email), created: String(row.created),
  }));
}

export async function createTeamMember(value: unknown, password: unknown) {
  const email = typeof value === "string" ? value.trim().toLowerCase() : "";
  if (email.length > 254 || !teamEmail.test(email)) throw new WorkflowError("Enter a valid email address.", 400);
  if (typeof password !== "string" || password.length < 16 || password.length > 256) {
    throw new WorkflowError("Use a password with 16 to 256 characters.", 400);
  }
  if (email === ownerEmail() || configuredAccounts().some((user) => user.username.toLowerCase() === email)) {
    throw new WorkflowError("An account already uses this email address.", 409);
  }
  const salt = randomBytes(16).toString("hex");
  const hash = await derive(password, salt, 64) as Buffer;
  const created = new Date().toISOString();
  const result = db().prepare("INSERT INTO editorial_users VALUES (?, ?, ?, ?) ON CONFLICT(email) DO NOTHING")
    .run(email, salt, hash.toString("hex"), created);
  if (!result.changes) throw new WorkflowError("An account already uses this email address.", 409);
  return { email, created };
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
