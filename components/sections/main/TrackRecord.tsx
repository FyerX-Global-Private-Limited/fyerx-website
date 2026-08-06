"use client";

import { useState, type ReactNode } from "react";
import { PrimaryCtaButton } from "@/components/ui/PrimaryCta";

const ICON_COLORS = ["#6161FF", "#FF5AC4", "#00CA72", "#FDAB3D", "#E2445C", "#A25DDC", "#0086C0", "#579BFC"];

function ColorIcon({ color, children }: { color: string; children: ReactNode }) {
  return (
    <span
      className="tr-iconWrap"
      style={{ backgroundColor: `${color}18`, color }}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

const ICONS: Record<string, (color: string) => ReactNode> = {
  growth: (c) => (
    <ColorIcon color={c}>
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 40h36" />
        <path d="M10 32l8-10 7 6 13-16" />
        <path d="M30 6h8v8" />
      </svg>
    </ColorIcon>
  ),
  brand: (c) => (
    <ColorIcon color={c}>
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="16" />
        <circle cx="24" cy="24" r="9" />
        <circle cx="24" cy="24" r="2" fill="currentColor" />
      </svg>
    </ColorIcon>
  ),
  hiring: (c) => (
    <ColorIcon color={c}>
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="17" r="6" />
        <path d="M4 39v-2a9 9 0 019-9h6a9 9 0 019 9v2" />
        <circle cx="34" cy="15" r="5" />
        <path d="M26 39v-1a8 8 0 018-8h1a8 8 0 018 8v1" />
      </svg>
    </ColorIcon>
  ),
  specialist: (c) => (
    <ColorIcon color={c}>
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 10L4 20l20 10 20-10-20-10z" />
        <path d="M14 24v10c0 3 5 6 10 6s10-3 10-6V24" />
      </svg>
    </ColorIcon>
  ),
  tech: (c) => (
    <ColorIcon color={c}>
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="10" width="28" height="18" rx="2" />
        <path d="M4 34h40l-3 5H7l-3-5z" />
        <path d="M18 19a6 6 0 0110-4" />
      </svg>
    </ColorIcon>
  ),
  ai: (c) => (
    <ColorIcon color={c}>
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="8" />
        <path d="M24 4v6M24 38v6M4 24h6M38 24h6M9.9 9.9l4.2 4.2M33.9 33.9l4.2 4.2M9.9 38.1l4.2-4.2M33.9 14.1l4.2-4.2" />
      </svg>
    </ColorIcon>
  ),
  cloud: (c) => (
    <ColorIcon color={c}>
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 36h22a8 8 0 000-16 10 10 0 00-19.2-3.2A7 7 0 0014 36z" />
      </svg>
    </ColorIcon>
  ),
  skills: (c) => (
    <ColorIcon color={c}>
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 38V18l16-10 16 10v20" />
        <path d="M18 38V26h12v12" />
        <path d="M8 18l16 10 16-10" />
      </svg>
    </ColorIcon>
  ),
};

interface Industry {
  icon: keyof typeof ICONS;
  label: string;
}

const INDUSTRIES: Industry[] = [
  { icon: "growth", label: "Growth & Demand" },
  { icon: "brand", label: "Brand & Market Presence" },
  { icon: "hiring", label: "Hiring & Workforce" },
  { icon: "specialist", label: "Specialist Talent" },
  { icon: "tech", label: "Technology Modernization" },
  { icon: "ai", label: "Data, AI & Automation" },
  { icon: "cloud", label: "Cloud & Enterprise Platforms" },
  { icon: "skills", label: "Skills & Capability Building" },
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
            Built around what your{" "}
            <span className="brand-gradient-text">business needs next</span>
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
              {ICONS[ind.icon](color)}
              <span className="tr-label">{ind.label}</span>
            </button>
          );
        })}
        </div>

        <div className="tr-cta-wrap">
          <PrimaryCtaButton>Get Started</PrimaryCtaButton>
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
    border-radius:10px;
  }
  .tr-hero .tr-iconWrap svg{width:24px;height:24px;}
  .tr-hero .tr-label{
    text-align:center;
    font-size:0.6875rem;
    line-height:1.35;
    font-weight:500;
    color:#333333;
    padding:0 2px;
  }
  @media (min-width:640px){
    .tr-hero .tr-cards{gap:10px;}
    .tr-hero .tr-card{min-height:115px;padding:16px 10px;}
    .tr-hero .tr-iconWrap{width:44px;height:44px;}
    .tr-hero .tr-iconWrap svg{width:28px;height:28px;}
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
