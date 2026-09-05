"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
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

const FOUNDATION_TABS = [
  "Marketing Strategy & Consulting",
  "Branding & Design",
  "Content & Creative Production",
  "Marketing Automation",
] as const;

const DEMAND_TABS = [
  "Demand & Lead Generation",
  "Performance Marketing",
  "Search & AI Visibility",
  "AI Marketing",
  "Social Media Marketing",
] as const;

const ALL_TABS = [...FOUNDATION_TABS, ...DEMAND_TABS];

const PANEL_GRADIENTS = [
  "from-[#FFC900] to-[#FDE68A]",
  "from-[#F59E0B] to-[#FCD34D]",
  "from-[#2563EB] to-[#60A5FA]",
  "from-[#EAB308] to-[#FDE047]",
  "from-[#EA580C] to-[#FB923C]",
  "from-[#7C3AED] to-[#C084FC]",
];

const TAB_IMAGES: Record<string, string> = Object.fromEntries(
  ALL_TABS.map((tab, i) => [tab, `/avatar/ai${(i % 6) + 1}.webp`])
);

const TAB_PANEL_BG: Record<string, string> = Object.fromEntries(
  ALL_TABS.map((tab, i) => [tab, PANEL_GRADIENTS[i % PANEL_GRADIENTS.length]])
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
    heading: "Decide the direction before scaling the activity.",
    description:
      "We clarify where to play, who to prioritise, what to say, and what should happen first.",
    subCards: [
      {
        icon: Rocket,
        title: "Go-to-Market Strategy",
        description:
          "Launch plans with positioning, audiences, channels, and sequencing.",
      },
      {
        icon: Users,
        title: "ICP & Buyer Persona Definition",
        description:
          "Practical audience profiles for sharper targeting and messaging.",
      },
      {
        icon: ClipboardCheck,
        title: "Marketing Audits",
        description:
          "An honest view of what is working, underperforming, or missing.",
      },
      {
        icon: Target,
        title: "Competitive Positioning",
        description:
          "A clearer space to own in a crowded market.",
      },
    ],
  },
  "Demand & Lead Generation": {
    heading: "Create conversations worth having.",
    description:
      "We connect targeted outreach, offers, nurture, events, and reporting so lead generation is more deliberate and measurable.",
    subCards: [
      {
        icon: Building2,
        title: "Account-Based Marketing",
        description:
          "Coordinated programmes for priority accounts.",
      },
      {
        icon: UserSearch,
        title: "LinkedIn Lead Generation",
        description: "Decision-maker outreach and relationship-building.",
      },
      {
        icon: Mail,
        title: "Outbound & Cold Outreach",
        description:
          "Structured email and multichannel prospecting.",
      },
      {
        icon: BarChart3,
        title: "Revenue Attribution & Pipeline Reporting",
        description: "Visibility from activity to opportunity.",
      },
    ],
  },
  "Search & AI Visibility": {
    heading: "Be useful where people look for answers.",
    description:
      "We improve discoverability across traditional search, local intent, and emerging AI-led discovery journeys.",
    subCards: [
      {
        icon: Search,
        title: "SEO",
        description: "Technical, on-page, and content-led organic growth.",
      },
      {
        icon: MessageSquareText,
        title: "AEO",
        description: "Content structured for answer-led search experiences.",
      },
      {
        icon: Sparkles,
        title: "GEO",
        description: "Visibility in generative search and AI responses.",
      },
      {
        icon: MapPin,
        title: "Local SEO",
        description: "Stronger presence for location-based discovery.",
      },
    ],
  },
  "AI Marketing": {
    heading: "Use AI to increase speed without losing the brand.",
    description:
      "We build human-reviewed AI workflows for content, creative variation, personalisation, and conversations.",
    subCards: [
      {
        icon: FileText,
        title: "AI-Powered Content Generation",
        description: "Faster first drafts and production support.",
      },
      {
        icon: Wand2,
        title: "AI Ad Creative & Personalization",
        description: "More relevant creative variants at scale.",
      },
      {
        icon: Bot,
        title: "Marketing Automation Agents",
        description: "Repeatable tasks handled with guardrails.",
      },
      {
        icon: MessageCircle,
        title: "Conversational AI",
        description: "Website conversations that guide and qualify visitors.",
      },
    ],
  },
  "Social Media Marketing": {
    heading: "Stay visible, relevant, and responsive.",
    description:
      "We shape the channel plan, content rhythm, engagement, and paid support around how your audience uses social.",
    subCards: [
      {
        icon: Share2,
        title: "Social Media Strategy & Management",
        description: "Channel direction and ongoing execution.",
      },
      {
        icon: MessagesSquare,
        title: "Community Management",
        description: "Timely responses and active audience care.",
      },
      {
        icon: Megaphone,
        title: "Paid Social Campaigns",
        description: "Targeted distribution tied to a clear objective.",
      },
    ],
  },
  "Content & Creative Production": {
    heading: "Make the message easier to understand and remember.",
    description:
      "We plan and produce the written, visual, and video assets that carry your brand and campaigns forward.",
    subCards: [
      {
        icon: CalendarClock,
        title: "Content Strategy & Editorial Calendars",
        description: "A purposeful publishing rhythm.",
      },
      {
        icon: BookOpen,
        title: "Thought Leadership & Whitepapers",
        description: "Deeper assets that build authority.",
      },
      {
        icon: Video,
        title: "Video Production & Editing",
        description: "Stories, explainers, campaigns, and edits.",
      },
      {
        icon: Film,
        title: "Motion Graphics & Animation",
        description: "Visual clarity for complex ideas.",
      },
    ],
  },
  "Performance Marketing": {
    heading: "Turn media spend into learning and action.",
    description:
      "We manage paid acquisition and landing-page journeys with continuous testing, optimisation, and accountable measurement.",
    subCards: [
      {
        icon: MousePointerClick,
        title: "Paid Search",
        description: "Capture high-intent demand.",
      },
      {
        icon: Share2,
        title: "Paid Social",
        description: "Create and convert demand with targeted media.",
      },
      {
        icon: LayoutTemplate,
        title: "Landing Page Design & Optimization",
        description: "Clearer journeys from click to action.",
      },
      {
        icon: BarChart3,
        title: "Marketing Analytics & ROI Tracking",
        description: "Make performance decisions with confidence.",
      },
    ],
  },
  "Branding & Design": {
    heading: "Make your business look as clear as it sounds.",
    description:
      "We build the strategy, identity, digital experience, and website that make a stronger first and lasting impression.",
    subCards: [
      {
        icon: Palette,
        title: "Brand Identity & Guidelines",
        description: "A usable visual system.",
      },
      {
        icon: Compass,
        title: "Brand Strategy & Positioning",
        description: "The story and space your brand should own.",
      },
      {
        icon: LayoutTemplate,
        title: "UI/UX Design",
        description: "Journeys that are intuitive and purposeful.",
      },
      {
        icon: Code2,
        title: "Website Design & Development",
        description: "High-performing digital foundations.",
      },
    ],
  },
  "Marketing Automation": {
    heading: "Make follow-up and data flow reliably.",
    description:
      "We connect journeys, triggers, and CRM data so valuable leads do not depend on manual chasing.",
    subCards: [
      {
        icon: Workflow,
        title: "Marketing Automation",
        description: "Workflows for nurture, routing, and follow-up.",
      },
      {
        icon: Database,
        title: "CRM Integration",
        description: "Connected systems and cleaner marketing data.",
      },
    ],
  },
};

function AccordionChevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 text-current transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CapabilityPanel({ tab }: { tab: string }) {
  const tabContent = TAB_CONTENT[tab];

  return (
    <div>
      <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[522px_1fr]">
        <div className="flex flex-col justify-between rounded-[24px] border border-gray-200 bg-white p-6 sm:p-7">
          <div>
            <h3 className="text-[20px] font-bold leading-snug text-black sm:text-[22px]">
              {tabContent.heading}
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-gray-600">
              {tabContent.description}
            </p>
          </div>
          <PrimaryCtaLink href="/contact#marketing" className="mt-6 text-black!" color="#FFC900">
            Discuss This Service
          </PrimaryCtaLink>
        </div>

        <div
          className={`relative overflow-hidden rounded-[24px] bg-gradient-to-br p-3 ${TAB_PANEL_BG[tab]}`}
        >
          <div className="relative h-full min-h-[220px] overflow-hidden rounded-[18px] sm:min-h-[420px] lg:min-h-0">
            <img
              src={TAB_IMAGES[tab]}
              alt={`${tab} illustration`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tabContent.subCards.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF8E1]">
              <Icon className="h-[18px] w-[18px] text-[#B8860B]" strokeWidth={1.75} />
            </div>
            <h4 className="mt-3 text-[14px] font-bold text-black">{title}</h4>
            <p className="mt-1 text-[12.5px] leading-relaxed text-gray-500">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MarketingCapabilityBlock({
  heading,
  tabs,
}: {
  heading: ReactNode;
  tabs: readonly string[];
}) {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [openTabs, setOpenTabs] = useState<Set<string>>(() => new Set([tabs[0]]));
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const pendingScroll = useRef<string | null>(null);

  const toggleAccordion = (tab: string) => {
    const willOpen = !openTabs.has(tab);
    setOpenTabs((prev) => {
      const next = new Set(prev);
      if (next.has(tab)) next.delete(tab);
      else next.add(tab);
      return next;
    });
    setActiveTab(tab);
    if (willOpen) pendingScroll.current = tab;
  };

  useEffect(() => {
    const tab = pendingScroll.current;
    if (!tab) return;
    pendingScroll.current = null;
    itemRefs.current[tab]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [openTabs]);

  return (
    <section className="mx-auto w-full max-w-[1400px]">
      <h2 className="section-title-lg text-center">{heading}</h2>

      {/* Mobile: first open by default; each click toggles independently */}
      <div className="mt-6 flex flex-col gap-2 sm:hidden">
        {tabs.map((tab) => {
          const open = openTabs.has(tab);
          return (
            <div
              key={tab}
              ref={(el) => {
                itemRefs.current[tab] = el;
              }}
              className="flex scroll-mt-[72px] flex-col gap-2"
            >
              <button
                type="button"
                aria-expanded={open}
                onClick={() => toggleAccordion(tab)}
                className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-[14px] transition-colors ${
                  open
                    ? "border-[#FFC900] bg-[#FFC900] font-semibold text-black"
                    : "border-gray-200 bg-white font-medium text-[#52525b]"
                }`}
              >
                <span>{tab}</span>
                <AccordionChevron open={open} />
              </button>
              {open ? <CapabilityPanel tab={tab} /> : null}
            </div>
          );
        })}
      </div>

      {/* Desktop: pill tabs with shared panel below */}
      <nav className="mt-6 hidden items-center justify-center gap-x-4 gap-y-2 border-b border-gray-200 pb-3 sm:flex sm:flex-wrap sm:gap-x-6 md:gap-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap rounded-full px-3 py-1 text-[14px] transition-colors ${
              activeTab === tab
                ? "bg-[#FFC900] font-semibold text-black"
                : "font-medium text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="mt-6 hidden sm:block">
        <CapabilityPanel tab={activeTab} />
      </div>
    </section>
  );
}

export default function AIPlatformHero() {
  return (
    <>
      <MarketingCapabilityBlock
        heading={
          <>
            Marketing Foundations That Build{" "}
            <span className="marketing-gradient-text">Brands</span>
          </>
        }
        tabs={FOUNDATION_TABS}
      />
      <MarketingCapabilityBlock
        heading={
          <>
            Marketing Built to{" "}
            <span className="marketing-gradient-text">Generate Demand</span>
          </>
        }
        tabs={DEMAND_TABS}
      />
    </>
  );
}
