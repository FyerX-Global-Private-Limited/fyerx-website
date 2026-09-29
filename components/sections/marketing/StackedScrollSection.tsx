import Link from "next/link";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { PublicImage } from "@/components/ui/PublicImage";
import { MARKETING_HOME } from "@/lib/marketing-home-palette";
import {
  MARKETING_HOME_CASE_STUDIES,
  type CaseStudy,
  type CaseStudyMetric,
} from "@/data/marketing-case-studies";

function CaseStudyBadge({
  label,
  clientName,
  accentColor,
}: {
  label: string;
  clientName: string;
  accentColor: string;
}) {
  return (
    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[13px] font-medium text-[var(--ink)] shadow-[0_1px_2px_rgba(16,16,20,0.06)]">
      <span
        className="h-2 w-2 shrink-0 rounded-full"
        style={{ backgroundColor: accentColor }}
        aria-hidden="true"
      />
      {label} · {clientName}
    </span>
  );
}

function MetricPills({
  metrics,
  accentColor,
}: {
  metrics: CaseStudyMetric[];
  accentColor: string;
}) {
  return (
    <div className="mt-6 flex flex-wrap gap-2.5">
      {metrics.map((metric) => (
        <span
          key={metric.label}
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] shadow-[0_1px_2px_rgba(16,16,20,0.04)]"
        >
          <span className="text-[#5a5f6b]">{metric.label}</span>
          <span className="font-semibold" style={{ color: accentColor }}>
            {metric.value}
          </span>
        </span>
      ))}
    </div>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy & { imageSrc: string } }) {
  return (
    <article
      className="overflow-hidden rounded-[28px] sm:rounded-[32px]"
      style={{ backgroundColor: study.cardBg }}
    >
      <div className="grid items-start md:grid-cols-2">
        <div className="flex flex-col px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
          <CaseStudyBadge
            label={study.label}
            clientName={study.clientName}
            accentColor={study.accentColor}
          />
          <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6B7280]">
            {study.categoryLabel}
          </p>
          <h3 className="mt-3 max-w-xl text-[1.65rem] font-semibold leading-[1.15] tracking-tight text-[var(--ink)] sm:text-[1.85rem] lg:text-[2rem]">
            {study.cardTitle ?? study.title}
          </h3>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#3d4a5c]">
            {study.cardSummary ?? study.summary}
          </p>
          <MetricPills metrics={study.cardMetrics} accentColor={study.accentColor} />
          <PrimaryCtaLink
            href={`/marketing/case-studies/${study.slug}`}
            variant="nav"
            color={study.ctaBg}
            textColor={study.ctaText}
            className="mt-8"
          >
            View Case Study
          </PrimaryCtaLink>
        </div>

        <div className="px-5 pb-6 sm:px-8 sm:pb-8 md:py-8 md:pr-8 md:pl-2">
          <Link
            href={`/marketing/case-studies/${study.slug}`}
            className="block overflow-hidden rounded-[20px] sm:rounded-[24px]"
          >
            <PublicImage
              src={study.imageSrc}
              alt={`${study.clientName} case study`}
              width={1888}
              height={1676}
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function StackedScrollSection() {
  return (
    <section className="w-full overflow-x-clip bg-white">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="max-w-2xl">
          <p
            className="text-sm font-semibold uppercase tracking-[0.14em]"
            style={{ color: MARKETING_HOME.primaryDark }}
          >
            Our Work
          </p>
          <h2 className="section-heading mt-3">
            Work shaped around{" "}
            <span className="marketing-gradient-text">real business needs</span>
          </h2>
        </div>

        <div className="relative mt-8 flex flex-col gap-6 md:mt-12 md:gap-8">
          {MARKETING_HOME_CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
