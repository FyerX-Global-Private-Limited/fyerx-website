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
  eyebrow: string;
  heading: string;
  description: string;
  image: string;
  alt: string;
  action: string;
  scopeTitle: string;
  scope: Item[];
  processTitle: string;
  process: Item[];
  faqs: Item[];
  related: { href: string; label: string };
};

export const usOffers = {
  "offshore-it-staffing": {
    path: usPaths.staffing,
    division: "talent",
    eyebrow: "India-based delivery for US teams",
    heading: "Offshore IT staffing for US consultancies",
    description: "Add dedicated IT specialists in India when client work outpaces your delivery capacity. Start with a clear role brief, a defined workstream, and working hours both teams can commit to.",
    image: "/contact/contact-talent.webp",
    alt: "Recruitment consultant discussing a technology role",
    action: "Send a role brief",
    scopeTitle: "Where an offshore specialist can add capacity",
    scope: [
      { title: "ServiceNow and Salesforce", detail: "Start with development, administration, integrations, or release support. Share the modules, upcoming milestones, and tasks the specialist will own." },
      { title: "Cloud, data, and enterprise platforms", detail: "For SAP, data engineering, or cloud delivery, define the stack, environment access, and production responsibilities before sourcing starts." },
      { title: "One role or a phased team", detail: "Start with one role and expand when the delivery model works. We agree escalation, reporting, and any replacement terms before kickoff." },
    ],
    processTitle: "From role brief to first deliverable",
    process: [
      { title: "Agree the role and coverage", detail: "Set the experience bar, working-hour overlap, target start, billable schedule, and who assigns and reviews work." },
      { title: "Review relevant candidates", detail: "We screen for technical experience, availability, and agreed hours. Your team can interview the people you would work with." },
      { title: "Start with a bounded workstream", detail: "Define the first deliverable, access, feedback cadence, and how both teams will review the engagement before expanding." },
    ],
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
    eyebrow: "Demand generation for US IT services",
    heading: "B2B marketing for US IT services companies",
    description: "Turn a technical service into a clear reason to book a sales conversation. FyerX works with MSPs and technology consultancies on positioning, campaigns, landing pages, and CRM reporting.",
    image: "/contact/contact-marketing.webp",
    alt: "Marketing team reviewing a campaign strategy",
    action: "Request a pipeline review",
    scopeTitle: "A focused 60-day demand generation pilot",
    scope: [
      { title: "One buyer and one offer", detail: "Choose a service your team can deliver now. Define the trigger, the buyer’s problem, and the proof that helps them take the next step." },
      { title: "One page and one channel", detail: "Build or refine a landing page and select one acquisition channel based on buyer intent, available data, and the effort your sales team can support." },
      { title: "Pipeline reporting", detail: "Agree what qualifies a meeting and an opportunity. Review sales feedback alongside channel activity so the next decision reflects lead quality." },
    ],
    processTitle: "What happens during the pilot",
    process: [
      { title: "Align with sales", detail: "Review past wins, account profiles, service economics, and how qualified enquiries become meetings. Agree the inputs and baseline." },
      { title: "Launch a narrow test", detail: "Ship the offer and landing page, validate tracking, and launch after your team approves the message and the channel plan." },
      { title: "Review the results", detail: "Report activity, sales-accepted meetings, and qualified opportunities. Decide whether to expand, revise the offer, or change channels." },
    ],
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
    eyebrow: "ServiceNow talent for US delivery teams",
    heading: "Offshore ServiceNow staffing for US partners",
    description: "Add India-based ServiceNow specialists to a defined delivery workstream. Screen for the modules, integration patterns, and responsibilities the person will actually own.",
    image: "/contact/contact-talent.webp",
    alt: "Recruitment consultant discussing a technology role",
    action: "Send a ServiceNow role brief",
    scopeTitle: "Roles and workstreams to brief us on",
    scope: [
      { title: "Developers and administrators", detail: "Specify the experience required in workflows, configuration, scripting, platform administration, or an upcoming upgrade." },
      { title: "Module specialists", detail: "Name the relevant modules, such as ITSM, ITOM, CSM, or HRSD. Include the project phase and the responsibilities the person will take on." },
      { title: "Integrations and release support", detail: "List connected systems, authentication, deployment cadence, and incident responsibilities so screening covers the work involved." },
    ],
    processTitle: "What we assess before sharing a profile",
    process: [
      { title: "Module experience", detail: "Distinguish project ownership from exposure. Ask candidates to walk through decisions they made on a comparable workstream." },
      { title: "Integration and delivery experience", detail: "Ask about the data path, test coverage, deployment approvals, and failure handling that match your environment." },
      { title: "Readiness to start", detail: "Confirm notice period, working-hour overlap, and how the specialist will work with your platform owner or delivery lead." },
    ],
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
