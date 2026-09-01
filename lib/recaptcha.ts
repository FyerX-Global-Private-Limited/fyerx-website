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

function minScore(): number {
  // 0.3 is a practical production default; 0.5 often blocks real mobile/VPN users.
  const raw = Number(process.env.RECAPTCHA_MIN_SCORE ?? 0.3);
  return Number.isFinite(raw) ? raw : 0.3;
}

export async function verifyRecaptchaToken(
  token: unknown,
  expectedAction?: string
): Promise<RecaptchaVerifyResult> {
  const secret = process.env.RECAPTCHA_SECRET_KEY?.trim();
  if (!secret) {
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
