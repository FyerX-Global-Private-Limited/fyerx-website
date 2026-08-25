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

/** Monday-style pastel card fills — purple, blue, pink, green. */
const CARD_PALETTES = [
  { cardBg: "#E6E0FF", panelBg: "#F0EDFF", accent: "#7c3aed" },
  { cardBg: "#C5DAF5", panelBg: "#D8E9FB", accent: "#1F5C99" },
  { cardBg: "#FCE7F3", panelBg: "#FFF0F7", accent: "#db2777" },
  { cardBg: "#E8F5EA", panelBg: "#F0FAF2", accent: TALENT_HOME.primary },
  { cardBg: "#E6E0FF", panelBg: "#F0EDFF", accent: "#8b5cf6" },
  { cardBg: "#C5DAF5", panelBg: "#D8E9FB", accent: "#2383e2" },
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
        {study.logoSrc && (
          <div className="absolute -left-1 top-2 z-20 rounded-xl border border-white/60 bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm sm:-left-2">
            <img src={study.logoSrc} alt={study.clientName} className="h-6 w-auto object-contain" />
          </div>
        )}

        <div className="w-full overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_16px_40px_-20px_rgba(16,16,20,0.25)]">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] px-5 py-3.5">
            <p className="text-sm font-semibold text-[var(--ink)]">{study.clientName}</p>
            <span
              className="rounded-full px-2.5 py-1 text-xs font-semibold"
              style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
            >
              {study.categoryLabel.split(" ")[0]}
            </span>
          </div>
          <div className="space-y-3 p-5">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex items-center justify-between rounded-lg border border-[#EEF1F6] bg-[#F8FAFC] px-4 py-3"
              >
                <span className="text-xs font-medium text-[#5a5f6b] sm:text-sm">{metric.label}</span>
                <span className="text-base font-bold text-[var(--ink)]">{metric.value}</span>
              </div>
            ))}
          </div>
          {study.roleChips && study.roleChips.length > 0 && (
            <div className="flex flex-wrap gap-1.5 border-t border-[#EEF1F6] px-4 py-3">
              {study.roleChips.slice(0, 4).map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-[#F6F7FB] px-2 py-0.5 text-[9px] font-medium text-[#3d4a5c]"
                >
                  {chip}
                </span>
              ))}
            </div>
          )}
          <div className="border-t border-[#EEF1F6] px-4 py-2.5 text-right">
            <span className="text-[10px] font-medium" style={{ color: accentColor }}>
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
  const [stackEnabled, setStackEnabled] = useState(false);

  useEffect(() => {
    setStackEnabled(true);
  }, []);

  return (
    <section className="w-full overflow-x-clip bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-10 lg:px-12">
        <div className="max-w-2xl pt-12 sm:pt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.14em]" style={{ color: TALENT_HOME.primary }}>
            Featured hiring scenarios
          </p>
          <h2 className="section-heading mt-3">
            Talent support for the roles that{" "}
            <span className="talent-gradient-text">affect delivery</span>
          </h2>
        </div>

        <div className="relative mt-12 pb-[20vh]">
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
