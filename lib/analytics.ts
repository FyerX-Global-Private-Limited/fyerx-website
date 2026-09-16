const BLOCKED_KEYS = /email|phone|name|resume|cv|candidate|salary|rate|message|linkedin/i;

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  const safe: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(params)) {
    if (BLOCKED_KEYS.test(key) || value === undefined) continue;
    if (typeof value === "string" && /@/.test(value)) continue;
    safe[key] = value;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...safe });
  if (typeof window.gtag === "function") {
    window.gtag("event", event, safe);
  }
}

export function trackCtaClick(href: string) {
  const path = href.split("?")[0]?.split("#")[0] ?? href;
  trackEvent("cta_click", { link_path: path });
}

export function trackPhoneClick(href: string) {
  if (href.startsWith("tel:")) {
    trackEvent("phone_click");
  }
}
