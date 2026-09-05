"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { TECH_HOME } from "@/lib/technology-home-palette";

function BadgeSeal({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-1" aria-label={label}>
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D7DBE5] bg-white text-[#3d4a5c]">
        {children}
      </div>
      <span className="max-w-[4.5rem] text-center text-[9px] font-semibold uppercase leading-tight tracking-[0.04em] text-[#676879]">
        {label}
      </span>
    </div>
  );
}

function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-75"
      style={{ color: TECH_HOME.primary }}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

export default function TechTrustSection() {
  return (
    <section className="overflow-x-clip bg-white">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#676879]">
            Enterprise-ready technology delivery
          </p>
          <h2 className="mt-3 text-[clamp(1.75rem,4.5vw,2.75rem)] font-medium leading-[1.15] tracking-[-0.03em] text-[var(--ink)]">
            Trusted by enterprises
            <br />
            Recognized for{" "}
            <span className="tech-gradient-text">practical delivery</span>
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 lg:grid-cols-[1.35fr_1fr_1fr] lg:gap-5">
          {/* Card 1 — Security / governance */}
          <article className="flex min-h-[320px] flex-col rounded-[22px] border border-[#E6E9EF] bg-white p-6 shadow-[0_8px_30px_-18px_rgba(16,16,20,0.18)] sm:min-h-[360px] sm:p-8">
            <h3 className="text-[1.25rem] font-semibold leading-snug text-[var(--ink)] sm:text-[1.35rem]">
              Enterprise-grade delivery
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#52525b] sm:text-[15px]">
              Platform, data and cloud work with clear governance, documentation
              and security-aligned practices across every engagement.
            </p>
            <ArrowLink href="#approach">Explore our approach</ArrowLink>

            <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-10">
              <BadgeSeal label="Security">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
                  <path
                    d="M12 3l7 3v5c0 4.5-2.9 7.8-7 9-4.1-1.2-7-4.5-7-9V6l7-3z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </BadgeSeal>
              <BadgeSeal label="Privacy">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
                  <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </BadgeSeal>
              <BadgeSeal label="Governance">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M12 8v4l2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </BadgeSeal>
              <BadgeSeal label="Compliance">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
                  <path
                    d="M9 12.5l2 2 4.5-4.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </BadgeSeal>
            </div>
          </article>

          {/* Card 2 — Services metric */}
          <article className="flex min-h-[320px] flex-col items-center rounded-[22px] border border-[#E6E9EF] bg-white px-6 py-8 text-center shadow-[0_8px_30px_-18px_rgba(16,16,20,0.18)] sm:min-h-[360px] sm:px-7">
            <p className="max-w-[16ch] text-sm font-medium leading-snug text-[#3d4a5c]">
              Service areas for critical business systems
            </p>
            <p
              className="mt-6 text-[4.5rem] font-medium leading-none tracking-[-0.04em] sm:text-[5rem]"
              style={{ color: TECH_HOME.primary }}
            >
              5
            </p>
            <p className="mt-4 max-w-[18ch] text-sm leading-relaxed text-[#52525b]">
              Platforms · Digital · Data &amp; AI · Cloud · Advisory
            </p>
            <ArrowLink href="#services">Explore services</ArrowLink>
            <div className="mt-auto pt-8">
              <p className="text-lg font-semibold tracking-[-0.02em] text-[var(--ink)]">
                FyerX
              </p>
              <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#8b8fa3]">
                Technology
              </p>
            </div>
          </article>

          {/* Card 3 — Outcomes metric */}
          <article className="flex min-h-[320px] flex-col items-center rounded-[22px] border border-[#E6E9EF] bg-white px-6 py-8 text-center shadow-[0_8px_30px_-18px_rgba(16,16,20,0.18)] sm:min-h-[360px] sm:px-7">
            <p className="max-w-[16ch] text-sm font-medium leading-snug text-[#3d4a5c]">
              One accountable engagement model
            </p>
            <p
              className="mt-6 text-[4.5rem] font-medium leading-none tracking-[-0.04em] sm:text-[5rem]"
              style={{ color: TECH_HOME.primary }}
            >
              1
            </p>
            <p className="mt-4 max-w-[20ch] text-sm leading-relaxed text-[#52525b]">
              Discovery, delivery and managed support under clear ownership.
            </p>
            <ArrowLink href="#contact">Discuss your requirement</ArrowLink>
            <div className="mt-auto pt-8">
              <p className="text-lg font-semibold tracking-[-0.02em] text-[var(--ink)]">
                Delivery
              </p>
              <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#8b8fa3]">
                Owned outcomes
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
