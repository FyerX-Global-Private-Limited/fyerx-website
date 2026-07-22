"use client";

import React from "react";

/**
 * "Talk to an expert for enterprise solutions" section.
 * Exact copy + design replication. No external dependencies.
 *
 * Swap IMAGE_SRC for your own asset (e.g. "/images/team.jpg").
 * The photo is masked into a 4-petal clover (quatrefoil) via an inline SVG clipPath.
 */

const IMAGE_SRC =
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80";

const features = [
  "Dedicated campaign support",
  "Reporting tied to real results",
  "Flexible engagement models",
  "Quick turnaround on requests",
];

function CheckIcon() {
  return (
    <svg
      className="ent-check__glyph"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12.5l4.5 4.5L19 7.5"
        stroke="#ffffff"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloverImage({ src }: { src: string }) {
  return (
    <svg
      className="ent-clover"
      viewBox="0 0 200 200"
      role="img"
      aria-label="Team collaborating"
    >
      <defs>
        <clipPath id="cloverClip">
          {/* four overlapping circles union into a quatrefoil */}
          <circle cx="62" cy="62" r="58" />
          <circle cx="138" cy="62" r="58" />
          <circle cx="62" cy="138" r="58" />
          <circle cx="138" cy="138" r="58" />
        </clipPath>
      </defs>
      <image
        href={src}
        x="0"
        y="0"
        width="200"
        height="200"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#cloverClip)"
      />
    </svg>
  );
}

export default function EnterpriseSection() {
  return (
    <section className="ent">
      <div className="ent__card">
        <div className="ent__left">
          <h2 className="ent__title">Talk to an expert for B2B marketing</h2>

          <p className="ent__subtitle">
            Get a clear view of what's possible for your pipeline, and the
            right approach to get there, with support along the way.
          </p>

          <ul className="ent__list">
            {features.map((f) => (
              <li className="ent__item" key={f}>
                <span className="ent__check">
                  <CheckIcon />
                </span>
                <span className="ent__item-label">{f}</span>
              </li>
            ))}
          </ul>

          <button className="ent__cta" type="button">
            Contact Sales
          </button>
        </div>

        <div className="ent__right">
          <CloverImage src={IMAGE_SRC} />
        </div>
      </div>

      <style jsx>{`
        .ent {
          width: 100%;
          background: #ffffff;
          padding: 48px 24px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          box-sizing: border-box;
        }
        @media (min-width: 640px) {
          .ent {
            padding: 56px 40px;
          }
        }
        @media (min-width: 1024px) {
          .ent {
            padding: 64px 64px;
          }
        }
        .ent__card {
          max-width: 1180px;
          margin: 0 auto;
          border: 1px solid #ececee;
          border-radius: 24px;
          padding: 56px 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          box-sizing: border-box;
        }
        .ent__left {
          max-width: 460px;
        }
        .ent__title {
          margin: 0;
          font-size: clamp(30px, 3.4vw, 42px);
          line-height: 1.12;
          font-weight: 700;
          letter-spacing: -0.5px;
          color: #111114;
        }
        .ent__subtitle {
          margin: 20px 0 0;
          font-size: 15px;
          line-height: 1.55;
          color: #52525b;
          max-width: 400px;
        }
        .ent__list {
          list-style: none;
          margin: 30px 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .ent__item {
          display: flex;
          align-items: center;
          gap: 14px;
          background: #f4f4f5;
          border-radius: 999px;
          padding: 14px 22px;
        }
        .ent__check {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #1ec6c6;
          flex-shrink: 0;
        }
        .ent__check__glyph,
        .ent-check__glyph {
          width: 15px;
          height: 15px;
        }
        .ent__item-label {
          font-size: 15px;
          font-weight: 500;
          color: #27272a;
        }
        .ent__cta {
          margin-top: 30px;
          background: #000000;
          color: #ffffff;
          border: none;
          border-radius: 999px;
          padding: 15px 30px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.15s ease, opacity 0.15s ease;
        }
        .ent__cta:hover {
          transform: translateY(-1px);
          opacity: 0.9;
        }
        .ent__right {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .ent-clover {
          width: 100%;
          max-width: 480px;
          height: auto;
          aspect-ratio: 1 / 1;
        }

        @media (max-width: 860px) {
          .ent__card {
            grid-template-columns: 1fr;
            padding: 40px 28px;
            gap: 36px;
          }
          .ent__right {
            order: -1;
          }
          .ent__left {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
