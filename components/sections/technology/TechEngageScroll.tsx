"use client";

import { TECH_ENGAGE_CARDS } from "@/data/technology-home";
import TechHorizontalScroll from "./TechHorizontalScroll";

export default function TechEngageScroll() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#20287A]">
            Ways to Engage
          </p>
          <h2 className="section-title-lg mt-3">
            The right level of support for the{" "}
            <span className="tech-gradient-text">priority in front of you</span>.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#52525b] sm:mt-4 sm:text-base sm:text-[17px]">
            Start with a focused assessment or engage FyerX across a broader
            delivery and support programme.
          </p>
        </div>

        <TechHorizontalScroll cards={TECH_ENGAGE_CARDS} />
      </div>
    </section>
  );
}
