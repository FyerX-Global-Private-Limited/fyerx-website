"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TALENT_HOME } from "@/lib/talent-home-palette";

const WORDS = [
  { w: "Find", bg: "#d8e9fb", dot: "#2383e2", text: "#15335a" },
  { w: "Assess", bg: "#e8e0fb", dot: "#8b5cf6", text: "#3b2a6b" },
  { w: "Deploy", bg: "#d5eed3", dot: "#36a852", text: "#14351f" },
  { w: "Scale", bg: "#fdeecc", dot: "#f2a33c", text: "#6b4a12" },
  { w: "Retain", bg: "#fde0d3", dot: "#ef7234", text: "#6b2f12" },
] as const;

const ROTATE_MS = 2500;

/** Monday.com-style talent icons — colorful circles, no social-style avatars */
const STRIP_ICONS: { bg: string; icon: ReactNode }[] = [
  {
    bg: "#d8e9fb",
    icon: (
      <path d="M8 14l-3 4 3 4M16 14l3 4-3 4M13 10l-4 16" stroke="#2383e2" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    ),
  },
  {
    bg: "#fdeecc",
    icon: (
      <path d="M6 20a5 5 0 0 1-.4-10 6 6 0 0 1 11.5-1.2A4.5 4.5 0 0 1 18 20z" stroke="#d97706" strokeWidth="1.8" fill="none" />
    ),
  },
  {
    bg: "#e8e0fb",
    icon: (
      <>
        <rect x="7" y="7" width="5" height="5" rx="1" stroke="#7c3aed" strokeWidth="1.6" fill="none" />
        <rect x="14" y="7" width="5" height="5" rx="1" stroke="#7c3aed" strokeWidth="1.6" fill="none" />
        <rect x="7" y="14" width="5" height="5" rx="1" stroke="#7c3aed" strokeWidth="1.6" fill="none" />
        <rect x="14" y="14" width="5" height="5" rx="1" stroke="#7c3aed" strokeWidth="1.6" fill="none" />
      </>
    ),
  },
  {
    bg: "#F0FAF2",
    icon: (
      <>
        <circle cx="12" cy="10" r="3" stroke="#11551C" strokeWidth="1.8" fill="none" />
        <path d="M6 20c1.5-3.5 3.5-5 6-5s4.5 1.5 6 5" stroke="#11551C" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </>
    ),
  },
  {
    bg: "#fce7f3",
    icon: (
      <>
        <circle cx="9" cy="12" r="2.5" stroke="#db2777" strokeWidth="1.6" fill="none" />
        <circle cx="17" cy="8" r="2.5" stroke="#db2777" strokeWidth="1.6" fill="none" />
        <circle cx="17" cy="17" r="2.5" stroke="#db2777" strokeWidth="1.6" fill="none" />
        <path d="M11 11l4-2M11 13l4 3" stroke="#db2777" strokeWidth="1.5" />
      </>
    ),
  },
  {
    bg: "#ecfeff",
    icon: (
      <path d="M12 6l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10v-6l8-4z" stroke="#0891b2" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
    ),
  },
  {
    bg: "#d5eed3",
    icon: (
      <>
        <rect x="7" y="8" width="10" height="12" rx="1.5" stroke="#16a34a" strokeWidth="1.8" fill="none" />
        <path d="M10 12h6M10 15h6M10 18h4" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
];

function ColorfulIconStrip() {
  return (
    <div className="flex items-center justify-center pl-3">
      {STRIP_ICONS.map((item, i) => (
        <div
          key={i}
          className="relative -ml-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white shadow-sm sm:h-[52px] sm:w-[52px]"
          style={{ backgroundColor: item.bg, zIndex: STRIP_ICONS.length - i }}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true">
            {item.icon}
          </svg>
        </div>
      ))}
    </div>
  );
}

export default function TalentClosingSection() {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const { w, bg, dot, text } = WORDS[index];

  return (
    <section className="overflow-x-clip bg-white px-4 py-12 sm:px-10 sm:py-16 lg:px-16">
      <style>{`
        @keyframes closingWordIn {
          from { opacity: 0; transform: translateY(0.15em); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="mx-auto max-w-3xl text-center">
        <ColorfulIconStrip />

        <div
          className="mx-auto mt-5 inline-flex h-9 items-center gap-2 rounded-full px-3 transition-colors duration-300 sm:mt-6"
          style={{ backgroundColor: bg }}
          aria-hidden="true"
        >
          <span className="h-2 w-2 rounded-full transition-colors duration-300" style={{ backgroundColor: dot }} />
          <span
            key={w}
            className="text-[13px] font-medium sm:text-sm"
            style={{ color: text, animation: "closingWordIn 0.3s ease" }}
          >
            {w}
          </span>
        </div>

        <h2 className="mt-4 text-[clamp(1.625rem,5vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.03em] text-[var(--ink)] sm:mt-5">
          Talent that keeps critical work moving.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#3d4a5c] sm:mt-5 sm:text-[17px]">
          Contract staffing, RPO, permanent hiring, and specialist technology
          recruitment for businesses that need the right people without
          unnecessary hiring friction.
        </p>

        <div className="mt-7 flex w-full flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
          <PrimaryCtaLink
            href="/talent/book-session"
            className="w-full max-w-[300px] justify-center sm:w-auto"
            color={TALENT_HOME.primary}
            textColor={TALENT_HOME.accent}
          >
            Discuss Your Hiring Need
          </PrimaryCtaLink>
          <Link
            href="#talent-services"
            className="inline-flex h-[44px] w-full max-w-[300px] items-center justify-center rounded-full px-7 text-[15px] font-semibold transition-colors duration-150 hover:opacity-90 sm:h-[47px] sm:w-auto sm:text-base"
            style={{ backgroundColor: TALENT_HOME.accent, color: TALENT_HOME.primary }}
          >
            Explore Talent Solutions
          </Link>
        </div>

        <p className="mt-4 text-[13px] leading-relaxed text-[#676879] sm:mt-5">
          Start with the role, urgency, and outcome you need. We will recommend
          the engagement model that fits.
        </p>
      </div>
    </section>
  );
}
