"use client";

import React, { useState } from "react";
import { TECH_FAQS } from "@/data/technology-home";

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
        stroke="#20287A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TechFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: TECH_FAQS.map((item) => ({
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
          <h2 className="faq__heading">
            Frequently Asked{" "}
            <span className="tech-gradient-text">Questions</span>
          </h2>
        </div>

        <div className="faq__right">
          {TECH_FAQS.map((item, i) => {
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
          padding: 0;
          font-family: 'Poppins', sans-serif;
          box-sizing: border-box;
        }
        .faq__inner {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          align-items: start;
        }
        @media (min-width: 640px) {
          .faq__inner {
            gap: 28px;
          }
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
          font-size: clamp(1.5rem, 5vw, 2.875rem);
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
          margin-top: 8px;
        }
        @media (min-width: 640px) {
          .faq__item {
            margin-top: 10px;
          }
        }
        .faq__question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          background: #f6f7f7;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          text-align: left;
          padding: 12px 14px;
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
