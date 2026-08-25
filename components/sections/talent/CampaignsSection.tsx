"use client";

import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TALENT_HOME } from "@/lib/talent-home-palette";

function HiringDashboardMockup() {
  const rows = [
    { label: "Role scoping", pct: 100, color: "#11551C" },
    { label: "Shortlist ready", pct: 78, color: "#6fd88a" },
    { label: "Interviews scheduled", pct: 62, color: "#9EEBAA" },
  ];

  return (
    <div className="relative w-full max-w-[320px] overflow-hidden rounded-2xl border border-[#C5E8CA] bg-white shadow-lg">
      <div className="flex items-center justify-between border-b border-[#EEF1F6] px-5 py-3">
        <p className="text-[13px] font-semibold text-[var(--ink)]">Hiring Pipeline</p>
        <span className="rounded-full bg-[#F0FAF2] px-2 py-0.5 text-[10px] font-semibold text-[#11551C]">
          Active
        </span>
      </div>
      <div className="space-y-3 p-5">
        {rows.map((row) => (
          <div key={row.label} className="rounded-xl border border-[#EEF1F6] bg-[#FAFBFD] p-3">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[12px] font-semibold text-[#3d4a5c]">{row.label}</p>
              <span className="text-[11px] font-bold text-[var(--ink)]">{row.pct}%</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#E6E9EF]">
              <div className="h-full rounded-full" style={{ width: `${row.pct}%`, backgroundColor: row.color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCard() {
  return (
    <div className="absolute -left-4 bottom-12 z-10 w-[170px] rounded-2xl border border-[#C5E8CA] bg-white p-4 shadow-xl sm:-left-6">
      <p className="text-3xl font-bold tracking-tight" style={{ color: TALENT_HOME.primary }}>
        24–48h
      </p>
      <p className="mt-1 text-[12px] font-medium text-[#676879]">Initial profiles delivered</p>
    </div>
  );
}

export default function CampaignsSection() {
  return (
    <section className="w-full overflow-x-clip bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-10 lg:px-16">
        <div
          className="relative rounded-[24px] border border-[#C5E8CA] sm:rounded-[32px]"
          style={{ background: "linear-gradient(135deg, #EEF6EF 0%, #F0FAF2 50%, #E8F5EA 100%)" }}
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="px-6 py-10 sm:px-12 sm:py-16 lg:pl-16">
              <span
                className="inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium"
                style={{ backgroundColor: "rgba(255,255,255,0.85)", color: TALENT_HOME.primary }}
              >
                FyerX Talent
              </span>

              <h2 className="section-title-lg mt-6 text-[var(--ink)] sm:mt-8">
                A talent partner that understands the pressure behind an{" "}
                <span className="talent-gradient-text">open role</span>.
              </h2>

              <p className="mt-4 max-w-sm text-sm font-medium leading-relaxed text-[#52525b] sm:mt-6">
                When a role stays open, projects slow, teams stretch, and client
                commitments get harder. FyerX Talent brings structure, specialist
                sourcing, and clear ownership to the hiring work that needs to move.
              </p>

              <div className="mt-8">
                <PrimaryCtaLink
                  href="/contact"
                  className="w-full justify-center sm:w-auto"
                  color={TALENT_HOME.primary}
                  textColor={TALENT_HOME.accent}
                >
                  Contact Us
                </PrimaryCtaLink>
              </div>
            </div>

            <div
              className="relative hidden min-h-[380px] items-center justify-center pb-8 pr-8 md:flex"
              role="img"
              aria-label="Hiring pipeline dashboard illustration"
            >
              <StatCard />
              <HiringDashboardMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
