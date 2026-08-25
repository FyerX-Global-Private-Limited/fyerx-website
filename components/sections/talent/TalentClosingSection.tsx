"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TALENT_HOME } from "@/lib/talent-home-palette";

const WORDS = [
  { w: "Find", bg: "#F0FAF2", dot: "#11551C", text: "#0d4216" },
  { w: "Assess", bg: "#EEF6EF", dot: "#36a852", text: "#14351f" },
  { w: "Deploy", bg: "#E8F5EA", dot: "#6fd88a", text: "#11551C" },
  { w: "Scale", bg: "#F0FAF2", dot: "#0d4216", text: "#0d4216" },
  { w: "Retain", bg: "#EEF6EF", dot: "#36a852", text: "#14351f" },
] as const;

const ROTATE_MS = 2500;

export default function TalentClosingSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const { w, bg, dot, text } = WORDS[index];

  return (
    <section
      className="overflow-x-clip bg-white px-6 pt-6 pb-10 sm:px-10 sm:pt-8 sm:pb-14 lg:px-16 lg:pb-16"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <style>{`
        @keyframes closingWordIn {
          from { opacity: 0; transform: translateY(0.15em); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="mx-auto max-w-[1360px] text-center">
        <div className="flex justify-center">
          <Image
            src="/tophero.png"
            alt="Team avatars"
            width={823}
            height={157}
            className="h-[40px] w-auto sm:h-[52px] md:h-[64px] lg:h-[92px]"
          />
        </div>

        <h2 className="mt-4 text-[clamp(1.625rem,7vw,3.5rem)] font-medium leading-[1.12] tracking-[-0.02em] text-[var(--ink)] sm:mt-5 sm:leading-[1.2] lg:mt-[20px]">
          Hiring built to{" "}
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
              style={{ color: text, animation: "closingWordIn 0.3s ease" }}
            >
              {w}
            </span>
          </span>
          .
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.5] text-[#3d4a5c] sm:mt-5 sm:text-[17px] lg:mt-[26px] lg:text-[20px]">
          Contract staffing, RPO, permanent hiring, and specialist technology
          recruitment for businesses that need the right people without
          unnecessary hiring friction.
        </p>

        <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:mt-[30px] sm:w-auto sm:flex-row sm:gap-[22px]">
          <PrimaryCtaLink
            href="/contact"
            className="w-full max-w-[300px] justify-center sm:w-auto"
            color={TALENT_HOME.primary}
            textColor={TALENT_HOME.accent}
          >
            Contact Us
          </PrimaryCtaLink>
        </div>

        <p className="mt-3 text-[13px] text-[#676879] sm:mt-4">
          Start with the role, urgency, and outcome you need. We will recommend
          the engagement model that fits.
        </p>
      </div>
    </section>
  );
}
