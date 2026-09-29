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
      id: "brand",
      label: "Brand Experience",
      title: "Brand Experience",
      subtitle:
        "Brand, digital experience and website work that make the business clearer at every touchpoint.",
      bullets: [
        "Brand strategy, identity and guidelines",
        "Website and UI/UX journeys",
        "Content and visual systems that carry the brand",
        "Digital experience aligned with the message",
        "Stronger first impressions across channels",
      ],
      meta: ["Identity", "Website", "UI/UX", "Content", "Experience"],
      tags: ["Brand", "Website", "UI/UX", "Experience"],
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
      label: "AI Automation",
      title: "AI Automation",
      subtitle:
        "Practical AI and automation workflows that keep marketing moving with clearer ownership.",
      bullets: [
        "Lifecycle design, lead routing and CRM alignment",
        "AI-assisted content and creative with human review",
        "Marketing automation agents for repeatable tasks",
        "Conversational AI for enquiry handling",
        "Dashboards and handoffs for marketing and revenue teams",
      ],
      meta: ["CRM", "Automation", "AI workflows", "Conversational AI", "Dashboards"],
      tags: ["CRM", "Automation", "AI"],
      iconId: "cybersecurity",
    },
  ],
};
