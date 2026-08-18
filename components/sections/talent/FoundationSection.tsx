"use client";

import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TALENT_HOME } from "@/lib/talent-home-palette";

const CARDS = [
  {
    title: "Screened talent network",
    body: "Every profile is evaluated for role relevance, skill depth, and availability before it reaches you.",
    tags: ["Technical Screening", "Skill Validation", "Role-Fit Assessment"],
    iconBg: TALENT_HOME.paleGreen,
    iconColor: TALENT_HOME.primary,
  },
  {
    title: "Structured hiring process",
    body: "Defined timelines and a single point of contact keep every role moving without surprises.",
    tags: ["Defined Timelines", "Status Updates", "Dedicated Recruiter"],
    iconBg: TALENT_HOME.lavender,
    iconColor: "#7C3AED",
  },
  {
    title: "Compliance-ready staffing",
    body: "Background checks, contracts, and statutory requirements are handled correctly from day one.",
    tags: ["Background Verification", "Contract & Payroll Support", "Statutory Compliance"],
    iconBg: TALENT_HOME.mint,
    iconColor: TALENT_HOME.primary,
  },
] as const;

function CardIcon({ color, bg }: { color: string; bg: string }) {
  return (
    <span
      className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
      style={{ backgroundColor: bg, color }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function FoundationSection() {
  return (
    <section className="overflow-x-clip bg-white px-4 py-12 sm:px-10 sm:py-16 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title-lg">Built on a foundation you can rely on</h2>
          <p className="mt-4 text-base leading-relaxed text-[#52525b] sm:text-[17px]">
            The screening, process, and compliance behind every hire we make.
          </p>
          <div className="mt-7 flex justify-center">
            <PrimaryCtaLink href="/talent/book-session" color={TALENT_HOME.primary} textColor={TALENT_HOME.accent}>
              Talk to a Talent Specialist
            </PrimaryCtaLink>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-2xl border border-[#E6E9EF] bg-[#FAFBFD] p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7"
            >
              <CardIcon color={card.iconColor} bg={card.iconBg} />
              <h3 className="mt-5 text-lg font-semibold text-[var(--ink)]">{card.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#52525b]">{card.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#E6E9EF] bg-white px-2.5 py-1 text-[11px] font-medium text-[#3d4a5c]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
