"use client";

import { useEffect, useState } from "react";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { MenuHeroCircle, type MenuIconName } from "@/components/ui/MenuGlyph";
import { MARKETING_HOME } from "@/lib/marketing-home-palette";

const WORDS = [
  { w: "Clarity", bg: "#fdeecc", dot: MARKETING_HOME.primary, text: "#6b4a12" },
  { w: "Demand", bg: "#fff3cd", dot: "#e6a800", text: "#5c4a0a" },
  { w: "Visibility", bg: "#fef9c3", dot: "#ca8a04", text: "#5c4a0a" },
  { w: "Conversion", bg: "#fde68a", dot: "#d97706", text: "#6b4a12" },
  { w: "Growth", bg: "#fef3c7", dot: "#f59e0b", text: "#6b2f12" },
] as const;

const HERO_ICONS: { label: string; icon: MenuIconName }[] = [
  { label: "Campaigns", icon: "megaphone" },
  { label: "Search & visibility", icon: "search" },
  { label: "Creative", icon: "sparkle" },
  { label: "Analytics", icon: "chart" },
  { label: "Demand generation", icon: "funnel" },
  { label: "AI marketing", icon: "robot" },
];

const ROTATE_MS = 2000;

export default function MarketingHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % WORDS.length),
      ROTATE_MS
    );
    return () => clearInterval(id);
  }, []);

  const { w, bg, dot, text } = WORDS[index];

  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @keyframes heroWordIn {
          from { opacity: 0; transform: translateY(0.18em); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="mx-auto max-w-[1360px] text-center">
        <div
          className="flex items-center justify-center pl-3 sm:pl-4 md:pl-5"
          aria-hidden="true"
        >
          {HERO_ICONS.map(({ label, icon }, i) => (
            <MenuHeroCircle
              key={label}
              icon={icon}
              label={label}
              className={
                i > 0
                  ? "-ml-3 sm:-ml-3.5 md:-ml-4 lg:-ml-[1.125rem]"
                  : undefined
              }
              style={{ zIndex: HERO_ICONS.length - i }}
            />
          ))}
        </div>

        <h1 className="mt-3 text-[clamp(1.625rem,7vw,6rem)] font-medium leading-[1.12] tracking-[-0.02em] text-[var(--ink)] sm:mt-4 sm:leading-[1.2] sm:tracking-[-0.03em] lg:mt-4 lg:leading-[1.26] lg:tracking-[-0.04em]">
          Marketing built to create{" "}
          <span
            className="inline-flex h-[1.22em] -translate-y-[0.06em] items-center rounded-full pl-[0.4em] pr-[0.48em] align-middle transition-colors duration-300"
            style={{ backgroundColor: bg }}
          >
            <span
              key={w}
              className="inline-flex items-center gap-[0.22em] leading-none"
              style={{ color: text, animation: "heroWordIn 0.3s ease" }}
            >
              <span
                className="h-[0.27em] w-[0.27em] shrink-0 rounded-full"
                style={{ backgroundColor: dot }}
                aria-hidden="true"
              />
              <span className="leading-none">
                {w}.
              </span>
            </span>
          </span>
        </h1>

        <p className="mt-4 text-[15px] leading-[1.5] text-[#191918] sm:mt-5 sm:text-[17px] lg:mt-[26px] lg:text-[20px]">
          We combine strategy, creative, search, and automation into marketing
          programs that build visibility and drive conversions.
        </p>

        <div className="mt-6 flex w-full flex-col items-center justify-center sm:mt-[30px]">
          <PrimaryCtaLink
            href="/contact"
            className="w-[234px] justify-center text-black!"
            color={MARKETING_HOME.primary}
          >
            Start a Conversation
          </PrimaryCtaLink>
        </div>
      </div>
    </section>
  );
}
