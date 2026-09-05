"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import {
  HEADER_LOGO_CLASS,
  HEADER_LOGO_HEIGHT,
  HEADER_LOGO_WIDTH,
} from "@/lib/header-logo";
import {
  MenuDetailIcon,
  MenuGlyphBold,
  type MenuIconName,
} from "@/components/ui/MenuGlyph";
import {
  CategoryThumb,
  MobileMegaMenuSection,
} from "@/components/layout/shared/MobileMegaMenuSection";
import { TALENT_ACCENT, TALENT_PRIMARY } from "@/lib/talent-brand";
import { TECH_ACCENT, TECH_PRIMARY } from "@/lib/technology-brand";
import { MARKETING_MENU_CATEGORIES } from "@/lib/marketing-menu";
import { TECHNOLOGY_MENU_CATEGORIES } from "@/lib/technology-menu";

const MARKETING_CRIMSON = "#730031";

// ── Logo ───────────────────────────────────────────────────────────────────────
function FyerxLogo() {
  return (
    <Image
      src="/logo.webp"
      alt="FyerX"
      width={HEADER_LOGO_WIDTH}
      height={HEADER_LOGO_HEIGHT}
      className={HEADER_LOGO_CLASS}
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

// ── Dropdown row icons — bold Monday-style glyphs (shared component) ───────────
type IconName = MenuIconName;

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
  { avatar: "/avatar/6.webp", label: "PMO", subtitle: "Projects & delivery", href: "#" },
  { avatar: "/avatar/5.webp", label: "Marketing", subtitle: "Campaigns & creative", href: "#" },
  { avatar: "/avatar/4.webp", label: "Operations", subtitle: "Processes & efficiency", href: "#" },
  { avatar: "/avatar/3.webp", label: "IT", subtitle: "Tickets & support", href: "#" },
  { avatar: "/avatar/2.webp", label: "HR", subtitle: "Hiring & onboarding", href: "#" },
  { avatar: "/avatar/1.webp", label: "Sales", subtitle: "Pipeline & deals", href: "#" },
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
  { label: "Careers", href: "https://fyerx.zohorecruit.in/jobs/Careers", external: true },
  { label: "Blog", href: "/blog" },
];

type MenuCategory = {
  label: string;
  subtitle?: string;
  avatar: string;
  icon?: IconName;
  tint?: string;
  iconColor?: string;
  items: { label: string; href: string; icon: IconName }[];
};

const marketingCategories: MenuCategory[] = MARKETING_MENU_CATEGORIES;
const technologyCategories: MenuCategory[] = TECHNOLOGY_MENU_CATEGORIES;

const talentCategories: MenuCategory[] = [
  {
    label: "Contract Staffing",
    subtitle: "Flexibility & scale",
    avatar: "/avatar/1.webp",
    icon: "personPlus",
    tint: "#E8F8EF",
    iconColor: "#00CA72",
    items: [
      { label: "IT & Tech Contract Roles", icon: "gear", href: "#" },
      { label: "Project-Based Staffing", icon: "clipboardCheck", href: "#" },
      { label: "Volume/Bulk Staffing", icon: "personPlus", href: "#" },
      { label: "Cross-Border Contract Staffing (US)", icon: "globe", href: "#" },
    ],
  },
  {
    label: "RPO",
    subtitle: "Sourcing & management",
    avatar: "/avatar/2.webp",
    icon: "funnel",
    tint: "#F3EEFF",
    iconColor: "#6161FF",
    items: [
      { label: "End-to-End Recruitment Outsourcing", icon: "funnel", href: "#" },
      { label: "On-Demand RPO", icon: "sparkle", href: "#" },
      { label: "Enterprise RPO", icon: "database", href: "#" },
    ],
  },
  {
    label: "Permanent Hiring & Executive Search",
    subtitle: "Placement & leadership",
    avatar: "/avatar/3.webp",
    icon: "search",
    tint: "#E8F4FF",
    iconColor: "#579BFC",
    items: [
      { label: "Permanent Hiring", icon: "personPlus", href: "#" },
      { label: "Executive Search", icon: "search", href: "#" },
    ],
  },
  {
    label: "IT & Tech Talent",
    subtitle: "Tech & engineering",
    avatar: "/avatar/4.webp",
    icon: "gear",
    tint: "#FFF6E6",
    iconColor: "#FDAB3D",
    items: [
      { label: "Software Development Roles", icon: "doc", href: "#" },
      { label: "ServiceNow & Enterprise Platform Talent", icon: "plug", href: "#" },
      { label: "Data & AI Talent", icon: "sparkle", href: "#" },
      { label: "DevOps & Cloud Talent", icon: "database", href: "#" },
    ],
  },
  {
    label: "HR Advisory",
    subtitle: "Strategy & compliance",
    avatar: "/avatar/5.webp",
    icon: "clipboardCheck",
    tint: "#E8F8EF",
    iconColor: "#00CA72",
    items: [
      { label: "Hiring Assessments", icon: "clipboardCheck", href: "#" },
      { label: "Background Verification", icon: "tag", href: "#" },
      { label: "Compensation Benchmarking", icon: "chart", href: "#" },
    ],
  },
  {
    label: "Global Staffing",
    subtitle: "Reach & expansion",
    avatar: "/avatar/6.webp",
    icon: "globe",
    tint: "#E8F4FF",
    iconColor: "#0086C0",
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
function CategoryMenu({
  categories,
  onClose,
  heading,
  headingSubtitle,
  headingIcon = "megaphone",
  platformStyle = false,
  hoverColor = "#5c4fe0",
  visitHomeHref,
  visitHomeLabel = "Visit Homepage",
  visitHomeColor = "#86013A",
  visitHomeTextColor = "#ffffff",
  activeItemBg = "#fce8ef",
}: {
  categories: MenuCategory[];
  onClose: () => void;
  heading?: string;
  headingSubtitle?: string;
  headingIcon?: IconName;
  platformStyle?: boolean;
  hoverColor?: string;
  visitHomeHref?: string;
  visitHomeLabel?: string;
  visitHomeColor?: string;
  visitHomeTextColor?: string;
  activeItemBg?: string;
}) {
  const [active, setActive] = useState(0);
  const category = categories[active];

  if (platformStyle) {
    return (
      <div className="animate-dropdown rounded-b-[16px] border border-[#e6e9ef] bg-white shadow-[0_16px_36px_rgba(20,20,43,0.12),0_2px_8px_rgba(20,20,43,0.06)]">
        <div className="flex min-w-0 px-6 pt-7 pb-8 lg:px-10">

          {/* Left — 2-col grid; text stays fully visible and wraps inside its own cell */}
          <div
            className="min-w-0 w-[55%] shrink-0 pr-5 lg:w-[54%] lg:pr-8"
            style={{ ["--menu-hover" as string]: hoverColor }}
          >
            {heading && (
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-2.5 text-[#9a9ea8]">
                  <MenuGlyphBold name={headingIcon} color="#8b8fa3" size={18} />
                  <span className="mb-0 text-[13px] font-normal uppercase leading-[1.5] tracking-[0.06em] text-[#7c7b7b]">
                    {heading}
                  </span>
                </div>
                {visitHomeHref && (
                  <PrimaryCtaLink
                    href={visitHomeHref}
                    onClick={onClose}
                    color={visitHomeColor}
                    textColor={visitHomeTextColor}
                    variant="menu"
                    className="shrink-0"
                  >
                    {visitHomeLabel}
                  </PrimaryCtaLink>
                )}
              </div>
            )}
            {headingSubtitle && (
              <p className="mb-5 mt-3 text-[13px] leading-[1.5] text-[#676879]">{headingSubtitle}</p>
            )}
            <div className="grid grid-cols-2 items-start gap-x-4 gap-y-3 lg:gap-x-6">
              {categories.map((cat, i) => (
                <button
                  key={cat.label}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className={`flex w-full min-w-0 cursor-pointer items-start gap-2.5 rounded-[12px] px-2.5 py-2.5 text-left transition-colors duration-100 lg:gap-3 lg:px-3 ${
                    active === i ? "" : "hover:bg-[#f5f6f8]"
                  }`}
                  style={active === i ? { backgroundColor: activeItemBg } : undefined}
                >
                  <CategoryThumb cat={cat} />
                  <span className="flex min-w-0 flex-1 flex-col gap-0.5 text-left">
                    <span
                      className="text-[13px] font-medium leading-snug hyphens-none [overflow-wrap:anywhere] lg:text-[14px]"
                      style={{ color: active === i ? hoverColor : "#323338" }}
                    >
                      {cat.label}
                    </span>
                    {cat.subtitle && (
                      <span className="text-[11px] font-normal leading-snug text-[#676879] [overflow-wrap:anywhere] lg:text-[12px]">
                        {cat.subtitle}
                      </span>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mx-2 w-px shrink-0 self-stretch bg-[#eef0f4] lg:mx-3" />

          {/* Right — Service Details */}
          <div className="min-w-0 flex-1 pl-5 lg:pl-8" style={{ ["--menu-hover" as string]: hoverColor }}>
            <p className="mb-0 text-[13px] font-normal uppercase leading-[1.5] tracking-[0.06em] text-[#7c7b7b]">
              Service Details
            </p>
            <p className="mb-5 mt-3 text-[13px] leading-snug text-[#676879] [overflow-wrap:anywhere]">
              {category.label}
            </p>
            <ul className="grid grid-cols-1 content-start items-start gap-x-5 gap-y-2 xl:grid-cols-2">
              {category.items.map((item) => (
                <li key={item.label} className="min-w-0">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex min-w-0 items-start gap-2.5 py-1.5 text-[14px] font-normal leading-snug text-[#323338] transition-colors duration-100 hover:text-[var(--menu-hover)]"
                  >
                    <span className="mt-0.5 shrink-0">
                      <MenuDetailIcon name={item.icon} />
                    </span>
                    <span className="min-w-0 [overflow-wrap:anywhere]">{item.label}</span>
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
        <div className="border-b border-[#eef0f4] px-8 pt-4 pb-[3px]">
          <div className="flex items-center gap-2.5 text-[#9a9ea8]">
            <MenuGlyphBold name={headingIcon} color="#8b8fa3" size={18} />
            <span className="text-[19px] font-normal uppercase tracking-[0.1em]"
              style={{ color: "rgb(124, 123, 123)" }}>
              {heading}
            </span>
          </div>
          {headingSubtitle && (
            <p className="mt-2 text-[13px] font-normal text-[#323338]">{headingSubtitle}</p>
          )}
        </div>
      )}
      <div className="flex px-8 pt-4 pb-5">

        {/* Left — main headings, 2 per row */}
        <div className="grid w-[520px] shrink-0 grid-cols-2 content-start gap-x-4 gap-y-1 pr-6">
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`flex w-full cursor-pointer items-center gap-2.5 rounded-[8px] px-2 py-1 text-left transition-colors duration-100 ${
                active === i ? "" : "hover:bg-[#f5f6f8]"
              }`}
              style={active === i ? { backgroundColor: activeItemBg } : undefined}
            >
              <CategoryThumb cat={cat} />
              <span className="flex flex-col leading-tight">
                <span className={`text-[14px] font-medium whitespace-nowrap transition-colors duration-100 group-hover:text-[#5c4fe0]
                  ${active === i ? "text-[#5c4fe0]" : "text-[#323338]"}`}>
                  {cat.label}
                </span>
                {cat.subtitle && (
                  <span className="text-[12px] font-normal whitespace-nowrap text-[#8b8fa3]">
                    {cat.subtitle}
                  </span>
                )}
              </span>
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="mx-2 w-px bg-[#eef0f4]" />

        {/* Right — sub-headings for the active main heading */}
        <div className="min-w-0 flex-1 pl-6">
          <p className="mb-4 text-[14px] font-normal text-[#8b8fa3]">{category.label}</p>
          <ul className="flex flex-col gap-0.5">
            {category.items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href} onClick={onClose}
                  className="flex items-center gap-2 py-0.5 text-[14px] font-medium text-[#323338]
                             transition-colors duration-100 hover:text-[#5c4fe0]"
                >
                  <MenuDetailIcon name={item.icon} />
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
  const pathname = usePathname();
  const [openMenu, setOpenMenu]   = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<"Marketing" | "Talent" | "Technology" | null>(null);
  const [scrolled, setScrolled]   = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  const navLinkClass = (href: string, activeBg = "bg-[#fce8ef] text-[#730031]") =>
    `flex items-center justify-center text-center gap-2 px-4 py-2 rounded-[8px]
     cursor-pointer text-[0.875rem] font-light leading-[100%] transition-colors duration-100 whitespace-nowrap
     ${isActive(href) ? activeBg : "bg-transparent text-[rgb(83,87,104)] hover:bg-[#f5f6f8]"}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const open  = (label: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setOpenMenu(label); };
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setOpenMenu(null), 200); };
  const cancelClose   = () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  const closeAll      = () => { setOpenMenu(null); setMobileOpen(false); setMobileExpanded(null); };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-150 ${
        scrolled ? "shadow-[0_1px_0_#e6e9ef,0_2px_16px_rgba(20,20,43,0.07)]" : "border-b border-[#e6e9ef]"
      }`}
      style={{ fontFamily: "Poppins, Arial, sans-serif" }}
      onMouseLeave={scheduleClose}
    >
      {/* ─── Header bar ────────────────────────────────────────────────── */}
      <div className="relative mx-auto w-full max-w-[1400px]">
        <div className="flex h-[56px] w-full items-center px-4 sm:h-[60px] sm:px-6 lg:px-16">

          {/* Logo */}
          <Link href="/" onClick={closeAll} className="flex shrink-0 items-center">
            <FyerxLogo />
          </Link>

          {/* Nav + CTAs */}
          <div className="ml-8 flex min-w-0 flex-1 items-center sm:ml-10 lg:ml-12">

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">

              {/* Technology — column mega-menu */}
              <div onMouseEnter={() => open("Technology")}>
                <Link href="/technology" onClick={closeAll} className={`${navLinkClass("/technology", "bg-[#20287A1F] text-[#20287A]")} gap-2
                  ${openMenu === "Technology" && !isActive("/technology") ? "bg-[#20287A1F] text-[#20287A]" : ""}`}>
                  Technology <ChevronDown open={openMenu === "Technology"} />
                </Link>
              </div>

              {/* Talent — column mega-menu */}
              <div onMouseEnter={() => open("Talent")}>
                <Link href="/talent" onClick={closeAll} className={`${navLinkClass("/talent", "bg-[#9EEBAA]/25 text-[#11551C]")} gap-2
                  ${openMenu === "Talent" && !isActive("/talent") ? "bg-[#9EEBAA]/25 text-[#11551C]" : ""}`}>
                  Talent <ChevronDown open={openMenu === "Talent"} />
                </Link>
              </div>

              {/* Marketing — icon-list mega-menu */}
              <div onMouseEnter={() => open("Marketing")}>
                <Link href="/marketing" onClick={closeAll} className={`${navLinkClass("/marketing")} gap-2
                  ${openMenu === "Marketing" && !isActive("/marketing") ? "bg-[#fce8ef] text-[#730031]" : ""}`}>
                  Marketing <ChevronDown open={openMenu === "Marketing"} />
                </Link>
              </div>

              {/* Plain links */}
              {simpleLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeAll}
                  onMouseEnter={() => setOpenMenu(null)}
                  className={navLinkClass(item.href)}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA — Get Started */}
            <div className="ml-auto hidden shrink-0 items-center md:flex">
              <PrimaryCtaLink
                href="/contact"
                onClick={closeAll}
                onMouseEnter={() => setOpenMenu(null)}
                variant="nav"
              >
                Get Started
              </PrimaryCtaLink>
            </div>

            {/* Mobile hamburger */}
            <button className="ml-auto rounded-[6px] p-1.5 text-[#323338] hover:bg-[#f5f6f8] md:hidden"
              onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
              {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>

        {/* Dropdown — full header width like Monday */}
        {openMenu === "Marketing" && (
          <div
            className="absolute top-full right-4 left-4 z-50 sm:right-6 sm:left-6 lg:right-16 lg:left-16"
            onMouseEnter={cancelClose}
          >
            <CategoryMenu categories={marketingCategories} onClose={closeAll}
              heading="MARKETING SERVICES"
              headingSubtitle="An overview of what we offer"
              headingIcon="megaphone"
              platformStyle
              hoverColor={MARKETING_CRIMSON}
              activeItemBg="#fce8ef"
              visitHomeHref="/marketing"
              visitHomeLabel="Visit Homepage"
              visitHomeColor="#FFC900"
              visitHomeTextColor="#111111" />
          </div>
        )}
        {openMenu === "Talent" && (
          <div
            className="absolute top-full right-4 left-4 z-50 sm:right-6 sm:left-6 lg:right-16 lg:left-16"
            onMouseEnter={cancelClose}
          >
            <CategoryMenu categories={talentCategories} onClose={closeAll}
              heading="TALENT SOLUTIONS"
              headingSubtitle="An overview of what we offer"
              headingIcon="personPlus"
              platformStyle
              hoverColor={TALENT_PRIMARY}
              activeItemBg="rgba(158, 235, 170, 0.25)"
              visitHomeHref="/talent"
              visitHomeLabel="Visit Homepage"
              visitHomeColor={TALENT_PRIMARY}
              visitHomeTextColor={TALENT_ACCENT} />
          </div>
        )}
        {openMenu === "Technology" && (
          <div
            className="absolute top-full right-4 left-4 z-50 sm:right-6 sm:left-6 lg:right-16 lg:left-16"
            onMouseEnter={cancelClose}
          >
            <CategoryMenu categories={technologyCategories} onClose={closeAll}
              heading="TECHNOLOGY SERVICES"
              headingSubtitle="An overview of what we offer"
              headingIcon="gear"
              platformStyle
              hoverColor={TECH_PRIMARY}
              activeItemBg="rgba(32, 40, 122, 0.12)"
              visitHomeHref="/technology"
              visitHomeLabel="Visit Homepage"
              visitHomeColor={TECH_PRIMARY}
              visitHomeTextColor={TECH_ACCENT} />
          </div>
        )}
      </div>

      {/* ─── Mobile drawer ─────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="md:hidden max-h-[calc(100dvh-60px)] overflow-y-auto border-t border-[#e6e9ef] bg-white">
          <div className="flex flex-col px-4 py-4 sm:px-6 lg:px-16">
            <MobileMegaMenuSection
              label="Technology"
              expanded={mobileExpanded === "Technology"}
              onToggle={() =>
                setMobileExpanded((current) => (current === "Technology" ? null : "Technology"))
              }
              activeClass="bg-[#20287A1F] text-[#20287A]"
              activeItemBg="rgba(32, 40, 122, 0.12)"
              categories={technologyCategories}
              hoverColor={TECH_PRIMARY}
              visitHomeHref="/technology"
              visitHomeLabel="Visit Homepage"
              visitHomeColor={TECH_PRIMARY}
              visitHomeTextColor={TECH_ACCENT}
              onClose={closeAll}
            />

            <MobileMegaMenuSection
              label="Talent"
              expanded={mobileExpanded === "Talent"}
              onToggle={() =>
                setMobileExpanded((current) => (current === "Talent" ? null : "Talent"))
              }
              activeClass="bg-[#9EEBAA]/25 text-[#11551C]"
              activeItemBg="rgba(158, 235, 170, 0.25)"
              categories={talentCategories}
              hoverColor={TALENT_PRIMARY}
              visitHomeHref="/talent"
              visitHomeLabel="Visit Homepage"
              visitHomeColor={TALENT_PRIMARY}
              visitHomeTextColor={TALENT_ACCENT}
              onClose={closeAll}
            />

            <MobileMegaMenuSection
              label="Marketing"
              expanded={mobileExpanded === "Marketing"}
              onToggle={() =>
                setMobileExpanded((current) => (current === "Marketing" ? null : "Marketing"))
              }
              activeClass="bg-[#fce8ef] text-[#730031]"
              activeItemBg="#fce8ef"
              categories={marketingCategories}
              hoverColor={MARKETING_CRIMSON}
              visitHomeHref="/marketing"
              visitHomeLabel="Visit Homepage"
              visitHomeColor="#FFC900"
              visitHomeTextColor="#111111"
              onClose={closeAll}
            />

            {simpleLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeAll}
                className={`${navLinkClass(item.href)} border-b border-[#e6e9ef] px-3 py-[10px] justify-start`}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-3 pt-3">
              <PrimaryCtaLink href="/contact" onClick={closeAll} variant="nav">
                Get Started
              </PrimaryCtaLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
