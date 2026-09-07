'use client';

import React from 'react';
import Image from 'next/image';

type Card = {
  image: string;
  title: string;
  body: string;
};

const CARDS: Card[] = [
  {
    image: '/updatedmainpage/section8 (1).webp',
    title: 'Growth initiatives',
    body: 'From new-market plans to demand creation, we help turn commercial priorities into focused action.',
  },
  {
    image: '/updatedmainpage/section8 (2).webp',
    title: 'Capability gaps',
    body: 'When internal capacity falls short, bring in the expertise needed to keep work progressing.',
  },
  {
    image: '/updatedmainpage/section8 (3).webp',
    title: 'Business change',
    body: 'New systems, new teams, or new direction require support that works with the wider business.',
  },
  {
    image: '/updatedmainpage/section8 (4).webp',
    title: 'Execution at pace',
    body: 'Move from decision to delivery with a team built to take responsibility for the work.',
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
          {CARDS.map((c) => (
            <article className="sc__card" key={c.title}>
              <h3 className="sc__cardTitle">{c.title}</h3>
              <div className="sc__icon">
                <Image
                  src={c.image}
                  alt=""
                  width={80}
                  height={80}
                  className="sc__iconImg"
                />
              </div>
              <p className="sc__cardBody">{c.body}</p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .sc {
          --ink: #111111;
          --muted: #5a5f6b;
          --line: #e5e7eb;
          background: #ffffff;
          color: var(--ink);
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .sc__grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .sc__card {
          border: 1px solid var(--line);
          border-radius: 24px;
          padding: 32px 20px 28px;
          background: #fff;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .sc__cardTitle {
          margin: 0 0 20px;
          font-size: 20px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--ink);
        }

        .sc__icon {
          width: 80px;
          height: 80px;
          margin: 0 0 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
        }

        .sc :global(.sc__iconImg) {
          width: 80px;
          height: 80px;
          display: block;
          object-fit: contain;
        }

        .sc__cardBody {
          margin: 0 auto;
          max-width: 32ch;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.5;
          color: var(--muted);
          text-align: center;
        }

        @media (max-width: 639px) {
          .sc__card {
            padding: 24px 16px;
          }
          .sc__cardTitle {
            font-size: 18px;
            margin-bottom: 16px;
          }
          .sc__icon,
          .sc :global(.sc__iconImg) {
            width: 72px;
            height: 72px;
            margin-bottom: 16px;
          }
          .sc__cardBody {
            max-width: none;
            font-size: 13px;
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
        }

        @media (min-width: 1080px) {
          .sc__grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
            max-width: 1200px;
          }
          .sc__card {
            padding: 40px 24px;
            min-height: 100%;
          }
          .sc__cardTitle {
            font-size: 22px;
            margin-bottom: 24px;
          }
          .sc__icon,
          .sc :global(.sc__iconImg) {
            width: 80px;
            height: 80px;
            margin-bottom: 24px;
          }
          .sc__cardBody {
            font-size: 15px;
            line-height: 1.5;
          }
        }
      `}</style>
    </section>
  );
}
