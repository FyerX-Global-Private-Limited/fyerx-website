# FyerX Blogs editorial workspace

The workspace uses Node 24 with its built-in SQLite driver and Sharp for image decoding. Run it on a single Next.js service with a writable, durable local volume. SQLite stores article drafts, approved publication snapshots, media, slug claims, and sessions together. Back up the database with SQLite’s backup facilities and verify a restore before launch. A multi-instance or ephemeral filesystem host needs a shared transactional data and media layer before launch.

## Isolated review

Set these server-side variables and start Next.js in development mode bound to the loopback interface.

- `BLOG_MODE=isolated`
- `BLOG_ORIGIN=http://127.0.0.1:3000`
- `BLOG_DB_PATH` set to an absolute SQLite path in a private directory outside the checkout and `public/`
- `BLOG_ACCOUNTS` set to a JSON array of account objects. Pipe a strong password into `node scripts/editorial-account.mjs <email-or-username> <owner|editor>` to generate an object for each initial account. Keep plaintext passwords out of the repository, command history and logs.

Open `/editorial` to sign in. The isolated database seeds the two existing sample articles as drafts. Use a separate test post to exercise publication. In isolated mode, publication only affects the local reader and sitemap. The blog sends an additional noindex header in this mode.

Contributors may create and save drafts, view private previews, and submit revisions for review. The owner approves saved revisions, publishes them, unpublishes them, and adds contributors under Team. Contributor passwords are hashed in the editorial database. Legacy publisher accounts sign in as contributors. Saving a changed draft clears its approval. The reader holds the last published snapshot until the owner publishes another one or unpublishes it. Old published slugs redirect to the current slug while the post is live. Previously redirected slugs remain reserved.

## Launch requirements

Keep the feature disabled until launch is authorised. Set `BLOG_MODE=live` only in the production process, set `BLOG_ORIGIN=https://fyerx.com`, and start with a fresh persistent database. Set `BLOG_OWNER_EMAIL` to the primary owner's work email in the hosting environment. Bootstrap that same email as the owner in the private `BLOG_ACCOUNTS` environment variable using the account script. Only the configured owner email can assume the owner role on the FyerX production domain. The owner can then add contributors under `/editorial/team`. Backups contain unpublished material and require restricted access. Confirm HTTPS, proxy cache behaviour, authenticated previews, and SEO output on the chosen runtime before enabling public access.

## Article traffic

Posts shows each article’s last 30 calendar days. Analytics offers 7, 30 and 90 days, including today. Days and update filters use India Standard Time. A range that begins before the displayed measurement start has only partial coverage.

Measurement starts when traffic storage first initializes through the workspace or collection endpoint. It does not backfill historical Google Analytics traffic. The first-party counter writes only a stable article ID, local calendar day and aggregate count. The request sends no cookies or referrer. Only browser opens of published articles are measured, excluding editorial sessions, draft previews, unpublished URLs and redirect URLs themselves. Opens of the destination after a redirect count under the same article ID. Repeat opens count and automated traffic may affect totals. Historical totals remain available for articles that were later unpublished.

Both dashboards can show an explicitly labelled sample dataset in isolated mode. Sample counts are generated for display and are never stored or combined with recorded traffic. Zero means no recorded page views within measurement coverage. A dash indicates unavailable data or a post that has never been published. No Google Analytics reporting credentials or external service are required.
