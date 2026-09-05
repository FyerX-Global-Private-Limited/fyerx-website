export type TechBlueprintScopeBlock = {
  title: string;
  body: string;
};

/** Delivery Blueprint — representative programme structure, not a client case study. */
export type TechCaseStudy = {
  slug: string;
  label: string;
  categoryLabel: string;
  title: string;
  summary: string;
  /** Left-panel / hero capability chips */
  scopeChips: string[];
  peekColor: string;
  accentColor: string;
  programmeIntro: string;
  programmeBlocks: TechBlueprintScopeBlock[];
  priority: string;
  approach: string;
  canEstablish: string;
  workstreams: string[];
  outputs: string[];
  transparencyNote: string;
  closingCta: string;
};

export const TECHNOLOGY_CASE_STUDIES: TechCaseStudy[] = [
  {
    slug: "servicenow-workflow-transformation",
    label: "Delivery Blueprint 01",
    categoryLabel: "Enterprise Platforms",
    title: "ServiceNow Workflow Transformation",
    summary:
      "Design and improve service workflows that create clearer ownership, better visibility and a stronger experience for employees and customers.",
    scopeChips: [
      "ServiceNow",
      "ITSM",
      "CMDB",
      "Flow Designer",
      "Integration Hub",
      "Now Assist",
    ],
    peekColor: "#EDE4FF",
    accentColor: "#7C3AED",
    programmeIntro:
      "A focused programme for organisations looking to stabilise core service workflows, improve service data and establish a more dependable operating rhythm.",
    programmeBlocks: [
      {
        title: "Discovery",
        body: "Current-state workflows, ownership model, data dependencies and integration landscape.",
      },
      {
        title: "Design & Delivery",
        body: "Priority backlog, configuration approach, acceptance criteria, release plan and adoption support.",
      },
      {
        title: "Typical Outputs",
        body: "Workflow map · Improvement backlog · Configuration plan · Test approach · Operating runbook",
      },
    ],
    priority:
      "ServiceNow environments often evolve in separate pockets of the organisation. Teams adapt workflows locally, data standards drift and the ownership of process changes becomes unclear. The result is not necessarily a platform failure; it is an operating-model problem that needs to be addressed alongside configuration.",
    approach:
      "FyerX begins by mapping the current workflow from request to resolution, including the people, data, approvals and integrations involved. The aim is to distinguish issues that need platform configuration from those that need clearer process design or ownership. From there, the team can sequence improvements around the workflows that matter most, define acceptance criteria and establish a release and knowledge-transfer approach that the internal team can sustain.",
    canEstablish:
      "A stronger operating model around priority ITSM and CMDB workflows, with a documented path for configuration, testing, adoption and continuous improvement.",
    workstreams: [
      "Current-state workflows, ownership model, data dependencies and integration landscape.",
      "Priority backlog, configuration approach, acceptance criteria, release plan and adoption support.",
      "Workflow map · Improvement backlog · Configuration plan · Test approach · Operating runbook",
    ],
    outputs: [
      "Workflow map",
      "Improvement backlog",
      "Configuration plan",
      "Test approach",
      "Operating runbook",
    ],
    transparencyNote:
      "This Delivery Blueprint illustrates a representative approach to ServiceNow workflow transformation. The final scope, delivery team, systems, milestones and commercial model are defined only after discovery.",
    closingCta:
      "Have a ServiceNow workflow transformation priority? Let's discuss the right starting point.",
  },
  {
    slug: "data-foundation-for-applied-ai",
    label: "Delivery Blueprint 02",
    categoryLabel: "Data & AI",
    title: "Data Foundation for Applied AI",
    summary:
      "Create the data, governance and delivery foundations needed to turn priority AI use cases into controlled, useful business capability.",
    scopeChips: [
      "Data Engineering",
      "Data Governance",
      "GenAI Integration",
      "AI Agents",
      "BI & Dashboards",
    ],
    peekColor: "#FFF3CD",
    accentColor: "#C99700",
    programmeIntro:
      "A practical starting point for businesses that want to move from isolated data and AI experimentation to a prioritised, governed delivery plan.",
    programmeBlocks: [
      {
        title: "Discovery",
        body: "Data sources, business questions, quality risks, architecture constraints and ownership gaps.",
      },
      {
        title: "Design & Delivery",
        body: "Priority use cases, target data design, integration needs, controls and phased implementation plan.",
      },
      {
        title: "Typical Outputs",
        body: "Data readiness view · Use-case portfolio · Architecture blueprint · Governance plan · Pilot backlog",
      },
    ],
    priority:
      "AI initiatives frequently begin with enthusiasm but stall when teams encounter fragmented data, unclear ownership and no agreed definition of a useful outcome. Before an organisation invests in an AI build, it needs to know which decisions or workflows are worth improving and whether the underlying data can support them.",
    approach:
      "FyerX first connects business priorities with the available data landscape. This means assessing sources, definitions, quality, access and governance—not simply selecting a model. The programme then identifies a small number of practical use cases, defines guardrails and outlines the integration, human-review and operating requirements required to take a pilot forward responsibly.",
    canEstablish:
      "A prioritised route from data readiness to applied AI, including a clear view of the controls and delivery decisions needed before implementation.",
    workstreams: [
      "Data sources, business questions, quality risks, architecture constraints and ownership gaps.",
      "Priority use cases, target data design, integration needs, controls and phased implementation plan.",
      "Data readiness view · Use-case portfolio · Architecture blueprint · Governance plan · Pilot backlog",
    ],
    outputs: [
      "Data readiness view",
      "Use-case portfolio",
      "Architecture blueprint",
      "Governance plan",
      "Pilot backlog",
    ],
    transparencyNote:
      "This Delivery Blueprint illustrates a representative approach to data foundation for applied AI. The final scope, delivery team, systems, milestones and commercial model are defined only after discovery.",
    closingCta:
      "Have a data foundation for applied AI priority? Let's discuss the right starting point.",
  },
  {
    slug: "cloud-migration-with-release-discipline",
    label: "Delivery Blueprint 03",
    categoryLabel: "Cloud & DevOps",
    title: "Cloud Migration with Release Discipline",
    summary:
      "Plan a controlled move to modern cloud infrastructure while strengthening release reliability, security and operational visibility.",
    scopeChips: [
      "Cloud Migration",
      "CI/CD",
      "Containerisation",
      "IaC",
      "SRE",
      "FinOps",
    ],
    peekColor: "#FFE4E8",
    accentColor: "#E2445C",
    programmeIntro:
      "A structured approach for organisations modernising infrastructure without treating migration as a one-time infrastructure exercise.",
    programmeBlocks: [
      {
        title: "Discovery",
        body: "Applications, dependencies, current environments, release processes, security needs and operating constraints.",
      },
      {
        title: "Design & Delivery",
        body: "Migration waves, landing-zone approach, CI/CD requirements, observability and operational handover.",
      },
      {
        title: "Typical Outputs",
        body: "Cloud readiness view · Migration roadmap · Environment design · Delivery pipeline plan · Operations framework",
      },
    ],
    priority:
      "Cloud change becomes risky when applications are moved without a complete view of dependencies, release practices and the operating model required after go-live. A migration plan must balance speed with continuity, security, cost awareness and the team's ability to operate the new environment.",
    approach:
      "FyerX assesses workloads, dependencies, environments and delivery practices to identify a sensible migration sequence. The target-state plan brings together landing-zone principles, infrastructure automation, release discipline, observability and ownership. Rather than treating migration as the finish line, the approach includes the monitoring and handover requirements needed to run and improve the environment afterwards.",
    canEstablish:
      "A controlled, phased route to cloud modernisation with reliability, security and operational ownership designed into the programme.",
    workstreams: [
      "Applications, dependencies, current environments, release processes, security needs and operating constraints.",
      "Migration waves, landing-zone approach, CI/CD requirements, observability and operational handover.",
      "Cloud readiness view · Migration roadmap · Environment design · Delivery pipeline plan · Operations framework",
    ],
    outputs: [
      "Cloud readiness view",
      "Migration roadmap",
      "Environment design",
      "Delivery pipeline plan",
      "Operations framework",
    ],
    transparencyNote:
      "This Delivery Blueprint illustrates a representative approach to cloud migration with release discipline. The final scope, delivery team, systems, milestones and commercial model are defined only after discovery.",
    closingCta:
      "Have a cloud migration with release discipline priority? Let's discuss the right starting point.",
  },
  {
    slug: "legacy-application-modernisation",
    label: "Delivery Blueprint 04",
    categoryLabel: "Digital Transformation",
    title: "Legacy Application Modernisation",
    summary:
      "Modernise business-critical applications and integrations with a practical path for continuity, usability and phased adoption.",
    scopeChips: [
      "Legacy Modernisation",
      "Microservices",
      "APIs",
      "System Integration",
      "Mobile Apps",
      "UI/UX",
    ],
    peekColor: "#D8F5EE",
    accentColor: "#0F8A6B",
    programmeIntro:
      "A phased blueprint for turning rigid applications and disconnected integrations into a more adaptable digital foundation.",
    programmeBlocks: [
      {
        title: "Discovery",
        body: "Application health, user journeys, technical debt, integration dependencies and business-critical processes.",
      },
      {
        title: "Design & Delivery",
        body: "Target architecture, prioritised journeys, API strategy, delivery increments and quality controls.",
      },
      {
        title: "Typical Outputs",
        body: "Modernisation assessment · Target architecture · Phased backlog · Integration plan · Quality approach",
      },
    ],
    priority:
      "Legacy systems often support essential processes but make change slow and expensive. Replacing everything at once creates unnecessary risk, while doing nothing preserves technical debt and a poor user experience. The practical question is where to modernise first and how to protect continuity while doing it.",
    approach:
      "FyerX starts with the applications, journeys and integrations that have the greatest operational importance. The work establishes the current constraints, a target architecture and a phased sequence of improvements. Each increment is defined around a usable business outcome, supported by integration planning, quality controls and adoption requirements rather than technology change in isolation.",
    canEstablish:
      "A realistic modernisation path that improves high-priority business journeys while managing risk, dependencies and day-to-day continuity.",
    workstreams: [
      "Application health, user journeys, technical debt, integration dependencies and business-critical processes.",
      "Target architecture, prioritised journeys, API strategy, delivery increments and quality controls.",
      "Modernisation assessment · Target architecture · Phased backlog · Integration plan · Quality approach",
    ],
    outputs: [
      "Modernisation assessment",
      "Target architecture",
      "Phased backlog",
      "Integration plan",
      "Quality approach",
    ],
    transparencyNote:
      "This Delivery Blueprint illustrates a representative approach to legacy application modernisation. The final scope, delivery team, systems, milestones and commercial model are defined only after discovery.",
    closingCta:
      "Have a legacy application modernisation priority? Let's discuss the right starting point.",
  },
  {
    slug: "crm-revenue-operations-enablement",
    label: "Delivery Blueprint 05",
    categoryLabel: "Enterprise Platforms",
    title: "CRM & Revenue Operations Enablement",
    summary:
      "Connect CRM, lead processes and reporting so commercial teams work from cleaner data, clearer stages and more reliable visibility.",
    scopeChips: [
      "CRM Integration",
      "Lead Capture",
      "Pipeline Design",
      "Automation",
      "Attribution",
      "Reporting",
    ],
    peekColor: "#D8E9FB",
    accentColor: "#1F5C99",
    programmeIntro:
      "A connected operating-model approach for teams that need commercial processes, CRM workflows and reporting to work together.",
    programmeBlocks: [
      {
        title: "Discovery",
        body: "Lead sources, lifecycle stages, ownership hand-offs, data definitions, platform use and reporting gaps.",
      },
      {
        title: "Design & Delivery",
        body: "Lifecycle design, CRM fields, routing logic, automation priorities, dashboards and adoption rhythm.",
      },
      {
        title: "Typical Outputs",
        body: "Revenue-process map · CRM blueprint · Workflow backlog · Reporting design · Adoption plan",
      },
    ],
    priority:
      "Commercial systems often contain the information needed to understand pipeline performance, but inconsistent data, unclear hand-offs and disconnected tools prevent teams from using it confidently. Better reporting alone does not solve the problem if the process behind the data is not aligned.",
    approach:
      "FyerX maps how an enquiry becomes an opportunity, who owns each transition and what information must be captured. The team then defines lifecycle stages, core data fields, routing logic and reporting requirements around that process. Automation is introduced where it removes avoidable manual work, with clear exception paths and human ownership for material decisions.",
    canEstablish:
      "A connected CRM and revenue-operations foundation that supports cleaner pipeline visibility, more consistent follow-up and a practical improvement rhythm.",
    workstreams: [
      "Lead sources, lifecycle stages, ownership hand-offs, data definitions, platform use and reporting gaps.",
      "Lifecycle design, CRM fields, routing logic, automation priorities, dashboards and adoption rhythm.",
      "Revenue-process map · CRM blueprint · Workflow backlog · Reporting design · Adoption plan",
    ],
    outputs: [
      "Revenue-process map",
      "CRM blueprint",
      "Workflow backlog",
      "Reporting design",
      "Adoption plan",
    ],
    transparencyNote:
      "This Delivery Blueprint illustrates a representative approach to CRM & revenue operations enablement. The final scope, delivery team, systems, milestones and commercial model are defined only after discovery.",
    closingCta:
      "Have a CRM & revenue operations enablement priority? Let's discuss the right starting point.",
  },
  {
    slug: "technology-roadmap-delivery-mobilisation",
    label: "Delivery Blueprint 06",
    categoryLabel: "Technology Advisory",
    title: "Technology Roadmap & Delivery Mobilisation",
    summary:
      "Turn an unclear technology priority into a focused plan with the right architecture, delivery approach, team structure and governance.",
    scopeChips: [
      "Solution Architecture",
      "CTO-as-a-Service",
      "Tech Roadmap",
      "Vendor Selection",
      "Digital Readiness",
      "IT Due Diligence",
    ],
    peekColor: "#FFE8F5",
    accentColor: "#C2187A",
    programmeIntro:
      "A decision-led advisory blueprint for leaders who need a practical route from an important technology question to a mobilised programme.",
    programmeBlocks: [
      {
        title: "Discovery",
        body: "Business goals, current technology landscape, stakeholder needs, constraints, dependencies and risks.",
      },
      {
        title: "Design & Delivery",
        body: "Options assessment, priority decisions, target-state approach, delivery model and governance structure.",
      },
      {
        title: "Typical Outputs",
        body: "Current-state assessment · Decision framework · Technology roadmap · Delivery model · Risk register",
      },
    ],
    priority:
      "Technology investment loses momentum when leaders cannot see a shared route from the business objective to a sequenced delivery plan. Competing priorities, unclear choices and missing accountability can delay decisions long before implementation starts.",
    approach:
      "FyerX brings decision-makers and technical stakeholders together to assess the current state, clarify the business outcome and identify the choices that need to be made. Options are evaluated against value, risk, dependency, capability and practical delivery constraints. The resulting roadmap is intended to help the organisation make decisions, mobilise the right work and govern progress with clear ownership.",
    canEstablish:
      "A decision-ready technology roadmap that gives leadership a defensible basis for sequencing investment, selecting a delivery model and starting with confidence.",
    workstreams: [
      "Business goals, current technology landscape, stakeholder needs, constraints, dependencies and risks.",
      "Options assessment, priority decisions, target-state approach, delivery model and governance structure.",
      "Current-state assessment · Decision framework · Technology roadmap · Delivery model · Risk register",
    ],
    outputs: [
      "Current-state assessment",
      "Decision framework",
      "Technology roadmap",
      "Delivery model",
      "Risk register",
    ],
    transparencyNote:
      "This Delivery Blueprint illustrates a representative approach to technology roadmap & delivery mobilisation. The final scope, delivery team, systems, milestones and commercial model are defined only after discovery.",
    closingCta:
      "Have a technology roadmap & delivery mobilisation priority? Let's discuss the right starting point.",
  },
];

export function getTechCaseStudyBySlug(slug: string): TechCaseStudy | undefined {
  return TECHNOLOGY_CASE_STUDIES.find((study) => study.slug === slug);
}
