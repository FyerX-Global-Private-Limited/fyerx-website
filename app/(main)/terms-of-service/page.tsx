import type { Metadata } from "next";
import LegalDocument from "@/components/sections/legal/LegalDocument";
import { getLegalDocument } from "@/lib/legal-documents";

export const metadata: Metadata = {
  title: "Terms of Service | FyerX",
  description:
    "Website terms of use for fyerx.com and associated pages operated by FyerX Global Private Limited.",
};

export default function TermsOfServicePage() {
  return <LegalDocument doc={getLegalDocument("terms")} />;
}
