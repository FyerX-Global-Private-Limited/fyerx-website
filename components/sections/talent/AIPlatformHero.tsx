"use client";

import { useState } from "react";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TALENT_HOME } from "@/lib/talent-home-palette";

const SERVICES = [
  "Contract Staffing",
  "IT & Tech Staffing",
  "Project-Based Staffing",
  "Recruitment Process Outsourcing",
  "Permanent Hiring",
  "Executive Search",
  "Bulk & Volume Hiring",
  "Global Staffing",
] as const;

const SERVICE_COPY: Record<(typeof SERVICES)[number], { heading: string; description: string }> = {
  "Contract Staffing": {
    heading: "Add capability when the work cannot wait.",
    description:
      "Qualified professionals for defined roles, project windows, and changing workload requirements.",
  },
  "IT & Tech Staffing": {
    heading: "Specialist technology talent across platforms and stacks.",
    description:
      "Developers, engineers, architects, and platform specialists matched to your delivery environment.",
  },
  "Project-Based Staffing": {
    heading: "Teams aligned to a defined delivery window.",
    description:
      "Individuals or pods scoped to milestones, releases, and programme timelines.",
  },
  "Recruitment Process Outsourcing": {
    heading: "Recruitment as an extension of your operation.",
    description:
      "End-to-end or on-demand RPO support when internal capacity needs reinforcement.",
  },
  "Permanent Hiring": {
    heading: "Full-time hires with role clarity and fit.",
    description:
      "Targeted search for professionals who can contribute beyond the immediate project phase.",
  },
  "Executive Search": {
    heading: "Focused search for senior and leadership roles.",
    description:
      "Discreet, structured search where judgement, leadership, and cultural fit all matter.",
  },
  "Bulk & Volume Hiring": {
    heading: "Structured sourcing for multiple roles at once.",
    description:
      "Screening pipelines and coordination designed for volume without losing quality.",
  },
  "Global Staffing": {
    heading: "Distributed and cross-border talent support.",
    description:
      "Remote team building and international staffing with practical compliance considerations.",
  },
};

export default function AIPlatformHero() {
  const [active, setActive] = useState<(typeof SERVICES)[number]>(SERVICES[0]);
  const copy = SERVICE_COPY[active];

  return (
    <section id="talent-services" className="overflow-x-clip bg-[#F6F7FB] px-4 py-12 sm:px-10 sm:py-16 lg:px-16">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="section-title-lg text-center">
          One talent partner for immediate roles and long-term capacity
        </h2>

        <div className="-mx-1 mt-8 flex flex-wrap justify-center gap-2 sm:mt-10">
          {SERVICES.map((service) => {
            const isActive = active === service;
            return (
              <button
                key={service}
                type="button"
                onClick={() => setActive(service)}
                className={`rounded-full px-3.5 py-2 text-[13px] transition-colors sm:px-4 sm:text-sm ${
                  isActive
                    ? "font-semibold shadow-sm"
                    : "bg-white font-medium text-[#3d4a5c] ring-1 ring-[#E6E9EF] hover:bg-[#FAFBFD]"
                }`}
                style={
                  isActive
                    ? { backgroundColor: TALENT_HOME.primary, color: TALENT_HOME.accent }
                    : undefined
                }
              >
                {service}
              </button>
            );
          })}
        </div>

        <div className="mx-auto mt-8 max-w-2xl text-center sm:mt-10">
          <h3 className="text-xl font-semibold text-[var(--ink)] sm:text-[22px]">{copy.heading}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#52525b] sm:text-base">{copy.description}</p>
          <div className="mt-6 flex justify-center">
            <PrimaryCtaLink href="/contact#talent" color={TALENT_HOME.primary} textColor={TALENT_HOME.accent}>
              Discuss This Talent Solution
            </PrimaryCtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
