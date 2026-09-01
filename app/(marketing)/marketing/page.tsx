import type { Metadata } from "next";
import MarketingHero from "@/components/sections/marketing/MarketingHero";
import ServicesGrid from "@/components/sections/marketing/ServicesGrid";
import TrackRecord from "@/components/sections/marketing/TrackRecord";
import TrustBar from "@/components/sections/main/TrustBar";
import Leadership from "@/components/sections/marketing/Leadership";
import AIPlatformHero from "@/components/sections/marketing/AIPlatformHero";
import StackedScrollSection from "@/components/sections/marketing/StackedScrollSection";

import CampaignsSection from "@/components/sections/marketing/CampaignsSection";
import TestimonialsCTA from "@/components/sections/marketing/TestimonialsCTA";
import IntegrationsSection from "@/components/sections/marketing/IntegrationsSection";
import EnterpriseSection from "@/components/sections/marketing/EnterpriseSection";
import ResourcesSection from "@/components/sections/marketing/ResourcesSection";
import FaqSection from "@/components/sections/marketing/FaqSection";

export const metadata: Metadata = {
  title: "Marketing Strategy, Demand Generation & Growth | FyerX",
  description:
    "FyerX helps growth-focused companies turn positioning, campaigns, content, search visibility, and automation into a connected marketing engine.",
};

export default function MarketingPage() {
  return (
    <>
      <MarketingHero />
      <TrackRecord />
      <TrustBar highlightClassName="marketing-gradient-text" />
      <ServicesGrid />
      <AIPlatformHero />
      <StackedScrollSection />
      <Leadership />
      <CampaignsSection />
      <IntegrationsSection />
      <EnterpriseSection />
      <ResourcesSection />
      <FaqSection />
      <TestimonialsCTA />
    </>
  );
}
