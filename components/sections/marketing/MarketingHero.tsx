"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * MarketingHero — centered hero with avatar strip, headline containing a
 * rotating word pill (Convert / Scale / Compound / Predict / Perform),
 * subtitle, CTA pair, and corner doodle decorations.
 *
 * Font: Inter (load globally, e.g. via next/font/google) — falls back to
 * the system UI stack. The avatar faces and corner doodles are original
 * inline-SVG stand-ins drawn to the reference sizes/colors; swap them for
 * your real illustration assets under /public when available.
 */

/* ------------------------- rotating word config ------------------------- */

const WORDS = [
  { w: "Grow", bg: "#d8e9fb", dot: "#2383e2", text: "#15335a" },
  { w: "Convert", bg: "#e8e0fb", dot: "#8b5cf6", text: "#3b2a6b" },
  { w: "Scale", bg: "#d5eed3", dot: "#36a852", text: "#14351f" },
  { w: "Compound", bg: "#fdeecc", dot: "#f2a33c", text: "#6b4a12" },
  { w: "Close", bg: "#fde0d3", dot: "#ef7234", text: "#6b2f12" },
] as const;

const ROTATE_MS = 2000;

/* ------------------------------ component ------------------------------ */

export default function MarketingHero() {
  const [index, setIndex] = useState(0); // start on "Convert"

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % WORDS.length),
      ROTATE_MS
    );
    return () => clearInterval(id);
  }, []);

  const { w, bg, dot, text } = WORDS[index];

  return (
    <section
      className="relative overflow-hidden bg-white px-6 pt-6 pb-10 sm:px-10 sm:pt-8 sm:pb-14 lg:px-16 lg:pb-16"
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* keyframes for the word swap */}
      <style>{`
        @keyframes heroWordIn {
          from { opacity: 0; transform: translateY(0.18em); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="mx-auto max-w-[1360px] text-center">
        {/* Avatar strip */}
        <div className="flex justify-center">
          <Image
            src="/tophero.png"
            alt="Team and agent avatars"
            width={823}
            height={157}
            className="h-[40px] w-auto sm:h-[52px] md:h-[64px] lg:h-[92px]"
            priority
          />
        </div>

        {/* Headline with rotating pill */}
        <h1 className="mt-4 text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-[#191918] sm:mt-5 sm:text-[48px] sm:leading-[1.2] sm:tracking-[-0.03em] md:text-[64px] lg:mt-[20px] lg:text-[96px] lg:leading-[1.26] lg:tracking-[-0.04em]">
          Where B2B pipelines
          <br />
          <span
            className="inline-flex h-[1.22em] -translate-y-[0.06em] items-center gap-[0.2em] rounded-full px-[0.36em] align-middle transition-colors duration-300"
            style={{ backgroundColor: bg }}
          >
            <span
              className="h-[0.27em] w-[0.27em] rounded-full transition-colors duration-300"
              style={{ backgroundColor: dot }}
            />
            <span
              key={w}
              className="leading-none"
              style={{ color: text, animation: "heroWordIn 0.3s ease" }}
            >
              {w}
            </span>
          </span>{" "}
          faster.
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-[15px] leading-[1.5] text-[#191918] sm:mt-5 sm:text-[17px] lg:mt-[26px] lg:text-[20px]">
          Strategy, demand generation, SEO, and content that moves B2B buyers
          from first touch to signed deal.
        </p>

        {/* CTAs */}
        <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:mt-[30px] sm:w-auto sm:flex-row sm:gap-[22px]">
          <button
            type="button"
            className="inline-flex h-[44px] w-full items-center justify-center rounded-[10px] bg-[#077be8] px-7 text-[16px] font-semibold text-white transition-colors duration-150 hover:bg-[#0668c4] sm:h-[47px] sm:w-auto sm:text-[18px]"
          >
            Get Started
          </button>
          <button
            type="button"
            className="inline-flex h-[44px] w-full items-center justify-center rounded-[10px] bg-[#e7f2fd] px-7 text-[16px] font-semibold text-[#077be8] transition-colors duration-150 hover:bg-[#d8eafc] sm:h-[47px] sm:w-auto sm:text-[18px]"
          >
            Talk to Our Team
          </button>
        </div>

        {/* Reassurance line */}
        <p className="mt-3 text-[13px] text-[#5b5b58] sm:mt-4">
          Free consultation, no long-term lock-in
        </p>
      </div>

    
    </section>
  );
}
