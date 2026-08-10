"use client";

import React from "react";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { splitTrustBarLogos, type TrustBarLogo } from "@/lib/trustbar-logos";

const [rowOne, rowTwo] = splitTrustBarLogos(2);

function LogoChip({ name, img, scale }: TrustBarLogo) {
  return (
    <div className="logo-chip">
      <img
        className="logo-chip__img"
        src={img}
        alt={name}
        loading="lazy"
        style={
          scale ? { transform: `scale(${scale})`, transformOrigin: "center" } : undefined
        }
      />
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: TrustBarLogo[]; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee">
      <div className={`marquee__track ${reverse ? "marquee__track--reverse" : ""}`}>
        {loop.map((item, i) => (
          <LogoChip key={`${item.name}-${i}`} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function IntegrationsSection() {
  return (
    <section className="integrations">
      <div className="integrations__inner">
        <h2 className="integrations__title">
          Built to support teams at different stages of scale
        </h2>

        <p className="integrations__subtitle">
          From a single specialist search to project staffing and embedded recruitment support, the engagement can expand as your workforce needs change.
        </p>

        <div className="integrations__cta-wrap">
          <PrimaryCtaLink href="/talent/book-session" color="#11551C" textColor="#9EEBAA">Talk to a Talent Specialist</PrimaryCtaLink>
        </div>

        <div className="integrations__rows">
          <MarqueeRow items={rowOne} />
          <MarqueeRow items={rowTwo} reverse />
        </div>
      </div>

      <style jsx>{`
        .integrations {
          width: 100%;
          background: #ffffff;
          padding: 40px 16px;
          overflow: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        @media (min-width: 640px) {
          .integrations {
            padding: 56px 40px;
          }
        }
        @media (min-width: 1024px) {
          .integrations {
            padding: 64px 64px;
          }
        }
        .integrations__inner {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .integrations__title {
          margin: 0;
          font-size: clamp(1.75rem, 5vw, 2.875rem);
          line-height: 1.12;
          font-weight: 500;
          letter-spacing: -0.02em;
          color: var(--ink);
        }
        .integrations__subtitle {
          margin: 22px auto 0;
          font-size: clamp(15px, 1.4vw, 18px);
          color: #52525b;
          font-weight: 400;
        }
        .integrations__cta-wrap {
          margin-top: 30px;
        }
        .integrations__rows {
          margin-top: 52px;
          display: flex;
          flex-direction: column;
          gap: 22px;
        }
      `}</style>

      <style jsx global>{`
        .marquee {
          width: 100%;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            #000 6%,
            #000 94%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            #000 6%,
            #000 94%,
            transparent
          );
        }
        .marquee__track {
          display: flex;
          gap: 18px;
          width: max-content;
          animation: marquee-scroll 34s linear infinite;
        }
        .marquee__track--reverse {
          animation-direction: reverse;
        }
        .marquee:hover .marquee__track {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .logo-chip {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f4f4f5;
          border-radius: 14px;
          padding: 16px 28px;
          min-width: 140px;
          height: 72px;
          flex-shrink: 0;
        }
        .logo-chip__img {
          display: block;
          max-height: 36px;
          max-width: 120px;
          width: auto;
          height: auto;
          object-fit: contain;
        }

        @media (max-width: 640px) {
          .logo-chip {
            min-width: 120px;
            height: 64px;
            padding: 14px 22px;
          }
          .logo-chip__img {
            max-height: 30px;
            max-width: 100px;
          }
        }
      `}</style>
    </section>
  );
}
