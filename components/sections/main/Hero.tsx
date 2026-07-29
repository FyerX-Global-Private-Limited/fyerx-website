"use client";

import { useState } from "react";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";

const pillars: {
  label: string;
  video: string;
  activeClass: string;
  hoverClass: string;
  dotClass: string;
}[] = [
  {
    label: "Marketing",
    video: "/marketing-video.mp4",
    activeClass: "bg-[#ab0549]/10 text-[#ab0549]",
    hoverClass: "hover:bg-[#ab0549]/10",
    dotClass: "bg-[#ab0549]",
  },
  {
    label: "Talent",
    video: "/talent.mp4",
    activeClass: "bg-[#2563eb]/10 text-[#2563eb]",
    hoverClass: "hover:bg-[#2563eb]/10",
    dotClass: "bg-[#2563eb]",
  },
  // No dedicated clips yet for Technology/Learning — reuse existing videos.
  {
    label: "Technology",
    video: "/marketing-video.mp4",
    activeClass: "bg-[#16a34a]/10 text-[#16a34a]",
    hoverClass: "hover:bg-[#16a34a]/10",
    dotClass: "bg-[#16a34a]",
  },
  {
    label: "Learning",
    video: "/whowe.mp4",
    activeClass: "bg-[#7c3aed]/10 text-[#7c3aed]",
    hoverClass: "hover:bg-[#7c3aed]/10",
    dotClass: "bg-[#7c3aed]",
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
    <section className="relative w-full bg-white overflow-hidden font-calibri">
      <div
        className="max-w-7xl mx-auto pl-6 lg:pl-10 items-stretch"
        style={{
          display: "flex",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          columnGap: "2rem",
          rowGap: "2rem",
          paddingTop: "2rem",
          paddingBottom: "3rem",
        }}
      >
        {/* Left column */}
        <div
          className="text-left flex flex-col justify-start"
          style={{
            flexGrow: 1,
            flexShrink: 0,
            maxWidth: "23rem",
            paddingTop: "3rem",
            paddingBottom: "1rem",
          }}
        >
          <h1
            className="tracking-[-0.03em] text-black"
            style={{ fontSize: "36px", lineHeight: 1.25, fontWeight: 500 }}
          >
            You{" "}
            <span
              style={{
                fontSize: "36px",
                lineHeight: 1.25,
                background: "linear-gradient(90deg, #730031 0%, #CC0057 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              focus on growth.
            </span>
            <br />We handle execution.
          </h1>

          <p
            className="max-w-[44ch] text-black"
            style={{
              // Ref gaps: H1 → subtitle 40px → 28px; subtitle → pills 47px → 32px.
              marginTop: "1.75rem",
              marginBottom: "2rem",
              fontSize: "15px",
              lineHeight: 1.5,
            }}
          >
            Where your business goals and our teams work together on one dependable partner.
          </p>

          {/* Pillar toggle — selects which video leads the stack */}
          <div
            className="flex"
            style={{
              display: "flex",
              flexFlow: "wrap",
              // Ref pill gap 12px → 8px scaled.
              columnGap: "0.5rem",
              rowGap: "0.5rem",
              order: 0,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              maxWidth: "23rem",
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            {pillars.map((pillar, i) => {
              const isActive = active === i;
              return (
                <button
                  key={pillar.label}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`inline-flex items-center gap-2 h-8 rounded-full px-3.5 text-sm cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? `${pillar.activeClass} font-medium`
                      : `bg-[#f2f3f5] text-slate font-normal ${pillar.hoverClass}`
                  }`}
                >
                  {isActive && (
                    <span className={`flex items-center justify-center w-4 h-4 rounded-full text-white ${pillar.dotClass}`}>
                      <CheckIcon />
                    </span>
                  )}
                  {pillar.label}
                </button>
              );
            })}
          </div>

          {/* CTA — ref: pills → button 30px → 20px scaled */}
          <div className="mt-5">
            <PrimaryCtaLink href="#contact">Get Started</PrimaryCtaLink>
            <p className="mt-3 text-xs text-slate">
              Confidential consultation . Custom to your business
            </p>
          </div>
        </div>

        {/* Right column — bleeds flush to the container's right edge, no frame */}
        <div
          className="relative flex-1 lg:rounded-tl-[28px] overflow-hidden"
          style={{
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            // Ref visual ≈ 910×550 @1920 → keeps the column from collapsing
            // shorter than the reference proportions on wide screens.
            minHeight: "26rem",
          }}
        >
          {pillars.map((pillar, i) => (
            <video
              key={pillar.label}
              src={pillar.video}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className={`absolute inset-0 transition-opacity duration-500 ${
                active === i ? "opacity-100" : "opacity-0"
              }`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                margin: 0,
                border: "none",
                outline: "none",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
