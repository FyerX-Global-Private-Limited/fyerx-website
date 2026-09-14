import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyDetail from "@/components/sections/marketing/CaseStudyDetail";
import { CaseStudyJsonLd } from "@/components/seo/SiteJsonLd";
import { getCaseStudyBySlug, MARKETING_CASE_STUDIES } from "@/data/marketing-case-studies";
import { metadataForPath } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return MARKETING_CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return metadataForPath(`/marketing/case-studies/${slug}`);
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <>
      <CaseStudyJsonLd
        section="marketing"
        sectionName="Marketing"
        listingName="Case studies"
        listingPath="/marketing/case-studies"
        studyTitle={study.title}
        studyDescription={study.summary}
        slug={study.slug}
      />
      <CaseStudyDetail study={study} />
    </>
  );
}
