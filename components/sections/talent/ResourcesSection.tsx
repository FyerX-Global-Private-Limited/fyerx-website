"use client";

import React from "react";
import { TALENT_HOME } from "@/lib/talent-home-palette";

const cards = [
  {
    img: "/updatedtalentimage/section11 (3).webp",
    title: "What RPO Looks Like in Practice",
    body: "When outsourced recruitment support is useful—and what the working model should include.",
  },
  {
    img: "/updatedtalentimage/section11 (2).webp",
    title: "Building a Distributed Technology Team",
    body: "How to choose the model that fits your timeline, budget structure, and ongoing capability need.",
  },
  {
    img: "/updatedtalentimage/section11 (1).webp",
    title: "How to Hire for Enterprise Platforms",
    body: "What to clarify before hiring ServiceNow, Salesforce, SAP, and other platform specialists.",
  },
];

export default function ResourcesSection() {
  return (
    <section className="res">
      <div className="res__container">
        <h2 className="res__heading">
          Practical thinking for{" "}
          <span className="talent-gradient-text">smarter hiring</span>
        </h2>

        <div className="res__grid">
          {cards.map((c) => (
            <article className="res__card" key={c.title}>
              <div className="res-top res-top--photo">
                <img src={c.img} alt={c.title} />
              </div>
              <h3 className="res__card-title">{c.title}</h3>
              <p className="res__card-body">{c.body}</p>
              <a className="res__link" href="#">
                Read more
                <span aria-hidden="true" className="res__link-arrow">
                  ›
                </span>
              </a>
            </article>
          ))}
        </div>

        <div className="res__cta-wrap">
          <button className="res__cta" type="button">
            View All Resources
          </button>
        </div>
      </div>

      <style jsx>{`
        .res {
          width: 100%;
          background: #ffffff;
          padding: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          box-sizing: border-box;
        }
        .res__container {
          max-width: 1260px;
          margin: 0 auto;
          background: #f4f4f5;
          border-radius: 20px;
          padding: 32px 20px 40px;
          box-sizing: border-box;
        }
        @media (min-width: 640px) {
          .res__container {
            border-radius: 28px;
            padding: 48px 32px 56px;
          }
        }
        @media (min-width: 1024px) {
          .res__container {
            padding: 56px 48px 64px;
          }
        }
        .res__heading {
          margin: 0 0 32px;
          text-align: center;
          font-size: clamp(1.75rem, 5vw, 2.875rem);
          line-height: 1.12;
          font-weight: 500;
          letter-spacing: -0.02em;
          color: var(--ink);
        }
        .res__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 640px) {
          .res__grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }
        }
        @media (min-width: 1024px) {
          .res__grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .res__card {
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #e6e9ef;
          padding: 12px 12px 20px;
          box-shadow: 0 8px 24px -16px rgba(16, 16, 20, 0.18);
        }
        .res__card-title {
          margin: 16px 4px 0;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.3;
          color: #18181b;
        }
        .res__card-body {
          margin: 10px 4px 0;
          font-size: 14px;
          line-height: 1.55;
          color: #52525b;
          flex: 1;
        }
        .res__link {
          margin: 16px 4px 0;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          align-self: flex-start;
          font-size: 14px;
          font-weight: 600;
          color: ${TALENT_HOME.primary};
          text-decoration: none;
          transition: gap 0.15s ease, opacity 0.15s ease;
        }
        .res__link:hover {
          gap: 10px;
          opacity: 0.85;
        }
        .res__link-arrow {
          font-size: 16px;
          line-height: 1;
        }
        .res__cta-wrap {
          margin-top: 40px;
          display: flex;
          justify-content: center;
        }
        .res__cta {
          background: ${TALENT_HOME.primary};
          color: ${TALENT_HOME.accent};
          border: none;
          border-radius: 999px;
          padding: 12px 24px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.15s ease, opacity 0.15s ease;
        }
        .res__cta:hover {
          transform: translateY(-1px);
          opacity: 0.92;
        }
      `}</style>

      <style jsx global>{`
        .res-top {
          width: 100%;
          aspect-ratio: 16 / 11;
          border-radius: 12px;
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
