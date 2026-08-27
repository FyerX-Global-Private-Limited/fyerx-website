"use client";

import { TALENT_HOME } from "@/lib/talent-home-palette";

const ICON_COLOR = TALENT_HOME.primary;
const ICON_BG = `${TALENT_HOME.primary}18`;

type Industry = {
  label: string;
  icon: React.ReactNode;
};

function IndustryIconWrap({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12"
      style={{ backgroundColor: ICON_BG, color: ICON_COLOR }}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

const INDUSTRIES: Industry[] = [
  {
    label: "IT Services & Consulting",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: "SaaS & Technology Products",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 4 7v6c0 5 3.5 8 8 8s8-3 8-8V7l-8-4z" />
        <path d="M12 11v4" />
      </svg>
    ),
  },
  {
    label: "GCCs & Enterprise IT",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="8" width="16" height="12" rx="1" />
        <path d="M9 8V5a3 3 0 0 1 6 0v3" />
        <circle cx="12" cy="14" r="1.5" />
      </svg>
    ),
  },
  {
    label: "BFSI",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 4 7v14h16V7L12 3z" />
        <path d="M12 11v6" />
      </svg>
    ),
  },
  {
    label: "Retail & E-commerce",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 6h15l-1.5 9H7.5L6 6z" />
        <circle cx="9" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </svg>
    ),
  },
  {
    label: "Manufacturing & Logistics",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="8" width="20" height="10" rx="1" />
        <path d="M6 8V5h12v3" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    ),
  },
  {
    label: "Healthcare & Life Sciences",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-6-4.5-6-10a6 6 0 0 1 12 0c0 5.5-6 10-6 10z" />
        <path d="M12 8v6M9 11h6" />
      </svg>
    ),
  },
  {
    label: "Media & Digital Businesses",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
        <path d="M19 5v14" />
      </svg>
    ),
  },
];

export default function IndustriesSection() {
  return (
    <section className="home-section bg-white">
      <div className="section-shell">
        <div className="section-header section-header--center">
          <h2 className="section-heading">
            Industries We{" "}
            <span className="talent-gradient-text">Serve</span>
          </h2>
          <p className="section-subheading mx-auto max-w-2xl">
            From enterprise IT to digital-first businesses, we support hiring across sectors
            where specialist talent makes the difference.
          </p>
        </div>

        <div className="section-body mt-8 grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.label}
              className="flex min-w-0 items-center gap-2 rounded-2xl border border-[#E6E9EF] bg-white p-3 shadow-sm transition-shadow hover:shadow-md sm:gap-3 sm:p-5"
            >
              <IndustryIconWrap>{industry.icon}</IndustryIconWrap>
              <p className="min-w-0 text-[12px] font-medium leading-snug text-[#323338] sm:text-[0.9375rem]">
                {industry.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
