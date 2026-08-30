"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { TECHNOLOGY_SERVICE_TABS, type TechServiceTab } from "@/data/technology-services";
import { TECH_HOME } from "@/lib/technology-home-palette";

const TAB_THEMES = [
  { bg: "#EEF0FA", activeBg: "#F6F7FB", iconBg: TECH_HOME.primary, iconColor: TECH_HOME.accent, accent: TECH_HOME.primary },
  { bg: "#E4E8F8", activeBg: "#EEF0FA", iconBg: "#2A35A1", iconColor: "#ffffff", accent: "#20287A" },
  { bg: "#E8E4F8", activeBg: "#F3F0FF", iconBg: "#4B5FDB", iconColor: "#ffffff", accent: "#3D3A8C" },
  { bg: "#E4EEF8", activeBg: "#F0F5FB", iconBg: "#1F5C99", iconColor: "#ffffff", accent: "#1F5C99" },
  { bg: "#EDE8F8", activeBg: "#F6F3FF", iconBg: "#3D3A8C", iconColor: "#ffffff", accent: "#3D3A8C" },
] as const;

const TAB_ICON_SRC: Record<string, string> = {
  "enterprise-platforms": "/images/talent/tabicon/enterprise.svg",
  "digital-transformation": "/images/talent/tabicon/digital.svg",
  "data-ai": "/images/talent/tabicon/data-ai.svg",
  "cloud-devops": "/images/talent/tabicon/cloud-devops.svg",
  "strategic-advisory": "/images/talent/tabicon/quality.svg",
};

function TabIcon({ id, iconBg }: { id: string; iconBg: string }) {
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

function ServicePanel({
  tab,
  theme,
}: {
  tab: TechServiceTab;
  theme: (typeof TAB_THEMES)[number];
}) {
  return (
    <article className="min-w-0 rounded-2xl bg-white p-4 shadow-sm sm:p-5 lg:p-8">
      <div className="flex items-start gap-3">
        <TabIcon id={tab.id} iconBg={theme.iconBg} />
        <div>
          <h3 className="text-lg font-semibold text-[var(--ink)] sm:text-xl lg:text-2xl">{tab.label}</h3>
          <p className="mt-1 text-sm leading-relaxed text-[#52525b] sm:text-base">{tab.subtitle}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-[#3d4a5c] sm:mt-5">{tab.description}</p>

      <div className="mt-4 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
        {tab.groups.map((group) => (
          <div
            key={group.label}
            className="rounded-xl border p-3 sm:p-4"
            style={{ borderColor: theme.bg, backgroundColor: `${theme.bg}55` }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#676879]">
              {group.label}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border bg-white px-2.5 py-1 text-[11px] font-medium"
                  style={{
                    borderColor: theme.bg,
                    color: theme.accent,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <PrimaryCtaLink href={tab.ctaHref} color={TECH_HOME.primary} textColor={TECH_HOME.accent}>
          {tab.cta}
        </PrimaryCtaLink>
      </div>
    </article>
  );
}

export default function TechServicesSection() {
  const [activeId, setActiveId] = useState(TECHNOLOGY_SERVICE_TABS[0].id);
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set([TECHNOLOGY_SERVICE_TABS[0].id])
  );
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const pendingScroll = useRef<string | null>(null);

  const active = TECHNOLOGY_SERVICE_TABS.find((tab) => tab.id === activeId) ?? TECHNOLOGY_SERVICE_TABS[0];
  const activeIndex = TECHNOLOGY_SERVICE_TABS.findIndex((tab) => tab.id === activeId);
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
    <section id="services" className="scroll-mt-[80px] overflow-x-clip bg-white">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#20287A]">
            Our Services
          </p>
          <h2 className="section-title-lg mt-3">
            Services for critical{" "}
            <span className="tech-gradient-text">business systems</span>.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#52525b] sm:mt-4 sm:text-base sm:text-[17px]">
            Select a service area to see how FyerX supports platform change,
            digital delivery, data, cloud operations and complex business decisions.
          </p>
        </div>

        <div
          className="mt-6 rounded-2xl p-3 transition-colors duration-300 sm:mt-10 sm:rounded-3xl sm:p-6 lg:mt-12 lg:p-8"
          style={{ backgroundColor: theme.bg }}
        >
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-[#3d4a5c] sm:mb-6">
            Service areas
          </p>

          <div className="flex flex-col gap-2 lg:hidden">
            {TECHNOLOGY_SERVICE_TABS.map((tab, i) => {
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
                    <TabIcon id={tab.id} iconBg={tabTheme.iconBg} />
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
                  {open ? <ServicePanel tab={tab} theme={tabTheme} /> : null}
                </div>
              );
            })}
          </div>

          <div className="hidden min-w-0 gap-5 lg:grid lg:grid-cols-[280px_1fr] lg:gap-6">
            <nav className="flex flex-col gap-2" aria-label="Service areas">
              {TECHNOLOGY_SERVICE_TABS.map((tab, i) => {
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
                    <TabIcon id={tab.id} iconBg={tabTheme.iconBg} />
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

            <ServicePanel tab={active} theme={theme} />
          </div>
        </div>
      </div>
    </section>
  );
}
