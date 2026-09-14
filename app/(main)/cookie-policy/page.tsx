import type { Metadata } from "next";
import LegalDocument from "@/components/sections/legal/LegalDocument";
import { getLegalDocument } from "@/lib/legal-documents";

import { metadataForPath } from "@/lib/seo";

export const metadata: Metadata = metadataForPath("/cookie-policy");

export default function CookiePolicyPage() {
  return <LegalDocument doc={getLegalDocument("cookie")} />;
}
