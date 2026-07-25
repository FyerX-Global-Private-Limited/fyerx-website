'use client';

import React from 'react';

/**
 * "Designed for security and control" section — single-file Next.js + React.
 * Drop this in as app/page.tsx (App Router) or pages/index.tsx (Pages Router),
 * or import <SecurityControl /> anywhere.
 * Fully self-contained: no Tailwind, no icon library, no extra dependencies.
 * Styling uses Next.js's built-in styled-jsx.
 */

type Card = {
  icon: React.ReactNode;
  title: React.ReactNode;
  body: string;
};

const CARDS: Card[] = [
  {
    icon: <ComplianceBadges />,
    title: (
      <>
        Enterprise-grade
        <br />
        security
      </>
    ),
    body: "Built on monday.com's trusted security standards so it's safe for sensitive work at scale.",
  },
  {
    icon: <LockIcon />,
    title: 'Private by default',
    body: 'Your data, context, and chats stay private. Nothing is shared unless you say so.',
  },
  {
    icon: <CursorClickIcon />,
    title: (
      <>
        Controlled by
        <br />
        you
      </>
    ),
    body: 'Acts on your behalf, but with your approval. You review, approve, and stay in control of every step.',
  },
  {
    icon: <CubeIcon />,
    title: 'Full visibility',
    body: 'Every action is clear and traceable. You always know what happened, and why.',
  },
];

export default function SecurityControl() {
  return (
    <section className="sc">
      <h2 className="sc__heading">
        Designed for security and control,
        <br />
        so you can work with confidence
      </h2>

      <div className="sc__grid">
        {CARDS.map((c, i) => (
          <article className="sc__card" key={i}>
            <h3 className="sc__cardTitle">{c.title}</h3>
            <div className="sc__icon">{c.icon}</div>
            <p className="sc__cardBody">{c.body}</p>
          </article>
        ))}
      </div>

      <style jsx>{`
        .sc {
          --ink: #101014;
          --muted: #4b4f5a;
          --line: #ececec;
          background: #ffffff;
          color: var(--ink);
          padding: 40px 40px 80px;
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .sc__heading {
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 55px;
          max-width: 29ch;
          text-align: center;
          font-size: 42px;
          line-height: 115%;
          font-weight: 400;
          color: var(--ink);
        }

        .sc__grid {
          max-width: 1320px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .sc__card {
          border: 1px solid var(--line);
          border-radius: 22px;
          padding: 44px 30px 40px;
          background: #fff;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .sc__card:hover {
          border-color: #dcdcdc;
          box-shadow: 0 14px 40px -22px rgba(16, 16, 20, 0.28);
        }

        .sc__cardTitle {
          margin: 0;
          font-size: 1.5rem;
          line-height: 1.25;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--ink);
        }

        .sc__icon {
          height: 120px;
          margin: 34px 0 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ink);
        }

        .sc__cardBody {
          margin: 0;
          max-width: 30ch;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.6;
          color: var(--muted);
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 1080px) {
          .sc__grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 720px;
          }
          .sc__heading {
            font-size: 36px;
          }
        }

        @media (max-width: 560px) {
          .sc {
            padding: 32px 20px 56px;
          }
          .sc__grid {
            grid-template-columns: 1fr;
            max-width: 420px;
          }
          .sc__heading {
            font-size: 30px;
          }
        }
      `}</style>
    </section>
  );
}

/* ============================================================= */
/* Card icons (inline SVG)                                       */
/* ============================================================= */

function LockIcon() {
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="24" y="44" width="48" height="38" rx="8" />
      <path d="M34 44v-8a14 14 0 0 1 28 0v8" />
    </svg>
  );
}

function CursorClickIcon() {
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* radiating arcs */}
      <path d="M44 40a16 16 0 0 1 16 16" />
      <path d="M37 33a26 26 0 0 1 26 26" />
      {/* cursor pointer */}
      <path d="M46 46 46 76 53.5 68.5 59 80 64 77.5 58.5 66.5 69 66.5 Z" fill="#fff" />
    </svg>
  );
}

function CubeIcon() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M50 20 82 38v34L50 90 18 72V38z" />
      <path d="M18 38l32 18 32-18" />
      <path d="M50 56v34" />
    </svg>
  );
}

/* ============================================================= */
/* Compliance badges row (monochrome SVG approximations).        */
/* Swap these for official badge assets when you have them.      */
/* ============================================================= */

function ComplianceBadges() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <GdprBadge />
      <Soc2Badge />
      <IsoBadge />
      <HipaaBadge />
    </div>
  );
}

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
      <svg width="52" height="52" viewBox="0 0 64 64" fill="#111">
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
  return <polygon points={pts.join(' ')} />;
}

function Soc2Badge() {
  return (
    <span role="img" aria-label="AICPA SOC 2" style={{ display: 'inline-flex' }}>
      <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
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
      <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
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
      <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
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
