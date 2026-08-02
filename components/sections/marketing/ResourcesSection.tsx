"use client";

import React from "react";

/**
 * "Resources to hit your goals" section.
 * Exact copy + design replication. No external dependencies.
 *
 * Cards 1 and 4 use photos — swap the `img` values for your own assets
 * (e.g. "/images/bottom-line.jpg"). Card 2 (dark "What's new" panel) is
 * rendered in markup. Card 3 uses a teal illustration image — replace its
 * `img` with your own illustration for a pixel match.
 */

const IMG_AEO =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";
const IMG_ABM =
  "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=800&q=80";
const IMG_AGENTS =
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80";
const IMG_GEO =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80";

function PhotoTop({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="res-top res-top--photo">
      <img src={src} alt={alt} />
    </div>
  );
}

const cards = [
  {
    top: <PhotoTop src={IMG_AEO} alt="Why AEO Matters More Than Traditional SEO in 2026" />,
    title: "Why AEO Matters More Than Traditional SEO in 2026",
    body: "How answer engines are changing what it means to rank.",
    link: "Read more",
  },
  {
    top: <PhotoTop src={IMG_ABM} alt="How to Build an ABM Program Without a Six-Figure Budget" />,
    title: "How to Build an ABM Program Without a Six-Figure Budget",
    body: "A lean, practical approach to account-based marketing.",
    link: "Read more",
  },
  {
    top: <PhotoTop src={IMG_AGENTS} alt="The B2B Marketer's Guide to Marketing Automation Agents" />,
    title: "The B2B Marketer's Guide to Marketing Automation Agents",
    body: "What automation agents can — and can't — do for your funnel.",
    link: "Read more",
  },
  {
    top: <PhotoTop src={IMG_GEO} alt="GEO Explained: Getting Your Brand Cited Inside AI Answers" />,
    title: "GEO Explained: Getting Your Brand Cited Inside AI Answers",
    body: "Understanding generative engine optimization and brand visibility.",
    link: "Read more",
  },
];

export default function ResourcesSection() {
  return (
    <section className="res">
      <div className="res__container">
        <h2 className="res__heading">Insights for Growth-Focused Marketing Teams</h2>
        <p className="res__subheading">
          Straight talk on AI, demand generation, and B2B growth, no fluff.
        </p>

        <div className="res__grid">
          {cards.map((c) => (
            <article className="res__card" key={c.title}>
              {c.top}
              <h3 className="res__card-title">{c.title}</h3>
              <p className="res__card-body">{c.body}</p>
              <a className="res__link" href="#">
                {c.link}
                <span aria-hidden="true" className="res__link-arrow">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .res {
          width: 100%;
          background: #ffffff;
          padding: 48px 24px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          box-sizing: border-box;
        }
        @media (min-width: 640px) {
          .res {
            padding: 56px 40px;
          }
        }
        @media (min-width: 1024px) {
          .res {
            padding: 64px 64px;
          }
        }
        .res__container {
          max-width: 1260px;
          margin: 0 auto;
          background: #f4f4f5;
          border-radius: 28px;
          padding: 56px 48px 64px;
          box-sizing: border-box;
        }
        .res__heading {
          margin: 0;
          text-align: center;
          font-size: 46px;
          line-height: 1.12;
          font-weight: 500;
          letter-spacing: -0.02em;
          color: var(--ink);
        }
        .res__subheading {
          margin: 12px 0 44px;
          text-align: center;
          font-size: 16px;
          line-height: 1.5;
          color: #52525b;
        }
        .res__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }
        .res__card {
          display: flex;
          flex-direction: column;
        }
        .res__card-title {
          margin: 20px 0 0;
          font-size: 19px;
          font-weight: 600;
          color: #18181b;
        }
        .res__card-body {
          margin: 12px 0 0;
          font-size: 14px;
          line-height: 1.55;
          color: #52525b;
        }
        .res__link {
          margin-top: 18px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          align-self: flex-start;
          font-size: 14px;
          font-weight: 500;
          color: #18181b;
          text-decoration: none;
          border-bottom: 1px solid #18181b;
          padding-bottom: 2px;
          transition: gap 0.15s ease, opacity 0.15s ease;
        }
        .res__link:hover {
          gap: 12px;
          opacity: 0.8;
        }
        .res__link-arrow {
          font-size: 15px;
        }

        @media (max-width: 980px) {
          .res__grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
        }
        @media (max-width: 560px) {
          .res__container {
            padding: 40px 24px 48px;
          }
          .res__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <style jsx global>{`
        .res-top {
          width: 100%;
          aspect-ratio: 16 / 11;
          border-radius: 14px;
          overflow: hidden;
        }
        .res-top--photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
      `}</style>
    </section>
  );
}
