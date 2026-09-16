import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TechCaseStudyDetail from "@/components/sections/technology/TechCaseStudyDetail";
import { CaseStudyJsonLd } from "@/components/seo/SiteJsonLd";
import {
  getTechCaseStudyBySlug,
  TECHNOLOGY_CASE_STUDIES,
} from "@/data/technology-case-studies";
import { metadataForPath } from "@/lib/seo";

export function generateStaticParams() {
  return TECHNOLOGY_CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    return metadataForPath(`/technology/case-studies/${slug}`);
  } catch {
    return { title: { absolute: "FyerX" }, robots: { index: false, follow: true } };
  }
}

export default async function TechnologyCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getTechCaseStudyBySlug(slug);
  if (!study) notFound();
  return (
    <>
      <CaseStudyJsonLd
        section="technology"
        sectionName="Technology"
        listingName="Delivery blueprints"
        listingPath="/technology/case-studies"
        studyTitle={study.title}
        studyDescription={study.summary}
        slug={study.slug}
        schemaType="CreativeWork"
      />
      <TechCaseStudyDetail study={study} />
    </>
  );
}
