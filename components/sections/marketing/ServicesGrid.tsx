"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";

/**
 * ServicesGrid — "Why B2B teams choose FyerX over a typical agency" section.
 *
 * - Heading + gradient sparkle glyph + subheading + "Get Started" CTA
 * - Horizontally scrollable row of six reason cards (snap scrolling)
 * - Pagination dots (left) + prev/next circular nav buttons (right)
 *
 * Card illustrations reuse the existing ai1–ai6 images under /public/avatar.
 * The carousel, dots and nav buttons are data-driven off SERVICE_CARDS, so
 * they automatically expand to fit however many entries exist.
 * -------------------------------------------------------------------------
 */

/* -------------------------------------------------------------------------
 * Icons
 * ---------------------------------------------------------------------- */

function SparkleIcon({ className = "" }: { className?: string }) {
  const gradientId = useId();
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#5B8DFF" />
          <stop offset="50%" stopColor="#B45CF2" />
          <stop offset="100%" stopColor="#F45FA0" />
        </linearGradient>
      </defs>
      <path
        d="M12 2c.6 3.6 1.4 5.6 3 7.2 1.6 1.6 3.6 2.4 7.2 3-3.6.6-5.6 1.4-7.2 3-1.6 1.6-2.4 3.6-3 7.2-.6-3.6-1.4-5.6-3-7.2-1.6-1.6-3.6-2.4-7.2-3 3.6-.6 5.6-1.4 7.2-3 1.6-1.6 2.4-3.6 3-7.2Z"
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
}

function ChevronIcon({
  direction = "right",
  className = "",
}: {
  direction?: "left" | "right";
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d={direction === "right" ? "M9 5l7 7-7 7" : "M15 5l-7 7 7 7"}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------
 * Data
 * ---------------------------------------------------------------------- */

type ServiceCard = {
  id: string;
  title: string;
  description: string;
  alt: string;
  image: string;
};

const SERVICE_CARDS: ServiceCard[] = [
  {
    id: "one-team-not-five-vendors",
    title: "One team, not five vendors",
    description:
      "Strategy, content, SEO, and automation come from one team you can hold accountable, instead of juggling separate vendors yourself.",
    alt: "One team, not five vendors — FyerX B2B marketing",
    image: "/avatar/ai1.avif",
  },
  {
    id: "built-for-longer-sales-cycles",
    title: "Built for longer sales cycles",
    description:
      "Our approach is built around how B2B buyers actually decide, not quick-conversion tactics borrowed from consumer marketing.",
    alt: "Built for longer sales cycles — FyerX B2B marketing",
    image: "/avatar/ai2.avif",
  },
  {
    id: "reporting-tied-to-revenue",
    title: "Reporting tied to revenue",
    description:
      "Every campaign is measured against pipeline and closed deals, so you know what's actually working, not just what looks good on a dashboard.",
    alt: "Reporting tied to revenue — FyerX B2B marketing",
    image: "/avatar/ai3.avif",
  },
  {
    id: "ai-where-it-helps-people-where-it-matters",
    title: "AI where it helps, people where it matters",
    description:
      "We use AI to move faster on research and drafts, but every piece of work is reviewed by our team before it reaches your audience.",
    alt: "AI where it helps, people where it matters — FyerX B2B marketing",
    image: "/avatar/ai4.avif",
  },
  {
    id: "no-rigid-annual-contracts",
    title: "No rigid annual contracts",
    description:
      "Engagements scale up or down as your pipeline needs change, without locking you into a fixed yearly plan.",
    alt: "No rigid annual contracts — FyerX B2B marketing",
    image: "/avatar/ai5.avif",
  },
  {
    id: "a-team-that-stays-close-to-the-work",
    title: "A team that stays close to the work",
    description:
      "You get a marketing team that understands your business and stays involved as things evolve, not a rotating cast of account handlers.",
    alt: "A team that stays close to the work — FyerX B2B marketing",
    image: "/avatar/ai6.avif",
  },
];

/* -------------------------------------------------------------------------
 * Component
 * ---------------------------------------------------------------------- */

export default function ServicesGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getStep = () => {
    const el = scrollRef.current;
    if (!el) return 320;
    const card = el.querySelector<HTMLElement>("[data-card]");
    return card ? card.offsetWidth + 20 : 320;
  };

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * getStep(), behavior: "smooth" });
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const step = getStep();
    const index = Math.round(el.scrollLeft / step);
    setActiveIndex(Math.max(0, Math.min(index, SERVICE_CARDS.length - 1)));
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[46px] font-medium leading-[1.12] tracking-[-0.02em] text-[var(--ink)]">
            Why B2B teams choose FyerX over a typical agency
            <SparkleIcon className="ml-2 inline-block h-7 w-7 align-middle sm:h-8 sm:w-8" />
          </h2>

          <div className="mt-8 flex flex-col items-center">
            <PrimaryCtaLink href="/contact">Get Started</PrimaryCtaLink>
            <p className="mt-3 text-sm text-neutral-500">
              Get full access, no commitment required
            </p>
          </div>
        </div>

        {/* Scrollable cards */}
        <div className="relative mt-14 sm:mt-16">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {SERVICE_CARDS.map((card) => (
              <article
                key={card.id}
                data-card
                className="w-[85%] flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-neutral-200 bg-white sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
              >
                <div className="relative h-[220px] w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-neutral-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination dots + nav arrows */}
          <div className="mt-6 flex items-center justify-between px-1">
            <div className="flex items-center gap-1.5">
              {SERVICE_CARDS.map((card, index) => (
                <span
                  key={card.id}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-4 bg-neutral-900"
                      : "w-1.5 bg-neutral-300"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => scrollByCard(-1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 shadow-sm transition-colors hover:bg-neutral-50"
              >
                <ChevronIcon direction="left" className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => scrollByCard(1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 shadow-sm transition-colors hover:bg-neutral-50"
              >
                <ChevronIcon direction="right" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
