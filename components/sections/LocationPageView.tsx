import MarketingLayout from "@/app/(marketing)/layout";
import TalentLayout from "@/app/(talent)/layout";
import MarketingHero from "@/components/sections/marketing/MarketingHero";
import MarketingTrackRecord from "@/components/sections/marketing/TrackRecord";
import TrustBar from "@/components/sections/main/TrustBar";
import ServicesGrid from "@/components/sections/marketing/ServicesGrid";
import MarketingCapabilities from "@/components/sections/marketing/MarketingCapabilityAreas";
import AIPlatformHero from "@/components/sections/marketing/AIPlatformHero";
import MarketingCases from "@/components/sections/marketing/StackedScrollSection";
import Leadership from "@/components/sections/marketing/Leadership";
import MarketingCampaigns from "@/components/sections/marketing/CampaignsSection";
import Integrations from "@/components/sections/marketing/IntegrationsSection";
import MarketingEnterprise from "@/components/sections/marketing/EnterpriseSection";
import MarketingFaq from "@/components/sections/marketing/FaqSection";
import MarketingEnquiry from "@/components/sections/marketing/TestimonialsCTA";
import TalentHero from "@/components/sections/talent/MarketingHero";
import TalentClosing from "@/components/sections/talent/TalentClosingSection";
import TalentTrackRecord from "@/components/sections/talent/TrackRecord";
import Foundation from "@/components/sections/talent/FoundationSection";
import TalentCapabilities from "@/components/sections/talent/TalentCapabilitySection";
import ProjectStaffingPods from "@/components/sections/talent/ProjectStaffingPods";
import TalentCases from "@/components/sections/talent/StackedScrollSection";
import Industries from "@/components/sections/talent/IndustriesSection";
import TalentCampaigns from "@/components/sections/talent/CampaignsSection";
import TalentEnterprise from "@/components/sections/talent/EnterpriseSection";
import TalentEnquiry from "@/components/sections/talent/TestimonialsCTA";
import TalentFaq from "@/components/sections/talent/FaqSection";
import LatestBlogs from "@/components/sections/LatestBlogs";
import { DivisionServicesNav } from "@/components/services/DivisionServicesNav";
import type { LocationPage } from "@/data/location-pages";
import { LocalServiceBrief, LocalServiceExample, LocalServiceScope, playbookFor } from "./LocationServiceContent";
import CandidateLocationGuide from "./CandidateLocationGuide";

const careersUrl = "https://fyerx.zohorecruit.in/jobs/Careers";

export default function LocationPageView({ page }: { page: LocationPage }) {
  const { city, copy, service, division } = page;
  const playbook = playbookFor(page);
  const marketing = division === "marketing";
  const hero = {
    title: service.name + " in",
    highlight: city,
    description: copy.intro,
    href: service.careers ? careersUrl : "#contact",
    action: service.careers ? "Explore Current Openings" : marketing ? "Discuss Your Marketing Brief" : "Discuss Your Hiring Brief"
  };
  const localQuestions = [
    { q: copy.question, a: copy.answer },
    ...playbook.questions.map(([q, a]) => ({ q, a }))
  ];
  const scope = <LocalServiceScope page={page} playbook={playbook} />;
  const example = <LocalServiceExample page={page} playbook={playbook} />;
  const brief = <LocalServiceBrief page={page} playbook={playbook} actionHref={hero.href} />;

  if (marketing) {
    return (
      <MarketingLayout>
        <MarketingHero location={hero} />
        <MarketingTrackRecord />
        <TrustBar highlightClassName="marketing-gradient-text" />
        <ServicesGrid />
        {scope}
        <MarketingCapabilities />
        <AIPlatformHero />
        {example}
        <MarketingCases featured={service.proof} />
        <Leadership />
        <MarketingCampaigns />
        <Integrations />
        <MarketingEnterprise />
        {brief}
        <LatestBlogs topic="marketing" />
        <MarketingFaq localQuestions={localQuestions} />
        <MarketingEnquiry />
        <DivisionServicesNav division="marketing" />
      </MarketingLayout>
    );
  }

  if (service.careers) {
    return (
      <TalentLayout>
        <TalentHero location={hero} />
        {scope}
        {example}
        <CandidateLocationGuide city={page.cityKey} careersUrl={careersUrl} />
        {brief}
        <LatestBlogs topic="talent" />
        <TalentFaq localQuestions={localQuestions} includeGeneral={false} />
      </TalentLayout>
    );
  }

  return (
    <TalentLayout>
      <TalentHero location={hero} />
      <TalentClosing />
      <TalentTrackRecord />
      <Foundation />
      {scope}
      <TalentCapabilities />
      <ProjectStaffingPods />
      {example}
      <TalentCases featured={service.proof} />
      <Industries />
      <TalentCampaigns />
      <TalentEnterprise />
      {brief}
      <TalentEnquiry />
      <LatestBlogs topic="talent" />
      <TalentFaq localQuestions={localQuestions} />
      <DivisionServicesNav division="talent" />
    </TalentLayout>
  );
}

