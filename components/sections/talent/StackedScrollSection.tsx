"use client";

import Link from "next/link";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TALENT_HOME } from "@/lib/talent-home-palette";
import {
  TALENT_CASE_STUDIES,
  type TalentCaseStudy,
  type TalentCaseStudyMetric,
} from "@/data/talent-case-studies";

const STACK_TOP = 88;
const PEEK = 26;

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
    <span className="inline-flex w-fit items-center gap-2 rounded-md bg-white px-3 py-1.5 text-xs font-medium text-[var(--ink)] shadow-sm ring-1 ring-black/5">
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
  peekColor,
}: {
  study: TalentCaseStudy;
  metrics: TalentCaseStudyMetric[];
  accentColor: string;
  peekColor: string;
}) {
  return (
    <div className="relative flex h-full min-h-[360px] w-full items-center justify-center p-3 sm:min-h-[420px] sm:p-4">
      <div
        className="absolute inset-2 rounded-2xl sm:inset-3"
        style={{
          background: `linear-gradient(145deg, ${peekColor} 0%, #ffffff 100%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[480px] px-2 sm:max-w-none sm:px-4">
        {study.logoSrc ? (
          <div className="absolute -left-2 top-4 z-20 rounded-xl border border-white/50 bg-white/95 px-3 py-2 shadow-lg backdrop-blur-sm sm:-left-4">
            <img src={study.logoSrc} alt={study.clientName} className="h-6 w-auto object-contain" />
          </div>
        ) : (
          <div className="absolute -left-2 top-6 z-20 w-[168px] rounded-xl border border-[#E6E9EF] bg-white p-4 shadow-lg sm:-left-4">
            <p className="text-3xl font-bold tracking-tight text-[var(--ink)]">
              {metrics[0]?.value ?? "—"}
            </p>
            <p className="mt-0.5 text-[11px] font-medium text-[#5a5f6b]">
              {metrics[0]?.label ?? "Key result"}
            </p>
          </div>
        )}

        <div className="w-full overflow-hidden rounded-2xl border border-[#E6E9EF] bg-white shadow-xl">
          <div className="flex items-center justify-between border-b border-[#E6E9EF] px-5 py-3.5">
            <p className="text-sm font-semibold text-[var(--ink)]">{study.clientName}</p>
            <span
              className="rounded-full px-2.5 py-1 text-xs font-semibold"
              style={{ backgroundColor: `${accentColor}14`, color: accentColor }}
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

function StackedCaseStudyCard({ study, index }: { study: TalentCaseStudy; index: number }) {
  return (
    <div className="sticky" style={{ top: `${STACK_TOP + index * PEEK}px` }}>
      <div
        className="mb-8 overflow-hidden rounded-[28px] border border-[#E6E9EF] shadow-[0_20px_60px_-24px_rgba(17,24,39,0.12)]"
        style={{ backgroundColor: study.peekColor }}
      >
        <div className="m-[3px] overflow-hidden rounded-[25px] bg-white">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col bg-[#F6F7FB] p-8 sm:p-10 md:p-12">
              <CaseStudyBadge
                label={study.label}
                clientName={study.clientName}
                accentColor={study.accentColor}
              />
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#5a5f6b]">
                {study.categoryLabel}
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-[1.15] tracking-tight text-[var(--ink)] sm:text-[1.75rem]">
                {study.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#5a5f6b]">
                {study.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {study.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-[#3d4a5c] ring-1 ring-[#E6E9EF]"
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

            <div className="border-t border-[#EEF1F6] bg-white md:min-h-[420px] md:border-t-0 md:border-l">
              <MetricsMockup
                study={study}
                metrics={study.metrics}
                accentColor={study.accentColor}
                peekColor={study.peekColor}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StackedScrollSection() {
  return (
    <section className="w-full overflow-x-clip bg-[#F6F7FB]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-6 pt-12 sm:flex-row sm:items-start sm:justify-between sm:pt-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em]" style={{ color: TALENT_HOME.primary }}>
              Featured hiring scenarios
            </p>
            <h2 className="section-heading mt-3">
              Talent support for the roles that{" "}
              <span className="brand-gradient-text">affect delivery</span>
            </h2>
          </div>
          <PrimaryCtaLink href="/talent/book-session" className="shrink-0" color={TALENT_HOME.primary} textColor={TALENT_HOME.accent}>
            Explore Talent Solutions
          </PrimaryCtaLink>
        </div>

        <div className="relative mt-12 pb-[20vh]">
          {TALENT_CASE_STUDIES.map((study, index) => (
            <StackedCaseStudyCard key={study.slug} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
