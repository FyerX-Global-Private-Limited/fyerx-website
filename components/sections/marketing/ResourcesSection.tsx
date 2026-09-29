"use client";

import React from "react";
import { PublicImage } from "@/components/ui/PublicImage";

const cards = [
  {
    src: "/marketingpageimages/blog (2).webp",
    title: "How to Build a Go-to-Market Plan That Teams Can Use",
    body: "A practical look at turning a launch idea into a workable marketing sequence.",
    link: "Read More",
  },
  {
    src: "/marketingpageimages/blog (3).webp",
    title: "SEO, AEO, and GEO: What Changes and What Does Not",
    body: "How to strengthen visibility across search and AI-led discovery.",
    link: "Read More",
  },
  {
    src: "/marketingpageimages/blog (1).webp",
    title: "From Campaign Click to Customer Conversation",
    body: "The essentials of a landing page and follow-up journey that does not drop intent.",
    link: "Read More",
  },
];

export default function ResourcesSection() {
  return (
    <section className="res">
      <div className="res__container">
        <h2 className="res__heading">
          Ideas, guides, and practical{" "}
          <span className="marketing-gradient-text">marketing thinking</span>
        </h2>

        <div className="res__grid">
          {cards.map((c) => (
            <article className="res__card" key={c.title}>
              <div className="res-top res-top--photo">
                <PublicImage
                  src={c.src}
                  alt={c.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 560px) 100vw, (max-width: 980px) 50vw, 33vw"
                />
              </div>
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
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          box-sizing: border-box;
        }
        .res__container {
          max-width: 87.5rem;
          margin: 0 auto;
          background: #f4f4f5;
          border-radius: 20px;
          padding: 32px 28px 40px;
          box-sizing: border-box;
        }
        @media (min-width: 640px) {
          .res__container {
            border-radius: 28px;
            padding: 48px 40px 56px;
          }
        }
        @media (min-width: 1024px) {
          .res__container {
            padding: 56px 56px 64px;
          }
        }
        .res__heading {
          margin: 0 0 32px;
          text-align: center;
          font-size: clamp(1.375rem, 4vw, 2.125rem);
          line-height: 1.2;
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
          grid-template-columns: repeat(3, 1fr);
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
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 11;
          border-radius: 14px;
          overflow: hidden;
        }
        .res-top--photo img {
          object-fit: cover;
        }
      `}</style>
    </section>
  );
}
