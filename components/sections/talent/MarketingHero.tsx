"use client";

import { PublicImage as Image } from "@/components/ui/PublicImage";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TALENT_HOME } from "@/lib/talent-home-palette";

const HERO_COLUMNS = [
  { src: "/Talent-1.webp", duration: "36s", reverse: false, delay: "0s" },
  { src: "/Talent-2.webp", duration: "44s", reverse: true, delay: "-10s" },
  { src: "/Talent-3.webp", duration: "40s", reverse: false, delay: "-18s" },
  { src: "/Talent-4.webp", duration: "48s", reverse: true, delay: "-6s" },
] as const;

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
      className="relative mx-auto aspect-[642/640] h-auto w-full max-w-[642px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)]"
      aria-hidden="true"
    >
      <style>{`
        @keyframes talent-hero-col-up {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes talent-hero-col-down {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }
        .talent-hero-col-up {
          animation: talent-hero-col-up var(--talent-col-duration, 40s) linear infinite;
          animation-delay: var(--talent-col-delay, 0s);
          will-change: transform;
        }
        .talent-hero-col-down {
          animation: talent-hero-col-down var(--talent-col-duration, 40s) linear infinite;
          animation-delay: var(--talent-col-delay, 0s);
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .talent-hero-col-up, .talent-hero-col-down { animation: none; }
        }
      `}</style>

      <div className="absolute inset-0 grid grid-cols-4 gap-2 sm:gap-2.5">
        {HERO_COLUMNS.map((col, index) => (
          <div key={col.src} className="relative min-h-0 min-w-0 overflow-hidden">
            <div
              className={`flex flex-col ${col.reverse ? "talent-hero-col-down" : "talent-hero-col-up"}`}
              style={{
                ["--talent-col-duration" as string]: col.duration,
                ["--talent-col-delay" as string]: col.delay,
              }}
            >
              {[0, 1].map((copy) => (
                <Image
                  key={copy}
                  src={col.src}
                  alt=""
                  width={640}
                  height={5232}
                  priority={index === 0 && copy === 0}
                  sizes="(max-width: 1024px) 22vw, 160px"
                  className="block h-auto w-full shrink-0 select-none"
                  draggable={false}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-white via-white/80 to-transparent sm:h-24" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-white via-white/80 to-transparent sm:h-24" />
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
