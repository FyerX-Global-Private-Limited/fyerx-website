import { randomBytes, scryptSync } from "node:crypto";

const [username, role] = process.argv.slice(2);
if (!/^[a-z0-9][a-z0-9._-]{2,79}(?:@[a-z0-9-]+(?:\.[a-z0-9-]+)+)?$/i.test(username ?? "") || username.length > 254 || !["owner", "editor"].includes(role) || process.stdin.isTTY) {
  console.error("Usage: pipe a password into node scripts/editorial-account.mjs <email-or-username> <owner|editor>");
  process.exit(1);
}

process.stdin.setEncoding("utf8");
let password = "";
for await (const chunk of process.stdin) {
  password += chunk;
  if (password.length > 258) {
    console.error("Password must have 16–256 characters");
    process.exit(1);
  }
}
password = password.replace(/\r?\n$/, "");
if (password.length < 16 || password.length > 256) {
  console.error("Password must have 16–256 characters");
  process.exit(1);
}
const salt = randomBytes(16).toString("hex");
console.log(JSON.stringify({ username, role, salt, hash: scryptSync(password, salt, 64).toString("hex") }));
