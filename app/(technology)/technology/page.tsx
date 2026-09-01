import type { Metadata } from "next";
import TechHero from "@/components/sections/technology/TechHero";
import TechBuiltToSection from "@/components/sections/technology/TechBuiltToSection";
import TechFoundationSection from "@/components/sections/technology/TechFoundationSection";
import TechServicesSection from "@/components/sections/technology/TechServicesSection";
import TechPrioritiesScroll from "@/components/sections/technology/TechPrioritiesScroll";
import TechStackedScrollSection from "@/components/sections/technology/TechStackedScrollSection";
import TechSolutionsSection from "@/components/sections/technology/TechSolutionsSection";
import TechIndustriesSection from "@/components/sections/technology/TechIndustriesSection";
import TechApproachSection from "@/components/sections/technology/TechApproachSection";
import TechStartSection from "@/components/sections/technology/TechStartSection";
import TechInsightsSection from "@/components/sections/technology/TechInsightsSection";
import TechTrustSection from "@/components/sections/technology/TechTrustSection";
import TechFaqSection from "@/components/sections/technology/TechFaqSection";
import TechFinalCta from "@/components/sections/technology/TechFinalCta";
import TechContactSection from "@/components/sections/technology/TechContactSection";

export const metadata: Metadata = {
  title: "Enterprise Platforms, Digital Transformation & Cloud | FyerX Technology",
  description:
    "We help organisations modernise core systems, connect disconnected operations and turn data, cloud and AI investment into practical business value.",
};

export default function TechnologyHomePage() {
  return (
    <>
      <TechHero />
      <TechBuiltToSection />
      <TechFoundationSection />
      <TechServicesSection />
      <TechPrioritiesScroll />
      <TechStackedScrollSection />
      <TechSolutionsSection />
      <TechIndustriesSection />
      <TechApproachSection />
      <TechStartSection />
      <TechInsightsSection />
      <TechTrustSection />
      <TechFaqSection />
      <TechFinalCta />
      <TechContactSection />
    </>
  );
}
