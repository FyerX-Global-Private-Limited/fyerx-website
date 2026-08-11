import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyDetail from "@/components/sections/talent/CaseStudyDetail";
import { getTalentCaseStudyBySlug, TALENT_CASE_STUDIES } from "@/data/talent-case-studies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return TALENT_CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = TALENT_CASE_STUDIES.find((item) => item.slug === slug);
  if (!study) return { title: "Case Study | FyerX Talent" };

  return {
    title: `${study.title} | FyerX Talent`,
    description: study.summary,
  };
}

export default async function TalentCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getTalentCaseStudyBySlug(slug);
  if (!study) notFound();

  return <CaseStudyDetail study={study} />;
}
