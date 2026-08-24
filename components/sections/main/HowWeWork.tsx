"use client";

import { useState } from "react";
import { PrimaryCtaButton } from "@/components/ui/PrimaryCta";

interface TabData {
  label: string;
  para: string;
  video: string;
  cta: string;
  activeBg: string;
  activeColor: string;
}

const TABS: TabData[] = [
  {
    label: "Technology",
    para: "From ServiceNow and cloud to data, AI, and transformation, we help businesses build technology that is ready for what comes next.",
    video: "/marketing-video.mp4",
    cta: "Get Started",
    activeBg: "#20287A1F",
    activeColor: "#20287A",
  },
  {
    label: "Talent",
    para: "We source, screen, and place people suited to your business, cutting down the time it usually takes to build a reliable team.",
    video: "/talent.mp4",
    cta: "Get Started",
    activeBg: "#11551C1F",
    activeColor: "#11551C",
  },
  {
    label: "Marketing",
    para: "Our marketing team plans, launches, and manages campaigns end to end, so you get consistent visibility without having to manage the details yourself.",
    video: "/marketing-video.mp4",
    cta: "Get Started",
    activeBg: "#FFC9001F",
    activeColor: "#111111",
  },
  {
    label: "Learning",
    para: "FyerX Learning offers practical, job-ready courses in marketing, technology, and business skills, built for both individuals and teams looking to upskill.",
    video: "/whowe.mp4",
    cta: "Explore Courses",
    activeBg: "#86013A1F",
    activeColor: "#86013A",
  },
];

export default function HowWeWork() {
  const [active, setActive] = useState<number>(0);
  const t = TABS[active];

  return (
    <section className="home-section hww-hero">
      <div className="section-shell section-shell--wide">
        <div className="section-header section-header--center mb-[var(--section-content-gap)]">
          <h2 className="section-heading">
            Support that moves with{" "}
            <span className="brand-gradient-text">your business</span>
          </h2>
        </div>

        <div className="section-body mt-0 flex flex-col gap-10 lg:gap-12">
        <div className="tabbar-wrap">
          <div className="tabbar" role="tablist">
            {TABS.map((tab, i) => (
              <button
                key={tab.label}
                role="tab"
                aria-selected={i === active}
                className={`tab${i === active ? " active" : ""}`}
                style={
                  i === active
                    ? { background: tab.activeBg, color: tab.activeColor }
                    : undefined
                }
                onMouseEnter={(e) => {
                  if (i !== active) {
                    e.currentTarget.style.background = tab.activeBg;
                    e.currentTarget.style.color = tab.activeColor;
                  }
                }}
                onMouseLeave={(e) => {
                  if (i !== active) {
                    e.currentTarget.style.background = "";
                    e.currentTarget.style.color = "";
                  }
                }}
                onClick={() => setActive(i)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-left fade-swap" key={`left-${active}`}>
            <h2>{t.label}</h2>
            <p>{t.para}</p>
            <PrimaryCtaButton
              className="panel-cta"
              color={
                t.label === "Marketing"
                  ? "#FFC900"
                  : t.label === "Talent"
                    ? "#11551C"
                    : t.label === "Technology"
                      ? "#20287A"
                      : "#86013A"
              }
              textColor={t.label === "Marketing" ? "#111111" : "#ffffff"}
            >
              {t.cta}
            </PrimaryCtaButton>
          </div>

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
        </div>
      </div>

      <style>{css}</style>
    </section>
  );
}

const css = `
  .hww-hero{
    --primary:#6161FF; --primary-dark:#5151d5; --text-dark:#323338;
    --border:#E6E9EF; --card-bg:#F5F6F8; --black:#000;
    font-family:'Poppins',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
    color:#333; -webkit-font-smoothing:antialiased;
  }
  .hww-hero *{margin:0;padding:0;box-sizing:border-box;}
  .hww-hero .section-shell{
    margin-inline:auto;
    width:100%;
    max-width:87.5rem;
  }
  .hww-hero .section-header{
    margin-bottom:var(--section-content-gap);
  }
  .hww-hero .section-body{
    width:100%;
  }
  .hww-hero .tabbar-wrap{display:flex;justify-content:center;width:100%;padding-inline:4px;}
  .hww-hero .tabbar{
    display:inline-flex;align-items:center;flex-wrap:wrap;justify-content:center;
    background:#fff;border-radius:999px;
    padding:8px;box-shadow:0 6px 24px rgba(29,37,45,0.10);gap:4px;
    margin-top:17px;max-width:100%;
  }
  .hww-hero .tab{
    position:relative;appearance:none;border:none;background:transparent;
    font-family:inherit;font-weight:400;color:var(--text-dark);cursor:pointer;
    display:inline-flex;justify-content:center;align-items:center;flex:0 0 auto;
    white-space:nowrap;font-size:0.875rem;border-radius:100rem;padding:0.5rem 1.25rem;
    transition:background-color .25s ease-in-out,color .25s ease-in-out;
  }
  .hww-hero .tab:hover{background:#F0F1F4;}
  .hww-hero .tab.active{font-weight:500;}
  .hww-hero .panel{display:grid;grid-template-columns:minmax(0,340px) minmax(0,1fr);gap:72px;align-items:center;width:100%;}
  .hww-hero .panel-left h2{
    line-height:1.3;
    margin-bottom:1.25rem;
    font-size:clamp(1.375rem, 3vw, 1.75rem);
    font-weight:400;
    color:#333;
  }
  .hww-hero .panel-left p{
    color:var(--black);
    font-size:clamp(0.9375rem, 2.5vw, 1rem);
    line-height:150%;
    text-align:left;
  }
  .hww-hero .panel-left .panel-cta{
    margin-top:20px;
  }
  .hww-hero .board-card{
    background:var(--card-bg);border-radius:16px;padding:20px;
    box-shadow:0 10px 30px rgba(29,37,45,0.06);overflow:hidden;position:relative;
  }
  .hww-hero .board{
    background:#fff;border-radius:8px;
    box-shadow:0 4px 18px rgba(29,37,45,0.08);display:flex;min-height:320px;
    overflow:hidden;
  }
  .hww-hero .board.video-board{display:block;overflow:hidden;}
  .hww-hero .board-video{
    display:block;width:100%;height:100%;min-height:320px;
    object-fit:cover;border-radius:8px;
  }
  .hww-hero .fade-swap{animation:hwwFadeUp .35s ease;}
  @keyframes hwwFadeUp{
    from{opacity:0;transform:translateY(10px);}
    to{opacity:1;transform:translateY(0);}
  }
  @media (max-width:1024px){
    .hww-hero .panel{grid-template-columns:1fr;gap:32px;}
    .hww-hero .board-video{min-height:240px;}
  }
  @media (max-width:767px){
    .hww-hero .section-header{margin-bottom:1.5rem;}
    .hww-hero .tabbar-wrap{padding-inline:0;}
    .hww-hero .tabbar{margin-top:0;width:100%;border-radius:16px;padding:6px;gap:3px;}
    .hww-hero .tab{flex:1 1 calc(50% - 3px);min-width:0;padding:0.45rem 0.65rem;font-size:0.75rem;white-space:normal;text-align:center;line-height:1.2;}
    .hww-hero .board-card{padding:12px;}
    .hww-hero .board-video{min-height:200px;}
    .hww-hero .board{min-height:200px;}
  }
  @media (max-width:640px){
    .hww-hero .tabbar{border-radius:14px;padding:5px;}
    .hww-hero .tab{padding:0.4rem 0.5rem;font-size:0.6875rem;}
  }
`;
