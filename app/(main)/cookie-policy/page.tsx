import type { Metadata } from "next";
import LegalDocument from "@/components/sections/legal/LegalDocument";
import { getLegalDocument } from "@/lib/legal-documents";

export const metadata: Metadata = {
  title: "Cookie Policy | FyerX",
  description:
    "How FyerX uses cookies and similar technologies on fyerx.com and associated pages.",
};

export default function CookiePolicyPage() {
  return <LegalDocument doc={getLegalDocument("cookie")} />;
}
