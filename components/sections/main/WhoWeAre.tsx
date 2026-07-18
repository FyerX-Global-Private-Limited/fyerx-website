import Image from "next/image";

/**
 * WhoWeAre — "What We Do" section
 *
 * A static grid of service cards (no carousel/scroll — exactly 3 cards
 * fit the lg:w-1/3 layout used elsewhere in this section).
 */

interface UseCaseCard {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
}

const CARDS: UseCaseCard[] = [
  {
    title: "Marketing",
    description:
      "Campaigns, content, and brand strategy built to drive measurable growth.",
    href: "/marketing",
    image: "/g1.avif",
    imageAlt: "Marketing services screenshot",
  },
  {
    title: "Talent",
    description:
      "Recruitment and staffing that connects businesses with the right people.",
    href: "#",
    image: "/g2.avif",
    imageAlt: "Talent services screenshot",
  },
  {
    title: "Technology",
    description:
      "Websites and digital products built to scale as your business grows.",
    href: "#",
    image: "/g3.avif",
    imageAlt: "Technology services screenshot",
  },
];

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M1.5 8h13m0 0L9 2.5M14.5 8L9 13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CaseCard({ card }: { card: UseCaseCard }) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-[#F5F6F8] p-6">
      <div className="relative w-full overflow-hidden rounded-xl bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]">
        <Image
          src={card.image}
          alt={card.imageAlt}
          width={560}
          height={400}
          className="h-auto w-full object-cover"
        />
      </div>

      <h3 className="mt-6 text-lg font-semibold leading-snug text-gray-900">
        {card.title}
      </h3>

      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-gray-600">
        {card.description}
      </p>

      <a
        href={card.href}
        className="mt-6 inline-flex h-[37px] w-full items-center justify-center gap-2 rounded-lg bg-black px-6 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-gray-800"
      >
        Get Started
        <ArrowIcon className="h-4 w-4" />
      </a>
    </article>
  );
}

const WhoWeAre: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="bg-gradient-to-r from-black to-gray-300 bg-clip-text text-center text-4xl font-semibold tracking-tight text-transparent md:text-[52px] md:leading-[1.15]">
          Use Case
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-[820px] text-center text-base leading-relaxed text-gray-600 md:text-[17px]">
          FyerX supports businesses across marketing, talent, and technology
          — helping teams move faster without juggling separate vendors.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-14">
          {CARDS.map((card) => (
            <CaseCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
