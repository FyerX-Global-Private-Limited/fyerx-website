"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FOOTER_CAPABILITIES,
  FOOTER_CONTACT,
  FOOTER_EXPLORE_LINKS,
  FOOTER_FOR_BUSINESS_LINKS,
  FOOTER_LEGAL_LINKS,
  FOOTER_MARKETING_EXPLORE_LINKS,
  FOOTER_MARKETING_GROWTH_FOCUS,
  FOOTER_MARKETING_RESOURCES_LINKS,
  FOOTER_MARKETING_SERVICES,
  FOOTER_MARKETING_TAGLINE,
  FOOTER_TALENT_EXPLORE_LINKS,
  FOOTER_TALENT_HIRING_NEEDS,
  FOOTER_TALENT_RESOURCES_LINKS,
  FOOTER_TALENT_SERVICES,
  FOOTER_TALENT_TAGLINE,
  FOOTER_TECHNOLOGY_EXPLORE_LINKS,
  FOOTER_TECHNOLOGY_PRIORITIES,
  FOOTER_TECHNOLOGY_RESOURCES_LINKS,
  FOOTER_TECHNOLOGY_SERVICES,
  FOOTER_TECHNOLOGY_TAGLINE,
  FOOTER_RESOURCES_LINKS,
  FOOTER_SOCIALS,
  type FooterCapability,
  type FooterLink,
} from "@/lib/footer-data";

export type SiteFooterVariant = "main" | "marketing" | "talent" | "technology";

const LOGO_BY_VARIANT: Record<
  SiteFooterVariant,
  { src: string; alt: string; href: string; width: number; height: number; className: string }
> = {
  main: {
    src: "/logo.webp",
    alt: "FyerX",
    href: "/",
    width: 140,
    height: 32,
    className: "h-8 w-auto object-contain",
  },
  marketing: {
    src: "/images/marketing/marketinglogo.png",
    alt: "FyerX Marketing",
    href: "/marketing",
    width: 160,
    height: 48,
    className: "h-10 w-auto object-contain",
  },
  talent: {
    src: "/images/marketing/technologylogo.png",
    alt: "FyerX Talent",
    href: "/talent",
    width: 160,
    height: 48,
    className: "h-10 w-auto object-contain",
  },
  technology: {
    src: "/technologylogo.svg",
    alt: "FyerX Technology",
    href: "/technology",
    width: 160,
    height: 48,
    className: "h-10 w-auto object-contain",
  },
};

const TAGLINE_BY_VARIANT: Record<SiteFooterVariant, string> = {
  main: "One partner for every part of your business.",
  marketing: "Campaigns, content, and growth that drive pipeline.",
  talent: "Staffing, hiring, and recruitment support for your team.",
  technology: "Systems that keep the business moving.",
};

const headingCls =
  "mb-4 min-h-[2.5rem] text-left text-sm font-medium leading-snug text-[rgb(88,89,101)]";
const linkCls =
  "block min-w-0 break-words py-1 text-left text-[0.8125rem] font-light leading-snug text-[rgb(88,89,101)] no-underline transition-colors hover:text-[#323338]";
const listCls = "flex min-w-0 flex-col gap-0.5 text-left";
const contactCls =
  "flex min-w-0 items-start gap-2.5 break-words py-1 text-left text-[0.8125rem] font-light leading-[1.6] text-[rgb(88,89,101)] transition-colors hover:text-[#323338]";

const iconLinkCls =
  "flex min-w-0 items-center gap-2.5 break-words py-1 text-[0.8125rem] font-light leading-snug text-[rgb(88,89,101)] no-underline transition-colors hover:text-[#323338]";
const iconWrapCls =
  "inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center";

function FooterLinks({ items }: { items: FooterLink[] }) {
  return (
    <ul className={listCls}>
      {items.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className={linkCls}
            {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function CapabilityIcon({ icon }: { icon: FooterCapability["icon"] }) {
  switch (icon) {
    case "marketing":
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
          <circle cx="9" cy="9" r="8" fill="#FFC900" />
          <path
            d="M4 8.5v2h1.5l.8 2.5h1.2l-.8-2.5H8l4.5 1.8V5.2L8 8.5H4z"
            fill="#111111"
          />
        </svg>
      );
    case "talent":
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
          <circle cx="6.5" cy="9" r="5.5" fill="#003335" />
          <circle cx="11.5" cy="9" r="5.5" fill="#00A88A" opacity="0.9" />
        </svg>
      );
    case "technology":
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
          <rect x="2.5" y="4" width="13" height="9" rx="1.5" fill="#2A35A1" />
          <path d="M2 14.5h14" stroke="#2A35A1" strokeWidth="2" strokeLinecap="round" />
          <path d="M6.5 7.5 5 9l1.5 1.5M11.5 7.5 13 9l-1.5 1.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "learning":
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
          <path
            d="M9 2.5 3 5.5v4.2c0 3.1 2.5 4.8 6 5.8 3.5-1 6-2.7 6-5.8V5.5L9 2.5z"
            fill="#730031"
          />
          <circle cx="13.5" cy="4.5" r="2" fill="#CC0057" />
        </svg>
      );
  }
}

function CapabilityLinks({ items }: { items: FooterCapability[] }) {
  return (
    <ul className={listCls}>
      {items.map((item) => (
        <li key={item.label}>
          <Link href={item.href} className={iconLinkCls}>
            <span className={iconWrapCls}>
              <CapabilityIcon icon={item.icon} />
            </span>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ContactIcon({ type }: { type: "phone" | "email" }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (type === "phone") {
    return (
      <svg {...common}>
        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export default function SiteFooter({ variant = "main" }: { variant?: SiteFooterVariant }) {
  const logo = LOGO_BY_VARIANT[variant];

  return (
    <footer
      className="w-full overflow-x-clip bg-white pb-[max(2rem,env(safe-area-inset-bottom))] pt-12 sm:pt-16 md:pt-20"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10 lg:px-16">
        <div
          className={`grid min-w-0 grid-cols-2 items-start gap-x-6 gap-y-8 text-left sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 lg:gap-x-8 xl:gap-x-10 ${
            variant === "marketing" || variant === "talent" || variant === "technology"
              ? "lg:grid-cols-[minmax(200px,1.15fr)_repeat(5,minmax(0,1fr))]"
              : "lg:grid-cols-[minmax(200px,1.15fr)_repeat(4,minmax(0,1fr))]"
          }`}
        >
          {/* Brand + contact — left column */}
          <div className="col-span-2 min-w-0 sm:col-span-3 lg:col-span-1">
            <Link href={logo.href} className="inline-flex h-10 items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={logo.className}
                unoptimized={logo.src.endsWith(".svg")}
              />
            </Link>
            <p className="mt-4 max-w-none text-left text-[0.8125rem] font-light leading-[1.6] text-[rgb(88,89,101)] sm:max-w-[280px] lg:max-w-none">
              {variant === "marketing"
                ? FOOTER_MARKETING_TAGLINE
                : variant === "talent"
                  ? FOOTER_TALENT_TAGLINE
                  : variant === "technology"
                    ? FOOTER_TECHNOLOGY_TAGLINE
                    : TAGLINE_BY_VARIANT[variant]}
            </p>
            <div className="mt-5 flex flex-col gap-1.5">
              <a href={FOOTER_CONTACT.phoneHref} className={contactCls}>
                <ContactIcon type="phone" />
                <span>{FOOTER_CONTACT.phone}</span>
              </a>
              <a href={FOOTER_CONTACT.emailHref} className={contactCls}>
                <ContactIcon type="email" />
                <span>{FOOTER_CONTACT.email}</span>
              </a>
            </div>
          </div>

          <div className="min-w-0">
            <h4 className={headingCls}>Capabilities</h4>
            <CapabilityLinks items={FOOTER_CAPABILITIES} />
          </div>
          {variant === "marketing" ? (
            <>
              <div className="min-w-0">
                <h4 className={headingCls}>Marketing Services</h4>
                <FooterLinks items={FOOTER_MARKETING_SERVICES} />
              </div>
              <div className="min-w-0">
                <h4 className={headingCls}>Growth Focus</h4>
                <FooterLinks items={FOOTER_MARKETING_GROWTH_FOCUS} />
              </div>
              <div className="min-w-0">
                <h4 className={headingCls}>Explore FyerX</h4>
                <FooterLinks items={FOOTER_MARKETING_EXPLORE_LINKS} />
              </div>
              <div className="min-w-0">
                <h4 className={headingCls}>Resources</h4>
                <FooterLinks items={FOOTER_MARKETING_RESOURCES_LINKS} />
              </div>
            </>
          ) : variant === "talent" ? (
            <>
              <div className="min-w-0">
                <h4 className={headingCls}>Talent Services</h4>
                <FooterLinks items={FOOTER_TALENT_SERVICES} />
              </div>
              <div className="min-w-0">
                <h4 className={headingCls}>Hiring Needs</h4>
                <FooterLinks items={FOOTER_TALENT_HIRING_NEEDS} />
              </div>
              <div className="min-w-0">
                <h4 className={headingCls}>Explore FyerX</h4>
                <FooterLinks items={FOOTER_TALENT_EXPLORE_LINKS} />
              </div>
              <div className="min-w-0">
                <h4 className={headingCls}>Resources</h4>
                <FooterLinks items={FOOTER_TALENT_RESOURCES_LINKS} />
              </div>
            </>
          ) : variant === "technology" ? (
            <>
              <div className="min-w-0">
                <h4 className={headingCls}>Technology Services</h4>
                <FooterLinks items={FOOTER_TECHNOLOGY_SERVICES} />
              </div>
              <div className="min-w-0">
                <h4 className={headingCls}>Business Priorities</h4>
                <FooterLinks items={FOOTER_TECHNOLOGY_PRIORITIES} />
              </div>
              <div className="min-w-0">
                <h4 className={headingCls}>Explore FyerX</h4>
                <FooterLinks items={FOOTER_TECHNOLOGY_EXPLORE_LINKS} />
              </div>
              <div className="min-w-0">
                <h4 className={headingCls}>Resources</h4>
                <FooterLinks items={FOOTER_TECHNOLOGY_RESOURCES_LINKS} />
              </div>
            </>
          ) : (
            <>
              <div className="min-w-0">
                <h4 className={headingCls}>Explore FyerX</h4>
                <FooterLinks items={FOOTER_EXPLORE_LINKS} />
              </div>
              <div className="min-w-0">
                <h4 className={headingCls}>For Business</h4>
                <FooterLinks items={FOOTER_FOR_BUSINESS_LINKS} />
              </div>
              <div className="min-w-0">
                <h4 className={headingCls}>Resources</h4>
                <FooterLinks items={FOOTER_RESOURCES_LINKS} />
              </div>
            </>
          )}
        </div>

        <hr className="mt-10 border-0 border-t border-[#d0d4e4] sm:mt-12 md:mt-14" />

        <div className="flex min-w-0 flex-col-reverse gap-5 pt-6 sm:flex-row sm:items-center sm:justify-between sm:pt-8 md:pt-10">
          <div className="min-w-0 text-left">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-[12px] text-[#323338] sm:text-[13px]">
              {FOOTER_LEGAL_LINKS.map((item, i) => (
                <React.Fragment key={item.label}>
                  <Link href={item.href} className="underline">
                    {item.label}
                  </Link>
                  {i < FOOTER_LEGAL_LINKS.length - 1 && <span>|</span>}
                </React.Fragment>
              ))}
            </div>
            <p className="mt-2 text-[12px] text-[#323338] sm:text-[13px]">
              &copy; 2026 FyerX Global Private Limited. All rights reserved.
            </p>
          </div>

          <div className="flex shrink-0 flex-row items-center justify-end gap-4 text-[#43454d]">
            {FOOTER_SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center transition-opacity hover:opacity-70"
              >
                <svg
                  className="block h-[18px] w-[18px] shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
