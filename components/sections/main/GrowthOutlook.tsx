"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

/* ------------------------------------------------------------------ */
/*  GrowthOutlook — "Resources and insights to inspire" section        */
/*                                                                     */
/*  Fully self-contained: no Tailwind required. All styles are         */
/*  scoped under the .gro- prefix in the <style> tag below.            */
/*                                                                     */
/*  Card images — place at:                                            */
/*    public/images/resources/ai-agents.jpg                            */
/*    public/images/resources/workflow-automation.jpg                  */
/*    public/images/resources/ai-guide-marketers.jpg                   */
/* ------------------------------------------------------------------ */

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const css = `
.gro-section{background:#fff;width:100%;overflow:hidden;}
.gro-container{margin:0 auto;width:100%;max-width:1776px;padding:64px 82px;}
.gro-title{text-align:left;font-weight:500;color:var(--ink);font-family:var(--font-poppins), Arial, sans-serif;font-size:36px;line-height:1.25;letter-spacing:-0.02em;margin:0;}
.gro-grid{margin-top:53px;display:grid;grid-template-columns:1fr;gap:32px;}
.gro-card{display:flex;flex-direction:column;border-radius:14px;border:1px solid #E7E8EA;background:#F7F7F8;overflow:hidden;text-decoration:none;}
.gro-card-image{position:relative;width:100%;aspect-ratio:538/304;background:#fff;}
.gro-card-text{padding:18px;display:flex;flex-direction:column;flex:1;}
.gro-card-title{color:#181d26;width:fit-content;margin-bottom:8px;font-size:1.125rem;font-weight:500;display:block;}
.gro-card-body{color:#040e20b0;font-size:.875rem;font-weight:400;margin-top:1rem;max-width:480px;}

@media (min-width:1024px){
  .gro-grid{grid-template-columns:repeat(3,1fr);gap:57px;}
}
@media (max-width:639px){
  .gro-title{font-size:30px;}
  .gro-grid{margin-top:36px;}
}
`;

type ResourceCard = {
  href: string;
  image: string;
  alt: string;
  title: string;
  body: string;
};

const CARDS: ResourceCard[] = [
  {
    href: "#",
    image: "/growth (1).webp",
    alt: "AI agents product interface showing a competitor analysis table",
    title: "What are AI agents?",
    body: "Learn what AI agents are, how they can help, and where you can easily deploy them within your teams.",
  },
  {
    href: "#",
    image: "/growth (2).webp",
    alt: "Wooden blocks connected as a flowchart on a yellow background",
    title: "What is workflow automation?",
    body: "Discover what workflow automation is, its benefits, best practices, and how to choose the right AI tools for your team’s needs.",
  },
  {
    href: "#",
    image: "/growth (3).webp",
    alt: "Abstract purple and pink light trails",
    title: "The ultimate AI 2026",
    body: "Learn how to supercharge your marketing operations & campaigns with AI.",
  },
];

export default function GrowthOutlook() {
  return (
    <section className={`gro-section ${inter.className}`}>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="gro-container">
        <h2 className="gro-title">
          <span
            style={{
              background: "linear-gradient(90deg, #730031 0%, #CC0057 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            Resources
          </span>{" "}
          and insights to inspire
        </h2>

        <div className="gro-grid">
          {CARDS.map((card) => (
            <Link key={card.title} href={card.href} className="gro-card">
              <div className="gro-card-image">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="gro-card-text">
                <h3 className="gro-card-title">{card.title}</h3>
                <p className="gro-card-body">{card.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
