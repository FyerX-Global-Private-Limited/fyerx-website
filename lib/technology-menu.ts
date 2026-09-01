import type { MobileMenuCategory } from "@/components/layout/shared/MobileMegaMenuSection";

const SERVICES_HREF = "/technology#services";

/** Technology mega-menu — five service categories with Talent-style icon thumbs. */
export const TECHNOLOGY_MENU_CATEGORIES: MobileMenuCategory[] = [
  {
    label: "Enterprise Platforms",
    subtitle: "ServiceNow, SAP, Salesforce",
    avatar: "/avatar/1.avif",
    icon: "plug",
    tint: "#E8F4FF",
    iconColor: "#20287A",
    items: [
      { label: "Service & Workflow Platforms", icon: "gear", href: SERVICES_HREF },
      { label: "ERP & Business Platforms", icon: "database", href: SERVICES_HREF },
      { label: "CRM & Productivity Platforms", icon: "personPlus", href: SERVICES_HREF },
      { label: "Automation & Integration", icon: "plug", href: SERVICES_HREF },
    ],
  },
  {
    label: "Digital Transformation",
    subtitle: "Applications & automation",
    avatar: "/avatar/2.avif",
    icon: "sparkle",
    tint: "#F3EEFF",
    iconColor: "#6161FF",
    items: [
      { label: "Application Modernisation", icon: "doc", href: SERVICES_HREF },
      { label: "Connected Experiences", icon: "globe", href: SERVICES_HREF },
      { label: "Process Automation", icon: "sparkle", href: SERVICES_HREF },
      { label: "Delivery Foundations", icon: "clipboardCheck", href: SERVICES_HREF },
    ],
  },
  {
    label: "Data & AI",
    subtitle: "Intelligence & decisions",
    avatar: "/avatar/3.avif",
    icon: "database",
    tint: "#E8F8EF",
    iconColor: "#00CA72",
    items: [
      { label: "Data Foundations", icon: "database", href: SERVICES_HREF },
      { label: "Analytics & Reporting", icon: "chart", href: SERVICES_HREF },
      { label: "AI Enablement", icon: "sparkle", href: SERVICES_HREF },
      { label: "ML Operations", icon: "gear", href: SERVICES_HREF },
    ],
  },
  {
    label: "Cloud & DevOps",
    subtitle: "Foundations & reliability",
    avatar: "/avatar/4.avif",
    icon: "globe",
    tint: "#FFF6E6",
    iconColor: "#FDAB3D",
    items: [
      { label: "Cloud Transformation", icon: "globe", href: SERVICES_HREF },
      { label: "DevOps & Delivery", icon: "gear", href: SERVICES_HREF },
      { label: "Platform Engineering", icon: "plug", href: SERVICES_HREF },
      { label: "Reliability & Cost", icon: "chart", href: SERVICES_HREF },
    ],
  },
  {
    label: "Strategic Advisory",
    subtitle: "Roadmaps & decisions",
    avatar: "/avatar/5.avif",
    icon: "search",
    tint: "#EEF0FA",
    iconColor: "#4B5FDB",
    items: [
      { label: "Strategy & Roadmap", icon: "search", href: SERVICES_HREF },
      { label: "Architecture & Leadership", icon: "doc", href: SERVICES_HREF },
      { label: "Vendor & Platform Decisions", icon: "tag", href: SERVICES_HREF },
      { label: "Transformation Planning", icon: "clipboardCheck", href: SERVICES_HREF },
    ],
  },
];
