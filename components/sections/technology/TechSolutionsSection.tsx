"use client";

import Link from "next/link";
import { TECH_SOLUTIONS } from "@/data/technology-home";
import { TECH_HOME } from "@/lib/technology-home-palette";

export default function TechSolutionsSection() {
  return (
    <section className="overflow-x-clip bg-white">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#20287A]">
            Delivery for the Outcomes That Matter
          </p>
          <h2 className="section-title-lg mt-3">
            From strategy through to{" "}
            <span className="tech-gradient-text">sustained delivery</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#52525b] sm:mt-4 sm:text-base sm:text-[17px]">
            Engage FyerX for a focused initiative or a connected programme spanning
            platforms, applications, data and cloud operations.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-3">
          {TECH_SOLUTIONS.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col rounded-2xl border bg-white p-4 shadow-[0_8px_24px_-16px_rgba(32,40,122,0.18)] sm:p-5 lg:p-6"
              style={{ borderColor: `${TECH_HOME.primary}33` }}
            >
              <h3 className="text-base font-semibold leading-snug text-[var(--ink)] sm:text-lg">
                {card.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#52525b] sm:mt-3">
                {card.body}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-2.5 py-1 text-[11px] font-medium"
                    style={{
                      backgroundColor: TECH_HOME.pale,
                      color: TECH_HOME.primary,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={card.href}
                className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ color: TECH_HOME.primary }}
              >
                {card.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
