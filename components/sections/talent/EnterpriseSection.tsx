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

import { TALENT_ACCENT, TALENT_PRIMARY } from "@/lib/talent-brand";

const features = [
  "A clear role-scoping conversation",
  "Flexible engagement models",
  "Consistent communication and feedback loops",
  "Support from shortlist through onboarding",
];

function FeatureCheck() {
  return (
    <span
      className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
      style={{ backgroundColor: TALENT_PRIMARY }}
    >
      <svg
        viewBox="0 0 24 24"
        width={15}
        height={15}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 12.5l4.5 4.5L19 7.5"
          stroke={TALENT_ACCENT}
          strokeWidth={2.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
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
        <clipPath id="talentEntCloverClip">
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
        clipPath="url(#talentEntCloverClip)"
      />
    </svg>
  );
}

export default function EnterpriseSection() {
  return (
    <section className="ent">
      <div className="ent__card">
        <div className="ent__left">
          <h2 className="ent__title">Start with the roles that are hardest to fill.</h2>

          <p className="ent__subtitle">
            Bring us the role, hiring plan, delivery timeline, or capacity gap.
            We will help define the most effective route to the right talent.
          </p>

          <ul className="ent__list">
            {features.map((f) => (
              <li className="ent__item" key={f}>
                <FeatureCheck />
                <span className="ent__item-label">{f}</span>
              </li>
            ))}
          </ul>

          <button className="ent__cta" type="button">
            Talk to Our Talent Team
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
          padding: 40px 16px;
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
          border-radius: 20px;
          padding: 28px 20px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          align-items: center;
          box-sizing: border-box;
        }
        @media (min-width: 861px) {
          .ent__card {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            border-radius: 24px;
            padding: 56px 60px;
          }
        }
        .ent__left {
          max-width: 460px;
        }
        .ent__title {
          margin: 0;
          font-size: clamp(1.75rem, 5vw, 2.875rem);
          line-height: 1.12;
          font-weight: 500;
          letter-spacing: -0.02em;
          color: var(--ink);
        }
        .ent__subtitle {
          margin: 16px 0 0;
          font-size: clamp(0.875rem, 2.5vw, 0.9375rem);
          line-height: 1.55;
          color: #52525b;
          max-width: 400px;
        }
        @media (min-width: 640px) {
          .ent__subtitle {
            margin-top: 20px;
          }
        }
        .ent__list {
          list-style: none;
          margin: 24px 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        @media (min-width: 640px) {
          .ent__list {
            margin-top: 30px;
            gap: 14px;
          }
        }
        .ent__item {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #f6f7f7;
          border-radius: 999px;
          padding: 12px 16px;
        }
        @media (min-width: 640px) {
          .ent__item {
            gap: 14px;
            padding: 14px 22px;
          }
        }
        .ent__item-label {
          font-size: clamp(0.8125rem, 2.5vw, 0.9375rem);
          font-weight: 500;
          line-height: 1.35;
          color: #27272a;
        }
        .ent__cta {
          margin-top: 24px;
          width: 100%;
          background: #11551C;
          color: #9EEBAA;
          border: none;
          border-radius: 999px;
          padding: 14px 24px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.15s ease, opacity 0.15s ease;
        }
        @media (min-width: 480px) {
          .ent__cta {
            width: auto;
            margin-top: 30px;
            padding: 15px 30px;
          }
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
          max-width: 320px;
          height: auto;
          aspect-ratio: 1 / 1;
        }
        @media (min-width: 640px) {
          .ent-clover {
            max-width: 400px;
          }
        }
        @media (min-width: 861px) {
          .ent-clover {
            max-width: 480px;
          }
        }

        @media (max-width: 860px) {
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
