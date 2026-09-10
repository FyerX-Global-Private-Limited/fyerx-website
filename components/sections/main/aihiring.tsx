'use client';

import React from 'react';
import { PublicImage as Image } from '@/components/ui/PublicImage';
import { PrimaryCtaLink } from '@/components/ui/PrimaryCta';

type Feature = { image: string; title: string; body: string };

const FEATURES: Feature[] = [
  {
    image: '/updatedmainpage/section6-2.webp',
    title: 'Strategic by design',
    body: 'Every engagement begins with a clear understanding of the business objective, not a pre-set solution.',
  },
  {
    image: '/updatedmainpage/section6-3.webp',
    title: 'Disciplined execution',
    body: 'Defined plans, clear ownership, and consistent follow-through keep work progressing without unnecessary friction.',
  },
  {
    image: '/updatedmainpage/section6-4.webp',
    title: 'Partnership mindset',
    body: 'We work as an extension of your team, bringing context, judgement, and continuity to every engagement.',
  },
  {
    image: '/updatedmainpage/section6-1.webp',
    title: 'Built for progress',
    body: 'Our work is structured to create measurable movement today while supporting what the business needs next.',
  },
];

export default function AiHiring() {
  return (
    <section className="home-section cg">
      <div className="section-shell section-shell--wide">
        <div className="cg__inner">
          <div className="cg__left">
            <p className="cg__eyebrow">The FyerX standard</p>
            <h2 className="cg__heading section-heading">
              <span className="brand-gradient-text">Built for work</span>
              <br />
              that moves business forward
            </h2>

            <p className="cg__sub section-subheading">
              Clear thinking, reliable execution, and a working relationship designed around your priorities.
            </p>

            <PrimaryCtaLink href="/contact" className="mt-10">
              Work with FyerX
            </PrimaryCtaLink>
            <p className="cg__trust">Strategy-led · Outcome-focused · Built to last</p>
          </div>

          <div className="cg__grid">
            {FEATURES.map((f) => (
              <article className="cg__card" key={f.title}>
                <div className="cg__iconBox">
                  <Image
                    src={f.image}
                    alt=""
                    width={52}
                    height={52}
                    className="cg__icon"
                  />
                </div>
                <h3 className="cg__cardTitle">{f.title}</h3>
                <p className="cg__cardBody">{f.body}</p>
              </article>
            ))}
          </div>
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
          margin: 0 0 var(--heading-sub-gap);
          font-size: 15px;
          font-weight: 400;
          color: var(--ink);
        }

        .cg__heading {
          margin: 0;
          text-align: left;
        }

        .cg__sub {
          margin: var(--heading-sub-gap) 0 0;
          max-width: 30ch;
          text-align: left;
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
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cg__icon {
          width: 52px;
          height: 52px;
          display: block;
          object-fit: contain;
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
          .cg__inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }

        @media (max-width: 560px) {
          .cg__grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .cg__card {
            padding: 1rem 1.125rem;
          }
          .cg__cardTitle {
            margin: 20px 0 1rem;
            font-size: 1rem;
          }
          .cg__iconBox,
          .cg__icon {
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
    </section>
  );
}

