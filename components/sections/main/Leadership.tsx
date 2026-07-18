"use client";

import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

/* ------------------------------------------------------------------ */
/*  Leadership — "From pre- to post-sales, in one place" section       */
/*                                                                     */
/*  Fully self-contained: no Tailwind required. All styles are         */
/*  scoped under the .ldr- prefix in the <style> tag below.            */
/*                                                                     */
/*  Place the photo at:  public/images/pre-post-sales.jpg              */
/*  (two colleagues looking at a laptop)                               */
/* ------------------------------------------------------------------ */

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const css = `
.ldr-section{background:#fff;width:100%;overflow:hidden;}
.ldr-container{width:100%;max-width:80rem;margin-left:auto;margin-right:auto;padding:48px 16px;}
.ldr-title{text-align:center;font-weight:400;color:#000;font-size:2.5rem;line-height:1.3;letter-spacing:-0.02em;margin:0;}
.ldr-grid{margin-top:56px;display:grid;grid-template-columns:1fr;gap:0px;border-radius:24px;}
.ldr-card{border-radius:24px;border:1px solid rgb(195,198,212);background:#fff;padding:34px 37px;display:flex;flex-direction:column;}
.ldr-icon{display:block;flex:none;}
.ldr-card-title{margin:40px 0 0;padding-bottom:2.5rem;padding-right:2.5rem;font-weight:400;color:#000;font-size:2rem;line-height:1.2;letter-spacing:-0.02em;max-width:400px;}
.ldr-card-body{margin-top:0px;margin-bottom:0px;color:#26292C;font-size:1rem;font-weight:400;line-height:1.3;max-width:420px;}
.ldr-card-image{position:relative;border-radius:28px;overflow:hidden;min-height:320px;}
.ldr-br{display:none;}

@media (min-width:640px){
  .ldr-container{padding:56px 24px;}
}
@media (min-width:1024px){
  .ldr-grid{grid-template-columns:repeat(3,1fr);}
  .ldr-card-image{min-height:0;}
  .ldr-br{display:inline;}
  .ldr-container{padding:64px 32px;}
}
@media (max-width:639px){
  .ldr-title{font-size:36px;}
  .ldr-card{padding:36px 32px 72px;}
  .ldr-card-title{font-size:30px;}
}
`;

/* Chunky rounded arrow-up icon (teal) */
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

/* Two stacked rounded pills (pink) */
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

type FeatureCardProps = {
  icon: React.ReactNode;
  title: React.ReactNode;
  body: string;
};

function FeatureCard({ icon, title, body }: FeatureCardProps) {
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
    <section className={`ldr-section ${poppins.className}`}>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="ldr-container">
        <h2 className="ldr-title">From pre- to post-sales, in one place</h2>

        <div className="ldr-grid">
          <FeatureCard
            icon={<ArrowIcon />}
            title={
              <>
                Connect your entire
                <br className="ldr-br" /> revenue cycle
              </>
            }
            body="Share complete information at every stage to ensure handoffs and feedback are smooth and accurate."
          />

          <FeatureCard
            icon={<PillsIcon />}
            title={
              <>
                Manage much more
                <br className="ldr-br" /> than sales
              </>
            }
            body="Involve legal, finance, and ops at just the right time, so approvals happen faster and deals never get stuck in handoff limbo."
          />

          {/* Image card */}
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
