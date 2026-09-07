"use client";

import { useState } from "react";
import Image from "next/image";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";

const ICON_COLORS = ["#86013A", "#20287A", "#FDAB3D", "#11551C", "#A25DDC", "#0086C0", "#E2445C", "#FF5AC4"];

const INDUSTRIES = [
  { icon: "/updatedmainpage/icons (4).webp", label: "Growth & Demand" },
  { icon: "/updatedmainpage/icons (5).webp", label: "Brand & Market Presence" },
  { icon: "/updatedmainpage/icons (6).webp", label: "Hiring & Workforce" },
  { icon: "/updatedmainpage/icons (2).webp", label: "Specialist Talent" },
  { icon: "/updatedmainpage/icons (8).webp", label: "Technology Modernization" },
  { icon: "/updatedmainpage/icons (1).webp", label: "Data, AI & Automation" },
  { icon: "/updatedmainpage/icons (7).webp", label: "Cloud & Enterprise Platforms" },
  { icon: "/updatedmainpage/icons (3).webp", label: "Skills & Capability Building" },
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
            <span className="brand-gradient-text">Growth</span>
          </h2>
          <p className="section-subheading tr-subheading">
            Select the priority in front of you. We will help identify the right way forward.
          </p>
        </div>

      <div className="section-body mt-0 flex flex-col items-center gap-[calc(var(--section-content-gap)+1.5rem)]">
        <div className="tr-cards" role="group" aria-label="What would you like to manage?">
        {INDUSTRIES.map((ind, i) => {
          const isOn = selected.has(i);
          const color = ICON_COLORS[i % ICON_COLORS.length];
          return (
            <button
              key={ind.label}
              type="button"
              className={`tr-card${isOn ? " selected" : ""}`}
              style={isOn ? { borderColor: color, boxShadow: `0 0 0 1px ${color}` } : undefined}
              aria-pressed={isOn}
              onClick={() => toggle(i)}
            >
              <span
                className="tr-check"
                aria-hidden="true"
                style={isOn ? { background: color, borderColor: color } : undefined}
              >
                {isOn && (
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M3.5 8.5l3 3 6-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className="tr-iconWrap">
                <Image
                  src={ind.icon}
                  alt=""
                  width={48}
                  height={48}
                  className="tr-icon"
                />
              </span>
              <span className="tr-label">{ind.label}</span>
            </button>
          );
        })}
        </div>

        <div className="tr-cta-wrap">
          <PrimaryCtaLink href="/contact">Get Started</PrimaryCtaLink>
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
  .tr-hero .section-body{
    width:100%;
  }
  .tr-hero .tr-subheading{
    text-align:center;
    margin:17px auto var(--section-content-gap);
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
    margin:0 auto 0;
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
    transition:border-color .2s ease,box-shadow .2s ease;
  }
  .tr-hero .tr-card:hover{
    border-color:#B9BDC7;
    box-shadow:0 4px 14px rgba(17,17,17,0.06);
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
    flex-shrink:0;
  }
  .tr-hero .tr-icon{
    width:40px;
    height:40px;
    display:block;
    object-fit:contain;
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
