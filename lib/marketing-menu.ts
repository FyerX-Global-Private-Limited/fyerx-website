import type { MobileMenuCategory } from "@/components/layout/shared/MobileMegaMenuSection";

const ICONS = "/Marketing-Menu-Icons";

export const MARKETING_MENU_HEADING_ICON = `${ICONS}/MARKETING-SERVICES.webp`;

/** Shared Marketing mega-menu — used by the homepage Marketing tab and the marketing site Services dropdown. */
export const MARKETING_MENU_CATEGORIES: MobileMenuCategory[] = [
  {
    label: "Marketing Strategy & Consulting",
    subtitle: "Planning & positioning",
    avatar: "/avatar/1.webp",
    icon: "chart",
    tint: "#FFF6E6",
    iconColor: "#FDAB3D",
    image: `${ICONS}/Marketing-and-Consulting.webp`,
    items: [
      { label: "Go-to-Market Strategy", icon: "chart", href: "#", image: `${ICONS}/Go-to-Market-Strategy.webp` },
      { label: "ICP & Buyer Personas", icon: "personPlus", href: "#", image: `${ICONS}/ICP-and-Buyer-Persona-Definition.webp` },
      { label: "Marketing Audits", icon: "clipboardCheck", href: "#", image: `${ICONS}/Marketing-Audits.webp` },
      { label: "Competitive Positioning", icon: "tag", href: "#", image: `${ICONS}/Competitive-Positioning.webp` },
    ],
  },
  {
    label: "Demand & Lead Generation",
    subtitle: "Leads & pipeline",
    avatar: "/avatar/2.webp",
    icon: "funnel",
    tint: "#F3EEFF",
    iconColor: "#6161FF",
    image: `${ICONS}/Demand-Generation.webp`,
    items: [
      { label: "Account-Based Marketing", icon: "funnel", href: "#", image: `${ICONS}/Account-Based-Marketing.webp` },
      { label: "LinkedIn Lead Generation", icon: "link", href: "#", image: `${ICONS}/LinkedIn-Lead-Generation.webp` },
      { label: "Outbound Outreach", icon: "headset", href: "#", image: `${ICONS}/Outbound-Outreach.webp` },
      { label: "Landing Pages & Nurture", icon: "formEdit", href: "#", image: `${ICONS}/Landing-Pages-and-Nurture.webp` },
      { label: "Attribution & Pipeline Reporting", icon: "chart", href: "#", image: `${ICONS}/Attribution-and-Pipeline-Reporting.webp` },
    ],
  },
  {
    label: "Search & AI Visibility",
    subtitle: "Search & discovery",
    avatar: "/avatar/3.webp",
    icon: "search",
    tint: "#E8F4FF",
    iconColor: "#579BFC",
    image: `${ICONS}/Search-and-AI-Visibility.webp`,
    items: [
      { label: "Search Engine Optimization", icon: "search", href: "#", image: `${ICONS}/SEO.webp` },
      { label: "Answer Engine Optimisation", icon: "sparkle", href: "#", image: `${ICONS}/AEO.webp` },
      { label: "Generative Engine Optimisation", icon: "robot", href: "#", image: `${ICONS}/GEO.webp` },
      { label: "Local SEO", icon: "search", href: "#", image: `${ICONS}/Local-SEO.webp` },
    ],
  },
  {
    label: "AI Marketing & Automation",
    subtitle: "Automation & insights",
    avatar: "/avatar/4.webp",
    icon: "sparkle",
    tint: "#FFE8F5",
    iconColor: "#FF5AC4",
    image: `${ICONS}/AI-Marketing.webp`,
    items: [
      { label: "Lead Operations Automation", icon: "robot", href: "#", image: `${ICONS}/Lead-Operations-Automation.webp` },
      { label: "AI Content Operations", icon: "sparkle", href: "#", image: `${ICONS}/AI-Content-Operations.webp` },
      { label: "Reporting & Spend Guardrails", icon: "chart", href: "#", image: `${ICONS}/Reporting-and-Spend-Guardrails.webp` },
      { label: "Conversational AI", icon: "headset", href: "#", image: `${ICONS}/Conversational-AI.webp` },
      { label: "CRM Integration", icon: "database", href: "#", image: `${ICONS}/CRM-Integration-1.webp` },
    ],
  },
  {
    label: "Performance Marketing",
    subtitle: "Ads & conversions",
    avatar: "/avatar/1.webp",
    icon: "chart",
    tint: "#FFF0E6",
    iconColor: "#FDAB3D",
    image: `${ICONS}/Performance-Marketing.webp`,
    items: [
      { label: "Paid Search", icon: "search", href: "#", image: `${ICONS}/Paid-Search.webp` },
      { label: "Paid Social", icon: "megaphone", href: "#", image: `${ICONS}/Paid-Social.webp` },
      { label: "Landing Page Optimisation", icon: "formEdit", href: "#", image: `${ICONS}/Landing-Page-Optimisation.webp` },
      { label: "Analytics & ROI Tracking", icon: "chart", href: "#", image: `${ICONS}/Analytics-and-ROI-Tracking.webp` },
    ],
  },
  {
    label: "Brand & Digital Experience",
    subtitle: "Identity & experience",
    avatar: "/avatar/2.webp",
    icon: "heart",
    tint: "#F3EEFF",
    iconColor: "#A25DDC",
    image: `${ICONS}/Branding-and-Design.webp`,
    items: [
      { label: "Brand Strategy & Identity", icon: "tag", href: "#", image: `${ICONS}/Brand-Strategy-and-Identity.webp` },
      { label: "Website & UI/UX", icon: "gear", href: "#", image: `${ICONS}/UI-UX.webp` },
      { label: "Social Media Management", icon: "megaphone", href: "#", image: `${ICONS}/Social-Media-Management.webp` },
      { label: "Content Strategy & Production", icon: "doc", href: "#", image: `${ICONS}/Content-Strategy-and-Production.webp` },
      { label: "Video Production", icon: "sparkle", href: "#", image: `${ICONS}/Video-Production.webp` },
    ],
  },
];
