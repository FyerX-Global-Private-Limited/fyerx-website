import Link from "next/link";
import { DivisionServicesNav } from "@/components/services/DivisionServicesNav";
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
import LatestBlogs from "@/components/sections/LatestBlogs";
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
      <nav aria-label="Explore marketing services" className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-3 px-5 py-6 text-sm font-semibold text-slate-900 sm:px-8">
        <Link className="underline underline-offset-4" href="/lead-generation-agency-in-bangalore">Lead generation in Bangalore</Link>
        <Link className="underline underline-offset-4" href="/marketing/services">All marketing services</Link>
        <Link className="underline underline-offset-4" href="/us/b2b-marketing-for-it-services">B2B marketing for US IT services</Link>
      </nav>
      <LatestBlogs topic="marketing" />
      <FaqSection />
      <TestimonialsCTA />
      <DivisionServicesNav division="marketing" />
    </>
  );
}
