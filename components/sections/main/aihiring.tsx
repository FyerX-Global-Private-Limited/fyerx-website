'use client';

import React from 'react';
import { PrimaryCtaLink } from '@/components/ui/PrimaryCta';

/**
 * Control & governance section — single-file Next.js + React.
 * Drop this in as app/page.tsx (App Router) or pages/index.tsx (Pages Router).
 * Fully self-contained: no Tailwind, no icon library, no extra dependencies.
 * Styling uses Next.js's built-in styled-jsx.
 */

type Feature = { icon: React.ReactNode; title: string; body: string; tint: 'red' | 'purple' | 'yellow' | 'green' };

const FEATURES: Feature[] = [
  {
    icon: <KeyIcon />,
    title: 'Strategic by design',
    body: 'Every engagement begins with a clear understanding of the business objective, not a pre-set solution.',
    tint: 'red',
  },
  {
    icon: <HistoryIcon />,
    title: 'Disciplined execution',
    body: 'Defined plans, clear ownership, and consistent follow-through keep work progressing without unnecessary friction.',
    tint: 'purple',
  },
  {
    icon: <UserCheckIcon />,
    title: 'Partnership mindset',
    body: 'We work as an extension of your team, bringing context, judgement, and continuity to every engagement.',
    tint: 'yellow',
  },
  {
    icon: <ShieldIcon />,
    title: 'Built for progress',
    body: 'Our work is structured to create measurable movement today while supporting what the business needs next.',
    tint: 'green',
  },
];

export default function AiHiring() {
  return (
    <section className="cg">
      <div className="cg__inner">
        {/* Left column */}
        <div className="cg__left">
          <p className="cg__eyebrow">The FyerX standard</p>

          <h2 className="cg__heading">
            <span
              style={{
                background: "linear-gradient(90deg, #730031 0%, #CC0057 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              Built for work
            </span>
            <br />
            that moves business forward
          </h2>

          <p className="cg__sub">
            Clear thinking, reliable execution, and a working relationship designed around your priorities.
          </p>

          <PrimaryCtaLink href="#" className="mt-10">
            Work with FyerX
          </PrimaryCtaLink>

          <p className="cg__trust">Strategy-led · Outcome-focused · Built to last</p>
        </div>

        {/* Right column: 2x2 feature grid */}
        <div className="cg__grid">
          {FEATURES.map((f) => (
            <article className="cg__card" key={f.title}>
              <div className={`cg__iconBox cg__iconBox--${f.tint}`}>{f.icon}</div>
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
          font-family: var(--font-poppins), Arial, sans-serif;
          font-size: 36px;
          line-height: 1.25;
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

        .cg__trust {
          margin: 20px 0 0;
          font-size: 14px;
          letter-spacing: 0.02em;
          color: var(--muted);
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

        .cg__iconBox--red {
          background: #fbe3e3;
          color: #d8534a;
        }
        .cg__iconBox--purple {
          background: #ece7fc;
          color: #6d5efc;
        }
        .cg__iconBox--yellow {
          background: #fbf1d6;
          color: #d1a12e;
        }
        .cg__iconBox--green {
          background: #e1f5e7;
          color: #2fa360;
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

