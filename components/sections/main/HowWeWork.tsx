"use client";

/**
 * HowWeWork — "Support that moves with your business" tabbed section.
 *
 * Path: components/sections/main/HowWeWork.tsx
 *
 * Usage (App Router):
 *   import HowWeWork from "@/components/sections/main/HowWeWork";
 *   export default function Page() { return <HowWeWork />; }
 *
 * Self-contained: styles are embedded, no external CSS or dependencies.
 * Clicking a tab swaps the left text block and the right-side video.
 */

import { useState } from "react";
import { PrimaryCtaButton } from "@/components/ui/PrimaryCta";

interface TabData {
  label: string;
  para: string;
  video: string;
  cta: string;
}

const TABS: TabData[] = [
  {
    label: "Marketing",
    para: "Our marketing team plans, launches, and manages campaigns end to end, so you get consistent visibility without having to manage the details yourself.",
    video: "/marketing-video.mp4",
    cta: "Get Started",
  },
  {
    label: "Talent",
    para: "We source, screen, and place people suited to your business, cutting down the time it usually takes to build a reliable team.",
    video: "/talent.mp4",
    cta: "Get Started",
  },
  {
    label: "Technology",
    para: "From new websites to ongoing maintenance, our technology team builds and supports the digital tools your business depends on.",
    video: "/marketing-video.mp4",
    cta: "Get Started",
  },
  {
    label: "Learning",
    para: "FyerX Learning offers practical, job-ready courses in marketing, technology, and business skills, built for both individuals and teams looking to upskill.",
    video: "/whowe.mp4",
    cta: "Explore Courses",
  },
];

export default function HowWeWork() {
  const [active, setActive] = useState<number>(0);
  const t = TABS[active];

  return (
    <section className="hww-hero">
      <h1 className="hero-title">Support that moves with your business</h1>

      {/* ---------- Tab bar ---------- */}
      <div className="tabbar-wrap">
        <div className="tabbar" role="tablist">
          {TABS.map((tab, i) => (
            <button
              key={tab.label}
              role="tab"
              aria-selected={i === active}
              className={`tab${i === active ? " active" : ""}`}
              onClick={() => setActive(i)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="panel">
        {/* ---------- Left column (key remounts to replay fade) ---------- */}
        <div className="panel-left fade-swap" key={`left-${active}`}>
          <h2>{t.label}</h2>
          <p>{t.para}</p>
          <PrimaryCtaButton className="mt-12">{t.cta}</PrimaryCtaButton>
        </div>

        {/* ---------- Right column: video ---------- */}
        <div className="board-card">
          <div className="board video-board fade-swap" key={`video-${active}`}>
            <video
              className="board-video"
              src={t.video}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </div>

      {/* Embedded styles — self-contained, no external CSS needed.
          (Move into a CSS Module or globals.css if you prefer.) */}
      <style>{css}</style>
    </section>
  );
}

const css = `
  .hww-hero{
    --primary:#6161FF; --primary-dark:#5151d5; --text-dark:#323338;
    --lavender:#D9D6F1; --border:#E6E9EF; --card-bg:#F5F6F8; --black:#000;
    font-family:'Poppins',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
    color:#333; -webkit-font-smoothing:antialiased;
    max-width:1240px; margin:0 auto; padding:64px 40px 80px;
  }
  .hww-hero *{margin:0;padding:0;box-sizing:border-box;}
  .hww-hero .hero-title{
    text-align:center;
    justify-content:flex-start;
    align-items:center;
    display:flex;
    flex-flow:column;
    color:rgb(0, 0, 0);
    width:auto;
    margin-top:0px;
    margin-bottom:40px;
    letter-spacing:-0.03em;
    font-size:3.5rem;
    line-height:1.2;
    font-weight:400;
  }
  /* ---------- Tab bar ---------- */
  .hww-hero .tabbar-wrap{display:flex;justify-content:center;margin-bottom:56px;}
  .hww-hero .tabbar{
    display:inline-flex;align-items:center;background:#fff;border-radius:999px;
    padding:8px;box-shadow:0 6px 24px rgba(29,37,45,0.10);
  }
  .hww-hero .tab{
    position:relative;appearance:none;border:none;background:transparent;
    font-family:inherit;font-weight:400;color:var(--text-dark);cursor:pointer;
    display:inline-flex;justify-content:center;align-items:center;flex:0 0 auto;
    white-space:nowrap;font-size:0.875rem;border-radius:100rem;padding:0.5rem 1.5rem;
    transition:background-color .25s ease-in-out,color .25s ease-in-out;
  }
  .hww-hero .tab + .tab::before{
    content:"";position:absolute;left:0;top:50%;transform:translateY(-50%);
    width:1px;height:22px;background:var(--border);transition:opacity .2s ease;
  }
  .hww-hero .tab:hover{background:#F0F1F4;}
  .hww-hero .tab.active{background:var(--lavender);font-weight:500;}
  .hww-hero .tab.active::before,.hww-hero .tab.active + .tab::before{opacity:0;}
  /* ---------- Content grid ---------- */
  .hww-hero .panel{display:grid;grid-template-columns:340px 1fr;gap:72px;align-items:center;}
  .hww-hero .panel-left h2{
    line-height:1.3;
    margin-top:0px;
    margin-bottom:1rem;
    font-size:1.75rem;
    font-weight:400;
    color:#333;
  }
  .hww-hero .panel-left p{
    color:var(--black);
    margin-bottom:20px;
    font-size:1rem;
    line-height:150%;
  }
  /* ---------- Board card ---------- */
  .hww-hero .board-card{
    background:var(--card-bg);border-radius:16px;padding:28px; /* equal border on all 4 sides */
    box-shadow:0 10px 30px rgba(29,37,45,0.06);overflow:hidden;position:relative;
  }
  .hww-hero .board{
    background:#fff;border-radius:8px;
    box-shadow:0 4px 18px rgba(29,37,45,0.08);display:flex;min-height:440px;
    overflow:hidden;
  }
  .hww-hero .board.video-board{
    display:block;overflow:hidden;
  }
  .hww-hero .board-video{
    display:block;width:100%;height:100%;min-height:440px;
    object-fit:cover;border-radius:8px;
  }
  /* content switch animation */
  .hww-hero .fade-swap{animation:hwwFadeUp .35s ease;}
  @keyframes hwwFadeUp{
    from{opacity:0;transform:translateY(10px);}
    to{opacity:1;transform:translateY(0);}
  }
  @media (max-width:1024px){
    .hww-hero .panel{grid-template-columns:1fr;gap:40px;}
    .hww-hero .hero-title{font-size:40px;}
    .hww-hero .tabbar{flex-wrap:wrap;justify-content:center;border-radius:24px;}
  }
`;
