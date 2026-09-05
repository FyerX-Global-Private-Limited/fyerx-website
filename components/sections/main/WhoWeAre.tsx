import Image from "next/image";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";

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
}

const CARDS: UseCaseCard[] = [
  {
    title: "Technology",
    description:
      "Modernise systems and unlock new capability through platforms, cloud, data, AI, and transformation.",
    href: "#",
    image: "/images/main/technology.webp",
    imageAlt: "Technology services screenshot",
    ctaLabel: "Explore Technology",
    buttonColor: "#20287A",
    cardBg: "#EEF0FA",
    cardBorder: "#20287A24",
  },
  {
    title: "Talent",
    description:
      "Access the talent and hiring support needed to build capable teams with confidence.",
    href: "/talent",
    image: "/g2.webp",
    imageAlt: "Talent services screenshot",
    ctaLabel: "Explore Talent",
    buttonColor: "#11551C",
    cardBg: "#EEF6EF",
    cardBorder: "#11551C24",
  },
  {
    title: "Marketing",
    description:
      "Build demand, strengthen your brand, and turn marketing activity into measurable business growth.",
    href: "/marketing",
    image: "/g1.webp",
    imageAlt: "Marketing services screenshot",
    ctaLabel: "Explore Marketing",
    buttonColor: "#FFC900",
    buttonTextColor: "#111111",
    cardBg: "#FFFBEB",
    cardBorder: "#FFC90040",
  },
];

function CaseCard({ card }: { card: UseCaseCard }) {
  return (
    <article
      className="flex h-full flex-col rounded-2xl p-4 sm:p-6"
      style={{ backgroundColor: card.cardBg, border: `1px solid ${card.cardBorder}` }}
    >
      <div className="relative mb-6 w-full overflow-hidden rounded-xl bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] sm:mb-8">
        <Image
          src={card.image}
          alt={card.imageAlt}
          width={560}
          height={400}
          className="h-auto w-full object-cover"
        />
      </div>

      <h3 className="mt-0 text-lg font-semibold leading-snug text-gray-900">
        {card.title}
      </h3>

      <p className="mt-3 flex-1 text-[13px] leading-relaxed text-gray-600">
        {card.description}
      </p>

      <div className="mt-6 flex justify-center sm:mt-8">
        <PrimaryCtaLink
          href={card.href}
          color={card.buttonColor}
          textColor={card.buttonTextColor}
          className="h-[40px] w-full max-w-[248px] justify-center gap-2.5 whitespace-nowrap px-5 text-[14px]"
        >
          {card.ctaLabel}
        </PrimaryCtaLink>
      </div>
    </article>
  );
}

const WhoWeAre: React.FC = () => {
  return (
    <section className="home-section w-full bg-white">
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

        <div className="section-body grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <CaseCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
