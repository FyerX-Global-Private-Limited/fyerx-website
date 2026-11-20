import Link from "next/link";
import { getCaseStudyBySlug } from "@/data/marketing-case-studies";
import { getTalentCaseStudyBySlug } from "@/data/talent-case-studies";
import { getTechCaseStudyBySlug } from "@/data/technology-case-studies";
import type { ServiceEntry } from "@/lib/service-directory";
import styles from "./service-detail.module.css";

const caseSlugs: Record<string, string> = {
  "go-to-market-strategy": "wegofin",
  "competitive-positioning": "workdayz",
  "landing-pages-nurture": "wegofin",
  seo: "sayyam",
  "local-seo": "onroadz",
  "paid-search": "onroadz",
  "paid-social": "adro",
  "landing-page-optimisation": "adro",
  "brand-strategy-identity": "workdayz",
  "website-ux-design": "cinepebble",
  "social-media-management": "kaypee-space",
  "content-strategy-production": "sayyam",
  "it-contract-staffing": "sap-s4hana-transformation",
  "project-based-staffing": "cloud-devops-staffing",
  "servicenow-enterprise-platform-talent": "servicenow-implementation",
  "data-ai-talent": "data-ai-delivery",
  "devops-cloud-talent": "cloud-devops-staffing",
  "software-development-roles": "salesforce-implementation",
};

const blueprintSlugs: Record<string, string> = {
  salesforce: "crm-revenue-operations-enablement",
  "microsoft-business-applications": "crm-revenue-operations-enablement",
  "application-modernisation": "legacy-application-modernisation",
  "data-engineering-platforms": "data-foundation-for-applied-ai",
  "ai-enablement": "data-foundation-for-applied-ai",
  "cloud-transformation": "cloud-migration-with-release-discipline",
  "devops-ci-cd": "cloud-migration-with-release-discipline",
  "strategy-roadmap": "technology-roadmap-delivery-mobilisation",
  "transformation-planning": "technology-roadmap-delivery-mobilisation",
};

export function ServiceReference({entry}: {entry: ServiceEntry}) {
  if (entry.division === "technology") {
    const blueprint = getTechCaseStudyBySlug(blueprintSlugs[entry.slug]);
    if (!blueprint) return null;
    return <aside className={styles.reference}><p>FyerX delivery blueprint</p>
      <h3>{blueprint.title}</h3><p>{blueprint.summary}</p>
      <Link href={`/technology/case-studies/${blueprint.slug}`}>View the programme scope and deliverables</Link>
    </aside>;
  }
  const caseSlug = caseSlugs[entry.slug];
  if (!caseSlug) return null;
  const study = entry.division === "talent" ? getTalentCaseStudyBySlug(caseSlug) : getCaseStudyBySlug(caseSlug);
  if (!study) return null;
  return <aside className={styles.reference}><p>FyerX case study · {study.clientName}</p>
    <h3>{study.title}</h3><p>{study.summary}</p>
    {study.metrics.length > 0 && <dl>{study.metrics.slice(0, 2).map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}</dl>}
    <Link href={`/${entry.division}/case-studies/${study.slug}`}>Read the {study.clientName} case study</Link>
  </aside>;
}
