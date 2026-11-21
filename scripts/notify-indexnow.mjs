import { submitIndexNow } from "../lib/index-now.ts";

const urls = process.argv.slice(2);
if (!urls.length) {
  console.error("Usage: node scripts/notify-indexnow.mjs <changed-url> [changed-url ...]");
  process.exitCode = 1;
} else {
  try {
    const status = await submitIndexNow(urls);
    console.log(`IndexNow returned HTTP ${status}.`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
