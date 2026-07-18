"use client";

import Link from "next/link";
import { useState } from "react";

const pillars: { label: string; video: string }[] = [
  { label: "Marketing", video: "/marketing-video.mp4" },
  { label: "Talent", video: "/talent.mp4" },
  // No dedicated clips yet for Learning/Technology — reuse existing videos.
  { label: "Learning", video: "/whowe.mp4" },
  { label: "Technology", video: "/marketing-video.mp4" },
];

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.3} strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="13 5 20 12 13 19" />
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
            className="font-normal tracking-[-0.03em] text-black"
            style={{ fontSize: "3.5rem", lineHeight: 1 }}
          >
            You lead.<br />We deliver.
          </h1>

          <p
            className="max-w-[44ch] text-black"
            style={{
              // Ref gaps: H1 → subtitle 40px → 28px; subtitle → pills 47px → 32px.
              marginTop: "1.75rem",
              marginBottom: "2rem",
              fontSize: "clamp(1rem, 0.8664rem + 0.2155vw, 1.125rem)",
              lineHeight: 1.5,
            }}
          >
            Where strategy, talent, and technology create measurable business results.
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
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`inline-flex items-center gap-2 h-8 rounded-full px-3.5 text-sm font-normal transition-colors duration-200 ${
                    isActive
                      ? "bg-pale-blue text-deep-blue"
                      : "bg-[#f2f3f5] text-slate hover:bg-pale-blue/60"
                  }`}
                >
                  {isActive && (
                    <span className="flex items-center justify-center w-4 h-4 rounded-full bg-deep-blue text-white">
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
            <Link
              href="#contact"
              className="gap-2 bg-[#5c4fe0] hover:bg-[#4a3dc7] text-white text-[15px] font-semibold transition-colors duration-200"
              style={{
                display: "flex",
                width: "fit-content",
                justifyContent: "flex-start",
                alignItems: "center",
                // Ref button 64×~200px @1920 → ~43px tall here.
                padding: "0.8125rem 1.75rem",
                borderRadius: "10rem",
              }}
            >
              Get Started <ArrowIcon />
            </Link>
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
