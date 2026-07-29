"use client";

import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";

/**
 * CampaignsSection
 * -------------------------------------------------------------------------
 * Replica of the monday "campaigns" promo block:
 *
 *   - Black rounded card
 *   - Left: monday|campaigns lockup, headline, sub-copy, "Get Started"
 *     pill + "Learn more" text link
 *   - Right: an email-builder mockup (THE INTERIOR newsletter with the
 *     "Ocean boho" hero, "shop now" button and a product grid) plus a
 *     floating glassy "Open rate 31%" stat card with a sparkline.
 *
 * The photographic parts of the email are reconstructed with warm gradient
 * placeholders (no source imagery was available). Swap the gradient blocks
 * marked `PHOTO` for real <img> tags to reach full pixel-parity.
 * -------------------------------------------------------------------------
 */

/* -------------------------------------------------------------- mockups */

/** Floating white stat card overlapping the dashboard's bottom-left corner. */
function RetentionStatCard() {
  return (
    <div className="absolute -left-6 bottom-16 z-20 w-[190px] overflow-hidden rounded-2xl border border-white/40 bg-white p-4 shadow-2xl">
      <div className="flex items-center gap-2">
        <p className="text-4xl font-bold tracking-tight text-neutral-900">98%</p>
        <svg
          className="h-4 w-4 text-emerald-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 17L10 11L14 15L20 7" />
          <path d="M14 7h6v6" />
        </svg>
      </div>
      <p className="mt-1 text-[13px] font-medium text-neutral-500">Client Retention</p>
    </div>
  );
}

/** Clean strategy-dashboard mockup — small labelled workstream tiles. */
function StrategyDashboardMockup() {
  const tiles = [
    { label: "Strategy", accent: "bg-sky-400" },
    { label: "Content", accent: "bg-fuchsia-400" },
    { label: "SEO", accent: "bg-emerald-400" },
  ];

  return (
    <div className="relative w-[300px] overflow-hidden rounded-2xl bg-white shadow-2xl">
      <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-3">
        <p className="text-[13px] font-semibold text-neutral-900">Growth Dashboard</p>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-neutral-200" />
          <span className="h-2 w-2 rounded-full bg-neutral-200" />
          <span className="h-2 w-2 rounded-full bg-neutral-200" />
        </span>
      </div>

      <div className="space-y-3 p-5">
        {tiles.map((tile) => (
          <div
            key={tile.label}
            className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50 p-3"
          >
            <span className={`h-8 w-8 flex-shrink-0 rounded-lg ${tile.accent}`} />
            <div className="min-w-0 flex-1">
              <p className="text-[12.5px] font-semibold text-neutral-800">{tile.label}</p>
              <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200">
                <div className={`h-full ${tile.accent}`} style={{ width: "68%" }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ component */

export default function CampaignsSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="relative rounded-[32px] bg-[#0B1D3A]">
          <div className="grid items-center gap-8 md:grid-cols-2">
            {/* Left: copy */}
            <div className="px-8 py-12 sm:px-12 sm:py-16 lg:pl-16">
              <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                FyerX Marketing
              </span>

              <h2
                className="mt-8 font-medium text-white"
                style={{ fontSize: "46px", lineHeight: 1.12, letterSpacing: "-0.02em" }}
              >
                A marketing team that actually understands your business
              </h2>

              <p className="mt-6 max-w-sm text-sm font-medium leading-relaxed text-neutral-300">
                We take the time to understand what you sell and who you sell to, so the
                strategy fits your business instead of a generic playbook. One team, clear
                reporting, and people who stay involved as your business grows.
              </p>

              <div className="mt-8 flex items-center gap-6">
                <PrimaryCtaLink href="/contact" className="text-black!" color="#FFC900">Get Started</PrimaryCtaLink>
                <a
                  href="#"
                  className="text-sm font-medium text-white underline underline-offset-4 hover:text-neutral-200"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right: strategy dashboard mockup */}
            <div
              className="relative hidden h-[420px] items-center justify-center md:flex"
              role="img"
              aria-label="Why B2B businesses choose FyerX for marketing"
            >
              <RetentionStatCard />
              <StrategyDashboardMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
