"use client";

import { useState, type ReactNode } from "react";
import { TALENT_CAPABILITY_TABS } from "@/data/talent-capabilities";
import { TALENT_HOME } from "@/lib/talent-home-palette";

/** Pleasant tab themes — purple, blue, pink, green (no red). */
const TAB_THEMES = [
  { bg: "#E8F5EA", activeBg: "#F0FAF2", iconBg: TALENT_HOME.primary, iconColor: TALENT_HOME.accent, accent: TALENT_HOME.primary },
  { bg: "#D8E9FB", activeBg: "#E8F1FB", iconBg: "#1F5C99", iconColor: "#ffffff", accent: "#0B2E59" },
  { bg: "#FCE7F3", activeBg: "#FFF0F7", iconBg: "#db2777", iconColor: "#ffffff", accent: "#9d174d" },
  { bg: "#E8F5EA", activeBg: "#F0FAF2", iconBg: TALENT_HOME.primary, iconColor: TALENT_HOME.accent, accent: TALENT_HOME.primary },
  { bg: "#D5EED3", activeBg: "#EEF6EF", iconBg: "#36a852", iconColor: "#ffffff", accent: "#0d4216" },
  { bg: "#E6E0FF", activeBg: "#F3F0FF", iconBg: "#8b5cf6", iconColor: "#ffffff", accent: "#6d28d9" },
  { bg: "#D8E9FB", activeBg: "#E8F1FB", iconBg: "#2383e2", iconColor: "#ffffff", accent: "#1F5C99" },
  { bg: "#FCE7F3", activeBg: "#FFF0F7", iconBg: "#ec4899", iconColor: "#ffffff", accent: "#be185d" },
] as const;

const TAB_ICONS: Record<string, ReactNode> = {
  servicenow: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" />
    </>
  ),
  engineering: (
    <>
      <path d="M8 9l-2 3 2 3" />
      <path d="M16 9l2 3-2 3" />
      <path d="M13 7l-2 10" />
    </>
  ),
  "data-ai": (
    <>
      <path d="M4 18V6l8-3 8 3v12l-8 3-8-3z" />
      <path d="M12 9v9M8 11v5M16 11v5" />
    </>
  ),
  "cloud-devops": (
    <path d="M7 16a4 4 0 0 1-.5-8 5.5 5.5 0 0 1 10.6-1.5A4 4 0 0 1 18 16z" />
  ),
  enterprise: (
    <>
      <rect x="5" y="5" width="6" height="6" rx="1" />
      <rect x="13" y="5" width="6" height="6" rx="1" />
      <rect x="5" y="13" width="6" height="6" rx="1" />
      <rect x="13" y="13" width="6" height="6" rx="1" />
    </>
  ),
  quality: (
    <>
      <path d="M9 5h6v14H9z" />
      <path d="M11 9h4M11 13h4M11 17h2" />
    </>
  ),
  cybersecurity: (
    <>
      <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  digital: (
    <>
      <circle cx="9" cy="10" r="3" />
      <circle cx="17" cy="8" r="2.5" />
      <path d="M4 20c1.5-3 3.5-4.5 5-4.5s3.5 1.5 5 4.5M14 20c1-2 2.5-3 3.5-3" />
    </>
  ),
};

function TabIcon({ id, iconBg, iconColor }: { id: string; iconBg: string; iconColor: string }) {
  return (
    <span
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10"
      style={{ backgroundColor: iconBg, color: iconColor }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        {TAB_ICONS[id]}
      </svg>
    </span>
  );
}

export default function TalentCapabilitySection() {
  const [activeId, setActiveId] = useState(TALENT_CAPABILITY_TABS[0].id);
  const active = TALENT_CAPABILITY_TABS.find((tab) => tab.id === activeId) ?? TALENT_CAPABILITY_TABS[0];
  const activeIndex = TALENT_CAPABILITY_TABS.findIndex((tab) => tab.id === activeId);
  const theme = TAB_THEMES[activeIndex] ?? TAB_THEMES[0];

  return (
    <section className="overflow-x-clip bg-white px-4 py-12 sm:px-10 sm:py-16 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title-lg">
            Technology talent for every{" "}
            <span className="talent-gradient-text">critical capability</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#52525b] sm:text-[17px]">
            Explore the specialist skills and roles we support across platforms, engineering,
            data, cloud, and digital delivery.
          </p>
        </div>

        <div
          className="mt-10 rounded-3xl p-4 transition-colors duration-300 sm:mt-12 sm:p-6 lg:p-8"
          style={{ backgroundColor: theme.bg }}
        >
          <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.16em] text-[#3d4a5c] sm:mb-6">
            Capability areas
          </p>

          <div className="grid min-w-0 gap-5 lg:grid-cols-[280px_1fr] lg:gap-6">
            <nav className="flex flex-col gap-2" aria-label="Capability areas">
              {TALENT_CAPABILITY_TABS.map((tab, i) => {
                const isActive = tab.id === activeId;
                const tabTheme = TAB_THEMES[i] ?? TAB_THEMES[0];
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveId(tab.id)}
                    className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all sm:px-4 sm:py-3 ${
                      isActive
                        ? "border-transparent shadow-sm"
                        : "border-white/60 bg-white/70 hover:bg-white"
                    }`}
                    style={
                      isActive
                        ? { backgroundColor: tabTheme.activeBg, borderColor: tabTheme.bg }
                        : undefined
                    }
                  >
                    <TabIcon id={tab.id} iconBg={tabTheme.iconBg} iconColor={tabTheme.iconColor} />
                    <span
                      className={`text-sm leading-snug ${isActive ? "font-semibold" : "font-medium text-[#52525b]"}`}
                      style={isActive ? { color: tabTheme.accent } : undefined}
                    >
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </nav>

            <article className="min-w-0 rounded-2xl bg-white p-5 shadow-sm sm:p-8">
              <div className="flex items-start gap-3">
                <TabIcon id={active.id} iconBg={theme.iconBg} iconColor={theme.iconColor} />
                <div>
                  <h3 className="text-xl font-semibold text-[var(--ink)] sm:text-2xl">{active.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#52525b] sm:text-base">{active.subtitle}</p>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {active.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-[#3d4a5c]">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: theme.accent }}
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div
                className="mt-6 rounded-xl border p-4"
                style={{ borderColor: theme.bg, backgroundColor: `${theme.bg}55` }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#676879]">Roles</p>
                <p className="mt-2 text-sm leading-relaxed text-[#3d4a5c]">{active.roles.join(" · ")}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-2.5 py-1 text-[11px] font-medium"
                    style={{
                      borderColor: theme.bg,
                      backgroundColor: "#ffffff",
                      color: theme.accent,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
