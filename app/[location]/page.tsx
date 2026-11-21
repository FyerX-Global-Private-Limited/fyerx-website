import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarketingLayout from "@/app/(marketing)/layout";
import TalentLayout from "@/app/(talent)/layout";
import MarketingHero from "@/components/sections/marketing/MarketingHero";
import TalentHero from "@/components/sections/talent/MarketingHero";
import MarketingEnquiry from "@/components/sections/marketing/TestimonialsCTA";
import TalentEnquiry from "@/components/sections/talent/TestimonialsCTA";
import TrustBar from "@/components/sections/main/TrustBar";
import LatestBlogs from "@/components/sections/LatestBlogs";
import { PublicImage } from "@/components/ui/PublicImage";
import { getCaseStudyBySlug } from "@/data/marketing-case-studies";
import { getTalentCaseStudyBySlug } from "@/data/talent-case-studies";
import { findLocationPage, locationsPath, type LocationPage } from "@/data/location-pages";
import { SITE_URL } from "@/data/seo-metadata";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ location: string }> };

const careersUrl = "https://fyerx.zohorecruit.in/jobs/Careers";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = findLocationPage((await params).location);
  if (!page) notFound();
  const path = "/" + page.slug;
  const title = page.slug === "digital-marketing-agency-in-bangalore"
    ? "Bangalore Digital Marketing Agency for SEO & Paid Media | FyerX"
    : page.service.name + " in " + page.city + " | FyerX";
  return buildMetadata({
    path, title, description: page.copy.intro, canonical: SITE_URL + path,
    robots: "index,follow", ogType: "website"
  });
}

function CaseStudy({ page }: { page: LocationPage }) {
  const slug = page.service.proof;
  if (!slug) return null;
  const marketing = page.division === "marketing";
  const study = marketing ? getCaseStudyBySlug(slug) : getTalentCaseStudyBySlug(slug);
  if (!study) return null;
  const image = "imageSrc" in study ? study.imageSrc : undefined;
  return (
    <section className="home-section">
      <div className="section-shell section-shell--wide">
        <article className="grid items-center gap-6 rounded-[28px] border border-neutral-200 bg-neutral-50 p-6 sm:p-9 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="text-sm font-semibold text-[#3d4a5c]">Case study · {study.clientName}</p>
            <h2 className="section-heading section-heading--sm mt-3">{study.title}</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-[#3d4a5c]">{study.summary}</p>
            {study.metrics.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {study.metrics.map(({ label, value }) => (
                  <li key={label} className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm">
                    <strong>{value}</strong> {label}
                  </li>
                ))}
              </ul>
            )}
            <Link className="mt-5 inline-block font-semibold underline underline-offset-4" href={ "/" + page.division + "/case-studies/" + slug}>
              Read the {study.clientName} case study
            </Link>
          </div>
          {image && <PublicImage src={image} alt={study.clientName + " case study"} width={944} height={838} className="h-auto w-full rounded-2xl" />}
        </article>
      </div>
    </section>
  );
}

export default async function Page({ params }: Props) {
  const page = findLocationPage((await params).location);
  if (!page) notFound();
  const { city, cityKey, copy, service, division } = page;
  const marketing = division === "marketing";
  const hero = {
    title: service.name + " in",
    highlight: city,
    description: copy.intro,
    href: service.careers ? careersUrl : "#contact",
    action: service.careers ? "Explore Current Openings" : marketing ? "Discuss Your Marketing Brief" : "Discuss Your Hiring Brief"
  };
  const highlight = marketing ? "marketing-gradient-text" : "talent-gradient-text";
  const Layout = marketing ? MarketingLayout : TalentLayout;
  const related = findLocationPage(service.related + "-in-" + cityKey);
  return (
    <Layout>
      {marketing ? <MarketingHero location={hero} /> : <TalentHero location={hero} />}
      {!service.careers && <TrustBar highlightClassName={highlight} />}
      <section className="home-section" aria-labelledby="local-service-title">
        <div className="section-shell section-shell--wide">
          <header className="section-header">
            <p className={"text-sm font-semibold " + highlight}>{service.offer}</p>
            <h2 className="section-heading" id="local-service-title">{copy.heading}</h2>
          </header>
          <div className="section-body grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="rounded-2xl border border-neutral-200 p-5 sm:p-7">
              <h3 className="text-lg font-semibold">{service.careers ? "What to look for" : "How we can help"}</h3>
              <p className="mt-2 leading-relaxed text-[#3d4a5c]">{copy.detail}</p>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-5 sm:p-7">
              <h3 className="text-lg font-semibold">{service.careers ? "Before you apply" : "What to share with us"}</h3>
              <p className="mt-2 leading-relaxed text-[#3d4a5c]">{copy.brief}</p>
            </div>
          </div>
        </div>
      </section>
      <CaseStudy page={page} />
      <LatestBlogs topic={division} />
      <section className="home-section" aria-labelledby="local-faq-title">
        <div className="section-shell section-shell--wide">
          <h2 className="section-heading section-heading--sm" id="local-faq-title">Frequently Asked <span className={highlight}>Questions</span></h2>
          <details className="mt-6 rounded-2xl border border-neutral-200 p-5 sm:p-6">
            <summary className="cursor-pointer font-semibold">{copy.question}</summary>
            <p className="mt-3 max-w-3xl leading-relaxed text-[#3d4a5c]">{copy.answer}</p>
          </details>
          <nav aria-label="Related services" className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold">
            {related && <Link href={"/" + related.slug} className="underline underline-offset-4">{related.service.name} in {city}</Link>}
            <Link href={locationsPath + "#" + cityKey} className="underline underline-offset-4">Explore services in {city}</Link>
          </nav>
        </div>
      </section>
      {service.careers ? null : marketing ? <MarketingEnquiry /> : <TalentEnquiry />}
    </Layout>
  );
}

