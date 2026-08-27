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
    clientName: "Microland",
    categoryLabel: "ServiceNow Implementation Talent",
    title: "ServiceNow Implementation Talent",
    summary:
      "An implementation partner needed additional functional and technical capacity after scope expanded across ITSM, ITOM, and platform administration.",
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
      "Administrator",
      "ITSM",
      "ITOM",
    ],
    peekColor: "#E8F1FB",
    accentColor: "#1F5C99",
    metrics: [
      { value: "6", label: "Specialists submitted" },
      { value: "3 business days", label: "To first shortlist" },
      { value: "80%", label: "Profiles accepted for interview" },
    ],
    challenge:
      "The programme scope had expanded across ITSM, ITOM, and platform administration, but the delivery team did not have enough specialist capacity to keep the next release milestone on track.",
    approach: [
      "Created a targeted shortlist across platform architecture, business analysis, configuration, and administration.",
      "Aligned candidates to the next release milestone and ServiceNow module experience.",
      "Screened for hands-on platform delivery before client interview coordination.",
    ],
    results: [
      "Six ServiceNow specialists were submitted within the agreed search window.",
      "First shortlist delivered in three business days.",
      "Eighty percent of submitted profiles progressed to client interview.",
    ],
  },
  {
    slug: "salesforce-implementation",
    label: "Case Study 02",
    clientName: "Solenis",
    categoryLabel: "Salesforce Implementation Talent",
    title: "Salesforce Implementation Talent",
    summary:
      "A CRM implementation team needed Salesforce developers and solution-focused consultants to support multiple active customer engagements.",
    services: [
      "Salesforce Talent",
      "Developers",
      "Solution Architects",
      "Business Analysts",
      "Contract Staffing",
    ],
    roleChips: [
      "Salesforce Developer",
      "Solution Architect",
      "Administrator",
      "Business Analyst",
      "Sales Cloud",
      "Service Cloud",
    ],
    peekColor: "#F0FAF2",
    accentColor: "#11551C",
    metrics: [
      { value: "7", label: "Professionals deployed" },
      { value: "5 business days", label: "To first shortlist" },
      { value: "2.5:1", label: "Interviews per selection" },
    ],
    challenge:
      "Multiple customer deployments were active at once, but the team lacked enough Salesforce developers and consultants to maintain delivery momentum across engagements.",
    approach: [
      "Screened for configuration, customisation, integration exposure, and relevant cloud experience.",
      "Presented a project-ready shortlist aligned to active customer programmes.",
      "Coordinated interviews to keep selection moving across parallel engagements.",
    ],
    results: [
      "Seven Salesforce professionals were deployed into active customer workstreams.",
      "First shortlist delivered within five business days.",
      "Selection moved efficiently with a 2.5:1 interview ratio per hire.",
    ],
  },
  {
    slug: "sap-s4hana-transformation",
    label: "Case Study 03",
    clientName: "CGI",
    categoryLabel: "SAP S/4HANA Transformation Talent",
    title: "SAP S/4HANA Transformation Talent",
    summary:
      "A transformation partner needed functional and technical SAP professionals as a customer programme moved from planning into implementation.",
    services: [
      "SAP Talent",
      "S/4HANA Hiring",
      "Functional Consultants",
      "Technical Consultants",
      "Contract Staffing",
    ],
    roleChips: ["S/4HANA Finance", "MM", "SD", "ABAP", "Basis", "SuccessFactors"],
    peekColor: "#F3F0FF",
    accentColor: "#7C3AED",
    metrics: [
      { value: "5", label: "Specialists shortlisted" },
      { value: "3 business days", label: "To first shortlist" },
      { value: "3", label: "SAP skill areas covered" },
    ],
    challenge:
      "The customer programme was entering implementation, but the partner needed SAP specialists across multiple skill areas without delaying an already time-sensitive delivery phase.",
    approach: [
      "Focused on module-specific experience, project-phase fit, and ability to work alongside an established client delivery team.",
      "Shortlisted candidates ready to move from interview into implementation work.",
      "Validated SAP module coverage across finance, logistics, and technical roles.",
    ],
    results: [
      "Five SAP specialists were shortlisted for the programme.",
      "First shortlist delivered within three business days.",
      "Coverage spanned three validated SAP skill areas for the implementation phase.",
    ],
  },
  {
    slug: "cloud-devops-staffing",
    label: "Case Study 04",
    clientName: "CGI",
    categoryLabel: "Cloud & DevOps Project Staffing",
    title: "Cloud & DevOps Project Staffing",
    summary:
      "A digital engineering business required cloud and DevOps specialists for a time-bound customer migration.",
    services: [
      "Cloud Talent",
      "DevOps Talent",
      "Contract Staffing",
      "Project Team Ramp-Up",
    ],
    roleChips: ["Cloud Engineer", "DevOps Engineer", "SRE", "Kubernetes", "AWS", "Azure"],
    peekColor: "#ECFEFF",
    accentColor: "#0EA5E9",
    metrics: [
      { value: "6", label: "Specialists deployed" },
      { value: "10 business days", label: "To first deployment" },
      { value: "4", label: "Roles in one delivery pod" },
    ],
    challenge:
      "A customer migration was underway on a fixed timeline, but the delivery pod lacked cloud and DevOps capacity to maintain progress without pulling resources from other work.",
    approach: [
      "Sourced for production-environment experience, relevant tooling, and immediate availability.",
      "Added capability without disrupting the existing delivery plan.",
      "Staffed a focused delivery pod rather than filling roles in isolation.",
    ],
    results: [
      "Six cloud and DevOps specialists were deployed into the programme.",
      "First deployment completed within ten business days.",
      "Four roles were filled across a single coordinated delivery pod.",
    ],
  },
  {
    slug: "data-ai-delivery",
    label: "Case Study 05",
    clientName: "Kanini",
    categoryLabel: "Data & AI Delivery Talent",
    title: "Data & AI Delivery Talent",
    summary:
      "A technology services company needed data engineers, analytics specialists, and AI professionals for upcoming customer engagements.",
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
      "Analytics Specialist",
      "Python",
      "Databricks",
    ],
    peekColor: "#FFF7ED",
    accentColor: "#EA580C",
    metrics: [
      { value: "9", label: "Specialists shortlisted" },
      { value: "3 business days", label: "To first shortlist" },
      { value: "78%", label: "Profiles accepted for interview" },
    ],
    challenge:
      "Upcoming customer engagements required data and AI specialists, but the pipeline needed screening depth across multiple data-stack and domain combinations before deployment.",
    approach: [
      "Screened for data-stack exposure, domain context, and the ability to move from interview to project quickly.",
      "Matched candidates to domain context and project readiness.",
      "Prioritised profiles that could move quickly from interview to billable work.",
    ],
    results: [
      "Nine data and AI specialists were shortlisted for active opportunities.",
      "First shortlist delivered within three business days.",
      "Seventy-eight percent of profiles progressed to client interview.",
    ],
  },
  {
    slug: "quality-engineering",
    label: "Case Study 06",
    clientName: "Aspire",
    categoryLabel: "Quality Engineering Talent",
    title: "Quality Engineering Talent",
    summary:
      "A product team needed SDET and QA automation talent as release scope increased across web and API testing.",
    services: [
      "QA Automation Talent",
      "SDET Hiring",
      "API Testing",
      "Contract Staffing",
      "Technical Screening",
    ],
    roleChips: ["SDET", "Automation QA", "API Testing", "Selenium", "Playwright", "Cypress"],
    peekColor: "#FDF2F8",
    accentColor: "#DB2777",
    metrics: [
      { value: "5", label: "Specialists deployed" },
      { value: "4 business days", label: "To first shortlist" },
      { value: "2.7:1", label: "Interviews per selection" },
    ],
    challenge:
      "Release scope was expanding across web and API testing, but the team lacked SDET and automation capacity to protect quality within the planned release window.",
    approach: [
      "Screened for framework experience, automation depth, domain relevance, and ability to join within the planned release window.",
      "Assessed hands-on automation framework and API testing experience.",
      "Coordinated interviews to keep hiring aligned with the delivery schedule.",
    ],
    results: [
      "Five QA automation specialists were deployed ahead of the release.",
      "First shortlist delivered within four business days.",
      "Selection completed efficiently with a 2.7:1 client interview ratio per hire.",
    ],
  },
];

export function getTalentCaseStudyBySlug(slug: string): TalentCaseStudy | undefined {
  return TALENT_CASE_STUDIES.find((study) => study.slug === slug);
}
