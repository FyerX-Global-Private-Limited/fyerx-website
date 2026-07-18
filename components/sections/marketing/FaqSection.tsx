"use client";

import React, { useState } from "react";

/**
 * "Common Questions From B2B Marketing Leaders" FAQ section.
 * Each item expands on click.
 */

const faqs = [
  {
    q: "How is FyerX different from a traditional digital marketing agency?",
    a: "FyerX is built specifically for B2B growth, combining strategy, demand generation, and AI into one connected system, rather than selling isolated services like SEO or social media in silos.",
  },
  {
    q: "Do you only work with large enterprises?",
    a: "No. FyerX works with growing B2B companies that need a real pipeline strategy, whether that's an early-stage startup building its first go-to-market plan or an established company scaling demand generation.",
  },
  {
    q: "What does 'AI-first' actually mean in your process?",
    a: "It means AI is built into how we generate content, personalize ads, automate workflows, and optimize for visibility inside AI search tools, not used as a marketing buzzword.",
  },
  {
    q: "How do you measure success?",
    a: "Every campaign is tracked back to pipeline and revenue impact, not just impressions or clicks, so results are reported in terms your leadership team and CFO actually care about.",
  },
  {
    q: "How long before we see results?",
    a: "Timelines vary by service. Paid media and outbound can generate qualified leads within weeks, while SEO, AEO, and brand positioning compound over several months for long-term growth.",
  },
  {
    q: "Can you work alongside our in-house marketing team?",
    a: "Yes. FyerX frequently works as an embedded extension of in-house teams, filling specific gaps like AI marketing, ABM, or AEO rather than replacing existing functions.",
  },
];

function ChevronIcon({ open }) {
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
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="faq">
      <div className="faq__inner">
        <div className="faq__left">
          <h2 className="faq__heading">Common Questions From B2B Marketing Leaders</h2>
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
          font-size: 35px;
          line-height: 1.3;
          font-weight: 500;
          letter-spacing: -0.5px;
          color: #18181b;
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
