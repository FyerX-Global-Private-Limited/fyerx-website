"use client";

import type { ReactNode } from "react";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TALENT_HOME } from "@/lib/talent-home-palette";

const STATS = [
  { value: "24–48 hrs", label: "Initial profiles" },
  { value: "8 areas", label: "Technology talent coverage" },
] as const;

function CapabilityCard({
  label,
  icon,
  className,
}: {
  label: string;
  icon: ReactNode;
  className: string;
}) {
  return (
    <div
      className={`absolute flex items-center gap-1.5 rounded-xl border border-white/90 bg-white px-2.5 py-1.5 shadow-md sm:gap-2 sm:px-3 sm:py-2 ${className}`}
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#E8F1FB] text-[#1F5C99] sm:h-7 sm:w-7">
        {icon}
      </span>
      <span className="text-[10px] font-semibold text-[#0B2E59] sm:text-[11px]">{label}</span>
    </div>
  );
}

function AvatarBubble({ className, tone }: { className: string; tone: "a" | "b" }) {
  const bg = tone === "a" ? "#1F5C99" : "#0B2E59";
  return (
    <div
      className={`absolute flex h-11 w-11 items-center justify-center rounded-full border-2 border-white shadow-lg sm:h-14 sm:w-14 ${className}`}
      style={{ background: `linear-gradient(145deg, ${bg}, #5B8DFF)` }}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white sm:h-6 sm:w-6" fill="currentColor" aria-hidden="true">
        <circle cx="12" cy="9" r="3.5" opacity="0.95" />
        <path d="M5 20c1.2-3.5 3.8-5.5 7-5.5s5.8 2 7 5.5" opacity="0.9" />
      </svg>
    </div>
  );
}

function Chip({ label, className }: { label: string; className: string }) {
  return (
    <span
      className={`absolute rounded-full border border-[#C3D4E8] bg-white/95 px-2 py-0.5 text-[9px] font-medium text-[#3D4A5C] shadow-sm sm:text-[10px] ${className}`}
    >
      {label}
    </span>
  );
}

const miniIcon = (d: ReactNode) => (
  <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
);

function TalentGlobeVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px]" aria-hidden="true">
      <div
        className="absolute inset-[6%] rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #E8F1FB 45%, #C5DAF5 100%)",
        }}
      />

      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        <circle cx="200" cy="200" r="130" fill="none" stroke="#1F5C99" strokeWidth="1.2" strokeDasharray="3 7" opacity="0.28" />
        <circle cx="200" cy="200" r="95" fill="none" stroke="#0B2E59" strokeWidth="1" strokeDasharray="2 6" opacity="0.22" />
        <circle cx="200" cy="200" r="58" fill="#1F5C99" opacity="0.08" />
        {[
          [200, 118],
          [278, 158],
          [292, 238],
          [240, 298],
          [160, 298],
          [108, 238],
          [122, 158],
        ].map(([x, y], i) => (
          <line key={i} x1="200" y1="200" x2={x} y2={y} stroke="#B8CCE0" strokeWidth="1" strokeDasharray="2 4" />
        ))}
        <circle cx="200" cy="200" r="34" fill="#11551C" />
        <text x="200" y="196" textAnchor="middle" fill="white" fontSize="8" fontWeight="600" fontFamily="Poppins, sans-serif">
          FyerX
        </text>
        <text x="200" y="210" textAnchor="middle" fill="#9EEBAA" fontSize="6.5" fontWeight="500" fontFamily="Poppins, sans-serif">
          Talent Delivery
        </text>
      </svg>

      <AvatarBubble className="left-[8%] top-[14%]" tone="a" />
      <AvatarBubble className="bottom-[14%] right-[10%]" tone="b" />

      <CapabilityCard
        className="left-[2%] top-[38%]"
        label="Engineering"
        icon={miniIcon(
          <>
            <path d="M8 9l-2 3 2 3" />
            <path d="M16 9l2 3-2 3" />
            <path d="M13 7l-2 10" />
          </>
        )}
      />
      <CapabilityCard
        className="right-[0%] top-[12%]"
        label="ServiceNow"
        icon={miniIcon(
          <>
            <rect x="4" y="4" width="7" height="7" rx="1" />
            <rect x="13" y="4" width="7" height="7" rx="1" />
            <rect x="4" y="13" width="7" height="7" rx="1" />
            <rect x="13" y="13" width="7" height="7" rx="1" />
          </>
        )}
      />
      <CapabilityCard
        className="right-[2%] top-[42%]"
        label="Cloud & DevOps"
        icon={miniIcon(
          <>
            <path d="M7 16a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6-1.5A4 4 0 0 1 18 16z" />
          </>
        )}
      />
      <CapabilityCard
        className="bottom-[18%] right-[6%]"
        label="Data & AI"
        icon={miniIcon(
          <>
            <circle cx="6" cy="12" r="2" />
            <circle cx="18" cy="6" r="2" />
            <circle cx="18" cy="18" r="2" />
            <path d="M8 11l8-4M8 13l8 4" />
          </>
        )}
      />
      <CapabilityCard
        className="bottom-[14%] left-[8%]"
        label="QA"
        icon={miniIcon(
          <>
            <path d="M9 5h6v14H9z" />
            <path d="M11 9h4M11 13h4M11 17h2" />
          </>
        )}
      />

      <Chip label="Contract" className="left-[22%] top-[8%]" />
      <Chip label="RPO" className="right-[24%] top-[4%]" />
      <Chip label="Permanent" className="left-[36%] bottom-[4%]" />
      <Chip label="Project Teams" className="right-[18%] bottom-[6%]" />
    </div>
  );
}

export default function MarketingHero() {
  return (
    <section className="overflow-x-clip bg-white px-4 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <div className="min-w-0 text-center lg:text-left">
          <span
            className="inline-flex rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.12em]"
            style={{ backgroundColor: TALENT_HOME.paleGreen, color: TALENT_HOME.primary }}
          >
            IT Staffing & Recruitment Company
          </span>

          <h1 className="mt-4 text-[clamp(1.875rem,5.5vw,3.25rem)] font-medium leading-[1.1] tracking-[-0.03em] text-[var(--ink)] sm:mt-5">
            Hire Technology Talent for Critical Roles
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#3d4a5c] sm:mt-5 sm:text-[17px] lg:mx-0">
            Hire contract professionals, permanent employees, and project teams
            across ServiceNow, SAP, Salesforce, Data & AI, Cloud, DevOps, and
            more.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:justify-start">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-2xl font-semibold tracking-tight sm:text-[1.75rem]" style={{ color: TALENT_HOME.primary }}>
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs font-medium text-[#676879] sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex justify-center lg:justify-start">
            <PrimaryCtaLink href="/talent/book-session" color={TALENT_HOME.primary} textColor={TALENT_HOME.accent}>
              Talk to Our Team
            </PrimaryCtaLink>
          </div>
        </div>

        <div className="flex min-w-0 justify-center lg:justify-end">
          <TalentGlobeVisual />
        </div>
      </div>
    </section>
  );
}
