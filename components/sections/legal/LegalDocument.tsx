"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LEGAL_NAV,
  type LegalBlock,
  type LegalDocumentData,
} from "@/lib/legal-documents";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden="true"
    >
      <path d="M5 7.5 10 12.5 15 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BlockContent({ block }: { block: LegalBlock }) {
  if (block.type === "p") {
    return <p className="text-[15px] leading-relaxed text-[#3d4a5c] sm:text-base">{block.text}</p>;
  }

  if (block.type === "ul") {
    return (
      <ul className="list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[#3d4a5c] sm:text-base">
        {block.items.map((item) => (
          <li key={item.slice(0, 64)}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-[#E6E9EF]">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-[#F7F9FC]">
          <tr>
            {block.headers.map((header) => (
              <th
                key={header}
                className="border-b border-[#E6E9EF] px-3 py-2.5 font-semibold text-[#101014]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row) => (
            <tr key={row.join("|")} className="align-top">
              {row.map((cell, i) => (
                <td key={`${cell}-${i}`} className="border-b border-[#EEF1F6] px-3 py-2.5 text-[#3d4a5c]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function LegalDocument({ doc }: { doc: LegalDocumentData }) {
  const [sectionsOpen, setSectionsOpen] = useState(true);

  return (
    <section
      className="w-full overflow-x-clip bg-white py-10 sm:py-14 md:py-16"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[280px_1fr] lg:gap-14 lg:px-8">
        {/* Sidebar — Uplers-style policy accordion */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#730031]">
            Legal Information
          </p>
          <nav aria-label="Legal policies" className="rounded-2xl border border-[#E6E9EF] bg-white">
            {LEGAL_NAV.map((item) => {
              const isActiveDoc = item.key === doc.key;
              const isOpen = isActiveDoc && sectionsOpen;

              return (
                <div
                  key={item.key}
                  className={`border-b border-[#EEF1F6] last:border-b-0 ${
                    isActiveDoc
                      ? "border-l-[3px] border-l-[#CC0057] bg-[#FFF0F5]"
                      : "border-l-[3px] border-l-transparent"
                  }`}
                >
                  <div
                    className={`flex items-stretch transition-colors ${
                      isActiveDoc ? "" : "hover:bg-[#FFF0F5]"
                    }`}
                  >
                    <Link
                      href={item.href}
                      className={`flex min-w-0 flex-1 items-center px-4 py-3.5 text-sm transition-colors ${
                        isActiveDoc
                          ? "brand-gradient-text font-semibold"
                          : "font-medium text-[#5a5f6b] hover:text-[#730031]"
                      }`}
                    >
                      {item.title}
                    </Link>
                    {isActiveDoc ? (
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-label={isOpen ? "Collapse sections" : "Expand sections"}
                        onClick={() => setSectionsOpen((v) => !v)}
                        className="flex w-11 items-center justify-center text-[#CC0057]"
                      >
                        <Chevron open={isOpen} />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex w-11 items-center justify-center text-[#8b8fa3] transition-colors hover:text-[#CC0057]"
                        aria-label={`Open ${item.title}`}
                      >
                        <Chevron open={false} />
                      </Link>
                    )}
                  </div>

                  {isOpen && (
                    <ul className="space-y-1 pb-3 pl-4 pr-3">
                      {doc.sections.map((section) => (
                        <li key={section.id}>
                          <a
                            href={`#${section.id}`}
                            className="block rounded-md px-2 py-1.5 text-[13px] leading-snug text-[#676879] transition-colors hover:bg-[#FFE4EC] hover:text-[#730031]"
                          >
                            {section.heading}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Content */}
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[#101014]">
            Last Updated : {doc.lastUpdated}
          </p>

          <h1 className="mt-4 text-[clamp(1.75rem,4vw,2.5rem)] font-medium leading-[1.15] tracking-[-0.02em] text-[#101014]">
            {doc.title}
          </h1>

          <div className="mt-5 flex flex-col gap-4">
            {doc.intro.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-[15px] leading-relaxed text-[#3d4a5c] sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-9">
            {doc.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="text-lg font-semibold tracking-[-0.01em] text-[#101014] sm:text-xl">
                  {section.heading}
                </h2>
                <div className="mt-3 flex flex-col gap-3">
                  {section.blocks.map((block, i) => (
                    <BlockContent key={`${section.id}-${i}`} block={block} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
