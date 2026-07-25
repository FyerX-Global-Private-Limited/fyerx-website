'use client';

import React from 'react';

/**
 * "Your build is safe with us" trust / compliance section.
 * Single-file Next.js + React. Drop in as app/page.tsx or import <Trust />.
 * Fully self-contained: no Tailwind, no icon library, no extra dependencies.
 * Styling uses Next.js's built-in styled-jsx.
 *
 * The four compliance marks (GDPR, AICPA SOC 2, ISO 27001, HIPAA) are
 * hand-built monochrome SVG approximations. Swap them for official licensed
 * badge assets by replacing the four *Logo components near the bottom.
 */

export default function Trust() {
  return (
    <section className="trust">
      <div className="trust__inner">
        <h2 className="trust__heading">Your build is safe with us.</h2>

        <p className="trust__sub">
          monday.com&rsquo;s trusted infrastructure keeps your data secure with
          advanced admin controls and enterprise-grade compliance.
        </p>

        <div className="trust__actions">
          <a href="#" className="trust__btn trust__btn--primary">
            Start building
          </a>
          <a href="#" className="trust__btn trust__btn--ghost">
            Our trust center
          </a>
        </div>

        <div className="trust__grid">
          <div className="trust__card">
            <GdprLogo />
          </div>
          <div className="trust__card">
            <Soc2Logo />
          </div>
          <div className="trust__card">
            <IsoLogo />
          </div>
          <div className="trust__card">
            <HipaaLogo />
          </div>
        </div>
      </div>

      <style jsx>{`
        .trust {
          --ink: #16181d;
          --muted: #5a5f6b;
          --line: #eceef1;
          --card-line: #e9ebef;
          background: #f7f8fa;
          color: var(--ink);
          margin: 0 24px;
          border-radius: 24px;
          padding: 64px 40px 80px;
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .trust__inner {
          max-width: 1140px;
          margin: 0 auto;
          text-align: center;
        }

        .trust__heading {
          color: rgb(0, 0, 0);
          width: auto;
          margin-top: 0px;
          margin-bottom: 0px;
          font-size: 3rem;
          font-weight: 400;
          line-height: 1.2;
        }

        .trust__sub {
          margin: 26px auto 0;
          max-width: 640px;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: var(--muted);
        }

        .trust__actions {
          margin: 34px 0 0;
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .trust__btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 17px;
          font-weight: 500;
          padding: 10px 23px;
          border-radius: 10px;
          text-decoration: none;
          transition: background 0.18s ease, border-color 0.18s ease,
            transform 0.18s ease;
        }
        .trust__btn--primary {
          background: #2c2c2e;
          color: #fff;
          border: 1px solid #2c2c2e;
        }
        .trust__btn--primary:hover {
          background: #1c1c1e;
          transform: translateY(-1px);
        }
        .trust__btn--ghost {
          background: #fff;
          color: var(--ink);
          border: 1px solid #dfe2e7;
        }
        .trust__btn--ghost:hover {
          border-color: #c7ccd4;
          transform: translateY(-1px);
        }

        .trust__grid {
          column-gap: 1rem;
          row-gap: 1rem;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: 3rem;
          margin-bottom: 2rem;
          display: flex;
          flex-flow: wrap;
        }

        .trust__card {
          background: #fbfcfd;
          border: 1px solid var(--card-line);
          border-radius: 16px;
          aspect-ratio: 5 / 4;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .trust__card:hover {
          border-color: #dcdfe4;
          box-shadow: 0 14px 40px -24px rgba(16, 16, 20, 0.25);
        }

        @media (max-width: 900px) {
          .trust__heading {
            font-size: 42px;
          }
          .trust__grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 560px;
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (max-width: 520px) {
          .trust {
            padding: 48px 20px 64px;
          }
          .trust__heading {
            font-size: 34px;
          }
          .trust__sub {
            font-size: 17px;
          }
          .trust__grid {
            grid-template-columns: 1fr;
            max-width: 300px;
          }
        }
      `}</style>
    </section>
  );
}

/* ============================================================= */
/* Compliance marks — monochrome SVG approximations              */
/* ============================================================= */

function round(n: number) {
  return Math.round(n * 1000) / 1000;
}

function Star({
  cx,
  cy,
  r = 9,
  fill = '#111',
}: {
  cx: number;
  cy: number;
  r?: number;
  fill?: string;
}) {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const rad = i % 2 === 0 ? r : r * 0.42;
    const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
    pts.push(`${round(cx + rad * Math.cos(a))},${round(cy + rad * Math.sin(a))}`);
  }
  return <polygon points={pts.join(' ')} fill={fill} />;
}

function GdprLogo() {
  const ring: React.ReactNode[] = [];
  for (let i = 0; i < 12; i++) {
    if (i === 3 || i === 9) continue; // leave the horizontal middle for the wordmark
    const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
    const r = 62;
    ring.push(<Star key={i} cx={round(100 + r * Math.cos(a))} cy={round(100 + r * Math.sin(a))} r={9} />);
  }
  return (
    <svg width="150" height="150" viewBox="0 0 200 200" aria-label="GDPR compliant" role="img">
      {ring}
      <Star cx={48} cy={100} r={9} />
      <Star cx={152} cy={100} r={9} />
      <text
        x="100"
        y="110"
        textAnchor="middle"
        fontSize="28"
        fontWeight="800"
        fontFamily="Arial, sans-serif"
        fill="#111"
      >
        GDPR
      </text>
    </svg>
  );
}

function Soc2Logo() {
  return (
    <svg width="150" height="150" viewBox="0 0 200 200" aria-label="AICPA SOC 2" role="img">
      <defs>
        <path id="soc2Top" d="M 100 100 m -80 0 a 80 80 0 0 1 160 0" />
        <path id="soc2Bottom" d="M 30 100 a 70 70 0 0 0 140 0" />
      </defs>
      <circle cx="100" cy="100" r="92" fill="#111" />
      <circle cx="100" cy="100" r="62" fill="#fff" />
      <circle cx="100" cy="100" r="86" fill="none" stroke="#fff" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="66" fill="none" stroke="#fff" strokeWidth="1.5" />

      <text fill="#fff" fontFamily="Arial, sans-serif" fontSize="10.5" fontWeight="600" letterSpacing="0.5">
        <textPath href="#soc2Top" startOffset="50%" textAnchor="middle">
          AICPA Service Organization Control Reports
        </textPath>
      </text>
      <text fill="#fff" fontFamily="Arial, sans-serif" fontSize="9.5" fontWeight="600" letterSpacing="0.5">
        <textPath href="#soc2Bottom" startOffset="50%" textAnchor="middle">
          Formerly SAS 70 Reports
        </textPath>
      </text>

      <text x="100" y="90" textAnchor="middle" fontSize="17" fontWeight="700" fontFamily="Arial, sans-serif" fill="#111">
        AICPA
      </text>
      <line x1="72" y1="98" x2="128" y2="98" stroke="#111" strokeWidth="1.5" />
      <text x="100" y="122" textAnchor="middle" fontSize="24" fontWeight="800" fontFamily="Arial, sans-serif" fill="#111">
        SOC 2
      </text>
    </svg>
  );
}

function IsoLogo() {
  return (
    <svg width="150" height="150" viewBox="0 0 200 200" aria-label="ISO 27001 information security" role="img">
      <defs>
        <path id="isoTop" d="M 100 100 m -78 0 a 78 78 0 0 1 156 0" />
      </defs>
      <circle cx="100" cy="100" r="92" fill="none" stroke="#111" strokeWidth="2.5" />

      <text fill="#111" fontFamily="Arial, sans-serif" fontSize="12.5" fontWeight="700" letterSpacing="0.5">
        <textPath href="#isoTop" startOffset="50%" textAnchor="middle">
          ISO 27001 INFORMATION SECURITY
        </textPath>
      </text>

      {/* globe */}
      <circle cx="100" cy="103" r="34" fill="none" stroke="#111" strokeWidth="2" />
      <ellipse cx="100" cy="103" rx="14" ry="34" fill="none" stroke="#111" strokeWidth="1.4" />
      <ellipse cx="100" cy="103" rx="28" ry="34" fill="none" stroke="#111" strokeWidth="1.2" />
      <line x1="66" y1="103" x2="134" y2="103" stroke="#111" strokeWidth="1.4" />
      <line x1="72" y1="86" x2="128" y2="86" stroke="#111" strokeWidth="1.1" />
      <line x1="72" y1="120" x2="128" y2="120" stroke="#111" strokeWidth="1.1" />

      {/* ISO wordmark over globe */}
      <rect x="72" y="92" width="56" height="22" fill="#fff" opacity="0.88" />
      <text x="100" y="110" textAnchor="middle" fontSize="24" fontWeight="800" fontFamily="Arial, sans-serif" fill="#111">
        ISO
      </text>
      <text x="100" y="150" textAnchor="middle" fontSize="20" fontWeight="800" fontFamily="Arial, sans-serif" fill="#111">
        27001
      </text>
    </svg>
  );
}

function HipaaLogo() {
  return (
    <svg width="160" height="150" viewBox="0 0 220 200" aria-label="HIPAA compliant" role="img">
      {/* wings */}
      <path
        d="M92 66 C70 50 44 52 30 64 C48 66 66 72 80 84 C70 78 54 76 44 80 C64 84 80 92 90 104 Z"
        fill="#111"
      />
      <path
        d="M92 66 C70 50 44 52 30 64 C48 66 66 72 80 84 C70 78 54 76 44 80 C64 84 80 92 90 104 Z"
        fill="#111"
        transform="translate(220,0) scale(-1,1)"
      />
      {/* staff */}
      <circle cx="92" cy="52" r="7" fill="#111" />
      <rect x="89" y="58" width="6" height="96" rx="3" fill="#111" />
      {/* snakes */}
      <path d="M92 70 C74 78 74 92 92 100 C110 108 110 122 92 130" fill="none" stroke="#111" strokeWidth="5" />
      <path d="M92 70 C110 78 110 92 92 100 C74 108 74 122 92 130" fill="none" stroke="#111" strokeWidth="5" />
      {/* HIPAA wordmark */}
      <text x="120" y="118" textAnchor="start" fontSize="34" fontWeight="800" fontFamily="Arial, sans-serif" fill="#111">
        HIPAA
      </text>
    </svg>
  );
}
