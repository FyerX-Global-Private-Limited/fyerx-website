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
import { PrimaryCtaButton } from "@/components/ui/PrimaryCta";

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
  growth: (
    <I>
      <path d="M6 40h36" />
      <path d="M10 32l8-10 7 6 13-16" />
      <path d="M30 6h8v8" />
    </I>
  ),
  target: (
    <I>
      <circle cx="24" cy="24" r="16" />
      <circle cx="24" cy="24" r="9" />
      <circle cx="24" cy="24" r="2" />
    </I>
  ),
  team: (
    <I>
      <circle cx="16" cy="17" r="6" />
      <path d="M4 39v-2a9 9 0 019-9h6a9 9 0 019 9v2" />
      <circle cx="34" cy="15" r="5" />
      <path d="M26 39v-1a8 8 0 018-8h1a8 8 0 018 8v1" />
    </I>
  ),
  digital: (
    <I>
      <rect x="10" y="10" width="28" height="18" rx="2" />
      <path d="M4 34h40l-3 5H7l-3-5z" />
      <path d="M18 19a6 6 0 0110-4m2 4a6 6 0 01-10 4" />
      <path d="M28 13l2 2-2 2M20 25l-2-2 2-2" />
    </I>
  ),
  megaphone: (
    <I>
      <path d="M6 20v8a2 2 0 002 2h2l18 8V10L10 18H8a2 2 0 00-2 2z" />
      <path d="M28 16a9 9 0 010 16" />
      <path d="M14 30l2 8h5l-2-8" />
    </I>
  ),
  operations: (
    <I>
      <circle cx="10" cy="12" r="4" />
      <circle cx="38" cy="12" r="4" />
      <circle cx="24" cy="26" r="4" />
      <circle cx="10" cy="40" r="4" />
      <circle cx="38" cy="40" r="4" />
      <path d="M13 15l8 8m14-11l-8 8M20 30l-8 7m22-7l8 7" />
    </I>
  ),
  capability: (
    <I>
      <path d="M24 10L4 20l20 10 20-10-20-10z" />
      <path d="M14 24v10c0 3 5 6 10 6s10-3 10-6V24" />
      <path d="M40 20v12" />
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
};

/* ------------------------------------------------------------------ */
/* Card data                                                           */
/* ------------------------------------------------------------------ */
interface Industry {
  icon: keyof typeof ICONS;
  label: [string, string?]; // one or two lines, matching the reference
}

const INDUSTRIES: Industry[] = [
  { icon: "growth", label: ["Revenue", "Growth"] },
  { icon: "target", label: ["Market", "Expansion"] },
  { icon: "team", label: ["Team", "Building"] },
  { icon: "digital", label: ["Digital", "Transformation"] },
  { icon: "megaphone", label: ["Brand", "Building"] },
  { icon: "operations", label: ["Business", "Operations"] },
  { icon: "capability", label: ["Capability", "Development"] },
  { icon: "other", label: ["Something", "Else"] },
];

export default function TrackRecord() {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });

  return (
    <section className="tr-hero">
      {/* ---------- Heading ---------- */}
      <h1 className="tr-title">
      Built around what
your {" "}
        <span
          style={{
            background: "linear-gradient(90deg, #730031 0%, #CC0057 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
         business needs next
        </span>
      </h1>

      <p className="tr-sub">
     Select the priority in front of you. We will help identify the right way forward.
      </p>

      {/* ---------- Industry picker ---------- */}
    

      <div className="tr-cards" role="group" aria-label="What would you like to manage?">
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
      <PrimaryCtaButton>Get Started</PrimaryCtaButton>

      

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
    font-family:'Poppins',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
    -webkit-font-smoothing:antialiased;
    background:#ffffff;
    text-align:center;
    padding:56px 24px 72px;
  }
  .tr-hero *{margin:0;padding:0;box-sizing:border-box;}
  /* ---------- Heading ---------- */
  .tr-hero .tr-title{
    max-width:22ch;
    font-family:var(--font-poppins), Arial, sans-serif;
    font-size:36px;
    line-height:1.25;
    font-weight:500;
    color:var(--ink);
    letter-spacing:-0.02em;
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
    margin:1.75rem auto 2rem;
  }
  /* ---------- Question ---------- */
  .tr-hero .tr-question{
    font-size:.75rem;
    line-height:120%;
    font-weight:600;
    color:var(--text);
    margin-top:33px;
    margin-bottom:20px;
  }
  /* ---------- Cards ---------- */
  .tr-hero .tr-cards{
    display:flex;
    flex-flow:row;
    align-items:stretch;
    justify-content:center;
    width:85%;
    max-width:100%;
    gap:12px;
    margin:0 auto 46px;
  }
  .tr-hero .tr-card{
    position:relative;
    width:100%;
    height:115px;
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
    padding:16px 10px;
    transition:border-color .2s ease,box-shadow .2s ease;
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
    width:42px;
    height:42px;
    color:#555A64;
  }
  .tr-hero .tr-label{
    position:relative;
    text-align:center;
    margin-top:.5rem;
    margin-left:auto;
    margin-right:auto;
    font-size:.75rem;
    line-height:1.4;
    font-weight:400;
    color:#333333;
  }
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
