'use client';

import React from 'react';

/**
 * "Capability for Every Stage of Growth" section — single-file Next.js + React.
 * Drop this in as app/page.tsx (App Router) or pages/index.tsx (Pages Router),
 * or import <SecurityControl /> anywhere.
 * Fully self-contained: no Tailwind, no icon library, no extra dependencies.
 * Styling uses Next.js's built-in styled-jsx.
 */

type Card = {
  icon: React.ReactNode;
  title: React.ReactNode;
  body: string;
  tint: "orange" | "purple" | "pink" | "green";
};

const CARDS: Card[] = [
  {
    icon: <TargetIcon />,
    title: 'Growth initiatives',
    body: 'From new-market plans to demand creation, we help turn commercial priorities into focused action.',
    tint: 'orange',
  },
  {
    icon: <PuzzleIcon />,
    title: 'Capability gaps',
    body: 'When internal capacity falls short, bring in the expertise needed to keep work progressing.',
    tint: 'purple',
  },
  {
    icon: <SyncIcon />,
    title: 'Business change',
    body: 'New systems, new teams, or new direction require support that works with the wider business.',
    tint: 'pink',
  },
  {
    icon: <BoltIcon />,
    title: 'Execution at pace',
    body: 'Move from decision to delivery with a team built to take responsibility for the work.',
    tint: 'green',
  },
];

export default function SecurityControl() {
  return (
    <section className="home-section sc">
      <div className="section-shell">
        <div className="section-header section-header--center mb-[var(--section-content-gap)]">
          <h2 className="section-heading">
            Capability for Every Stage of{" "}
            <span className="brand-gradient-text">Growth</span>
          </h2>
        </div>

        <div className="section-body mt-0 sc__grid">
        {CARDS.map((c, i) => (
          <article className="sc__card" key={i}>
            <h3 className="sc__cardTitle">{c.title}</h3>
            <div className={`sc__icon sc__icon--${c.tint}`}>{c.icon}</div>
            <p className="sc__cardBody">{c.body}</p>
          </article>
        ))}
        </div>
      </div>

      <style jsx>{`
        .sc {
          --ink: #101014;
          --muted: #4b4f5a;
          --line: #ececec;
          background: #ffffff;
          color: var(--ink);
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .sc__grid {
          max-width: 1320px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .sc__card {
          border: 1px solid var(--line);
          border-radius: 22px;
          padding: 28px 20px 32px;
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
          margin: 0 0 1.25rem;
          font-size: 1.25rem;
          line-height: 1.25;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--ink);
        }

        .sc__icon {
          height: 72px;
          width: 72px;
          margin: 0 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          box-shadow: 0 6px 16px rgba(20, 20, 43, 0.1);
        }
        .sc__icon--orange { background: #FFF0E6; color: #FDAB3D; }
        .sc__icon--purple { background: #F3EEFF; color: #6161FF; }
        .sc__icon--pink { background: #FFE8F5; color: #FF5AC4; }
        .sc__icon--green { background: #E8F8EF; color: #00CA72; }

        .sc__cardBody {
          margin: 0 auto;
          max-width: 30ch;
          font-size: 0.9375rem;
          font-weight: 400;
          line-height: 1.6;
          color: var(--muted);
          text-align: center;
        }

        /* ---------- Responsive ---------- */
        @media (max-width: 559px) {
          .sc__card {
            padding: 22px 16px 26px;
          }
          .sc__cardTitle {
            font-size: 1.125rem;
          }
          .sc__cardBody {
            max-width: none;
            font-size: 0.875rem;
          }
          .sc__icon {
            height: 64px;
            width: 64px;
          }
        }

        @media (min-width: 640px) {
          .sc__grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            max-width: 720px;
          }
          .sc__card {
            padding: 36px 24px 32px;
          }
          .sc__cardTitle {
            font-size: 1.375rem;
          }
          .sc__icon {
            height: 84px;
            width: 84px;
          }
        }

        @media (min-width: 1080px) {
          .sc__grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            max-width: 1320px;
          }
          .sc__card {
            padding: 44px 30px 40px;
          }
          .sc__cardTitle {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
          }
          .sc__icon {
            height: 96px;
            width: 96px;
            margin-bottom: 1.875rem;
          }
          .sc__cardBody {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

/* ============================================================= */
/* Monday-style bold glyphs (target, puzzle, sync, bolt)         */
/* ============================================================= */

function TargetIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="15" fill="currentColor" opacity="0.18" />
      <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="2.8" />
      <circle cx="20" cy="20" r="8.5" stroke="currentColor" strokeWidth="2.8" />
      <circle cx="20" cy="20" r="3.2" fill="currentColor" />
    </svg>
  );
}

function PuzzleIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="15" fill="currentColor" opacity="0.16" />
      <path
        d="M14 11h6.2v-1.8a3 3 0 1 1 6 0V11H27a1.2 1.2 0 0 1 1.2 1.2v5h1.8a3 3 0 1 1 0 6h-1.8v5A1.2 1.2 0 0 1 27 29.4h-6.2v1.8a3 3 0 1 1-6 0v-1.8H12a1.2 1.2 0 0 1-1.2-1.2v-5H9a3 3 0 1 1 0-6h1.8v-5A1.2 1.2 0 0 1 12 11h2z"
        fill="currentColor"
      />
    </svg>
  );
}

function SyncIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="15" fill="currentColor" opacity="0.16" />
      <path
        d="M12 18.5a8.5 8.5 0 0 1 14.2-5.4"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M24.5 8.5h5v5"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 21.5a8.5 8.5 0 0 1-14.2 5.4"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M15.5 31.5h-5v-5"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="15" fill="currentColor" opacity="0.16" />
      <path
        d="M21.8 7.5 11.5 22.2h7.2L17.8 32.5 28.5 17.8h-7.2L21.8 7.5z"
        fill="currentColor"
      />
    </svg>
  );
}
