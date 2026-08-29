"use client";

import Image from "next/image";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TALENT_HOME } from "@/lib/talent-home-palette";

const features = [
  "A clear role-scoping conversation",
  "Flexible engagement models",
  "Consistent communication and feedback loops",
  "Support from shortlist through onboarding",
];

function FeatureCheck() {
  return (
    <span
      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md"
      style={{ backgroundColor: TALENT_HOME.primary }}
    >
      <svg viewBox="0 0 24 24" width={12} height={12} fill="none" aria-hidden="true">
        <path
          d="M5 12.5l4.5 4.5L19 7.5"
          stroke={TALENT_HOME.accent}
          strokeWidth={2.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function EnterpriseSection() {
  return (
    <section className="overflow-x-clip bg-white">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-[#E6E9EF] bg-gradient-to-br from-[#F0FAF2] via-white to-[#EEF6EF] p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14">
          <div className="order-2 min-w-0 lg:order-1">
            <h2 className="section-title-lg max-w-md">
              Start with the roles that are{" "}
              <span className="talent-gradient-text">hardest to fill</span>.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#52525b] sm:text-base">
              Bring us the role, hiring plan, delivery timeline, or capacity gap.
              We will help define the most effective route to the right talent.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:mt-8">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2.5 rounded-xl border border-[#E6E9EF] bg-white/90 px-3.5 py-2.5 text-[13px] font-medium text-[#27272a]"
                >
                  <FeatureCheck />
                  <span className="leading-snug">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <PrimaryCtaLink href="/contact" color={TALENT_HOME.primary} textColor={TALENT_HOME.accent}>
                Contact Us
              </PrimaryCtaLink>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <Image
              src="/images/talent/hardesttofill.svg"
              alt="Team collaborating on hiring plans"
              width={615}
              height={476}
              unoptimized
              className="h-auto w-full max-w-[480px] select-none"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
