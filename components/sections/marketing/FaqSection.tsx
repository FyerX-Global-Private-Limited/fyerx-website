"use client";

import React, { useState } from "react";

/**
 * Frequently Asked Questions — Marketing homepage.
 */

const faqs = [
  {
    q: "What does FyerX Marketing do?",
    a: "We provide strategy, demand generation, search visibility, AI marketing, social, content, performance, branding, web, and automation support.",
  },
  {
    q: "Do we need every service?",
    a: "No. We begin with the business objective and build the service mix around the work that will make the biggest difference.",
  },
  {
    q: "Can FyerX work with our in-house team?",
    a: "Yes. We can operate as an extension of your team, lead a defined workstream, or deliver a focused project.",
  },
  {
    q: "Do you manage both creative and media?",
    a: "Yes. We can develop the message and assets, manage distribution, and improve the journey after the click.",
  },
  {
    q: "Can you help with a new launch or repositioning?",
    a: "Yes. Go-to-market strategy, audience definition, positioning, identity, campaign planning, and launch execution are core capabilities.",
  },
  {
    q: "How do you use AI?",
    a: "We use it to speed up appropriate work and build useful automations, with human review and brand judgement throughout.",
  },
  {
    q: "Can you improve our website?",
    a: "Yes. We support website strategy, UX/UI, design, development, landing pages, and conversion optimisation.",
  },
  {
    q: "How is work measured?",
    a: "The reporting approach is set against the objective: visibility, engagement, leads, lead quality, conversion, pipeline, or other agreed business measures.",
  },
  {
    q: "How do we start?",
    a: "Share the opportunity or problem with us. We will recommend the right discovery step and a sensible scope.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`faq__chevron ${open ? "faq__chevron--open" : ""}`}
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="#730031"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="faq" id="faqs">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="faq__inner">
        <div className="faq__left">
          <h2 className="faq__heading">Frequently Asked Questions</h2>
        </div>

        <div className="faq__right">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div className="faq__item" key={item.q}>
                <button
                  className="faq__question"
                  aria-expanded={open}
                  onClick={() => toggle(i)}
                  type="button"
                >
                  <span className="faq__question-text">{item.q}</span>
                  <ChevronIcon open={open} />
                </button>
                <div
                  className="faq__answer-wrap"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="faq__answer-inner">
                    <p className="faq__answer">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .faq {
          width: 100%;
          background: #ffffff;
          padding: 40px 16px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          box-sizing: border-box;
        }
        @media (min-width: 640px) {
          .faq {
            padding: 56px 40px;
          }
        }
        @media (min-width: 1024px) {
          .faq {
            padding: 64px 64px;
          }
        }
        .faq__inner {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
          align-items: start;
        }
        @media (min-width: 821px) {
          .faq__inner {
            grid-template-columns: 0.85fr 1.15fr;
            gap: 60px;
          }
        }
        .faq__left {
          padding-top: 0;
        }
        @media (min-width: 821px) {
          .faq__left {
            padding-top: 8px;
          }
        }
        .faq__heading {
          margin: 0;
          font-size: clamp(1.75rem, 5vw, 2.875rem);
          line-height: 1.12;
          font-weight: 500;
          letter-spacing: -0.02em;
          color: var(--ink);
        }
        .faq__right {
          display: flex;
          flex-direction: column;
        }
        .faq__item {
          margin-top: 10px;
        }
        .faq__question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          background: #f6f7f7;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          text-align: left;
          padding: 16px;
          font-family: inherit;
        }
        @media (min-width: 640px) {
          .faq__question {
            gap: 24px;
            padding: 20px;
          }
        }
        .faq__question-text {
          font-size: clamp(0.875rem, 2.5vw, 1rem);
          font-weight: 500;
          line-height: 1.4;
          color: #18181b;
        }
        .faq__answer-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.28s ease;
        }
        .faq__answer-inner {
          overflow: hidden;
        }
        .faq__answer {
          margin: 0;
          padding: 12px 8px 12px;
          font-size: clamp(0.875rem, 2.5vw, 0.9375rem);
          line-height: 1.6;
          color: #52525b;
          max-width: 620px;
        }

        @media (min-width: 640px) {
          .faq__answer {
            padding: 13px 12px 13px;
          }
        }
      `}</style>

      <style jsx global>{`
        .faq__chevron {
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }
        .faq__chevron--open {
          transform: rotate(180deg);
        }
      `}</style>
    </section>
  );
}
