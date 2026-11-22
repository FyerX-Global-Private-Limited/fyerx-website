import type { CaseStudyMetric } from "@/data/marketing-case-studies";

export function CaseStudyMetricPills({
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
