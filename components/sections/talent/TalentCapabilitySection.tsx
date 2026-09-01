"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TALENT_CAPABILITY_TABS, type TalentCapabilityTab } from "@/data/talent-capabilities";
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

const TAB_ICON_SRC: Record<string, string> = {
  servicenow: "/images/talent/tabicon/servicenow.svg",
  engineering: "/images/talent/tabicon/engineering.svg",
  "data-ai": "/images/talent/tabicon/data-ai.svg",
  "cloud-devops": "/images/talent/tabicon/cloud-devops.svg",
  enterprise: "/images/talent/tabicon/enterprise.svg",
  quality: "/images/talent/tabicon/quality.svg",
  cybersecurity: "/images/talent/tabicon/cybersecurity.svg",
  digital: "/images/talent/tabicon/digital.svg",
};

function TabIcon({ id, iconBg }: { id: string; iconBg: string; iconColor?: string }) {
  const src = TAB_ICON_SRC[id];
  return (
    <span
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10"
      style={{ backgroundColor: iconBg }}
      aria-hidden="true"
    >
      {src ? (
        <Image
          src={src}
          alt=""
          width={20}
          height={20}
          unoptimized
          className="h-5 w-5 brightness-0 invert"
        />
      ) : null}
    </span>
  );
}

function AccordionChevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function CapabilityPanel({
  tab,
  theme,
}: {
  tab: TalentCapabilityTab;
  theme: (typeof TAB_THEMES)[number];
}) {
  return (
    <article className="min-w-0 rounded-2xl bg-white p-5 shadow-sm sm:p-8">
      <div className="flex items-start gap-3">
        <TabIcon id={tab.id} iconBg={theme.iconBg} iconColor={theme.iconColor} />
        <div>
          <h3 className="text-xl font-semibold text-[var(--ink)] sm:text-2xl">{tab.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-[#52525b] sm:text-base">{tab.subtitle}</p>
        </div>
      </div>

      <ul className="mt-5 space-y-2.5">
        {tab.bullets.map((bullet) => (
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
        <p className="mt-2 text-sm leading-relaxed text-[#3d4a5c]">{tab.roles.join(" · ")}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {tab.tags.map((tag) => (
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
  );
}

export default function TalentCapabilitySection() {
  const [activeId, setActiveId] = useState(TALENT_CAPABILITY_TABS[0].id);
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set([TALENT_CAPABILITY_TABS[0].id])
  );
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const pendingScroll = useRef<string | null>(null);

  const active = TALENT_CAPABILITY_TABS.find((tab) => tab.id === activeId) ?? TALENT_CAPABILITY_TABS[0];
  const activeIndex = TALENT_CAPABILITY_TABS.findIndex((tab) => tab.id === activeId);
  const theme = TAB_THEMES[activeIndex] ?? TAB_THEMES[0];

  const toggleAccordion = (id: string) => {
    const willOpen = !openIds.has(id);
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
    setActiveId(id);
    if (willOpen) pendingScroll.current = id;
  };

  useEffect(() => {
    const id = pendingScroll.current;
    if (!id) return;
    pendingScroll.current = null;
    itemRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [openIds]);

  return (
    <section className="overflow-x-clip bg-white">
      <div className="mx-auto max-w-[1400px]">
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

          {/* Mobile: detail panel opens under the selected button */}
          <div className="flex flex-col gap-2 lg:hidden">
            {TALENT_CAPABILITY_TABS.map((tab, i) => {
              const open = openIds.has(tab.id);
              const tabTheme = TAB_THEMES[i] ?? TAB_THEMES[0];
              return (
                <div
                  key={tab.id}
                  ref={(el) => {
                    itemRefs.current[tab.id] = el;
                  }}
                  className="flex scroll-mt-[72px] flex-col gap-2"
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => toggleAccordion(tab.id)}
                    className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all ${
                      open ? "border-transparent shadow-sm" : "border-white/60 bg-white/70"
                    }`}
                    style={
                      open
                        ? { backgroundColor: tabTheme.activeBg, borderColor: tabTheme.bg }
                        : undefined
                    }
                  >
                    <TabIcon id={tab.id} iconBg={tabTheme.iconBg} iconColor={tabTheme.iconColor} />
                    <span
                      className={`min-w-0 flex-1 text-sm leading-snug ${
                        open ? "font-semibold" : "font-medium text-[#52525b]"
                      }`}
                      style={open ? { color: tabTheme.accent } : undefined}
                    >
                      {tab.label}
                    </span>
                    <span style={{ color: open ? tabTheme.accent : "#8b8fa3" }}>
                      <AccordionChevron open={open} />
                    </span>
                  </button>
                  {open ? <CapabilityPanel tab={tab} theme={tabTheme} /> : null}
                </div>
              );
            })}
          </div>

          {/* Desktop: list left + shared panel right */}
          <div className="hidden min-w-0 gap-5 lg:grid lg:grid-cols-[280px_1fr] lg:gap-6">
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

            <CapabilityPanel tab={active} theme={theme} />
          </div>
        </div>
      </div>
    </section>
  );
}
