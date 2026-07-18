"use client";

import { type CSSProperties, type ReactNode } from "react";

/**
 * StackedScrollSection
 * -------------------------------------------------------------------------
 * Replica of the monday.com/crm "stacking cards" scroll section.
 *
 * ANIMATION
 *   Each coloured panel is `position: sticky`. As you scroll, panel N pins
 *   near the top of the viewport while panel N+1 slides up and overlaps it,
 *   leaving a thin coloured sliver of the previous panel peeking above the
 *   new one. This is pure CSS sticky-stacking — no JS, no scroll listeners,
 *   so it's smooth on every device and degrades gracefully.
 *
 *   The peek is produced by giving each panel a slightly larger `top`
 *   offset than the one before it (STACK_TOP + index * PEEK).
 *
 * CONTENT
 *   Five panels — "Why B2B Marketing Needs an AI-First Partner Now" — each:
 *   a pill badge, a headline, and a supporting paragraph (left column), plus
 *   the original "monday CRM" UI mockup with a floating AI-agent popup
 *   (right column, kept as placeholder visuals — swap for real product/brand
 *   mockups when available).
 * -------------------------------------------------------------------------
 */

/* Sticky geometry (px). PEEK controls how much of each previous panel shows. */
const STACK_TOP = 88;
const PEEK = 26;

/* -------------------------------------------------------------------------
 * Tiny building blocks for the mockups
 * ---------------------------------------------------------------------- */

function MondayMark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 font-semibold text-neutral-700 ${className}`}
    >
      <span className="relative inline-flex h-4 w-4 items-center justify-center">
        <span className="absolute h-2 w-2 rounded-full bg-red-400" style={{ left: 0 }} />
        <span className="absolute h-2 w-2 rounded-full bg-yellow-400" style={{ left: 5 }} />
        <span className="absolute h-2 w-2 rounded-full bg-green-500" style={{ left: 10 }} />
      </span>
      <span className="ml-2 text-[11px]">
        <b className="font-bold">monday</b> CRM
      </span>
    </span>
  );
}

function Avatar({ from, to, className = "" }: { from: string; to: string; className?: string }) {
  return (
    <span
      className={`inline-block rounded-full bg-gradient-to-br ${from} ${to} ${className}`}
    />
  );
}

function Bar({ w = "w-full", className = "" }: { w?: string; className?: string }) {
  return <span className={`block h-1.5 rounded-full ${w} ${className}`} />;
}

function Pill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-1.5 py-0.5 text-[8px] font-semibold ${className}`}
    >
      {children}
    </span>
  );
}

/** Floating "agent" popup used on several panels. */
function AgentPopup({
  name,
  body,
  avatarFrom,
  avatarTo,
  className = "",
  style,
}: {
  name: string;
  body: string;
  avatarFrom: string;
  avatarTo: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      style={style}
      className={`absolute w-[210px] rounded-xl border border-white/70 bg-white p-2.5 shadow-xl ${className}`}
    >
      <div className="flex items-start gap-2">
        <Avatar from={avatarFrom} to={avatarTo} className="h-8 w-8 flex-shrink-0" />
        <div className="min-w-0">
          <p className="text-[11px] font-bold text-neutral-900">{name}</p>
          <p className="mt-0.5 text-[9px] leading-snug text-neutral-500">{body}</p>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * Panel mockups (right column)
 * ---------------------------------------------------------------------- */

function MockPipeline() {
  return (
    <div className="relative h-full w-full">
      {/* base board */}
      <div className="absolute left-6 top-14 w-[92%] rounded-2xl bg-white/95 p-3 shadow-2xl">
        <MondayMark />
        <p className="mt-2 text-[13px] font-bold text-neutral-900">New leads</p>

        <p className="mt-3 text-[9px] font-semibold text-blue-500">LinkedIn</p>
        {["Daniel Park", "Sophia Turner"].map((n) => (
          <div key={n} className="mt-1 flex items-center gap-2">
            <Avatar from="from-sky-300" to="to-indigo-400" className="h-4 w-4" />
            <span className="w-20 truncate text-[9px] text-neutral-600">{n}</span>
            <Pill className="bg-green-100 text-green-700">Contacted</Pill>
            <Bar w="w-10" className="bg-blue-400" />
          </div>
        ))}

        <p className="mt-3 text-[9px] font-semibold text-blue-500">Meta leads</p>
        {["Jessica Green", "Emily Carter", "Ross Olive"].map((n) => (
          <div key={n} className="mt-1 flex items-center gap-2">
            <Avatar from="from-rose-300" to="to-orange-300" className="h-4 w-4" />
            <span className="w-20 truncate text-[9px] text-neutral-600">{n}</span>
            <Pill className="bg-green-100 text-green-700">Contacted</Pill>
            <Bar w="w-10" className="bg-blue-400" />
          </div>
        ))}
      </div>

      {/* floating task chips */}
      <div className="absolute left-24 top-[128px] flex items-center gap-1 rounded-lg bg-white px-2 py-1 shadow-lg">
        <Avatar from="from-sky-300" to="to-blue-500" className="h-4 w-4" />
        <span className="text-[8.5px] text-neutral-700">Find new qualified leads</span>
        <Pill className="bg-green-100 text-green-700">Completed</Pill>
      </div>
      <div className="absolute left-16 top-[176px] flex items-center gap-1 rounded-lg bg-white px-2 py-1 shadow-lg">
        <Avatar from="from-sky-300" to="to-blue-500" className="h-4 w-4" />
        <span className="text-[8.5px] text-neutral-700">Enrich new leads from LI</span>
        <Pill className="bg-green-100 text-green-700">Completed</Pill>
      </div>
      <div className="absolute left-28 top-[224px] flex items-center gap-1 rounded-lg bg-white px-2 py-1 shadow-lg">
        <Avatar from="from-sky-300" to="to-blue-500" className="h-4 w-4" />
        <span className="text-[8.5px] text-neutral-700">Score leads by relevance</span>
        <Pill className="bg-amber-100 text-amber-700">In progress</Pill>
      </div>

      <AgentPopup
        className="right-2 top-2"
        name="Lead Agent"
        body="I've found and scored 20 new leads in your territory. Ready to jump in?"
        avatarFrom="from-orange-200"
        avatarTo="to-rose-300"
      />
    </div>
  );
}

function MockData() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-6 top-16 w-[92%] rounded-2xl bg-white/95 p-3 shadow-2xl">
        <div className="flex items-center justify-between">
          <MondayMark />
          <span className="text-[10px] font-bold text-neutral-800">$70,000</span>
        </div>

        <p className="mt-2 text-[10px] font-semibold text-neutral-700">Deal stages</p>
        <div className="mt-1 flex gap-1">
          <span className="rounded bg-emerald-500 px-2 py-1 text-[8px] font-semibold text-white">New</span>
          <span className="rounded bg-neutral-100 px-2 py-1 text-[8px] text-neutral-500">Discovery</span>
          <span className="rounded bg-neutral-100 px-2 py-1 text-[8px] text-neutral-500">Proposal</span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="col-span-2">
            <p className="text-[9px] font-semibold text-neutral-700">Emails &amp; Activities</p>
            {[
              ["AI summary", "James confirmed budget approval and requested a revised proposal."],
              ["Meeting", "with James Lawson, Sarah Chen"],
              ["Email", "From: James Lawson"],
            ].map(([t, s]) => (
              <div key={t} className="mt-1.5 flex items-start gap-1.5">
                <span className="mt-0.5 h-4 w-4 flex-shrink-0 rounded bg-gradient-to-br from-violet-400 to-blue-400" />
                <div>
                  <p className="text-[8.5px] font-semibold text-neutral-700">{t}</p>
                  <p className="text-[8px] leading-snug text-neutral-400">{s}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="text-[9px] font-semibold text-neutral-700">Deal info</p>
            <p className="mt-1 text-[8px] text-neutral-400">Activities timeline</p>
            <div className="mt-1 flex gap-0.5">
              {["bg-rose-400", "bg-blue-400", "bg-emerald-400", "bg-amber-400"].map((c, i) => (
                <span key={i} className={`h-2 w-1 rounded-full ${c}`} />
              ))}
            </div>
            <p className="mt-2 text-[8px] text-neutral-400">Stage</p>
            <Bar w="w-12" className="mt-0.5 bg-blue-400" />
            <p className="mt-2 text-[8px] text-neutral-400">Owners</p>
            <div className="mt-0.5 flex -space-x-1">
              <Avatar from="from-sky-300" to="to-blue-400" className="h-3 w-3 ring-1 ring-white" />
              <Avatar from="from-rose-300" to="to-orange-300" className="h-3 w-3 ring-1 ring-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-3 top-3 w-[190px] rounded-xl border border-white/70 bg-white p-2.5 shadow-xl">
        <p className="text-[10px] font-bold text-neutral-900">▤ Meeting overview</p>
        <p className="mt-1 text-[9px] leading-snug text-neutral-500">
          Meridian Group is looking to consolidate their sales tools and improve pipeline
          visibility across the team.
        </p>
        <div className="mt-2 space-y-1">
          <Bar className="bg-gradient-to-r from-emerald-200 to-blue-200" />
          <Bar w="w-4/5" className="bg-gradient-to-r from-emerald-200 to-blue-200" />
          <Bar w="w-2/3" className="bg-gradient-to-r from-emerald-200 to-blue-200" />
        </div>
      </div>
    </div>
  );
}

function MockWin() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-6 top-16 w-[80%] rounded-2xl bg-white/95 p-3 shadow-2xl">
        <MondayMark />
        <p className="mt-2 text-[13px] font-bold text-neutral-900">Good morning, David</p>
        <div className="mt-2 flex items-center gap-2 rounded-lg border border-neutral-200 px-2 py-1.5">
          <span className="h-3 w-3 rounded-full bg-gradient-to-br from-violet-400 to-blue-400" />
          <span className="text-[9px] text-neutral-400">Ask anything...</span>
        </div>
        <div className="mt-2 space-y-1">
          <Bar className="bg-neutral-100" />
          <Bar w="w-3/4" className="bg-neutral-100" />
        </div>
      </div>

      <div className="absolute right-2 top-2 w-[200px] rounded-xl border border-white/70 bg-white p-2.5 shadow-xl">
        <div className="flex items-center gap-2">
          <Avatar from="from-amber-700" to="to-orange-900" className="h-6 w-6" />
          <p className="text-[11px] font-bold text-neutral-900">Meeting Prep Agent</p>
        </div>
        <p className="mt-1.5 text-[9px] font-semibold text-neutral-600">☑ TL;DR</p>
        <p className="text-[9px] leading-snug text-neutral-500">
          Chloe is leading a regional expansion and is interested in learning more.
        </p>
        <p className="mt-1.5 text-[9px] font-semibold text-neutral-600">✦ Meeting objectives</p>
        <ul className="mt-0.5 space-y-0.5 text-[8.5px] text-neutral-500">
          <li>• Evaluate expansion priorities</li>
          <li>• Understand project and delivery</li>
          <li>• Determine decision makers</li>
          <li>• Review similar consulting work</li>
        </ul>
      </div>
    </div>
  );
}

function MockForecast() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-6 top-16 w-[92%] rounded-2xl bg-white/95 p-3 shadow-2xl">
        <MondayMark />
        <p className="mt-2 text-[12px] font-bold text-neutral-900">
          Pipeline health report — Q2, 2026
        </p>

        <div className="mt-2 grid grid-cols-3 gap-2">
          {[
            ["Pipeline coverage", "3.1x"],
            ["Stuck deals", "5"],
            ["Est. revenue", "$1.2M"],
          ].map(([label, val]) => (
            <div key={label} className="rounded-lg bg-neutral-50 p-2">
              <p className="text-[8px] text-neutral-400">{label}</p>
              <p className="mt-0.5 text-[13px] font-bold text-neutral-800">{val}</p>
            </div>
          ))}
        </div>

        <p className="mt-3 text-[9px] font-semibold text-neutral-700">Pipeline distribution</p>
        <div className="mt-1 flex h-3 overflow-hidden rounded-md">
          <span className="bg-neutral-500" style={{ width: "11%" }} />
          <span className="bg-sky-300" style={{ width: "30%" }} />
          <span className="bg-emerald-300" style={{ width: "36%" }} />
          <span className="bg-emerald-500" style={{ width: "23%" }} />
        </div>
        <div className="mt-1 flex flex-wrap gap-2 text-[7.5px] text-neutral-500">
          <span>● Discovery 11%</span>
          <span>● Proposal 30%</span>
          <span>● Negotiation 36%</span>
          <span>● Commit 23%</span>
        </div>
      </div>

      <AgentPopup
        className="right-2 top-2 !w-[220px]"
        name="Pipeline monitor agent"
        body="There are 5 lower velocity deals across your team. I've drafted nudges for the reps with next steps."
        avatarFrom="from-sky-300"
        avatarTo="to-blue-500"
      />
    </div>
  );
}

/* Panel 5 — reconstructed in the same language (not in the reference). */
function MockAssistant() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-6 top-16 w-[92%] rounded-2xl bg-white/95 p-3 shadow-2xl">
        <MondayMark />
        <p className="mt-2 text-[12px] font-bold text-neutral-900">Ask anything about everything</p>
        <div className="mt-2 flex items-center gap-2 rounded-lg border border-neutral-200 px-2 py-1.5">
          <span className="h-3 w-3 rounded-full bg-gradient-to-br from-violet-400 to-blue-400" />
          <span className="text-[9px] text-neutral-400">How is the West region trending?</span>
        </div>
        <div className="mt-2 space-y-1.5">
          <Bar className="bg-neutral-100" />
          <Bar w="w-5/6" className="bg-neutral-100" />
          <Bar w="w-2/3" className="bg-neutral-100" />
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {["+18%", "42", "$310K"].map((v) => (
              <div key={v} className="rounded-md bg-neutral-50 p-1.5">
                <p className="text-[11px] font-bold text-neutral-800">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AgentPopup
        className="right-2 top-2"
        name="Company Brain"
        body="West region is up 18% QoQ, driven by faster proposal-to-close times."
        avatarFrom="from-violet-300"
        avatarTo="to-indigo-500"
      />
    </div>
  );
}

/* -------------------------------------------------------------------------
 * Panel data / theming
 * ---------------------------------------------------------------------- */

type Panel = {
  id: string;
  badge: string;
  title: ReactNode;
  description: string;
  bg: string; // Tailwind bg-[...]
  tone: "light" | "dark"; // text colour on the panel
  mockup: ReactNode;
};

const PANELS: Panel[] = [
  {
    id: "ai-discovery",
    badge: "AI-First Discovery",
    title: "Buyers Research With AI Before They Talk to You",
    description:
      "Most B2B buyers now use AI tools to shortlist vendors before a single sales conversation happens. If your brand isn't visible inside those AI answers, you're invisible at the exact moment research begins.",
    bg: "bg-[#123fd4]",
    tone: "light",
    mockup: <MockPipeline />,
  },
  {
    id: "ai-infrastructure",
    badge: "AI Infrastructure",
    title: "AI Is Now Infrastructure, Not a Tool",
    description:
      "Leading marketing teams have moved AI from an experiment to the operating layer behind content, personalization, and reporting. FyerX builds that same layer into your marketing from day one.",
    bg: "bg-[#2f7bf6]",
    tone: "light",
    mockup: <MockData />,
  },
  {
    id: "search-battlegrounds",
    badge: "Search x AI",
    title: "Search Has Split Into Two Battlegrounds",
    description:
      "Google rankings still matter, but so does how ChatGPT, Claude, and Perplexity describe your brand. FyerX optimizes for both, through SEO and AEO/GEO, so you're found everywhere your buyer looks.",
    bg: "bg-[#12b562]",
    tone: "light",
    mockup: <MockWin />,
  },
  {
    id: "built-with-ai",
    badge: "Built With AI",
    title: "Generic Agencies Bolt AI On. We Build With It.",
    description:
      "Most agencies added an 'AI services' line item to an old playbook. FyerX designed its entire growth system around AI from the ground up, across content, ad personalization, and automation.",
    bg: "bg-[#f7c518]",
    tone: "dark",
    mockup: <MockForecast />,
  },
  {
    id: "compounding-growth",
    badge: "Compounding Growth",
    title: "The Result: Marketing That Compounds",
    description:
      "Strategy plus AI plus demand generation working together doesn't just produce a campaign. It produces a system that gets more efficient and more predictable with every quarter.",
    bg: "bg-[#6b4df6]",
    tone: "light",
    mockup: <MockAssistant />,
  },
];

/* -------------------------------------------------------------------------
 * Component
 * ---------------------------------------------------------------------- */

export default function StackedScrollSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        {/* Section header */}
        <div className="flex flex-col gap-6 pt-12 sm:flex-row sm:items-start sm:justify-between sm:pt-16">
          <div className="max-w-xl">
            <h2
              className="tracking-tight text-neutral-900"
              style={{ fontSize: "43px", fontWeight: 400, lineHeight: "55px" }}
            >
              Why B2B Marketing Needs an AI-First Partner Now
            </h2>
          </div>
          <button
            type="button"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Get Started
            <span aria-hidden="true">→</span>
          </button>
        </div>

        {/* Stacking cards */}
        <div className="relative mt-12 pb-[20vh]">
          {PANELS.map((panel, i) => {
            const isDark = panel.tone === "dark";
            const textColor = isDark ? "text-neutral-900" : "text-white";
            const subColor = isDark ? "text-neutral-800/80" : "text-white/85";
            const badgeCls = isDark
              ? "bg-black/10 text-neutral-900"
              : "bg-white/15 text-white";

            return (
              <div
                key={panel.id}
                className="sticky"
                style={{ top: `${STACK_TOP + i * PEEK}px` }}
              >
                <div
                  className={`${panel.bg} mb-8 overflow-hidden rounded-[28px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]`}
                >
                  <div className="grid gap-6 p-8 sm:p-10 md:grid-cols-2 md:gap-4 md:p-12">
                    {/* Left: copy */}
                    <div className="flex flex-col">
                      <span
                        className={`inline-flex w-fit items-center rounded-md px-3 py-1 text-xs font-medium ${badgeCls}`}
                      >
                        {panel.badge}
                      </span>
                      <h3
                        className={`mt-6 text-2xl font-bold leading-[1.15] tracking-tight sm:text-3xl md:text-[32px] ${textColor}`}
                      >
                        {panel.title}
                      </h3>
                      <p className={`mt-5 max-w-md text-sm leading-relaxed ${subColor}`}>
                        {panel.description}
                      </p>
                    </div>

                    {/* Right: mockup */}
                    <div className="relative h-[300px] w-full sm:h-[340px]">
                      {panel.mockup}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
