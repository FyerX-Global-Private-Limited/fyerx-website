import MarketingHero from "@/components/sections/marketing/MarketingHero";
import ServicesGrid from "@/components/sections/marketing/ServicesGrid";
import TrackRecord from "@/components/sections/marketing/TrackRecord";
import TrustBar from "@/components/sections/marketing/TrustBar";
import Leadership from "@/components/sections/main/Leadership";
import AIPlatformHero from "@/components/sections/marketing/AIPlatformHero";
import StackedScrollSection from "@/components/sections/marketing/StackedScrollSection";

import CampaignsSection from "@/components/sections/marketing/CampaignsSection";
import TestimonialsCTA from "@/components/sections/marketing/TestimonialsCTA";
import IntegrationsSection from "@/components/sections/marketing/IntegrationsSection";
import EnterpriseSection from "@/components/sections/marketing/EnterpriseSection";
import ResourcesSection from "@/components/sections/marketing/ResourcesSection";
import FaqSection from "@/components/sections/marketing/FaqSection";
import IntegrationsHero from "@/components/sections/marketing/IntegrationsHero";
import SeeWhatYouCanBuild from "@/components/sections/marketing/SeeWhatYouCanBuild";
export default function MarketingPage() {
  return (
    <>
      
      <MarketingHero />
      <TrackRecord />
         <TrustBar />
      <ServicesGrid />
      <AIPlatformHero />
      <StackedScrollSection />
      <Leadership />
        <CampaignsSection />
             <IntegrationsHero />
             <IntegrationsSection />
             <EnterpriseSection />
             <SeeWhatYouCanBuild />
             <ResourcesSection />
              <FaqSection />
      <TestimonialsCTA />         
 
    </>
  );
}
