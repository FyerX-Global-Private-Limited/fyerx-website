"use client";

import Image from "next/image";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TECH_HOME } from "@/lib/technology-home-palette";

const PEOPLE_IMAGE = "/images/talent/subimage.svg";

const PILLARS = [
  {
    title: "Enterprise Platforms",
    subtitle: "ServiceNow, SAP, Salesforce, Microsoft and Oracle",
    iconSrc: "/images/talent/tabicon/enterprise.svg",
  },
  {
    title: "Digital Transformation",
    subtitle: "Applications, integration and automation",
    iconSrc: "/images/talent/tabicon/digital.svg",
  },
  {
    title: "Data, AI & Cloud",
    subtitle: "Modern foundations for growth",
    iconSrc: "/images/talent/tabicon/data-ai.svg",
  },
] as const;

function TechPeopleMarquee() {
  return (
    <div
      className="relative mx-auto aspect-[4/3] h-auto w-full max-w-[280px] overflow-hidden sm:aspect-[642/640] sm:max-w-[420px] lg:max-w-[642px]"
      aria-hidden="true"
    >
      <style>{`
        @keyframes tech-hero-scroll-up {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        .tech-hero-marquee-track {
          animation: tech-hero-scroll-up 48s linear infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .tech-hero-marquee-track { animation: none; }
        }
      `}</style>

      <div className="tech-hero-marquee-track flex w-full flex-col">
        {[0, 1].map((copy) => (
          <Image
            key={copy}
            src={PEOPLE_IMAGE}
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
      <span
        className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl sm:h-11 sm:w-11"
        style={{ backgroundColor: TECH_HOME.primary }}
        aria-hidden="true"
      >
        <Image
          src={iconSrc}
          alt=""
          width={22}
          height={22}
          className="h-5 w-5 brightness-0 invert"
        />
      </span>
      <div className="min-w-0 text-left">
        <p className="text-sm font-semibold leading-snug text-[var(--ink)] sm:text-[15px]">{title}</p>
        <p className="mt-0.5 text-xs leading-snug text-[#52525b] sm:text-[13px]">{subtitle}</p>
      </div>
    </div>
  );
}

export default function TechHero() {
  return (
    <section className="overflow-x-clip bg-white pt-1 sm:pt-4 lg:pt-0">
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-3 sm:gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="order-2 flex min-w-0 flex-col items-start text-left lg:order-1">
          <span
            className="inline-flex rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]"
            style={{ backgroundColor: TECH_HOME.pale, color: TECH_HOME.primary }}
          >
            Enterprise Technology & Delivery
          </span>

          <h1 className="mt-3 max-w-[18ch] text-[clamp(1.625rem,5vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.03em] text-[var(--ink)] sm:mt-5">
            Systems that keep the{" "}
            <span className="tech-gradient-text">business moving</span>
          </h1>

          <p className="mt-3 max-w-[32rem] text-sm leading-relaxed text-[#3d4a5c] sm:mt-5 sm:text-[15px] lg:text-[17px]">
            We help organisations modernise core systems, connect disconnected
            operations and turn data, cloud and AI investment into practical
            business value.
          </p>

          <div className="mt-5 grid w-full max-w-[36rem] grid-cols-1 gap-2.5 sm:mt-8 sm:gap-3">
            {PILLARS.map((pillar) => (
              <PillarCard key={pillar.title} {...pillar} />
            ))}
          </div>

          <div className="mt-5 sm:mt-7">
            <PrimaryCtaLink href="/technology#contact" color={TECH_HOME.primary} textColor={TECH_HOME.accent}>
              Talk to Our Team
            </PrimaryCtaLink>
          </div>
        </div>

        <div className="order-1 flex min-w-0 items-center justify-center lg:order-2 lg:justify-end">
          <TechPeopleMarquee />
        </div>
      </div>
    </section>
  );
}
