export type CapabilityTab = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  bullets: string[];
  /** Shown in the soft meta card (roles / focus areas). */
  meta: string[];
  tags: string[];
  /** Maps to /images/talent/tabicon/{iconId}.svg when present. */
  iconId: string;
};

export type CapabilityAreasContent = {
  headingBefore: string;
  headingAccent: string;
  headingAfter?: string;
  subheading: string;
  areasLabel: string;
  metaLabel: string;
  gradientClass: string;
  tabs: CapabilityTab[];
};

export const MAIN_CAPABILITY_AREAS: CapabilityAreasContent = {
  headingBefore: "One partner for every",
  headingAccent: "critical capability",
  subheading:
    "Explore how FyerX supports marketing, talent, technology, and learning priorities through connected delivery.",
  areasLabel: "Capability areas",
  metaLabel: "How we help",
  gradientClass: "brand-gradient-text",
  tabs: [
    {
      id: "marketing",
      label: "Marketing",
      title: "Marketing & Growth",
      subtitle:
        "Positioning, demand, content, and conversion programmes that help teams build pipeline with clearer strategy.",
      bullets: [
        "Go-to-market strategy, ICP definition and competitive positioning",
        "Demand generation, ABM, outbound and pipeline reporting",
        "Search, AI visibility, SEO and content systems",
        "Performance marketing, creative and conversion programmes",
        "Marketing automation, CRM workflows and attribution",
      ],
      meta: [
        "Strategy",
        "Demand generation",
        "Content",
        "Performance",
        "Automation",
        "Analytics",
      ],
      tags: ["GTM", "Demand Gen", "SEO", "Paid Media", "Automation"],
      iconId: "digital",
    },
    {
      id: "talent",
      label: "Talent",
      title: "Talent & Hiring Support",
      subtitle:
        "Contract, permanent, and project talent for the technology roles that affect delivery.",
      bullets: [
        "Contract staffing and project-based deployment",
        "Permanent hiring and executive search",
        "RPO and recruitment process support",
        "Specialist hiring across ServiceNow, SAP, Salesforce, data and cloud",
        "Flexible models for surge, backfill and critical programmes",
      ],
      meta: [
        "Contract staffing",
        "Permanent hiring",
        "Executive search",
        "RPO",
        "Project teams",
      ],
      tags: ["Staffing", "Hiring", "RPO", "Specialists", "Delivery"],
      iconId: "engineering",
    },
    {
      id: "technology",
      label: "Technology",
      title: "Technology Delivery",
      subtitle:
        "Platforms, digital delivery, data, cloud and advisory support for business-critical systems.",
      bullets: [
        "ServiceNow, Salesforce, SAP and enterprise platform work",
        "Application modernisation, APIs and integrations",
        "Data foundations, analytics and applied AI readiness",
        "Cloud migration, DevOps and release discipline",
        "Technology roadmap and delivery mobilisation",
      ],
      meta: [
        "Enterprise platforms",
        "Digital delivery",
        "Data & AI",
        "Cloud & DevOps",
        "Advisory",
      ],
      tags: ["ServiceNow", "CRM", "ERP", "Cloud", "Data"],
      iconId: "enterprise",
    },
    {
      id: "learning",
      label: "Learning",
      title: "Learning & Enablement",
      subtitle:
        "Practical enablement that helps teams adopt new tools, processes and ways of working.",
      bullets: [
        "Role-based enablement for platforms and operating changes",
        "Onboarding support for new tools and delivery models",
        "Playbooks, documentation and knowledge transfer",
        "Manager and team coaching for adoption",
        "Continuous improvement rhythms after go-live",
      ],
      meta: [
        "Enablement",
        "Onboarding",
        "Playbooks",
        "Coaching",
        "Adoption support",
      ],
      tags: ["Enablement", "Adoption", "Training", "Playbooks"],
      iconId: "quality",
    },
  ],
};

export const MARKETING_CAPABILITY_AREAS: CapabilityAreasContent = {
  headingBefore: "Marketing capabilities for every",
  headingAccent: "growth priority",
  subheading:
    "Explore the specialist marketing workstreams we use to build visibility, demand and conversion.",
  areasLabel: "Capability areas",
  metaLabel: "Focus areas",
  gradientClass: "marketing-gradient-text",
  tabs: [
    {
      id: "strategy",
      label: "Marketing & Consulting",
      title: "Marketing & Consulting",
      subtitle:
        "Clearer positioning and planning so campaigns start from a sharper commercial brief.",
      bullets: [
        "Go-to-market strategy and offer framing",
        "ICP and buyer persona definition",
        "Marketing audits and channel diagnostics",
        "Competitive positioning and messaging systems",
        "Priority planning for the next growth cycle",
      ],
      meta: [
        "GTM strategy",
        "ICP definition",
        "Audits",
        "Positioning",
        "Planning",
      ],
      tags: ["Strategy", "ICP", "Positioning", "Audits"],
      iconId: "digital",
    },
    {
      id: "demand",
      label: "Demand Generation",
      title: "Demand Generation",
      subtitle:
        "Programmes that create qualified conversations and make pipeline movement visible.",
      bullets: [
        "Account-based marketing motions",
        "LinkedIn and outbound lead generation",
        "Cold outreach systems with clear handoffs",
        "Revenue attribution and pipeline reporting",
        "Campaign rhythms tied to sales follow-up",
      ],
      meta: [
        "ABM",
        "Outbound",
        "Lead generation",
        "Attribution",
        "Pipeline reporting",
      ],
      tags: ["ABM", "Outbound", "LinkedIn", "Pipeline"],
      iconId: "engineering",
    },
    {
      id: "search",
      label: "Search & AI Visibility",
      title: "Search & AI Visibility",
      subtitle:
        "Search and discovery systems that help the right buyers find you across classic and AI surfaces.",
      bullets: [
        "SEO strategy and technical foundations",
        "AEO and answer-engine visibility",
        "GEO and generative discovery readiness",
        "Local SEO for regional demand",
        "Content systems that support lasting discovery",
      ],
      meta: ["SEO", "AEO", "GEO", "Local SEO", "Content systems"],
      tags: ["SEO", "AEO", "GEO", "Discovery"],
      iconId: "data-ai",
    },
    {
      id: "ai-marketing",
      label: "AI Marketing",
      title: "AI Marketing",
      subtitle:
        "Practical AI workflows for content, creative, personalisation and marketing operations.",
      bullets: [
        "AI-assisted content generation with human review",
        "Ad creative and personalisation support",
        "Marketing automation agents for repeatable tasks",
        "Conversational AI for enquiry handling",
        "Guardrails for quality, brand and compliance",
      ],
      meta: [
        "Content AI",
        "Creative AI",
        "Automation agents",
        "Conversational AI",
      ],
      tags: ["GenAI", "Automation", "Personalisation"],
      iconId: "servicenow",
    },
    {
      id: "social",
      label: "Social Media",
      title: "Social Media Marketing",
      subtitle:
        "Social strategy, community and paid social that support brand and demand goals together.",
      bullets: [
        "Social media strategy and channel planning",
        "Community management and response rhythms",
        "Paid social campaigns with clear offers",
        "Creative systems for consistent publishing",
        "Measurement tied to awareness and enquiry outcomes",
      ],
      meta: [
        "Strategy",
        "Community",
        "Paid social",
        "Creative",
        "Measurement",
      ],
      tags: ["Social", "Community", "Paid Social"],
      iconId: "cloud-devops",
    },
    {
      id: "content",
      label: "Content Production",
      title: "Content Production",
      subtitle:
        "Content and storytelling assets that sales, campaigns and search can reuse.",
      bullets: [
        "Campaign narratives and message frameworks",
        "Website and landing-page content",
        "Video scripts and production support",
        "Case stories, explainers and enablement assets",
        "Editorial calendars connected to demand priorities",
      ],
      meta: ["Narratives", "Web content", "Video", "Case stories", "Editorial"],
      tags: ["Content", "Video", "Storytelling"],
      iconId: "quality",
    },
    {
      id: "performance",
      label: "Performance Marketing",
      title: "Performance Marketing",
      subtitle:
        "Paid acquisition and conversion work that makes spend accountable to outcomes.",
      bullets: [
        "Paid search and paid social campaign systems",
        "Landing-page and conversion improvements",
        "Creative testing and offer iteration",
        "Budget and channel performance reviews",
        "Reporting that connects spend to pipeline signals",
      ],
      meta: [
        "Paid search",
        "Paid social",
        "Conversion",
        "Creative testing",
        "Reporting",
      ],
      tags: ["Paid Media", "CRO", "Ads"],
      iconId: "enterprise",
    },
    {
      id: "automation",
      label: "Marketing Automation",
      title: "Marketing Automation",
      subtitle:
        "CRM and automation workflows that keep leads moving with clearer ownership.",
      bullets: [
        "Lifecycle design and lead routing",
        "CRM field and stage alignment",
        "Nurture journeys and trigger campaigns",
        "Sales handoff and follow-up visibility",
        "Dashboards for marketing and revenue teams",
      ],
      meta: ["Lifecycle", "CRM", "Nurture", "Handoffs", "Dashboards"],
      tags: ["CRM", "Automation", "Lifecycle"],
      iconId: "cybersecurity",
    },
  ],
};
