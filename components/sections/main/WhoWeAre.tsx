import Image from "next/image";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";

interface CapabilityMetric {
  value: string;
  label: string;
  sublabel: string;
}

interface UseCaseCard {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  buttonColor: string;
  buttonTextColor?: string;
  cardBg: string;
  cardBorder: string;
  imageBg: string;
  metricsBg: string;
  metricCardBg: string;
  metricValueColor: string;
  metrics: CapabilityMetric[];
}

const CARDS: UseCaseCard[] = [
  {
    title: "Technology",
    description:
      "Modernise systems and unlock new capability through platforms, cloud, data, AI, and transformation.",
    href: "/technology",
    image: "/updatedmainpage/sec-technology.webp",
    imageAlt: "Technology platform overview",
    ctaLabel: "Explore Technology",
    buttonColor: "#20287A",
    cardBg: "#EEF0FA",
    cardBorder: "#20287A14",
    imageBg: "#EEF0FA",
    metricsBg: "#E4E9F8",
    metricCardBg: "#F3F6FC",
    metricValueColor: "#20287A",
    metrics: [
      { value: "99.9%", label: "System Reliability", sublabel: "Built for scale" },
      { value: "2.8x", label: "Faster Deployment", sublabel: "Accelerate delivery" },
      { value: "78%", label: "Automation Rate", sublabel: "Across workflows" },
    ],
  },
  {
    title: "Talent",
    description:
      "Access the talent and hiring support needed to build capable teams with confidence.",
    href: "/talent",
    image: "/updatedmainpage/sec-talent.webp",
    imageAlt: "Talent workspace overview",
    ctaLabel: "Explore Talent",
    buttonColor: "#11551C",
    cardBg: "#EEF6EF",
    cardBorder: "#11551C14",
    imageBg: "#EEF6EF",
    metricsBg: "#E0EFE4",
    metricCardBg: "#F2F9F4",
    metricValueColor: "#11551C",
    metrics: [
      { value: "2,350+", label: "Expert Professionals", sublabel: "Across our Network" },
      { value: "92%", label: "Skill Match Rate", sublabel: "For better outcomes" },
      { value: "18%", label: "Avg. Time to hire", sublabel: "Faster talent access" },
    ],
  },
  {
    title: "Marketing",
    description:
      "Build demand, strengthen your brand, and turn marketing activity into measurable business growth.",
    href: "/marketing",
    image: "/updatedmainpage/sec-marketing.webp",
    imageAlt: "Marketing performance overview",
    ctaLabel: "Explore Marketing",
    buttonColor: "#FFC900",
    buttonTextColor: "#111111",
    cardBg: "#FFF9EF",
    cardBorder: "#FFC9002E",
    imageBg: "#FFF9EF",
    metricsBg: "#FFF5D6",
    metricCardBg: "#FFFCF5",
    metricValueColor: "#92400E",
    metrics: [
      { value: "124", label: "Active Campaigns", sublabel: "Across channels" },
      { value: "472K", label: "Qualified Leads", sublabel: "+24% vs last year" },
      { value: "6.8%", label: "Conversion Rate", sublabel: "+1.4% vs last year" },
    ],
  },
];

function MetricsRow({
  metrics,
  backgroundColor,
  cardBackgroundColor,
  valueColor,
}: {
  metrics: CapabilityMetric[];
  backgroundColor: string;
  cardBackgroundColor: string;
  valueColor: string;
}) {
  return (
    <div
      className="rounded-2xl p-1.5 sm:p-2"
      style={{ backgroundColor }}
    >
      <div className="grid grid-cols-3 gap-1 sm:gap-1.5">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex min-h-[4.75rem] min-w-0 flex-col justify-start rounded-xl px-1.5 py-2.5 sm:min-h-[5rem] sm:px-2 sm:py-3"
            style={{ backgroundColor: cardBackgroundColor }}
          >
            <p
              className="text-left text-[12px] font-bold leading-none tracking-[-0.02em] sm:text-[14px]"
              style={{ color: valueColor }}
            >
              {metric.value}
            </p>
            <p className="mt-1 text-left text-[9px] font-semibold leading-[1.35] text-[#111111] sm:mt-1.5 sm:text-[10px]">
              {metric.label}
            </p>
            <p className="mt-0.5 text-left text-[8px] font-normal leading-[1.35] text-[#9CA3AF] sm:text-[9px]">
              {metric.sublabel}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseCard({ card }: { card: UseCaseCard }) {
  return (
    <article
      className="flex h-full flex-col overflow-hidden rounded-[28px] p-5 sm:p-8"
      style={{ backgroundColor: card.cardBg, border: `1px solid ${card.cardBorder}` }}
    >
      <div
        className="relative aspect-[1572/1120] w-full overflow-hidden rounded-2xl"
        style={{ backgroundColor: card.imageBg }}
      >
        <Image
          src={card.image}
          alt={card.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-contain object-center"
        />
      </div>

      <div className="-mx-1 mt-5 sm:-mx-2 sm:mt-5">
        <MetricsRow
          metrics={card.metrics}
          backgroundColor={card.metricsBg}
          cardBackgroundColor={card.metricCardBg}
          valueColor={card.metricValueColor}
        />
      </div>

      <h3 className="mt-5 text-2xl font-bold leading-[1.15] tracking-[-0.02em] text-[#111111] sm:mt-6 sm:text-[28px]">
        {card.title}
      </h3>

      <p className="mt-2.5 flex-1 text-sm font-normal leading-[1.6] text-[#5A5F6B] sm:mt-3 sm:text-[15px]">
        {card.description}
      </p>

      <div className="mt-6">
        <PrimaryCtaLink
          href={card.href}
          color={card.buttonColor}
          textColor={card.buttonTextColor}
          variant="nav"
          style={{ padding: "0.875rem 1.5rem", fontSize: "15px", borderRadius: "9999px" }}
          className="h-12 w-full justify-center gap-2 font-semibold"
        >
          {card.ctaLabel}
        </PrimaryCtaLink>
      </div>
    </article>
  );
}

const WhoWeAre: React.FC = () => {
  return (
    <section className="home-section w-full bg-white font-calibri">
      <div className="section-shell">
        <div className="section-header section-header--center">
          <h2 className="section-heading">
            <span className="text-black">Integrated Capabilities, </span>
            <span className="brand-gradient-text">Clear Business Impact</span>
          </h2>

          <p className="section-subheading section-subheading--wide">
            Engage the expertise you need today, with room to extend support as
            requirements change.
          </p>
        </div>

        <div className="section-body grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-6">
          {CARDS.map((card) => (
            <CaseCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
