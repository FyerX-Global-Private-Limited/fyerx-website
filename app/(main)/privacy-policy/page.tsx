import type { Metadata } from "next";
import LegalDocument from "@/components/sections/legal/LegalDocument";
import { getLegalDocument } from "@/lib/legal-documents";

export const metadata: Metadata = {
  title: "Privacy Policy | FyerX",
  description:
    "Learn how FyerX collects, uses, and protects personal information across our websites and services.",
};

export default function PrivacyPolicyPage() {
  return <LegalDocument doc={getLegalDocument("privacy")} />;
}
