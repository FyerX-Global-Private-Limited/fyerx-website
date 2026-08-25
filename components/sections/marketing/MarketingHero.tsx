"use client";

import { useEffect, useState, type ReactNode } from "react";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { MARKETING_HOME } from "@/lib/marketing-home-palette";

const WORDS = [
  { w: "Clarity", bg: "#fdeecc", dot: MARKETING_HOME.primary, text: "#6b4a12" },
  { w: "Demand", bg: "#fff3cd", dot: "#e6a800", text: "#5c4a0a" },
  { w: "Visibility", bg: "#fef9c3", dot: "#ca8a04", text: "#5c4a0a" },
  { w: "Conversion", bg: "#fde68a", dot: "#d97706", text: "#6b4a12" },
  { w: "Growth", bg: "#fef3c7", dot: "#f59e0b", text: "#6b2f12" },
] as const;

function HeroIconTile({ children, label }: { children: ReactNode; label: string }) {
  return (
    <span
      className="inline-flex h-10 w-10 shrink-0 overflow-hidden rounded-[12px] shadow-[0_6px_18px_-8px_rgba(16,16,20,0.35)] ring-1 ring-black/6 sm:h-11 sm:w-11 sm:rounded-[13px] md:h-12 md:w-12 md:rounded-[14px] lg:h-14 lg:w-14 lg:rounded-[15px]"
      aria-hidden="true"
      title={label}
    >
      <svg viewBox="0 0 64 64" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        {children}
      </svg>
    </span>
  );
}

const HERO_ICONS = [
  {
    label: "Campaigns",
    art: (
      <>
        <defs>
          <linearGradient id="mkt-megaphone" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#FFD633" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" fill="url(#mkt-megaphone)" />
        <path d="M10 24v16h8l4 14h6L24 40h2l22 10V14L26 24H10z" fill="#fff" opacity="0.95" />
        <path d="M46 22c3 2 3 8 0 10" stroke="#7c2d12" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="18" cy="32" r="3" fill="#fef08a" />
      </>
    ),
  },
  {
    label: "Search",
    art: (
      <>
        <defs>
          <linearGradient id="mkt-search" x1="0" y1="64" x2="64" y2="0">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#60A5FA" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" fill="url(#mkt-search)" />
        <circle cx="28" cy="28" r="14" fill="#fff" />
        <circle cx="28" cy="28" r="9" fill="#DBEAFE" />
        <path d="M38 38l12 12" stroke="#fff" strokeWidth="5" strokeLinecap="round" />
        <path d="M24 28h8M28 24v8" stroke="#1D4ED8" strokeWidth="2.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    label: "Creative",
    art: (
      <>
        <defs>
          <linearGradient id="mkt-creative" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#F472B6" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" fill="url(#mkt-creative)" />
        <circle cx="20" cy="22" r="8" fill="#FDE68A" />
        <circle cx="34" cy="18" r="8" fill="#93C5FD" />
        <circle cx="44" cy="30" r="8" fill="#86EFAC" />
        <path d="M12 46c8-6 16-6 24 0s16 6 24 0" stroke="#fff" strokeWidth="4" strokeLinecap="round" fill="none" />
        <rect x="14" y="38" width="36" height="8" rx="4" fill="#fff" opacity="0.85" />
      </>
    ),
  },
  {
    label: "Analytics",
    art: (
      <>
        <defs>
          <linearGradient id="mkt-analytics" x1="0" y1="64" x2="64" y2="0">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" fill="url(#mkt-analytics)" />
        <rect x="12" y="34" width="10" height="18" rx="3" fill="#fff" />
        <rect x="27" y="24" width="10" height="28" rx="3" fill="#D1FAE5" />
        <rect x="42" y="14" width="10" height="38" rx="3" fill="#fff" />
        <path d="M10 52h44" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
        <circle cx="48" cy="18" r="4" fill="#FDE68A" />
      </>
    ),
  },
  {
    label: "Automation",
    art: (
      <>
        <defs>
          <linearGradient id="mkt-auto" x1="64" y1="0" x2="0" y2="64">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" fill="url(#mkt-auto)" />
        <rect x="10" y="14" width="18" height="18" rx="5" fill="#fff" />
        <rect x="36" y="14" width="18" height="18" rx="5" fill="#EDE9FE" />
        <rect x="10" y="36" width="18" height="18" rx="5" fill="#EDE9FE" />
        <rect x="36" y="36" width="18" height="18" rx="5" fill="#fff" />
        <path d="M28 23h8M23 28v8M41 28v8M28 41h8" stroke="#6D28D9" strokeWidth="2.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    label: "AI Marketing",
    art: (
      <>
        <defs>
          <linearGradient id="mkt-ai" x1="0" y1="0" x2="64" y2="64">
            <stop offset="0%" stopColor="#EA580C" />
            <stop offset="55%" stopColor="#FFC900" />
            <stop offset="100%" stopColor="#FDE047" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" fill="url(#mkt-ai)" />
        <path
          d="M32 12l4 10h10l-8 6 3 10-9-6-9 6 3-10-8-6h10l4-10z"
          fill="#fff"
        />
        <path
          d="M14 46l6-4 4 6 6-8 8 6"
          stroke="#7c2d12"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="48" cy="18" r="3" fill="#fff" opacity="0.9" />
        <circle cx="16" cy="20" r="2" fill="#fff" opacity="0.75" />
      </>
    ),
  },
] as const;

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
      className="relative overflow-hidden bg-white px-6 pt-6 pb-10 sm:px-10 sm:pt-8 sm:pb-14 lg:px-16 lg:pb-16"
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
        <div className="-space-x-1 flex flex-wrap items-center justify-center sm:-space-x-1.5">
          {HERO_ICONS.map(({ label, art }) => (
            <HeroIconTile key={label} label={label}>
              {art}
            </HeroIconTile>
          ))}
        </div>

        <h1 className="mt-4 text-[clamp(1.625rem,7vw,6rem)] font-medium leading-[1.12] tracking-[-0.02em] text-[var(--ink)] sm:mt-5 sm:leading-[1.2] sm:tracking-[-0.03em] lg:mt-[20px] lg:leading-[1.26] lg:tracking-[-0.04em]">
          Marketing built to create{" "}
          <span
            className="inline-flex h-[1.22em] -translate-y-[0.06em] items-center gap-[0.2em] rounded-full px-[0.36em] align-middle transition-colors duration-300"
            style={{ backgroundColor: bg }}
          >
            <span
              className="h-[0.27em] w-[0.27em] rounded-full transition-colors duration-300"
              style={{ backgroundColor: dot }}
            />
            <span
              key={w}
              className="leading-none"
              style={{ color: text, animation: "heroWordIn 0.3s ease" }}
            >
              {w}
            </span>
          </span>
          .
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
