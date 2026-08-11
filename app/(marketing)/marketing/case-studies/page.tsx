import Link from "next/link";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { MARKETING_CASE_STUDIES } from "@/data/marketing-case-studies";

export default function CaseStudiesPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#1F5C99]">
            Case studies
          </p>
          <h1 className="section-heading mt-3">Real results from B2B marketing engagements</h1>
          <p className="mt-4 text-base leading-relaxed text-[#5a5f6b]">
            Explore how FyerX Marketing helps SaaS, manufacturing, financial services, and
            professional services teams build pipeline with clearer strategy and measurable
            outcomes.
          </p>
          <PrimaryCtaLink href="/contact" className="mt-8 text-black!" color="#FFC900">
            Get Started
          </PrimaryCtaLink>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {MARKETING_CASE_STUDIES.map((study) => (
            <Link
              key={study.slug}
              href={`/marketing/case-studies/${study.slug}`}
              className="group rounded-[24px] border border-[#E6E9EF] bg-[#F6F7FB] p-8 transition-all hover:border-[#1F5C99]/30 hover:shadow-[0_16px_40px_-24px_rgba(11,46,89,0.25)]"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-sm"
                  style={{ backgroundColor: study.accentColor }}
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5a5f6b]">
                  {study.label} · {study.clientName}
                </span>
              </div>
              <p className="mt-1 text-[11px] font-medium text-[#5a5f6b]">{study.categoryLabel}</p>
              <h2 className="mt-4 text-xl font-semibold leading-snug text-[var(--ink)] group-hover:text-[#0B2E59]">
                {study.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#5a5f6b]">{study.summary}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1F5C99]">
                View case study
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
