"use client";

import { useState } from "react";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import type { LucideIcon } from "lucide-react";
import {
  Rocket,
  Users,
  ClipboardCheck,
  Target,
  Building2,
  UserSearch,
  Mail,
  CalendarDays,
  Search,
  MessageSquareText,
  Sparkles,
  MapPin,
  FileText,
  Wand2,
  Bot,
  MessageCircle,
  Share2,
  MessagesSquare,
  Megaphone,
  CalendarClock,
  BookOpen,
  Video,
  Film,
  MousePointerClick,
  RefreshCw,
  BarChart3,
  Palette,
  Compass,
  LayoutTemplate,
  Code2,
  Workflow,
  Database,
} from "lucide-react";

const TABS = [
  "Marketing Strategy & Consulting",
  "Demand & Lead Generation",
  "Search & AI Visibility",
  "AI Marketing",
  "Social Media Marketing",
  "Content & Creative Production",
  "Performance Marketing",
  "Branding & Design",
  "Marketing Automation",
];

// Only 6 existing illustrations — cycle them across the 9 tabs.
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
  "Marketing Strategy & Consulting": {
    heading: "A clear starting point before you spend on execution",
    description:
      "We map your market, buyers, and positioning first, so campaigns start from a clear plan instead of guesswork.",
    subCards: [
      {
        icon: Rocket,
        title: "Go-to-Market Strategy",
        description:
          "Plans for launching a product, service, or new market entry with clear positioning and sequencing.",
      },
      {
        icon: Users,
        title: "ICP & Buyer Persona Definition",
        description:
          "Defines who you should be selling to, based on account data rather than guesswork.",
      },
      {
        icon: ClipboardCheck,
        title: "Marketing Audits",
        description:
          "A review of current marketing efforts to identify gaps, waste, and quick wins.",
      },
      {
        icon: Target,
        title: "Competitive Positioning",
        description:
          "Maps where you stand against competitors and sharpens your message accordingly.",
      },
    ],
  },
  "Demand & Lead Generation": {
    heading: "Pipeline from accounts worth pursuing",
    description:
      "We focus outreach on the accounts and buyers most likely to convert, rather than chasing volume.",
    subCards: [
      {
        icon: Building2,
        title: "Account-Based Marketing",
        description:
          "Targets specific high-value accounts with coordinated outreach across channels.",
      },
      {
        icon: UserSearch,
        title: "LinkedIn Lead Generation",
        description: "Finds and engages decision-makers directly on LinkedIn.",
      },
      {
        icon: Mail,
        title: "Outbound & Cold Outreach",
        description:
          "Structured email and call outreach to open conversations with new prospects.",
      },
      {
        icon: CalendarDays,
        title: "Webinar & Event Marketing",
        description:
          "Plans and promotes webinars and events that generate qualified leads.",
      },
    ],
  },
  "Search & AI Visibility": {
    heading: "Found by buyers already searching",
    description:
      "We help you show up in search results and AI-generated answers, right when buyers are looking for a solution.",
    subCards: [
      {
        icon: Search,
        title: "SEO",
        description: "Improves organic search rankings for terms your buyers are searching.",
      },
      {
        icon: MessageSquareText,
        title: "AEO",
        description: "Optimises content to appear in AI-generated answers and summaries.",
      },
      {
        icon: Sparkles,
        title: "GEO",
        description: "Improves visibility within generative AI search results and assistants.",
      },
      {
        icon: MapPin,
        title: "Local SEO",
        description: "Improves visibility for location-based searches relevant to your business.",
      },
    ],
  },
  "AI Marketing": {
    heading: "Faster output, still reviewed by people",
    description:
      "AI speeds up content and ad creative work, and our team checks everything before it goes live.",
    subCards: [
      {
        icon: FileText,
        title: "AI-Powered Content Generation",
        description: "Uses AI to draft content faster, reviewed by our team before publishing.",
      },
      {
        icon: Wand2,
        title: "AI Ad Creative & Personalization",
        description: "Generates and tailors ad creative variations using AI tools.",
      },
      {
        icon: Bot,
        title: "Marketing Automation Agents",
        description: "AI-driven agents that handle repetitive marketing tasks automatically.",
      },
      {
        icon: MessageCircle,
        title: "Conversational AI",
        description: "Chat-based tools that engage website visitors and qualify leads.",
      },
    ],
  },
  "Social Media Marketing": {
    heading: "A presence that stays consistent",
    description:
      "We keep your social channels active and on-brand, so buyers see a business that's actually paying attention.",
    subCards: [
      {
        icon: Share2,
        title: "Social Media Strategy & Management",
        description: "Plans and manages your ongoing social media presence.",
      },
      {
        icon: MessagesSquare,
        title: "Community Management",
        description: "Responds to comments, messages, and community engagement daily.",
      },
      {
        icon: Megaphone,
        title: "Paid Social Campaigns",
        description: "Runs paid campaigns across social platforms to reach target audiences.",
      },
    ],
  },
  "Content & Creative Production": {
    heading: "Content that holds up over a longer decision",
    description:
      "We produce the whitepapers, videos, and case studies that support a considered B2B buying process.",
    subCards: [
      {
        icon: CalendarClock,
        title: "Content Strategy & Editorial Calendars",
        description: "Plans what content to publish, where, and on what schedule.",
      },
      {
        icon: BookOpen,
        title: "Thought Leadership & Whitepapers",
        description: "Produces in-depth content that builds credibility with B2B buyers.",
      },
      {
        icon: Video,
        title: "Video Production & Editing",
        description: "Produces and edits video content for campaigns and brand use.",
      },
      {
        icon: Film,
        title: "Motion Graphics & Animation",
        description: "Creates animated visuals for ads, explainers, and presentations.",
      },
    ],
  },
  "Performance Marketing": {
    heading: "Paid campaigns measured the right way",
    description:
      "We run paid search and social, and track results against pipeline and revenue, not just cost-per-click.",
    subCards: [
      {
        icon: MousePointerClick,
        title: "Paid Search",
        description: "Manages search ad campaigns to capture high-intent buyer traffic.",
      },
      {
        icon: Share2,
        title: "Paid Social",
        description: "Manages paid campaigns across social platforms tied to specific goals.",
      },
      {
        icon: RefreshCw,
        title: "Retargeting & Conversion Optimization",
        description: "Re-engages past visitors and improves how well pages convert.",
      },
      {
        icon: BarChart3,
        title: "Marketing Analytics & ROI Tracking",
        description: "Tracks campaign data and ties it back to business results.",
      },
    ],
  },
  "Branding & Design": {
    heading: "A brand that holds credibility in bigger deals",
    description:
      "We build the identity, positioning, and website that support you in front of serious enterprise buyers.",
    subCards: [
      {
        icon: Palette,
        title: "Brand Identity & Guidelines",
        description: "Builds logos, colours, and usage rules for consistent brand presentation.",
      },
      {
        icon: Compass,
        title: "Brand Strategy & Positioning",
        description: "Defines how your brand should be perceived and communicated.",
      },
      {
        icon: LayoutTemplate,
        title: "UI/UX Design",
        description: "Designs interfaces and user flows for digital products and sites.",
      },
      {
        icon: Code2,
        title: "Website Design & Development",
        description: "Builds and maintains websites that support your marketing goals.",
      },
    ],
  },
  "Marketing Automation": {
    heading: "Leads that keep moving without manual follow-up",
    description:
      "We set up automation and CRM syncing so leads get nurtured and routed on their own.",
    subCards: [
      {
        icon: Workflow,
        title: "Marketing Automation",
        description: "Sets up automated workflows that nurture and route leads.",
      },
      {
        icon: Database,
        title: "CRM Integration",
        description: "Connects your marketing tools with your CRM so data stays in sync.",
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
          className="text-center"
          style={{
            fontSize: "46px",
            fontWeight: 500,
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            color: "var(--ink)",
          }}
        >
          One B2B marketing team, every capability
        </h2>

        {/* ---------- Tabs ---------- */}
        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-b border-gray-200 pb-3 md:gap-x-8">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 whitespace-nowrap rounded-full px-3 py-1 text-[14px] transition-colors ${
                activeTab === tab
                  ? "bg-[#FFC900] font-semibold text-black"
                  : "font-medium text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
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
            <PrimaryCtaLink href="/contact" className="mt-6 text-black!" color="#FFC900">
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
