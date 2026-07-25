"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

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
  | "clipboardCheck" | "megaphone" | "gear" | "headset" | "personPlus" | "funnel"
  | "link" | "sparkle" | "heart" | "chart" | "doc" | "formEdit" | "plug" | "robot" | "database" | "tag" | "search";

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
  }
}

// ── Data ───────────────────────────────────────────────────────────────────────
type MenuCategory = {
  label: string;
  avatar: string;
  items: { label: string; href: string; icon: IconName }[];
};

const servicesCategories: MenuCategory[] = [
  {
    label: "Marketing Strategy & Consulting",
    avatar: "/avatar/1.avif",
    items: [
      { label: "Go-to-Market Strategy", icon: "chart", href: "#" },
      { label: "ICP & Buyer Persona Definition", icon: "personPlus", href: "#" },
      { label: "Marketing Audits", icon: "clipboardCheck", href: "#" },
      { label: "Competitive Positioning", icon: "tag", href: "#" },
    ],
  },
  {
    label: "Demand & Lead Generation",
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
    avatar: "/avatar/5.avif",
    items: [
      { label: "Social Media Strategy & Management", icon: "megaphone", href: "#" },
      { label: "Community Management", icon: "personPlus", href: "#" },
      { label: "Paid Social Campaigns", icon: "chart", href: "#" },
    ],
  },
  {
    label: "Content & Creative Production",
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
    avatar: "/avatar/3.avif",
    items: [
      { label: "Marketing Automation", icon: "robot", href: "#" },
      { label: "CRM Integration", icon: "database", href: "#" },
    ],
  },
];

const simpleLinks = [
  { label: "Our Work", href: "/marketing/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact?form=marketing" },
];

// ── Services mega-menu — left = clickable categories (avatar + label), 2 per
// row; right = sub-items for whichever category is active.
function ServicesMenu({ onClose }: { onClose: () => void }) {
  const [active, setActive] = useState(0);
  const category = servicesCategories[active];

  return (
    <div className="animate-dropdown bg-white border-t border-[#e6e9ef] rounded-b-[12px] shadow-[0_16px_36px_rgba(20,20,43,0.12),0_2px_8px_rgba(20,20,43,0.06)]">
      <div className="flex px-10 pt-6 pb-6">
        {/* Left — heading + main headings, 2 per row */}
        <div className="w-[560px] pr-8">
          <div className="flex items-center gap-3 text-[#9a9ea8]">
            <Glyph name="megaphone" />
            <span className="text-[1rem] font-light uppercase tracking-[0.06rem] leading-[1.5] mb-0 text-[#7c7b7b]">
              Services
            </span>
          </div>
          <p className="mt-[1.125rem] mb-[1.125rem] text-[0.75rem] leading-[1.6] text-[#676879]">
            An overview of what we offer
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-5">
            {servicesCategories.map((cat, i) => (
              <button
                key={cat.label}
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className="flex items-center gap-3 text-left group"
              >
                <Image
                  src={cat.avatar}
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-[10px] object-cover shrink-0"
                />
                <span
                  className={`text-[0.875rem] font-normal leading-[1.3] transition-colors duration-100 group-hover:text-blue-600 ${
                    active === i ? "text-blue-600" : "text-black"
                  }`}
                >
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-px bg-[#eef0f4] mx-2" />

        {/* Right — sub-items for the active category */}
        <div className="flex-1 pl-8">
          <p className="text-[1rem] font-light uppercase tracking-[0.06rem] leading-[1.5] mb-0 text-[#7c7b7b]">
            Service Details
          </p>
          <p className="mt-[1.125rem] mb-[1.125rem] text-[0.75rem] leading-[1.6] text-[#676879] whitespace-nowrap">
            {category.label}
          </p>
          <ul className="flex flex-col gap-1">
            {category.items.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-2 py-1 text-[0.875rem] font-normal leading-[1.4] text-black hover:text-blue-600 transition-colors duration-100"
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

export default function MarketingHeader() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-blue-100 bg-white/80 backdrop-blur-md"
      onMouseLeave={scheduleClose}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">
        <Link href="/marketing" className="flex items-center" onClick={closeAll}>
          <Image
            src="/logo.webp"
            alt="Fyerx Marketing"
            width={140}
            height={32}
            className="h-8 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex flex-1 items-center justify-center relative">
          <nav className="flex items-center gap-1">
            <div onMouseEnter={openServices}>
              <button
                className={`flex items-center gap-2 px-4 py-[9px] rounded-[8px] cursor-pointer text-sm transition-colors duration-100 ${
                  servicesOpen ? "bg-blue-50 text-blue-600" : "text-zinc-600 hover:bg-zinc-50"
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
                className="px-4 py-[9px] rounded-[8px] text-sm text-zinc-600 hover:bg-zinc-50 hover:text-blue-600 transition-colors duration-100 whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {servicesOpen && (
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 w-[1040px] max-w-[calc(100vw-2rem)] z-50"
              onMouseEnter={cancelClose}
            >
              <ServicesMenu onClose={closeAll} />
            </div>
          )}
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-block rounded-full bg-blue-600 text-white px-5 py-2 text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Get Started
        </Link>

        <button
          className="md:hidden p-1.5 text-zinc-700 hover:bg-zinc-50 rounded-[6px]"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-blue-100 bg-white">
          <div className="px-4 py-4 flex flex-col gap-0.5">
            <p className="px-3 pt-1 pb-2 text-[11px] font-semibold uppercase tracking-[0.07em] text-zinc-400">
              Services
            </p>
            {servicesCategories.map((cat) => (
              <div key={cat.label} className="px-3 py-2">
                <p className="text-[13px] font-semibold text-zinc-800">{cat.label}</p>
                <div className="mt-1 flex flex-col gap-0.5">
                  {cat.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeAll}
                      className="py-1 text-[13px] text-zinc-600 hover:text-blue-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="my-2 h-px bg-blue-100" />
            {simpleLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeAll}
                className="px-3 py-[10px] rounded-[8px] text-[15px] font-medium text-zinc-700 hover:bg-zinc-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={closeAll}
              className="mt-3 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-[15px] font-semibold px-4 py-3 rounded-full transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
