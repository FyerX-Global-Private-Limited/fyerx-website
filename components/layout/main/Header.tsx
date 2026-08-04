"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";

// ── Logo ───────────────────────────────────────────────────────────────────────
function FyerxLogo() {
  return (
    <Image
      src="/logo.webp"
      alt="FyerX"
      width={140}
      height={32}
      className="h-8 w-auto object-contain select-none"
      priority
    />
  );
}

// ── Icons ──────────────────────────────────────────────────────────────────────
function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ── Dropdown row icons — minimal single-stroke glyphs ───────────────────────────
type IconName =
  | "clipboardCheck" | "megaphone" | "gear" | "headset" | "personPlus" | "funnel"
  | "link" | "sparkle" | "heart" | "chart" | "doc" | "formEdit" | "plug" | "robot" | "database" | "tag"
  | "search" | "globe";

function Glyph({ name }: { name: IconName }) {
  const c = {
    width: 18, height: 18, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: 1.6,
    strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "clipboardCheck":
      return <svg {...c}><rect x="5.5" y="4" width="13" height="17" rx="2" /><rect x="9" y="2.5" width="6" height="3" rx="1" /><polyline points="9 12.5 11 14.5 15 10.5" /></svg>;
    case "megaphone":
      return <svg {...c}><path d="M3 10v4h2l1 5h2l-1-5h1l10 4V6L8 10H3z" /><line x1="18" y1="9" x2="18" y2="15" /></svg>;
    case "gear":
      return <svg {...c}><circle cx="12" cy="12" r="3" /><path d="M12 3v2.4M12 18.6V21M21 12h-2.4M5.4 12H3M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7M18.4 18.4l-1.7-1.7M7.3 7.3 5.6 5.6" /></svg>;
    case "headset":
      return <svg {...c}><path d="M4 13.5v-1.5a8 8 0 0 1 16 0v1.5" /><rect x="3" y="13" width="4" height="6" rx="1.5" /><rect x="17" y="13" width="4" height="6" rx="1.5" /><path d="M20 19.5v.5a3 3 0 0 1-3 3h-3" /></svg>;
    case "personPlus":
      return <svg {...c}><circle cx="10" cy="8" r="3.5" /><path d="M3.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" /><line x1="18" y1="7" x2="18" y2="13" /><line x1="15" y1="10" x2="21" y2="10" /></svg>;
    case "funnel":
      return <svg {...c}><polygon points="4 4 20 4 14 12 14 19 10 21 10 12 4 4" /></svg>;
    case "link":
      return <svg {...c}><path d="M10 14 14 10" /><path d="M8.5 12.5 6 15a3 3 0 0 0 4.2 4.2l2.5-2.5" /><path d="M15.5 11.5 18 9a3 3 0 0 0-4.2-4.2L11.3 7.3" /></svg>;
    case "sparkle":
      return <svg {...c}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></svg>;
    case "heart":
      return <svg {...c}><path d="M12 20s-7-4.3-9.3-8.8A5 5 0 0 1 12 6a5 5 0 0 1 9.3 5.2C19 15.7 12 20 12 20z" /></svg>;
    case "chart":
      return <svg {...c}><line x1="5" y1="19" x2="5" y2="12" /><line x1="12" y1="19" x2="12" y2="6" /><line x1="19" y1="19" x2="19" y2="15" /></svg>;
    case "doc":
      return <svg {...c}><rect x="5.5" y="3" width="13" height="18" rx="1.8" /><line x1="8.5" y1="8" x2="15.5" y2="8" /><line x1="8.5" y1="12" x2="15.5" y2="12" /><line x1="8.5" y1="16" x2="13" y2="16" /></svg>;
    case "formEdit":
      return <svg {...c}><rect x="5" y="3" width="12" height="18" rx="1.8" /><line x1="7.5" y1="8" x2="14.5" y2="8" /><line x1="7.5" y1="12" x2="14.5" y2="12" /><path d="M15 19.3 20 14.3l1.7 1.7-5 5-2.2.5z" /></svg>;
    case "plug":
      return <svg {...c}><path d="M9 2.5v4M15 2.5v4M6 6.5h12v4a6 6 0 0 1-12 0z" /><path d="M9 16.5v5M15 16.5v5" /></svg>;
    case "robot":
      return <svg {...c}><rect x="5" y="8" width="14" height="11" rx="2.5" /><circle cx="9.5" cy="13.2" r="1.1" fill="currentColor" stroke="none" /><circle cx="14.5" cy="13.2" r="1.1" fill="currentColor" stroke="none" /><line x1="12" y1="8" x2="12" y2="4.5" /><circle cx="12" cy="3" r="1.3" /><line x1="3" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="21" y2="12" /></svg>;
    case "database":
      return <svg {...c}><ellipse cx="12" cy="5.5" rx="7" ry="2.5" /><path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13" /><path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" /></svg>;
    case "tag":
      return <svg {...c}><path d="M11.7 3.5H5.8a2.3 2.3 0 0 0-2.3 2.3v5.9l10.8 10.8 8.2-8.2L11.7 3.5z" /><circle cx="8.3" cy="8.3" r="1.3" fill="currentColor" stroke="none" /></svg>;
    case "search":
      return <svg {...c}><circle cx="10.8" cy="10.8" r="6.8" /><line x1="15.8" y1="15.8" x2="21" y2="21" /></svg>;
    case "globe":
      return <svg {...c}><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><line x1="3" y1="12" x2="21" y2="12" /></svg>;
  }
}

// ── Data ───────────────────────────────────────────────────────────────────────
type MarketingItem = {
  avatar: string;
  label: string;
  subtitle: string;
  href: string;
};
type ConsultingCol = {
  header: string;
  items: { label: string; icon: IconName; href: string }[];
};

const platformItems: MarketingItem[] = [
  { avatar: "/avatar/6.avif", label: "PMO", subtitle: "Projects & delivery", href: "#" },
  { avatar: "/avatar/5.avif", label: "Marketing", subtitle: "Campaigns & creative", href: "#" },
  { avatar: "/avatar/4.avif", label: "Operations", subtitle: "Processes & efficiency", href: "#" },
  { avatar: "/avatar/3.avif", label: "IT", subtitle: "Tickets & support", href: "#" },
  { avatar: "/avatar/2.avif", label: "HR", subtitle: "Hiring & onboarding", href: "#" },
  { avatar: "/avatar/1.avif", label: "Sales", subtitle: "Pipeline & deals", href: "#" },
];

const capabilityCols: ConsultingCol[] = [
  {
    header: "AI agents",
    items: [
      { label: "Agent builder", icon: "link",    href: "#" },
      { label: "AI assistant",  icon: "sparkle", href: "#" },
    ],
  },
  {
    header: "Flexible workspace",
    items: [
      { label: "Vibe coding", icon: "heart",    href: "#" },
      { label: "Dashboards",  icon: "chart",    href: "#" },
      { label: "Docs",        icon: "doc",      href: "#" },
      { label: "Forms",       icon: "formEdit", href: "#" },
    ],
  },
  {
    header: "Connectivity & tools",
    items: [
      { label: "Integrations", icon: "plug",     href: "#" },
      { label: "Automations",  icon: "robot",    href: "#" },
      { label: "Our infra",    icon: "database", href: "#" },
      { label: "MCP",          icon: "tag",      href: "#" },
    ],
  },
];

const simpleLinks = [
  { label: "Blog", href: "/blog" },
];

type MenuCategory = {
  label: string;
  subtitle?: string;
  avatar: string;
  items: { label: string; href: string; icon: IconName }[];
};

const marketingCategories: MenuCategory[] = [
  {
    label: "Marketing & Consulting",
    subtitle: "Planning & positioning",
    avatar: "/avatar/1.avif",
    items: [
      { label: "Go-to-Market Strategy", icon: "chart", href: "#" },
      { label: "ICP & Buyer Persona Definition", icon: "personPlus", href: "#" },
      { label: "Marketing Audits", icon: "clipboardCheck", href: "#" },
      { label: "Competitive Positioning", icon: "tag", href: "#" },
    ],
  },
  {
    label: "Demand Generation",
    subtitle: "Leads & pipeline",
    avatar: "/avatar/2.avif",
    items: [
      { label: "Account-Based Marketing", icon: "funnel", href: "#" },
      { label: "LinkedIn Lead Generation", icon: "link", href: "#" },
      { label: "Outbound & Cold Outreach", icon: "headset", href: "#" },
      { label: "Email Nurture Sequences", icon: "doc", href: "#" },
      { label: "Webinar & Event Marketing", icon: "megaphone", href: "#" },
      { label: "Revenue Attribution & Pipeline Reporting", icon: "chart", href: "#" },
    ],
  },
  {
    label: "Search & AI Visibility",
    subtitle: "Search & discovery",
    avatar: "/avatar/3.avif",
    items: [
      { label: "SEO", icon: "search", href: "#" },
      { label: "AEO", icon: "sparkle", href: "#" },
      { label: "GEO", icon: "robot", href: "#" },
      { label: "Local SEO", icon: "search", href: "#" },
    ],
  },
  {
    label: "AI Marketing",
    subtitle: "Automation & insights",
    avatar: "/avatar/4.avif",
    items: [
      { label: "AI-Powered Content Generation", icon: "sparkle", href: "#" },
      { label: "AI Ad Creative & Personalization", icon: "heart", href: "#" },
      { label: "Marketing Automation Agents", icon: "robot", href: "#" },
      { label: "Conversational AI", icon: "headset", href: "#" },
    ],
  },
  {
    label: "Social Media Marketing",
    subtitle: "Content & community",
    avatar: "/avatar/5.avif",
    items: [
      { label: "Social Media Strategy & Management", icon: "megaphone", href: "#" },
      { label: "Community Management", icon: "personPlus", href: "#" },
      { label: "Paid Social Campaigns", icon: "chart", href: "#" },
    ],
  },
  {
    label: "Content Production",
    subtitle: "Videos & storytelling",
    avatar: "/avatar/6.avif",
    items: [
      { label: "Content Strategy & Editorial Calendars", icon: "doc", href: "#" },
      { label: "Thought Leadership & Whitepapers", icon: "formEdit", href: "#" },
      { label: "Video Production & Editing", icon: "sparkle", href: "#" },
      { label: "Motion Graphics & Animation", icon: "heart", href: "#" },
      { label: "Collaterals", icon: "tag", href: "#" },
    ],
  },
  {
    label: "Performance Marketing",
    subtitle: "Ads & conversions",
    avatar: "/avatar/1.avif",
    items: [
      { label: "Paid Search", icon: "search", href: "#" },
      { label: "Paid Social", icon: "megaphone", href: "#" },
      { label: "Retargeting & Conversion Optimization", icon: "funnel", href: "#" },
      { label: "Landing Page Design & Optimization", icon: "formEdit", href: "#" },
      { label: "Marketing Analytics & ROI Tracking", icon: "chart", href: "#" },
    ],
  },
  {
    label: "Branding & Design",
    subtitle: "Identity & design",
    avatar: "/avatar/2.avif",
    items: [
      { label: "Brand Identity & Guidelines", icon: "tag", href: "#" },
      { label: "Brand Strategy & Positioning", icon: "clipboardCheck", href: "#" },
      { label: "UI/UX Design", icon: "gear", href: "#" },
      { label: "Website Design & Development", icon: "doc", href: "#" },
    ],
  },
  {
    label: "Marketing Automation",
    subtitle: "Workflows & CRM",
    avatar: "/avatar/3.avif",
    items: [
      { label: "Marketing Automation", icon: "robot", href: "#" },
      { label: "CRM Integration", icon: "database", href: "#" },
    ],
  },
];

const talentCategories: MenuCategory[] = [
  {
    label: "Contract Staffing",
    avatar: "/avatar/1.avif",
    items: [
      { label: "IT & Tech Contract Roles", icon: "gear", href: "#" },
      { label: "Project-Based Staffing", icon: "clipboardCheck", href: "#" },
      { label: "Volume/Bulk Staffing", icon: "personPlus", href: "#" },
      { label: "Cross-Border Contract Staffing (US)", icon: "globe", href: "#" },
    ],
  },
  {
    label: "RPO",
    avatar: "/avatar/2.avif",
    items: [
      { label: "End-to-End Recruitment Outsourcing", icon: "funnel", href: "#" },
      { label: "On-Demand RPO", icon: "sparkle", href: "#" },
      { label: "Enterprise RPO", icon: "database", href: "#" },
    ],
  },
  {
    label: "Permanent Hiring & Executive Search",
    avatar: "/avatar/3.avif",
    items: [
      { label: "Permanent Hiring", icon: "personPlus", href: "#" },
      { label: "Executive Search", icon: "search", href: "#" },
    ],
  },
  {
    label: "IT & Tech Talent",
    avatar: "/avatar/4.avif",
    items: [
      { label: "Software Development Roles", icon: "doc", href: "#" },
      { label: "ServiceNow & Enterprise Platform Talent", icon: "plug", href: "#" },
      { label: "Data & AI Talent", icon: "sparkle", href: "#" },
      { label: "DevOps & Cloud Talent", icon: "database", href: "#" },
    ],
  },
  {
    label: "HR Advisory",
    avatar: "/avatar/5.avif",
    items: [
      { label: "Hiring Assessments", icon: "clipboardCheck", href: "#" },
      { label: "Background Verification", icon: "tag", href: "#" },
      { label: "Compensation Benchmarking", icon: "chart", href: "#" },
    ],
  },
  {
    label: "Global Staffing",
    avatar: "/avatar/6.avif",
    items: [
      { label: "US Contract Staffing", icon: "globe", href: "#" },
      { label: "Remote Team Building", icon: "personPlus", href: "#" },
      { label: "Cross-Border Compliance Support", icon: "globe", href: "#" },
    ],
  },
];

// ── Category menu — left = clickable main headings (avatar + label), 2 per
// row; right = sub-headings (icon + label) for whichever heading is active.
// Shared by both the Marketing and Talent nav triggers. `platformStyle` opts
// a caller into the Platform dropdown's exact layout (header nested in the
// left column, no shared top bar) while leaving the default layout — used by
// Talent — untouched.
function CategoryMenu({ categories, onClose, heading, headingSubtitle, headingIcon = "megaphone", platformStyle = false }: {
  categories: MenuCategory[]; onClose: () => void; heading?: string; headingSubtitle?: string; headingIcon?: IconName; platformStyle?: boolean;
}) {
  const [active, setActive] = useState(0);
  const category = categories[active];

  if (platformStyle) {
    return (
      <div className="animate-dropdown bg-white border-t border-[#e6e9ef] rounded-b-[12px] shadow-[0_16px_36px_rgba(20,20,43,0.12),0_2px_8px_rgba(20,20,43,0.06)]">
        <div className="flex px-10 pt-6 pb-6">

          {/* Left — heading + main headings, 2 per row */}
          <div className="w-[560px] pr-8">
            {heading && (
              <div className="flex items-center gap-3 text-[#9a9ea8]">
                <Glyph name={headingIcon} />
                <span className="text-[1rem] font-light uppercase tracking-[0.06rem] leading-[1.5] mb-0 text-[#7c7b7b]">
                  {heading}
                </span>
              </div>
            )}
            {headingSubtitle && (
              <p className="mt-[1.125rem] mb-[1.125rem] text-[0.75rem] leading-[1.6] text-[#676879]">{headingSubtitle}</p>
            )}
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              {categories.map((cat, i) => (
                <button
                  key={cat.label}
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className="flex items-center gap-3 text-left group"
                >
                  <Image src={cat.avatar} alt="" width={40} height={40}
                    className="w-10 h-10 rounded-[10px] object-cover shrink-0" />
                  <span className="flex flex-col gap-[0.35rem]">
                    <span className={`text-[0.875rem] font-normal leading-[1] transition-colors duration-100 group-hover:text-[#5c4fe0]
                      ${active === i ? "text-[#5c4fe0]" : "text-black"}`}>
                      {cat.label}
                    </span>
                    {cat.subtitle && (
                      <span className="text-[0.75rem] font-normal leading-[1.3] text-[#676879]">
                        {cat.subtitle}
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-px bg-[#eef0f4] mx-2" />

          {/* Right — Service Details, sub-headed by the active main heading */}
          <div className="flex-1 pl-8">
            <p className="text-[1rem] font-light uppercase tracking-[0.06rem] leading-[1.5] mb-0 text-[#7c7b7b]">Service Details</p>
            <p className="mt-[1.125rem] mb-[1.125rem] text-[0.75rem] leading-[1.6] text-[#676879] whitespace-nowrap">{category.label}</p>
            <ul className="flex flex-col gap-1">
              {category.items.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href} onClick={onClose}
                    className="flex items-center gap-2 py-1 text-[0.875rem] font-normal leading-[1.4] text-black
                               hover:text-[#5c4fe0] transition-colors duration-100"
                  >
                    <span className="text-[#8b8fa3] shrink-0">
                      <Glyph name={item.icon} />
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-dropdown bg-white border-t border-[#e6e9ef] rounded-b-[12px] shadow-[0_16px_36px_rgba(20,20,43,0.12),0_2px_8px_rgba(20,20,43,0.06)]">
      {heading && (
        <div className="px-10 pt-6 pb-[3px] border-b border-[#eef0f4]">
          <div className="flex items-center gap-3 text-[#9a9ea8]">
            <Glyph name={headingIcon} />
            <span className="text-[20px] font-normal uppercase tracking-[0.1em]"
              style={{ color: "rgb(124, 123, 123)" }}>
              {heading}
            </span>
          </div>
          {headingSubtitle && (
            <p className="mt-2 text-[14px] font-normal text-[#323338]">{headingSubtitle}</p>
          )}
        </div>
      )}
      <div className="flex px-10 pt-6 pb-6">

        {/* Left — main headings, 2 per row */}
        <div className="w-[560px] pr-8 grid grid-cols-2 gap-x-6 gap-y-5 content-start">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className="flex items-center gap-3 text-left group"
            >
              <Image src={cat.avatar} alt="" width={40} height={40}
                className="w-10 h-10 rounded-[10px] object-cover shrink-0" />
              <span className="flex flex-col leading-tight">
                <span className={`text-[15px] font-medium whitespace-nowrap transition-colors duration-100 group-hover:text-[#5c4fe0]
                  ${active === i ? "text-[#5c4fe0]" : "text-[#323338]"}`}>
                  {cat.label}
                </span>
                {cat.subtitle && (
                  <span className="text-[13px] font-normal text-[#8b8fa3] whitespace-nowrap">
                    {cat.subtitle}
                  </span>
                )}
              </span>
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="w-px bg-[#eef0f4] mx-2" />

        {/* Right — sub-headings for the active main heading */}
        <div className="flex-1 pl-8">
          <p className="text-[15px] font-normal text-[#8b8fa3] mb-5">{category.label}</p>
          <ul className="flex flex-col gap-1">
            {category.items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href} onClick={onClose}
                  className="flex items-center gap-2 py-1 text-[15px] font-medium text-[#323338]
                             hover:text-[#5c4fe0] transition-colors duration-100"
                >
                  <span className="text-[#8b8fa3] shrink-0">
                    <Glyph name={item.icon} />
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ── Main header ────────────────────────────────────────────────────────────────
export default function MainHeader() {
  const [openMenu, setOpenMenu]   = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const open  = (label: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpenMenu(label); };
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setOpenMenu(null), 200); };
  const cancelClose   = () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  const closeAll      = () => { setOpenMenu(null); setMobileOpen(false); };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-150 ${
        scrolled ? "shadow-[0_1px_0_#e6e9ef,0_2px_16px_rgba(20,20,43,0.07)]" : "border-b border-[#e6e9ef]"
      }`}
      style={{ fontFamily: "Poppins, Arial, sans-serif" }}
      onMouseLeave={scheduleClose}
    >
      {/* ─── Header bar ────────────────────────────────────────────────── */}
      <div className="mx-auto flex h-[60px] w-full max-w-[1400px] items-center px-6 sm:px-10 lg:px-16">

        {/* Logo */}
        <Link href="/" onClick={closeAll} className="flex shrink-0 items-center">
          <FyerxLogo />
        </Link>

        {/* Nav + CTAs + Dropdown container */}
        <div className="relative ml-6 flex min-w-0 flex-1 items-center sm:ml-8">

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-[2px]">

            {/* Marketing — icon-list mega-menu */}
            <div onMouseEnter={() => open("Marketing")}>
              <Link href="/marketing" onClick={closeAll} className={`flex items-center justify-center text-center gap-2 px-3.5 py-[7px] rounded-[8px]
                cursor-pointer text-[0.875rem] font-light leading-[100%] transition-colors duration-100
                ${openMenu === "Marketing" ? "bg-[#eeecfc] text-[#5c4fe0]" : "bg-transparent text-[rgb(83,87,104)] hover:bg-[#f5f6f8]"}`}>
                Marketing <ChevronDown open={openMenu === "Marketing"} />
              </Link>
            </div>

            {/* Talent — column mega-menu */}
            <div onMouseEnter={() => open("Talent")}>
              <Link href="/talent" onClick={closeAll} className={`flex items-center justify-center text-center gap-2 px-3.5 py-[7px] rounded-[8px]
                cursor-pointer text-[0.875rem] font-light leading-[100%] transition-colors duration-100
                ${openMenu === "Talent" ? "bg-[#eeecfc] text-[#5c4fe0]" : "bg-transparent text-[rgb(83,87,104)] hover:bg-[#f5f6f8]"}`}>
                Talent <ChevronDown open={openMenu === "Talent"} />
              </Link>
            </div>

            {/* Plain links */}
            {simpleLinks.map((item) => (
              <Link key={item.label} href={item.href} onClick={closeAll}
                onMouseEnter={() => setOpenMenu(null)}
                className="flex items-center justify-center text-center gap-2 px-3.5 py-[7px] rounded-[8px]
                           cursor-pointer text-[0.875rem] font-light leading-[100%] text-[rgb(83,87,104)] bg-transparent
                           hover:bg-[#f5f6f8] transition-colors duration-100 whitespace-nowrap">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA — Get Started */}
          <div className="hidden md:flex items-center ml-auto shrink-0">
            <PrimaryCtaLink href="/contact" onClick={closeAll} onMouseEnter={() => setOpenMenu(null)}
              className="h-[36px] whitespace-nowrap text-[0.875rem]"
              style={{ padding: "0.5rem 1.25rem" }}>
              Get Started
            </PrimaryCtaLink>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden ml-auto p-1.5 text-[#323338] hover:bg-[#f5f6f8] rounded-[6px]"
            onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
            {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>

          {/* Dropdown — Marketing and Talent */}
          {openMenu === "Marketing" && (
            <div className="absolute top-full left-0 right-0 z-50 max-w-[1040px]"
              onMouseEnter={cancelClose}>
              <CategoryMenu categories={marketingCategories} onClose={closeAll}
                heading="MARKETING SERVICES"
                headingSubtitle="An overview of what we offer"
                headingIcon="megaphone"
                platformStyle />
            </div>
          )}
          {openMenu === "Talent" && (
            <div className="absolute top-full left-0 right-0 z-50 max-w-[1040px]"
              onMouseEnter={cancelClose}>
              <CategoryMenu categories={talentCategories} onClose={closeAll}
                heading="TALENT SOLUTIONS"
                headingSubtitle="An overview of what we offer"
                headingIcon="personPlus"
                platformStyle />
            </div>
          )}
        </div>
      </div>

      {/* ─── Mobile drawer ─────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#e6e9ef] bg-white">
          <div className="px-6 py-4 sm:px-10 lg:px-16 flex flex-col gap-0.5">
            <p className="px-3 pt-1 pb-2 text-[11px] font-semibold uppercase tracking-[0.07em] text-[#8b8fa3]">
              Platform
            </p>
            {platformItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={closeAll}
                className="flex items-center gap-3 px-3 py-[10px] rounded-[8px] hover:bg-[#f5f6f8] transition-colors">
                <Image src={item.avatar} alt="" width={30} height={30}
                  className="w-[30px] h-[30px] rounded-[8px] object-cover shrink-0" />
                <span className="text-[15px] font-semibold text-[#323338]">{item.label}</span>
              </Link>
            ))}
            <p className="px-3 pt-4 pb-2 text-[11px] font-semibold uppercase tracking-[0.07em] text-[#8b8fa3]">
              Capabilities
            </p>
            {capabilityCols[1].items.map((item) => (
              <Link key={item.label} href={item.href} onClick={closeAll}
                className="flex items-center gap-3 px-3 py-[10px] rounded-[8px] text-[15px] font-semibold text-[#323338] hover:bg-[#f5f6f8] transition-colors">
                <span className="text-[#8b8fa3]"><Glyph name={item.icon} /></span>
                {item.label}
              </Link>
            ))}
            <div className="my-2 h-px bg-[#e6e9ef]" />
            {simpleLinks.map((item) => (
              <Link key={item.label} href={item.href} onClick={closeAll}
                className="px-3 py-[10px] rounded-[8px] text-[15px] font-medium text-[#323338] hover:bg-[#f5f6f8] transition-colors">
                {item.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-[#e6e9ef]">
              <PrimaryCtaLink href="/contact" onClick={closeAll}>
                Get Started
              </PrimaryCtaLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
