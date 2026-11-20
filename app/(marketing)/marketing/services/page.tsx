import { DivisionServicesNav } from "@/components/services/DivisionServicesNav";
import type { Metadata } from "next";
import { metadataForPath } from "@/lib/seo";

export const metadata: Metadata = metadataForPath("/marketing/services");

export default function ServicesPage() {
  return <DivisionServicesNav division="marketing" pageTitle />;
}
