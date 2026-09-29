export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  label: string;
  clientName: string;
  categoryLabel: string;
  title: string;
  summary: string;
  /** Homepage card copy — kept when inner-page headline differs from the Figma cards. */
  cardTitle?: string;
  cardSummary?: string;
  services: string[];
  imageSrc?: string;
  cardBg: string;
  peekColor: string;
  accentColor: string;
  ctaBg: string;
  ctaText: string;
  cardMetrics: CaseStudyMetric[];
  metrics: CaseStudyMetric[];
  challenge: string;
  approach: string[];
  results: string[];
  dataStatus?: string;
  quote?: {
    text: string;
    role: string;
  };
};

const FIGMA_CARD_METRICS: CaseStudyMetric[] = [
  { value: "+41%", label: "Increase in qualified enquiries" },
  { value: "+33%", label: "Increase in campaign engagement" },
  { value: "+27%", label: "Increase in product-page visits" },
];

export const MARKETING_CASE_STUDIES: CaseStudy[] = [
  {
    slug: "wegofin",
    label: "Case Study 01",
    clientName: "WegoFin",
    categoryLabel: "Fintech Go-To-Market & Brand Activation",
    title: "Driving SME adoption with a celebrity-backed digital banking campaign",
    summary:
      "FyerX combined celebrity-led brand campaigns, sales enablement, and landing pages to establish market trust for WegoFin's platform.",
    cardTitle: "Building a stronger growth engine for a payments platform",
    cardSummary:
      "FyerX combined website, performance creative, social media, and video to help WegoFin communicate its payment solutions with greater clarity and drive market engagement.",
    services: [
      "Demand Generation",
      "Influencer Campaign",
      "Sales Enablement",
      "Performance Marketing",
      "Landing Pages",
    ],
    imageSrc: "/marketingpageimages/Case Study 01.webp",
    cardBg: "#E6F6EA",
    peekColor: "#006660",
    accentColor: "#0A8A4A",
    ctaBg: "#006660",
    ctaText: "#FFFFFF",
    cardMetrics: FIGMA_CARD_METRICS,
    metrics: [
      { value: "120+", label: "Qualified SME demos" },
      { value: "35%", label: "Faster deal closure" },
      { value: "2", label: "A-list brand ambassadors" },
    ],
    challenge:
      "WeGoFin launched an innovative B2B banking platform but struggled to differentiate against established payment gateways. Sales lacked credible collateral to convince SME owners to switch their financial infrastructure.",
    approach: [
      "Developed a clear fintech positioning strategy simplifying complex API banking features.",
      "Executed a high-visibility campaign featuring Rashmika Mandanna and Shraddha Kapoor.",
      "Equipped sales with targeted B2B collateral and conversion-optimized landing pages.",
    ],
    results: [
      "Generated over 120 qualified SME product demos across target commercial accounts.",
      "Accelerated average deal closure time by 35% using focused sales collateral.",
      "Elevated brand credibility and digital campaign engagement significantly nationwide.",
    ],
  },
  {
    slug: "cinepebble",
    label: "Case Study 02",
    clientName: "Cinepebble",
    categoryLabel: "Digital Product & Social Platform Launch",
    title:
      "Bringing an entertainment networking platform from wireframes to market launch",
    summary:
      "FyerX engineered the complete brand identity, end-to-end UI/UX architecture across 45+ product screens, and go-to-market creative assets.",
    cardSummary:
      "FyerX engineered the complete brand identity, end-to-end UI/UX architecture across 45+ product screens, and go-to-market creative assets to accelerate creator signups during the official app rollout.",
    services: [
      "Brand Identity",
      "UI/UX Design",
      "Mobile App Design",
      "Product Launch",
      "Design Systems",
    ],
    imageSrc: "/marketingpageimages/Case Study 02.webp",
    cardBg: "#F8F1D8",
    peekColor: "#F8B104",
    accentColor: "#D97706",
    ctaBg: "#F8B104",
    ctaText: "#111111",
    cardMetrics: FIGMA_CARD_METRICS,
    metrics: [
      { value: "45+", label: "UI/UX screens built" },
      { value: "100%", label: "Unified design system" },
      { value: "+58%", label: "Onboarding completion rate" },
    ],
    challenge:
      "Cinepebble required a modern digital product identity and seamless mobile experience to connect film professionals and creators. The platform needed an intuitive architecture to drive creator onboarding before rollout.",
    approach: [
      "Designed complete visual guidelines, typography, and entertainment-focused design language.",
      "Architected end-to-end user flows and 45+ interactive mobile application screens.",
      "Created digital launch collateral and promotional teaser assets for community onboarding.",
    ],
    results: [
      "Delivered an intuitive 45+ screen mobile UI/UX system optimized for creator profiles.",
      "Unified digital brand identity across all touchpoints prior to public store release.",
      "Accelerated talent registrations through friction-free user onboarding and portfolio setups.",
    ],
  },
  {
    slug: "workdayz",
    label: "Case Study 03",
    clientName: "Workdayz",
    categoryLabel: "B2B Brand Consolidation & Go-To-Market",
    title:
      "Consolidating multi-vertical corporate workwear into a unified B2B brand",
    summary:
      "FyerX unified multiple apparel verticals into a cohesive brand identity system, delivering comprehensive guidelines and collateral.",
    cardSummary:
      "FyerX unified multiple apparel verticals into a cohesive brand identity system, delivering comprehensive digital guidelines and over 40 corporate sales collaterals to power targeted institutional outreach.",
    services: [
      "Brand Architecture",
      "B2B Positioning",
      "Sales Enablement",
      "Digital Guidelines",
      "Collaterals",
    ],
    imageSrc: "/marketingpageimages/Case Study 03.webp",
    cardBg: "#E4F4FB",
    peekColor: "#2A3594",
    accentColor: "#2A3594",
    ctaBg: "#2A3594",
    ctaText: "#FFFFFF",
    cardMetrics: FIGMA_CARD_METRICS,
    metrics: [
      { value: "6", label: "Sub-brand identities unified" },
      { value: "40+", label: "B2B sales assets created" },
      { value: "1", label: "Connected brand architecture" },
    ],
    challenge:
      "Saraogi operated multiple fragmented workwear sub-brands without a clear parent identity. Enterprise procurement heads struggled to understand the full catalogue scope, leading to disjointed pitches and lost sales.",
    approach: [
      "Consolidated six disparate apparel lines under the unified 'Workdayz' brand architecture.",
      "Standardized visual guidelines, typography, catalogue layouts, and presentation standards.",
      "Produced over 40 corporate sales decks, sample kits, and institutional brochures.",
    ],
    results: [
      "Unified six fragmented sub-brands into one cohesive, institutional B2B identity system.",
      "Equipped enterprise sales teams with 40+ standardized sales and presentation assets.",
      "Streamlined corporate procurement pitches, accelerating institutional client onboarding.",
    ],
  },
  {
    slug: "onroadz",
    label: "Case Study 04",
    clientName: "Onroadz",
    categoryLabel: "Multi-City Mobility & Search Acquisition",
    title:
      "Expanding rental market reach with programmatic local search architecture",
    summary:
      "FyerX deployed a multi-city local search and paid acquisition framework, ranking rental keywords to scale fleet utilization.",
    cardSummary:
      "FyerX deployed a multi-city local search and paid acquisition framework, ranking over 3,600 high-intent rental keywords to scale organic traffic to 40.6K monthly visits and support a 500+ vehicle fleet.",
    services: [
      "Local SEO",
      "Google Ads",
      "Organic Growth",
      "Performance Acquisition",
      "Landing Pages",
    ],
    imageSrc: "/marketingpageimages/Case Study 04.webp",
    cardBg: "#FDE8EE",
    peekColor: "#C40650",
    accentColor: "#C40650",
    ctaBg: "#C40650",
    ctaText: "#FFFFFF",
    cardMetrics: FIGMA_CARD_METRICS,
    metrics: [
      { value: "40.6K", label: "Monthly organic visits" },
      { value: "3.6K", label: "Ranking rental keywords" },
      { value: "500+", label: "Rental fleet size supported" },
    ],
    challenge:
      "Onroadz needed to scale self-drive car rental bookings across multiple cities while competing against heavily funded aggregators. The brand required dominant local search visibility without unsustainable ad spend.",
    approach: [
      "Engineered programmatic multi-city landing pages optimized for city-specific rental intent.",
      "Deployed targeted Google Search campaigns capturing urgent, same-day vehicle bookings.",
      "Implemented localized schema markup and Google Business Profile optimization across branches.",
    ],
    results: [
      "Scaled organic search traffic to 40.6K monthly visits across target operating regions.",
      "Ranked over 3,600 high-intent vehicle rental keywords on page one of Google.",
      "Delivered sustained booking volume to support an expanding fleet of over 500 vehicles.",
    ],
  },
  {
    slug: "sayyam",
    label: "Case Study 05",
    clientName: "Sayyam",
    categoryLabel: "Wealth Management & Organic Acquisition",
    title:
      "Scaling inbound wealth advisory leads through high-intent search visibility",
    summary:
      "FyerX mapped high-intent investor search queries, restructuring core service pages and technical SEO signals to capture competitive terms.",
    cardSummary:
      "FyerX mapped high-intent investor search queries, restructuring core service pages and technical SEO signals to capture competitive terms, securing 18 first-page rankings and 16 qualified investor enquiries.",
    services: [
      "Technical SEO",
      "Content Strategy",
      "Search Visibility",
      "Inbound Acquisition",
      "Local SEO",
    ],
    imageSrc: "/marketingpageimages/Case Study 05.webp",
    cardBg: "#EBE7FC",
    peekColor: "#6A4DF7",
    accentColor: "#6A4DF7",
    ctaBg: "#6A4DF7",
    ctaText: "#FFFFFF",
    cardMetrics: FIGMA_CARD_METRICS,
    metrics: [
      { value: "18", label: "First-page ranking terms" },
      { value: "+62%", label: "Qualified organic growth" },
      { value: "16", label: "Direct investor enquiries" },
    ],
    challenge:
      "Sayyam Investments possessed strong advisory credentials but relied heavily on traditional referrals. High-net-worth investors could not discover their specialized wealth management services through non-branded organic search.",
    approach: [
      "Mapped high-intent investor search queries and comparative wealth management terms.",
      "Restructured core service pages, technical site architecture, and localized SEO signals.",
      "Published expert financial content addressing investor due diligence and wealth planning.",
    ],
    results: [
      "Captured 18 priority first-page search rankings for competitive wealth management keywords.",
      "Increased qualified organic sessions by 62% across target investor demographics.",
      "Generated 16 high-value sales-influenced investor advisory enquiries within six months.",
    ],
  },
  {
    slug: "adro",
    label: "Case Study 06",
    clientName: "Adro",
    categoryLabel: "E-commerce Performance & Retention",
    title:
      "Restructuring paid acquisition to drive profitable direct-to-consumer scale",
    summary:
      "FyerX restructured Meta and Google ad funnels alongside landing pages, generating ₹8.32L in attributed revenue across 860 orders.",
    cardSummary:
      "FyerX restructured cross-channel Meta and Google ad funnels alongside conversion landing pages, generating ₹8.32L in attributed revenue across 860 orders while lifting repeat purchases to 9%.",
    services: [
      "Performance Marketing",
      "Paid Social",
      "Google Ads",
      "CRO & Landing Pages",
      "Retention Marketing",
    ],
    imageSrc: "/marketingpageimages/Case Study 06.webp",
    cardBg: "#FBE8E0",
    peekColor: "#E44A18",
    accentColor: "#E44A18",
    ctaBg: "#E44A18",
    ctaText: "#FFFFFF",
    cardMetrics: FIGMA_CARD_METRICS,
    metrics: [
      { value: "₹8.32L", label: "Attributed revenue generated" },
      { value: "860", label: "Direct store orders delivered" },
      { value: "9%", label: "Returning customer rate" },
    ],
    challenge:
      "Adro faced escalating customer acquisition costs and low repeat purchase rates across direct-to-consumer channels. Inefficient ad spend and generic landing pages failed to convert seasonal fashion shoppers profitably.",
    approach: [
      "Restructured Meta and Google Ads account architecture around high-intent apparel SKUs.",
      "Deployed high-converting landing pages tailored to specific seasonal ad creative.",
      "Built post-purchase email and WhatsApp retention workflows to stimulate re-orders.",
    ],
    results: [
      "Generated ₹8.32L in verified store revenue across 860 profitable direct orders.",
      "Achieved 6.45M targeted brand impressions while maintaining strict ROAS efficiency.",
      "Lifted returning customer rate to 9% through automated lifecycle re-engagement.",
    ],
  },
  {
    slug: "kaypee-space",
    label: "Case Study 07",
    clientName: "Kaypee Space",
    categoryLabel: "Brand, Website & Lead Generation",
    title: "Building a stronger demand engine for premium workspaces",
    summary:
      "FyerX combined brand, website, lead-generation, social, and campaign work to support Kaypee Space's premium workspace proposition.",
    services: [
      "Brand Identity",
      "Website Design",
      "Lead Generation",
      "Social Media",
      "Collaterals",
    ],
    cardBg: "#EEF4FA",
    peekColor: "#163E6B",
    accentColor: "#163E6B",
    ctaBg: "#163E6B",
    ctaText: "#FFFFFF",
    cardMetrics: [
      { value: "+46%", label: "Increase in qualified enquiries" },
      { value: "+31%", label: "Increase in site-to-lead rate" },
      { value: "-22%", label: "Reduction in cost per enquiry" },
    ],
    metrics: [
      { value: "+46%", label: "Increase in qualified enquiries" },
      { value: "+31%", label: "Increase in site-to-lead rate" },
      { value: "-22%", label: "Reduction in cost per enquiry" },
    ],
    challenge:
      "Kaypee Space needed a premium brand and digital presence that matched its workspace offering. Lead generation, website experience, and campaign activity had to work together to attract the right tenants and enquiries.",
    approach: [
      "Refined brand identity and collaterals to reflect a premium workspace proposition.",
      "Redesigned the website to improve clarity, credibility, and lead capture.",
      "Ran lead-generation and social campaigns aimed at qualified workspace demand.",
    ],
    results: [
      "Qualified enquiries increased by 46% as brand, site, and campaigns aligned around the premium offer.",
      "Site-to-lead conversion improved by 31% with clearer journeys and stronger conversion paths.",
      "Cost per enquiry dropped 22% through better targeting and a more efficient acquisition funnel.",
    ],
  },
];

export const MARKETING_HOME_CASE_STUDIES = MARKETING_CASE_STUDIES.filter(
  (study): study is CaseStudy & { imageSrc: string } => Boolean(study.imageSrc)
);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return MARKETING_CASE_STUDIES.find((study) => study.slug === slug);
}
