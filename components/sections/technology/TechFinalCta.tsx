"use client";

import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TECH_HOME } from "@/lib/technology-home-palette";

const PIPELINE_STEPS = [
  { label: "Discovery", detail: "Priority & landscape mapped", done: true, active: false },
  { label: "Design", detail: "Target operating model defined", done: true, active: false },
  { label: "Delivery", detail: "Configuration & release in flight", done: false, active: true },
  { label: "Adoption", detail: "Handover & improvement rhythm", done: false, active: false },
] as const;

function DeliveryPipelineCard() {
  return (
    <div className="relative w-full max-w-[420px]">
      <div className="rounded-2xl border border-white/80 bg-white p-4 shadow-[0_20px_48px_-24px_rgba(32,40,122,0.35)] sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#676879]">
              Delivery pipeline
            </p>
            <p className="mt-1 text-sm font-semibold text-[var(--ink)]">Critical priority track</p>
          </div>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold"
            style={{ backgroundColor: `${TECH_HOME.primary}14`, color: TECH_HOME.primary }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#00CA72]" aria-hidden="true" />
            Active
          </span>
        </div>

        <ul className="mt-5 space-y-3">
          {PIPELINE_STEPS.map((step) => (
            <li key={step.label} className="flex items-start gap-3">
              <span
                className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                style={
                  step.done
                    ? { backgroundColor: "#00CA72", color: "#ffffff" }
                    : step.active
                      ? { backgroundColor: TECH_HOME.primary, color: TECH_HOME.accent }
                      : { backgroundColor: "#EEF0FA", color: "#676879" }
                }
                aria-hidden="true"
              >
                {step.done ? "✓" : step.active ? "●" : ""}
              </span>
              <div className="min-w-0 flex-1 border-b border-[#EEF1F6] pb-3 last:border-b-0 last:pb-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-[var(--ink)]">{step.label}</p>
                  {step.active ? (
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                      style={{ backgroundColor: `${TECH_HOME.primary}14`, color: TECH_HOME.primary }}
                    >
                      In progress
                    </span>
                  ) : null}
                </div>
                <p className="mt-0.5 text-xs leading-snug text-[#676879]">{step.detail}</p>
              </div>
            </li>
          ))}
        </ul>

        <div
          className="mt-4 flex items-center justify-between rounded-xl px-3 py-2.5"
          style={{ backgroundColor: TECH_HOME.pale }}
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#676879]">
              Next checkpoint
            </p>
            <p className="mt-0.5 text-xs font-medium text-[var(--ink)]">Release readiness review</p>
          </div>
          <span
            className="rounded-lg px-2.5 py-1.5 text-center text-[11px] font-bold leading-tight text-white"
            style={{ backgroundColor: TECH_HOME.primary }}
          >
            2–3
            <br />
            weeks
          </span>
        </div>
      </div>

      <div
        className="absolute -right-2 -top-3 rounded-2xl border border-white bg-white px-3 py-2.5 shadow-[0_12px_28px_-14px_rgba(32,40,122,0.4)] sm:-right-3 sm:-top-4"
        aria-hidden="true"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#676879]">Focus</p>
        <p className="mt-0.5 text-sm font-bold" style={{ color: TECH_HOME.primary }}>
          1 priority
        </p>
        <p className="text-[11px] text-[#676879]">Practical start</p>
      </div>
    </div>
  );
}

export default function TechFinalCta() {
  return (
    <section className="overflow-x-clip bg-white">
      <div className="mx-auto max-w-[1400px]">
        <div
          className="relative overflow-hidden rounded-[24px] border sm:rounded-[36px]"
          style={{
            background: "linear-gradient(135deg, #EEF0FA 0%, #F6F7FB 50%, #E4E8F8 100%)",
            borderColor: TECH_HOME.paleAlt,
          }}
        >
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-6 lg:gap-10">
            <div className="px-5 py-8 text-left sm:px-12 sm:py-14 lg:pl-16 lg:py-16">
              <span
                className="inline-flex rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]"
                style={{ backgroundColor: "rgba(255,255,255,0.85)", color: TECH_HOME.primary }}
              >
                Move the Priority Forward
              </span>

              <h2 className="section-title-lg mt-4 max-w-[18ch] sm:mt-6">
                Ready to move a critical{" "}
                <span className="tech-gradient-text">priority forward</span>?
              </h2>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#3d4a5c] sm:mt-4 sm:text-[15px]">
                Whether you are evaluating a platform, modernising a core system or
                planning broader change, we will help you identify a practical
                starting point.
              </p>

              <div className="mt-5 flex w-full flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
                <PrimaryCtaLink
                  href="#contact"
                  className="w-full justify-center sm:w-auto"
                  color={TECH_HOME.primary}
                  textColor={TECH_HOME.accent}
                >
                  Discuss Your Requirement
                </PrimaryCtaLink>
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-full border px-4 py-2.5 text-sm font-semibold transition-opacity hover:opacity-80 sm:w-auto sm:px-6 sm:py-3 sm:text-[15px]"
                  style={{
                    borderColor: TECH_HOME.primary,
                    color: TECH_HOME.primary,
                    backgroundColor: "rgba(255,255,255,0.7)",
                  }}
                >
                  Request a Current-State Assessment
                </a>
              </div>
            </div>

            <div className="relative flex min-h-[280px] items-center justify-center px-5 pb-8 sm:px-10 md:min-h-[380px] md:pb-10 md:pr-10">
              <DeliveryPipelineCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
