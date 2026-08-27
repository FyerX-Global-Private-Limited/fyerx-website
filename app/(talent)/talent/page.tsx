import type { Metadata } from "next";
import MarketingHero from "@/components/sections/talent/MarketingHero";
import FoundationSection from "@/components/sections/talent/FoundationSection";
import TrackRecord from "@/components/sections/talent/TrackRecord";
import TalentCapabilitySection from "@/components/sections/talent/TalentCapabilitySection";
import StackedScrollSection from "@/components/sections/talent/StackedScrollSection";
import IndustriesSection from "@/components/sections/talent/IndustriesSection";
import CampaignsSection from "@/components/sections/talent/CampaignsSection";
import EnterpriseSection from "@/components/sections/talent/EnterpriseSection";
import ResourcesSection from "@/components/sections/talent/ResourcesSection";
import TestimonialsCTA from "@/components/sections/talent/TestimonialsCTA";
import FaqSection from "@/components/sections/talent/FaqSection";
import TalentClosingSection from "@/components/sections/talent/TalentClosingSection";

export const metadata: Metadata = {
  title: "IT Staffing & Technology Recruitment | FyerX Talent",
  description:
    "Hire contract professionals, permanent employees, and project teams across ServiceNow, SAP, Salesforce, Data & AI, Cloud, DevOps, and more.",
};

export default function TalentHomePage() {
  return (
    <>
      <MarketingHero />
      <TalentClosingSection />
      <TrackRecord />
      <FoundationSection />
      <TalentCapabilitySection />
      <StackedScrollSection />
      <IndustriesSection />
      <CampaignsSection />
      <EnterpriseSection />
      <ResourcesSection />
      <TestimonialsCTA />
      <FaqSection />
    </>
  );
}
