import React from "react";
import { Poppins } from "next/font/google";
import { PublicImage } from "@/components/ui/PublicImage";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const css = `
.ldr-section{background:#fff;width:100%;overflow:hidden;}
.ldr-section .section-shell{margin-inline:auto;width:100%;max-width:75rem;}
.ldr-grid{display:grid;grid-template-columns:1fr;gap:16px;width:100%;align-items:stretch;}
.ldr-card{height:100%;border-radius:24px;border:1px solid rgb(195,198,212);background:#fff;padding:28px 24px;display:flex;flex-direction:column;}
.ldr-icon{display:block;flex:none;width:52px;height:52px;object-fit:contain;}
.ldr-card-title{margin:24px 0 16px;padding:0;font-weight:400;color:#000;font-size:clamp(1.5rem, 5vw, 2rem);line-height:1.2;letter-spacing:-0.02em;max-width:none;}
.ldr-card-body{margin:0;color:#26292C;font-size:0.9375rem;font-weight:400;line-height:1.45;max-width:none;}
.ldr-card-image{position:relative;min-height:280px;height:100%;border-radius:24px;overflow:hidden;}
.ldr-card-photo{object-fit:cover;}
.ldr-br{display:none;}

@media (min-width:640px){
  .ldr-grid{gap:20px;}
  .ldr-card{padding:32px 28px;}
  .ldr-card-title{margin-top:28px;margin-bottom:16px;max-width:400px;}
  .ldr-card-body{font-size:1rem;line-height:1.4;max-width:420px;}
  .ldr-card-image{min-height:320px;border-radius:24px;}
  .ldr-icon{width:58px;height:58px;}
}
@media (min-width:1024px){
  .ldr-grid{grid-template-columns:repeat(3,1fr);gap:24px;}
  .ldr-card{padding:32px 32px;}
  .ldr-card-image{min-height:0;border-radius:28px;}
  .ldr-br{display:inline;}
}
`;

function FeatureCard({
  image,
  title,
  body,
}: {
  image: string;
  title: React.ReactNode;
  body: string;
}) {
  return (
    <div className="ldr-card">
      <PublicImage
        src={image}
        alt=""
        width={240}
        height={240}
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
            From the first question to{" "}
            <span className="marketing-gradient-text">ongoing momentum</span>
          </h2>
        </div>

        <div className="section-body ldr-grid">
          <FeatureCard
            image="/marketingpageimages/section9 (1).webp"
            title="A plan people can act on"
            body="We turn business context into priorities, audiences, messages, channels, and a realistic sequence of work."
          />

          <FeatureCard
            image="/marketingpageimages/section9 (3).webp"
            title="Execution that stays connected"
            body="Campaigns, content, design, search, paid media, and systems support one another rather than competing for attention."
          />

          <div className="ldr-card-image">
            <PublicImage
              src="/marketingpageimages/section9 (2).webp"
              alt="Team reviewing campaign materials together"
              fill
              className="ldr-card-photo"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
