"use client";

import React from "react";

/**
 * Integrations "Connect 500+ apps" section
 * Exact copy + design replication. No external dependencies.
 *
 * Icons are rendered as colored monogram hexagon badges so the file
 * builds anywhere. To use real brand logos, drop image files in
 * /public/logos and set `img: "/logos/slack.svg"` on any item below —
 * it will render the image instead of the monogram automatically.
 */

const rowOne = [
  { name: "Typeform", short: "T", color: "#262627" },
  { name: "LinkedIn", short: "in", color: "#0A66C2" },
  { name: "Drive", short: "▲", color: "#0066DA" },
  { name: "Docusign", short: "D", color: "#000000" },
  { name: "Slack", short: "#", color: "#4A154B" },
  { name: "Teams", short: "T", color: "#5059C9" },
  { name: "Outlook", short: "O", color: "#0A65C1" },
];

const rowTwo = [
  { name: "DropBox", short: "▽", color: "#0061FF" },
  { name: "Calendar", short: "31", color: "#4285F4" },
  { name: "Zoom", short: "Z", color: "#0B5CFF" },
  { name: "Lusha", short: "L", color: "#8E00FF" },
  { name: "Excel", short: "X", color: "#217346" },
  { name: "Meta ads", short: "M", color: "#0866FF" },
  { name: "Gmail", short: "M", color: "#EA4335" },
];

function AppChip({ name, short, color, img }) {
  return (
    <div className="app-chip">
      <span className="app-chip__hex">
        <span className="app-chip__hex-bg" />
        {img ? (
          <img className="app-chip__img" src={img} alt={name} />
        ) : (
          <span className="app-chip__mono" style={{ color }}>
            {short}
          </span>
        )}
      </span>
      <span className="app-chip__label">{name}</span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee">
      <div className={`marquee__track ${reverse ? "marquee__track--reverse" : ""}`}>
        {loop.map((item, i) => (
          <AppChip key={`${item.name}-${i}`} {...item} />
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
          Connect 500+ apps and tools
          <br />
          your team already trusts
        </h2>

        <p className="integrations__subtitle">
          Integrate your tech stack to reduce admin time and boost velocity.
        </p>

        <div className="integrations__cta-wrap">
          <button className="integrations__cta" type="button">
            Get Started <span aria-hidden="true">→</span>
          </button>
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
          padding: 48px 24px;
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
          font-size: clamp(30px, 4.2vw, 52px);
          line-height: 1.15;
          font-weight: 700;
          letter-spacing: -0.5px;
          color: #111114;
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
        .integrations__cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #000000;
          color: #ffffff;
          border: none;
          border-radius: 999px;
          padding: 15px 30px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.15s ease, opacity 0.15s ease;
        }
        .integrations__cta:hover {
          transform: translateY(-1px);
          opacity: 0.9;
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

        .app-chip {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #f4f4f5;
          border-radius: 14px;
          padding: 14px 26px 14px 16px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .app-chip__hex {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
        }
        .app-chip__hex-bg {
          position: absolute;
          inset: 0;
          background: #ffffff;
          clip-path: polygon(
            50% 0%,
            93% 25%,
            93% 75%,
            50% 100%,
            7% 75%,
            7% 25%
          );
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }
        .app-chip__mono {
          position: relative;
          font-size: 14px;
          font-weight: 700;
          line-height: 1;
        }
        .app-chip__img {
          position: relative;
          width: 18px;
          height: 18px;
          object-fit: contain;
        }
        .app-chip__label {
          font-size: 16px;
          font-weight: 500;
          color: #18181b;
        }

        @media (max-width: 640px) {
          .app-chip {
            padding: 12px 20px 12px 14px;
          }
          .app-chip__label {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
