export type TechScrollCard = {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const TECH_PRIORITY_CARDS: TechScrollCard[] = [
  {
    id: "enterprise-platform-change",
    title: "Enterprise platform change",
    description:
      "Implement, enhance or connect the platforms that support customer, employee, service and operational workflows.",
    image: "/avatar/ai1.avif",
    alt: "Enterprise platform change",
  },
  {
    id: "legacy-modernisation",
    title: "Legacy modernisation",
    description:
      "Replace ageing applications and manual workarounds without losing sight of business continuity.",
    image: "/avatar/ai2.avif",
    alt: "Legacy modernisation",
  },
  {
    id: "data-ai-adoption",
    title: "Data and AI adoption",
    description:
      "Create trusted data foundations, practical intelligence and controlled AI use cases.",
    image: "/avatar/ai3.avif",
    alt: "Data and AI adoption",
  },
  {
    id: "cloud-operating-maturity",
    title: "Cloud operating maturity",
    description:
      "Improve cloud readiness, release discipline, service reliability and cost visibility.",
    image: "/avatar/ai4.avif",
    alt: "Cloud operating maturity",
  },
  {
    id: "process-automation",
    title: "Process automation",
    description:
      "Connect systems and automate repeatable work with defined controls and accountability.",
    image: "/avatar/ai5.avif",
    alt: "Process automation",
  },
  {
    id: "strategic-direction",
    title: "Strategic direction",
    description:
      "Clarify the architecture, roadmap, vendor approach and investment priorities for the next stage of growth.",
    image: "/avatar/ai6.avif",
    alt: "Strategic direction",
  },
];

export const TECH_ENGAGE_CARDS: TechScrollCard[] = [
  {
    id: "current-state-assessment",
    title: "Current-State Assessment",
    description:
      "A structured review of the current environment, key constraints and the most valuable next actions.",
    image: "/avatar/ai1.avif",
    alt: "Current-state assessment",
  },
  {
    id: "advisory-engagement",
    title: "Advisory Engagement",
    description:
      "Architecture, roadmap, vendor or investment guidance for a defined business decision.",
    image: "/avatar/ai2.avif",
    alt: "Advisory engagement",
  },
  {
    id: "implementation-project",
    title: "Implementation Project",
    description:
      "A scoped programme to configure, build, integrate, migrate or modernise a solution.",
    image: "/avatar/ai3.avif",
    alt: "Implementation project",
  },
  {
    id: "managed-support",
    title: "Managed Support",
    description:
      "Agreed support, optimisation and operational ownership after implementation.",
    image: "/avatar/ai4.avif",
    alt: "Managed support",
  },
  {
    id: "delivery-pod",
    title: "Delivery Pod",
    description:
      "A cross-functional team aligned to a transformation workstream or milestone.",
    image: "/avatar/ai5.avif",
    alt: "Delivery pod",
  },
  {
    id: "specialist-capability",
    title: "Specialist Capability",
    description:
      "Targeted access to specialist expertise required for a specific programme need.",
    image: "/avatar/ai6.avif",
    alt: "Specialist capability",
  },
];

export const TECH_SOLUTIONS = [
  {
    title: "Enterprise Platform Services",
    body: "Implement, integrate and optimise the systems that run service, customer, employee and business workflows.",
    tags: ["ServiceNow", "SAP", "Salesforce", "Microsoft", "Oracle"],
    cta: "Explore Enterprise Platforms",
    href: "#services",
  },
  {
    title: "Digital Product & Integration Delivery",
    body: "Build modern applications, APIs and connected experiences that remove operational friction.",
    tags: ["Applications", "APIs", "Automation"],
    cta: "Explore Digital Transformation",
    href: "#services",
  },
  {
    title: "Data, Analytics & AI Enablement",
    body: "Create governed data products, management dashboards and AI-enabled workflows teams can use.",
    tags: ["Data Engineering", "BI", "GenAI"],
    cta: "Explore Data & AI",
    href: "#services",
  },
  {
    title: "Cloud & DevOps Modernisation",
    body: "Strengthen cloud foundations, automate delivery pipelines and improve service reliability.",
    tags: ["Cloud", "CI/CD", "SRE"],
    cta: "Explore Cloud & DevOps",
    href: "#services",
  },
  {
    title: "Strategic Advisory",
    body: "Make informed choices on architecture, platforms, vendors and transformation investments.",
    tags: ["Roadmaps", "Architecture", "Vendor Review"],
    cta: "Speak to an Advisor",
    href: "#contact",
  },
  {
    title: "Managed Support & Optimisation",
    body: "Maintain momentum after go-live with agreed support, optimisation and operational governance.",
    tags: ["Support", "Monitoring", "Improvement"],
    cta: "Discuss Support Options",
    href: "#contact",
  },
] as const;

export const TECH_FAQS = [
  {
    q: "What does FyerX do?",
    a: "FyerX provides consulting, implementation, integration, modernisation and agreed managed support across enterprise platforms, digital transformation, data and AI, and cloud operations.",
  },
  {
    q: "Do you support platforms beyond ServiceNow?",
    a: "Yes. Enterprise Platforms covers ServiceNow, SAP, Salesforce, Microsoft, Oracle and selected automation technologies. Scope is defined around the platform, business outcome and delivery need.",
  },
  {
    q: "Can FyerX work with our internal team and existing vendors?",
    a: "Yes. We work alongside internal teams, business stakeholders, platform vendors and implementation partners with clearly defined roles and governance.",
  },
  {
    q: "Do you provide support after implementation?",
    a: "Yes, where the engagement includes an agreed support scope, operating model, service responsibilities, escalation route and governance cadence.",
  },
  {
    q: "Do you build applications, APIs and integrations?",
    a: "Yes. Digital Transformation engagements can include web and mobile applications, APIs, integrations, workflow automation and low-code solutions.",
  },
  {
    q: "How do you approach Data and AI engagements?",
    a: "We start with the business use case, data readiness, governance requirements and accountable owners. This creates a controlled path from assessment to implementation.",
  },
  {
    q: "Can you help if our scope is not finalised?",
    a: "Yes. An assessment, architecture review or roadmap advisory engagement is designed for this stage.",
  },
  {
    q: "How do we start a conversation?",
    a: "Share the business priority, current environment and intended timeline. FyerX will recommend the appropriate first conversation and engagement path.",
  },
] as const;
