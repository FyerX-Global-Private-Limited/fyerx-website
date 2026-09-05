import type { Metadata } from "next";
import Link from "next/link";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TECHNOLOGY_CASE_STUDIES } from "@/data/technology-case-studies";
import { TECH_HOME } from "@/lib/technology-home-palette";

export const metadata: Metadata = {
  title: "Delivery Blueprints | FyerX Technology",
  description:
    "Representative programme structures that show how FyerX can take a technology priority from discovery through to delivery, adoption and improvement.",
};

export default function TechnologyCaseStudiesPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="max-w-2xl min-w-0">
          <p
            className="text-sm font-semibold uppercase tracking-[0.14em]"
            style={{ color: TECH_HOME.primary }}
          >
            Delivery blueprints
          </p>
          <h1 className="section-heading mt-3">
            Delivery blueprints for{" "}
            <span className="tech-gradient-text">critical technology priorities</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#5a5f6b]">
            Six representative programme structures that show how FyerX can take a
            technology priority from discovery through to delivery, adoption and
            improvement. These are not claims of completed client work.
          </p>
          <PrimaryCtaLink
            href="/technology#contact"
            className="mt-8"
            color={TECH_HOME.primary}
            textColor={TECH_HOME.accent}
          >
            Get Started
          </PrimaryCtaLink>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {TECHNOLOGY_CASE_STUDIES.map((study) => (
            <Link
              key={study.slug}
              href={`/technology/case-studies/${study.slug}`}
              className="group min-w-0 rounded-[24px] border border-[#E6E9EF] bg-[#F6F7FB] p-7 transition-all hover:shadow-[0_16px_40px_-24px_rgba(32,40,122,0.25)] sm:p-8"
            >
              <div className="flex min-w-0 items-center gap-2">
                <span
                  className="h-2 w-2 shrink-0 rounded-sm"
                  style={{ backgroundColor: study.accentColor }}
                  aria-hidden="true"
                />
                <span className="min-w-0 text-xs font-semibold uppercase tracking-[0.12em] text-[#5a5f6b]">
                  {study.label}
                </span>
              </div>
              <p className="mt-1 text-[11px] font-medium text-[#5a5f6b]">{study.categoryLabel}</p>
              <h2 className="mt-4 text-xl font-semibold leading-snug break-words text-[var(--ink)] transition-colors group-hover:text-[#20287A]">
                {study.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#5a5f6b]">{study.summary}</p>
              <span
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: TECH_HOME.primary }}
              >
                Explore the blueprint
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
