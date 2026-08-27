"use client";

import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const css = `
.ldr-section{background:#fff;width:100%;overflow:hidden;}
.ldr-section .section-shell{margin-inline:auto;width:100%;max-width:87.5rem;}
.ldr-grid{display:grid;grid-template-columns:1fr;gap:16px;border-radius:24px;width:100%;margin-top:1.5rem;}
.ldr-card{border-radius:24px;border:1px solid rgb(195,198,212);background:#fff;padding:20px 18px 22px;display:flex;flex-direction:column;}
.ldr-icon{display:block;flex:none;width:44px;height:44px;}
.ldr-card-title{margin:14px 0 0;padding-bottom:0.75rem;padding-right:0;font-weight:400;color:#000;font-size:clamp(1.25rem, 4vw, 1.5rem);line-height:1.25;letter-spacing:-0.02em;max-width:none;}
.ldr-card-body{margin-top:0;margin-bottom:0;color:#26292C;font-size:0.875rem;font-weight:400;line-height:1.4;max-width:none;}
.ldr-card-image{position:relative;border-radius:20px;overflow:hidden;min-height:300px;}
.ldr-br{display:none;}

@media (min-width:640px){
  .ldr-grid{gap:20px;margin-top:1.75rem;}
  .ldr-card{padding:24px 24px 26px;}
  .ldr-card-title{margin-top:16px;padding-bottom:0.85rem;padding-right:1rem;max-width:400px;}
  .ldr-card-body{font-size:0.9375rem;line-height:1.4;max-width:420px;}
  .ldr-card-image{min-height:220px;border-radius:24px;}
  .ldr-icon{width:48px;height:48px;}
}
@media (min-width:1024px){
  .ldr-grid{grid-template-columns:repeat(3,1fr);gap:24px;}
  .ldr-card{padding:28px 28px 30px;}
  .ldr-card-image{min-height:0;border-radius:28px;}
  .ldr-br{display:inline;}
}
`;

function ArrowIcon() {
  return (
    <svg
      className="ldr-icon"
      width="62"
      height="62"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M31 11 L49 32.5 L40 32.5 L40 48 L22 48 L22 32.5 L13 32.5 Z"
        fill="#12D7C4"
        stroke="#12D7C4"
        strokeWidth="12"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PillsIcon() {
  return (
    <svg
      className="ldr-icon"
      width="62"
      height="62"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="56" height="26" rx="13" fill="#FF7DE9" />
      <rect x="3" y="33" width="56" height="26" rx="13" fill="#FF7DE9" />
    </svg>
  );
}

function FeatureCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  body: string;
}) {
  return (
    <div className="ldr-card">
      {icon}
      <h3 className="ldr-card-title">{title}</h3>
      <p className="ldr-card-body">{body}</p>
    </div>
  );
}

export default function Leadership() {
  return (
    <section className={`home-section ldr-section ${poppins.className}`}>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="section-shell">
        <div className="section-header section-header--center">
          <h2 className="section-heading">
            From the first question to{" "}
            <span className="marketing-gradient-text">ongoing momentum</span>
          </h2>
        </div>

        <div className="ldr-grid">
          <FeatureCard
            icon={<ArrowIcon />}
            title="A plan people can act on"
            body="We turn business context into priorities, audiences, messages, channels, and a realistic sequence of work."
          />

          <FeatureCard
            icon={<PillsIcon />}
            title="Execution that stays connected"
            body="Campaigns, content, design, search, paid media, and systems support one another rather than competing for attention."
          />

          <div className="ldr-card-image">
            <Image
              src="/leadership.avif"
              alt="Two colleagues smiling while reviewing work on a laptop"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
