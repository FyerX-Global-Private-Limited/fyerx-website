"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { CapabilityAreasContent, CapabilityTab } from "@/data/capability-areas";

type TabTheme = {
  bg: string;
  activeBg: string;
  iconBg: string;
  iconColor: string;
  accent: string;
};

const DEFAULT_TAB_THEMES: TabTheme[] = [
  { bg: "#E8F5EA", activeBg: "#F0FAF2", iconBg: "#11551C", iconColor: "#9EEBAA", accent: "#11551C" },
  { bg: "#D8E9FB", activeBg: "#E8F1FB", iconBg: "#1F5C99", iconColor: "#ffffff", accent: "#0B2E59" },
  { bg: "#FCE7F3", activeBg: "#FFF0F7", iconBg: "#db2777", iconColor: "#ffffff", accent: "#9d174d" },
  { bg: "#EEF0FA", activeBg: "#F5F6FC", iconBg: "#20287A", iconColor: "#B8C5FF", accent: "#20287A" },
  { bg: "#D5EED3", activeBg: "#EEF6EF", iconBg: "#36a852", iconColor: "#ffffff", accent: "#0d4216" },
  { bg: "#E6E0FF", activeBg: "#F3F0FF", iconBg: "#8b5cf6", iconColor: "#ffffff", accent: "#6d28d9" },
  { bg: "#FFF3CD", activeBg: "#FFF9E6", iconBg: "#E6A800", iconColor: "#111111", accent: "#8a6a00" },
  { bg: "#FFE8EE", activeBg: "#FFF5F8", iconBg: "#86013A", iconColor: "#ffffff", accent: "#730031" },
];

const MARKETING_TAB_THEMES: TabTheme[] = [
  { bg: "#FFF6E6", activeBg: "#FFFBF0", iconBg: "#FDAB3D", iconColor: "#111111", accent: "#8a5a00" },
  { bg: "#F3EEFF", activeBg: "#F9F6FF", iconBg: "#6161FF", iconColor: "#ffffff", accent: "#4040C7" },
  { bg: "#E8F4FF", activeBg: "#F3F9FF", iconBg: "#579BFC", iconColor: "#ffffff", accent: "#1F5C99" },
  { bg: "#FFE8F5", activeBg: "#FFF4FA", iconBg: "#FF5AC4", iconColor: "#ffffff", accent: "#C2187A" },
  { bg: "#E8F8EF", activeBg: "#F3FBF6", iconBg: "#00CA72", iconColor: "#ffffff", accent: "#0A8F52" },
  { bg: "#FFE8E6", activeBg: "#FFF5F4", iconBg: "#E2445C", iconColor: "#ffffff", accent: "#B12238" },
  { bg: "#FFF3CD", activeBg: "#FFF9E6", iconBg: "#FFC900", iconColor: "#111111", accent: "#8a6a00" },
  { bg: "#FCE7F3", activeBg: "#FFF0F7", iconBg: "#db2777", iconColor: "#ffffff", accent: "#9d174d" },
];

const MAIN_TAB_THEMES: TabTheme[] = [
  { bg: "#FFE8EE", activeBg: "#FFF5F8", iconBg: "#86013A", iconColor: "#ffffff", accent: "#730031" },
  { bg: "#E8F5EA", activeBg: "#F0FAF2", iconBg: "#11551C", iconColor: "#9EEBAA", accent: "#11551C" },
  { bg: "#EEF0FA", activeBg: "#F5F6FC", iconBg: "#20287A", iconColor: "#B8C5FF", accent: "#20287A" },
  { bg: "#FFF3CD", activeBg: "#FFF9E6", iconBg: "#FFC900", iconColor: "#111111", accent: "#8a6a00" },
];

function themesForVariant(variant: "talent" | "marketing" | "main"): TabTheme[] {
  if (variant === "marketing") return MARKETING_TAB_THEMES;
  if (variant === "main") return MAIN_TAB_THEMES;
  return DEFAULT_TAB_THEMES;
}

function TabIcon({ iconId, iconBg }: { iconId: string; iconBg: string }) {
  const src = `/images/talent/tabicon/${iconId}.svg`;
  return (
    <span
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10"
      style={{ backgroundColor: iconBg }}
      aria-hidden="true"
    >
      <Image
        src={src}
        alt=""
        width={20}
        height={20}
        unoptimized
        className="h-5 w-5 brightness-0 invert"
      />
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
  metaLabel,
}: {
  tab: CapabilityTab;
  theme: TabTheme;
  metaLabel: string;
}) {
  return (
    <article className="min-w-0 rounded-2xl bg-white p-5 shadow-sm sm:p-8">
      <div className="flex items-start gap-3">
        <TabIcon iconId={tab.iconId} iconBg={theme.iconBg} />
        <div className="min-w-0">
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
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#676879]">{metaLabel}</p>
        <p className="mt-2 text-sm leading-relaxed text-[#3d4a5c]">{tab.meta.join(" · ")}</p>
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

export default function CapabilityAreasSection({
  content,
  variant = "talent",
}: {
  content: CapabilityAreasContent;
  variant?: "talent" | "marketing" | "main";
}) {
  const themes = themesForVariant(variant);
  const tabs = content.tabs;
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? "");
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set(tabs[0] ? [tabs[0].id] : []));
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const pendingScroll = useRef<string | null>(null);

  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];
  const activeIndex = Math.max(0, tabs.findIndex((tab) => tab.id === activeId));
  const theme = themes[activeIndex % themes.length] ?? themes[0];

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

  if (!active) return null;

  return (
    <section className="home-section overflow-x-clip bg-white">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title-lg">
            {content.headingBefore}{" "}
            <span className={content.gradientClass}>{content.headingAccent}</span>
            {content.headingAfter ? ` ${content.headingAfter}` : null}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#52525b] sm:text-[17px]">
            {content.subheading}
          </p>
        </div>

        <div
          className="mt-10 rounded-3xl p-4 transition-colors duration-300 sm:mt-12 sm:p-6 lg:p-8"
          style={{ backgroundColor: theme.bg }}
        >
          <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.16em] text-[#3d4a5c] sm:mb-6">
            {content.areasLabel}
          </p>

          <div className="flex flex-col gap-2 lg:hidden">
            {tabs.map((tab, i) => {
              const open = openIds.has(tab.id);
              const tabTheme = themes[i % themes.length] ?? themes[0];
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
                    <TabIcon iconId={tab.iconId} iconBg={tabTheme.iconBg} />
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
                  {open ? (
                    <CapabilityPanel tab={tab} theme={tabTheme} metaLabel={content.metaLabel} />
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="hidden min-w-0 gap-5 lg:grid lg:grid-cols-[280px_1fr] lg:gap-6">
            <nav className="flex flex-col gap-2" aria-label={content.areasLabel}>
              {tabs.map((tab, i) => {
                const isActive = tab.id === activeId;
                const tabTheme = themes[i % themes.length] ?? themes[0];
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
                    <TabIcon iconId={tab.iconId} iconBg={tabTheme.iconBg} />
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

            <CapabilityPanel tab={active} theme={theme} metaLabel={content.metaLabel} />
          </div>
        </div>
      </div>
    </section>
  );
}
