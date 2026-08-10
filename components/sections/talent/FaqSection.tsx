"use client";

import React, { useState } from "react";

/**
 * Frequently Asked Questions — Talent homepage.
 */

const faqs = [
  {
    q: "What talent solutions does FyerX Talent provide?",
    a: "We support contract staffing, RPO, permanent hiring, executive search, technology hiring, HR advisory, and global staffing requirements.",
  },
  {
    q: "When should we use contract staffing?",
    a: "Contract staffing is useful when a project has a defined duration, demand changes quickly, or you need specialist capability without a long-term headcount commitment.",
  },
  {
    q: "Can you support a hiring surge?",
    a: "Yes. On-demand RPO and volume staffing are designed for periods when internal recruitment capacity needs to increase quickly.",
  },
  {
    q: "What technology roles can you help fill?",
    a: "We support software development, enterprise platforms, data and AI, cloud and DevOps, quality engineering, and related technology roles.",
  },
  {
    q: "Do you support ServiceNow and other enterprise platforms?",
    a: "Yes. We support hiring for ServiceNow and enterprise-platform talent, with screening aligned to the specific platform, role, and delivery requirement.",
  },
  {
    q: "Can you help with permanent and leadership hires?",
    a: "Yes. Permanent hiring and executive search support full-time and senior appointments through a focused search process.",
  },
  {
    q: "Do you offer assessments and verification?",
    a: "Yes. Hiring assessments, background verification, and compensation benchmarking are available as advisory services or within a wider engagement.",
  },
  {
    q: "Can you support US or cross-border staffing?",
    a: "Yes. We support US-facing contract staffing, remote team building, and cross-border compliance guidance. Exact requirements are assessed case by case.",
  },
  {
    q: "How do we begin?",
    a: "Share your role requirement, target start date, hiring volume, and engagement preference. We will recommend a practical next step.",
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
        stroke="#11551C"
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
