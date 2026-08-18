"use client";

import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TALENT_HOME } from "@/lib/talent-home-palette";

const IMAGE_SRC =
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80";

const features = [
  "A clear role-scoping conversation",
  "Flexible engagement models",
  "Consistent communication and feedback loops",
  "Support from shortlist through onboarding",
];

function FeatureCheck() {
  return (
    <span
      className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
      style={{ backgroundColor: TALENT_HOME.primary }}
    >
      <svg viewBox="0 0 24 24" width={15} height={15} fill="none" aria-hidden="true">
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
    <section className="overflow-x-clip bg-white px-4 py-12 sm:px-10 sm:py-16 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-[#E6E9EF] bg-gradient-to-br from-[#F3F0FF] via-white to-[#E8F1FB] p-6 sm:p-10 lg:grid-cols-2 lg:gap-12 lg:p-14">
          <div className="order-2 min-w-0 lg:order-1">
            <h2 className="section-title-lg max-w-md">Start with the roles that are hardest to fill.</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#52525b] sm:text-base">
              Bring us the role, hiring plan, delivery timeline, or capacity gap.
              We will help define the most effective route to the right talent.
            </p>

            <ul className="mt-6 space-y-2.5 sm:mt-8">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 rounded-full border border-[#E6E9EF] bg-white/80 px-4 py-3 text-sm font-medium text-[#27272a] sm:px-5"
                >
                  <FeatureCheck />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <PrimaryCtaLink href="/talent/book-session" color={TALENT_HOME.primary} textColor={TALENT_HOME.accent}>
                Talk to Our Talent Team
              </PrimaryCtaLink>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative aspect-square w-full max-w-[360px] overflow-hidden rounded-3xl border border-white shadow-lg sm:max-w-[400px]">
              <img
                src={IMAGE_SRC}
                alt="Team collaborating on hiring plans"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
