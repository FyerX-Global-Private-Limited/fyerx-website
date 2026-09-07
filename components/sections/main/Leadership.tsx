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
.ldr-section .section-shell{margin-inline:auto;width:100%;max-width:75rem;}
.ldr-grid{display:grid;grid-template-columns:1fr;gap:16px;border-radius:24px;width:100%;}
.ldr-card{border-radius:24px;border:1px solid rgb(195,198,212);background:#fff;padding:20px 18px 22px;display:flex;flex-direction:column;}
.ldr-icon{display:block;flex:none;width:48px;height:48px;object-fit:contain;}
.ldr-card-title{margin:16px 0 10px;padding:0;font-weight:400;color:#000;font-size:clamp(1.25rem, 4vw, 1.5rem);line-height:1.25;letter-spacing:-0.02em;max-width:none;}
.ldr-card-body{margin:0;color:#26292C;font-size:0.9375rem;font-weight:400;line-height:1.45;max-width:none;}
.ldr-card-image{position:relative;border-radius:20px;overflow:hidden;min-height:220px;background:#86013A;}
.ldr-br{display:none;}

@media (min-width:640px){
  .ldr-grid{gap:20px;}
  .ldr-card{padding:24px 24px 26px;}
  .ldr-card-title{margin-top:18px;margin-bottom:12px;max-width:400px;}
  .ldr-card-body{font-size:1rem;line-height:1.4;max-width:420px;}
  .ldr-card-image{min-height:240px;border-radius:24px;}
  .ldr-icon{width:52px;height:52px;}
}
@media (min-width:1024px){
  .ldr-grid{grid-template-columns:repeat(3,1fr);gap:20px;align-items:stretch;}
  .ldr-card{padding:28px;}
  .ldr-card-image{min-height:0;height:auto;border-radius:28px;}
  .ldr-br{display:inline;}
}
`;

type FeatureCardProps = {
  image: string;
  title: React.ReactNode;
  body: string;
};

function FeatureCard({ image, title, body }: FeatureCardProps) {
  return (
    <div className="ldr-card">
      <Image
        src={image}
        alt=""
        width={58}
        height={58}
        className="ldr-icon"
      />
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
            From first conversation to{" "}
            <span className="brand-gradient-text">long-term partner</span>
          </h2>
        </div>

        <div className="section-body ldr-grid">
          <FeatureCard
            image="/updatedmainpage/section7 (2).webp"
            title="Every stage, connected"
            body="Information flows smoothly from planning through delivery, so nothing gets lost in handoffs."
          />

          <FeatureCard
            image="/updatedmainpage/section7 (3).webp"
            title="More than one capability"
            body="Choose the expertise you need today, with the flexibility to access more as your business evolves."
          />

          <div className="ldr-card-image">
            <Image
              src="/updatedmainpage/section7 (1).webp"
              alt="FyerX team collaborating together"
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
