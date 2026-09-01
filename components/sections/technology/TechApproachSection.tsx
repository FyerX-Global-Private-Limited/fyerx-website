"use client";

import Image from "next/image";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TECH_HOME } from "@/lib/technology-home-palette";

const BULLETS = [
  "Business context before platform decisions",
  "Architecture and delivery aligned from the outset",
  "Clear governance, documentation and decision visibility",
  "Specialist capability aligned to programme needs",
];

export default function TechApproachSection() {
  return (
    <section id="approach" className="w-full scroll-mt-[80px] overflow-x-clip bg-white">
      <div className="mx-auto w-full max-w-[1400px]">
        <div
          className="relative rounded-[24px] sm:rounded-[32px]"
          style={{
            border: `1px solid ${TECH_HOME.paleAlt}`,
            background: "linear-gradient(135deg, #EEF0FA 0%, #F6F7FB 50%, #E4E8F8 100%)",
          }}
        >
          <div className="grid items-center gap-4 sm:gap-6 md:grid-cols-2 md:gap-8">
            <div className="px-4 py-6 sm:px-12 sm:py-16 lg:pl-16">
              <span
                className="inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium"
                style={{ backgroundColor: "rgba(255,255,255,0.85)", color: TECH_HOME.primary }}
              >
                The FyerX Approach
              </span>

              <h2 className="section-title-lg mt-4 text-[var(--ink)] sm:mt-8">
                A delivery partner that stays close to the{" "}
                <span className="tech-gradient-text">outcome</span>.
              </h2>

              <p className="mt-3 max-w-md text-sm font-medium leading-relaxed text-[#52525b] sm:mt-6">
                Programmes lose value when business priorities, architecture and
                delivery operate in isolation. FyerX brings them together through
                one accountable engagement model.
              </p>

              <ul className="mt-4 space-y-2 sm:mt-6 sm:space-y-2.5">
                {BULLETS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#3d4a5c]">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: TECH_HOME.primary }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 sm:mt-8">
                <PrimaryCtaLink
                  href="#contact"
                  className="w-full justify-center sm:w-auto"
                  color={TECH_HOME.primary}
                  textColor={TECH_HOME.accent}
                >
                  Start a Conversation
                </PrimaryCtaLink>
              </div>
            </div>

            <div className="relative flex min-h-[180px] items-center justify-center px-4 pb-5 sm:min-h-[220px] sm:px-6 sm:pb-8 md:min-h-[380px] md:pr-8">
              <Image
                src="/images/talent/fyerxopenrole.svg"
                alt="Delivery dashboard showing programme ownership and progress"
                width={440}
                height={371}
                unoptimized
                className="h-auto w-full max-w-[320px] select-none sm:max-w-[440px]"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
