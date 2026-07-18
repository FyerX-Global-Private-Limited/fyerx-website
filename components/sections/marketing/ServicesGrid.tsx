"use client";

import { useId, useRef, useState, type ReactNode } from "react";

/**
 * ServicesGrid — "One Partner. Every Growth Lever." services section.
 *
 * - Heading + gradient sparkle glyph + subheading + "Get Started" CTA
 * - Horizontally scrollable row of the six service cards (snap scrolling)
 * - Pagination dots (left) + prev/next circular nav buttons (right)
 *
 * Card illustrations are reused from the original three artwork variants
 * (cycled across the six cards) — swap for dedicated artwork per service
 * when available. The carousel, dots and nav buttons are data-driven off
 * SERVICE_CARDS, so they automatically expand to fit however many entries
 * exist.
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

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1L6.6 10.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeadsetIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3a7 7 0 0 0-7 7v5a2 2 0 0 0 2 2h1v-6H6v-1a6 6 0 1 1 12 0v1h-2v6h1a2 2 0 0 0 2-2v-5a7 7 0 0 0-7-7Z"
        fill="currentColor"
      />
      <path d="M8 17v1a3 3 0 0 0 3 3h1" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" fill="none" />
    </svg>
  );
}

function ZoomIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2" y="5" width="14" height="14" rx="3" fill="currentColor" />
      <path d="M17 10.2 22 7v10l-5-3.2v-3.6Z" fill="currentColor" />
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
 * Card illustrations
 * ---------------------------------------------------------------------- */

function Illustration1() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-neutral-100">
      <SparkleIcon className="absolute left-8 top-8 h-4 w-4" />
      <SparkleIcon className="absolute right-9 top-16 h-3 w-3 opacity-80" />
      <SparkleIcon className="absolute bottom-16 left-10 h-3 w-3 opacity-70" />

      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-500 shadow-lg shadow-orange-500/20">
        <HeadsetIcon className="h-10 w-10 text-white" />
      </div>

      <div className="absolute left-6 top-9 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-md ring-1 ring-black/5">
        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-500">
          <PhoneIcon className="h-2.5 w-2.5 text-white" />
        </span>
        <span className="whitespace-nowrap text-[11px] font-medium text-neutral-700">
          Calling lead
        </span>
      </div>

      <div className="absolute bottom-8 right-6 flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-md ring-1 ring-black/5">
        <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-amber-500">
          <CheckIcon className="h-2.5 w-2.5 text-white" />
        </span>
        <span className="whitespace-nowrap text-[11px] font-medium text-neutral-700">
          Booked a meeting
        </span>
      </div>
    </div>
  );
}

function Illustration2() {
  return (
    <div className="flex h-full w-full items-start justify-center bg-neutral-100 pt-4">
      <div className="w-full max-w-[240px] overflow-hidden rounded-xl bg-white p-2.5 shadow-md ring-1 ring-black/5">
        <div className="flex items-center gap-1.5">
          <SparkleIcon className="h-3.5 w-3.5" />
          <span className="text-[11px] font-semibold text-neutral-900">AI summary</span>
        </div>
        <p className="mt-0.5 truncate text-[9px] leading-snug text-neutral-400">
          Created by AI assistant. Based on last 10 activities.
        </p>

        <div className="mt-1.5 flex gap-3 border-b border-neutral-100 text-[10px]">
          <span className="border-b-2 border-neutral-900 pb-1 font-medium text-neutral-900">
            Summary
          </span>
          <span className="pb-1 text-neutral-400">Next steps</span>
        </div>

        <div className="mt-1.5 space-y-1">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[9px] text-neutral-400">Participants</span>
            <span className="truncate text-[9.5px] text-neutral-700">Helen Grimberg</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[9px] text-neutral-400">Salesperson</span>
            <span className="truncate text-[9.5px] text-neutral-700">Lucille Grady</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[9px] text-neutral-400">Deal Status</span>
            <span className="truncate text-[9.5px] text-neutral-700">In negotiation</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="flex-shrink-0 text-[9px] text-neutral-400">Recent Communication</span>
            <span className="truncate text-[9.5px] text-neutral-700">
              Lucille followed up to confirm next steps
            </span>
          </div>
          <div>
            <p className="text-[9px] text-neutral-400">Interaction Summary</p>
            <div className="mt-1 flex items-end gap-1">
              {[35, 55, 45, 70, 50, 30].map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h * 0.22}px` }}
                  className="w-2 rounded-sm bg-gradient-to-t from-blue-300 to-blue-500"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Illustration3() {
  return (
    <div className="relative h-full w-full bg-neutral-100">
      <div className="absolute right-4 top-4 w-[140px] overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black/5">
        <div className="flex items-center gap-1 border-b border-neutral-100 px-2 py-1.5">
          <ZoomIcon className="h-3 w-3 text-blue-500" />
          <span className="text-[8.5px] font-medium text-neutral-600">Zoom meeting</span>
        </div>
        <div className="flex h-16 items-center justify-center bg-gradient-to-br from-neutral-700 to-neutral-900">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-200 to-rose-300" />
        </div>
      </div>

      <div className="absolute bottom-4 left-4 w-[205px] rounded-xl bg-white p-3 shadow-md ring-1 ring-black/5">
        <div className="flex gap-3 border-b border-neutral-100 pb-1.5 text-[9.5px]">
          <span className="border-b-2 border-neutral-900 pb-1.5 font-medium text-neutral-900">
            Overview
          </span>
          <span className="pb-1.5 text-neutral-400">Transcript</span>
          <span className="pb-1.5 text-neutral-400">Participants</span>
        </div>
        <p className="mt-2 text-[10.5px] leading-snug text-neutral-600">
          mooruio is facing major challenges with fragmented sales tools
        </p>
        <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-neutral-100">
          <div className="h-1 w-2/3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600" />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * Data
 * ---------------------------------------------------------------------- */

type ServiceCard = {
  id: string;
  title: string;
  description: string;
  illustration: ReactNode;
};

const SERVICE_CARDS: ServiceCard[] = [
  {
    id: "strategy-consulting",
    title: "Strategy & Consulting",
    description:
      "We start with clarity: who you're selling to, how you're positioned, and where the gaps are before a single campaign runs.",
    illustration: <Illustration1 />,
  },
  {
    id: "demand-lead-generation",
    title: "Demand & Lead Generation",
    description:
      "ABM, LinkedIn outreach, and nurture sequences engineered to fill pipeline with qualified opportunities, not just form fills.",
    illustration: <Illustration2 />,
  },
  {
    id: "ai-marketing-automation",
    title: "AI Marketing & Automation",
    description:
      "AI-generated content, personalized ad creative, and automation agents that scale output without scaling headcount.",
    illustration: <Illustration3 />,
  },
  {
    id: "search-ai-visibility",
    title: "Search & AI Visibility",
    description:
      "SEO, AEO, and GEO to make sure you show up whether a buyer searches on Google or asks ChatGPT.",
    illustration: <Illustration1 />,
  },
  {
    id: "content-creative-branding",
    title: "Content, Creative & Branding",
    description:
      "Positioning, brand identity, and content that make your category leadership visible and credible.",
    illustration: <Illustration2 />,
  },
  {
    id: "performance-social",
    title: "Performance & Social",
    description:
      "Paid media, retargeting, and analytics that turn every rupee of ad spend into a tracked, attributable outcome.",
    illustration: <Illustration3 />,
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
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-[2.75rem]">
            One Partner. Every Growth Lever.
            <SparkleIcon className="ml-2 inline-block h-7 w-7 align-middle sm:h-8 sm:w-8" />
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-500 sm:text-lg">
            FyerX replaces a patchwork of freelancers and point solutions
            with one connected system across strategy, demand, content, and
            AI.
          </p>

          <div className="mt-8 flex flex-col items-center">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Get Started
              <span aria-hidden="true">→</span>
            </button>
            <p className="mt-3 text-sm text-neutral-500">
              Get full access. No credit card required.
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
                <div className="h-[220px] w-full overflow-hidden">
                  {card.illustration}
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
