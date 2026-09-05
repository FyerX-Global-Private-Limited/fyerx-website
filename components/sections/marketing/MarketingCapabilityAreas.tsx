"use client";

import CapabilityAreasSection from "@/components/sections/shared/CapabilityAreasSection";
import { MARKETING_CAPABILITY_AREAS } from "@/data/capability-areas";

export default function MarketingCapabilityAreas() {
  return <CapabilityAreasSection content={MARKETING_CAPABILITY_AREAS} variant="marketing" />;
}
