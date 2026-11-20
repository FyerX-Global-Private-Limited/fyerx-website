import "server-only";
import type { InsightTopic } from "./blog-topics";

export type Insight = {
  slug: string;
  topic: InsightTopic;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  date: string;
  author: string;
  enquiry: { title: string; description: string; label: string };
  sections: { id: string; title: string; paragraphs: string[]; checklist?: string[] }[];
};

export const insights: Insight[] = [
  {
    slug: "hiring-servicenow-contractors-in-india",
    topic: "talent",
    title: "Hiring ServiceNow contractors in India",
    description: "A practical guide to scoping the role, evaluating platform experience and getting a contractor ready to deliver.",
    image: "/updatedmainpage/section9-2.webp",
    imageAlt: "Colleagues working together around a laptop",
    author: "FyerX Talent team",
    date: "2026-11-19",
    enquiry: {
      title: "Need ServiceNow talent?",
      description: "Tell FyerX Talent which modules you run, what you need delivered and when the work starts.",
      label: "Discuss your hiring needs",
    },
    sections: [
      {
        id: "scope-the-role",
        title: "Scope the role before sourcing",
        paragraphs: [
          "Start with the work your team needs to finish. Clearing an ITSM request backlog calls for different experience from redesigning a service catalogue or improving the quality of CMDB data. Write the first deliverable in plain language and name the person who will accept it.",
          "Turn that deliverable into a short brief. Specify the modules, the state of the instance, the dependencies the contractor will inherit and the access the team can provide. For a catalogue project, an initial milestone might be to migrate two representative requests into a non-production instance and get service owners to sign off on their approval paths.",
        ],
        checklist: [
          "State the outcome, modules and expected contract length.",
          "Identify the platform owner, reviewer and release approver.",
          "Separate required experience from skills the contractor can pick up during the engagement.",
        ],
      },
      {
        id: "evaluate-platform-experience",
        title: "Evaluate hands-on platform experience",
        paragraphs: [
          "Ask candidates to walk through a recent change in a comparable module. Find out which decisions they owned, what they tested and how they handled an unexpected result. A convincing explanation connects the configuration to the workflow it supports and makes the handoff easy to understand.",
          "Use the same short, fictional scenario with every candidate. For example, a department needs approvals to go to a delegate when a manager is away. Ask how the candidate would model the workflow, handle a missing delegate and prove that both paths behave correctly. Score approach, testing and communication against a shared rubric. Keep customer data and access to live systems out of the interview.",
        ],
      },
      {
        id: "agree-working-terms",
        title: "Agree on working hours and contract terms",
        paragraphs: [
          "Confirm the hours you actually need in common. If the platform owner is in another time zone, reserve overlap for decisions, pairing and releases. Agree where the contractor will record progress and who can unblock them outside that window. Also confirm availability, competing commitments and any planned time away.",
          "Compare quotes against the same scope and handover expectations. A rate only tells you part of the cost when engagement models, equipment, invoicing and notice periods differ. Have your procurement or legal team review the applicable engagement terms, confidentiality, IP ownership and local obligations before the start date.",
        ],
      },
      {
        id: "onboard-for-delivery",
        title: "Set up the first week and the handoff",
        paragraphs: [
          "Prepare least-privilege access, a non-production workspace and a short orientation to the instance. Walk through how your team records changes, reviews configuration and promotes releases. Give the contractor a small, reversible first task so both sides can confirm the workflow before tackling larger changes.",
          "Agree early on what will stay with the team. A handoff can include configuration notes, test evidence, known limitations and a walkthrough with the platform owner. Review those materials as work lands. By the final week, the owner should be able to explain how to support the change and find the evidence behind it.",
        ],
      },
    ],
  },
  {
    slug: "planning-a-b2b-website-revamp",
    topic: "marketing",
    title: "Planning a B2B website revamp",
    description: "How to choose what to rebuild, protect what already works and launch with a clear plan for measuring results.",
    image: "/updatedmainpage/section9-3.webp",
    imageAlt: "Team reviewing printed layouts and notes around a table",
    author: "FyerX Marketing team",
    date: "2026-11-19",
    enquiry: {
      title: "Planning a site revamp?",
      description: "Share your current site, priority buyers and launch goals with FyerX Marketing.",
      label: "Discuss your website revamp",
    },
    sections: [
      {
        id: "define-the-outcome",
        title: "Define what the website needs to do",
        paragraphs: [
          "Choose a business outcome before reviewing visual concepts. A software company with plenty of traffic may need more qualified demos. A specialist consultancy may need prospects to understand which problems it can solve before booking a call. The design brief should describe the buying decision the site needs to support and how the team will know it is getting easier.",
          "Speak with sales and customer-facing teams about recurring questions. Review search queries, entry pages and form starts alongside those conversations. If buyers frequently ask about implementation effort, prioritise a page that explains what implementation involves and provides approved evidence. Assign an owner to every primary journey before moving into design.",
        ],
      },
      {
        id: "audit-the-current-site",
        title: "Audit the existing site before changing URLs",
        paragraphs: [
          "Build a working inventory with one row per URL. Record its purpose, search visibility, referral traffic, links and role in enquiries. Mark whether it should stay, be rewritten, be combined or be retired. A plain service page may deserve more attention than a visually prominent page if it regularly brings qualified visitors into the site.",
          "Make URL decisions as early as possible. Map moved pages to their closest relevant replacements and check links, metadata, canonicals and the sitemap on staging. Give unresolved pages an owner. Maintain the redirect list through launch so the person checking broken links has a plan to compare against.",
        ],
      },
      {
        id: "design-the-core-journeys",
        title: "Prototype the pages buyers actually use",
        paragraphs: [
          "Build a small set of connected pages in the prototype: a common entry page, a service or product page and the enquiry flow. Test with realistic content, including long headlines, incomplete case-study material and a regular phone screen. Ask someone unfamiliar with the site to find the right offering and explain what they expect after contacting the team.",
          "Agree on evidence before finalising copy. Confirm which logos, testimonials and results you have permission to use. Keep form fields tied to what the sales team needs to respond. Where teams need different details for different enquiries, consider routing the visitor to the relevant form after they choose an offering.",
        ],
      },
      {
        id: "plan-launch-and-measurement",
        title: "Plan launch, measurement and follow-up",
        paragraphs: [
          "Record a baseline for the metrics you can measure consistently, such as qualified enquiries by source, form completion and visits to the pages search already sends traffic to. Define what counts as qualified with sales and check that form events and CRM records agree before relying on a dashboard.",
          "Assign a release owner and a rollback decision-maker. Review redirects, contact form delivery, keyboard navigation and mobile loading on staging. After launch, use the baseline and real enquiries to guide the next changes. A two-week review can catch broken journeys while a later review gives buyer behaviour more time to settle.",
        ],
        checklist: [
          "Record the baseline before switching the site.",
          "Check the full enquiry flow with an authorised test submission.",
          "Set review dates and name the person responsible for fixes.",
        ],
      },
    ],
  },
];
