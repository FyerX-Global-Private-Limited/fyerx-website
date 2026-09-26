"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  GOOGLE_ADS_ENQUIRY_CONVERSIONS,
  type GoogleAdsEnquiryVariant,
} from "@/lib/google-ads";

function safeTransactionId(value?: string) {
  if (!value) return "";
  return value.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 80);
}

const firedConversions = new Set<string>();

function fireConversion(
  variant: GoogleAdsEnquiryVariant,
  transactionId?: string
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return false;
  }

  const config = GOOGLE_ADS_ENQUIRY_CONVERSIONS[variant];
  const txn = safeTransactionId(transactionId);
  const key = `${variant}:${txn}`;
  if (firedConversions.has(key)) return true;

  const payload: Record<string, string | number> = { send_to: config.sendTo };
  if (config.value !== undefined) payload.value = config.value;
  if (config.currency) payload.currency = config.currency;
  if (txn) payload.transaction_id = txn;

  window.gtag("event", "conversion", payload);
  firedConversions.add(key);
  return true;
}

export function GoogleAdsConversion({
  variant,
  transactionId,
}: {
  variant: GoogleAdsEnquiryVariant;
  transactionId?: string;
}) {
  const pathname = usePathname();
  const expectedPath = GOOGLE_ADS_ENQUIRY_CONVERSIONS[variant].path;

  useEffect(() => {
    if (pathname !== expectedPath) return;

    if (fireConversion(variant, transactionId)) return;

    const interval = window.setInterval(() => {
      if (fireConversion(variant, transactionId)) {
        window.clearInterval(interval);
      }
    }, 100);
    const timeout = window.setTimeout(() => window.clearInterval(interval), 5000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, [pathname, expectedPath, variant, transactionId]);

  return null;
}
