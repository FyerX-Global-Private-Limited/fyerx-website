"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const css = `
.gro-section{background:#fff;width:100%;overflow:hidden;}
.gro-grid{display:grid;grid-template-columns:1fr;gap:16px;}
.gro-card{display:flex;flex-direction:column;border-radius:14px;border:1px solid #E7E8EA;background:#F7F7F8;overflow:hidden;text-decoration:none;transition:box-shadow .2s ease;}
.gro-card:hover{box-shadow:0 8px 24px rgba(29,37,45,0.08);}
.gro-card-image{position:relative;width:100%;aspect-ratio:538/304;background:#fff;}
.gro-card-text{padding:16px;display:flex;flex-direction:column;flex:1;}
.gro-card-title{color:#181d26;width:fit-content;margin-bottom:8px;font-size:1.125rem;font-weight:500;display:block;}
.gro-card-body{color:#040e20b0;font-size:.875rem;font-weight:400;margin-top:0.5rem;max-width:480px;line-height:1.55;}

@media (min-width:640px){
  .gro-grid{gap:20px;}
  .gro-card-text{padding:18px;}
}
@media (min-width:768px){
  .gro-grid{grid-template-columns:repeat(2,1fr);gap:24px;}
}
@media (min-width:1024px){
  .gro-grid{grid-template-columns:repeat(3,1fr);gap:32px;}
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    alt: "Team reviewing marketing analytics and growth metrics",
    title: "Building a stronger demand engine",
    body: "How focused strategy and execution turn marketing activity into qualified business opportunities.",
  },
  {
    href: "#",
    image:
      "https://www.globalcoachcenter.com/wp-content/uploads/2024/09/Overcoming-Communication-Issues-When-Working-With-Indian-Team-1024x656.jpg",
    alt: "Team collaborating on hiring and workforce planning",
    title: "Hiring for what comes next",
    body: "How to build teams with the skills your business needs to grow.",
  },
  {
    href: "#",
    image:
      "https://cdn.prod.website-files.com/6491b0d1d31f1324881f1205/6785274bb4842c03eabe203b_Custom%20enterprise%20software%20development.png",
    alt: "Enterprise software development and technology delivery",
    title: "Making technology work harder",
    body: "Where to focus when systems, data, and operations need to move forward.",
  },
];

export default function GrowthOutlook() {
  return (
    <section className={`home-section gro-section ${inter.className}`}>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="section-shell">
        <div className="section-header">
          <h2 className="section-heading">
            <span className="brand-gradient-text">Resources</span> and insights to inspire
          </h2>
        </div>

        <div className="section-body gro-grid">
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
