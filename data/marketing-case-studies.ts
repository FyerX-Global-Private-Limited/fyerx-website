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
  services: string[];
  imageSrc?: string;
  cardBg: string;
  peekColor: string;
  accentColor: string;
  ctaBg: string;
  ctaText: string;
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

export const MARKETING_CASE_STUDIES: CaseStudy[] = [
  {
    slug: "wegofin",
    label: "Case Study 01",
    clientName: "WegoFin",
    categoryLabel: "Fintech Go-To-Market & Brand Activation",
    title: "Launching a celebrity-backed B2B banking campaign",
    summary:
      "FyerX developed WegoFin’s B2B banking positioning and supported a celebrity-led campaign with sales collateral and landing pages.",
    cardTitle: "Building a stronger growth engine for a payments platform",
    services: [
      "Brand Positioning",
      "Influencer Campaign",
      "Sales Enablement",
      "Landing Pages",
    ],
    imageSrc: "/marketingpageimages/Case Study 01.webp",
    cardBg: "#E6F6EA",
    peekColor: "#006660",
    accentColor: "#0A8A4A",
    ctaBg: "#006660",
    ctaText: "#FFFFFF",
    metrics: [
      { value: "2", label: "Celebrity ambassadors" },
      { value: "B2B", label: "Sales collateral" },
      { value: "Campaign", label: "Landing pages" },
    ],
    challenge:
      "WegoFin needed to distinguish its AI-powered B2B banking platform from established payment gateways and give its sales team clearer material for conversations with SMEs.",
    approach: [
      "Clarified the positioning and messaging for the B2B banking platform.",
      "Developed a campaign featuring Rashmika Mandanna and Shraddha Kapoor.",
      "Supported the campaign with targeted sales collateral and optimised landing pages.",
    ],
    results: [
      "The campaign featured two celebrity ambassadors.",
      "The sales team received material tailored to conversations with B2B prospects.",
      "Campaign landing pages gave prospects a place to explore the offer.",
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
      "FyerX built Cinepebble’s brand and mobile app experience. Its Facebook and Instagram launch campaigns generated more than 3,400 website pre-signups.",
    services: [
      "Brand Identity",
      "UI/UX Design",
      "Mobile App Design",
      "Pricing Strategy",
      "Paid Social",
    ],
    imageSrc: "/marketingpageimages/Case Study 02.webp",
    cardBg: "#F8F1D8",
    peekColor: "#F8B104",
    accentColor: "#D97706",
    ctaBg: "#F8B104",
    ctaText: "#111111",
    metrics: [
      { value: "3,400+", label: "Website pre-signups" },
      { value: "115+", label: "UI/UX screens built" },
      { value: "1", label: "Product and launch system" },
    ],
    challenge:
      "Cinepebble needed a recognisable identity, an intuitive app for movie enthusiasts, pricing for different user groups, and an audience before launch.",
    approach: [
      "Created the visual identity and mascot and designed the mobile app experience.",
      "Developed pricing for the platform’s different user categories.",
      "Connected Facebook and Instagram launch campaigns to the website signup journey.",
    ],
    results: [
      "Facebook and Instagram launch campaigns generated more than 3,400 website pre-signups.",
      "FyerX built more than 115 UI/UX screens as part of a single product and launch system.",
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
      "FyerX launched Workdayz as a unified B2B workwear brand, with six sub-brands, a new website and more than 40 brand assets.",
    services: [
      "Brand Architecture",
      "B2B Positioning",
      "Website Design",
      "Brand Collateral",
      "LinkedIn Marketing",
    ],
    imageSrc: "/marketingpageimages/Case Study 03.webp",
    cardBg: "#E4F4FB",
    peekColor: "#2A3594",
    accentColor: "#2A3594",
    ctaBg: "#2A3594",
    ctaText: "#FFFFFF",
    metrics: [
      { value: "6", label: "Sub-brand identities" },
      { value: "1", label: "Connected B2B brand system" },
      { value: "40+", label: "Brand assets created" },
    ],
    challenge:
      "The workwear business had established clients under the Saraogi name and relied heavily on referrals. It needed a distinct B2B brand and a way to reach prospects beyond its existing network.",
    approach: [
      "Launched the Workdayz brand and website and created six sub-brand identities for distinct markets.",
      "Extended the new identity to brochures, packaging, stationery and other brand assets.",
      "Introduced the brand to relevant business audiences on LinkedIn.",
    ],
    results: [
      "Six sub-brand identities and more than 40 brand assets formed one B2B brand system.",
      "Workdayz recorded new hospitality orders after the launch, including from the Maldives.",
    ],
  },
  {
    slug: "onroadz",
    label: "Case Study 04",
    clientName: "Onroadz",
    categoryLabel: "Multi-City Mobility & Search Acquisition",
    title: "Growing rental enquiries across cities with local SEO and Google Ads",
    summary:
      "FyerX used local SEO and Google Ads to help Onroadz and OnTrot rank for 100+ first-page keywords and generate 250+ daily lead calls.",
    services: [
      "SEO",
      "Local SEO",
      "Google Ads",
      "Lead Generation",
    ],
    imageSrc: "/marketingpageimages/Case Study 04.webp",
    cardBg: "#FDE8EE",
    peekColor: "#C40650",
    accentColor: "#C40650",
    ctaBg: "#C40650",
    ctaText: "#FFFFFF",
    metrics: [
      { value: "100+", label: "First-page keywords" },
      { value: "250+", label: "Daily lead calls" },
      { value: "500+", label: "Fleet size supported" },
    ],
    challenge:
      "Onroadz needed stronger Google visibility as it expanded into new cities. The launch of OnTrot’s car and bike hosting service also needed sustained search demand.",
    approach: [
      "Used SEO and local SEO to target high-intent, location-specific searches for Onroadz and OnTrot.",
      "Ran Google Ads with festive offers and coupons while organic visibility grew.",
    ],
    results: [
      "The portfolio ranked on Google’s first page for more than 100 competitive keywords.",
      "Together, SEO and Google Ads generated more than 250 daily lead calls.",
      "The programme supported fleet growth beyond 500 vehicles.",
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
      "FyerX helped Sayyam Investments earn 18 first-page rankings and generate 16 investor enquiries within six months through targeted SEO.",
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
    metrics: [
      { value: "18", label: "First-page ranking terms" },
      { value: "+62%", label: "Qualified organic sessions" },
      { value: "16", label: "Investor enquiries" },
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
    title: "Improving return on ad spend for direct-to-consumer apparel",
    summary:
      "FyerX rebuilt Adro’s paid campaigns around website purchases, achieving 12× return on ad spend on Meta and 7× on Google.",
    services: [
      "Performance Marketing",
      "Paid Social",
      "Google Ads",
      "Conversion Optimisation",
    ],
    imageSrc: "/marketingpageimages/Case Study 06.webp",
    cardBg: "#FBE8E0",
    peekColor: "#E44A18",
    accentColor: "#E44A18",
    ctaBg: "#E44A18",
    ctaText: "#FFFFFF",
    metrics: [
      { value: "12×", label: "Meta ROAS" },
      { value: "7×", label: "Google ROAS" },
      { value: "9%+", label: "Returning customer rate" },
    ],
    challenge:
      "Adro sold hoodies successfully on Amazon, but its own website generated few sales and previous campaigns put cost per purchase above ₹540.",
    approach: [
      "Rebuilt Google and Meta campaigns with focused ad sets, product-specific creative and audience targeting.",
      "Optimised campaigns around website purchases and return on ad spend.",
    ],
    results: [
      "Facebook and Instagram ads achieved 12× return on ad spend.",
      "Google and its ad network achieved 7× return on ad spend.",
      "The returning customer rate exceeded 9%.",
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
