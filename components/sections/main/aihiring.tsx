'use client';

import React from 'react';
import { PrimaryCtaLink } from '@/components/ui/PrimaryCta';

/**
 * Control & governance section — single-file Next.js + React.
 * Drop this in as app/page.tsx (App Router) or pages/index.tsx (Pages Router).
 * Fully self-contained: no Tailwind, no icon library, no extra dependencies.
 * Styling uses Next.js's built-in styled-jsx.
 */

type Feature = { icon: React.ReactNode; title: string; body: string };

const FEATURES: Feature[] = [
  {
    icon: <KeyIcon />,
    title: "You decide what AI can and can't do",
    body: 'Set clear guardrails for every action. Agents operate within your rules, so you stay in control.',
  },
  {
    icon: <HistoryIcon />,
    title: 'Full activity log',
    body: 'Every decision is logged and traceable, so you always have answers when it matters.',
  },
  {
    icon: <UserCheckIcon />,
    title: 'Human in the loop, always',
    body: 'Every candidate that moves forward is approved by your team. Agents handle the volume, you make the decisions.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Enterprise-grade security',
    body: 'Every candidate, every conversation, fully in-house. No third-party exposure.',
  },
];

export default function AiHiring() {
  return (
    <section className="cg">
      <div className="cg__inner">
        {/* Left column */}
        <div className="cg__left">
          <p className="cg__eyebrow">Control &amp; governance</p>

          <h2 className="cg__heading">
            Guardrails built for
            <br />
            the stakes of hiring
          </h2>

          <p className="cg__sub">
            AI-driven speed. Human-led decisions. Built-in compliance.
          </p>

          <PrimaryCtaLink href="#" className="mt-10">
            Get Started
          </PrimaryCtaLink>

          <div className="cg__badges">
            <GdprBadge />
            <Soc2Badge />
            <IsoBadge />
            <HipaaBadge />
          </div>
        </div>

        {/* Right column: 2x2 feature grid */}
        <div className="cg__grid">
          {FEATURES.map((f) => (
            <article className="cg__card" key={f.title}>
              <div className="cg__iconBox">{f.icon}</div>
              <h3 className="cg__cardTitle">{f.title}</h3>
              <p className="cg__cardBody">{f.body}</p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .cg {
          --ink: #101014;
          --muted: #5a5f6b;
          --line: #e6e6e6;
          --iconbg: #f2f2ef;
          --accent: #6d5efc;
          --accent-hover: #5b4cf0;

          background: #ffffff;
          color: var(--ink);
          padding: 96px 40px;
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .cg__inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 64px;
          align-items: start;
        }

        /* ---------- Left column ---------- */
        .cg__left {
          display: flex;
          flex-direction: column;
        }

        .cg__eyebrow {
          margin: 0 0 22px;
          font-size: 15px;
          font-weight: 400;
          color: var(--ink);
        }

        .cg__heading {
          margin: 0;
          font-size: 46px;
          line-height: 1.12;
          font-weight: 500;
          letter-spacing: -0.02em;
          color: var(--ink);
        }

        .cg__sub {
          margin: 26px 0 0;
          max-width: 30ch;
          font-size: 18px;
          line-height: 1.55;
          color: var(--muted);
        }

        .cg__badges {
          margin-top: 90px;
          display: flex;
          align-items: center;
          gap: 26px;
          flex-wrap: wrap;
        }

        /* ---------- Right column ---------- */
        .cg__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .cg__card {
          border: 1px solid #cacbcd;
          border-radius: 1.25rem;
          padding: 1rem 1.5rem;
          background: #fff;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .cg__card:hover {
          border-color: #d8d8d8;
          box-shadow: 0 10px 30px -18px rgba(16, 16, 20, 0.25);
        }

        .cg__iconBox {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: var(--iconbg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ink);
        }

        .cg__cardTitle {
          margin: 30px 0 1.5rem;
          max-width: 23ch;
          font-size: 1.125rem;
          font-weight: 500;
          line-height: 1.3;
          letter-spacing: -0.01em;
          color: var(--ink);
        }

        .cg__cardBody {
          margin: 16px 0 0;
          color: #000;
          font-size: 0.875rem;
          line-height: 1.6;
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 960px) {
          .cg {
            padding: 64px 24px;
          }
          .cg__inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .cg__heading {
            font-size: 40px;
          }
          .cg__badges {
            margin-top: 40px;
          }
        }

        @media (max-width: 560px) {
          .cg__grid {
            grid-template-columns: 1fr;
          }
          .cg__heading {
            font-size: 34px;
          }
        }
      `}</style>
    </section>
  );
}

/* ============================================================= */
/* Feature icons (inline SVG, stroke = currentColor)             */
/* ============================================================= */

function KeyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
      <path d="m21 2-9.6 9.6" />
      <circle cx="7.5" cy="15.5" r="5.5" />
    </svg>
  );
}

function HistoryIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </svg>
  );
}

function UserCheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="m16 11 2 2 4-4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <rect x="9.3" y="11" width="5.4" height="4.2" rx="1" />
      <path d="M10.4 11v-1a1.6 1.6 0 0 1 3.2 0v1" />
    </svg>
  );
}

/* ============================================================= */
/* Compliance badges (monochrome SVG approximations).            */
/* Swap these for official badge assets when you have them.      */
/* ============================================================= */

function round(n: number) {
  return Math.round(n * 1000) / 1000;
}

function GdprBadge() {
  const stars = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
    const r = 26;
    return <Star key={i} cx={round(32 + r * Math.cos(angle))} cy={round(32 + r * Math.sin(angle))} />;
  });
  return (
    <span role="img" aria-label="GDPR compliant" style={{ display: 'inline-flex' }}>
      <svg width="58" height="58" viewBox="0 0 64 64" fill="#111">
        {stars}
        <text x="32" y="36" textAnchor="middle" fontSize="12" fontWeight="700" fontFamily="Arial, sans-serif" fill="#111">GDPR</text>
      </svg>
    </span>
  );
}

function Star({ cx, cy }: { cx: number; cy: number }) {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const rad = i % 2 === 0 ? 2.6 : 1.1;
    const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
    pts.push(`${round(cx + rad * Math.cos(a))},${round(cy + rad * Math.sin(a))}`);
  }
  return <polygon points={pts.join(' ')} />
}

function Soc2Badge() {
  return (
    <span role="img" aria-label="AICPA SOC 2" style={{ display: 'inline-flex' }}>
      <svg width="58" height="58" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="30" stroke="#111" strokeWidth="2" />
        <circle cx="32" cy="32" r="24" stroke="#111" strokeWidth="1" />
        <text x="32" y="27" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="Arial, sans-serif" fill="#111">AICPA</text>
        <text x="32" y="41" textAnchor="middle" fontSize="12" fontWeight="800" fontFamily="Arial, sans-serif" fill="#111">SOC 2</text>
      </svg>
    </span>
  );
}

function IsoBadge() {
  return (
    <span role="img" aria-label="ISO 27001 certified" style={{ display: 'inline-flex' }}>
      <svg width="58" height="58" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="30" stroke="#111" strokeWidth="2" />
        <ellipse cx="32" cy="32" rx="12" ry="30" stroke="#111" strokeWidth="1" />
        <line x1="2" y1="32" x2="62" y2="32" stroke="#111" strokeWidth="1" />
        <rect x="18" y="26" width="28" height="12" rx="2" fill="#fff" stroke="#111" strokeWidth="0.5" />
        <text x="32" y="31" textAnchor="middle" fontSize="7" fontWeight="800" fontFamily="Arial, sans-serif" fill="#111">ISO</text>
        <text x="32" y="38" textAnchor="middle" fontSize="6.5" fontWeight="700" fontFamily="Arial, sans-serif" fill="#111">27001</text>
      </svg>
    </span>
  );
}

function HipaaBadge() {
  return (
    <span role="img" aria-label="HIPAA compliant" style={{ display: 'inline-flex' }}>
      <svg width="58" height="58" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="30" stroke="#111" strokeWidth="2" />
        <line x1="32" y1="14" x2="32" y2="46" stroke="#111" strokeWidth="2" />
        <circle cx="32" cy="13" r="2" fill="#111" />
        <path d="M32 18 C24 24 24 32 32 38" stroke="#111" strokeWidth="1.6" fill="none" />
        <path d="M32 18 C40 24 40 32 32 38" stroke="#111" strokeWidth="1.6" fill="none" />
        <path d="M26 16 L38 16" stroke="#111" strokeWidth="1.6" />
        <text x="32" y="56" textAnchor="middle" fontSize="9" fontWeight="800" fontFamily="Arial, sans-serif" fill="#111">HIPAA</text>
      </svg>
    </span>
  );
}
