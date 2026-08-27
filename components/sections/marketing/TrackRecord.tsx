"use client";

import { useState } from "react";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import {
  MenuGlyphBold,
  MENU_ICON_PALETTE,
  type MenuIconName,
} from "@/components/ui/MenuGlyph";

interface Goal {
  icon: MenuIconName;
  label: string;
}

const GOALS: Goal[] = [
  { icon: "heart", label: "Sharper brand" },
  { icon: "sparkle", label: "Product launch" },
  { icon: "funnel", label: "Qualified enquiries" },
  { icon: "search", label: "Search visibility" },
  { icon: "megaphone", label: "Content & creative" },
  { icon: "chart", label: "Paid media" },
  { icon: "robot", label: "Leads & CRM" },
  { icon: "clipboardCheck", label: "Outside view" },
];

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
              const palette = MENU_ICON_PALETTE[goal.icon];
              return (
                <button
                  key={goal.label}
                  type="button"
                  className={`tr-card${isOn ? " selected" : ""}`}
                  style={
                    isOn
                      ? { borderColor: palette.color, boxShadow: `0 0 0 1px ${palette.color}` }
                      : undefined
                  }
                  aria-pressed={isOn}
                  onClick={() => toggle(i)}
                >
                  <span
                    className="tr-check"
                    aria-hidden="true"
                    style={isOn ? { background: palette.color, borderColor: palette.color } : undefined}
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
                  <span
                    className="tr-iconWrap"
                    style={{ backgroundColor: palette.tint }}
                    aria-hidden="true"
                  >
                    <MenuGlyphBold name={goal.icon} color={palette.color} size={28} />
                  </span>
                  <span className="tr-label">{goal.label}</span>
                </button>
              );
            })}
          </div>

          <div className="tr-cta-wrap">
            <PrimaryCtaLink href="/contact" className="text-black!" color="#FFC900">
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
    min-height:120px;
    background:#ffffff;
    border:1px solid var(--border);
    border-radius:8px;
    cursor:pointer;
    font-family:inherit;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:8px;
    padding:18px 8px 14px;
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
    width:52px;
    height:52px;
    border-radius:999px;
    box-shadow:0 6px 16px rgba(20,20,43,0.12);
    flex-shrink:0;
  }
  .tr-hero .tr-label{
    text-align:center;
    font-size:0.6875rem;
    line-height:1.35;
    font-weight:500;
    color:#333333;
    padding:0 2px;
  }
  @media (max-width:380px){
    .tr-hero .tr-card{min-height:108px;padding:14px 6px 12px;gap:6px;}
    .tr-hero .tr-iconWrap{width:44px;height:44px;}
    .tr-hero .tr-label{font-size:0.625rem;}
  }
  @media (min-width:640px){
    .tr-hero .tr-cards{gap:10px;}
    .tr-hero .tr-card{min-height:128px;padding:18px 10px 14px;}
    .tr-hero .tr-iconWrap{width:56px;height:56px;}
    .tr-hero .tr-label{font-size:0.75rem;padding:0 4px;}
  }
  @media (min-width:768px){
    .tr-hero .tr-cards{grid-template-columns:repeat(3, minmax(0, 1fr));gap:12px;max-width:760px;}
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
    .tr-hero .tr-iconWrap{width:58px;height:58px;}
  }
`;
