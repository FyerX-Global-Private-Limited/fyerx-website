"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { TALENT_HOME } from "@/lib/talent-home-palette";
import {
  TALENT_CASE_STUDIES,
  type TalentCaseStudy,
  type TalentCaseStudyMetric,
} from "@/data/talent-case-studies";

const STACK_TOP = 88;
const PEEK = 26;

/** Monday-style pastel card fills — varied palette. */
const CARD_PALETTES = [
  { cardBg: "#E6E0FF", panelBg: "#F0EDFF", accent: "#7c3aed" },
  { cardBg: "#C5DAF5", panelBg: "#D8E9FB", accent: "#1F5C99" },
  { cardBg: "#FFE8E6", panelBg: "#FFF0EE", accent: "#E2445C" },
  { cardBg: "#E8F5EA", panelBg: "#F0FAF2", accent: TALENT_HOME.primary },
  { cardBg: "#FFF8E1", panelBg: "#FEF9C3", accent: "#EA580C" },
  { cardBg: "#FFE8E6", panelBg: "#FFF0EE", accent: "#E2445C" },
] as const;

/** Soft multicolor role chips — matches case-study mockup reference. */
const ROLE_CHIP_STYLES = [
  { bg: "#FCE7F3", color: "#BE185D" },
  { bg: "#DBEAFE", color: "#1D4ED8" },
  { bg: "#FEF3C7", color: "#B45309" },
  { bg: "#D1FAE5", color: "#047857" },
  { bg: "#EDE9FE", color: "#6D28D9" },
  { bg: "#FFEDD5", color: "#C2410C" },
] as const;

function CaseStudyBadge({
  label,
  clientName,
  accentColor,
}: {
  label: string;
  clientName: string;
  accentColor: string;
}) {
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-md bg-white/90 px-3 py-1.5 text-xs font-medium text-[var(--ink)] shadow-sm ring-1 ring-black/5">
      <span
        className="h-2 w-2 shrink-0 rounded-sm"
        style={{ backgroundColor: accentColor }}
        aria-hidden="true"
      />
      {label} · {clientName}
    </span>
  );
}

function MetricsMockup({
  study,
  metrics,
  accentColor,
  panelBg,
}: {
  study: TalentCaseStudy;
  metrics: TalentCaseStudyMetric[];
  accentColor: string;
  panelBg: string;
}) {
  const categoryPill = study.categoryLabel.split(" ")[0];

  return (
    <div className="relative flex h-full min-h-[360px] w-full items-center justify-center p-4 sm:min-h-[420px] sm:p-6">
      <div
        className="absolute inset-3 rounded-2xl sm:inset-4"
        style={{
          background: `linear-gradient(145deg, ${accentColor}22 0%, ${panelBg} 55%, ${accentColor}18 100%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[440px] px-1 sm:max-w-none sm:px-2">
        <div className="w-full overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_16px_40px_-20px_rgba(16,16,20,0.25)]">
          <div className="flex items-center justify-between gap-3 border-b border-[#E6E9EF] px-5 py-3.5">
            <div className="flex min-w-0 items-center gap-2.5">
              {study.logoSrc ? (
                <img
                  src={study.logoSrc}
                  alt={study.clientName}
                  className="h-5 w-auto max-w-[140px] object-contain object-left sm:h-6"
                />
              ) : (
                <p className="text-sm font-semibold text-[var(--ink)]">{study.clientName}</p>
              )}
            </div>
            <span
              className="shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold"
              style={{ backgroundColor: `${accentColor}22`, color: accentColor }}
            >
              {categoryPill}
            </span>
          </div>

          <div className="space-y-2.5 p-5">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex items-center justify-between rounded-xl bg-[#F6F7FB] px-4 py-3"
              >
                <span className="text-xs font-medium text-[#5a5f6b] sm:text-sm">{metric.label}</span>
                <span className="text-sm font-bold sm:text-base" style={{ color: accentColor }}>
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {study.roleChips && study.roleChips.length > 0 && (
            <div className="flex flex-wrap gap-1.5 px-5 pb-4">
              {study.roleChips.slice(0, 4).map((chip, i) => {
                const style = ROLE_CHIP_STYLES[i % ROLE_CHIP_STYLES.length];
                return (
                  <span
                    key={chip}
                    className="rounded-full px-2.5 py-1 text-[10px] font-semibold sm:text-[11px]"
                    style={{ backgroundColor: style.bg, color: style.color }}
                  >
                    {chip}
                  </span>
                );
              })}
            </div>
          )}

          <div className="px-5 pb-4 text-right">
            <span className="text-xs font-semibold" style={{ color: accentColor }}>
              View full story →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function StackedCaseStudyCard({
  study,
  index,
  stackEnabled,
}: {
  study: TalentCaseStudy;
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
        className="mb-8 overflow-hidden rounded-[28px] shadow-[0_24px_64px_-28px_rgba(16,16,20,0.22)]"
        style={{ backgroundColor: palette.cardBg }}
      >
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col p-8 sm:p-10 md:p-12" style={{ backgroundColor: palette.cardBg }}>
            <CaseStudyBadge
              label={study.label}
              clientName={study.clientName}
              accentColor={palette.accent}
            />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#5a5f6b]">
              {study.categoryLabel}
            </p>
            <h3 className="mt-3 text-2xl font-semibold leading-[1.15] tracking-tight text-[var(--ink)] sm:text-[1.75rem]">
              {study.title}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#3d4a5c]">{study.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {study.services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-black/8 bg-white/75 px-3 py-1 text-[11px] font-medium text-[#3d4a5c]"
                >
                  {service}
                </span>
              ))}
            </div>
            <Link
              href={`/talent/case-studies/${study.slug}`}
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: TALENT_HOME.primary, color: TALENT_HOME.accent }}
            >
              Explore This Requirement
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div
            className="border-t border-black/5 md:min-h-[420px] md:border-t-0 md:border-l md:border-black/5"
            style={{ backgroundColor: palette.panelBg }}
          >
            <MetricsMockup
              study={study}
              metrics={study.metrics}
              accentColor={palette.accent}
              panelBg={palette.panelBg}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StackedScrollSection() {
  // Enable after mount so sticky top offsets match client layout (avoids SSR mismatch).
  const [stackEnabled, setStackEnabled] = useState(false);

  useEffect(() => {
    setStackEnabled(true);
  }, []);

  return (
    <section className="w-full overflow-x-clip bg-white">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em]" style={{ color: TALENT_HOME.primary }}>
            Featured hiring scenarios
          </p>
          <h2 className="section-heading mt-3">
            Talent support for the roles that{" "}
            <span className="talent-gradient-text">affect delivery</span>
          </h2>
        </div>

        <div className="relative mt-8 pb-[16vh] md:mt-12 md:pb-[20vh]">
          {TALENT_CASE_STUDIES.map((study, index) => (
            <StackedCaseStudyCard
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
