import { usPaths, type UsOfferKey } from "@/data/us-offers";

const contact = "#enquiry";

export const usHubCards = [
  {
    title: "Offshore IT staffing",
    description: "Add India-based specialists when client delivery is constrained by a platform skill, an upcoming release, or a hiring timeline. We agree working-hour overlap, responsibilities, and access before a pilot starts.",
    href: usPaths.staffing,
    ctaLabel: "Explore offshore staffing",
    metrics: [
      { value: "01", label: "Start with one role", sublabel: "Defined pilot" },
      { value: "US", label: "Working-hour overlap", sublabel: "Agreed by role" },
      { value: "India", label: "Delivery base", sublabel: "Offshore model" },
    ],
  },
  {
    title: "B2B marketing",
    description: "Test one IT service offer against one buyer segment. Connect the message, landing page, acquisition channel, and CRM so your sales team can see which enquiries are worth following up.",
    href: usPaths.marketing,
    ctaLabel: "Explore B2B marketing",
    metrics: [
      { value: "60", label: "Day pilot", sublabel: "Defined scope" },
      { value: "01", label: "Acquisition channel", sublabel: "One initial test" },
      { value: "CRM", label: "Pipeline reporting", sublabel: "Sales feedback" },
    ],
  },
] satisfies readonly [{ title: string; description: string; href: string; ctaLabel: string; metrics: { value: string; label: string; sublabel: string }[] }, { title: string; description: string; href: string; ctaLabel: string; metrics: { value: string; label: string; sublabel: string }[] }];

export const usHubWork = {
  heading: "Where to start with",
  highlight: "FyerX",
  tabs: [
    { label: "Delivery capacity", para: "If an upcoming implementation needs a skill your team cannot free up, start with a role brief. Name the milestone, what the specialist will own, and the collaboration hours that are essential. We confirm scope and availability before you choose a candidate.", cta: "See the staffing model", href: usPaths.staffing },
    { label: "ServiceNow projects", para: "If a client needs additional ServiceNow capacity, share the modules, environment, connected systems, and release stage. We use that brief to screen for experience the specialist can explain in a technical interview.", cta: "Explore ServiceNow staffing", href: usPaths.servicenow },
    { label: "Demand generation", para: "If your sales team has a proven offer but lacks a consistent route to the right buyers, start with one audience and one channel. Agree what qualifies a meeting and who follows it up before you launch.", cta: "See the marketing pilot", href: usPaths.marketing },
  ],
};

export const usHubControl = {
  heading: "What working together",
  highlight: "looks like",
  cards: [
    { title: "India-based delivery", body: "The people doing the work are based in India. At the start, identify the people who approve decisions, the hours when both teams can meet, and the work that can move forward asynchronously." },
    { title: "One accountable lead", body: "Agree a point of contact and a review cadence. Each team should know who owns the next decision, who can resolve an issue, and what should be escalated." },
    { title: "A written scope", body: "A pilot has an agreed deliverable, timeline, operating assumptions, and review point. The staffing workstream and the marketing pilot each have their own success criteria." },
    { title: "A decision at the end", body: "Use the evidence from the initial engagement to agree what happens next. For staffing, review delivery and collaboration. For marketing, review buyer fit and sales follow-up." },
  ],
};

type Question = { q: string; a: string };
type Content = {
  hero: { title: string; highlight: string; description: string };
  workflow: { heading: string; highlight: string; tabs: { label: string; para: string; cta: string; href: string }[] };
  checkpoints: { heading: string; highlight: string; cards: { title: string; body: string }[] };
  questions: Question[];
};

export const usContent: Record<UsOfferKey, Content> = {
  "offshore-it-staffing": {
    hero: { title: "Offshore IT staffing for", highlight: "US delivery teams", description: "Add India-based IT specialists to implementation, integration, or support work. FyerX helps US consultancies and implementation partners scope the role, assess candidates, and agree how both teams will work together." },
    workflow: {
      heading: "From an open requirement to",
      highlight: "a working delivery plan",
      tabs: [
        { label: "Define the role", para: "A job title rarely tells us enough. Include the platform and modules, implementation stage, environments the specialist will use, and the first decision or deliverable they will own. We review the collaboration hours and access constraints before sourcing.", cta: "Send a role brief", href: contact },
        { label: "Assess the shortlist", para: "We discuss comparable project responsibility and availability, then share screening notes against the agreed brief. Your technical lead can interview candidates or use an approved work sample to check the requirements that matter most.", cta: "Discuss assessment", href: contact },
        { label: "Start the engagement", para: "Agree the access owner, time approval process, first deliverable, and escalation contact. A review point gives both teams a way to adjust coverage or scope before adding headcount.", cta: "Plan a delivery pilot", href: contact },
      ],
    },
    checkpoints: {
      heading: "Agree the details before",
      highlight: "your specialist starts",
      cards: [
        { title: "Workstream ownership", body: "Name the deliverable, dependencies, and person who reviews the work. For integration staffing, share what systems are involved and who approves configuration or release changes." },
        { title: "US working-hour overlap", body: "Specify the time zone and the meetings or support windows that need real-time coverage. Agree how timezone changes, holidays, and handoffs are handled." },
        { title: "Access and confidentiality", body: "Confirm which systems and data can be accessed from India, how permissions are granted, and whether the role needs a background check or customer approval." },
        { title: "Commercial and review terms", body: "Agree the billing schedule, timesheet approvals, notice terms, and how a replacement would be handled. Review the first deliverable before discussing a larger team." },
      ],
    },
    questions: [
      { q: "Can the specialist use our Jira, Teams, or Slack workflow?", a: "Share the collaboration tools and constraints in the brief. We agree how to use your systems, who can grant access, and whether you need private or customer-facing communication." },
      { q: "What should a staffing brief include?", a: "Provide the platform, module or stack, seniority, time zone, target start, expected deliverables, engagement length, and any customer restrictions on offshore access." },
      { q: "What happens if we want to expand after the pilot?", a: "We review the work, availability, communication, and access requirements first. If the engagement works, we can scope additional capacity and confirm role-by-role availability." },
      { q: "Do you support white-label delivery for consultancies?", a: "We can discuss working within your delivery model, subject to agreed confidentiality, communication, and access requirements. Explain any client restrictions during intake." },
    ],
  },
  "offshore-it-staffing/servicenow": {
    hero: { title: "Offshore ServiceNow staffing for", highlight: "US implementation partners", description: "Bring in India-based ServiceNow developers, administrators, and module specialists for an agreed workstream. Screen for platform depth, project ownership, working-hour overlap, and readiness to start." },
    workflow: {
      heading: "How we screen for",
      highlight: "real platform ownership",
      tabs: [
        { label: "Define the module", para: "Tell us the modules and the tasks the specialist will own. On an ITSM rollout, that could be incident, change, catalog, or request workflows. For ITOM, clarify discovery, service mapping, MID Server, or CMDB responsibilities.", cta: "Send a ServiceNow role brief", href: contact },
        { label: "Review a past delivery", para: "Ask the candidate to describe the work they personally did, how the change was tested, and what happened at release. Discuss a similar integration or configuration without asking them to disclose another client’s protected information.", cta: "Discuss technical screening", href: contact },
        { label: "Plan release and handover", para: "Confirm what environments the specialist can access, who reviews changes, and how the deployment and post-release handover work. Share the time zone and planned collaboration schedule before confirming availability.", cta: "Scope a delivery pilot", href: contact },
      ],
    },
    checkpoints: {
      heading: "ServiceNow workstreams we",
      highlight: "screen against",
      cards: [
        { title: "ITSM workflows and catalog", body: "Identify the processes, approvals, catalog items, or workflows that must be configured or improved. Note whether the role owns design, development, administration, or testing." },
        { title: "ITOM and CMDB", body: "Specify discovery patterns, service mapping, data quality, reconciliation, or support responsibilities. Clarify any environment or deployment limitations." },
        { title: "CSM and HRSD delivery", body: "Describe case types, portals, routing, or integrations. State which user groups or data the specialist may access and which approvals apply." },
        { title: "Integrations and upgrades", body: "List connected systems, REST or other interfaces, release windows, environment promotions, and incident ownership. Ask for a walk-through of comparable work." },
      ],
    },
    questions: [
      { q: "Can you screen for both the module and integration experience?", a: "Yes. Share the interfaces, systems, and security expectations separately from module knowledge. We can use both areas in the role brief and screening discussion." },
      { q: "Can we require a specific ServiceNow certification?", a: "Yes. Tell us which credential you require and whether you need proof before interviewing. We can include it in the brief and ask candidates for documentation with their consent." },
      { q: "Can we bring in someone partway through an implementation?", a: "Share the current project phase, work still open, knowledge-transfer window, and the workstream the specialist can take on independently after onboarding." },
      { q: "Which materials should we share for screening?", a: "A role brief and a non-confidential outline of the environment help. You can include the module, interfaces, expected artifacts, release schedule, and whether platform access from India is permitted." },
    ],
  },
  "b2b-marketing-for-it-services": {
    hero: { title: "B2B marketing for", highlight: "US IT services companies", description: "Give US buyers a clear reason to talk to your sales team. FyerX helps MSPs and technology consultancies test one offer, one audience, and one acquisition channel, with reporting tied to sales feedback." },
    workflow: {
      heading: "What happens during",
      highlight: "the 60-day pilot",
      tabs: [
        { label: "Days 1–10", para: "Review your best-fit buyers, existing sales material, past opportunities, and one offer your team can deliver. Agree which accounts qualify and how a lead moves from the landing page to the person who follows up.", cta: "Request a pipeline review", href: contact },
        { label: "Days 11–25", para: "Build or revise the landing page, create campaign assets, and test tracking on the enquiry path. Launch one acquisition channel after both teams approve the message and buyer criteria.", cta: "Discuss the first campaign", href: contact },
        { label: "Days 26–60", para: "Review replies, accepted meetings, disqualification reasons, and any qualified opportunities with sales. Use the evidence to adjust the offer or audience and decide what to continue after the pilot.", cta: "Discuss pipeline reporting", href: contact },
      ],
    },
    checkpoints: {
      heading: "What your team receives",
      highlight: "during the pilot",
      cards: [
        { title: "Offer and buyer brief", body: "Document one offer, the problem it solves, the buyer most likely to care, and the evidence your sales team can use to back up the message." },
        { title: "One campaign and landing page", body: "Build or revise a focused page with a clear CTA. Choose the channel your audience uses and scope creative, targeting, and handoff around that one test." },
        { title: "Lead handoff and reporting", body: "Confirm who receives a lead, how they follow up, and what counts as accepted or disqualified. Review both the channel numbers and the reasons people progress or drop out." },
        { title: "A recommendation for the next test", body: "At the end, decide whether to extend the campaign to a new segment, adjust the offer or conversion path, or spend the next cycle on a different channel." },
      ],
    },
    questions: [
      { q: "What should we bring to the first conversation?", a: "Bring one service you want to grow, a few examples of strong buyers, and an outline of how your sales team follows up. Any existing campaign results or approved case studies help." },
      { q: "Can we use our existing CRM and website?", a: "Usually. We review the tools, permissions, and current tracking before proposing changes. Agree who controls deployment and how enquiries should be routed." },
      { q: "What is a sales-accepted meeting?", a: "Use a definition sales approves in advance, such as the right buyer at a target account with an agreed reason to meet. Record that separately from every enquiry or booked call." },
      { q: "How are creative, spend, and approvals handled?", a: "We agree scope, approvals, account access, and any separate media budget before launch. Your team approves public claims and campaigns." },
    ],
  },
};

const staffingFoundation = {
  heading: "The foundation of an",
  highlight: "offshore staffing engagement",
  intro: "Know who owns the role, what the team is screening for, and how the specialist will work before they start.",
  cards: [
    { title: "Technical experience verified against the brief", body: "We ask for relevant platform work, project stage, and tasks the candidate owned. Your team can interview shortlisted candidates and use its own technical criteria before making a decision.", tags: ["Role brief", "Technical assessment", "Availability"] },
    { title: "An onboarding plan built around your work", body: "Confirm the manager, collaboration window, systems, and first deliverable. Schedule the handover and record how the specialist raises issues when the teams are working asynchronously.", tags: ["US-hours overlap", "Handover", "Workstream owner"] },
    { title: "Engagement terms agreed up front", body: "Confirm scope, timesheets, reporting, access rules, confidentiality, and transition or replacement terms before kickoff. Keep the first engagement small enough for both teams to evaluate.", tags: ["Agreed scope", "Reporting", "Access approvals"] },
  ],
};

const serviceNowFoundation = {
  heading: "The foundation of a",
  highlight: "ServiceNow placement",
  intro: "Screen for the platform work your customer needs and make the delivery conditions explicit before onboarding.",
  cards: [
    { title: "Module experience and decisions owned", body: "Pin down whether the specialist designed workflows, configured features, built integrations, or supported production. Ask for clear examples of comparable work and technical tradeoffs.", tags: ["Module scope", "Project ownership", "Technical review"] },
    { title: "Development and release readiness", body: "Check how the specialist tests changes, works with connected systems, and hands changes off for approval. Include branch, release, or environment practices where relevant.", tags: ["Integration", "Testing", "Release support"] },
    { title: "An agreed handover with your lead", body: "Confirm the platform lead, time zone, example artifacts, and required access. Agree the first result your lead can review and how issues should be escalated.", tags: ["US-hour overlap", "Access readiness", "Delivery review"] },
  ],
};

export const usFoundations = {
  "offshore-it-staffing": staffingFoundation,
  "offshore-it-staffing/servicenow": serviceNowFoundation,
} as const;

export const usMarketingCards = {
  heading: "A practical marketing partner for",
  highlight: "US IT services teams",
  cards: [
    { title: "Choose an offer with a buyer in mind", description: "Look at sales conversations and customer questions to pick a service your team can deliver now. Use the buyer’s trigger and decision process to write the campaign brief." },
    { title: "Use proof that sales can stand behind", description: "Translate technical scope into buyer language. Use approved examples of the work, delivery steps, or outcomes so your sales team can back up the message later." },
    { title: "Create a clear path to a conversation", description: "Build or refine one landing page, choose what the enquiry form should ask, and agree how a buyer reaches the right person without unnecessary steps." },
    { title: "Launch one channel with a defined test", description: "Choose search, LinkedIn, or another channel based on how the buyer looks for help. Agree the signal you need to see before expanding spend or adding channels." },
    { title: "Capture the reasons leads qualify", description: "Work with sales to record role, company fit, the buyer’s problem, and whether the conversation progressed. Use that feedback when changing targeting or copy." },
    { title: "Make the next decision with evidence", description: "Compare results with the starting point. If the conversation quality is good, consider expanding. If leads stall, review offer, landing page, and response timing." },
  ],
};
