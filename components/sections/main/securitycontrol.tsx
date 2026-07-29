'use client';

import React from 'react';

/**
 * "Built for businesses moving forward" section — single-file Next.js + React.
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
    icon: <GrowthPathIcon />,
    title: 'Growth initiatives',
    body: 'From new-market plans to demand creation, we help turn commercial priorities into focused action.',
  },
  {
    icon: <PuzzleGapIcon />,
    title: 'Capability gaps',
    body: 'When internal capacity falls short, bring in the expertise needed to keep work progressing.',
  },
  {
    icon: <ConnectedArrowsIcon />,
    title: 'Business change',
    body: 'New systems, new teams, or new direction require support that works with the wider business.',
  },
  {
    icon: <ForwardArrowIcon />,
    title: 'Execution at pace',
    body: 'Move from decision to delivery with a team built to take responsibility for the work.',
  },
];

export default function SecurityControl() {
  return (
    <section className="sc">
      <h2 className="sc__heading">
        Built for businesses
        <br />
        <span
          style={{
            background: "linear-gradient(90deg, #730031 0%, #CC0057 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          moving forward
        </span>
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
          font-family: var(--font-poppins), Arial, sans-serif;
          font-size: 36px;
          line-height: 1.25;
          font-weight: 500;
          letter-spacing: -0.02em;
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

function GrowthPathIcon() {
  // Upward path — an ascending line ending in an arrow, for "Growth initiatives"
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 68 L36 50 L50 62 L74 34" />
      <path d="M58 34 H74 V50" />
    </svg>
  );
}

function PuzzleGapIcon() {
  // Missing puzzle piece — a solid piece and a dashed, separated piece, for "Capability gaps"
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 28 H40 V38 A6 6 0 0 1 40 50 V60 H14 Z" />
      <path d="M82 28 H56 V38 A6 6 0 0 0 56 50 V60 H82 Z" strokeDasharray="4 5" />
    </svg>
  );
}

function ConnectedArrowsIcon() {
  // Two curved arrows forming a loop, for "Business change"
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 36 A34 34 0 0 1 74 26" />
      <path d="M60 18 H76 V34" />
      <path d="M80 60 A34 34 0 0 1 22 70" />
      <path d="M36 78 H20 V62" />
    </svg>
  );
}

function ForwardArrowIcon() {
  // Forward arrow with motion lines, for "Execution at pace"
  return (
    <svg width="96" height="96" viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 40 H26" />
      <path d="M14 56 H26" />
      <path d="M34 48 H70" />
      <path d="M58 34 L74 48 L58 62" />
    </svg>
  );
}
