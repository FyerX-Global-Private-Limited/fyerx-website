import type { MobileMenuCategory } from "@/components/layout/shared/MobileMegaMenuSection";

const SERVICES_HREF = "/technology#services";
const ICONS = "/Technology Menu";

export const TECHNOLOGY_MENU_HEADING_ICON = `${ICONS}/TECHNOLOGY SERVICES.webp`;

/** Technology mega-menu — five service categories with Talent-style icon thumbs. */
export const TECHNOLOGY_MENU_CATEGORIES: MobileMenuCategory[] = [
  {
    label: "Enterprise Platforms",
    subtitle: "ServiceNow, SAP, Salesforce",
    avatar: "/avatar/1.webp",
    icon: "plug",
    tint: "#E8F4FF",
    iconColor: "#20287A",
    image: `${ICONS}/Enterprise Platforms.webp`,
    items: [
      { label: "Service & Workflow Platforms", icon: "gear", href: SERVICES_HREF, image: `${ICONS}/Service & Workflow Platforms.webp` },
      { label: "ERP & Business Platforms", icon: "database", href: SERVICES_HREF, image: `${ICONS}/ERP & Business Platforms.webp` },
      { label: "CRM & Productivity Platforms", icon: "personPlus", href: SERVICES_HREF, image: `${ICONS}/CRM & Productivity Platforms.webp` },
      { label: "Automation & Integration", icon: "plug", href: SERVICES_HREF, image: `${ICONS}/Automation & Integration.webp` },
    ],
  },
  {
    label: "Digital Transformation",
    subtitle: "Applications & automation",
    avatar: "/avatar/2.webp",
    icon: "sparkle",
    tint: "#F3EEFF",
    iconColor: "#6161FF",
    image: `${ICONS}/Digital Transformation.webp`,
    items: [
      { label: "Application Modernisation", icon: "doc", href: SERVICES_HREF, image: `${ICONS}/Application Modernisation.webp` },
      { label: "Connected Experiences", icon: "globe", href: SERVICES_HREF, image: `${ICONS}/Connected Experiences.webp` },
      { label: "Process Automation", icon: "sparkle", href: SERVICES_HREF, image: `${ICONS}/Process Automation.webp` },
      { label: "Delivery Foundations", icon: "clipboardCheck", href: SERVICES_HREF, image: `${ICONS}/Delivery Foundations.webp` },
    ],
  },
  {
    label: "Data & AI",
    subtitle: "Intelligence & decisions",
    avatar: "/avatar/3.webp",
    icon: "database",
    tint: "#E8F8EF",
    iconColor: "#00CA72",
    image: `${ICONS}/Data & AI.webp`,
    items: [
      { label: "Data Foundations", icon: "database", href: SERVICES_HREF, image: `${ICONS}/Data Foundations.webp` },
      { label: "Analytics & Reporting", icon: "chart", href: SERVICES_HREF, image: `${ICONS}/Analytics & Reporting.webp` },
      { label: "AI Enablement", icon: "sparkle", href: SERVICES_HREF, image: `${ICONS}/AI Enablement.webp` },
      { label: "ML Operations", icon: "gear", href: SERVICES_HREF, image: `${ICONS}/ML Operations.webp` },
    ],
  },
  {
    label: "Cloud & DevOps",
    subtitle: "Foundations & reliability",
    avatar: "/avatar/4.webp",
    icon: "globe",
    tint: "#FFF6E6",
    iconColor: "#FDAB3D",
    image: `${ICONS}/Cloud & DevOps.webp`,
    items: [
      { label: "Cloud Transformation", icon: "globe", href: SERVICES_HREF, image: `${ICONS}/Cloud Transformation.webp` },
      { label: "DevOps & Delivery", icon: "gear", href: SERVICES_HREF, image: `${ICONS}/DevOps & Delivery.webp` },
      { label: "Platform Engineering", icon: "plug", href: SERVICES_HREF, image: `${ICONS}/Platform Engineering.webp` },
      { label: "Reliability & Cost", icon: "chart", href: SERVICES_HREF, image: `${ICONS}/Reliability & Cost.webp` },
    ],
  },
  {
    label: "Strategic Advisory",
    subtitle: "Roadmaps & decisions",
    avatar: "/avatar/5.webp",
    icon: "search",
    tint: "#EEF0FA",
    iconColor: "#4B5FDB",
    image: `${ICONS}/Strategic Advisory.webp`,
    items: [
      { label: "Strategy & Roadmap", icon: "search", href: SERVICES_HREF, image: `${ICONS}/Strategy & Roadmap.webp` },
      { label: "Architecture & Leadership", icon: "doc", href: SERVICES_HREF, image: `${ICONS}/Architecture & Leadership.webp` },
      { label: "Vendor & Platform Decisions", icon: "tag", href: SERVICES_HREF, image: `${ICONS}/Vendor & Platform Decisions.webp` },
      { label: "Transformation Planning", icon: "clipboardCheck", href: SERVICES_HREF, image: `${ICONS}/Transformation Planning.webp` },
    ],
  },
];
