import type { MobileMenuCategory } from "@/components/layout/shared/MobileMegaMenuSection";

const ICONS = "/Talent-menu";

export const TALENT_MENU_HEADING_ICON = `${ICONS}/Talent-Solutions.webp`;

/** Shared Talent mega-menu — used by the homepage Talent tab and the talent site Services dropdown. */
export const TALENT_MENU_CATEGORIES: MobileMenuCategory[] = [
  {
    label: "Contract Staffing",
    subtitle: "Flexibility & scale",
    avatar: "/avatar/1.webp",
    icon: "personPlus",
    tint: "#E8F8EF",
    iconColor: "#00CA72",
    image: `${ICONS}/Contract-Staffing.webp`,
    items: [
      { label: "IT & Tech Contract Roles", icon: "gear", href: "/talent/services/contract-staffing/it-contract-staffing", image: `${ICONS}/IT-and-Tech-Contract-Roles.webp` },
      { label: "Project-Based Staffing", icon: "clipboardCheck", href: "/talent/services/contract-staffing/project-based-staffing", image: `${ICONS}/Project-Based-Staffing.webp` },
      { label: "Volume/Bulk Staffing", icon: "personPlus", href: "/talent/services/contract-staffing/high-volume-staffing", image: `${ICONS}/Bulk-Staffing.webp` },
      { label: "Cross-Border Contract Staffing (US)", icon: "globe", href: "/talent/services/global-staffing/us-contract-staffing", image: `${ICONS}/Cross-Border-Contract-Staffing-US.webp` },
    ],
  },
  {
    label: "RPO",
    subtitle: "Sourcing & management",
    avatar: "/avatar/2.webp",
    icon: "funnel",
    tint: "#F3EEFF",
    iconColor: "#6161FF",
    image: `${ICONS}/RPO.webp`,
    items: [
      { label: "End-to-End Recruitment Outsourcing", icon: "funnel", href: "/talent/services/rpo/end-to-end-rpo", image: `${ICONS}/End-to-End-Recruitment-Outsourcing.webp` },
      { label: "On-Demand RPO", icon: "sparkle", href: "/talent/services/rpo/on-demand-rpo", image: `${ICONS}/On-Demand-RPO.webp` },
      { label: "Enterprise RPO", icon: "database", href: "/talent/services/rpo/enterprise-rpo", image: `${ICONS}/Enterprise-RPO.webp` },
    ],
  },
  {
    label: "Permanent Hiring & Executive Search",
    subtitle: "Placement & leadership",
    avatar: "/avatar/3.webp",
    icon: "search",
    tint: "#E8F4FF",
    iconColor: "#579BFC",
    image: `${ICONS}/Permanent-Hiring-and-Executive-Search.webp`,
    items: [
      { label: "Permanent Hiring", icon: "personPlus", href: "/talent/services/permanent-hiring-executive-search/permanent-hiring", image: `${ICONS}/Permanent-Hiring.webp` },
      { label: "Executive Search", icon: "search", href: "/talent/services/permanent-hiring-executive-search/executive-search", image: `${ICONS}/Executive-Search.webp` },
    ],
  },
  {
    label: "IT & Tech Talent",
    subtitle: "Tech & engineering",
    avatar: "/avatar/4.webp",
    icon: "gear",
    tint: "#FFF6E6",
    iconColor: "#FDAB3D",
    image: `${ICONS}/IT-and-Tech-Talent.webp`,
    items: [
      { label: "Software Development Roles", icon: "doc", href: "/talent/services/technology-recruitment/software-development-roles", image: `${ICONS}/Software-Development-Roles.webp` },
      { label: "ServiceNow & Enterprise Platform Talent", icon: "plug", href: "/talent/services/technology-recruitment/servicenow-enterprise-platform-talent", image: `${ICONS}/ServiceNow-and-Enterprise-Platform-Talent.webp` },
      { label: "Data & AI Talent", icon: "sparkle", href: "/talent/services/technology-recruitment/data-ai-talent", image: `${ICONS}/Data-and-AI-Talent.webp` },
      { label: "DevOps & Cloud Talent", icon: "database", href: "/talent/services/technology-recruitment/devops-cloud-talent", image: `${ICONS}/DevOps-and-Cloud-Talent.webp` },
    ],
  },
  {
    label: "HR Advisory",
    subtitle: "Strategy & compliance",
    avatar: "/avatar/5.webp",
    icon: "clipboardCheck",
    tint: "#E8F8EF",
    iconColor: "#00CA72",
    image: `${ICONS}/HR-Advisory.webp`,
    items: [
      { label: "Hiring Assessments", icon: "clipboardCheck", href: "/talent/services/hr-advisory/hiring-assessments", image: `${ICONS}/Hiring-Assessments.webp` },
      { label: "Background Verification", icon: "tag", href: "/talent/services/hr-advisory/background-verification", image: `${ICONS}/Background-Verification.webp` },
      { label: "Compensation Benchmarking", icon: "chart", href: "/talent/services/hr-advisory/compensation-benchmarking", image: `${ICONS}/Compensation-Benchmarking.webp` },
    ],
  },
  {
    label: "Global Staffing",
    subtitle: "Reach & expansion",
    avatar: "/avatar/6.webp",
    icon: "globe",
    tint: "#E8F4FF",
    iconColor: "#0086C0",
    image: `${ICONS}/Global-Staffing.webp`,
    items: [
      { label: "US Contract Staffing", icon: "globe", href: "/talent/services/global-staffing/us-contract-staffing", image: `${ICONS}/US-Contract-Staffing.webp` },
      { label: "Remote Team Building", icon: "personPlus", href: "/talent/services/global-staffing/remote-team-building", image: `${ICONS}/Remote-Team-Building.webp` },
      { label: "Cross-Border Compliance Support", icon: "globe", href: "/talent/services/global-staffing/cross-border-compliance-support", image: `${ICONS}/Cross-Border-Compliance-Support.webp` },
    ],
  },
];
