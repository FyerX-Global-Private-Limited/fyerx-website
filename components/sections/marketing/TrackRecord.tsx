"use client";

import { useState } from "react";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { PublicImage } from "@/components/ui/PublicImage";

const GOALS = [
  {
    src: "/marketingpageimages/section2 (2).webp",
    label: "Sharper brand",
    accent: "#C2185B",
  },
  {
    src: "/marketingpageimages/section2 (3).webp",
    label: "Product launch",
    accent: "#3D4DB7",
  },
  {
    src: "/marketingpageimages/section2 (4).webp",
    label: "Qualified enquiries",
    accent: "#F5A623",
  },
  {
    src: "/marketingpageimages/section2 (5).webp",
    label: "Search visibility",
    accent: "#0B7A75",
  },
  {
    src: "/marketingpageimages/section2 (6).webp",
    label: "Content & creative",
    accent: "#6C3CE1",
  },
  {
    src: "/marketingpageimages/section2 (7).webp",
    label: "Paid media",
    accent: "#1AA3D1",
  },
  {
    src: "/marketingpageimages/section2 (8).webp",
    label: "Leads & CRM",
    accent: "#E24A1B",
  },
  {
    src: "/marketingpageimages/section2 (1).webp",
    label: "Outside view",
    accent: "#FF2D92",
  },
] as const;

export default function TrackRecord() {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section className="home-section tr-hero">
      <div className="section-shell">
        <div className="section-header section-header--center">
          <h2 className="section-heading">
            Capability for Every Stage of{" "}
            <span className="marketing-gradient-text">Growth</span>
          </h2>
          <p className="section-subheading tr-subheading">
            Select the priority in front of you. We will help identify the right way forward.
          </p>
        </div>

        <div className="section-body mt-0 flex flex-col items-center gap-8">
          <div className="tr-cards" role="group" aria-label="What are you trying to move forward?">
            {GOALS.map((goal, i) => {
              const isOn = selected.has(i);
              return (
                <button
                  key={goal.label}
                  type="button"
                  className={`tr-card${isOn ? " selected" : ""}`}
                  style={
                    isOn
                      ? { borderColor: goal.accent, boxShadow: `0 0 0 1px ${goal.accent}` }
                      : undefined
                  }
                  aria-pressed={isOn}
                  onClick={() => toggle(i)}
                >
                  <span
                    className="tr-check"
                    aria-hidden="true"
                    style={isOn ? { background: goal.accent, borderColor: goal.accent } : undefined}
                  >
                    {isOn && (
                      <svg viewBox="0 0 16 16" fill="none">
                        <path
                          d="M3.5 8.5l3 3 6-7"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <span className="tr-iconWrap" aria-hidden="true">
                    <PublicImage
                      src={goal.src}
                      alt=""
                      width={88}
                      height={88}
                      className="tr-icon"
                    />
                  </span>
                  <span className="tr-label">{goal.label}</span>
                </button>
              );
            })}
          </div>

          <div className="tr-cta-wrap">
            <PrimaryCtaLink href="/contact#marketing" className="text-black!" color="#FFC900">
              Get Started
            </PrimaryCtaLink>
          </div>
        </div>
      </div>

      <style>{css}</style>
    </section>
  );
}

const css = `
  .tr-hero{
    --border:#DCDEE3;
    font-family:'Poppins',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
    -webkit-font-smoothing:antialiased;
    background:#ffffff;
    text-align:center;
  }
  .tr-hero *{margin:0;padding:0;box-sizing:border-box;}
  .tr-hero .section-shell{
    margin-inline:auto;
    width:100%;
    max-width:75rem;
  }
  .tr-hero .section-body{width:100%;}
  .tr-hero .tr-subheading{
    text-align:center;
    margin:12px auto 20px;
    max-width:42rem;
    padding-inline:0.5rem;
    font-size:clamp(0.875rem, 2.5vw, 1.0625rem);
    line-height:1.6;
    font-weight:400;
    color:#5a5f6b;
  }
  .tr-hero .tr-cards{
    display:grid;
    grid-template-columns:repeat(2, minmax(0, 1fr));
    gap:8px;
    width:100%;
    max-width:920px;
    margin:0 auto;
  }
  .tr-hero .tr-cta-wrap{
    display:flex;
    justify-content:center;
  }
  .tr-hero .tr-card{
    position:relative;
    min-height:108px;
    background:#ffffff;
    border:1px solid var(--border);
    border-radius:8px;
    cursor:pointer;
    font-family:inherit;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:6px;
    padding:14px 8px;
    transition:border-color .2s ease;
  }
  .tr-hero .tr-card:hover{
    border-color:#B9BDC7;
  }
  .tr-hero .tr-check{
    position:absolute;
    top:10px;
    left:10px;
    width:18px;
    height:18px;
    border:1px solid #C9CCD4;
    border-radius:4px;
    background:#ffffff;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:background-color .2s ease,border-color .2s ease;
  }
  .tr-hero .tr-check svg{width:12px;height:12px;}
  .tr-hero .tr-iconWrap{
    display:flex;
    align-items:center;
    justify-content:center;
    width:40px;
    height:40px;
    border-radius:50%;
    flex-shrink:0;
    overflow:hidden;
    background:transparent;
  }
  .tr-hero .tr-icon{
    width:40px;
    height:40px;
    object-fit:cover;
  }
  .tr-hero .tr-label{
    text-align:center;
    font-size:0.625rem;
    line-height:1.35;
    font-weight:500;
    color:#333333;
    padding:0 2px;
  }
  @media (max-width:380px){
    .tr-hero .tr-card{min-height:96px;padding:12px 6px;gap:4px;}
    .tr-hero .tr-iconWrap,.tr-hero .tr-icon{width:36px;height:36px;}
    .tr-hero .tr-label{font-size:0.5625rem;}
  }
  @media (min-width:640px){
    .tr-hero .tr-cards{gap:10px;}
    .tr-hero .tr-card{min-height:115px;padding:16px 10px;}
    .tr-hero .tr-iconWrap,.tr-hero .tr-icon{width:44px;height:44px;}
    .tr-hero .tr-label{font-size:0.72rem;padding:0 4px;}
  }
  @media (min-width:768px){
    .tr-hero .tr-cards{grid-template-columns:repeat(3, minmax(0, 1fr));gap:12px;max-width:760px;}
    .tr-hero .tr-label{font-size:0.75rem;}
  }
  @media (min-width:1024px){
    .tr-hero .tr-cards{
      display:flex;
      flex-flow:row wrap;
      justify-content:center;
      max-width:100%;
      gap:12px;
    }
    .tr-hero .tr-card{flex:1 1 calc(12.5% - 12px);min-width:110px;max-width:140px;}
  }
`;
