import Link from "next/link";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import type { TalentCaseStudy } from "@/data/talent-case-studies";

function CaseStudyHero({ study }: { study: TalentCaseStudy }) {
  return (
    <section className="border-b border-[#E6E9EF] bg-[#F6F7FB]">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
        <Link
          href="/talent/case-studies"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#11551C] hover:text-[#0d4216]"
        >
          <span aria-hidden="true">←</span>
          All case studies
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="rounded-md bg-white px-3 py-1 text-xs font-semibold text-[var(--ink)] ring-1 ring-black/5">
            {study.label}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5a5f6b]">
            {study.clientName} · {study.categoryLabel}
          </span>
        </div>

        <h1 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-tight text-[var(--ink)] sm:text-4xl lg:text-[2.75rem]">
          {study.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5a5f6b] sm:text-lg">
          {study.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {study.services.map((service) => (
            <span
              key={service}
              className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#3d4a5c] ring-1 ring-[#E6E9EF]"
            >
              {service}
            </span>
          ))}
        </div>

        {study.roleChips && study.roleChips.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {study.roleChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full bg-[#11551C]/10 px-3 py-1.5 text-xs font-medium text-[#11551C]"
              >
                {chip}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function MetricsStrip({ study }: { study: TalentCaseStudy }) {
  return (
    <section className="border-b border-[#E6E9EF] bg-white">
      <div className="mx-auto grid max-w-4xl grid-cols-1 divide-y divide-[#EEF1F6] px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-10">
        {study.metrics.map((metric) => (
          <div key={metric.label} className="py-8 text-center sm:py-10">
            <p className="text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
              {metric.value}
            </p>
            <p className="mt-2 text-sm font-medium text-[#5a5f6b]">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CaseStudyBody({ study }: { study: TalentCaseStudy }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#11551C]">
              The challenge
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#3d4a5c]">{study.challenge}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#11551C]">
              Our approach
            </h2>
            <ul className="mt-4 space-y-4">
              {study.approach.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-[#3d4a5c]">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#11551C]"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-[24px] border border-[#E6E9EF] bg-[#F6F7FB] p-8 sm:p-10">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#11551C]">
            Results
          </h2>
          <ul className="mt-5 space-y-3">
            {study.results.map((item) => (
              <li key={item} className="text-base leading-relaxed text-[#3d4a5c]">
                {item}
              </li>
            ))}
          </ul>

          {study.dataStatus && (
            <p className="mt-8 text-xs leading-relaxed text-[#8b8fa3] italic">
              {study.dataStatus}
            </p>
          )}
        </div>

        <div className="mt-16 flex flex-col items-start gap-4 rounded-[24px] bg-[#11551C] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Need project-ready talent on your timeline?
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">
              Talk to our talent team about contract staffing, permanent hiring, or specialist
              search across technology roles.
            </p>
          </div>
          <PrimaryCtaLink href="/talent/book-session" className="shrink-0" color="#9EEBAA" textColor="#11551C">
            Explore Talent Solutions
          </PrimaryCtaLink>
        </div>
      </div>
    </section>
  );
}

export default function CaseStudyDetail({ study }: { study: TalentCaseStudy }) {
  return (
    <>
      <CaseStudyHero study={study} />
      <MetricsStrip study={study} />
      <CaseStudyBody study={study} />
    </>
  );
}
