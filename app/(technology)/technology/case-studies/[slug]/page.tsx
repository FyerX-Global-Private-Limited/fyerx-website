import { notFound } from "next/navigation";
import TechCaseStudyDetail from "@/components/sections/technology/TechCaseStudyDetail";
import {
  getTechCaseStudyBySlug,
  TECHNOLOGY_CASE_STUDIES,
} from "@/data/technology-case-studies";

export function generateStaticParams() {
  return TECHNOLOGY_CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export default async function TechnologyCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getTechCaseStudyBySlug(slug);
  if (!study) notFound();
  return <TechCaseStudyDetail study={study} />;
}
