import type { MobileMenuCategory } from "@/components/layout/shared/MobileMegaMenuSection";

const ICONS = "/Technology-Menu";

export const TECHNOLOGY_MENU_HEADING_ICON = `${ICONS}/TECHNOLOGY-SERVICES.webp`;

/** Technology mega-menu — five service categories with Talent-style icon thumbs. */
export const TECHNOLOGY_MENU_CATEGORIES: MobileMenuCategory[] = [
  {
    label: "Enterprise Platforms",
    subtitle: "ServiceNow, SAP, Salesforce",
    avatar: "/avatar/1.webp",
    icon: "plug",
    tint: "#E8F4FF",
    iconColor: "#20287A",
    image: `${ICONS}/Enterprise-Platforms.webp`,
    items: [
      { label: "ServiceNow", icon: "gear", href: "/technology/services/enterprise-platforms/servicenow", image: `${ICONS}/Service-and-Workflow-Platforms.webp` },
      { label: "SAP", icon: "database", href: "/technology/services/enterprise-platforms/sap", image: `${ICONS}/ERP-and-Business-Platforms.webp` },
      { label: "Oracle Fusion", icon: "database", href: "/technology/services/enterprise-platforms/oracle-fusion", image: `${ICONS}/ERP-and-Business-Platforms.webp` },
      { label: "Salesforce", icon: "personPlus", href: "/technology/services/enterprise-platforms/salesforce", image: `${ICONS}/CRM-and-Productivity-Platforms.webp` },
      { label: "Microsoft Business Applications", icon: "personPlus", href: "/technology/services/enterprise-platforms/microsoft-business-applications", image: `${ICONS}/CRM-and-Productivity-Platforms.webp` },
      { label: "Enterprise Automation & Integration", icon: "plug", href: "/technology/services/enterprise-platforms/enterprise-automation-integration", image: `${ICONS}/Automation-and-Integration.webp` },
    ],
  },
  {
    label: "Digital Transformation",
    subtitle: "Applications & automation",
    avatar: "/avatar/2.webp",
    icon: "sparkle",
    tint: "#F3EEFF",
    iconColor: "#6161FF",
    image: `${ICONS}/Digital-Transformation.webp`,
    items: [
      { label: "Application Modernisation", icon: "doc", href: "/technology/services/digital-transformation/application-modernisation", image: `${ICONS}/Application-Modernisation.webp` },
      { label: "Connected Experiences", icon: "globe", href: "/technology/services/digital-transformation/connected-experiences", image: `${ICONS}/Connected-Experiences.webp` },
      { label: "Process Automation", icon: "sparkle", href: "/technology/services/digital-transformation/process-automation", image: `${ICONS}/Process-Automation.webp` },
      { label: "Delivery Foundations", icon: "clipboardCheck", href: "/technology/services/digital-transformation/delivery-foundations", image: `${ICONS}/Delivery-Foundations.webp` },
    ],
  },
  {
    label: "Data & AI",
    subtitle: "Intelligence & decisions",
    avatar: "/avatar/3.webp",
    icon: "database",
    tint: "#E8F8EF",
    iconColor: "#00CA72",
    image: `${ICONS}/Data-and-AI.webp`,
    items: [
      { label: "Data Foundations", icon: "database", href: "/technology/services/data-ai/data-engineering-platforms", image: `${ICONS}/Data-Foundations.webp` },
      { label: "Analytics & Reporting", icon: "chart", href: "/technology/services/data-ai/analytics-reporting", image: `${ICONS}/Analytics-and-Reporting.webp` },
      { label: "AI Enablement", icon: "sparkle", href: "/technology/services/data-ai/ai-enablement", image: `${ICONS}/AI-Enablement.webp` },
      { label: "ML Operations", icon: "gear", href: "/technology/services/data-ai/mlops", image: `${ICONS}/ML-Operations.webp` },
    ],
  },
  {
    label: "Cloud & DevOps",
    subtitle: "Foundations & reliability",
    avatar: "/avatar/4.webp",
    icon: "globe",
    tint: "#FFF6E6",
    iconColor: "#FDAB3D",
    image: `${ICONS}/Cloud-and-DevOps.webp`,
    items: [
      { label: "Cloud Transformation", icon: "globe", href: "/technology/services/cloud-devops/cloud-transformation", image: `${ICONS}/Cloud-Transformation.webp` },
      { label: "DevOps & Delivery", icon: "gear", href: "/technology/services/cloud-devops/devops-ci-cd", image: `${ICONS}/DevOps-and-Delivery.webp` },
      { label: "Platform Engineering", icon: "plug", href: "/technology/services/cloud-devops/platform-engineering", image: `${ICONS}/Platform-Engineering.webp` },
      { label: "Reliability & Cost", icon: "chart", href: "/technology/services/cloud-devops/reliability-cost", image: `${ICONS}/Reliability-and-Cost.webp` },
    ],
  },
  {
    label: "Strategic Advisory",
    subtitle: "Roadmaps & decisions",
    avatar: "/avatar/5.webp",
    icon: "search",
    tint: "#EEF0FA",
    iconColor: "#4B5FDB",
    image: `${ICONS}/Strategic-Advisory.webp`,
    items: [
      { label: "Strategy & Roadmap", icon: "search", href: "/technology/services/strategic-advisory/strategy-roadmap", image: `${ICONS}/Strategy-and-Roadmap.webp` },
      { label: "Architecture & Leadership", icon: "doc", href: "/technology/services/strategic-advisory/architecture-leadership", image: `${ICONS}/Architecture-and-Leadership.webp` },
      { label: "Vendor & Platform Decisions", icon: "tag", href: "/technology/services/strategic-advisory/vendor-platform-decisions", image: `${ICONS}/Vendor-and-Platform-Decisions.webp` },
      { label: "Transformation Planning", icon: "clipboardCheck", href: "/technology/services/strategic-advisory/transformation-planning", image: `${ICONS}/Transformation-Planning.webp` },
    ],
  },
];
