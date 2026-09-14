export const SITE_URL = "https://fyerx.com";
export const SITE_OG_IMAGE = `${SITE_URL}/logo.webp`;

export type SeoRobots = "index,follow" | "noindex,follow";
export type SeoOgType = "website" | "article";

export type SeoEntry = {
  path: string;
  title: string;
  description: string;
  canonical: string;
  robots: SeoRobots;
  ogType: SeoOgType;
};

/** Approved indexable URLs from FINAL_FyerX_SEO_Metadata_Manifest_UTF8.csv. */
export const SEO_MANIFEST: SeoEntry[] = [
  {
    path: "/",
    title: "FyerX Global | Growth, Technology & Talent Solutions",
    description:
      "FyerX Global is a Bengaluru-based business partner helping ambitious companies grow, build technology capability and access specialist talent for critical business needs.",
    canonical: SITE_URL,
    robots: "index,follow",
    ogType: "website",
  },
  {
    path: "/marketing",
    title: "Digital Marketing Agency in Bangalore | FyerX",
    description:
      "FyerX is a Bangalore digital marketing agency offering SEO, performance marketing, social media, branding, content, web and video production.",
    canonical: `${SITE_URL}/marketing`,
    robots: "index,follow",
    ogType: "website",
  },
  {
    path: "/talent",
    title: "IT Staffing & Technology Recruitment | FyerX Talent",
    description:
      "FyerX Talent provides IT staffing, technology recruitment, contract staffing, project teams, permanent hiring and RPO for specialist roles.",
    canonical: `${SITE_URL}/talent`,
    robots: "index,follow",
    ogType: "website",
  },
  {
    path: "/technology",
    title: "Technology Consulting & Digital Transformation Services | FyerX",
    description:
      "FyerX provides technology consulting and delivery support across enterprise platforms, cloud, DevOps, data, AI, software engineering and transformation.",
    canonical: `${SITE_URL}/technology`,
    robots: "index,follow",
    ogType: "website",
  },
  {
    path: "/contact",
    title: "Contact FyerX | Marketing, Talent & Technology",
    description:
      "Talk to FyerX about marketing, talent or technology requirements. Share your business need and our team will respond.",
    canonical: `${SITE_URL}/contact`,
    robots: "index,follow",
    ogType: "website",
  },
  {
    path: "/about",
    title: "About FyerX Global | Business Capability Partner",
    description:
      "Learn about FyerX Global, a Bengaluru-based business group supporting organisations through marketing, talent and technology capability.",
    canonical: `${SITE_URL}/about`,
    robots: "index,follow",
    ogType: "website",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | FyerX Global",
    description:
      "Read the FyerX Global privacy policy, including how we collect, use, store and protect website enquiry and candidate information.",
    canonical: `${SITE_URL}/privacy-policy`,
    robots: "index,follow",
    ogType: "website",
  },
  {
    path: "/cookie-policy",
    title: "Cookie Policy | FyerX Global",
    description:
      "Read the FyerX Global cookie policy and learn how cookies and similar technologies are used on this website.",
    canonical: `${SITE_URL}/cookie-policy`,
    robots: "index,follow",
    ogType: "website",
  },
  {
    path: "/refund-policy",
    title: "Refund Policy | FyerX Global",
    description:
      "Read the FyerX Global refund policy for applicable services and website transactions.",
    canonical: `${SITE_URL}/refund-policy`,
    robots: "index,follow",
    ogType: "website",
  },
  {
    path: "/terms-of-service",
    title: "Terms of Service | FyerX Global",
    description:
      "Read the FyerX Global terms of service governing use of this website and applicable service engagements.",
    canonical: `${SITE_URL}/terms-of-service`,
    robots: "index,follow",
    ogType: "website",
  },
  {
    path: "/marketing/services",
    title: "Digital Marketing Services in Bangalore | FyerX",
    description:
      "Explore FyerX digital marketing services in Bangalore: SEO, Google Ads, social media, content marketing, branding, web development and video production.",
    canonical: `${SITE_URL}/marketing/services`,
    robots: "index,follow",
    ogType: "website",
  },
  {
    path: "/marketing/case-studies",
    title: "Digital Marketing Case Studies | FyerX",
    description:
      "Explore FyerX digital marketing case studies covering SEO, performance marketing, social media, branding, content and growth campaigns.",
    canonical: `${SITE_URL}/marketing/case-studies`,
    robots: "index,follow",
    ogType: "website",
  },
  {
    path: "/marketing/case-studies/wegofin",
    title: "Wegofin Digital Marketing Case Study | FyerX",
    description:
      "Explore FyerX's digital marketing work for Wegofin, including the challenge, approach and delivered marketing support.",
    canonical: `${SITE_URL}/marketing/case-studies/wegofin`,
    robots: "index,follow",
    ogType: "article",
  },
  {
    path: "/marketing/case-studies/avekshaa",
    title: "Avekshaa Digital Marketing Case Study | FyerX",
    description:
      "Explore FyerX's digital marketing work for Avekshaa, including the challenge, approach and delivered marketing support.",
    canonical: `${SITE_URL}/marketing/case-studies/avekshaa`,
    robots: "index,follow",
    ogType: "article",
  },
  {
    path: "/marketing/case-studies/trndigital",
    title: "TRN Digital Marketing Case Study | FyerX",
    description:
      "Explore FyerX's digital marketing work for TRN Digital, including business context, strategy and execution.",
    canonical: `${SITE_URL}/marketing/case-studies/trndigital`,
    robots: "index,follow",
    ogType: "article",
  },
  {
    path: "/marketing/case-studies/kaypee-space",
    title: "Kaypee Space Marketing Case Study | FyerX",
    description:
      "Explore FyerX's marketing work for Kaypee Space, including campaign context, approach and delivered work.",
    canonical: `${SITE_URL}/marketing/case-studies/kaypee-space`,
    robots: "index,follow",
    ogType: "article",
  },
  {
    path: "/marketing/case-studies/adro",
    title: "Adro Digital Marketing Case Study | FyerX",
    description:
      "Explore FyerX's digital marketing work for Adro, including the challenge, marketing approach and delivered support.",
    canonical: `${SITE_URL}/marketing/case-studies/adro`,
    robots: "index,follow",
    ogType: "article",
  },
  {
    path: "/marketing/case-studies/onroadz",
    title: "Onroadz Digital Marketing Case Study | FyerX",
    description:
      "Explore FyerX's digital marketing work for Onroadz, including strategy, creative and campaign execution.",
    canonical: `${SITE_URL}/marketing/case-studies/onroadz`,
    robots: "index,follow",
    ogType: "article",
  },
  {
    path: "/talent/case-studies",
    title: "IT Staffing & Technology Recruitment Case Studies | FyerX",
    description:
      "Explore FyerX Talent case studies in IT staffing, technology recruitment, contract deployment, project teams and specialist hiring.",
    canonical: `${SITE_URL}/talent/case-studies`,
    robots: "index,follow",
    ogType: "website",
  },
  {
    path: "/talent/case-studies/servicenow-implementation",
    title: "ServiceNow Staffing Case Study | FyerX Talent",
    description:
      "See how FyerX Talent supported a ServiceNow implementation with architecture, business analysis, development and administration talent.",
    canonical: `${SITE_URL}/talent/case-studies/servicenow-implementation`,
    robots: "index,follow",
    ogType: "article",
  },
  {
    path: "/talent/case-studies/salesforce-implementation",
    title: "Salesforce Staffing Case Study | FyerX Talent",
    description:
      "Explore FyerX Talent's Salesforce implementation staffing case study for developers, architects, administrators and business analysts.",
    canonical: `${SITE_URL}/talent/case-studies/salesforce-implementation`,
    robots: "index,follow",
    ogType: "article",
  },
  {
    path: "/talent/case-studies/sap-s4hana-transformation",
    title: "SAP S/4HANA Staffing Case Study | FyerX Talent",
    description:
      "See how FyerX Talent supported an SAP S/4HANA transformation with functional and technical SAP specialist hiring.",
    canonical: `${SITE_URL}/talent/case-studies/sap-s4hana-transformation`,
    robots: "index,follow",
    ogType: "article",
  },
  {
    path: "/talent/case-studies/cloud-devops-staffing",
    title: "Cloud & DevOps Staffing Case Study | FyerX Talent",
    description:
      "Explore FyerX Talent's Cloud and DevOps staffing case study for a time-bound customer migration project.",
    canonical: `${SITE_URL}/talent/case-studies/cloud-devops-staffing`,
    robots: "index,follow",
    ogType: "article",
  },
  {
    path: "/talent/case-studies/data-ai-delivery",
    title: "Data & AI Staffing Case Study | FyerX Talent",
    description:
      "See how FyerX Talent supported a technology services team with data engineering, analytics and AI delivery talent.",
    canonical: `${SITE_URL}/talent/case-studies/data-ai-delivery`,
    robots: "index,follow",
    ogType: "article",
  },
  {
    path: "/talent/case-studies/quality-engineering",
    title: "QA Automation Staffing Case Study | FyerX Talent",
    description:
      "Explore FyerX Talent's quality engineering staffing case study for SDET, automation QA, web and API testing roles.",
    canonical: `${SITE_URL}/talent/case-studies/quality-engineering`,
    robots: "index,follow",
    ogType: "article",
  },
  {
    path: "/technology/case-studies",
    title: "Technology Consulting Case Studies | FyerX",
    description:
      "Explore FyerX technology case studies across ServiceNow, Salesforce, SAP, cloud, DevOps, data, AI and legacy modernisation.",
    canonical: `${SITE_URL}/technology/case-studies`,
    robots: "index,follow",
    ogType: "website",
  },
];

/**
 * Live Technology blueprint URLs. The SEO CSV listed different slugs that are
 * not implemented; canonicals here match the current routes so sitemap URLs 200.
 */
export const LIVE_TECHNOLOGY_CASE_STUDIES: SeoEntry[] = [
  {
    path: "/technology/case-studies/servicenow-workflow-transformation",
    title: "ServiceNow Platform Optimisation Case Study | FyerX",
    description:
      "Explore FyerX's ServiceNow platform optimisation case study, including the business challenge, approach and delivery support.",
    canonical: `${SITE_URL}/technology/case-studies/servicenow-workflow-transformation`,
    robots: "index,follow",
    ogType: "article",
  },
  {
    path: "/technology/case-studies/crm-revenue-operations-enablement",
    title: "Salesforce Customer Operations Case Study | FyerX",
    description:
      "See FyerX's Salesforce customer operations case study, including CRM process, platform and delivery context.",
    canonical: `${SITE_URL}/technology/case-studies/crm-revenue-operations-enablement`,
    robots: "index,follow",
    ogType: "article",
  },
  {
    path: "/technology/case-studies/cloud-migration-with-release-discipline",
    title: "Cloud & DevOps Migration Case Study | FyerX",
    description:
      "See FyerX's cloud and DevOps migration case study, including the migration challenge, delivery approach and technology context.",
    canonical: `${SITE_URL}/technology/case-studies/cloud-migration-with-release-discipline`,
    robots: "index,follow",
    ogType: "article",
  },
  {
    path: "/technology/case-studies/data-foundation-for-applied-ai",
    title: "Data & AI Operating Foundation Case Study | FyerX",
    description:
      "Explore FyerX's data and AI operating foundation case study, including data capability, delivery approach and programme context.",
    canonical: `${SITE_URL}/technology/case-studies/data-foundation-for-applied-ai`,
    robots: "index,follow",
    ogType: "article",
  },
  {
    path: "/technology/case-studies/legacy-application-modernisation",
    title: "Legacy Application Modernisation Case Study | FyerX",
    description:
      "See FyerX's legacy application modernisation case study, including programme context, technology approach and delivery support.",
    canonical: `${SITE_URL}/technology/case-studies/legacy-application-modernisation`,
    robots: "index,follow",
    ogType: "article",
  },
  {
    path: "/technology/case-studies/technology-roadmap-delivery-mobilisation",
    title: "Technology Roadmap & Delivery Mobilisation | FyerX",
    description:
      "Turn an unclear technology priority into a focused plan with the right architecture, delivery approach, team structure and governance.",
    canonical: `${SITE_URL}/technology/case-studies/technology-roadmap-delivery-mobilisation`,
    robots: "index,follow",
    ogType: "article",
  },
];

export const CONTACT_NOINDEX_FORMS = ["marketing", "talent", "technology"] as const;

export const ALL_INDEXABLE_ENTRIES: SeoEntry[] = [
  ...SEO_MANIFEST,
  ...LIVE_TECHNOLOGY_CASE_STUDIES,
];

const BY_PATH = new Map(ALL_INDEXABLE_ENTRIES.map((entry) => [entry.path, entry]));

export function getSeoEntry(path: string): SeoEntry | undefined {
  return BY_PATH.get(path);
}
