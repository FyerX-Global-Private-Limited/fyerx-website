import type { Metadata } from "next";
import LegalDocument from "@/components/sections/legal/LegalDocument";
import { getLegalDocument } from "@/lib/legal-documents";

import { metadataForPath } from "@/lib/seo";

export const metadata: Metadata = metadataForPath("/terms-of-service");

export default function TermsOfServicePage() {
  return <LegalDocument doc={getLegalDocument("terms")} />;
}
