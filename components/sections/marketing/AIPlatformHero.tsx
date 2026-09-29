"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { PublicImage } from "@/components/ui/PublicImage";

const FOUNDATIONS_ICON_DIR = "/Marketing Foundations that build brands";
const DEMAND_ICON_DIR = "/Marketing Built to Generate Demand";

const FOUNDATION_TABS = [
  "Marketing Strategy & Consulting",
  "Brand & Digital Experience",
  "AI Automation",
] as const;

const DEMAND_TABS = [
  "Demand & Lead Generation",
  "Performance Marketing",
  "Search & AI Visibility",
  "AI Marketing",
] as const;

const TAB_IMAGES: Record<string, string> = {
  "Marketing Strategy & Consulting":
    "/marketingpageimages/Marketing Strategy & Consulting.webp",
  "Brand & Digital Experience": "/marketingpageimages/Branding & Design.webp",
  "AI Automation": "/marketingpageimages/AI Automation.webp",
  "Demand & Lead Generation": "/marketingpageimages/Demand & Lead Generation.webp",
  "Performance Marketing": "/marketingpageimages/Performance Marketing.webp",
  "Search & AI Visibility": "/marketingpageimages/Search & AI Visibility.webp",
  "AI Marketing": "/marketingpageimages/AI Marketing.webp",
};

type SubCard = {
  iconSrc: string;
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
        iconSrc: `${FOUNDATIONS_ICON_DIR}/Marketing Strategy Box Icon.webp`,
        title: "Go-to-Market Strategy",
        description:
          "Launch plans with positioning, audiences, channels, and sequencing.",
      },
      {
        iconSrc: `${FOUNDATIONS_ICON_DIR}/Marketing Strategy Box Icon-1.webp`,
        title: "ICP & Buyer Persona Definition",
        description:
          "Practical audience profiles for sharper targeting and messaging.",
      },
      {
        iconSrc: `${FOUNDATIONS_ICON_DIR}/Marketing Strategy Box Icon-2.webp`,
        title: "Marketing Audits",
        description:
          "An honest view of what is working, underperforming, or missing.",
      },
      {
        iconSrc: `${FOUNDATIONS_ICON_DIR}/Marketing Strategy Box Icon-3.webp`,
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
        iconSrc: `${DEMAND_ICON_DIR}/Demand & Lead Icon.webp`,
        title: "Account-Based Marketing",
        description:
          "Coordinated programmes for priority accounts.",
      },
      {
        iconSrc: `${DEMAND_ICON_DIR}/Demand & Lead Icon-1.webp`,
        title: "LinkedIn Lead Generation",
        description: "Decision-maker outreach and relationship-building.",
      },
      {
        iconSrc: `${DEMAND_ICON_DIR}/Demand & Lead Icon-2.webp`,
        title: "Outbound & Cold Outreach",
        description:
          "Structured email and multichannel prospecting.",
      },
      {
        iconSrc: `${DEMAND_ICON_DIR}/Demand & Lead Icon-3.webp`,
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
        iconSrc: `${DEMAND_ICON_DIR}/Search & AI Visibility Icon.webp`,
        title: "SEO",
        description: "Technical, on-page, and content-led organic growth.",
      },
      {
        iconSrc: `${DEMAND_ICON_DIR}/Search & AI Visibility Icon-1.webp`,
        title: "AEO",
        description: "Content structured for answer-led search experiences.",
      },
      {
        iconSrc: `${DEMAND_ICON_DIR}/Search & AI Visibility Icon-2.webp`,
        title: "GEO",
        description: "Visibility in generative search and AI responses.",
      },
      {
        iconSrc: `${DEMAND_ICON_DIR}/Search & AI Visibility Icon-3.webp`,
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
        iconSrc: `${DEMAND_ICON_DIR}/AI Marketing Icon.webp`,
        title: "AI-Powered Content Generation",
        description: "Faster first drafts and production support.",
      },
      {
        iconSrc: `${DEMAND_ICON_DIR}/AI Marketing Icon-1.webp`,
        title: "AI Ad Creative & Personalization",
        description: "More relevant creative variants at scale.",
      },
      {
        iconSrc: `${DEMAND_ICON_DIR}/AI Marketing Icon-2.webp`,
        title: "Marketing Automation Agents",
        description: "Repeatable tasks handled with guardrails.",
      },
      {
        iconSrc: `${DEMAND_ICON_DIR}/AI Marketing Icon-3.webp`,
        title: "Conversational AI",
        description: "Website conversations that guide and qualify visitors.",
      },
    ],
  },
  "Performance Marketing": {
    heading: "Turn media spend into learning and action.",
    description:
      "We manage paid acquisition and landing-page journeys with continuous testing, optimisation, and accountable measurement.",
    subCards: [
      {
        iconSrc: `${DEMAND_ICON_DIR}/Performance Marketing Icon.webp`,
        title: "Paid Search",
        description: "Capture high-intent demand.",
      },
      {
        iconSrc: `${DEMAND_ICON_DIR}/Performance Marketing Icon-1.webp`,
        title: "Paid Social",
        description: "Create and convert demand with targeted media.",
      },
      {
        iconSrc: `${DEMAND_ICON_DIR}/Performance Marketing Icon-2.webp`,
        title: "Landing Page Design & Optimization",
        description: "Clearer journeys from click to action.",
      },
      {
        iconSrc: `${DEMAND_ICON_DIR}/Performance Marketing Icon-3.webp`,
        title: "Marketing Analytics & ROI Tracking",
        description: "Make performance decisions with confidence.",
      },
    ],
  },
  "Brand & Digital Experience": {
    heading: "Make your business look as clear as it sounds.",
    description:
      "We build the strategy, identity, digital experience, and website that make a stronger first and lasting impression.",
    subCards: [
      {
        iconSrc: `${FOUNDATIONS_ICON_DIR}/Branding & Design Icon.webp`,
        title: "Brand Identity & Guidelines",
        description: "A usable visual system.",
      },
      {
        iconSrc: `${FOUNDATIONS_ICON_DIR}/Branding & Design Icon-1.webp`,
        title: "Brand Strategy & Positioning",
        description: "The story and space your brand should own.",
      },
      {
        iconSrc: `${FOUNDATIONS_ICON_DIR}/Branding & Design Icon-2.webp`,
        title: "UI/UX Design",
        description: "Journeys that are intuitive and purposeful.",
      },
      {
        iconSrc: `${FOUNDATIONS_ICON_DIR}/Branding & Design Icon-3.webp`,
        title: "Website Design & Development",
        description: "High-performing digital foundations.",
      },
    ],
  },
  "AI Automation": {
    heading: "Make follow-up and data flow reliably.",
    description:
      "We connect journeys, triggers, and CRM data so valuable leads do not depend on manual chasing.",
    subCards: [
      {
        iconSrc: `${FOUNDATIONS_ICON_DIR}/Marketing Automation Icon.webp`,
        title: "Marketing Automation",
        description: "Workflows for nurture, routing, and follow-up.",
      },
      {
        iconSrc: `${FOUNDATIONS_ICON_DIR}/Marketing Automation Icon-1.webp`,
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
      <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-[minmax(0,522px)_minmax(0,1fr)]">
        <div className="flex h-full flex-col justify-between rounded-[24px] border border-gray-200 bg-white p-6 sm:p-7">
          <div>
            <h3 className="text-[20px] font-bold leading-snug text-black sm:text-[22px]">
              {tabContent.heading}
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-gray-600">
              {tabContent.description}
            </p>
          </div>
          <PrimaryCtaLink
            href="/contact#marketing"
            variant="nav"
            color="#FFD54A"
            textColor="#111111"
            className="mt-6 h-auto gap-2.5 text-[15px] font-semibold hover:translate-y-0 hover:shadow-none hover:brightness-100"
            style={{
              padding: "0.9rem 1.9rem",
              border: "2px solid #F0B429",
              boxShadow: "0 8px 22px rgba(232, 176, 35, 0.22)",
            }}
          >
            Discuss This Service
          </PrimaryCtaLink>
        </div>

        <div className="overflow-hidden rounded-[24px]">
          <PublicImage
            src={TAB_IMAGES[tab]}
            alt={`${tab} illustration`}
            width={3200}
            height={1720}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tabContent.subCards.map(({ iconSrc, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
          >
            <PublicImage
              src={iconSrc}
              alt=""
              width={160}
              height={160}
              className="h-10 w-10 rounded-full object-cover"
            />
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
  const pausedRef = useRef(false);
  const stoppedRef = useRef(false);

  const selectTab = (tab: string, fromUser = false) => {
    if (fromUser) stoppedRef.current = true;
    setActiveTab(tab);
  };

  const toggleAccordion = (tab: string) => {
    stoppedRef.current = true;
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

  useEffect(() => {
    const id = window.setInterval(() => {
      if (pausedRef.current || stoppedRef.current) return;
      setActiveTab((current) => {
        const i = tabs.indexOf(current);
        return tabs[(i + 1) % tabs.length];
      });
    }, 5000);
    return () => window.clearInterval(id);
  }, [tabs]);

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

      {/* Desktop: outlined active pill + underline on a hairline bar */}
      <nav
        className="relative mt-8 hidden sm:block"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
      >
        <div className="flex items-end justify-center gap-8 md:gap-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => selectTab(tab, true)}
                className="relative flex flex-col items-center px-1 pb-0"
              >
                <span
                  className={`mb-3 whitespace-nowrap text-[14px] leading-none transition-colors ${
                    isActive
                      ? "rounded-full border-[1.5px] border-[#F5A623] px-5 py-[10px] font-medium text-[#F5A623]"
                      : "px-2 py-[10px] font-medium text-[#9CA3AF] hover:text-[#6B7280]"
                  }`}
                >
                  {tab}
                </span>
                <span
                  className={`absolute inset-x-0 bottom-0 z-[1] h-[3px] rounded-full ${
                    isActive ? "bg-[#F5A623]" : "bg-transparent"
                  }`}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-[#E5E7EB]" aria-hidden="true" />
      </nav>

      <div
        className="mt-6 hidden sm:block"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
      >
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
