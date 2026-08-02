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
  FOOTER_LOCATION,
  FOOTER_RESOURCES_LINKS,
  FOOTER_SOCIALS,
  type FooterCapability,
  type FooterLink,
} from "@/lib/footer-data";

export type SiteFooterVariant = "main" | "marketing" | "talent";

const LOGO_BY_VARIANT: Record<
  SiteFooterVariant,
  { src: string; alt: string; href: string; width: number; height: number; className: string }
> = {
  main: {
    src: "/15.png",
    alt: "FyerX",
    href: "/",
    width: 140,
    height: 32,
    className: "h-8 w-auto object-contain",
  },
  marketing: {
    src: "/logo.webp",
    alt: "FyerX Marketing",
    href: "/marketing",
    width: 140,
    height: 32,
    className: "h-8 w-auto object-contain",
  },
  talent: {
    src: "/talentlogo.png",
    alt: "FyerX Talent",
    href: "/talent",
    width: 175,
    height: 40,
    className: "h-10 w-auto object-contain",
  },
};

const TAGLINE_BY_VARIANT: Record<SiteFooterVariant, string> = {
  main: "One partner for every part of your business.",
  marketing: "Campaigns, content, and growth that drive pipeline.",
  talent: "Staffing, hiring, and recruitment support for your team.",
};

const headingCls =
  "mb-4 text-sm font-medium text-[rgb(88,89,101)]";
const linkCls =
  "block min-w-0 break-words py-1 text-[0.8125rem] font-light leading-snug text-[rgb(88,89,101)] no-underline transition-colors hover:text-[#323338]";
const listCls = "flex min-w-0 flex-col gap-0.5";
const contactCls =
  "flex min-w-0 items-start gap-2.5 break-words py-1 text-[0.8125rem] font-light leading-[1.6] text-[rgb(88,89,101)] transition-colors hover:text-[#323338]";

const iconLinkCls =
  "flex min-w-0 items-center gap-2.5 break-words py-1 text-[0.8125rem] font-light leading-snug text-[rgb(88,89,101)] no-underline transition-colors hover:text-[#323338]";
const iconWrapCls =
  "inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center";

function FooterLinks({ items }: { items: FooterLink[] }) {
  return (
    <ul className={listCls}>
      {items.map((item) => (
        <li key={item.label}>
          <Link href={item.href} className={linkCls}>
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

function ContactIcon({ type }: { type: "address" | "phone" | "email" }) {
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

  if (type === "email") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 21s-7-5.7-7-11a7 7 0 0 1 14 0c0 5.3-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
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
      <div className="mx-auto w-full max-w-[1296px] px-4 sm:px-6 md:px-10 lg:px-12">
        <div className="flex min-w-0 flex-col gap-10 sm:gap-12 lg:flex-row lg:items-start lg:gap-8 xl:gap-14">
          {/* Brand + contact */}
          <div className="min-w-0 w-full shrink-0 sm:max-w-none lg:max-w-[200px] lg:w-[200px] xl:max-w-[220px] xl:w-[220px]">
            <Link href={logo.href} className="inline-flex h-10 items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={logo.className}
              />
            </Link>
            <p className="mt-4 max-w-none text-[0.8125rem] font-light leading-[1.6] text-[rgb(88,89,101)] sm:max-w-[280px] lg:max-w-none">
              {TAGLINE_BY_VARIANT[variant]}
            </p>
            {variant === "main" && (
              <p className="mt-2 text-[0.8125rem] font-light leading-[1.6] text-[rgb(88,89,101)]">
                {FOOTER_LOCATION}
              </p>
            )}
            <div className="mt-5 flex flex-col gap-1.5">
              <a href={FOOTER_CONTACT.mapsHref} target="_blank" rel="noopener noreferrer" className={contactCls}>
                <ContactIcon type="address" />
                <span>{FOOTER_CONTACT.address}</span>
              </a>
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

          {/* Link columns */}
          <div className="grid min-w-0 flex-1 grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 md:grid-cols-4 lg:gap-x-6 xl:gap-x-10">
            <div>
              <h4 className={headingCls}>Capabilities</h4>
              <CapabilityLinks items={FOOTER_CAPABILITIES} />
            </div>
            <div>
              <h4 className={headingCls}>Explore FyerX</h4>
              <FooterLinks items={FOOTER_EXPLORE_LINKS} />
            </div>
            <div>
              <h4 className={headingCls}>For Business</h4>
              <FooterLinks items={FOOTER_FOR_BUSINESS_LINKS} />
            </div>
            <div>
              <h4 className={headingCls}>Resources</h4>
              <FooterLinks items={FOOTER_RESOURCES_LINKS} />
            </div>
          </div>
        </div>

        <hr className="mt-10 border-0 border-t border-[#d0d4e4] sm:mt-12 md:mt-14" />

        <div className="flex min-w-0 flex-col-reverse gap-5 pt-6 sm:flex-row sm:items-end sm:justify-between sm:pt-8 md:pt-10">
          <div className="min-w-0">
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

          <div className="flex shrink-0 items-center gap-5 text-[#43454d] sm:gap-[22px]">
            {FOOTER_SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center transition-opacity hover:opacity-70"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
