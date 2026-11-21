export const usPaths = {
  home: "/us",
  staffing: "/us/offshore-it-staffing",
  marketing: "/us/b2b-marketing-for-it-services",
  servicenow: "/us/offshore-it-staffing/servicenow",
} as const;

type Item = { title: string; detail: string };

export type UsOffer = {
  path: string;
  division: "talent" | "marketing";
  heading: string;
  description: string;
  action: string;
  faqs: Item[];
  related: { href: string; label: string };
};

export const usOffers = {
  "offshore-it-staffing": {
    path: usPaths.staffing,
    division: "talent",
    heading: "Offshore IT staffing for US consultancies",
    description: "Add dedicated IT specialists in India when client work outpaces your delivery capacity. Start with a clear role brief, a defined workstream, and working hours both teams can commit to.",
    action: "Send a role brief",
    faqs: [
      { title: "Where are the staff based?", detail: "The delivery model is offshore from India. We agree working hours in the brief so your team can plan collaboration, handoffs, and meetings." },
      { title: "Can we start with one contractor?", detail: "Yes. An initial paid engagement can cover one resource and a defined scope. Duration, pricing, and billing terms are agreed in the proposal." },
      { title: "Can you work behind the scenes with our delivery team?", detail: "Tell us your customer-facing requirements and communication model. We’ll review access, confidentiality, and each team's role before agreeing the scope." },
    ],
    related: { href: usPaths.servicenow, label: "Explore offshore ServiceNow staffing" },
  },
  "b2b-marketing-for-it-services": {
    path: usPaths.marketing,
    division: "marketing",
    heading: "B2B marketing for US IT services companies",
    description: "Turn a technical service into a clear reason to book a sales conversation. FyerX works with MSPs and technology consultancies on positioning, campaigns, landing pages, and CRM reporting.",
    action: "Request a pipeline review",
    faqs: [
      { title: "Who is this for?", detail: "MSPs, implementation partners, and technology consultancies with a defined offer and a sales team that can follow up on qualified interest." },
      { title: "Which channels can we use?", detail: "Depending on the buyer and offer, the pilot can focus on search, LinkedIn, or another agreed channel. Media budgets and access are approved separately." },
      { title: "Do you guarantee leads or revenue?", detail: "We agree deliverables and measurement before kickoff. Lead and revenue outcomes depend on the offer, market response, and sales follow-up." },
    ],
    related: { href: "/marketing/case-studies", label: "View FyerX marketing case studies" },
  },
  "offshore-it-staffing/servicenow": {
    path: usPaths.servicenow,
    division: "talent",
    heading: "Offshore ServiceNow staffing for US partners",
    description: "Add India-based ServiceNow specialists to a defined delivery workstream. Screen for the modules, integration patterns, and responsibilities the person will actually own.",
    action: "Send a ServiceNow role brief",
    faqs: [
      { title: "Can you source for a specific ServiceNow module?", detail: "Yes. Share the module, seniority, and the milestones that depend on the role. We’ll confirm the search scope and availability." },
      { title: "Can our team run the technical interview?", detail: "Yes. We can coordinate your interview or work sample and provide screening notes against the role brief." },
      { title: "Can we align with our US working hours?", detail: "Share the time zone and essential collaboration hours. Availability is confirmed role by role before you make a decision." },
    ],
    related: { href: usPaths.staffing, label: "Explore the broader offshore staffing model" },
  },
} satisfies Record<string, UsOffer>;

export type UsOfferKey = keyof typeof usOffers;

export function isUsOfferKey(key: string): key is UsOfferKey {
  return Object.hasOwn(usOffers, key);
}
