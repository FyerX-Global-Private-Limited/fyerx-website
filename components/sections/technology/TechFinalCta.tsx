"use client";

import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TECH_HOME } from "@/lib/technology-home-palette";

export default function TechFinalCta() {
  return (
    <section className="overflow-x-clip bg-white">
      <div className="mx-auto max-w-[1400px]">
        <div
          className="flex flex-col items-center rounded-[24px] px-4 py-8 text-center sm:rounded-[36px] sm:px-12 sm:py-14 lg:py-20"
          style={{
            background: "linear-gradient(180deg, #EEF0FA 0%, #F6F7FB 55%, #E4E8F8 100%)",
            border: `1px solid ${TECH_HOME.paleAlt}`,
          }}
        >
          <span
            className="inline-flex rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]"
            style={{ backgroundColor: "rgba(255,255,255,0.85)", color: TECH_HOME.primary }}
          >
            Move the Priority Forward
          </span>

          <h2 className="section-title-lg mt-3 max-w-[18ch] sm:mt-5">
            Ready to move a critical{" "}
            <span className="tech-gradient-text">priority forward</span>?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#3d4a5c] sm:mt-4 sm:text-[15px] lg:text-[17px]">
            Whether you are evaluating a platform, modernising a core system or
            planning broader change, we will help you identify a practical
            starting point.
          </p>

          <div className="mt-5 flex w-full flex-col items-center justify-center gap-2.5 sm:mt-8 sm:w-auto sm:flex-row sm:gap-4">
            <PrimaryCtaLink
              href="#contact"
              className="w-full max-w-[320px] justify-center sm:w-auto"
              color={TECH_HOME.primary}
              textColor={TECH_HOME.accent}
            >
              Discuss Your Requirement
            </PrimaryCtaLink>
            <a
              href="#contact"
              className="inline-flex w-full max-w-[320px] items-center justify-center rounded-full border px-4 py-2.5 text-sm font-semibold transition-opacity hover:opacity-80 sm:w-auto sm:px-6 sm:py-3 sm:text-[15px]"
              style={{
                borderColor: TECH_HOME.primary,
                color: TECH_HOME.primary,
                backgroundColor: "rgba(255,255,255,0.7)",
              }}
            >
              Request a Current-State Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
