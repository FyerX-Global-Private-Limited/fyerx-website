export type RecaptchaVerifyResult =
  | { ok: true; score: number; action: string }
  | { ok: false; error: string };

type GoogleSiteVerifyResponse = {
  success: boolean;
  score?: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
};

function readEnvValue(value: string | undefined): string | undefined {
  if (!value) return undefined;
  let trimmed = value.trim().replace(/^\uFEFF/, "");
  if (
    (trimmed.startsWith("'") && trimmed.endsWith("'") && trimmed.length >= 2) ||
    (trimmed.startsWith('"') && trimmed.endsWith('"') && trimmed.length >= 2)
  ) {
    trimmed = trimmed.slice(1, -1).trim();
  }
  return trimmed || undefined;
}

function minScore(): number {
  // Prefer RECAPTCHA_MIN_SCORE; accept RECAPTCHA_SCORE_THRESHOLD used in some Hostinger/.env setups.
  const raw = Number(
    readEnvValue(process.env.RECAPTCHA_MIN_SCORE) ??
      readEnvValue(process.env.RECAPTCHA_SCORE_THRESHOLD) ??
      0.1
  );
  return Number.isFinite(raw) ? raw : 0.1;
}

export function isRecaptchaSecretConfigured(): boolean {
  return Boolean(readEnvValue(process.env.RECAPTCHA_SECRET_KEY));
}

export function isRecaptchaSiteKeyConfigured(): boolean {
  return Boolean(readEnvValue(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY));
}

export async function verifyRecaptchaToken(
  token: unknown,
  expectedAction?: string
): Promise<RecaptchaVerifyResult> {
  const secret = readEnvValue(process.env.RECAPTCHA_SECRET_KEY);
  if (!secret) {
    console.error(
      "[recaptcha] RECAPTCHA_SECRET_KEY is missing in the server runtime environment."
    );
    return { ok: false, error: "reCAPTCHA is not configured on the server." };
  }

  if (typeof token !== "string" || !token.trim()) {
    return { ok: false, error: "reCAPTCHA token is missing. Please try again." };
  }

  const body = new URLSearchParams({
    secret,
    response: token.trim(),
  });

  let payload: GoogleSiteVerifyResponse;
  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    payload = (await response.json()) as GoogleSiteVerifyResponse;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[recaptcha] Siteverify request failed: ${message}`);
    return { ok: false, error: "Unable to verify reCAPTCHA. Please try again." };
  }

  if (!payload.success) {
    const codes = payload["error-codes"]?.join(", ") || "unknown";
    console.error(`[recaptcha] Verification failed: ${codes}`);
    return { ok: false, error: "reCAPTCHA verification failed. Please try again." };
  }

  const score = typeof payload.score === "number" ? payload.score : 0;
  const action = payload.action ?? "";
  const threshold = minScore();
  const hostname = payload.hostname ?? "unknown";

  console.log(
    `[recaptcha] success score=${score} action=${action || "n/a"} hostname=${hostname} threshold=${threshold}`
  );

  if (score < threshold) {
    console.error(`[recaptcha] Score too low: ${score} < ${threshold} hostname=${hostname}`);
    return {
      ok: false,
      error: "Security check could not be completed. Please try again.",
    };
  }

  if (expectedAction && action && action !== expectedAction) {
    console.error(`[recaptcha] Action mismatch: got=${action} expected=${expectedAction}`);
    return { ok: false, error: "Security check could not be completed. Please try again." };
  }

  return { ok: true, score, action };
}
