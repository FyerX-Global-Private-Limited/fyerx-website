import type { Metadata } from "next";
import LegalDocument from "@/components/sections/legal/LegalDocument";
import { getLegalDocument } from "@/lib/legal-documents";

import { metadataForPath } from "@/lib/seo";

export const metadata: Metadata = metadataForPath("/refund-policy");

export default function RefundPolicyPage() {
  return <LegalDocument doc={getLegalDocument("refund")} />;
}
