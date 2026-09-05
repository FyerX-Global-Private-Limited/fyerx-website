"use client";

import Image from "next/image";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TALENT_HOME } from "@/lib/talent-home-palette";

const CARDS: {
  title: string;
  description: string;
  icon: string;
}[] = [
  {
    title: "Defined team structure",
    description:
      "We work with your hiring or delivery lead to understand the requirement, identify the roles involved, and structure a practical team plan before profiles are shared.",
    icon: "/updatedtalentimage/section6 (4).webp",
  },
  {
    title: "Specialists aligned to the work",
    description:
      "Each pod is built around the skills, experience level, availability, work model, and delivery timeline required for the engagement.",
    icon: "/updatedtalentimage/section6 (2).webp",
  },
  {
    title: "One coordinated process",
    description:
      "FyerX manages sourcing, screening, submission, interview coordination, documentation, and onboarding across the roles involved.",
    icon: "/updatedtalentimage/section6 (3).webp",
  },
  {
    title: "Capacity that can adapt",
    description:
      "Start with the immediate requirement and add, replace, or reduce roles as the project moves through different stages.",
    icon: "/updatedtalentimage/section6 (1).webp",
  },
];

const PIPELINE = [
  "Project scope",
  "Team structure",
  "Screened specialists",
  "Deployment support",
] as const;

export default function ProjectStaffingPods() {
  return (
    <section className="home-section overflow-x-clip bg-white">
      <div className="section-shell">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-12 xl:gap-16">
          <div className="min-w-0">
            <p
              className="text-xs font-semibold uppercase tracking-[0.16em]"
              style={{ color: TALENT_HOME.primary }}
            >
              Project Staffing Pods
            </p>

            <h2 className="section-title-lg mt-3 max-w-[16ch]">
              Critical work needs the{" "}
              <span className="talent-gradient-text">right team</span>
            </h2>

            <div className="mt-4 max-w-md space-y-4 text-sm leading-relaxed text-[#52525b] sm:text-[15px]">
              <p>
                When a requirement involves more than one role, individual hiring
                can slow the project down. FyerX Talent structures focused staffing
                pods around the work, combining the relevant specialists for a
                defined project phase or capacity requirement.
              </p>
              <p>
                From new implementation work to delivery expansion, we help clients
                add coordinated technology capacity without committing to permanent
                headcount too early.
              </p>
            </div>

            <div className="mt-7 sm:mt-8">
              <PrimaryCtaLink
                href="/contact#talent"
                color={TALENT_HOME.primary}
                textColor={TALENT_HOME.accent}
              >
                Discuss a Requirement
              </PrimaryCtaLink>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {CARDS.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-[#E6E9EF] bg-white p-5 shadow-[0_1px_0_rgba(16,16,20,0.02)] transition-shadow hover:shadow-[0_12px_32px_-20px_rgba(17,85,28,0.28)] sm:p-6"
              >
                <span
                  className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl"
                  aria-hidden="true"
                >
                  <Image
                    src={card.icon}
                    alt=""
                    width={40}
                    height={40}
                    unoptimized
                    className="h-full w-full object-cover"
                  />
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-[var(--ink)] sm:text-[17px]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#52525b]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div
          className="mt-8 overflow-x-auto rounded-2xl border border-[#E6E9EF] px-4 py-3.5 sm:mt-10 sm:px-6"
          style={{ backgroundColor: TALENT_HOME.paleGreen }}
        >
          <ol className="flex min-w-max items-center gap-2 sm:min-w-0 sm:flex-wrap sm:justify-center sm:gap-x-2 sm:gap-y-2">
            {PIPELINE.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[var(--ink)] shadow-sm ring-1 ring-black/5 sm:text-[13px]">
                  <span
                    className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
                    style={{ backgroundColor: TALENT_HOME.primary }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  {step}
                </span>
                {i < PIPELINE.length - 1 ? (
                  <span
                    className="hidden text-sm font-semibold sm:inline"
                    style={{ color: TALENT_HOME.primary }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
