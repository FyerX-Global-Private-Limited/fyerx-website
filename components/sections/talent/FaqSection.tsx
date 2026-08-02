"use client";

import React, { useState } from "react";

/**
 * "Common Questions From B2B Marketing Leaders" FAQ section.
 * Each item expands on click.
 */

const faqs = [
  {
    q: "What does FyerX Talent's staffing service include?",
    a: "FyerX Talent covers contract staffing, RPO, permanent hiring, executive search, IT talent sourcing, and HR advisory, all under one team.",
  },
  {
    q: "How is FyerX Talent different from a typical staffing agency?",
    a: "We screen candidates for fit before sending profiles, stay involved through onboarding, and give you one consistent point of contact throughout.",
  },
  {
    q: "Do you support hiring for US-based roles?",
    a: "Yes, we support US contract staffing and cross-border compliance for businesses hiring remote or distributed teams.",
  },
  {
    q: "How long does it typically take to fill a role?",
    a: "Timelines vary by role type and seniority, but most contract roles are filled within two to four weeks, and we'll give you a realistic estimate upfront.",
  },
  {
    q: "Can FyerX Talent handle bulk or volume hiring?",
    a: "Yes, we support volume staffing for seasonal or large-scale hiring needs without compromising on screening quality.",
  },
  {
    q: "Do you provide background verification?",
    a: "Yes, background verification and hiring assessments are part of our HR advisory service, available as standalone support or bundled with staffing.",
  },
  {
    q: "Is FyerX Talent suited for startups or only larger businesses?",
    a: "We work with startups, SMEs, and enterprise clients, adjusting the process based on your size and hiring volume.",
  },
  {
    q: "What does it cost to work with FyerX Talent?",
    a: "Pricing depends on the role type and engagement model. Share your hiring needs with our team for a plan built around your budget.",
  },
  {
    q: "How do I get started with FyerX Talent?",
    a: "Fill out the contact form on this page or request a callback, and our team will follow up to understand your hiring needs.",
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
        stroke="#18181b"
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
    <section className="faq">
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
          padding: 48px 24px;
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
          grid-template-columns: 0.85fr 1.15fr;
          gap: 60px;
          align-items: start;
        }
        .faq__left {
          padding-top: 8px;
        }
        .faq__heading {
          margin: 0;
          font-size: 46px;
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
          border-top: 1px solid #dcdce0;
        }
        .faq__item:last-child {
          border-bottom: 1px solid #dcdce0;
        }
        .faq__question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          padding: 24px 4px;
          font-family: inherit;
        }
        .faq__question-text {
          font-size: 16px;
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
          padding: 0 4px 24px;
          font-size: 15px;
          line-height: 1.6;
          color: #52525b;
          max-width: 620px;
        }

        @media (max-width: 820px) {
          .faq__inner {
            grid-template-columns: 1fr;
            gap: 28px;
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
