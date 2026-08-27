"use client";

import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { MARKETING_HOME } from "@/lib/marketing-home-palette";

function RetentionStatCard() {
  return (
    <div className="absolute -left-6 bottom-16 z-20 w-[190px] overflow-hidden rounded-2xl border border-[#FFC900]/30 bg-white p-4 shadow-2xl">
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

function StrategyDashboardMockup() {
  const tiles = [
    { label: "Strategy", accent: "bg-[#FFC900]" },
    { label: "Content", accent: "bg-[#F59E0B]" },
    { label: "SEO", accent: "bg-[#E6A800]" },
  ];

  return (
    <div className="relative w-[300px] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-[#FFC900]/20">
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

export default function CampaignsSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1400px]">
        <div
          className="relative rounded-[32px] border border-[#FFC900]/25"
          style={{ backgroundColor: MARKETING_HOME.paleYellow }}
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="px-6 py-10 sm:px-12 sm:py-16 lg:pl-16">
              <span
                className="inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium text-[#3d4a5c]"
                style={{ backgroundColor: `${MARKETING_HOME.primary}33` }}
              >
                FyerX Marketing
              </span>

              <h2 className="section-title-lg mt-8 text-[var(--ink)] sm:mt-8">
                Marketing should feel less fragmented.
              </h2>

              <p className="mt-4 max-w-sm text-sm font-medium leading-relaxed text-[#52525b] sm:mt-6">
                FyerX gives you a team that can think through the bigger picture and
                take responsibility for the work that follows—without losing sight of
                day-to-day delivery.
              </p>

              <div className="mt-6 sm:mt-8">
                <PrimaryCtaLink
                  href="/contact"
                  className="w-[234px] justify-center text-black!"
                  color={MARKETING_HOME.primary}
                >
                  Get Started
                </PrimaryCtaLink>
              </div>
            </div>

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
