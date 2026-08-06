"use client";

import React from "react";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";

function IconBox({ bg, children }: { bg: string; children: React.ReactNode }) {
  return (
    <div
      className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl"
      style={{ backgroundColor: bg }}
    >
      {children}
    </div>
  );
}

const IconImplementation = () => (
  <IconBox bg="#FFF0E6">
    <svg width="28" height="28" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <path d="M5 11.5h20v12a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 5 23.5v-12Z" fill="#FDAB3D" stroke="#E8940C" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M5 11.5 8 6h14l3 5.5" stroke="#E8940C" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M11 15.5h3M11 19h8" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  </IconBox>
);

const IconSuccessPlan = () => (
  <IconBox bg="#E8F4FF">
    <svg width="28" height="28" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <circle cx="11" cy="10.5" r="3.5" fill="#579BFC" />
      <path d="M4.5 24c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5" stroke="#0086C0" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="21.5" cy="9" r="2.5" fill="#FF5AC4" />
      <path d="M20.5 15.5c2.8 0 4.6 1.6 5.2 4.5" stroke="#A25DDC" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  </IconBox>
);

const IconManaged = () => (
  <IconBox bg="#E8F8EF">
    <svg width="28" height="28" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <rect x="8" y="5" width="17" height="11" rx="1.5" fill="#00CA72" />
      <path d="M11 8.2h.01M13.6 8.2h.01M16.2 8.2h.01" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <path d="M5 9v11.5A1.5 1.5 0 0 0 6.5 22H21" stroke="#00854D" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M11 12.5h11M11 16h6" stroke="#00854D" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  </IconBox>
);

const IconSupport = () => (
  <IconBox bg="#F3EEFF">
    <svg width="28" height="28" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <path d="M6 17v-2a9 9 0 0 1 18 0v2" stroke="#A25DDC" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="4.5" y="15.5" width="4.5" height="7" rx="2" fill="#6161FF" />
      <rect x="21" y="15.5" width="4.5" height="7" rx="2" fill="#FF5AC4" />
      <path d="M23 22.5c0 2-1.5 3.5-4 3.5h-2.5" stroke="#6161FF" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  </IconBox>
);

const IconTailored = () => (
  <IconBox bg="#FFE8EE">
    <svg width="28" height="28" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <path d="M24.5 12a10 10 0 1 1-6.5-8.4" stroke="#E2445C" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M20 12.5a5.5 5.5 0 1 1-4-4.3" stroke="#FF5AC4" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="14.5" cy="14.5" r="1.4" fill="#6161FF" />
      <path d="m14.5 14.5 7-7M21.5 4.5v3h3" stroke="#E2445C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </IconBox>
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
    description: "Structured onboarding to get your engagement set up correctly from day one.",
  },
  {
    icon: <IconSuccessPlan />,
    title: "Dedicated account management",
    description: "A single point of contact who understands your business and stays with you throughout.",
  },
];

const COLUMN_TWO: CapabilityCard[] = [
  {
    icon: <IconManaged />,
    title: "Ongoing strategic guidance",
    description: "Regular check-ins to keep your engagement aligned with your evolving goals.",
  },
  {
    icon: <IconSupport />,
    title: "Responsive support",
    description: "A support team that knows your account and responds quickly when you need it.",
  },
  {
    icon: <IconTailored />,
    title: "Tailored engagements",
    description: "Custom scopes of work for specific needs outside our standard offerings.",
  },
];

const Card: React.FC<CapabilityCard> = ({ icon, title, description }) => (
  <article className="rounded-xl bg-white p-4 sm:p-6">
    {icon}
    <h3 className="max-w-none text-[18px] font-normal leading-[1.2] text-gray-900 sm:max-w-[190px] sm:text-[20px] md:text-[22px]">
      {title}
    </h3>
    <p className="mt-4 text-[13.5px] leading-relaxed text-gray-600">{description}</p>
  </article>
);

const Capabilities: React.FC = () => {
  return (
    <section className="home-section w-full bg-white">
      <div className="section-shell section-shell--wide">
        <div className="section-inset rounded-2xl bg-[#F4F4F7] sm:rounded-3xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.35fr] md:gap-12 lg:gap-20">
            <div className="self-start md:sticky md:top-24">
              <h2 className="section-heading max-w-none md:max-w-[420px]">
                Dedicated support <br /> for{" "}
                <span className="brand-gradient-text">lasting success</span>
              </h2>

              <PrimaryCtaLink href="/contact" className="mt-[var(--section-content-gap)]">
                Contact Us
              </PrimaryCtaLink>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              <div className="flex flex-col gap-4 sm:gap-5 lg:pt-28">
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
      </div>
    </section>
  );
};

export default Capabilities;
