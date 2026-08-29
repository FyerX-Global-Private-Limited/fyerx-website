"use client";

import { useState } from "react";
import Image from "next/image";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TALENT_HOME } from "@/lib/talent-home-palette";

const STAFFING_SERVICES = [
  {
    icon: "/images/talent/icon/contract.svg",
    label: ["Contract", "Staffing"] as [string, string?],
  },
  {
    icon: "/images/talent/icon/it-tech.svg",
    label: ["IT & Tech", "Staffing"] as [string, string?],
  },
  {
    icon: "/images/talent/icon/project.svg",
    label: ["Project-Based", "Staffing"] as [string, string?],
  },
  {
    icon: "/images/talent/icon/rpo.svg",
    label: ["Recruitment", "Outsourcing"] as [string, string?],
  },
  {
    icon: "/images/talent/icon/permanent.svg",
    label: ["Permanent", "Hiring"] as [string, string?],
  },
  {
    icon: "/images/talent/icon/executive.svg",
    label: ["Executive", "Search"] as [string, string?],
  },
  {
    icon: "/images/talent/icon/bulk.svg",
    label: ["Bulk & Volume", "Hiring"] as [string, string?],
  },
  {
    icon: "/images/talent/icon/global.svg",
    label: ["Global", "Staffing"] as [string, string?],
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
    <section id="talent-services" className="home-section tr-hero">
      <div className="section-shell">
        <p className="tr-question">What kind of hiring support do you need?</p>

        <div className="section-body mt-0 flex flex-col items-center gap-8">
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
                  <span className="tr-iconWrap">
                    <Image
                      src={service.icon}
                      alt=""
                      width={48}
                      height={48}
                      unoptimized
                      className="tr-icon"
                    />
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

          <div className="tr-cta-wrap">
            <PrimaryCtaLink href="/talent/book-session" color={TALENT_HOME.primary} textColor={TALENT_HOME.accent}>
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
    --accent:${TALENT_HOME.primary};
    --text:#111111;
    --border:#DCDEE3;
    font-family:'Poppins',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
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
  .tr-hero .tr-question{
    font-size:clamp(1rem,3.5vw,1.25rem);
    line-height:120%;
    font-weight:600;
    color:var(--text);
    margin:0 auto 20px;
    padding-inline:0.5rem;
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
    border-radius:12px;
    cursor:pointer;
    font-family:inherit;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:8px;
    padding:14px 8px;
    transition:border-color .2s ease, box-shadow .2s ease;
  }
  .tr-hero .tr-card:hover{border-color:#B9BDC7;}
  .tr-hero .tr-card.selected{border-color:var(--accent);box-shadow:0 0 0 1px var(--accent);}
  .tr-hero .tr-check{
    position:absolute;
    top:10px;
    left:10px;
    width:18px;
    height:18px;
    border:1.5px solid #C9CCD4;
    border-radius:50%;
    background:#ffffff;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:background-color .2s ease,border-color .2s ease;
  }
  .tr-hero .tr-card.selected .tr-check{background:var(--accent);border-color:var(--accent);}
  .tr-hero .tr-check svg{width:11px;height:11px;}
  .tr-hero .tr-iconWrap{
    display:flex;
    align-items:center;
    justify-content:center;
    width:44px;
    height:44px;
    flex-shrink:0;
  }
  .tr-hero .tr-icon{width:44px;height:44px;display:block;}
  .tr-hero .tr-label{
    text-align:center;
    font-size:0.625rem;
    line-height:1.35;
    font-weight:500;
    color:#333333;
    padding:0 2px;
  }
  @media (max-width:380px){
    .tr-hero .tr-card{min-height:96px;padding:12px 6px;gap:6px;}
    .tr-hero .tr-iconWrap,.tr-hero .tr-icon{width:40px;height:40px;}
    .tr-hero .tr-label{font-size:0.5625rem;}
  }
  @media (min-width:640px){
    .tr-hero .tr-cards{gap:10px;}
    .tr-hero .tr-card{min-height:115px;padding:16px 10px;}
    .tr-hero .tr-iconWrap,.tr-hero .tr-icon{width:48px;height:48px;}
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
