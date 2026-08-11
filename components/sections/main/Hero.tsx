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
    label: "Marketing",
    video: "/marketing-video.mp4",
    brandColor: BRAND.marketing,
    activeText: "#111111",
    checkText: "#111111",
  },
  {
    label: "Talent",
    video: "/talent.mp4",
    brandColor: BRAND.talent,
    activeText: BRAND.talent,
    checkText: "#ffffff",
  },
  {
    label: "Technology",
    video: "/marketing-video.mp4",
    brandColor: BRAND.technology,
    activeText: BRAND.technology,
    checkText: "#ffffff",
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
    <section className="home-section relative w-full overflow-hidden bg-white font-calibri">
      <div className="section-shell section-shell--wide">
        <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:gap-12">
        <div className="flex max-w-none flex-col justify-start text-left lg:max-w-[23rem] lg:pt-4">
          <h1
            className="tracking-[-0.03em] text-black"
            style={{ fontSize: "clamp(26px, 6vw, 36px)", lineHeight: 1.25, fontWeight: 500 }}
          >
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

          <p className="mt-5 max-w-[44ch] text-black sm:mt-7" style={{ fontSize: "clamp(14px, 3.5vw, 15px)", lineHeight: 1.5 }}>
            Where your business goals and our teams work together on one dependable partner.
          </p>

          <div className="mt-6 flex max-w-none flex-wrap gap-2 sm:mt-8 lg:max-w-[23rem]">
            {pillars.map((pillar, i) => {
              const isActive = active === i;
              return (
                <button
                  key={pillar.label}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`inline-flex h-8 cursor-pointer items-center gap-2 rounded-full px-3.5 text-sm transition-all duration-200 ${
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
                      className="flex h-4 w-4 items-center justify-center rounded-full"
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

          <div className="mt-5">
            <PrimaryCtaLink href="#contact" color={BRAND.home}>
              Get Started
            </PrimaryCtaLink>
            <p className="mt-3 text-xs text-slate">
              Confidential consultation · Custom to your business
            </p>
          </div>
        </div>

        <div className="relative min-h-[14rem] flex-1 overflow-hidden rounded-2xl sm:min-h-[18rem] lg:min-h-[26rem] lg:rounded-tl-[28px] lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-none">
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
