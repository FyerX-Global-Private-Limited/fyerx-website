import Link from "next/link";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TECHNOLOGY_CASE_STUDIES } from "@/data/technology-case-studies";
import { TECH_HOME } from "@/lib/technology-home-palette";

export default function TechnologyCaseStudiesPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-2xl">
          <p
            className="text-sm font-semibold uppercase tracking-[0.14em]"
            style={{ color: TECH_HOME.primary }}
          >
            Case studies
          </p>
          <h1 className="section-heading mt-3">
            Delivery behind critical{" "}
            <span className="tech-gradient-text">business systems</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#5a5f6b]">
            Explore how FyerX supports enterprise platforms, digital transformation,
            data and AI, cloud operations and advisory programmes.
          </p>
          <PrimaryCtaLink
            href="/technology#contact"
            className="mt-8"
            color={TECH_HOME.primary}
            textColor={TECH_HOME.accent}
          >
            Talk to Our Team
          </PrimaryCtaLink>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {TECHNOLOGY_CASE_STUDIES.map((study) => (
            <Link
              key={study.slug}
              href={`/technology/case-studies/${study.slug}`}
              className="group rounded-[24px] border border-[#E6E9EF] bg-[#F6F7FB] p-8 transition-all hover:shadow-[0_16px_40px_-24px_rgba(32,40,122,0.25)]"
              style={{ ["--hover-border" as string]: `${TECH_HOME.primary}4D` }}
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
              <h2
                className="mt-4 text-xl font-semibold leading-snug text-[var(--ink)] transition-colors group-hover:text-[#20287A]"
              >
                {study.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#5a5f6b]">{study.summary}</p>
              <span
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: TECH_HOME.primary }}
              >
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
