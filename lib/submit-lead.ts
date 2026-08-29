export type SubmitLeadResult =
  | { ok: true; id: number }
  | { ok: false; error: string; details?: unknown };

/** Same-origin path for the leads handler (public /leads rewrite also maps here). */
const LEADS_ENDPOINT = "/api/leads";

export async function submitLead(payload: Record<string, unknown>): Promise<SubmitLeadResult> {
  try {
    const response = await fetch(LEADS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = (await response.json().catch(() => null)) as {
      ok?: boolean;
      id?: number;
      error?: string;
      details?: unknown;
    } | null;

    if (!response.ok || !data?.ok || typeof data.id !== "number") {
      const details = data?.details;
      let error = data?.error || "Unable to submit your enquiry. Please try again.";
      if (Array.isArray(details) && details.length > 0) {
        const first = details[0] as { field?: string; message?: string };
        if (first?.message) error = first.message;
      } else if (typeof details === "string" && details.trim()) {
        error = details;
      }
      return { ok: false, error, details };
    }

    return { ok: true, id: data.id };
  } catch {
    return {
      ok: false,
      error: "Unable to reach the server. Please check your connection and try again.",
    };
  }
}

export function readFormString(form: HTMLFormElement, name: string): string {
  const value = new FormData(form).get(name);
  return typeof value === "string" ? value.trim() : "";
}
