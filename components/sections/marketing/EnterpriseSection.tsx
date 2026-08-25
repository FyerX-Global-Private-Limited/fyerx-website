"use client";

import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { MARKETING_HOME } from "@/lib/marketing-home-palette";

const IMAGE_SRC =
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80";

const features = [
  "A team matched to the work",
  "Clear scope and working rhythm",
  "Flexible ways to engage",
  "Practical recommendations, not sales pressure",
] as const;

function FeatureCheck() {
  return (
    <span
      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md"
      style={{ backgroundColor: MARKETING_HOME.primary }}
    >
      <svg viewBox="0 0 24 24" width={12} height={12} fill="none" aria-hidden="true">
        <path
          d="M5 12.5l4.5 4.5L19 7.5"
          stroke="#1a1a1a"
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
    <section className="overflow-x-clip bg-white px-4 py-12 sm:px-10 sm:py-16 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div
          className="grid items-center gap-8 overflow-hidden rounded-3xl border p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14"
          style={{
            borderColor: `${MARKETING_HOME.primary}40`,
            background: `linear-gradient(135deg, ${MARKETING_HOME.paleYellow} 0%, #ffffff 45%, ${MARKETING_HOME.paleAmber} 100%)`,
          }}
        >
          <div className="order-2 min-w-0 lg:order-1">
            <h2 className="section-title-lg max-w-md">
              Bring us the brief, the bottleneck, or the{" "}
              <span className="marketing-gradient-text">big question</span>.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#52525b] sm:text-base">
              Whether you need a full marketing partner or focused support on one
              priority, we will help you identify a sensible next step.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:mt-8">
              {features.map((label) => (
                <li
                  key={label}
                  className="flex items-center gap-2.5 rounded-xl border border-[#E6E9EF] bg-white/90 px-3.5 py-2.5 text-[13px] font-medium text-[#27272a] shadow-sm"
                >
                  <FeatureCheck />
                  <span className="leading-snug">{label}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <PrimaryCtaLink
                href="/contact"
                className="text-black!"
                color={MARKETING_HOME.primary}
              >
                Talk to Our Team
              </PrimaryCtaLink>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative aspect-square w-full max-w-[360px] overflow-hidden rounded-3xl border border-white shadow-lg sm:max-w-[400px]">
              <img
                src={IMAGE_SRC}
                alt="Team collaborating on marketing plans"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
