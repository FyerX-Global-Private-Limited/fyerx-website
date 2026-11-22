import type { Metadata } from "next";
import Link from "next/link";
import HomeHero from "@/components/sections/main/Hero";
import TrustBar from "@/components/sections/main/TrustBar";
import WhoWeAre from "@/components/sections/main/WhoWeAre";
import HowWeWork from "@/components/sections/main/HowWeWork";
import Capabilities from "@/components/sections/main/Capabilities";
import SecurityControl from "@/components/sections/main/securitycontrol";
import Leadership from "@/components/sections/main/Leadership";
import MarketingHero from "@/components/sections/marketing/MarketingHero";
import MarketingServicesGrid from "@/components/sections/marketing/ServicesGrid";
import MarketingCapabilityAreas from "@/components/sections/marketing/MarketingCapabilityAreas";
import MarketingCases from "@/components/sections/marketing/StackedScrollSection";
import MarketingIntegrations from "@/components/sections/marketing/IntegrationsSection";
import MarketingEnterprise from "@/components/sections/marketing/EnterpriseSection";
import MarketingFaq from "@/components/sections/marketing/FaqSection";
import TalentHero from "@/components/sections/talent/MarketingHero";
import TalentClosing from "@/components/sections/talent/TalentClosingSection";
import TalentFoundation from "@/components/sections/talent/FoundationSection";
import TalentCapabilitySection from "@/components/sections/talent/TalentCapabilitySection";
import TalentPods from "@/components/sections/talent/ProjectStaffingPods";
import TalentCases from "@/components/sections/talent/StackedScrollSection";
import TalentEnterprise from "@/components/sections/talent/EnterpriseSection";
import TalentFaq from "@/components/sections/talent/FaqSection";
import LatestBlogs from "@/components/sections/LatestBlogs";
import { ContactEnquiryForm } from "@/components/sections/contact/ContactEnquiryForm";
import { SITE_URL } from "@/data/seo-metadata";
import { usOffers, usPaths, type UsOfferKey } from "@/data/us-offers";
import { usContent, usFoundations, usHubCards, usHubControl, usHubWork, usMarketingCards } from "@/data/us-page-copy";
import { buildMetadata } from "@/lib/seo";

export function usMetadata(path: string, title: string, description: string): Metadata {
  const metadata = buildMetadata({ path, title: title + " | FyerX", description, canonical: SITE_URL + path, robots: "index,follow", ogType: "website" });
  return { ...metadata, openGraph: { ...metadata.openGraph, locale: "en_US" } };
}

const enquiry = "#enquiry";
const marketingKey = "b2b-marketing-for-it-services";
const wp = "home-main home-main--site min-w-0 overflow-x-clip";

export function UsOverview() {
  return (
    <div lang="en-US" className="home-main home-main--home min-w-0 overflow-x-clip">
      <HomeHero us />
      <TrustBar />
      <div id="us-services" className="scroll-mt-24">
        <WhoWeAre usCards={usHubCards} />
        <nav aria-label="Specialist staffing" className="section-shell mt-5 px-4 text-sm font-semibold">
          <Link href={usPaths.servicenow} className="underline underline-offset-4">ServiceNow staffing</Link>
        </nav>
      </div>
      <HowWeWork content={usHubWork} />
      <Capabilities enquiryHref="#us-services" />
      <SecurityControl content={usHubControl} />
      <Leadership />
      <LatestBlogs />
    </div>
  );
}

export function UsOfferPage({ offerKey }: { offerKey: UsOfferKey }) {
  const offer = usOffers[offerKey];
  const copy = usContent[offerKey];
  const isMarketing = offerKey === marketingKey;
  const hero = { ...copy.hero, href: enquiry, action: offer.action };
  const questions = [...offer.faqs.map(({ title, detail }) => ({ q: title, a: detail })), ...copy.questions];

  return (
    <div lang="en-US" className={isMarketing ? wp : wp + " home-main--talent"}>
      {isMarketing ? (
        <>
          <MarketingHero location={hero} />
          <TrustBar highlightClassName="marketing-gradient-text" />
          <MarketingServicesGrid content={usMarketingCards} />
          <HowWeWork content={copy.workflow} />
          <MarketingCapabilityAreas />
          <SecurityControl content={copy.checkpoints} />
          <MarketingCases featured="workdayz" />
          <MarketingIntegrations />
          <MarketingEnterprise enquiryHref={enquiry} />
          <LatestBlogs topic="marketing" />
          <MarketingFaq localQuestions={questions} includeGeneral={false} />
        </>
      ) : (
        <>
          <TalentHero location={hero} />
          <TalentClosing enquiryHref={enquiry} />
          <TalentFoundation content={usFoundations[offerKey]} />
          <HowWeWork content={copy.workflow} />
          <TalentCapabilitySection />
          <SecurityControl content={copy.checkpoints} />
          <TalentPods enquiryHref={enquiry} />
          <TalentCases featured="servicenow-implementation" />
          <TalentEnterprise enquiryHref={enquiry} />
          <LatestBlogs topic="talent" />
          <TalentFaq localQuestions={questions} includeGeneral={false} />
        </>
      )}
      <section id="enquiry" aria-labelledby="us-enquiry-heading" className="home-section scroll-mt-24">
        <div className="section-shell section-shell--wide">
          <div className="grid gap-6 rounded-[28px] border border-slate-200 bg-neutral-50 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className={isMarketing ? "marketing-gradient-text text-sm font-semibold" : "talent-gradient-text text-sm font-semibold"}>US client services</p>
              <h2 id="us-enquiry-heading" className="section-heading mt-3">{offer.action}</h2>
              <p className="mt-4 max-w-lg leading-relaxed text-[#3d4a5c]">{isMarketing ? "Tell us what you sell, who buys it, and what your sales team wants to improve." : "Share the role, target start date, and the US hours your team needs covered."}</p>
              <nav aria-label="Related services" className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
                <Link href={usPaths.home} className="underline underline-offset-4">All US services</Link>
                <Link href={offer.related.href} className="underline underline-offset-4">{offer.related.label}</Link>
              </nav>
            </div>
            <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
              <ContactEnquiryForm formKey={offer.division} usOffer={offerKey} submitLabel={offer.action} nameGridClassName="grid gap-3 sm:grid-cols-2" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
