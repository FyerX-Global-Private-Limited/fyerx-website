"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  MonitorSmartphone,
  KeyRound,
  PenTool,
  Check,
} from "lucide-react";

const TABS = [
  "Strategy & Consulting",
  "Demand & Lead Generation",
  "AI Marketing & Automation",
  "Search & AI Visibility",
  "Content, Creative & Branding",
  "Performance & Social",
];

const TAB_IMAGES: Record<string, string> = {
  "Strategy & Consulting": "/avatar/ai1.avif",
  "Demand & Lead Generation": "/avatar/ai2.avif",
  "AI Marketing & Automation": "/avatar/ai3.avif",
  "Search & AI Visibility": "/avatar/ai4.avif",
  "Content, Creative & Branding": "/avatar/ai5.avif",
  "Performance & Social": "/avatar/ai6.avif",
};

const TAB_PANEL_BG: Record<string, string> = {
  "Strategy & Consulting": "from-[#DC2626] to-[#F87171]",
  "Demand & Lead Generation": "from-[#DB2777] to-[#F472B6]",
  "AI Marketing & Automation": "from-[#2563EB] to-[#60A5FA]",
  "Search & AI Visibility": "from-[#EAB308] to-[#FDE047]",
  "Content, Creative & Branding": "from-[#EA580C] to-[#FB923C]",
  "Performance & Social": "from-[#7C3AED] to-[#C084FC]",
};

type TabContent = {
  headline: string;
  items: string[];
};

const TAB_CONTENT: Record<string, TabContent> = {
  "Strategy & Consulting": {
    headline: "Marketing built on a foundation, not guesswork.",
    items: [
      "Go-to-Market Strategy for new products, markets, or segments",
      "ICP and Buyer Persona Definition grounded in real sales data",
      "Marketing Audits that identify what's working, what's wasted",
      "Competitive Positioning that carves out defensible ground",
    ],
  },
  "Demand & Lead Generation": {
    headline: "Pipeline-first marketing that revenue teams can trust.",
    items: [
      "Account-Based Marketing for high-value target accounts",
      "LinkedIn Lead Generation built for B2B decision-makers",
      "Outbound and Cold Outreach that gets replies, not spam filters",
      "Email Nurture Sequences that move leads through the funnel",
      "Webinar and Event Marketing that convert attendees into pipeline",
      "Revenue Attribution and Pipeline Reporting tied to actual deals",
    ],
  },
  "AI Marketing & Automation": {
    headline: "AI applied to output, not just used as a buzzword.",
    items: [
      "AI-Powered Content Generation at scale, reviewed by strategists",
      "AI Ad Creative and Personalization tailored to each segment",
      "Marketing Automation Agents that run repetitive workflows for you",
      "Conversational AI for on-site and LinkedIn engagement",
      "Marketing Automation and CRM Integration that connects every tool you use",
    ],
  },
  "Search & AI Visibility": {
    headline:
      "Visible on Google. Visible inside ChatGPT, Claude, and Perplexity.",
    items: [
      "SEO to rank for the searches your buyers are already making",
      "AEO (Answer Engine Optimization) to get cited inside AI-generated answers",
      "GEO (Generative Engine Optimization) to shape how AI models describe your brand",
      "Local SEO for regional and city-specific visibility",
    ],
  },
  "Content, Creative & Branding": {
    headline: "Positioning and creative that make authority visible.",
    items: [
      "Content Strategy and Editorial Calendars aligned to funnel stage",
      "Thought Leadership and Whitepapers that build category authority",
      "Video Production and Editing for brand and product storytelling",
      "Motion Graphics and Animation for digital and social",
      "Collaterals for sales enablement and events",
      "Brand Identity and Guidelines for a consistent brand system",
      "Brand Strategy and Positioning that differentiates you clearly",
      "UI/UX Design and Website Design and Development built to convert",
    ],
  },
  "Performance & Social": {
    headline: "Every rupee of spend tracked back to pipeline.",
    items: [
      "Paid Search campaigns built around buyer intent",
      "Paid Social across LinkedIn and Meta for B2B targeting",
      "Retargeting and Conversion Rate Optimization",
      "Landing Page Design and Optimization built for conversion",
      "Marketing Analytics and ROI Tracking tied to revenue",
      "Social Media Strategy and Management for consistent brand presence",
      "Community Management to build engaged, owned audiences",
    ],
  },
};

type AgentCard = {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
};

const AGENT_CARDS: AgentCard[] = [
  {
    icon: Bot,
    iconBg: "bg-gradient-to-br from-fuchsia-200 to-pink-300",
    iconColor: "text-fuchsia-700",
    title: "IT Help Agent",
    description: "Handles technical issues and incidents.",
  },
  {
    icon: MonitorSmartphone,
    iconBg: "bg-gradient-to-br from-pink-200 to-rose-300",
    iconColor: "text-rose-700",
    title: "Device Agent",
    description: "Manages device provisioning, replacements, and issues.",
  },
  {
    icon: KeyRound,
    iconBg: "bg-gradient-to-br from-sky-200 to-blue-300",
    iconColor: "text-blue-700",
    title: "Access Agent",
    description: "Processes system access requests and approvals securely.",
  },
  {
    icon: PenTool,
    iconBg: "bg-gray-100",
    iconColor: "text-gray-500",
    title: "Create your own",
    description: "Build custom IT agents to handle any request your team receives.",
  },
];

export default function AIPlatformHero() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const tabContent = TAB_CONTENT[activeTab];

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-10 sm:py-10 lg:px-16">
        {/* ---------- Heading ---------- */}
        <h1
          className="text-center tracking-tight text-black"
          style={{ fontSize: "43px", fontWeight: 400, lineHeight: "55px" }}
        >
          Built for Every Function of Your{" "}
          <span className="bg-gradient-to-r from-[#D91A72] to-[#FF74CE] bg-clip-text text-transparent">
            Growth Team
          </span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[14px] leading-relaxed text-gray-500 sm:text-[15px]">
          Explore how FyerX supports each part of your marketing and revenue
          engine.
        </p>

        {/* ---------- Tabs ---------- */}
        <nav className="mt-8 flex flex-col items-center gap-y-2 border-b border-gray-200 pb-3">
          <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-8">
            {TABS.slice(0, 4).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative flex-shrink-0 whitespace-nowrap pb-1 text-[14px] transition-colors ${
                  activeTab === tab
                    ? "font-semibold text-black"
                    : "font-medium text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-black" />
                )}
              </button>
            ))}
          </div>
          {TABS.length > 4 && (
            <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-8">
              {TABS.slice(4).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative flex-shrink-0 whitespace-nowrap pb-1 text-[14px] transition-colors ${
                    activeTab === tab
                      ? "font-semibold text-black"
                      : "font-medium text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-black" />
                  )}
                </button>
              ))}
            </div>
          )}
        </nav>

        {/* ---------- Two column panel ---------- */}
        <div className="mt-6 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[522px_1fr]">
          {/* Left card */}
          <div className="flex flex-col justify-between rounded-[24px] border border-gray-200 p-6 sm:p-7">
            <div>
              <h2 className="text-[20px] font-bold leading-snug text-black sm:text-[22px]">
                {tabContent.headline}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {tabContent.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[13px] leading-relaxed text-gray-600"
                  >
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[#D91A72]"
                      strokeWidth={2.5}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="mt-6 flex w-fit items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[14px] font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98]">
              Get Started
              <span aria-hidden>→</span>
            </button>
          </div>

          {/* Right panel */}
          <div
            className={`relative overflow-hidden rounded-[24px] bg-gradient-to-br p-3 ${TAB_PANEL_BG[activeTab]}`}
          >
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-[18px] sm:min-h-[420px] lg:min-h-0">
              <img
                src={TAB_IMAGES[activeTab]}
                alt={`${activeTab} illustration`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ---------- Bottom agent cards ---------- */}
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AGENT_CARDS.map(({ icon: Icon, iconBg, iconColor, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-200 p-5 transition-shadow hover:shadow-md"
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconBg}`}
              >
                <Icon className={`h-[18px] w-[18px] ${iconColor}`} strokeWidth={1.75} />
              </div>
              <h3 className="mt-3 text-[14px] font-bold text-black">{title}</h3>
              <p className="mt-1 text-[12.5px] leading-relaxed text-gray-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
