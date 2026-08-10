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
  services: string[];
  peekColor: string;
  accentColor: string;
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
    categoryLabel: "Fintech Brand & Demand Generation",
    title: "Building a stronger growth engine for a payments platform",
    summary:
      "FyerX combined website, performance creative, social media, and video to help WegoFin communicate its payment solutions with greater clarity and drive market engagement.",
    services: [
      "Website Design",
      "Performance Marketing",
      "Social Media",
      "Video Marketing",
    ],
    peekColor: "#0B2E59",
    accentColor: "#1F5C99",
    metrics: [
      { value: "+41%", label: "Increase in qualified enquiries" },
      { value: "+33%", label: "Increase in campaign engagement" },
      { value: "+27%", label: "Increase in product-page visits" },
    ],
    challenge:
      "WegoFin needed its payment platform story to land clearly with business buyers. Campaigns, website journeys, and social content were not working together, which made it harder to turn interest into qualified enquiries and deeper product exploration.",
    approach: [
      "Redesigned the website experience to explain payment solutions more clearly and guide visitors toward high-intent actions.",
      "Built performance creative and paid campaigns focused on qualified demand rather than broad reach alone.",
      "Ran social media programmes that kept the brand visible and consistent across key buyer touchpoints.",
      "Produced video assets that simplified product value and supported both paid and organic channels.",
    ],
    results: [
      "Qualified enquiries increased as messaging and landing paths became clearer for target buyers.",
      "Campaign engagement improved with creative and channel execution aligned to the fintech proposition.",
      "Product-page visits rose as traffic was directed into more relevant, conversion-ready journeys.",
    ],
    dataStatus:
      "Placeholder KPI data — validate against Google Ads, website analytics, and CRM before publishing.",
  },
  {
    slug: "avekshaa",
    label: "Case Study 02",
    clientName: "Avekshaa",
    categoryLabel: "B2B Demand Generation",
    title: "Turning enterprise expertise into demand-ready campaigns",
    summary:
      "FyerX combined Google Ads, video editing, and campaign assets to help Avekshaa reach relevant enterprise buyers and create qualified demand.",
    services: ["Google Ads", "Video Editing", "Campaign Assets"],
    peekColor: "#1F5C99",
    accentColor: "#0B2E59",
    metrics: [
      { value: "+42%", label: "Increase in qualified leads" },
      { value: "+35%", label: "Increase in sales pipeline" },
      { value: "-28%", label: "Reduction in cost per lead" },
    ],
    challenge:
      "Avekshaa had strong enterprise credentials, but campaign execution was not consistently translating expertise into qualified pipeline. Creative production and media needed to work as one system to reach the right buyers efficiently.",
    approach: [
      "Structured Google Ads campaigns around enterprise buyer intent and service priorities.",
      "Edited and packaged video assets for use across paid and nurture touchpoints.",
      "Produced campaign assets that kept messaging consistent from first click through to sales follow-up.",
    ],
    results: [
      "Qualified lead volume improved as targeting and creative aligned with enterprise demand signals.",
      "Sales pipeline contribution increased from campaigns built for relevance, not volume alone.",
      "Cost per lead reduced through tighter audience focus and stronger asset reuse.",
    ],
    dataStatus:
      "Placeholder KPI data — validate lead quality, pipeline value, and cost per lead before publishing.",
  },
  {
    slug: "trndigital",
    label: "Case Study 03",
    clientName: "TRNDigital",
    categoryLabel: "B2B Brand & Content",
    title: "Creating corporate content built to move conversations forward",
    summary:
      "FyerX developed corporate videos and campaign assets that helped TRNDigital present its offering more clearly to business audiences.",
    services: ["Corporate Video", "Video Editing", "Campaign Assets"],
    peekColor: "#0B1D3A",
    accentColor: "#1F5C99",
    metrics: [
      { value: "+48%", label: "Increase in decision-maker reach" },
      { value: "+32%", label: "Video completion rate" },
      { value: "+26%", label: "Increase in sales conversations" },
    ],
    challenge:
      "TRNDigital needed corporate content that could carry a complex B2B story into sales conversations. Existing assets were not consistently helping decision-makers understand the offer or stay engaged long enough to act.",
    approach: [
      "Produced corporate video content structured for business audiences and buying-committee review.",
      "Edited and refined assets for use across campaigns, outreach, and follow-up sequences.",
      "Built supporting campaign assets that kept TRNDigital’s message consistent across channels.",
    ],
    results: [
      "Decision-maker reach expanded as content was tailored for relevant business audiences.",
      "Video completion improved with clearer narrative structure and tighter editing.",
      "Sales conversations increased as content gave teams stronger proof to open and advance discussions.",
    ],
    dataStatus:
      "Placeholder KPI data — validate reach, completion rate, and sales conversations before publishing.",
  },
  {
    slug: "kaypee-space",
    label: "Case Study 04",
    clientName: "Kaypee Space",
    categoryLabel: "Brand, Website & Lead Generation",
    title: "Building a stronger demand engine for premium workspaces",
    summary:
      "FyerX combined brand, website, lead-generation, social, and campaign work to support Kaypee Space’s premium workspace proposition.",
    services: [
      "Brand Identity",
      "Website Design",
      "Lead Generation",
      "Social Media",
      "Collaterals",
    ],
    peekColor: "#163E6B",
    accentColor: "#0B2E59",
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
      "Qualified enquiries increased as brand, site, and campaigns aligned around the premium offer.",
      "Site-to-lead conversion improved with clearer journeys and stronger conversion paths.",
      "Cost per enquiry reduced through better targeting and a more efficient funnel.",
    ],
    dataStatus:
      "Placeholder KPI data — validate enquiries, site-to-lead conversion, and cost per enquiry before publishing.",
  },
  {
    slug: "adro",
    label: "Case Study 05",
    clientName: "Adro",
    categoryLabel: "E-commerce Growth",
    title: "Scaling demand for a digital-first apparel brand",
    summary:
      "FyerX combined paid social, landing-page work, search, and campaign creative to support Adro’s online acquisition.",
    services: [
      "Paid Social",
      "Google Ads",
      "SEO",
      "Landing Pages",
      "Campaign Creative",
    ],
    peekColor: "#2A5080",
    accentColor: "#1F5C99",
    metrics: [
      { value: "₹8.32L", label: "Total sales" },
      { value: "860", label: "Orders" },
      { value: "6.45M", label: "Impressions" },
    ],
    challenge:
      "Adro needed to scale online acquisition for a digital-first apparel brand without losing efficiency across paid social, search, and landing-page conversion.",
    approach: [
      "Ran paid social campaigns to drive awareness and purchase intent for core product lines.",
      "Built and optimised landing pages aligned to campaign offers and audience segments.",
      "Supported acquisition with Google Ads, SEO, and creative built for performance channels.",
    ],
    results: [
      "Total sales and order volume grew through coordinated paid and on-site conversion work.",
      "Impressions expanded as campaigns reached broader relevant audiences across channels.",
      "Creative and landing-page iteration improved efficiency across the acquisition funnel.",
    ],
    dataStatus:
      "Portfolio-reported KPI data — confirm reporting period and client approval before publishing.",
  },
  {
    slug: "onroadz",
    label: "Case Study 06",
    clientName: "Onroadz",
    categoryLabel: "Search Growth",
    title: "Expanding organic reach for a self-drive car-rental brand",
    summary:
      "FyerX supported Onroadz with SEO and search-led acquisition to grow visibility for high-intent rental searches.",
    services: ["SEO", "Content Optimisation", "Google Ads", "Social Media"],
    peekColor: "#0B2E59",
    accentColor: "#163E6B",
    metrics: [
      { value: "40.6K", label: "Monthly organic visits" },
      { value: "3.6K", label: "Ranking keywords" },
      { value: "87.3K", label: "Backlinks" },
    ],
    challenge:
      "Onroadz needed stronger visibility for high-intent self-drive rental searches. Organic discovery, content, and paid support had to combine to capture demand in competitive local and category queries.",
    approach: [
      "Implemented SEO and content optimisation focused on high-intent rental search terms.",
      "Used Google Ads to complement organic visibility for priority locations and queries.",
      "Supported discoverability with social activity aligned to search and seasonal demand.",
    ],
    results: [
      "Monthly organic visits grew as search visibility expanded across priority keywords.",
      "Ranking keyword volume increased through sustained SEO and content work.",
      "Backlink growth supported stronger domain authority and search performance.",
    ],
    dataStatus:
      "Portfolio-reported KPI data — confirm reporting period and client approval before publishing.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return MARKETING_CASE_STUDIES.find((study) => study.slug === slug);
}
