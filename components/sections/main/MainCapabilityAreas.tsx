"use client";

import CapabilityAreasSection from "@/components/sections/shared/CapabilityAreasSection";
import { MAIN_CAPABILITY_AREAS } from "@/data/capability-areas";

export default function MainCapabilityAreas() {
  return <CapabilityAreasSection content={MAIN_CAPABILITY_AREAS} variant="main" />;
}
