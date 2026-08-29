/** Public path for the leads REST API. Configure with LEADS_API_PATH in .env */
export function getLeadsApiPath(): string {
  const raw = process.env.LEADS_API_PATH?.trim() || "/leads";
  const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
  return withSlash.replace(/\/+$/, "") || "/leads";
}
