import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyDetail from "@/components/sections/marketing/CaseStudyDetail";
import { getCaseStudyBySlug, MARKETING_CASE_STUDIES } from "@/data/marketing-case-studies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return MARKETING_CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = MARKETING_CASE_STUDIES.find((item) => item.slug === slug);
  if (!study) return { title: "Case Study | FyerX Marketing" };

  return {
    title: `${study.title} | FyerX Marketing`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return <CaseStudyDetail study={study} />;
}
