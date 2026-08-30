"use client";

import { useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { recaptchaActionForForm } from "@/lib/recaptcha-action";
import { submitLead, type SubmitLeadResult } from "@/lib/submit-lead";
import type { LeadFormType } from "@/lib/leads";

export function useSubmitLead() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  return useCallback(
    async (
      payload: Record<string, unknown>,
      formType: LeadFormType
    ): Promise<SubmitLeadResult> => {
      if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim()) {
        return submitLead(payload);
      }

      if (!executeRecaptcha) {
        return {
          ok: false,
          error: "Security check is still loading. Please try again in a moment.",
        };
      }

      try {
        const action = recaptchaActionForForm(formType);
        const recaptchaToken = await executeRecaptcha(action);
        return submitLead({
          ...payload,
          recaptchaToken,
          recaptchaAction: action,
        });
      } catch {
        return {
          ok: false,
          error: "Security check failed. Please try again.",
        };
      }
    },
    [executeRecaptcha]
  );
}
