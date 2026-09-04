import Link from "next/link";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import type { TechCaseStudy } from "@/data/technology-case-studies";
import { TECH_HOME } from "@/lib/technology-home-palette";

function BlueprintHero({ study }: { study: TechCaseStudy }) {
  return (
    <section className="border-b border-[#E6E9EF] bg-[#F6F7FB]">
      <div className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-20">
        <Link
          href="/technology/case-studies"
          className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80"
          style={{ color: TECH_HOME.primary }}
        >
          <span aria-hidden="true">←</span>
          All delivery blueprints
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="rounded-md bg-white px-3 py-1 text-xs font-semibold text-[var(--ink)] ring-1 ring-black/5">
            {study.label}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5a5f6b]">
            {study.categoryLabel}
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--ink)] sm:text-4xl lg:text-[2.75rem]">
          {study.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5a5f6b] sm:text-lg">
          {study.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {study.scopeChips.map((chip) => (
            <span
              key={chip}
              className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#3d4a5c] ring-1 ring-[#E6E9EF]"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScopeStrip({ study }: { study: TechCaseStudy }) {
  return (
    <section className="border-b border-[#E6E9EF] bg-white">
      <div className="mx-auto grid max-w-4xl grid-cols-1 divide-y divide-[#EEF1F6] px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-10">
        {study.programmeBlocks.map((block) => (
          <div key={block.title} className="px-0 py-8 sm:px-5 sm:py-10">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.12em]"
              style={{ color: TECH_HOME.primary }}
            >
              {block.title}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#3d4a5c]">{block.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BlueprintBody({ study }: { study: TechCaseStudy }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-14 sm:px-10 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              className="text-sm font-semibold uppercase tracking-[0.14em]"
              style={{ color: TECH_HOME.primary }}
            >
              The priority
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#3d4a5c]">{study.priority}</p>
          </div>

          <div>
            <h2
              className="text-sm font-semibold uppercase tracking-[0.14em]"
              style={{ color: TECH_HOME.primary }}
            >
              How FyerX can approach it
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#3d4a5c]">{study.approach}</p>
          </div>
        </div>

        <div className="mt-14 rounded-[24px] border border-[#E6E9EF] bg-[#F6F7FB] p-7 sm:p-10">
          <h2
            className="text-sm font-semibold uppercase tracking-[0.14em]"
            style={{ color: TECH_HOME.primary }}
          >
            What the programme can establish
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#3d4a5c]">{study.canEstablish}</p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2
              className="text-sm font-semibold uppercase tracking-[0.14em]"
              style={{ color: TECH_HOME.primary }}
            >
              Typical workstreams
            </h2>
            <ul className="mt-4 space-y-3">
              {study.workstreams.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#3d4a5c] sm:text-base">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: TECH_HOME.primary }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              className="text-sm font-semibold uppercase tracking-[0.14em]"
              style={{ color: TECH_HOME.primary }}
            >
              Typical delivery outputs
            </h2>
            <ul className="mt-4 space-y-3">
              {study.outputs.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#3d4a5c] sm:text-base">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: TECH_HOME.primary }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 text-sm leading-relaxed text-[#5a5f6b]">{study.transparencyNote}</p>

        <div
          className="mt-10 flex flex-col items-start gap-4 rounded-[24px] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10"
          style={{ backgroundColor: TECH_HOME.primary }}
        >
          <div className="min-w-0">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">{study.closingCta}</h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">
              Talk through the starting point with the FyerX technology team.
            </p>
          </div>
          <PrimaryCtaLink
            href="/technology#contact"
            className="shrink-0"
            color={TECH_HOME.accent}
            textColor={TECH_HOME.primary}
          >
            Explore the blueprint
          </PrimaryCtaLink>
        </div>
      </div>
    </section>
  );
}

export default function TechCaseStudyDetail({ study }: { study: TechCaseStudy }) {
  return (
    <>
      <BlueprintHero study={study} />
      <ScopeStrip study={study} />
      <BlueprintBody study={study} />
    </>
  );
}
