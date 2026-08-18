"use client";

import { useState } from "react";
import { TALENT_CAPABILITY_TABS } from "@/data/talent-capabilities";
import { TALENT_HOME } from "@/lib/talent-home-palette";

export default function TalentCapabilitySection() {
  const [activeId, setActiveId] = useState(TALENT_CAPABILITY_TABS[0].id);
  const active = TALENT_CAPABILITY_TABS.find((tab) => tab.id === activeId) ?? TALENT_CAPABILITY_TABS[0];

  return (
    <section className="overflow-x-clip bg-white px-4 py-12 sm:px-10 sm:py-16 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title-lg">Technology talent for every critical capability</h2>
          <p className="mt-4 text-base leading-relaxed text-[#52525b] sm:text-[17px]">
            Explore the specialist skills and roles we support across platforms, engineering,
            data, cloud, and digital delivery.
          </p>
        </div>

        <div className="mt-10 grid min-w-0 gap-6 lg:mt-12 lg:grid-cols-[260px_1fr] lg:gap-8">
          <nav
            className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Capability areas"
          >
            {TALENT_CAPABILITY_TABS.map((tab) => {
              const isActive = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveId(tab.id)}
                  className={`shrink-0 rounded-xl px-4 py-3 text-left text-sm transition-all lg:w-full ${
                    isActive
                      ? "font-semibold shadow-sm ring-1 ring-[#9EEBAA]"
                      : "bg-[#F6F7FB] font-medium text-[#52525b] hover:bg-[#EEF1F6]"
                  }`}
                  style={
                    isActive
                      ? { backgroundColor: TALENT_HOME.primary, color: TALENT_HOME.accent }
                      : undefined
                  }
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>

          <article className="min-w-0 rounded-2xl border border-[#E6E9EF] bg-[#FAFBFD] p-5 sm:p-8">
            <h3 className="text-xl font-semibold text-[var(--ink)] sm:text-2xl">{active.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#52525b] sm:text-base">{active.subtitle}</p>

            <ul className="mt-5 space-y-2.5">
              {active.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-[#3d4a5c]">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: TALENT_HOME.primary }}
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#676879]">Roles</p>
              <p className="mt-2 text-sm leading-relaxed text-[#3d4a5c]">{active.roles.join(" · ")}</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {active.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-2.5 py-1 text-[11px] font-medium"
                  style={{ backgroundColor: TALENT_HOME.paleGreen, color: TALENT_HOME.primary }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
