"use client";

import Image from "next/image";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TALENT_HOME } from "@/lib/talent-home-palette";

export default function CampaignsSection() {
  return (
    <section className="w-full overflow-x-clip bg-white">
      <div className="mx-auto w-full max-w-[1400px]">
        <div
          className="relative rounded-[24px] border border-[#C5E8CA] sm:rounded-[32px]"
          style={{ background: "linear-gradient(135deg, #EEF6EF 0%, #F0FAF2 50%, #E8F5EA 100%)" }}
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="px-6 py-10 sm:px-12 sm:py-16 lg:pl-16">
              <span
                className="inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium"
                style={{ backgroundColor: "rgba(255,255,255,0.85)", color: TALENT_HOME.primary }}
              >
                FyerX Talent
              </span>

              <h2 className="section-title-lg mt-6 text-[var(--ink)] sm:mt-8">
                A talent partner that understands the pressure behind an{" "}
                <span className="talent-gradient-text">open role</span>.
              </h2>

              <p className="mt-4 max-w-sm text-sm font-medium leading-relaxed text-[#52525b] sm:mt-6">
                When a role stays open, projects slow, teams stretch, and client
                commitments get harder. FyerX Talent brings structure, specialist
                sourcing, and clear ownership to the hiring work that needs to move.
              </p>

              <div className="mt-8">
                <PrimaryCtaLink
                  href="/contact#talent"
                  className="w-full justify-center sm:w-auto"
                  color={TALENT_HOME.primary}
                  textColor={TALENT_HOME.accent}
                >
                  Contact Us
                </PrimaryCtaLink>
              </div>
            </div>

            <div className="relative flex min-h-[280px] items-center justify-center px-6 pb-10 md:min-h-[380px] md:pb-8 md:pr-8">
              <Image
                src="/updatedtalentimage/section9.webp"
                alt="Hiring pipeline dashboard showing role scoping, shortlist, and interviews"
                width={440}
                height={371}
                unoptimized
                className="h-auto w-full max-w-[440px] select-none"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
