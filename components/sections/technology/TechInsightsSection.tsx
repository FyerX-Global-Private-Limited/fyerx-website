"use client";

import { TECH_HOME } from "@/lib/technology-home-palette";

const cards = [
  {
    img: "/images/talent/blog-enterprise.svg",
    title: "Where should enterprise platform modernisation begin?",
    body: "A practical framework for prioritising workflows, integration needs and adoption readiness before starting a platform programme.",
  },
  {
    img: "/images/talent/blog-distributed.svg",
    title: "Moving from AI experimentation to operating value",
    body: "The data, governance and ownership foundations required before AI can scale into business workflows.",
  },
  {
    img: "/images/talent/blog-rpo.svg",
    title: "Cloud modernisation without operational disruption",
    body: "How to improve release maturity, reliability and cost visibility without treating each as a separate initiative.",
  },
];

export default function TechInsightsSection() {
  return (
    <section className="res">
      <div className="res__container">
        <p className="res__eyebrow">Insights</p>
        <h2 className="res__heading">
          Practical perspectives for{" "}
          <span className="tech-gradient-text">better decisions</span>
        </h2>

        <div className="res__grid">
          {cards.map((c) => (
            <article className="res__card" key={c.title}>
              <div className="res-top res-top--photo">
                <img src={c.img} alt={c.title} />
              </div>
              <h3 className="res__card-title">{c.title}</h3>
              <p className="res__card-body">{c.body}</p>
              <a className="res__link" href="/blog">
                Read Article
                <span aria-hidden="true" className="res__link-arrow">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>

        <div className="res__cta-wrap">
          <a className="res__cta" href="/blog">
            View All Resources
          </a>
        </div>
      </div>

      <style jsx>{`
        .res {
          width: 100%;
          background: #ffffff;
          padding: 0;
          font-family: 'Poppins', sans-serif;
          box-sizing: border-box;
        }
        .res__container {
          max-width: 1260px;
          margin: 0 auto;
          background: ${TECH_HOME.surface};
          border-radius: 20px;
          padding: 24px 16px 28px;
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
        .res__eyebrow {
          margin: 0 0 10px;
          text-align: center;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: ${TECH_HOME.primary};
        }
        .res__heading {
          margin: 0 0 20px;
          text-align: center;
          font-size: clamp(1.5rem, 5vw, 2.875rem);
          line-height: 1.12;
          font-weight: 500;
          letter-spacing: -0.02em;
          color: var(--ink);
        }
        @media (min-width: 640px) {
          .res__heading {
            margin: 0 0 32px;
          }
        }
        .res__grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
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
          margin: 12px 4px 0;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.3;
          color: #18181b;
        }
        @media (min-width: 640px) {
          .res__card-title {
            margin: 16px 4px 0;
            font-size: 18px;
          }
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
          color: ${TECH_HOME.primary};
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
          margin-top: 28px;
          display: flex;
          justify-content: center;
        }
        @media (min-width: 640px) {
          .res__cta-wrap {
            margin-top: 40px;
          }
        }
        .res__cta {
          background: ${TECH_HOME.primary};
          color: ${TECH_HOME.accent};
          border: none;
          border-radius: 999px;
          padding: 12px 24px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
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
