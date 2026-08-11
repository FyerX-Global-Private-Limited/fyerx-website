"use client";

import { useState } from "react";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Briefcase,
  Users,
  Globe,
  Workflow,
  Zap,
  Building2,
  UserSearch,
  Search,
  Sparkles,
  Cloud,
  ClipboardCheck,
  ShieldCheck,
  BarChart3,
  Network,
  FileText,
} from "lucide-react";

const TABS = [
  "Contract Staffing",
  "RPO",
  "Permanent Hiring & Executive Search",
  "IT & Tech Talent",
  "HR Advisory",
  "Global Staffing",
];

const PANEL_GRADIENTS = [
  "from-[#DC2626] to-[#F87171]",
  "from-[#DB2777] to-[#F472B6]",
  "from-[#2563EB] to-[#60A5FA]",
  "from-[#EAB308] to-[#FDE047]",
  "from-[#EA580C] to-[#FB923C]",
  "from-[#7C3AED] to-[#C084FC]",
];

const TAB_IMAGES: Record<string, string> = Object.fromEntries(
  TABS.map((tab, i) => [tab, `/avatar/ai${(i % 6) + 1}.avif`])
);

const TAB_PANEL_BG: Record<string, string> = Object.fromEntries(
  TABS.map((tab, i) => [tab, PANEL_GRADIENTS[i % PANEL_GRADIENTS.length]])
);

type SubCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type TabContent = {
  heading: string;
  description: string;
  subCards: SubCard[];
};

const TAB_CONTENT: Record<string, TabContent> = {
  "Contract Staffing": {
    heading: "Add capability when the work cannot wait.",
    description:
      "We help teams bring in qualified people for defined roles, projects, hiring spikes, and changing workload requirements.",
    subCards: [
      {
        icon: Code2,
        title: "IT & Tech Contract Roles",
        description:
          "Specialists for short- and mid-term technical requirements.",
      },
      {
        icon: Briefcase,
        title: "Project-Based Staffing",
        description:
          "Teams or individuals aligned to a defined delivery window.",
      },
      {
        icon: Users,
        title: "Volume / Bulk Staffing",
        description:
          "Structured sourcing and screening for multiple roles.",
      },
      {
        icon: Globe,
        title: "Cross-Border Contract Staffing (US)",
        description:
          "Contract talent support for US-facing requirements.",
      },
    ],
  },
  RPO: {
    heading: "Make recruitment an extension of your operation.",
    description:
      "We take ownership of the recruitment process at the level your internal team needs—from a focused hiring burst to an ongoing programme.",
    subCards: [
      {
        icon: Workflow,
        title: "End-to-End Recruitment Outsourcing",
        description:
          "Role intake through offer coordination.",
      },
      {
        icon: Zap,
        title: "On-Demand RPO",
        description:
          "Added recruitment capacity when demand rises.",
      },
      {
        icon: Building2,
        title: "Enterprise RPO",
        description:
          "A scalable, process-led model for sustained hiring.",
      },
    ],
  },
  "Permanent Hiring & Executive Search": {
    heading: "Make important long-term hires with more focus.",
    description:
      "We run targeted search for full-time roles and leadership appointments where capability, judgement, and fit all matter.",
    subCards: [
      {
        icon: UserSearch,
        title: "Permanent Hiring",
        description:
          "Full-time professionals matched to role requirements and long-term potential.",
      },
      {
        icon: Search,
        title: "Executive Search",
        description:
          "Focused, discreet search for senior and leadership roles.",
      },
    ],
  },
  "IT & Tech Talent": {
    heading: "Source people who can contribute in the real environment.",
    description:
      "We recruit across product, engineering, enterprise platforms, cloud, data, AI, and quality engineering needs.",
    subCards: [
      {
        icon: Code2,
        title: "Software Development Roles",
        description:
          "Developers, engineers, testers, and product technology talent.",
      },
      {
        icon: Workflow,
        title: "ServiceNow & Enterprise Platform Talent",
        description:
          "Specialists across ServiceNow and enterprise technology ecosystems.",
      },
      {
        icon: Sparkles,
        title: "Data & AI Talent",
        description:
          "Data engineering, analytics, machine learning, and AI specialists.",
      },
      {
        icon: Cloud,
        title: "DevOps & Cloud Talent",
        description:
          "Infrastructure, platform, reliability, and cloud professionals.",
      },
    ],
  },
  "HR Advisory": {
    heading: "Reduce uncertainty before the hire joins.",
    description:
      "Advisory support helps teams assess candidates, validate history, and make commercially sensible offers.",
    subCards: [
      {
        icon: ClipboardCheck,
        title: "Hiring Assessments",
        description:
          "Structured role-relevant assessments and evaluations.",
      },
      {
        icon: ShieldCheck,
        title: "Background Verification",
        description:
          "Employment, education, and reference validation.",
      },
      {
        icon: BarChart3,
        title: "Compensation Benchmarking",
        description:
          "Market context for competitive, well-calibrated offers.",
      },
    ],
  },
  "Global Staffing": {
    heading: "Build distributed capability with a clearer operating model.",
    description:
      "We support remote team building and cross-border staffing requirements, with attention to the practical compliance considerations.",
    subCards: [
      {
        icon: Globe,
        title: "US Contract Staffing",
        description:
          "Support for US-based contract requirements.",
      },
      {
        icon: Network,
        title: "Remote Team Building",
        description:
          "Hiring distributed talent for effective delivery.",
      },
      {
        icon: FileText,
        title: "Cross-Border Compliance Support",
        description:
          "Guidance on process, documentation, and workforce considerations.",
      },
    ],
  },
};

export default function AIPlatformHero() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const tabContent = TAB_CONTENT[activeTab];

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-10 sm:py-10 lg:px-16">
        <h2 className="section-title-lg text-center">
          One talent partner for immediate roles and long-term capacity
        </h2>

        <nav className="-mx-4 mt-6 flex items-center gap-x-4 gap-y-2 overflow-x-auto border-b border-gray-200 px-4 pb-3 sm:mx-0 sm:mt-8 sm:flex-wrap sm:justify-center sm:gap-x-6 sm:px-0 md:gap-x-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative flex-shrink-0 whitespace-nowrap pb-1 text-[14px] transition-colors ${
                activeTab === tab
                  ? "font-semibold text-[#11551C]"
                  : "font-medium text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-[#11551C]" />
              )}
            </button>
          ))}
        </nav>

        {/* ---------- Two column panel ---------- */}
        <div className="mt-6 grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[522px_1fr]">
          {/* Left card */}
          <div className="flex flex-col justify-between rounded-[24px] border border-gray-200 p-6 sm:p-7">
            <div>
              <h3 className="text-[20px] font-bold leading-snug text-black sm:text-[22px]">
                {tabContent.heading}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-gray-600">
                {tabContent.description}
              </p>
            </div>
            <PrimaryCtaLink href="/talent/book-session" className="mt-6" color="#11551C" textColor="#9EEBAA">
              Discuss This Talent Solution
            </PrimaryCtaLink>
          </div>

          {/* Right panel — tab illustration */}
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

        {/* ---------- Sub-capability cards ---------- */}
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tabContent.subCards.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-200 p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
                <Icon className="h-[18px] w-[18px] text-gray-700" strokeWidth={1.75} />
              </div>
              <h4 className="mt-3 text-[14px] font-bold text-black">{title}</h4>
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
