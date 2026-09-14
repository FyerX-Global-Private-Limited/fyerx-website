import type { Metadata } from "next";
import LegalDocument from "@/components/sections/legal/LegalDocument";
import { getLegalDocument } from "@/lib/legal-documents";

import { metadataForPath } from "@/lib/seo";

export const metadata: Metadata = metadataForPath("/privacy-policy");

export default function PrivacyPolicyPage() {
  return <LegalDocument doc={getLegalDocument("privacy")} />;
}
