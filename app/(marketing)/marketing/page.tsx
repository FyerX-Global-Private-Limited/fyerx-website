import type { Metadata } from "next";
import MarketingHero from "@/components/sections/marketing/MarketingHero";
import ServicesGrid from "@/components/sections/marketing/ServicesGrid";
import MarketingCapabilityAreas from "@/components/sections/marketing/MarketingCapabilityAreas";
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

import { metadataForPath } from "@/lib/seo";

export const metadata: Metadata = metadataForPath("/marketing");

export default function MarketingPage() {
  return (
    <>
      <MarketingHero />
      <TrackRecord />
      <TrustBar highlightClassName="marketing-gradient-text" />
      <ServicesGrid />
      <MarketingCapabilityAreas />
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
