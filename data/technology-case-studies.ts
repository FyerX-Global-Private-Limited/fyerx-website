export type TechCaseStudyMetric = {
  value: string;
  label: string;
};

export type TechCaseStudy = {
  slug: string;
  label: string;
  clientName: string;
  categoryLabel: string;
  title: string;
  summary: string;
  services: string[];
  roleChips?: string[];
  logoSrc?: string;
  peekColor: string;
  accentColor: string;
  metrics: TechCaseStudyMetric[];
  challenge: string;
  approach: string[];
  results: string[];
};

export const TECHNOLOGY_CASE_STUDIES: TechCaseStudy[] = [
  {
    slug: "servicenow-platform-optimisation",
    label: "Case Study 01",
    clientName: "Microland",
    categoryLabel: "Enterprise Platforms",
    title: "ServiceNow Platform Optimisation",
    summary:
      "An enterprise IT organisation needed to stabilise ITSM workflows, improve CMDB quality and accelerate adoption after a fragmented ServiceNow rollout.",
    services: [
      "ServiceNow",
      "ITSM",
      "Integration Hub",
      "Delivery Governance",
    ],
    roleChips: ["ITSM", "CMDB", "Flow Designer", "Integration Hub", "Now Assist"],
    logoSrc: "/images/talent/comp-logo-microland.svg",
    peekColor: "#E8F1FB",
    accentColor: "#1F5C99",
    metrics: [
      { value: "12 weeks", label: "Stabilisation window" },
      { value: "3 modules", label: "Priority workflows" },
      { value: "1 owner", label: "Delivery governance model" },
    ],
    challenge:
      "Platform configuration had grown inconsistently across teams, creating adoption friction, unclear ownership and delayed service outcomes.",
    approach: [
      "Mapped current-state workflows, integration debt and operating ownership.",
      "Prioritised ITSM and CMDB improvements with clear acceptance criteria.",
      "Established release cadence, documentation and knowledge transfer.",
    ],
    results: [
      "Core ITSM pathways were standardised for day-to-day operations.",
      "CMDB data quality improved enough to support reliable downstream automation.",
      "A single governance model kept backlog, release and support decisions aligned.",
    ],
  },
  {
    slug: "salesforce-customer-operations",
    label: "Case Study 02",
    clientName: "Solenis",
    categoryLabel: "CRM & Productivity",
    title: "Salesforce Customer Operations Delivery",
    summary:
      "A growth-stage business needed Salesforce Sales and Service Cloud enhancements to reduce handoff friction between sales, service and operations.",
    services: [
      "Salesforce",
      "Sales Cloud",
      "Service Cloud",
      "Automation",
    ],
    roleChips: ["Sales Cloud", "Service Cloud", "Flows", "Experience Cloud"],
    logoSrc: "/images/talent/comp-logo-solenis.svg",
    peekColor: "#EEF0FA",
    accentColor: "#20287A",
    metrics: [
      { value: "2 clouds", label: "Unified operating model" },
      { value: "8 weeks", label: "First release cycle" },
      { value: "4 teams", label: "Aligned on one process" },
    ],
    challenge:
      "Customer data and process ownership were split across tools, creating duplicate work and slow response times for sales and service teams.",
    approach: [
      "Defined a shared customer journey across Sales and Service Cloud.",
      "Automated handoffs and status updates that previously required manual chase.",
      "Rolled out role-based enablement so teams adopted the new process quickly.",
    ],
    results: [
      "Sales and service worked from one customer record model.",
      "Handoffs became visible and measurable across teams.",
      "Leaders gained clearer pipeline and case reporting without spreadsheet workarounds.",
    ],
  },
  {
    slug: "sap-s4hana-readiness",
    label: "Case Study 03",
    clientName: "CGI",
    categoryLabel: "ERP Transformation",
    title: "SAP S/4HANA Delivery Readiness",
    summary:
      "A transformation programme needed architecture clarity, workstream definition and delivery controls before moving from planning into implementation.",
    services: [
      "SAP S/4HANA",
      "Architecture",
      "Programme Definition",
      "Change Planning",
    ],
    roleChips: ["S/4HANA", "Finance", "MM", "ABAP", "BTP"],
    logoSrc: "/images/talent/comp-logo-cgi.svg",
    peekColor: "#E4E8F8",
    accentColor: "#3D52C7",
    metrics: [
      { value: "1 roadmap", label: "Agreed delivery path" },
      { value: "5 workstreams", label: "Scoped for phase one" },
      { value: "90 days", label: "Readiness window" },
    ],
    challenge:
      "Stakeholders agreed on the destination platform but not on sequence, dependencies, or the operating model required for a controlled go-live.",
    approach: [
      "Assessed current ERP landscape, integration points and business priorities.",
      "Defined phase-one scope with build-versus-buy and risk assumptions.",
      "Installed a delivery cadence with clear decision rights and documentation.",
    ],
    results: [
      "Programme leadership had a commercially grounded phase-one plan.",
      "Critical dependencies were visible before implementation spend accelerated.",
      "Teams entered build with clearer ownership and acceptance criteria.",
    ],
  },
  {
    slug: "cloud-devops-migration",
    label: "Case Study 04",
    clientName: "Kanini",
    categoryLabel: "Cloud & DevOps",
    title: "Cloud Migration with Release Discipline",
    summary:
      "A digital engineering team needed a controlled cloud migration with stronger CI/CD, observability and cost visibility across environments.",
    services: [
      "Cloud Migration",
      "CI/CD",
      "SRE",
      "FinOps",
    ],
    roleChips: ["AWS", "Azure", "Kubernetes", "Terraform", "GitHub Actions"],
    logoSrc: "/images/talent/comp-logo-kanini.svg",
    peekColor: "#F0F2FC",
    accentColor: "#4B5FDB",
    metrics: [
      { value: "3 envs", label: "Standardised pipelines" },
      { value: "40%", label: "Faster release prep" },
      { value: "1 view", label: "Cost + reliability signal" },
    ],
    challenge:
      "Environments and release practices had drifted, making migrations risky and operational issues hard to diagnose early.",
    approach: [
      "Established target architecture, IaC baselines and environment standards.",
      "Automated build, test and release paths with shared observability.",
      "Introduced FinOps checkpoints so reliability and spend were reviewed together.",
    ],
    results: [
      "Teams shipped through a consistent pipeline across environments.",
      "Incidents became easier to triage with shared monitoring signals.",
      "Leaders could see reliability and cost impact in one operating rhythm.",
    ],
  },
  {
    slug: "data-ai-operating-foundation",
    label: "Case Study 05",
    clientName: "Aspire",
    categoryLabel: "Data & AI",
    title: "Data Foundation for Applied AI",
    summary:
      "A product organisation needed trusted data pipelines and governance before scaling AI-assisted workflows beyond experimentation.",
    services: [
      "Data Engineering",
      "Governance",
      "BI",
      "GenAI Enablement",
    ],
    roleChips: ["ETL", "Warehouse", "Power BI", "RAG", "MLOps"],
    logoSrc: "/images/talent/comp-logo-aspire.svg",
    peekColor: "#EEF0FA",
    accentColor: "#20287A",
    metrics: [
      { value: "1 source", label: "Trusted reporting layer" },
      { value: "3 use cases", label: "Moved past pilots" },
      { value: "Full audit", label: "Ownership + controls" },
    ],
    challenge:
      "AI experiments were outpacing data quality, ownership and controls, creating risk and limiting confidence in production use.",
    approach: [
      "Built a governed data foundation with clear stewards and quality checks.",
      "Selected AI use cases with accountable owners and measurable outcomes.",
      "Defined monitoring, access and escalation paths before wider rollout.",
    ],
    results: [
      "Reporting and AI workflows shared a trusted data layer.",
      "Priority use cases moved from experimentation into operating use.",
      "Risk, ownership and model controls were visible to business and technology leaders.",
    ],
  },
  {
    slug: "legacy-modernisation-programme",
    label: "Case Study 06",
    clientName: "Enterprise IT",
    categoryLabel: "Digital Transformation",
    title: "Legacy Application Modernisation",
    summary:
      "A business-critical legacy application needed a phased modernisation path that protected continuity while reducing operational risk.",
    services: [
      "Application Modernisation",
      "APIs",
      "Integration",
      "QA",
    ],
    roleChips: ["Microservices", "API", "Re-engineering", "Release Planning"],
    peekColor: "#E8F1FB",
    accentColor: "#1F5C99",
    metrics: [
      { value: "3 phases", label: "Risk-managed rollout" },
      { value: "0 freeze", label: "Business continuity window" },
      { value: "1 backlog", label: "Shared delivery plan" },
    ],
    challenge:
      "The legacy system still carried critical processes, so a big-bang rewrite was too risky and incremental change lacked a clear architecture target.",
    approach: [
      "Mapped process-critical journeys and integration dependencies.",
      "Defined a phased modernisation sequence with coexistence rules.",
      "Delivered APIs, UI replacement and regression controls in controlled releases.",
    ],
    results: [
      "Modern components replaced high-risk areas without stopping the business.",
      "Teams gained a shared backlog and architecture direction.",
      "Operational risk reduced as undocumented workarounds were retired.",
    ],
  },
];

export function getTechCaseStudyBySlug(slug: string): TechCaseStudy | undefined {
  return TECHNOLOGY_CASE_STUDIES.find((study) => study.slug === slug);
}
