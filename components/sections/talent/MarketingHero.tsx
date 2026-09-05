"use client";

import Image from "next/image";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TALENT_HOME } from "@/lib/talent-home-palette";

const HERO_IMAGE = "/updatedtalentimage/herosection.webp";

const PILLARS = [
  {
    title: "Specialist talent",
    subtitle: "For critical technology roles",
    iconSrc: "/images/talent/talent-hero-specialist.svg",
  },
  {
    title: "Flexible hiring",
    subtitle: "Contract, permanent, or project teams",
    iconSrc: "/images/talent/talent-hero-flexible.svg",
  },
] as const;

function TalentPeopleMarquee() {
  return (
    <div
      className="relative mx-auto aspect-[642/640] h-auto w-full max-w-[642px] overflow-hidden rounded-xl sm:rounded-2xl"
      aria-hidden="true"
    >
      <style>{`
        @keyframes talent-hero-scroll-up {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        .talent-hero-marquee-track {
          animation: talent-hero-scroll-up 48s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .talent-hero-marquee-track { animation: none; }
        }
      `}</style>

      <div className="talent-hero-marquee-track flex w-full flex-col">
        {[0, 1].map((copy) => (
          <Image
            key={copy}
            src={HERO_IMAGE}
            alt=""
            width={642}
            height={640}
            unoptimized
            priority={copy === 0}
            sizes="(max-width: 1024px) 90vw, 480px"
            className="h-auto w-full shrink-0 select-none"
            draggable={false}
          />
        ))}
      </div>

      {/* Soft edge fades so the loop reads like the reference crop */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-white via-white/85 to-transparent sm:h-20" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white via-white/85 to-transparent sm:h-20" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-white to-transparent sm:w-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-white to-transparent sm:w-10" />
    </div>
  );
}

function PillarCard({
  title,
  subtitle,
  iconSrc,
}: (typeof PILLARS)[number]) {
  return (
    <div className="flex h-full w-full items-start gap-3 rounded-2xl border border-[#E6E9EF] bg-white px-4 py-4 shadow-[0_8px_24px_-12px_rgba(16,16,20,0.08)] sm:gap-3.5 sm:px-4 sm:py-[18px]">
      <span className="relative h-10 w-10 shrink-0 sm:h-11 sm:w-11" aria-hidden="true">
        <Image
          src={iconSrc}
          alt=""
          fill
          sizes="44px"
          className="object-contain"
        />
      </span>
      <div className="min-w-0 text-left">
        <p className="text-sm font-semibold leading-snug text-[var(--ink)] sm:text-[15px]">{title}</p>
        <p className="mt-0.5 text-xs leading-snug text-[#52525b] sm:text-[13px]">{subtitle}</p>
      </div>
    </div>
  );
}

export default function MarketingHero() {
  return (
    <section className="overflow-x-clip bg-white pt-1 sm:pt-4 lg:pt-0">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="order-2 flex min-w-0 w-full flex-col items-stretch text-left sm:items-start lg:order-1">
          <span
            className="inline-flex w-fit rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]"
            style={{ backgroundColor: TALENT_HOME.paleGreen, color: TALENT_HOME.primary }}
          >
            Technology Recruitment & Delivery
          </span>

          <h1 className="mt-4 max-w-[18ch] text-[clamp(1.75rem,6.5vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.03em] text-[var(--ink)] sm:mt-5">
            Hire Technology Talent for{" "}
            <span className="talent-gradient-text">Critical Roles</span>
          </h1>

          <p className="mt-4 max-w-[32rem] text-[15px] leading-relaxed text-[#3d4a5c] sm:mt-5 sm:text-[17px]">
            Hire contract professionals, permanent employees, and project teams
            across ServiceNow, SAP, Salesforce, Data & AI, Cloud, DevOps, and
            more.
          </p>

          <div className="mt-6 grid w-full max-w-[34rem] grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
            {PILLARS.map((pillar) => (
              <PillarCard key={pillar.title} {...pillar} />
            ))}
          </div>

          <div className="mt-6 flex w-full justify-start sm:mt-7">
            <PrimaryCtaLink href="/contact#talent" color={TALENT_HOME.primary} textColor={TALENT_HOME.accent}>
              Talk to Our Team
            </PrimaryCtaLink>
          </div>
        </div>

        <div className="order-1 mx-auto flex w-full min-w-0 max-w-[min(100%,28rem)] items-center justify-center sm:max-w-[36rem] lg:order-2 lg:mx-0 lg:max-w-none lg:justify-end">
          <TalentPeopleMarquee />
        </div>
      </div>
    </section>
  );
}
