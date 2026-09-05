"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { MenuDetailIcon, MenuGlyphBold } from "@/components/ui/MenuGlyph";
import {
  CategoryThumb,
  MobileMegaMenuSection,
} from "@/components/layout/shared/MobileMegaMenuSection";
import { VisitHomeNavButton } from "@/components/layout/shared/VisitHomeNavButton";
import {
  HEADER_LOGO_CLASS,
  HEADER_LOGO_HEIGHT,
  HEADER_LOGO_WIDTH,
} from "@/lib/header-logo";
import { MARKETING_MENU_CATEGORIES } from "@/lib/marketing-menu";

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

const servicesCategories = MARKETING_MENU_CATEGORIES;

const simpleLinks = [
  { label: "Our Work", href: "/marketing/case-studies" },
  { label: "Careers", href: "https://fyerx.zohorecruit.in/jobs/Careers", external: true },
  { label: "Blog", href: "/blog" },
];

const MARKETING_CRIMSON = "#730031";
const MARKETING_ACTIVE_BG = "#fce8ef";

// ── Services mega-menu — left = clickable categories (avatar + label), 2 per
// row; right = sub-items for whichever category is active.
function ServicesMenu({ onClose }: { onClose: () => void }) {
  const [active, setActive] = useState(0);
  const category = servicesCategories[active];

  return (
    <div className="animate-dropdown rounded-b-[16px] border border-[#e6e9ef] bg-white shadow-[0_16px_36px_rgba(20,20,43,0.12),0_2px_8px_rgba(20,20,43,0.06)]">
      <div className="flex px-10 pt-7 pb-8">
        {/* Left — heading + main headings, 2 per row */}
        <div className="w-[52%] min-w-0 shrink-0 pr-6 lg:pr-8" style={{ ["--menu-hover" as string]: MARKETING_CRIMSON }}>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-[#9a9ea8]">
              <MenuGlyphBold name="megaphone" color="#8b8fa3" size={18} />
              <span className="mb-0 text-[13px] font-normal uppercase leading-[1.5] tracking-[0.06em] text-[#7c7b7b]">
                MARKETING SERVICES
              </span>
            </div>
            <PrimaryCtaLink
              href="/marketing"
              onClick={onClose}
              color="#FFC900"
              textColor="#111111"
              variant="menu"
              className="text-black!"
            >
              Visit Homepage
            </PrimaryCtaLink>
          </div>
          <p className="mb-5 mt-3 text-[13px] leading-[1.5] text-[#676879]">
            An overview of what we offer
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2.5">
            {servicesCategories.map((cat, i) => (
              <button
                key={cat.label}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`flex w-full cursor-pointer items-center gap-3 rounded-[12px] px-3 py-2.5 text-left transition-colors duration-100 ${
                  active === i ? "" : "hover:bg-[#f5f6f8]"
                }`}
                style={active === i ? { backgroundColor: MARKETING_ACTIVE_BG } : undefined}
              >
                <CategoryThumb cat={cat} />
                <span className="flex flex-col gap-0.5">
                  <span
                    className="text-[14px] font-medium leading-[1.2] break-words transition-colors duration-100"
                    style={{ color: active === i ? MARKETING_CRIMSON : "#323338" }}
                  >
                    {cat.label}
                  </span>
                  {cat.subtitle && (
                    <span className="text-[12px] font-normal leading-[1.35] text-[#676879] break-words">
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
        <div className="min-w-0 flex-1 pl-8" style={{ ["--menu-hover" as string]: MARKETING_CRIMSON }}>
          <p className="mb-0 text-[13px] font-normal uppercase leading-[1.5] tracking-[0.06em] text-[#7c7b7b]">
            Service Details
          </p>
          <p className="mb-5 mt-3 text-[13px] leading-[1.5] text-[#676879] break-words">
            {category.label}
          </p>
          <ul className="grid grid-cols-1 content-start gap-x-8 gap-y-2 xl:grid-cols-2">
            {category.items.map((item) => (
              <li key={item.label} className="min-w-0">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-start gap-2.5 py-1.5 text-[14px] font-normal leading-[1.35] text-[#323338] transition-colors duration-100 hover:text-[var(--menu-hover)]"
                >
                  <span className="mt-0.5 shrink-0"><MenuDetailIcon name={item.icon} /></span>
                  <span className="min-w-0 break-words">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function MarketingHeader() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (href: string) =>
    href === "/marketing"
      ? pathname === "/marketing"
      : pathname === href || pathname.startsWith(`${href}/`);

  const navLinkClass = (href: string, activeBg = "bg-[#fce8ef] text-[#730031]") =>
    `px-4 py-2 rounded-[8px] text-[0.875rem] font-light transition-colors duration-100 whitespace-nowrap ${
      isActive(href) ? activeBg : "text-[rgb(83,87,104)] hover:bg-[#f5f6f8]"
    }`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 200);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const closeAll = () => {
    setServicesOpen(false);
    setMobileOpen(false);
    setMobileServicesExpanded(false);
  };

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
          <Link href="/marketing" className="flex shrink-0 items-center" onClick={closeAll}>
            <Image
              src="/images/marketing/marketinglogo.webp"
              alt="FyerX Marketing"
              width={HEADER_LOGO_WIDTH}
              height={HEADER_LOGO_HEIGHT}
              className={HEADER_LOGO_CLASS}
              priority
            />
          </Link>

          <div className="ml-8 flex min-w-0 flex-1 items-center sm:ml-10 lg:ml-12">
            <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
              <div onMouseEnter={openServices}>
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-[8px] cursor-pointer text-[0.875rem] font-light transition-colors duration-100 whitespace-nowrap ${
                    servicesOpen ? "bg-[#fce8ef] text-[#730031]" : "text-[rgb(83,87,104)] hover:bg-[#f5f6f8]"
                  }`}
                >
                  Services <ChevronDown open={servicesOpen} />
                </button>
              </div>

              {simpleLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeAll}
                  onMouseEnter={() => setServicesOpen(false)}
                  className={navLinkClass(item.href)}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="ml-auto hidden shrink-0 items-center gap-2.5 md:flex">
              <VisitHomeNavButton
                color="#FFC900"
                textColor="#111111"
                hoverTextColor="#111111"
                onClick={closeAll}
                onMouseEnter={() => setServicesOpen(false)}
              />
              <PrimaryCtaLink
                href="/contact#marketing"
                onClick={closeAll}
                onMouseEnter={() => setServicesOpen(false)}
                className="text-black!"
                color="#FFC900"
                textColor="#111111"
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

        {servicesOpen && (
          <div
            className="absolute top-full right-4 left-4 z-50 sm:right-6 sm:left-6 lg:right-16 lg:left-16"
            onMouseEnter={cancelClose}
          >
            <ServicesMenu onClose={closeAll} />
          </div>
        )}
      </div>

      {mobileOpen && (
        <div className="md:hidden max-h-[calc(100dvh-60px)] overflow-y-auto border-t border-[#e6e9ef] bg-white">
          <div className="flex flex-col px-4 py-4 sm:px-6 lg:px-16">
            <MobileMegaMenuSection
              label="Services"
              expanded={mobileServicesExpanded}
              onToggle={() => setMobileServicesExpanded((current) => !current)}
              activeClass="bg-[#fce8ef] text-[#730031]"
              activeItemBg={MARKETING_ACTIVE_BG}
              categories={servicesCategories}
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
                className={`${navLinkClass(item.href)} border-b border-[#e6e9ef] px-3 py-[10px]`}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-3 flex w-full flex-col items-stretch gap-2.5 pt-3">
              <VisitHomeNavButton
                color="#FFC900"
                textColor="#111111"
                hoverTextColor="#111111"
                onClick={closeAll}
                className="w-full justify-center"
              />
              <PrimaryCtaLink
                href="/contact#marketing"
                onClick={closeAll}
                className="!w-full justify-center text-black!"
                color="#FFC900"
                textColor="#111111"
                variant="nav"
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
