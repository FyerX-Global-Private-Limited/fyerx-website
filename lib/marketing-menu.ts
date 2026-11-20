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
      { label: "Go-to-Market Strategy", icon: "chart", href: "/marketing/services/strategy-consulting/go-to-market-strategy", image: `${ICONS}/Go-to-Market-Strategy.webp` },
      { label: "ICP & Buyer Personas", icon: "personPlus", href: "/marketing/services/strategy-consulting/icp-buyer-personas", image: `${ICONS}/ICP-and-Buyer-Persona-Definition.webp` },
      { label: "Marketing Audits", icon: "clipboardCheck", href: "/marketing/services/strategy-consulting/marketing-audits", image: `${ICONS}/Marketing-Audits.webp` },
      { label: "Competitive Positioning", icon: "tag", href: "/marketing/services/strategy-consulting/competitive-positioning", image: `${ICONS}/Competitive-Positioning.webp` },
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
      { label: "Account-Based Marketing", icon: "funnel", href: "/marketing/services/demand-lead-generation/account-based-marketing", image: `${ICONS}/Account-Based-Marketing.webp` },
      { label: "LinkedIn Lead Generation", icon: "link", href: "/marketing/services/demand-lead-generation/linkedin-lead-generation", image: `${ICONS}/LinkedIn-Lead-Generation.webp` },
      { label: "Outbound Outreach", icon: "headset", href: "/marketing/services/demand-lead-generation/outbound-outreach", image: `${ICONS}/Outbound-Outreach.webp` },
      { label: "Landing Pages & Nurture", icon: "formEdit", href: "/marketing/services/demand-lead-generation/landing-pages-nurture", image: `${ICONS}/Landing-Pages-and-Nurture.webp` },
      { label: "Attribution & Pipeline Reporting", icon: "chart", href: "/marketing/services/demand-lead-generation/attribution-pipeline-reporting", image: `${ICONS}/Attribution-and-Pipeline-Reporting.webp` },
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
      { label: "Search Engine Optimization", icon: "search", href: "/marketing/services/search-ai-visibility/seo", image: `${ICONS}/SEO.webp` },
      { label: "Answer Engine Optimisation", icon: "sparkle", href: "/marketing/services/search-ai-visibility/aeo", image: `${ICONS}/AEO.webp` },
      { label: "Generative Engine Optimisation", icon: "robot", href: "/marketing/services/search-ai-visibility/geo", image: `${ICONS}/GEO.webp` },
      { label: "Local SEO", icon: "search", href: "/marketing/services/search-ai-visibility/local-seo", image: `${ICONS}/Local-SEO.webp` },
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
      { label: "Lead Operations Automation", icon: "robot", href: "/marketing/services/ai-marketing-automation/lead-operations-automation", image: `${ICONS}/Lead-Operations-Automation.webp` },
      { label: "AI Content Operations", icon: "sparkle", href: "/marketing/services/ai-marketing-automation/ai-content-operations", image: `${ICONS}/AI-Content-Operations.webp` },
      { label: "Reporting & Spend Guardrails", icon: "chart", href: "/marketing/services/ai-marketing-automation/reporting-spend-guardrails", image: `${ICONS}/Reporting-and-Spend-Guardrails.webp` },
      { label: "Conversational AI", icon: "headset", href: "/marketing/services/ai-marketing-automation/conversational-ai", image: `${ICONS}/Conversational-AI.webp` },
      { label: "CRM Integration", icon: "database", href: "/marketing/services/ai-marketing-automation/crm-integration", image: `${ICONS}/CRM-Integration-1.webp` },
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
      { label: "Paid Search", icon: "search", href: "/marketing/services/performance-marketing/paid-search", image: `${ICONS}/Paid-Search.webp` },
      { label: "Paid Social", icon: "megaphone", href: "/marketing/services/performance-marketing/paid-social", image: `${ICONS}/Paid-Social.webp` },
      { label: "Landing Page Optimisation", icon: "formEdit", href: "/marketing/services/performance-marketing/landing-page-optimisation", image: `${ICONS}/Landing-Page-Optimisation.webp` },
      { label: "Analytics & ROI Tracking", icon: "chart", href: "/marketing/services/performance-marketing/analytics-roi-tracking", image: `${ICONS}/Analytics-and-ROI-Tracking.webp` },
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
      { label: "Brand Strategy & Identity", icon: "tag", href: "/marketing/services/brand-digital-experience/brand-strategy-identity", image: `${ICONS}/Brand-Strategy-and-Identity.webp` },
      { label: "Website & UI/UX", icon: "gear", href: "/marketing/services/brand-digital-experience/website-ux-design", image: `${ICONS}/UI-UX.webp` },
      { label: "Social Media Management", icon: "megaphone", href: "/marketing/services/brand-digital-experience/social-media-management", image: `${ICONS}/Social-Media-Management.webp` },
      { label: "Content Strategy & Production", icon: "doc", href: "/marketing/services/brand-digital-experience/content-strategy-production", image: `${ICONS}/Content-Strategy-and-Production.webp` },
      { label: "Video Production", icon: "sparkle", href: "/marketing/services/brand-digital-experience/video-production", image: `${ICONS}/Video-Production.webp` },
    ],
  },
];
