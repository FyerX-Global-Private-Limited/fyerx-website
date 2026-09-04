"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TECH_HOME } from "@/lib/technology-home-palette";

const WORDS = [
  { w: "MODERNISE", bg: "#EEF0FA", dot: "#20287A", text: "#20287A" },
  { w: "CONNECT", bg: "#E4E8F8", dot: "#4B5FDB", text: "#181E5C" },
  { w: "AUTOMATE", bg: "#EEF0FA", dot: "#3D4A8C", text: "#20287A" },
  { w: "SCALE", bg: "#E4E8F8", dot: "#20287A", text: "#181E5C" },
] as const;

const ROTATE_MS = 2500;

export default function TechBuiltToSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const { w, bg, dot, text } = WORDS[index];

  return (
    <section
      className="overflow-x-clip bg-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <style>{`
        @keyframes techClosingWordIn {
          from { opacity: 0; transform: translateY(0.15em); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="mx-auto max-w-[1360px] text-center">
        <div className="flex justify-center">
          <Image
            src="/images/talent/centericons.svg"
            alt=""
            width={399}
            height={74}
            unoptimized
            className="h-[32px] w-auto sm:h-[40px] md:h-[48px] lg:h-[56px]"
          />
        </div>

        <h2 className="mt-3 text-[clamp(1.5rem,5.5vw,3.5rem)] font-medium leading-[1.12] tracking-[-0.02em] text-[var(--ink)] sm:mt-5 sm:leading-[1.2] lg:mt-[20px]">
          Built to{" "}
          <span
            className="inline-flex h-[1.22em] -translate-y-[0.06em] items-center rounded-full pl-[0.4em] pr-[0.48em] align-middle transition-colors duration-300"
            style={{ backgroundColor: bg }}
          >
            <span
              key={w}
              className="inline-flex items-center gap-[0.22em] leading-none"
              style={{ color: text, animation: "techClosingWordIn 0.3s ease" }}
            >
              <span
                className="h-[0.27em] w-[0.27em] shrink-0 rounded-full"
                style={{ backgroundColor: dot }}
                aria-hidden="true"
              />
              <span className="leading-none">{w}</span>
            </span>
          </span>
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-[1.5] text-[#3d4a5c] sm:mt-5 sm:text-[15px] lg:mt-[26px] lg:text-[20px]">
          From enterprise platforms to cloud-native products, FyerX brings the
          strategy, engineering and delivery coordination required to move
          critical priorities forward.
        </p>

        <div className="mt-5 flex w-full flex-col items-center justify-center gap-3 sm:mt-[30px] sm:w-auto sm:flex-row sm:gap-[22px]">
          <PrimaryCtaLink
            href="#approach"
            className="w-full max-w-[300px] justify-center sm:w-auto"
            color={TECH_HOME.primary}
            textColor={TECH_HOME.accent}
          >
            Explore Our Approach
          </PrimaryCtaLink>
        </div>
      </div>
    </section>
  );
}
