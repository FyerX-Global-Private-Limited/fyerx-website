import Link from "next/link";
import { DivisionServicesNav } from "@/components/services/DivisionServicesNav";
import type { Metadata } from "next";
import MarketingHero from "@/components/sections/talent/MarketingHero";
import FoundationSection from "@/components/sections/talent/FoundationSection";
import TrackRecord from "@/components/sections/talent/TrackRecord";
import TalentCapabilitySection from "@/components/sections/talent/TalentCapabilitySection";
import ProjectStaffingPods from "@/components/sections/talent/ProjectStaffingPods";
import StackedScrollSection from "@/components/sections/talent/StackedScrollSection";
import IndustriesSection from "@/components/sections/talent/IndustriesSection";
import CampaignsSection from "@/components/sections/talent/CampaignsSection";
import EnterpriseSection from "@/components/sections/talent/EnterpriseSection";
import LatestBlogs from "@/components/sections/LatestBlogs";
import TestimonialsCTA from "@/components/sections/talent/TestimonialsCTA";
import FaqSection from "@/components/sections/talent/FaqSection";
import TalentClosingSection from "@/components/sections/talent/TalentClosingSection";

import { metadataForPath } from "@/lib/seo";

export const metadata: Metadata = metadataForPath("/talent");

export default function TalentHomePage() {
  return (
    <>
      <MarketingHero />
      <TalentClosingSection />
      <TrackRecord />
      <FoundationSection />
      <TalentCapabilitySection />
      <ProjectStaffingPods />
      <StackedScrollSection />
      <IndustriesSection />
      <CampaignsSection />
      <EnterpriseSection />
      <TestimonialsCTA />
      <nav aria-label="Explore staffing services" className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-3 px-5 py-6 text-sm font-semibold text-slate-900 sm:px-8">
        <Link className="underline underline-offset-4" href="/staffing-agency-in-bangalore">Staffing services in Bangalore</Link>
      </nav>
      <LatestBlogs topic="talent" />
      <FaqSection />
      <DivisionServicesNav division="talent" />
    </>
  );
}
