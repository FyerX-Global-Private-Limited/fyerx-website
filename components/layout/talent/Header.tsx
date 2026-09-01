"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { MenuDetailIcon } from "@/components/ui/MenuGlyph";
import { TALENT_ACCENT, TALENT_LOGO, TALENT_PRIMARY } from "@/lib/talent-brand";
import {
  CategoryThumb,
  allowsMenuLabelWrap,
  menuLabelNowrapClass,
  MobileMegaMenuSection,
  type MobileMenuCategory,
} from "@/components/layout/shared/MobileMegaMenuSection";
import { VisitHomeNavButton } from "@/components/layout/shared/VisitHomeNavButton";

// ── Icons ──────────────────────────────────────────────────────────────────────
function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

type IconName =
  | "clipboardCheck" | "gear" | "personPlus" | "funnel"
  | "sparkle" | "database" | "search" | "doc" | "plug" | "tag" | "chart" | "globe";

function Glyph({ name }: { name: IconName }) {
  const c = {
    width: 18, height: 18, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: 1.6,
    strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "clipboardCheck":
      return <svg {...c}><rect x="5.5" y="4" width="13" height="17" rx="2" /><rect x="9" y="2.5" width="6" height="3" rx="1" /><polyline points="9 12.5 11 14.5 15 10.5" /></svg>;
    case "gear":
      return <svg {...c}><circle cx="12" cy="12" r="3" /><path d="M12 3v2.4M12 18.6V21M21 12h-2.4M5.4 12H3M18.4 5.6l-1.7 1.7M7.3 16.7l-1.7 1.7M18.4 18.4l-1.7-1.7M7.3 7.3 5.6 5.6" /></svg>;
    case "personPlus":
      return <svg {...c}><circle cx="10" cy="8" r="3.5" /><path d="M3.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" /><line x1="18" y1="7" x2="18" y2="13" /><line x1="15" y1="10" x2="21" y2="10" /></svg>;
    case "funnel":
      return <svg {...c}><polygon points="4 4 20 4 14 12 14 19 10 21 10 12 4 4" /></svg>;
    case "sparkle":
      return <svg {...c}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></svg>;
    case "database":
      return <svg {...c}><ellipse cx="12" cy="5.5" rx="7" ry="2.5" /><path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13" /><path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" /></svg>;
    case "search":
      return <svg {...c}><circle cx="10.8" cy="10.8" r="6.8" /><line x1="15.8" y1="15.8" x2="21" y2="21" /></svg>;
    case "doc":
      return <svg {...c}><rect x="5.5" y="3" width="13" height="18" rx="1.8" /><line x1="8.5" y1="8" x2="15.5" y2="8" /><line x1="8.5" y1="12" x2="15.5" y2="12" /><line x1="8.5" y1="16" x2="13" y2="16" /></svg>;
    case "plug":
      return <svg {...c}><path d="M9 2.5v4M15 2.5v4M6 6.5h12v4a6 6 0 0 1-12 0z" /><path d="M9 16.5v5M15 16.5v5" /></svg>;
    case "tag":
      return <svg {...c}><path d="M11.7 3.5H5.8a2.3 2.3 0 0 0-2.3 2.3v5.9l10.8 10.8 8.2-8.2L11.7 3.5z" /><circle cx="8.3" cy="8.3" r="1.3" fill="currentColor" stroke="none" /></svg>;
    case "chart":
      return <svg {...c}><line x1="5" y1="19" x2="5" y2="12" /><line x1="12" y1="19" x2="12" y2="6" /><line x1="19" y1="19" x2="19" y2="15" /></svg>;
    case "globe":
      return <svg {...c}><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><line x1="3" y1="12" x2="21" y2="12" /></svg>;
  }
}

// ── Data ───────────────────────────────────────────────────────────────────────
const talentCategories: MobileMenuCategory[] = [
  {
    label: "Contract Staffing",
    subtitle: "Flexibility & scale",
    avatar: "/avatar/1.avif",
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
    avatar: "/avatar/2.avif",
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
    avatar: "/avatar/3.avif",
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
    avatar: "/avatar/4.avif",
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
    avatar: "/avatar/5.avif",
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
    avatar: "/avatar/6.avif",
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

const simpleLinks = [
  { label: "Case Studies", href: "/talent/case-studies" },
  { label: "Careers", href: "https://fyerx.zohorecruit.in/jobs/Careers", external: true },
  { label: "Blog", href: "/blog" },
];

const TALENT_MENU_HOVER = TALENT_PRIMARY;
const TALENT_ACTIVE_BG = "rgba(158, 235, 170, 0.25)";

// ── Talent mega-menu — left = clickable categories (avatar + label), 2 per
// row; right = sub-items for whichever category is active.
function TalentMenu({ onClose }: { onClose: () => void }) {
  const [active, setActive] = useState(0);
  const category = talentCategories[active];

  return (
    <div className="animate-dropdown rounded-b-[16px] border border-[#e6e9ef] bg-white shadow-[0_16px_36px_rgba(20,20,43,0.12),0_2px_8px_rgba(20,20,43,0.06)]">
      <div className="flex px-10 pt-7 pb-8">
        {/* Left — heading + main headings, 2 per row */}
        <div className="w-[52%] min-w-[480px] shrink-0 pr-8" style={{ ["--menu-hover" as string]: TALENT_MENU_HOVER }}>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-[#9a9ea8]">
              <Glyph name="personPlus" />
              <span className="mb-0 text-[13px] font-normal uppercase leading-[1.5] tracking-[0.06em] text-[#7c7b7b]">
                Talent Solutions
              </span>
            </div>
            <PrimaryCtaLink
              href="/talent"
              onClick={onClose}
              color={TALENT_PRIMARY}
              textColor={TALENT_ACCENT}
              variant="menu"
            >
              Visit Homepage
            </PrimaryCtaLink>
          </div>
          <p className="mb-5 mt-3 text-[13px] leading-[1.5] text-[#676879]">
            An overview of what we offer
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2.5">
            {talentCategories.map((cat, i) => (
              <button
                key={cat.label}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`flex w-full cursor-pointer gap-3 rounded-[12px] px-3 py-2.5 text-left transition-colors duration-100 ${
                  allowsMenuLabelWrap(cat.label) ? "items-start" : "items-center"
                } ${active === i ? "" : "hover:bg-[#f5f6f8]"}`}
                style={active === i ? { backgroundColor: TALENT_ACTIVE_BG } : undefined}
              >
                <CategoryThumb cat={cat} />
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span
                    className={`${menuLabelNowrapClass(cat.label)} text-[14px] font-medium leading-[1.2] transition-colors duration-100`}
                    style={{ color: active === i ? TALENT_MENU_HOVER : "#323338" }}
                  >
                    {cat.label}
                  </span>
                  {cat.subtitle && (
                    <span className="whitespace-nowrap text-[12px] font-normal leading-[1.35] text-[#676879]">
                      {cat.subtitle}
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mx-2 w-px self-stretch bg-[#eef0f4]" />

        {/* Right — Service Details in Monday-style columns */}
        <div className="min-w-0 flex-1 pl-8" style={{ ["--menu-hover" as string]: TALENT_MENU_HOVER }}>
          <p className="mb-0 text-[13px] font-normal uppercase leading-[1.5] tracking-[0.06em] text-[#7c7b7b]">
            Service Details
          </p>
          <p className={`mb-5 mt-3 text-[13px] leading-[1.5] text-[#676879] ${menuLabelNowrapClass(category.label)}`}>
            {category.label}
          </p>
          <ul className="grid grid-cols-2 content-start gap-x-8 gap-y-2">
            {category.items.map((item) => (
              <li key={item.label} className="min-w-0">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`flex gap-2.5 py-1.5 text-[14px] font-normal leading-[1.35] text-[#323338] transition-colors duration-100 hover:text-[var(--menu-hover)] ${
                    allowsMenuLabelWrap(item.label) ? "items-start" : "items-center whitespace-nowrap"
                  }`}
                >
                  <span className="shrink-0 text-[#8b8fa3]">
                    <MenuDetailIcon name={item.icon} />
                  </span>
                  <span className={menuLabelNowrapClass(item.label)}>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function TalentHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTalentExpanded, setMobileTalentExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (href: string) =>
    href === "/talent"
      ? pathname === "/talent"
      : pathname === href || pathname.startsWith(`${href}/`);

  const navLinkClass = (href: string) =>
    `px-4 py-2 rounded-[8px] text-[0.875rem] font-light transition-colors duration-100 whitespace-nowrap ${
      isActive(href) ? "bg-[#9EEBAA]/25 text-[#11551C]" : "text-[rgb(83,87,104)] hover:bg-[#f5f6f8]"
    }`;

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMenuOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMenuOpen(false), 200);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const closeAll = () => {
    setMenuOpen(false);
    setMobileOpen(false);
    setMobileTalentExpanded(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-150 ${
        scrolled ? "shadow-[0_1px_0_#e6e9ef,0_2px_16px_rgba(20,20,43,0.07)]" : "border-b border-[#e6e9ef]"
      }`}
      style={{ fontFamily: "Poppins, Arial, sans-serif" }}
      onMouseLeave={scheduleClose}
    >
      <div className="relative mx-auto w-full max-w-[1400px]">
        <div className="flex h-[56px] w-full items-center px-4 sm:h-[60px] sm:px-6 lg:px-16">
          <Link href="/talent" className="flex shrink-0 items-center" onClick={closeAll}>
            <Image
              src={TALENT_LOGO}
              alt="FyerX Talent"
              width={140}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          <div className="ml-8 flex min-w-0 flex-1 items-center sm:ml-10 lg:ml-12">
            <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
              <div onMouseEnter={openMenu}>
                <button
                  type="button"
                  aria-expanded={menuOpen}
                  className={`flex items-center gap-2 px-4 py-2 rounded-[8px] cursor-pointer text-[0.875rem] font-light transition-colors duration-100 whitespace-nowrap ${
                    menuOpen ? "bg-[#9EEBAA]/25 text-[#11551C]" : "text-[rgb(83,87,104)] hover:bg-[#f5f6f8]"
                  }`}
                >
                  Services <ChevronDown open={menuOpen} />
                </button>
              </div>

              {simpleLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeAll}
                  onMouseEnter={() => setMenuOpen(false)}
                  className={navLinkClass(item.href)}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="ml-auto hidden shrink-0 items-center gap-2.5 md:flex">
              <VisitHomeNavButton
                color={TALENT_PRIMARY}
                hoverTextColor="#ffffff"
                onClick={closeAll}
                onMouseEnter={() => setMenuOpen(false)}
              />
              <PrimaryCtaLink
                href="/contact#talent"
                onClick={closeAll}
                onMouseEnter={() => setMenuOpen(false)}
                color={TALENT_PRIMARY}
                textColor="#ffffff"
                variant="nav"
              >
                Get Started
              </PrimaryCtaLink>
            </div>

            <button
              className="ml-auto rounded-[6px] p-1.5 text-[#323338] hover:bg-[#f5f6f8] md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="absolute top-full right-4 left-4 z-50 sm:right-6 sm:left-6 lg:right-16 lg:left-16"
            onMouseEnter={cancelClose}
          >
            <TalentMenu onClose={closeAll} />
          </div>
        )}
      </div>

      {mobileOpen && (
        <div className="md:hidden max-h-[calc(100dvh-60px)] overflow-y-auto border-t border-[#e6e9ef] bg-white">
          <div className="flex flex-col px-4 py-4 sm:px-6 lg:px-16">
            <MobileMegaMenuSection
              label="Services"
              expanded={mobileTalentExpanded}
              onToggle={() => setMobileTalentExpanded((current) => !current)}
              activeClass="bg-[#9EEBAA]/25 text-[#11551C]"
              activeItemBg={TALENT_ACTIVE_BG}
              categories={talentCategories}
              hoverColor={TALENT_MENU_HOVER}
              visitHomeHref="/talent"
              visitHomeLabel="Visit Homepage"
              visitHomeColor={TALENT_PRIMARY}
              visitHomeTextColor={TALENT_ACCENT}
              onClose={closeAll}
            />

            {simpleLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeAll}
                className={`${navLinkClass(item.href)} border-b border-[#e6e9ef] px-3 py-[10px]`}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-3 flex w-full flex-col items-stretch gap-2.5 pt-3">
              <VisitHomeNavButton
                color={TALENT_PRIMARY}
                hoverTextColor="#ffffff"
                onClick={closeAll}
                className="w-full justify-center"
              />
              <PrimaryCtaLink
                href="/contact#talent"
                onClick={closeAll}
                color={TALENT_PRIMARY}
                textColor="#ffffff"
                variant="nav"
                className="!w-full justify-center"
              >
                Get Started
              </PrimaryCtaLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
