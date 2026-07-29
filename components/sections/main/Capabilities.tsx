"use client";

import React from "react";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";

/**
 * Capabilities — "Expert services for lasting success" section
 *
 * Exact replica of the reference design:
 * a large rounded light-gray panel; the left column (heading, black
 * "Contact sales →" pill, fine-print caption) is sticky while the right
 * side — two staggered columns of white cards with indigo line icons —
 * scrolls vertically past it.
 */

const ICON_STROKE = "#5D5CDE";

const IconImplementation = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
    <path
      d="M5 11.5h20v12a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 5 23.5v-12Z"
      stroke={ICON_STROKE}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M5 11.5 8 6h14l3 5.5" stroke={ICON_STROKE} strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M11 15.5h3M11 19h8" stroke={ICON_STROKE} strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconSuccessPlan = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
    <circle cx="11" cy="10.5" r="3.5" stroke={ICON_STROKE} strokeWidth="1.6" />
    <path
      d="M4.5 24c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5"
      stroke={ICON_STROKE}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="21.5" cy="9" r="2.5" stroke={ICON_STROKE} strokeWidth="1.6" />
    <path
      d="M20.5 15.5c2.8 0 4.6 1.6 5.2 4.5"
      stroke={ICON_STROKE}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const IconManaged = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
    <rect x="8" y="5" width="17" height="11" rx="1.5" stroke={ICON_STROKE} strokeWidth="1.6" />
    <path d="M11 8.2h.01M13.6 8.2h.01M16.2 8.2h.01" stroke={ICON_STROKE} strokeWidth="2" strokeLinecap="round" />
    <path
      d="M5 9v11.5A1.5 1.5 0 0 0 6.5 22H21"
      stroke={ICON_STROKE}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path d="M11 12.5h11M11 16h6" stroke={ICON_STROKE} strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const IconSupport = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
    <path
      d="M6 17v-2a9 9 0 0 1 18 0v2"
      stroke={ICON_STROKE}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <rect x="4.5" y="15.5" width="4.5" height="7" rx="2" stroke={ICON_STROKE} strokeWidth="1.6" />
    <rect x="21" y="15.5" width="4.5" height="7" rx="2" stroke={ICON_STROKE} strokeWidth="1.6" />
    <path
      d="M23 22.5c0 2-1.5 3.5-4 3.5h-2.5"
      stroke={ICON_STROKE}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const IconTailored = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
    <path
      d="M24.5 12a10 10 0 1 1-6.5-8.4"
      stroke={ICON_STROKE}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M20 12.5a5.5 5.5 0 1 1-4-4.3"
      stroke={ICON_STROKE}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="14.5" cy="14.5" r="1.4" fill={ICON_STROKE} />
    <path d="m14.5 14.5 7-7M21.5 4.5v3h3" stroke={ICON_STROKE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface CapabilityCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const COLUMN_ONE: CapabilityCard[] = [
  {
    icon: <IconImplementation />,
    title: "Onboarding support",
    description:
      "Structured onboarding to get your engagement set up correctly from day one.",
  },
  {
    icon: <IconSuccessPlan />,
    title: "Dedicated account management",
    description:
      "A single point of contact who understands your business and stays with you throughout.",
  },
];

const COLUMN_TWO: CapabilityCard[] = [
  {
    icon: <IconManaged />,
    title: "Ongoing strategic guidance",
    description:
      "Regular check-ins to keep your engagement aligned with your evolving goals.",
  },
  {
    icon: <IconSupport />,
    title: "Responsive support",
    description:
      "A support team that knows your account and responds quickly when you need it.",
  },
  {
    icon: <IconTailored />,
    title: "Tailored engagements",
    description:
      "Custom scopes of work for specific needs outside our standard offerings.",
  },
];

const Card: React.FC<CapabilityCard> = ({ icon, title, description }) => (
  <article className="rounded-xl bg-white p-6">
    <div className="mb-7">{icon}</div>
    <h3 className="max-w-[190px] text-[22px] font-normal leading-[1.2] text-gray-900">
      {title}
    </h3>
    <p className="mt-4 text-[13.5px] leading-relaxed text-gray-600">
      {description}
    </p>
  </article>
);

const Capabilities: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto block w-full max-w-[1400px] rounded-3xl bg-[#F4F4F7] px-4 py-14 transition-all duration-200 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.35fr] md:gap-20">
          {/* Left — sticky while the cards scroll */}
          <div className="self-start md:sticky md:top-24 md:pt-24">
            <h2 className="mb-12 mt-0 max-w-[420px] font-[family-name:var(--font-poppins)] text-[36px] font-medium leading-[1.25] tracking-[-0.02em] text-[var(--ink)]">
              Dedicated support <br /> for{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #730031 0%, #CC0057 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                lasting success
              </span>
            </h2>

            <PrimaryCtaLink href="/contact" className="mt-6">
              Contact Us
            </PrimaryCtaLink>

            <p className="mt-5 text-[11px] text-gray-500">
              Availability may vary based on engagement scope
            </p>
          </div>

          {/* Right — two staggered columns of cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-5 sm:pt-28">
              {COLUMN_ONE.map((card) => (
                <Card key={card.title} {...card} />
              ))}
            </div>
            <div className="flex flex-col gap-5">
              {COLUMN_TWO.map((card) => (
                <Card key={card.title} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
