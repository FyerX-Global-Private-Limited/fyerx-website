"use client";

import { TECH_PRIORITY_CARDS } from "@/data/technology-home";
import TechHorizontalScroll from "./TechHorizontalScroll";

export default function TechPrioritiesScroll() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#20287A]">
            Business Priorities We Support
          </p>
          <h2 className="section-title-lg mt-3">
            Priorities that need a{" "}
            <span className="tech-gradient-text">clear path forward</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#52525b] sm:mt-4 sm:text-base sm:text-[17px]">
            For organisations that know the challenge but are still defining the right response.
          </p>
        </div>

        <TechHorizontalScroll cards={TECH_PRIORITY_CARDS} />
      </div>
    </section>
  );
}
