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
    heading: "Talent for exactly as long as you need it",
    description:
      "We place contract talent for specific roles and timelines, so you scale your team up or down without long-term overhead.",
    subCards: [
      {
        icon: Code2,
        title: "IT & Tech Contract Roles",
        description:
          "Short and mid-term contract hires for specific technical roles and skill gaps.",
      },
      {
        icon: Briefcase,
        title: "Project-Based Staffing",
        description:
          "Talent brought in for the duration of a defined project, scaled up or down as needed.",
      },
      {
        icon: Users,
        title: "Volume/Bulk Staffing",
        description:
          "Fast hiring for multiple similar roles at once, without compromising on screening.",
      },
      {
        icon: Globe,
        title: "Cross-Border Contract Staffing (US)",
        description:
          "Contract talent placed for US-based teams, handled end to end from India.",
      },
    ],
  },
  RPO: {
    heading: "Recruitment run as an extension of your team",
    description:
      "We take on part or all of your hiring process, so your internal team can focus on everything else.",
    subCards: [
      {
        icon: Workflow,
        title: "End-to-End Recruitment Outsourcing",
        description:
          "We run your entire hiring process, from sourcing to offer, as an extension of your team.",
      },
      {
        icon: Zap,
        title: "On-Demand RPO",
        description:
          "Recruitment support scaled up temporarily for hiring spikes, without a long-term commitment.",
      },
      {
        icon: Building2,
        title: "Enterprise RPO",
        description:
          "Ongoing recruitment partnership built for larger, sustained hiring volumes.",
      },
    ],
  },
  "Permanent Hiring & Executive Search": {
    heading: "Long-term hires and leadership roles, handled differently",
    description:
      "Everyday roles and senior leadership searches both get a matched approach, not the same generic process.",
    subCards: [
      {
        icon: UserSearch,
        title: "Permanent Hiring",
        description:
          "Full-time hiring for roles across functions, matched on skill and long-term fit.",
      },
      {
        icon: Search,
        title: "Executive Search",
        description:
          "Targeted search for leadership and senior roles that need a more discreet, focused process.",
      },
    ],
  },
  "IT & Tech Talent": {
    heading: "Technical hiring that understands the roles",
    description:
      "We source developers, data specialists, and cloud engineers with the right technical screening upfront.",
    subCards: [
      {
        icon: Code2,
        title: "Software Development Roles",
        description:
          "Engineers and developers across languages, frameworks, and experience levels.",
      },
      {
        icon: Workflow,
        title: "ServiceNow & Enterprise Platform Talent",
        description:
          "Specialists for ServiceNow, SAP, Salesforce, and similar enterprise platforms.",
      },
      {
        icon: Sparkles,
        title: "Data & AI Talent",
        description:
          "Data engineers, analysts, and AI/ML professionals for data-driven teams.",
      },
      {
        icon: Cloud,
        title: "DevOps & Cloud Talent",
        description:
          "Cloud and DevOps engineers experienced with modern infrastructure and deployment.",
      },
    ],
  },
  "HR Advisory": {
    heading: "The groundwork that makes hiring decisions safer",
    description:
      "Assessments, background checks, and salary benchmarks give you the full picture before you commit to a hire.",
    subCards: [
      {
        icon: ClipboardCheck,
        title: "Hiring Assessments",
        description:
          "Structured tests and evaluations to validate skills before an offer goes out.",
      },
      {
        icon: ShieldCheck,
        title: "Background Verification",
        description:
          "Employment, education, and reference checks completed before onboarding.",
      },
      {
        icon: BarChart3,
        title: "Compensation Benchmarking",
        description:
          "Market-rate salary data to help you make competitive, fair offers.",
      },
    ],
  },
  "Global Staffing": {
    heading: "Hiring across borders, done correctly",
    description:
      "We support US contract staffing and remote team building, with compliance handled at every step.",
    subCards: [
      {
        icon: Globe,
        title: "US Contract Staffing",
        description:
          "Contract hiring for US-based roles, managed with US compliance in mind.",
      },
      {
        icon: Network,
        title: "Remote Team Building",
        description:
          "Building distributed teams across locations without losing coordination.",
      },
      {
        icon: FileText,
        title: "Cross-Border Compliance Support",
        description:
          "Guidance on the legal and payroll requirements of hiring across borders.",
      },
    ],
  },
};

export default function AIPlatformHero() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const tabContent = TAB_CONTENT[activeTab];

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-10 sm:py-10 lg:px-16">
        {/* ---------- Heading ---------- */}
        <h2
          className="text-center tracking-tight text-black"
          style={{ fontSize: "43px", fontWeight: 400, lineHeight: "55px" }}
        >
          One talent team, every hiring need
        </h2>

        {/* ---------- Tabs ---------- */}
        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-b border-gray-200 pb-3 md:gap-x-8">
          {TABS.map((tab) => (
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
            <PrimaryCtaLink href="/talent/book-session" className="mt-6" color="#2935a3">
              Get Started
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
