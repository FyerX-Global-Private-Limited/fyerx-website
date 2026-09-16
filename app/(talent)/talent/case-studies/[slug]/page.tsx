import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyDetail from "@/components/sections/talent/CaseStudyDetail";
import { CaseStudyJsonLd } from "@/components/seo/SiteJsonLd";
import { getTalentCaseStudyBySlug, TALENT_CASE_STUDIES } from "@/data/talent-case-studies";
import { metadataForPath } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return TALENT_CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    return metadataForPath(`/talent/case-studies/${slug}`);
  } catch {
    return { title: { absolute: "FyerX" }, robots: { index: false, follow: true } };
  }
}

export default async function TalentCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getTalentCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <>
      <CaseStudyJsonLd
        section="talent"
        sectionName="Talent"
        listingName="Case studies"
        listingPath="/talent/case-studies"
        studyTitle={study.title}
        studyDescription={study.summary}
        slug={study.slug}
      />
      <CaseStudyDetail study={study} />
    </>
  );
}
