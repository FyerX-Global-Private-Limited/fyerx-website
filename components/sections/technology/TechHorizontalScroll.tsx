"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { TechScrollCard } from "@/data/technology-home";
import { TECH_HOME } from "@/lib/technology-home-palette";

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

export default function TechHorizontalScroll({ cards }: { cards: TechScrollCard[] }) {
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
    setActiveIndex(Math.max(0, Math.min(index, cards.length - 1)));
  };

  return (
    <div className="relative mt-6 sm:mt-10 lg:mt-14">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 sm:gap-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((card) => (
          <article
            key={card.id}
            data-card
            className="w-[85%] flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-[#E6E9EF] bg-white sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
          >
            <div className="relative h-[160px] w-full overflow-hidden sm:h-[190px] lg:h-[220px]" style={{ backgroundColor: TECH_HOME.pale }}>
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw"
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="text-[15px] font-semibold text-neutral-900 sm:text-base">{card.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-500 sm:mt-2">{card.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between px-1 sm:mt-6">
        <div className="flex items-center gap-1.5">
          {cards.map((card, index) => (
            <span
              key={card.id}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-4" : "w-1.5 bg-neutral-300"
              }`}
              style={index === activeIndex ? { backgroundColor: TECH_HOME.primary } : undefined}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollByCard(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border text-white shadow-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: TECH_HOME.primary, borderColor: TECH_HOME.primary }}
          >
            <ChevronIcon direction="left" className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollByCard(1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border text-white shadow-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: TECH_HOME.primary, borderColor: TECH_HOME.primary }}
          >
            <ChevronIcon direction="right" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
