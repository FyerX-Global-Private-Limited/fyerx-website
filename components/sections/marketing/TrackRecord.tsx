"use client";

/**
 * TrackRecord — "The only AI-first CRM your team will love" hero section.
 *
 * Path: components/sections/main/TrackRecord.tsx
 *
 * Usage (App Router):
 *   import TrackRecord from "@/components/sections/main/TrackRecord";
 *   export default function Page() { return <TrackRecord />; }
 *
 * Self-contained: styles are embedded, no external CSS or dependencies.
 * Industry cards are multi-select toggles; layout never shifts.
 */

import { useState, type ReactNode } from "react";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";

/* ------------------------------------------------------------------ */
/* Icons — 40x40 outline SVGs, stroke inherits currentColor            */
/* ------------------------------------------------------------------ */
const I = ({ children }: { children: ReactNode }) => (
  <svg
    className="tr-icon"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const ICONS: Record<string, ReactNode> = {
  briefcase: (
    <I>
      <rect x="8" y="16" width="32" height="22" rx="3" />
      <path d="M18 16v-3a3 3 0 013-3h6a3 3 0 013 3v3" />
      <path d="M8 26h13m6 0h13" />
      <rect x="21" y="23" width="6" height="6" rx="1.5" />
    </I>
  ),
  realestate: (
    <I>
      <path d="M10 38V20l9-7 9 7v18" />
      <path d="M28 38V14h10v24" />
      <path d="M6 38h36" />
      <path d="M15 26h2m5 0h2M15 32h2m5 0h2M32 20h2m-2 6h2m-2 6h2" />
    </I>
  ),
  software: (
    <I>
      <rect x="8" y="10" width="32" height="22" rx="3" />
      <path d="M8 26h32" />
      <path d="M20 38h8m-4-6v6" />
      <path d="M15 18l4 3-4 3m8 0h6" />
    </I>
  ),
  media: (
    <I>
      <path d="M10 22v8a2 2 0 002 2h3" />
      <path d="M15 20l16-8v24l-16-8z" />
      <path d="M15 20v12" />
      <path d="M36 18c2 1.5 2 6.5 0 8" />
      <path d="M18 32l2 8h4l-2-8" />
    </I>
  ),
  financial: (
    <I>
      <circle cx="24" cy="24" r="16" />
      <path d="M29 18.5c-1-1.5-2.8-2.5-5-2.5-3 0-5 1.8-5 4s2 3.4 5 4 5 1.8 5 4-2 4-5 4c-2.2 0-4-1-5-2.5" />
      <path d="M24 12.5v3.5m0 16v3.5" />
    </I>
  ),
  healthcare: (
    <I>
      <path d="M24 6l14 5v10c0 10-6 17-14 21C16 38 10 31 10 21V11l14-5z" />
      <path d="M24 17v10m-5-5h10" />
    </I>
  ),
  construction: (
    <I>
      <path d="M14 20a7 7 0 01-4-11l5 5 4-4-5-5a7 7 0 0111 4" />
      <path d="M34 28a7 7 0 014 11l-5-5-4 4 5 5a7 7 0 01-11-4" />
      <path d="M17 23l-7 7a3 3 0 004 4l7-7m4-4l7-7a3 3 0 00-4-4l-7 7" />
    </I>
  ),
  other: (
    <I>
      <circle cx="15" cy="13" r="5" />
      <path d="M31 8l8 10h-16l8-10z" transform="translate(0,1)" />
      <path d="M12 30l8 8m0-8l-8 8" />
      <rect x="29" y="30" width="9" height="9" rx="1.5" />
    </I>
  ),
  logistics: (
    <I>
      <path d="M6 30V16a2 2 0 012-2h14a2 2 0 012 2v14" />
      <path d="M24 22h8l6 6v4H24z" />
      <circle cx="14" cy="34" r="4" />
      <circle cx="34" cy="34" r="4" />
      <path d="M6 30h4m14 0h4" />
    </I>
  ),
  enterpriseit: (
    <I>
      <rect x="9" y="8" width="30" height="9" rx="2" />
      <rect x="9" y="20" width="30" height="9" rx="2" />
      <rect x="9" y="32" width="30" height="8" rx="2" />
      <path d="M14 12.5h.01M14 24.5h.01" />
    </I>
  ),
};

/* ------------------------------------------------------------------ */
/* Card data                                                           */
/* ------------------------------------------------------------------ */
interface Industry {
  icon: keyof typeof ICONS;
  label: [string, string?]; // one or two lines, matching the reference
}

const INDUSTRIES: Industry[] = [
  { icon: "software", label: ["SaaS &", "Technology"] },
  { icon: "briefcase", label: ["Professional", "Services"] },
  { icon: "construction", label: ["Manufacturing &", "Industrial"] },
  { icon: "financial", label: ["Financial", "Services"] },
  { icon: "healthcare", label: ["Healthcare &", "MedTech"] },
  { icon: "logistics", label: ["Logistics &", "Supply Chain"] },
  { icon: "enterpriseit", label: ["Enterprise", "IT"] },
  { icon: "other", label: ["Other"] },
];

export default function TrackRecord() {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <section className="tr-hero">
     

      {/* ---------- Industry picker ---------- */}
      <p className="tr-question">What would you like support with?</p>

      <div className="tr-cards" role="group" aria-label="What would you like support with?">
        {INDUSTRIES.map((ind, i) => {
          const isOn = selected.has(i);
          return (
            <button
              key={ind.label.join(" ")}
              type="button"
              className={`tr-card${isOn ? " selected" : ""}`}
              aria-pressed={isOn}
              onClick={() => toggle(i)}
            >
              <span className="tr-check" aria-hidden="true">
                {isOn && (
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M3.5 8.5l3 3 6-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              {ICONS[ind.icon]}
              <span className="tr-label">
                {ind.label[0]}
                {ind.label[1] && (
                  <>
                    <br />
                    {ind.label[1]}
                  </>
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* ---------- CTA ---------- */}
      <PrimaryCtaLink href="/contact">Get Started</PrimaryCtaLink>

      <p className="tr-note">Free initial consultation, no commitment required</p>

      {/* Embedded styles — self-contained, no external CSS needed. */}
      <style>{css}</style>
    </section>
  );
}

const css = `
  .tr-hero{
    --blue:#2E8EFF;
    --text:#111111;
    --gray:#9B9B9B;
    --border:#DCDEE3;
    font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
    -webkit-font-smoothing:antialiased;
    background:#ffffff;
    text-align:center;
    padding:48px 24px;
  }
  @media (min-width:640px){
    .tr-hero{padding:56px 40px;}
  }
  @media (min-width:1024px){
    .tr-hero{padding:64px 64px;}
  }
  .tr-hero *{margin:0;padding:0;box-sizing:border-box;}
  /* ---------- Heading ---------- */
  .tr-hero .tr-title{
    max-width:18ch;
    font-size:3rem;
    line-height:113%;
    font-weight:400;
    color:var(--text);
    letter-spacing:-1px;
    margin:0 auto 40px;
  }
  .tr-hero .tr-gradient{
    background:linear-gradient(90deg,#8FE1F8 0%,#5FB9FA 55%,#2E8EFF 100%);
    -webkit-background-clip:text;
    background-clip:text;
    -webkit-text-fill-color:transparent;
    color:transparent;
  }
  .tr-hero .tr-blue{color:var(--blue);}
  .tr-hero .tr-sub{
    max-width:40ch;
    font-size:1.125rem;
    line-height:1.5;
    font-weight:300;
    color:#333333;
    margin:1.75rem auto .25rem;
  }
  /* ---------- Question ---------- */
  .tr-hero .tr-question{
    font-size:20px;
    line-height:120%;
    font-weight:600;
    color:var(--text);
    margin-top:24px;
    margin-bottom:34px;
  }
  /* ---------- Cards ---------- */
  .tr-hero .tr-cards{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    align-items:stretch;
    width:100%;
    max-width:520px;
    gap:10px;
    margin:0 auto 32px;
  }
  @media (min-width:480px){
    .tr-hero .tr-cards{grid-template-columns:repeat(4,1fr);max-width:600px;}
  }
  @media (min-width:768px){
    .tr-hero .tr-cards{max-width:760px;gap:12px;}
  }
  @media (min-width:1024px){
    .tr-hero .tr-cards{grid-template-columns:repeat(8,1fr);width:85%;max-width:100%;margin-bottom:46px;}
  }
  .tr-hero .tr-card{
    position:relative;
    width:100%;
    height:96px;
    background:#ffffff;
    border:1px solid var(--border);
    border-radius:4px;
    cursor:pointer;
    font-family:inherit;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:0px;
    padding:12px 8px;
    transition:border-color .2s ease,box-shadow .2s ease;
  }
  @media (min-width:640px){
    .tr-hero .tr-card{height:115px;padding:16px 10px;}
  }
  .tr-hero .tr-card:hover{
    border-color:#B9BDC7;
    box-shadow:0 4px 14px rgba(17,17,17,0.06);
  }
  .tr-hero .tr-card.selected{
    border-color:var(--blue);
    box-shadow:0 0 0 1px var(--blue);
  }
  .tr-hero .tr-check{
    position:absolute;
    top:14px;
    left:14px;
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
  .tr-hero .tr-card.selected .tr-check{
    background:var(--blue);
    border-color:var(--blue);
  }
  .tr-hero .tr-check svg{width:12px;height:12px;}
  .tr-hero .tr-icon{
    width:32px;
    height:32px;
    color:#555A64;
  }
  @media (min-width:640px){
    .tr-hero .tr-icon{width:42px;height:42px;}
  }
  .tr-hero .tr-label{
    position:relative;
    text-align:center;
    margin-top:.5rem;
    margin-left:auto;
    margin-right:auto;
    font-size:.6875rem;
    line-height:1.35;
    font-weight:400;
    color:#333333;
  }
  @media (min-width:640px){
    .tr-hero .tr-label{font-size:.75rem;}
  }
  /* ---------- CTA ---------- */
  .tr-hero .tr-cta{
    display:inline-flex;
    align-items:center;
    gap:10px;
    background:#111111;
    color:#ffffff;
    font-family:inherit;
    font-size:16px;
    font-weight:400;
    border:none;
    border-radius:999px;
    padding:10px 24px;
    cursor:pointer;
    transition:background-color .25s ease,transform .25s ease;
  }
  @media (min-width:640px){
    .tr-hero .tr-cta{font-size:20px;gap:12px;padding:10px 30px;}
  }
  .tr-hero .tr-cta:hover{background:#000000;}
  .tr-hero .tr-arrow{display:inline-flex;transition:transform .25s ease;}
  .tr-hero .tr-cta:hover .tr-arrow{transform:translateX(4px);}
  /* ---------- Note ---------- */
  .tr-hero .tr-note{
    font-size:18px;
    font-weight:300;
    color:var(--gray);
    margin-top:14px;
  }
  /* ---------- Responsive ---------- */
  @media (max-width:640px){
    .tr-hero .tr-title{font-size:34px;}
    .tr-hero .tr-title br{display:none;}
    .tr-hero .tr-sub br{display:none;}
  }
`;
