import type { Metadata } from "next";
import LegalDocument from "@/components/sections/legal/LegalDocument";
import { getLegalDocument } from "@/lib/legal-documents";

export const metadata: Metadata = {
  title: "Payment, Cancellation & Refund Policy | FyerX",
  description:
    "Payment, cancellation and refund terms for eligible FyerX services, programmes and digital products.",
};

export default function RefundPolicyPage() {
  return <LegalDocument doc={getLegalDocument("refund")} />;
}
