"use client";

import { type ReactNode } from "react";

/**
 * StackedScrollSection
 * -------------------------------------------------------------------------
 * Replica of the monday.com/crm "stacking cards" scroll section.
 *
 * ANIMATION
 *   Each coloured panel is `position: sticky`. As you scroll, panel N pins
 *   near the top of the viewport while panel N+1 slides up and overlaps it,
 *   leaving a thin coloured sliver of the previous panel peeking above the
 *   new one. This is pure CSS sticky-stacking — no JS, no scroll listeners,
 *   so it's smooth on every device and degrades gracefully.
 *
 *   The peek is produced by giving each panel a slightly larger `top`
 *   offset than the one before it (STACK_TOP + index * PEEK).
 *
 * CONTENT
 *   Five panels — "Why B2B Marketing Needs an AI-First Partner Now" — each:
 *   a pill badge, a headline, and a supporting paragraph (left column), plus
 *   the original "monday CRM" UI mockup with a floating AI-agent popup
 *   (right column, kept as placeholder visuals — swap for real product/brand
 *   mockups when available).
 * -------------------------------------------------------------------------
 */

/* Sticky geometry (px). PEEK controls how much of each previous panel shows. */
const STACK_TOP = 88;
const PEEK = 26;

/* -------------------------------------------------------------------------
 * Case-study visual placeholder — reserves the mockup's spot until real
 * screenshots/result graphics are available.
 * ---------------------------------------------------------------------- */

function ComingSoonPlaceholder({
  tone,
  alt,
}: {
  tone: "light" | "dark";
  alt: string;
}) {
  const isDark = tone === "dark";
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed ${
        isDark ? "border-black/20 bg-black/5" : "border-white/30 bg-white/10"
      }`}
    >
      <svg
        className={isDark ? "text-neutral-900/50" : "text-white/70"}
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 15l4.5-4.5a1.5 1.5 0 0 1 2.1 0L12 13l3-3a1.5 1.5 0 0 1 2.1 0L21 13.5" />
        <circle cx="8" cy="9" r="1.4" />
      </svg>
      <p
        className={`text-sm font-medium ${
          isDark ? "text-neutral-900/70" : "text-white/80"
        }`}
      >
        Case Study Coming Soon
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * Panel data / theming
 * ---------------------------------------------------------------------- */

type Panel = {
  id: string;
  label: string; // "Case Study 0X" icon label
  title: ReactNode;
  description: string;
  cta: string;
  bg: string; // Tailwind bg-[...]
  tone: "light" | "dark"; // text colour on the panel
  alt: string;
};

const PANELS: Panel[] = [
  {
    id: "case-study-01",
    label: "Case Study 01",
    title: "[Client Name — SaaS Company]",
    description:
      "How we helped a B2B SaaS company grow qualified pipeline by [XX]% in [X] months through account-based marketing and LinkedIn lead generation.",
    cta: "Read the Case Study",
    bg: "bg-[#123fd4]",
    tone: "light",
    alt: "[Client Name — SaaS Company] — FyerX case study",
  },
  {
    id: "case-study-02",
    label: "Case Study 02",
    title: "[Client Name — Manufacturing Company]",
    description:
      "How a focused SEO and content strategy helped a manufacturing business rank on page one for [XX] high-intent search terms.",
    cta: "Read the Case Study",
    bg: "bg-[#2f7bf6]",
    tone: "light",
    alt: "[Client Name — Manufacturing Company] — FyerX case study",
  },
  {
    id: "case-study-03",
    label: "Case Study 03",
    title: "[Client Name — Financial Services Company]",
    description:
      "How marketing automation and CRM integration cut lead response time by [XX]% for a financial services provider.",
    cta: "Read the Case Study",
    bg: "bg-[#12b562]",
    tone: "light",
    alt: "[Client Name — Financial Services Company] — FyerX case study",
  },
  {
    id: "case-study-04",
    label: "Case Study 04",
    title: "[Client Name — Enterprise IT Company]",
    description:
      "How a rebrand and website redesign helped an enterprise IT company win larger deals with a stronger brand presence.",
    cta: "Read the Case Study",
    bg: "bg-[#f7c518]",
    tone: "dark",
    alt: "[Client Name — Enterprise IT Company] — FyerX case study",
  },
  {
    id: "case-study-05",
    label: "Case Study 05",
    title: "[Client Name — Professional Services Firm]",
    description:
      "How performance marketing and retargeting brought down cost-per-lead by [XX]% for a professional services firm.",
    cta: "Read the Case Study",
    bg: "bg-[#6b4df6]",
    tone: "light",
    alt: "[Client Name — Professional Services Firm] — FyerX case study",
  },
];

/* -------------------------------------------------------------------------
 * Component
 * ---------------------------------------------------------------------- */

export default function StackedScrollSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        {/* Section header */}
        <div className="flex flex-col gap-6 pt-12 sm:flex-row sm:items-start sm:justify-between sm:pt-16">
          <div className="max-w-xl">
            <h2
              className="tracking-tight text-neutral-900"
              style={{ fontSize: "43px", fontWeight: 400, lineHeight: "55px" }}
            >
              Why B2B Marketing Needs an AI-First Partner Now
            </h2>
          </div>
          <button
            type="button"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Get Started
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Stacking cards */}
        <div className="relative mt-12 pb-[20vh]">
          {PANELS.map((panel, i) => {
            const isDark = panel.tone === "dark";
            const textColor = isDark ? "text-neutral-900" : "text-white";
            const subColor = isDark ? "text-neutral-800/80" : "text-white/85";
            const badgeCls = isDark
              ? "bg-black/10 text-neutral-900"
              : "bg-white/15 text-white";

            return (
              <div
                key={panel.id}
                className="sticky"
                style={{ top: `${STACK_TOP + i * PEEK}px` }}
              >
                <div
                  className={`${panel.bg} mb-8 overflow-hidden rounded-[28px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]`}
                >
                  <div className="grid gap-6 p-8 sm:p-10 md:grid-cols-2 md:gap-4 md:p-12">
                    {/* Left: copy */}
                    <div className="flex flex-col">
                      <span
                        className={`inline-flex w-fit items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium ${badgeCls}`}
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M9 3h6a1 1 0 0 1 1 1v2H8V4a1 1 0 0 1 1-1Z" />
                          <rect x="3" y="6" width="18" height="14" rx="2" />
                        </svg>
                        {panel.label}
                      </span>
                      <h3
                        className={`mt-6 text-2xl font-bold leading-[1.15] tracking-tight sm:text-3xl md:text-[32px] ${textColor}`}
                      >
                        {panel.title}
                      </h3>
                      <p className={`mt-5 max-w-md text-sm leading-relaxed ${subColor}`}>
                        {panel.description}
                      </p>
                      <button
                        type="button"
                        className={`mt-6 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.03] active:scale-[0.98] ${
                          isDark ? "bg-neutral-900 text-white" : "bg-white text-neutral-900"
                        }`}
                      >
                        {panel.cta}
                        <span aria-hidden="true">→</span>
                      </button>
                    </div>

                    {/* Right: case study visual placeholder */}
                    <div className="relative h-[300px] w-full sm:h-[340px]">
                      <ComingSoonPlaceholder tone={panel.tone} alt={panel.alt} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
