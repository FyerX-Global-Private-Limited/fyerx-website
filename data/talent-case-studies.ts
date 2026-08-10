export type TalentCaseStudyMetric = {
  value: string;
  label: string;
};

export type TalentCaseStudy = {
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
  metrics: TalentCaseStudyMetric[];
  challenge: string;
  approach: string[];
  results: string[];
  dataStatus?: string;
};

export const TALENT_CASE_STUDIES: TalentCaseStudy[] = [
  {
    slug: "servicenow-implementation",
    label: "Case Study 01",
    clientName: "ServiceNow",
    categoryLabel: "ServiceNow Implementation Talent",
    title: "ServiceNow Implementation Talent",
    summary:
      "Building functional and technical capacity for an implementation programme moving into its next delivery phase.",
    services: [
      "ServiceNow Talent",
      "Contract Staffing",
      "Role-Based Screening",
      "Interview Coordination",
    ],
    roleChips: [
      "Platform Architect",
      "Business Analyst",
      "Developer",
      "Admin",
      "ITSM",
      "ITOM",
    ],
    peekColor: "#0B2E59",
    accentColor: "#11551C",
    metrics: [
      { value: "6", label: "ServiceNow specialists submitted" },
      { value: "12 days", label: "Average time to first shortlist" },
      { value: "80%", label: "Profiles accepted for client interview" },
    ],
    challenge:
      "The programme scope had expanded across ITSM, ITOM, and platform administration, but the delivery team did not have enough specialist capacity to keep the next release milestone on track.",
    approach: [
      "Mapped role requirements across platform architecture, business analysis, configuration, and administration.",
      "Built a targeted shortlist aligned to ServiceNow module experience and project-phase fit.",
      "Screened candidates for hands-on platform delivery before client interview coordination.",
    ],
    results: [
      "Six ServiceNow specialists were submitted within the agreed search window.",
      "First shortlist delivered in an average of twelve days.",
      "Eighty percent of submitted profiles progressed to client interview.",
    ],
    dataStatus:
      "Illustrative placeholder figures. Validate and replace before public release.",
  },
  {
    slug: "salesforce-implementation",
    label: "Case Study 02",
    clientName: "Salesforce",
    categoryLabel: "Salesforce Project Staffing",
    title: "Salesforce Project Staffing",
    summary:
      "Adding developers and solution-focused consultants to support multiple customer engagements.",
    services: [
      "Salesforce Talent",
      "Developers",
      "Solution Architects",
      "Business Analysts",
      "Contract Staffing",
    ],
    roleChips: [
      "Developer",
      "Solution Architect",
      "Admin",
      "Business Analyst",
      "Sales Cloud",
      "Service Cloud",
    ],
    peekColor: "#11551C",
    accentColor: "#2935a3",
    metrics: [
      { value: "7", label: "Salesforce professionals deployed" },
      { value: "15 days", label: "Average time to first shortlist" },
      { value: "2.5:1", label: "Client interviews per selection" },
    ],
    challenge:
      "Multiple customer deployments were active at once, but the team lacked enough Salesforce developers and consultants to maintain delivery momentum across engagements.",
    approach: [
      "Prioritised candidates with hands-on configuration, customisation, and integration experience.",
      "Screened for relevant cloud and project context before shortlist submission.",
      "Coordinated interviews to keep selection moving across parallel customer programmes.",
    ],
    results: [
      "Seven Salesforce professionals were deployed into active customer workstreams.",
      "First shortlist delivered within fifteen days on average.",
      "Selection moved efficiently with a 2.5:1 client interview ratio per hire.",
    ],
    dataStatus:
      "Illustrative placeholder figures. Validate and replace before public release.",
  },
  {
    slug: "sap-s4hana-transformation",
    label: "Case Study 03",
    clientName: "SAP",
    categoryLabel: "SAP S/4HANA Transformation Talent",
    title: "SAP S/4HANA Transformation Talent",
    summary:
      "Finding module-specific functional and technical specialists for a time-sensitive transformation stage.",
    services: [
      "SAP Talent",
      "S/4HANA Hiring",
      "Functional Consultants",
      "Technical Consultants",
      "Contract Staffing",
    ],
    roleChips: ["S/4HANA Finance", "MM", "SD", "ABAP", "Basis", "SuccessFactors"],
    peekColor: "#2935a3",
    accentColor: "#0B2E59",
    metrics: [
      { value: "5", label: "SAP specialists shortlisted" },
      { value: "18 days", label: "Average time to first shortlist" },
      { value: "3", label: "SAP skill areas covered" },
    ],
    challenge:
      "The customer programme was entering implementation, but the partner needed SAP specialists across multiple skill areas without delaying an already time-sensitive delivery phase.",
    approach: [
      "Focused search on module-specific functional and technical SAP experience.",
      "Assessed project-phase fit and ability to integrate with the client's delivery team.",
      "Shortlisted candidates ready to move from interview into implementation work.",
    ],
    results: [
      "Five SAP specialists were shortlisted for the programme.",
      "First shortlist delivered within eighteen days on average.",
      "Coverage spanned three validated SAP skill areas for the implementation phase.",
    ],
    dataStatus:
      "Illustrative placeholder figures. Validate and replace before public release.",
  },
  {
    slug: "cloud-devops-staffing",
    label: "Case Study 04",
    clientName: "Cloud & DevOps",
    categoryLabel: "Cloud & DevOps Project Staffing",
    title: "Cloud & DevOps Project Staffing",
    summary:
      "Assembling cloud, DevOps, and reliability capability for a migration or modernisation programme.",
    services: [
      "Cloud Talent",
      "DevOps Talent",
      "Contract Staffing",
      "Project Team Ramp-Up",
    ],
    roleChips: ["Cloud Engineer", "DevOps Engineer", "SRE", "Kubernetes", "AWS", "Azure"],
    peekColor: "#163E6B",
    accentColor: "#11551C",
    metrics: [
      { value: "6", label: "Cloud & DevOps specialists deployed" },
      { value: "19 days", label: "Average time to deployment" },
      { value: "4", label: "Roles filled across one delivery pod" },
    ],
    challenge:
      "A customer migration was underway on a fixed timeline, but the delivery pod lacked cloud and DevOps capacity to maintain progress without pulling resources from other work.",
    approach: [
      "Sourced for production environment experience and relevant cloud tooling.",
      "Prioritised immediate availability to match the migration schedule.",
      "Staffed a focused delivery pod rather than filling roles in isolation.",
    ],
    results: [
      "Six cloud and DevOps specialists were deployed into the programme.",
      "Average time to deployment was nineteen days.",
      "Four roles were filled across a single coordinated delivery pod.",
    ],
    dataStatus:
      "Illustrative placeholder figures. Validate and replace before public release.",
  },
  {
    slug: "data-ai-delivery",
    label: "Case Study 05",
    clientName: "Data & AI",
    categoryLabel: "Data & AI Delivery Talent",
    title: "Data & AI Delivery Talent",
    summary:
      "Sourcing data engineering, analytics, and AI capability for an expanding project pipeline.",
    services: [
      "Data Engineering Talent",
      "AI & ML Talent",
      "Analytics Talent",
      "Technical Screening",
    ],
    roleChips: [
      "Data Engineer",
      "Data Scientist",
      "ML Engineer",
      "Analytics",
      "Python",
      "Databricks",
    ],
    peekColor: "#0B1D3A",
    accentColor: "#2935a3",
    metrics: [
      { value: "9", label: "Data & AI specialists shortlisted" },
      { value: "17 days", label: "Average time to first shortlist" },
      { value: "78%", label: "Profiles accepted for client interview" },
    ],
    challenge:
      "Upcoming customer engagements required data and AI specialists, but the pipeline needed screening depth across multiple data-stack and domain combinations before deployment.",
    approach: [
      "Screened for data-stack exposure, analytics depth, and AI delivery experience.",
      "Matched candidates to domain context and project readiness.",
      "Prioritised profiles that could move quickly from interview to billable work.",
    ],
    results: [
      "Nine data and AI specialists were shortlisted for active opportunities.",
      "First shortlist delivered within seventeen days on average.",
      "Seventy-eight percent of profiles progressed to client interview.",
    ],
    dataStatus:
      "Illustrative placeholder figures. Validate and replace before public release.",
  },
  {
    slug: "quality-engineering",
    label: "Case Study 06",
    clientName: "Quality Engineering",
    categoryLabel: "Quality Engineering Talent",
    title: "Quality Engineering Talent",
    summary:
      "Adding QA automation and SDET capacity ahead of important release milestones.",
    services: [
      "QA Automation Talent",
      "SDET Hiring",
      "API Testing",
      "Contract Staffing",
      "Technical Screening",
    ],
    roleChips: ["SDET", "Automation QA", "API Testing", "Selenium", "Playwright", "Cypress"],
    peekColor: "#2A5080",
    accentColor: "#11551C",
    metrics: [
      { value: "5", label: "QA automation specialists deployed" },
      { value: "13 days", label: "Average time to first shortlist" },
      { value: "2.7:1", label: "Client interviews per selection" },
    ],
    challenge:
      "Release scope was expanding across web and API testing, but the team lacked SDET and automation capacity to protect quality within the planned release window.",
    approach: [
      "Screened for hands-on automation framework and API testing experience.",
      "Assessed domain relevance and ability to join before the release milestone.",
      "Coordinated interviews to keep hiring aligned with the delivery schedule.",
    ],
    results: [
      "Five QA automation specialists were deployed ahead of the release.",
      "First shortlist delivered within thirteen days on average.",
      "Selection completed efficiently with a 2.7:1 client interview ratio per hire.",
    ],
    dataStatus:
      "Illustrative placeholder figures. Validate and replace before public release.",
  },
];

export function getTalentCaseStudyBySlug(slug: string): TalentCaseStudy | undefined {
  return TALENT_CASE_STUDIES.find((study) => study.slug === slug);
}
