"use client";

import React from "react";
import Image from "next/image";

/**
 * Footer — six-column link footer with language selector, compliance badges,
 * social icons, legal links, and app-store badges.
 *
 * Font: Poppins (make sure it is loaded globally, e.g. via next/font/google).
 * The small product/compliance icons are simplified inline-SVG stand-ins —
 * swap them for your real brand assets under /public when available.
 */

/* ----------------------------- link data ----------------------------- */

const MAIN_LINKS = [
  "Pricing",
  "Contact us",
  "Templates",
  "SMB",
  "Enterprise",
  "Nonprofits",
  "App marketplace",
  "24/7 support",
  "monday for agents",
  "Hey AI, learn about us",
];

const USE_CASE_LINKS = [
  "Marketing",
  "Project management",
  "Operations",
  "Sales",
  "Product",
  "IT",
  "HR",
  "Legal",
];

const COMPANY_LINKS = [
  "About us",
  "Careers - We're hiring!",
  "Insights for leaders",
  "Press",
  "Customer stories",
  "Become a partner",
  "Sustainability & ESG",
  "Affiliates",
  "monday foundation",
  "Investor relations",
  "monday ventures",
];

const RESOURCES_LINKS = [
  "Help Center",
  "Community",
  "Blog",
  "What's new",
  "Academy",
  "Global events",
  "monday spaces",
  "Startup for startup",
  "App development",
  "Find a partner",
  "Hire an expert",
  "Compare",
  "FAQs",
];

const LEGAL_LINKS = [
  "Security",
  "Terms and privacy",
  "Privacy policy",
  "Your privacy choices",
  "Status",
];

const BADGES = ["GDPR", "ISO\n27001", "SOC", "HIPAA"];

/* --------------------------- style presets --------------------------- */

const headingCls =
  "whitespace-nowrap pb-4 pt-0 text-sm font-medium text-[rgb(88,89,101)]";
const linkCls =
  "flex items-center gap-2.5 text-[0.8125rem] font-light leading-[40px] text-[rgb(88,89,101)] no-underline transition-colors hover:text-[#323338]";
const listCls = "flex w-auto flex-col items-start gap-0";
const iconWrapCls =
  "inline-flex h-5 w-5 shrink-0 items-center justify-center";

/* ------------------------------- icons ------------------------------- */

const ICONS: Record<string, React.ReactNode> = {
  agents: (
    <svg width="18" height="18" viewBox="0 0 18 18">
      <circle cx="6" cy="7" r="4.5" fill="#6161ff" />
      <circle cx="12" cy="11" r="4.5" fill="#00d2d2" opacity="0.85" />
    </svg>
  ),
  sidekick: (
    <svg width="18" height="18" viewBox="0 0 18 18">
      <path d="M9 1l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#a358df" />
      <circle cx="14" cy="4" r="2" fill="#f62b54" />
    </svg>
  ),
  vibe: (
    <svg width="18" height="18" viewBox="0 0 18 18">
      <defs>
        <linearGradient id="ftr-vibe" x1="0" y1="0" x2="18" y2="18">
          <stop stopColor="#ff9900" />
          <stop offset="1" stopColor="#f62b54" />
        </linearGradient>
      </defs>
      <path
        d="M9 16C9 16 2 11 2 6.5C2 4 4 2 6.5 2C8 2 9 3 9 3C9 3 10 2 11.5 2C14 2 16 4 16 6.5C16 11 9 16 9 16Z"
        fill="url(#ftr-vibe)"
      />
    </svg>
  ),
  integrations: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#676879" strokeWidth="1.4">
      <path d="M6 2v4M12 2v4M4 6h10v3a5 5 0 01-10 0V6zM9 14v3" />
    </svg>
  ),
  automations: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#676879" strokeWidth="1.4">
      <circle cx="9" cy="9" r="6.5" />
      <path d="M9 5.5V9l2.5 2" />
    </svg>
  ),
  dashboard: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#676879" strokeWidth="1.4">
      <rect x="2.5" y="2.5" width="13" height="13" rx="1.5" />
      <path d="M6 12V8M9 12V5.5M12 12v-2.5" />
    </svg>
  ),
  docs: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#676879" strokeWidth="1.4">
      <path d="M4.5 2.5h6l3.5 3.5v9.5h-9.5z" />
      <path d="M10.5 2.5V6H14M7 9h4M7 12h4" />
    </svg>
  ),
  kanban: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#676879" strokeWidth="1.4">
      <rect x="2.5" y="2.5" width="3.5" height="13" rx="1" />
      <rect x="7.5" y="2.5" width="3.5" height="9" rx="1" />
      <rect x="12.5" y="2.5" width="3.5" height="6" rx="1" />
    </svg>
  ),
  crm: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#00889b" strokeWidth="2.4" strokeLinecap="round">
      <path d="M13.5 5.5a5 5 0 10.5 6" />
    </svg>
  ),
  service: (
    <svg width="18" height="18" viewBox="0 0 18 18">
      <path
        d="M4 3c4 0 6 2 6 5s-2 4-4 4 4 1 8 1"
        stroke="#f8467d"
        strokeWidth="2.6"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  ),
  dev: (
    <svg width="18" height="18" viewBox="0 0 18 18">
      <circle cx="9" cy="9" r="5.5" stroke="#00ca72" strokeWidth="2.4" fill="none" />
      <circle cx="13" cy="12" r="2.2" fill="#00ca72" />
    </svg>
  ),
  workcanvas: (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#323338" strokeWidth="1.5">
      <rect x="2.5" y="2.5" width="13" height="13" rx="2" />
      <circle cx="9" cy="9" r="2.4" />
      <path d="M2.5 6h2M13.5 6h2M2.5 12h2M13.5 12h2" strokeWidth="1.2" />
    </svg>
  ),
  workforms: (
    <svg width="18" height="18" viewBox="0 0 18 18">
      <defs>
        <linearGradient id="ftr-wf" x1="0" y1="0" x2="18" y2="18">
          <stop stopColor="#f8467d" />
          <stop offset="1" stopColor="#a358df" />
        </linearGradient>
      </defs>
      <path d="M4 3h10M4 8h7M4 13h4" stroke="url(#ftr-wf)" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  ),
};

const AI_LINKS: Array<[string, string]> = [
  ["agents", "monday agents"],
  ["sidekick", "monday sidekick"],
  ["vibe", "monday vibe"],
  ["integrations", "Integrations"],
  ["automations", "Automations"],
  ["dashboard", "Dashboard"],
  ["docs", "Docs"],
  ["kanban", "Kanban"],
];

const BUSINESS_LINKS: Array<[string, string]> = [
  ["crm", "monday CRM"],
  ["service", "monday service"],
  ["dev", "monday dev"],
];

const MORE_LINKS: Array<[string, string]> = [
  ["workcanvas", "WorkCanvas"],
  ["workforms", "WorkForms"],
];

const SOCIALS: Array<[string, string]> = [
  [
    "X",
    "M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L2.5 2h6.4l4.4 5.9L18.9 2zm-1.1 18.1h1.7L7.9 3.8H6.1l11.7 16.3z",
  ],
  [
    "LinkedIn",
    "M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM.2 8h4.6v14.5H.2V8zm7.4 0h4.4v2h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.4 3 5.4 6.9v7.9h-4.6v-7c0-1.7 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.7v7.1H7.6V8z",
  ],
  [
    "Facebook",
    "M24 12a12 12 0 10-13.9 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0024 12z",
  ],
  [
    "YouTube",
    "M23.5 6.2a3 3 0 00-2.1-2.2C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 00.5 6.2 31.7 31.7 0 000 12a31.7 31.7 0 00.5 5.8 3 3 0 002.1 2.2c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.2A31.7 31.7 0 0024 12a31.7 31.7 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12l-6.2 3.6z",
  ],
  [
    "Instagram",
    "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2a3.8 3.8 0 01-.9 1.4c-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4a3.8 3.8 0 01-1.4-.9 3.8 3.8 0 01-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.2-.1 1.6-.1 4.8-.1zM12 0C8.7 0 8.3 0 7.1.1 5.8.2 4.9.4 4.1.7a5.9 5.9 0 00-2.2 1.4A5.9 5.9 0 00.7 4.1C.4 4.9.2 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.3 2.2.6 3a5.9 5.9 0 001.4 2.2 5.9 5.9 0 002.2 1.4c.8.3 1.7.5 3 .6 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c1.3-.1 2.2-.3 3-.6a5.9 5.9 0 002.2-1.4 5.9 5.9 0 001.4-2.2c.3-.8.5-1.7.6-3 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.3-2.2-.6-3a5.9 5.9 0 00-1.4-2.2A5.9 5.9 0 0019.9.7c-.8-.3-1.7-.5-3-.6C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm7.9-10.4a1.4 1.4 0 11-2.9 0 1.4 1.4 0 012.9 0z",
  ],
  [
    "TikTok",
    "M19.6 5.8a4.8 4.8 0 01-3.4-1.4A4.8 4.8 0 0114.8 1h-3.4v13.7a2.9 2.9 0 11-2.9-2.9c.3 0 .6 0 .9.1V8.4a6.3 6.3 0 00-.9-.1 6.3 6.3 0 106.3 6.3V8.9a8.1 8.1 0 004.8 1.5V6c-.3 0-.7-.1-1-.2z",
  ],
];

/* ----------------------------- component ----------------------------- */

function IconLink({ icon, label }: { icon: string; label: string }) {
  return (
    <li>
      <a href="#" className={linkCls}>
        <span className={iconWrapCls}>{ICONS[icon]}</span>
        {label}
      </a>
    </li>
  );
}

function TextLinks({ items }: { items: string[] }) {
  return (
    <ul className={listCls}>
      {items.map((label) => (
        <li key={label}>
          <a href="#" className={linkCls}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer
      className="mx-auto h-auto w-[90vw] max-w-[1400px] border-t-0 border-t-[rgb(75,75,75)] bg-white pb-5 pt-[96px]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="mx-auto max-w-[1296px] px-6 sm:px-10 lg:px-16">
        {/* ------------------------------ Link columns ------------------------------ */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-[1.39fr_1.03fr_1.7fr_1.39fr_1.37fr_1fr]">
          {/* Col 1 — logo + main links */}
          <div>
            <a href="#" className="mb-2 flex h-8 items-center gap-[7px]">
              <Image
                src="/logo.webp"
                alt="fyerx.com"
                width={140}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </a>
            <div className="mt-[31px]">
              <TextLinks items={MAIN_LINKS} />
            </div>
          </div>

          {/* Col 2 — Use case */}
          <div>
            <h4 className={headingCls}>Use case</h4>
            <TextLinks items={USE_CASE_LINKS} />
          </div>

          {/* Col 3 — AI platform capabilities */}
          <div>
            <h4 className={headingCls}>AI platform capabilities</h4>
            <ul className={listCls}>
              {AI_LINKS.map(([icon, label]) => (
                <IconLink key={label} icon={icon} label={label} />
              ))}
            </ul>
          </div>

          {/* Col 4 — Business applications / More by fyerx.com */}
          <div>
            <h4 className={headingCls}>Business applications</h4>
            <ul className={listCls}>
              {BUSINESS_LINKS.map(([icon, label]) => (
                <IconLink key={label} icon={icon} label={label} />
              ))}
            </ul>
            <h4 className={`${headingCls} mt-10`}>More by fyerx.com</h4>
            <ul className={listCls}>
              {MORE_LINKS.map(([icon, label]) => (
                <IconLink key={label} icon={icon} label={label} />
              ))}
            </ul>
          </div>

          {/* Col 5 — Company */}
          <div>
            <h4 className={headingCls}>Company</h4>
            <TextLinks items={COMPANY_LINKS} />
          </div>

          {/* Col 6 — Resources */}
          <div>
            <h4 className={headingCls}>Resources</h4>
            <TextLinks items={RESOURCES_LINKS} />
          </div>
        </div>

        {/* -------------------------------- Divider -------------------------------- */}
        <hr className="mt-11 border-0 border-t border-[#d0d4e4]" />

        {/* ------------------------------- Bottom bar ------------------------------- */}
        <div className="flex flex-col items-start gap-10 pt-12 lg:flex-row lg:gap-0">
          {/* Language + compliance badges */}
          <div className="w-[200px]">
            <button
              type="button"
              className="flex items-center gap-2 text-[15px] text-[#323338]"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#323338" strokeWidth="1.3" aria-hidden="true">
                <circle cx="10" cy="10" r="7.5" />
                <path d="M2.5 10h15M10 2.5c-2.5 2.5-2.5 12.5 0 15M10 2.5c2.5 2.5 2.5 12.5 0 15" />
              </svg>
              English
              <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="#323338" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="mt-[26px] flex gap-2.5">
              {BADGES.map((b) => (
                <span
                  key={b}
                  className="flex h-8 w-8 items-center justify-center whitespace-pre rounded-full border-[1.5px] border-[#4b6bd6] text-center text-[7px] font-semibold leading-[1.1] text-[#4b6bd6]"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Socials + legal links + copyright */}
          <div className="flex-1">
            <div className="flex items-center gap-[22px] text-[#43454d]">
              {SOCIALS.map(([label, d]) => (
                <a key={label} href="#" aria-label={label} className="inline-flex">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-[13px] text-[#323338]">
              {LEGAL_LINKS.map((label) => (
                <React.Fragment key={label}>
                  <a href="#" className="underline">
                    {label}
                  </a>
                  <span>|</span>
                </React.Fragment>
              ))}
            </div>
            <p className="mt-2 text-[13px] text-[#323338]">
              All Rights Reserved &copy; fyerx.com
            </p>
          </div>

          {/* Store badges + accessibility */}
          <div className="flex flex-col items-start lg:ml-auto lg:items-end">
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 min-w-[128px] items-center gap-2 rounded-[6px] bg-black px-3.5 text-white"
              >
                <span className="flex h-[22px] w-5 items-center justify-center">
                  <svg width="18" height="20" viewBox="0 0 18 20" aria-hidden="true">
                    <path d="M1 1l11 9-11 9z" fill="#fff" />
                    <path d="M1 1l11 9-3 2.5z" fill="#00e3a4" opacity="0.9" />
                    <path d="M1 19l11-9 3 2.5z" fill="#ff4141" opacity="0.9" />
                  </svg>
                </span>
                <span className="flex flex-col leading-[1.1]">
                  <span className="text-[8px] uppercase tracking-[0.3px]">Get it on</span>
                  <span className="text-[15px] font-semibold">Google Play</span>
                </span>
              </a>
              <a
                href="#"
                className="flex h-10 min-w-[128px] items-center gap-2 rounded-[6px] bg-black px-3.5 text-white"
              >
                <span className="flex h-[22px] w-5 items-center justify-center">
                  <svg width="18" height="20" viewBox="0 0 24 28" fill="#fff" aria-hidden="true">
                    <path d="M19.7 14.6c0-3 2.5-4.5 2.6-4.6-1.4-2.1-3.6-2.4-4.4-2.4-1.9-.2-3.6 1.1-4.6 1.1-1 0-2.4-1.1-4-1-2 0-3.9 1.2-5 3-2.1 3.7-.5 9.2 1.5 12.2 1 1.5 2.2 3.1 3.8 3 1.5-.1 2.1-1 4-1s2.4 1 4 1 2.7-1.5 3.7-3c1.2-1.7 1.6-3.4 1.7-3.5-.1 0-3.3-1.3-3.3-4.8zM16.6 5.6c.8-1 1.4-2.4 1.2-3.8-1.2 0-2.7.8-3.5 1.8-.8.9-1.5 2.3-1.3 3.7 1.4.1 2.8-.7 3.6-1.7z" />
                  </svg>
                </span>
                <span className="flex flex-col leading-[1.1]">
                  <span className="text-[9px]">Download on the</span>
                  <span className="text-[15px] font-semibold">App Store</span>
                </span>
              </a>
            </div>
            <div className="mt-7 flex items-center gap-2 text-[13px] text-[#1f1f1f]">
              <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full border-[1.5px] border-[#1f1f1f]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#1f1f1f" aria-hidden="true">
                  <circle cx="12" cy="4.5" r="2.2" />
                  <path d="M12 8c-2.8 0-5.2-.4-5.2-.4l-.4 1.9s2.2.4 4 .5l-.4 4-2.4 7 1.9.7 2.5-6.6 2.5 6.6 1.9-.7-2.4-7-.4-4c1.8-.1 4-.5 4-.5l-.4-1.9S14.8 8 12 8z" />
                </svg>
              </span>
              <a href="#" className="font-medium underline">
                Accessibility statement
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
