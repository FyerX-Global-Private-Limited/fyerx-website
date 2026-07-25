import MarketingHero from "@/components/sections/talent/MarketingHero";
import ServicesGrid from "@/components/sections/talent/ServicesGrid";
import TrackRecord from "@/components/sections/talent/TrackRecord";
import TrustBar from "@/components/sections/marketing/TrustBar";
import Leadership from "@/components/sections/talent/Leadership";
import AIPlatformHero from "@/components/sections/talent/AIPlatformHero";
import StackedScrollSection from "@/components/sections/talent/StackedScrollSection";

import CampaignsSection from "@/components/sections/talent/CampaignsSection";
import TestimonialsCTA from "@/components/sections/talent/TestimonialsCTA";
import IntegrationsSection from "@/components/sections/talent/IntegrationsSection";
import EnterpriseSection from "@/components/sections/talent/EnterpriseSection";
import ResourcesSection from "@/components/sections/talent/ResourcesSection";
import FaqSection from "@/components/sections/talent/FaqSection";
export default function MarketingPage() {
  return (
    <>
      
      <MarketingHero />
      <TrackRecord />
         {/* <TrustBar /> */}
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
