"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { TECH_HOME } from "@/lib/technology-home-palette";
import {
  TECHNOLOGY_CASE_STUDIES,
  type TechCaseStudy,
} from "@/data/technology-case-studies";

const STACK_TOP = 88;
const PEEK = 26;

/** Distinct pastel fills per blueprint — purple, yellow, red, teal, blue, rose. */
const CARD_PALETTES = [
  { cardBg: "#EDE4FF", panelBg: "#F5F0FF", accent: "#7C3AED" }, // purple
  { cardBg: "#FFF3CD", panelBg: "#FFF9E6", accent: "#C99700" }, // yellow
  { cardBg: "#FFE4E8", panelBg: "#FFF1F3", accent: "#E2445C" }, // red
  { cardBg: "#D8F5EE", panelBg: "#EAFBF6", accent: "#0F8A6B" }, // teal
  { cardBg: "#D8E9FB", panelBg: "#EAF2FC", accent: "#1F5C99" }, // blue
  { cardBg: "#FFE8F5", panelBg: "#FFF4FA", accent: "#C2187A" }, // rose / magenta
] as const;

function BlueprintBadge({
  label,
  accentColor,
}: {
  label: string;
  accentColor: string;
}) {
  return (
    <span className="inline-flex w-fit max-w-full items-center gap-1.5 rounded-md bg-white/90 px-2.5 py-1 text-[11px] font-medium text-[var(--ink)] shadow-sm ring-1 ring-black/5 sm:gap-2 sm:px-3 sm:py-1.5 sm:text-xs">
      <span
        className="h-1.5 w-1.5 shrink-0 rounded-sm sm:h-2 sm:w-2"
        style={{ backgroundColor: accentColor }}
        aria-hidden="true"
      />
      <span className="min-w-0 break-words">{label}</span>
    </span>
  );
}

function ScopeBlockIcon({
  title,
  accentColor,
}: {
  title: string;
  accentColor: string;
}) {
  const key = title.toLowerCase();
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-3.5 w-3.5 sm:h-4 sm:w-4",
    "aria-hidden": true as const,
  };

  let glyph: ReactNode;
  if (key.includes("discovery")) {
    glyph = (
      <svg {...common}>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
    );
  } else if (key.includes("design") || key.includes("delivery")) {
    glyph = (
      <svg {...common}>
        <path d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z" />
        <path d="M12 12 4 7.5" />
        <path d="M12 12v9" />
        <path d="m12 12 8-4.5" />
      </svg>
    );
  } else {
    glyph = (
      <svg {...common}>
        <path d="M9 11.5 11 13.5 15.5 9" />
        <rect x="4" y="3.5" width="16" height="17" rx="2.5" />
      </svg>
    );
  }

  return (
    <span
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white shadow-sm sm:h-9 sm:w-9 sm:rounded-xl"
      style={{
        background: `linear-gradient(145deg, ${accentColor} 0%, ${accentColor}cc 100%)`,
      }}
    >
      {glyph}
    </span>
  );
}

function ProgrammeScopePanel({
  study,
  accentColor,
  panelBg,
}: {
  study: TechCaseStudy;
  accentColor: string;
  panelBg: string;
}) {
  return (
    <div className="relative flex h-full min-h-0 w-full items-center justify-center p-3 sm:min-h-[420px] sm:p-6">
      <div
        className="absolute inset-2 overflow-hidden rounded-xl sm:inset-4 sm:rounded-2xl"
        style={{
          background: `linear-gradient(155deg, ${accentColor}28 0%, ${panelBg} 48%, ${accentColor}14 100%)`,
        }}
        aria-hidden="true"
      >
        <div
          className="absolute -right-8 -top-10 hidden h-36 w-36 rounded-full opacity-40 blur-2xl sm:block"
          style={{ backgroundColor: accentColor }}
        />
        <div
          className="absolute -bottom-12 -left-10 hidden h-40 w-40 rounded-full opacity-25 blur-2xl sm:block"
          style={{ backgroundColor: accentColor }}
        />
      </div>

      <div className="relative z-10 w-full min-w-0 max-w-[460px] sm:max-w-none sm:px-2">
        <Link
          href={`/technology/case-studies/${study.slug}`}
          className="block w-full overflow-hidden rounded-xl border border-white/90 bg-white/95 shadow-[0_12px_32px_-18px_rgba(16,16,20,0.28)] backdrop-blur-sm transition-transform active:scale-[0.995] sm:rounded-2xl sm:shadow-[0_20px_48px_-22px_rgba(16,16,20,0.35)] sm:hover:-translate-y-0.5 sm:hover:shadow-[0_24px_52px_-22px_rgba(16,16,20,0.4)]"
        >
          <div className="relative border-b border-[#E6E9EF] px-3 py-3 sm:px-5 sm:py-4">
            <div className="flex items-start gap-2.5 sm:gap-3">
              <span
                className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl sm:h-10 sm:w-10 sm:rounded-2xl"
                style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6.5h11.5a2.5 2.5 0 0 1 2.5 2.5V19" />
                  <path d="M4 6.5V19h14" />
                  <path d="M8 10h5" />
                  <path d="M8 13.5h7" />
                  <path d="M8 17h4" />
                </svg>
              </span>
              <div className="min-w-0">
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.12em] sm:text-[11px]"
                  style={{ color: accentColor }}
                >
                  Typical programme scope
                </p>
                <p className="mt-1 text-xs leading-snug text-[#3d4a5c] sm:mt-1.5 sm:text-sm sm:leading-relaxed">
                  {study.programmeIntro}
                </p>
              </div>
            </div>
          </div>

          <div className="relative space-y-2 p-3 sm:space-y-3 sm:p-5">
            <div
              className="absolute bottom-6 left-[1.85rem] top-6 hidden w-px sm:bottom-8 sm:left-[2.3rem] sm:top-8 sm:block"
              style={{ backgroundColor: `${accentColor}33` }}
              aria-hidden="true"
            />
            {study.programmeBlocks.map((block, i) => {
              const isOutputs = block.title.toLowerCase().includes("output");
              const outputChips = isOutputs
                ? block.body.split("·").map((part) => part.trim()).filter(Boolean)
                : [];

              return (
                <div
                  key={block.title}
                  className="relative flex gap-2.5 rounded-xl border border-[#EEF1F6] bg-gradient-to-br from-[#F8F9FC] to-white px-2.5 py-2.5 shadow-[0_1px_0_rgba(16,16,20,0.03)] sm:gap-3.5 sm:rounded-2xl sm:px-3.5 sm:py-3.5"
                >
                  <div className="relative z-10 flex flex-col items-center">
                    <ScopeBlockIcon title={block.title} accentColor={accentColor} />
                    <span
                      className="mt-0.5 text-[9px] font-bold tabular-nums sm:mt-1 sm:text-[10px]"
                      style={{ color: accentColor }}
                    >
                      0{i + 1}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p
                      className="text-[10px] font-semibold uppercase tracking-[0.1em] sm:text-[11px]"
                      style={{ color: accentColor }}
                    >
                      {block.title}
                    </p>
                    {outputChips.length > 1 ? (
                      <div className="mt-1.5 flex flex-wrap gap-1 sm:mt-2 sm:gap-1.5">
                        {outputChips.map((chip) => (
                          <span
                            key={chip}
                            className="rounded-full bg-white px-2 py-0.5 text-[10px] font-medium leading-snug text-[#3d4a5c] ring-1 ring-[#E6E9EF] sm:px-2.5 sm:py-1 sm:text-[11px]"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-1 text-[11px] leading-snug text-[#3d4a5c] sm:mt-1.5 sm:text-sm sm:leading-relaxed">
                        {block.body}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between gap-2 border-t border-[#EEF1F6] bg-[#FAFBFD] px-3 py-2.5 sm:gap-3 sm:px-5 sm:py-3.5">
            <span className="min-w-0 truncate text-[10px] font-medium text-[#676879] sm:text-[11px]">
              Full approach & outputs
            </span>
            <span
              className="inline-flex shrink-0 items-center gap-1.5 text-[11px] font-semibold sm:text-xs"
              style={{ color: accentColor }}
            >
              View
              <span
                className="inline-flex h-5 w-5 items-center justify-center rounded-full text-white sm:h-6 sm:w-6"
                style={{ backgroundColor: accentColor }}
                aria-hidden="true"
              >
                →
              </span>
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

function StackedBlueprintCard({
  study,
  index,
  stackEnabled,
}: {
  study: TechCaseStudy;
  index: number;
  stackEnabled: boolean;
}) {
  const palette = CARD_PALETTES[index % CARD_PALETTES.length];

  return (
    <div
      className={stackEnabled ? "sticky" : undefined}
      style={stackEnabled ? { top: `${STACK_TOP + index * PEEK}px` } : undefined}
      suppressHydrationWarning
    >
      <div
        className="mb-4 overflow-hidden rounded-[18px] shadow-[0_16px_40px_-24px_rgba(16,16,20,0.22)] sm:mb-8 sm:rounded-[28px] sm:shadow-[0_24px_64px_-28px_rgba(16,16,20,0.22)]"
        style={{ backgroundColor: palette.cardBg }}
      >
        <div className="grid md:grid-cols-2">
          <div
            className="flex min-w-0 flex-col p-4 sm:p-10 md:p-12"
            style={{ backgroundColor: palette.cardBg }}
          >
            <BlueprintBadge label={study.label} accentColor={palette.accent} />
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5a5f6b] sm:mt-4 sm:text-xs">
              {study.categoryLabel}
            </p>
            <h3 className="mt-2 text-[1.2rem] font-semibold leading-[1.2] tracking-tight break-words text-[var(--ink)] sm:mt-3 sm:text-[1.75rem]">
              {study.title}
            </h3>
            <p className="mt-3 max-w-md text-[13px] leading-snug text-[#3d4a5c] sm:mt-4 sm:text-sm sm:leading-relaxed">
              {study.summary}
            </p>
            <div className="mt-3.5 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
              {study.scopeChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-black/8 bg-white/75 px-2.5 py-0.5 text-[10px] font-medium text-[#3d4a5c] sm:px-3 sm:py-1 sm:text-[11px]"
                >
                  {chip}
                </span>
              ))}
            </div>
            <Link
              href={`/technology/case-studies/${study.slug}`}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-transform active:scale-[0.98] sm:mt-8 sm:w-fit sm:px-5 sm:hover:scale-[1.02]"
              style={{ backgroundColor: palette.accent, color: "#ffffff" }}
            >
              Explore the blueprint
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div
            className="min-w-0 border-t border-black/5 md:min-h-[420px] md:border-t-0 md:border-l md:border-black/5"
            style={{ backgroundColor: palette.panelBg }}
          >
            <ProgrammeScopePanel
              study={study}
              accentColor={palette.accent}
              panelBg={palette.panelBg}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TechStackedScrollSection() {
  const [stackEnabled, setStackEnabled] = useState(false);

  useEffect(() => {
    // Sticky stack on desktop only — mobile shows a normal vertical list.
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setStackEnabled(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <section className="w-full overflow-x-clip bg-white">
      <div className="mx-auto w-full max-w-[1400px] px-0">
        <div className="max-w-2xl min-w-0">
          <p
            className="text-xs font-semibold uppercase tracking-[0.14em] sm:text-sm"
            style={{ color: TECH_HOME.primary }}
          >
            How we deliver
          </p>
          <h2 className="section-heading mt-2 sm:mt-3">
            Delivery blueprints for{" "}
            <span className="tech-gradient-text">critical technology priorities</span>
          </h2>
          <p className="section-subheading mt-2 max-w-xl !mx-0 text-left text-[13px] leading-snug sm:mt-3 sm:text-base sm:leading-relaxed">
            Six representative programme structures that show how FyerX can take a
            technology priority from discovery through to delivery, adoption and
            improvement.
          </p>
        </div>

        <div
          className={`relative mt-6 md:mt-12 ${stackEnabled ? "pb-[20vh]" : "pb-3 sm:pb-6"}`}
        >
          {TECHNOLOGY_CASE_STUDIES.map((study, index) => (
            <StackedBlueprintCard
              key={study.slug}
              study={study}
              index={index}
              stackEnabled={stackEnabled}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
