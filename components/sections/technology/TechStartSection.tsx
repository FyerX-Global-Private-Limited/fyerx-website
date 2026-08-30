"use client";

import Image from "next/image";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TECH_HOME } from "@/lib/technology-home-palette";

const features = [
  "Modernise a legacy application or process",
  "Integrate fragmented systems and data",
  "Improve a platform already in use",
  "Define a roadmap or vendor strategy",
];

function FeatureCheck() {
  return (
    <span
      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md"
      style={{ backgroundColor: TECH_HOME.primary }}
    >
      <svg viewBox="0 0 24 24" width={12} height={12} fill="none" aria-hidden="true">
        <path
          d="M5 12.5l4.5 4.5L19 7.5"
          stroke={TECH_HOME.accent}
          strokeWidth={2.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function TechStartSection() {
  return (
    <section className="overflow-x-clip bg-white">
      <div className="mx-auto max-w-[1400px]">
        <div
          className="grid items-center gap-4 overflow-hidden rounded-2xl border bg-gradient-to-br from-[#EEF0FA] via-white to-[#E4E8F8] p-4 sm:gap-6 sm:rounded-3xl sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14"
          style={{ borderColor: TECH_HOME.paleAlt }}
        >
          <div className="order-2 min-w-0 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#20287A]">
              Start with the Priority
            </p>
            <h2 className="section-title-lg mt-3 max-w-md">
              Bring us the challenge{" "}
              <span className="tech-gradient-text">in front of you</span>.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#52525b] sm:mt-4 sm:text-base">
              You do not need a fully defined scope to begin. We help you assess
              the current environment, identify a practical path forward and
              choose the right engagement model.
            </p>

            <ul className="mt-4 grid grid-cols-1 gap-2 sm:mt-8 sm:grid-cols-2 sm:gap-2.5">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2.5 rounded-xl border border-[#E6E9EF] bg-white/90 px-3 py-2 text-[13px] font-medium text-[#27272a] sm:px-3.5 sm:py-2.5"
                >
                  <FeatureCheck />
                  <span className="leading-snug">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 sm:mt-7">
              <PrimaryCtaLink href="#contact" color={TECH_HOME.primary} textColor={TECH_HOME.accent}>
                Discuss Your Requirement
              </PrimaryCtaLink>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <Image
              src="/images/talent/hardesttofill.svg"
              alt="Team collaborating on a technology priority"
              width={615}
              height={476}
              unoptimized
              className="h-auto w-full max-w-[280px] select-none sm:max-w-[400px] lg:max-w-[480px]"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
