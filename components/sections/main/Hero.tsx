"use client";

import { useState } from "react";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";

const BRAND = {
  marketing: "#FFC900",
  talent: "#11551C",
  technology: "#20287A",
  home: "#86013A",
} as const;

const pillars: {
  label: string;
  video: string;
  brandColor: string;
  activeText: string;
  checkText: string;
}[] = [
  {
    label: "Technology",
    video: "/marketing-video.mp4",
    brandColor: BRAND.technology,
    activeText: BRAND.technology,
    checkText: "#ffffff",
  },
  {
    label: "Talent",
    video: "/talent.mp4",
    brandColor: BRAND.talent,
    activeText: BRAND.talent,
    checkText: "#ffffff",
  },
  {
    label: "Marketing",
    video: "/marketing-video.mp4",
    brandColor: BRAND.marketing,
    activeText: "#111111",
    checkText: "#111111",
  },
  {
    label: "Learning",
    video: "/whowe.mp4",
    brandColor: BRAND.home,
    activeText: BRAND.home,
    checkText: "#ffffff",
  },
];

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);

  return (
    <section className="home-section relative w-full bg-white font-calibri">
      <div className="section-shell section-shell--wide">
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:gap-12">
          <div className="order-2 flex w-full min-w-0 flex-col justify-start text-left lg:order-1 lg:max-w-[23rem] lg:shrink-0 lg:pt-4">
            <h1 className="text-balance text-[clamp(1.375rem,5.5vw,2.25rem)] font-medium leading-[1.2] tracking-[-0.03em] text-black">
              You{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #730031 0%, #CC0057 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                focus on growth.
              </span>
              <br />
              We handle execution.
            </h1>

            <p className="mt-4 max-w-none text-[clamp(0.875rem,3.5vw,0.9375rem)] leading-relaxed text-black sm:mt-5 lg:max-w-[44ch]">
              The people, skills, and support to turn plans into progress.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:flex sm:flex-wrap lg:max-w-[23rem]">
              {pillars.map((pillar, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={pillar.label}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`inline-flex h-9 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full px-3 text-[13px] transition-all duration-200 sm:h-8 sm:w-auto sm:justify-start sm:px-3.5 sm:text-sm ${
                      isActive ? "font-medium shadow-sm" : "bg-[#f2f3f5] font-normal text-slate"
                    }`}
                    style={
                      isActive
                        ? {
                            backgroundColor: `${pillar.brandColor}1F`,
                            color: pillar.activeText,
                          }
                        : undefined
                    }
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = `${pillar.brandColor}1F`;
                        e.currentTarget.style.color = pillar.activeText;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = "";
                        e.currentTarget.style.color = "";
                      }
                    }}
                  >
                    {isActive && (
                      <span
                        className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                        style={{ backgroundColor: pillar.brandColor, color: pillar.checkText }}
                      >
                        <CheckIcon />
                      </span>
                    )}
                    {pillar.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 sm:mt-6">
              <PrimaryCtaLink href="#contact" color={BRAND.home} className="w-full justify-center sm:w-fit">
                Get Started
              </PrimaryCtaLink>
              <p className="mt-3 text-xs leading-relaxed text-slate">
                Confidential consultation · Custom to your business
              </p>
            </div>
          </div>

          <div className="relative order-1 aspect-[4/3] w-full min-w-0 flex-1 overflow-hidden rounded-2xl sm:aspect-[16/10] lg:order-2 lg:aspect-auto lg:min-h-[26rem] lg:rounded-tl-[28px] lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-none">
            {pillars.map((pillar, i) => (
              <video
                key={pillar.label}
                src={pillar.video}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                  active === i ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
