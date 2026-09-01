import type { LeadFormType } from "@/lib/leads";

export function recaptchaActionForForm(formType: LeadFormType | string): string {
  return `lead_${formType}`;
}
