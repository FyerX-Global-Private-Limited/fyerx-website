"use client";

import { useState, type ReactNode } from "react";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TALENT_HOME } from "@/lib/talent-home-palette";

const I = ({ children }: { children: ReactNode }) => (
  <svg
    className="tr-icon"
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const ICONS: Record<string, ReactNode> = {
  contract: (
    <I>
      <rect x="10" y="18" width="28" height="20" rx="3" />
      <path d="M18 18v-4a6 6 0 0 1 12 0v4" />
      <path d="M10 28h28" />
    </I>
  ),
  itTech: (
    <I>
      <rect x="8" y="10" width="32" height="22" rx="3" />
      <path d="M8 26h32" />
      <path d="M15 18l4 3-4 3m8 0h6" />
    </I>
  ),
  project: (
    <I>
      <path d="M14 20a7 7 0 0 1-4-11l5 5 4-4-5-5a7 7 0 0 1 11 4" />
      <path d="M34 28a7 7 0 0 1 4 11l-5-5-4 4 5 5a7 7 0 0 1-11-4" />
    </I>
  ),
  rpo: (
    <I>
      <circle cx="16" cy="16" r="5" />
      <circle cx="32" cy="16" r="5" />
      <path d="M10 36c0-4 2.5-7 6-7s6 3 6 7M26 36c0-4 2.5-7 6-7s6 3 6 7" />
    </I>
  ),
  permanent: (
    <I>
      <circle cx="24" cy="16" r="6" />
      <path d="M12 38c0-6 5-10 12-10s12 4 12 10" />
    </I>
  ),
  executive: (
    <I>
      <circle cx="20" cy="18" r="5" />
      <path d="M8 38c1.5-5 5-8 12-8s10.5 3 12 8" />
      <path d="M32 14l6 6-6 6" />
    </I>
  ),
  bulk: (
    <I>
      <circle cx="14" cy="18" r="4" />
      <circle cx="24" cy="14" r="4" />
      <circle cx="34" cy="18" r="4" />
      <path d="M8 36c1-3 3.5-5 6-5M22 36c1-3 3.5-5 6-5M34 36c1-3 3.5-5 6-5" />
    </I>
  ),
  global: (
    <I>
      <circle cx="24" cy="24" r="14" />
      <path d="M10 24h28M24 10c4 4 6 9 6 14s-2 10-6 14M24 10c-4 4-6 9-6 14s2 10 6 14" />
    </I>
  ),
};

const STAFFING_SERVICES: {
  icon: keyof typeof ICONS;
  label: [string, string?];
  iconBg: string;
  iconColor: string;
}[] = [
  { icon: "contract", label: ["Contract", "Staffing"], iconBg: "#d8e9fb", iconColor: "#2383e2" },
  { icon: "itTech", label: ["IT & Tech", "Staffing"], iconBg: "#d5eed3", iconColor: "#16a34a" },
  { icon: "project", label: ["Project-Based", "Staffing"], iconBg: "#fdeecc", iconColor: "#d97706" },
  { icon: "rpo", label: ["Recruitment Process", "Outsourcing"], iconBg: "#e8e0fb", iconColor: "#7c3aed" },
  { icon: "permanent", label: ["Permanent", "Hiring"], iconBg: "#fce7f3", iconColor: "#db2777" },
  { icon: "executive", label: ["Executive", "Search"], iconBg: "#fde0d3", iconColor: "#ea580c" },
  { icon: "bulk", label: ["Bulk & Volume", "Hiring"], iconBg: "#ecfeff", iconColor: "#0891b2" },
  { icon: "global", label: ["Global", "Staffing"], iconBg: "#F0FAF2", iconColor: "#11551C" },
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
    <section id="talent-services" className="tr-hero">
      <p className="tr-question">What kind of hiring support do you need?</p>

      <div className="tr-cards" role="group" aria-label="What kind of hiring support do you need?">
        {STAFFING_SERVICES.map((service, i) => {
          const isOn = selected.has(i);
          return (
            <button
              key={service.label.join(" ")}
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
              <span className="tr-icon-wrap" style={{ backgroundColor: service.iconBg, color: service.iconColor }}>
                {ICONS[service.icon]}
              </span>
              <span className="tr-label">
                {service.label[0]}
                {service.label[1] && (
                  <>
                    <br />
                    {service.label[1]}
                  </>
                )}
              </span>
            </button>
          );
        })}
      </div>

      <PrimaryCtaLink href="/talent/book-session" color={TALENT_HOME.primary} textColor={TALENT_HOME.accent}>
        Tell Us What You Need
      </PrimaryCtaLink>

      <style>{css}</style>
    </section>
  );
}

const css = `
  .tr-hero{
    --accent:${TALENT_HOME.primary};
    --text:#111111;
    --border:#DCDEE3;
    font-family:'Poppins',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
    -webkit-font-smoothing:antialiased;
    background:#ffffff;
    text-align:center;
    padding:40px 16px 48px;
    overflow-x:clip;
  }
  @media (min-width:640px){ .tr-hero{padding:56px 40px 64px;} }
  @media (min-width:1024px){ .tr-hero{padding:64px 64px 72px;} }
  .tr-hero *{margin:0;padding:0;box-sizing:border-box;}
  .tr-hero .tr-question{
    font-size:clamp(1rem,3.5vw,1.25rem);
    line-height:120%;
    font-weight:600;
    color:var(--text);
    margin-bottom:28px;
    padding-inline:8px;
  }
  .tr-hero .tr-cards{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    align-items:stretch;
    width:100%;
    max-width:520px;
    gap:10px;
    margin:0 auto 32px;
  }
  @media (min-width:480px){ .tr-hero .tr-cards{grid-template-columns:repeat(4,1fr);max-width:600px;} }
  @media (min-width:768px){ .tr-hero .tr-cards{max-width:900px;gap:12px;} }
  @media (min-width:1024px){
    .tr-hero .tr-cards{grid-template-columns:repeat(4,1fr);width:100%;max-width:960px;margin-bottom:40px;}
  }
  @media (min-width:1280px){
    .tr-hero .tr-cards{grid-template-columns:repeat(8,1fr);max-width:1120px;}
  }
  .tr-hero .tr-card{
    position:relative;
    width:100%;
    min-height:108px;
    background:#ffffff;
    border:1px solid var(--border);
    border-radius:12px;
    cursor:pointer;
    font-family:inherit;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:4px;
    padding:28px 8px 12px;
    transition:border-color .2s ease,box-shadow .2s ease;
  }
  @media (min-width:640px){ .tr-hero .tr-card{min-height:120px;padding:30px 10px 14px;} }
  .tr-hero .tr-card:hover{border-color:#B9BDC7;box-shadow:0 4px 14px rgba(17,17,17,0.06);}
  .tr-hero .tr-card.selected{border-color:var(--accent);box-shadow:0 0 0 1px var(--accent);}
  .tr-hero .tr-check{
    position:absolute;top:10px;left:10px;width:16px;height:16px;
    border:1px solid #C9CCD4;border-radius:4px;background:#ffffff;
    display:flex;align-items:center;justify-content:center;
    transition:background-color .2s ease,border-color .2s ease;
  }
  .tr-hero .tr-card.selected .tr-check{background:var(--accent);border-color:var(--accent);}
  .tr-hero .tr-check svg{width:10px;height:10px;}
  .tr-hero .tr-icon-wrap{
    display:inline-flex;align-items:center;justify-content:center;
    width:44px;height:44px;border-radius:12px;margin-bottom:2px;
  }
  @media (min-width:640px){ .tr-hero .tr-icon-wrap{width:48px;height:48px;} }
  .tr-hero .tr-icon{width:24px;height:24px;}
  .tr-hero .tr-label{
    text-align:center;margin-top:.25rem;
    font-size:.6875rem;line-height:1.35;font-weight:500;color:#333333;
  }
  @media (min-width:640px){ .tr-hero .tr-label{font-size:.75rem;} }
`;
