import type { CityKey } from "./location-types";

type Item = readonly [title: string, text: string];

export type Playbook = {
  work: readonly Item[];
  decision: Item;
  delivery: Item;
  questions: readonly Item[];
  scenarios: Record<CityKey, Item>;
};

export const locationPlaybooks: Record<string, Playbook> = {
  "digital-marketing-agency": {
    work: [
      ["Search and discovery", "Review how buyers discover the business, including service queries, category searches and brand searches. Match each priority to an existing page, a revision or a new page with a clear reason to exist."],
      ["Campaigns and landing pages", "Develop an offer people can act on, then align the audience, ad and landing page. Use campaigns to learn which messages attract buyers the business can realistically serve."],
      ["Creative, follow-up and measurement", "Decide who responds after a form or call. Track the agreed actions, ask the sales team which enquiries were useful and use that evidence to decide what to change next."]
    ],
    decision: ["Where should you start?", "Start at the point where buyers are dropping out. If people cannot find the service, improve discovery. If traffic is already relevant but few visitors take action, work on the offer, landing page and response process before increasing spend."],
    delivery: ["What a first engagement can deliver", "A practical scope can include a site and campaign review, a prioritised backlog, a measurement plan and one launch or improvement cycle. We agree which assets FyerX owns, which information needs your approval and how results will be discussed."],
    questions: [
      ["Can FyerX work with our existing team?", "Yes. We can agree a defined workstream across search, campaigns, design or reporting and plan how to share responsibilities with your team or existing partners."],
      ["What should we measure in the first reporting period?", "Choose a useful action first, such as booked consultations, qualified calls or demo requests that sales accepts. Channel and landing-page data then help explain what drove those results."]
    ],
    scenarios: {
      bangalore: ["Two audiences on one website", "If an enterprise software company also sells to small teams, one page can serve as an overview while separate pages deal with a product trial and a sales-led demo. The trial path should explain setup and pricing. The enterprise path should make integration and evaluation easier. Measure trials that activate and demos that meet your sales criteria separately."],
      chennai: ["A consultation business with several branches", "A useful first campaign could focus on services each branch can actually deliver, include appointment or call options and show staff which branch an enquiry belongs to. If customers use different languages, validate terms with the team that takes calls. Compare attended appointments by campaign before moving spend to another area."],
      coimbatore: ["A supplier launching a more specialist product line", "A shared catalogue brings visitors in but may leave them searching for technical details. Build an application page that helps buyers check the material, operating conditions and options before requesting a quote. Route the enquiry with those details to the person who can assess it. Compare usable quote requests across products rather than counting downloads alone."]
    }
  },
  "performance-marketing-agency": {
    work: [
      ["Account and conversion audit", "Review account structure, search terms, audience exclusions and event tracking. Flag duplicate conversions or actions that count as leads before a real customer has done anything useful."],
      ["Channel and landing-page tests", "Split campaigns by offer and intent, then test what changes one decision at a time. Match each ad to a page that explains the offer, eligibility and what happens after someone responds."],
      ["Budget and performance review", "Compare cost per qualified action with delivery capacity and lead outcomes. Increase investment where the economics and lead quality support it, and set limits for tests that need more evidence."]
    ],
    decision: ["When should you increase spend?", "Increase spend once the tracking is reliable, the landing page works and there is evidence that qualified enquiries or orders can support the acquisition cost. If spend increases but quality drops, inspect the audience and search terms before asking sales to handle more volume."],
    delivery: ["What a campaign scope can include", "A channel plan, campaign setup or account changes, creative requirements, landing-page recommendations, conversion checks and a reporting cadence. Budget, platforms and test duration are agreed as part of the brief."],
    questions: [
      ["Do we need to change our whole website first?", "Usually a focused landing page or improved contact path can be tested first. We will identify site issues that affect the campaign rather than assume a redesign is needed."],
      ["Can you report beyond clicks and form fills?", "Where the necessary systems and data are available, reporting can distinguish enquiries, qualified leads, appointments and sales by campaign."]
    ],
    scenarios: {
      bangalore: ["A paid search campaign for an enterprise demo", "Separate people comparing competitors from people asking for a named integration. Send both to useful pages, but analyse them against their different buying stages. Exclude developer and job-seeker searches where they are irrelevant, and import accepted meetings or opportunities if the CRM can attribute them reliably."],
      chennai: ["A promotion that needs visits, not just calls", "Run separate campaigns for each eligible showroom or territory. During launch, check whether calls connect and whether customers receive accurate directions or opening information. A branch that receives fewer but more relevant calls can be more valuable than the cheapest source of raw enquiries."],
      coimbatore: ["A campaign for product variants with different margins", "Separate standard models with clear purchase routes from custom configurations that need engineering review. Exclude out-of-scope sizes and applications where possible. On the quote side, measure whether the contact included usable specs and whether the team could respond within the expected window."]
    }
  },
  "b2b-marketing-agency": {
    work: [
      ["Positioning and audience research", "Interview people who sell, implement and support the offer. Identify where buyers first struggle to understand the difference between options, and define messages for those decisions."],
      ["Buyer proof and sales enablement", "Build resources that answer real evaluation questions. Depending on the buyer, that can mean a capability page, implementation walkthrough, comparison guide or a reference story your client has approved."],
      ["Account and channel strategy", "Choose priority sectors and contacts, and decide what sales and marketing will each do. Use campaign responses and sales feedback to refine the message, assets and account list."]
    ],
    decision: ["When is account-based marketing a fit?", "Account-based work can help when you know enough about a finite set of target companies to make outreach relevant. If the buyer profile and offer are still unclear, a narrower positioning and discovery exercise is more useful than starting with a large account list."],
    delivery: ["What sales can take into the next call", "A short positioning guide, buying-role map, sector or application pages and usable sales material. Give each asset a specific purpose, from opening a conversation to helping a buyer explain an implementation decision internally."],
    questions: [
      ["Can you help with long sales cycles?", "Yes. We can map the questions buyers ask at different stages and plan follow-up content around when sales actually needs it."],
      ["How do you use customer examples?", "We use approved, relevant stories and explain the work and outcome clearly. We avoid passing off a general example as evidence for a particular client or location."]
    ],
    scenarios: {
      bangalore: ["A technical founder preparing for enterprise buyers", "The engineering team can explain how the product works while the commercial buyer needs to know where it reduces time, cost or handoffs. Build a dedicated overview for that buyer, then link to security or integration details for technical review. Give sales one follow-up asset for each type of discussion."],
      chennai: ["A technology services firm selling through partners", "A partner introduction can stall if the project scope and geography are unclear. Prepare a one-page capability brief and a separate page for implementation boundaries, example deliverables and handover. Agree how a partner referral will be logged and who owns the follow-up."],
      coimbatore: ["An equipment manufacturer working with direct buyers and dealers", "Make it clear who handles technical questions, demos, stock and after-sales contact. A distributor pack can cover the sales and support model while a direct-buyer page helps engineers evaluate applications. Both should use an approved, consistent description of the equipment."]
    }
  },
  "lead-generation-agency": {
    work: [
      ["Qualification and exclusions", "Agree on company and buyer fit, the kind of requirement that merits a sales call, and common reasons to exclude a response. Define a lead that sales can accept before planning campaigns."],
      ["Offers, outreach and capture", "Choose one practical next step such as a demo, quote, assessment or consultation. Prepare the offer, targeted campaign or outreach, and an enquiry path that collects the right information."],
      ["Follow-up and pipeline reporting", "Assign owners and an expected response time. Track leads through review and record meeting or quote outcomes so future campaign changes can be based on what the team can act on."]
    ],
    decision: ["Which lead generation channel should you start with?", "Start where there is a clear buyer signal. Search can capture people asking for a specific service, while account outreach makes sense when you can identify a defined set of buyers who face the problem. The offer and the ability to follow up matter in either route."],
    delivery: ["What your team receives", "An agreed lead definition, an acquisition plan, enquiry and follow-up guidance, and a reporting view that keeps campaign activity separate from sales outcomes. Scope can include campaign execution where it fits the brief."],
    questions: [
      ["Can we target a small list of accounts?", "Yes. A focused list is useful when the criteria are clear and the offer is relevant to the people being contacted."],
      ["Can we start with a test?", "Yes. Scope a limited audience or offer, set review points, and decide what would justify continuing before expanding the programme."]
    ],
    scenarios: {
      bangalore: ["A services business trying to book discovery calls", "Define what qualifies before launching. A customer may need a project sponsor, active timeline and a specific problem to discuss. Capture enough information to route the call, then ask sales to record whether it proceeded to a technical discussion. That gives more direction than cost per form submission."],
      chennai: ["A commercial service team handling multiple categories", "Ask for the service line, location and approximate timing. Send the enquiry to the matching team, include an exception route when details are unclear and review qualification with the owner. Keep broad consumer questions separate so trade leads receive the right follow-up."],
      coimbatore: ["A manufacturer who needs better quotation requests", "Test a request form that distinguishes a standard product, a custom requirement and a distribution enquiry. For custom requests, invite dimensions or intended use where appropriate. Review the useful quotes that follow and whether unnecessary form fields are causing buyers to abandon the process."]
    }
  },
  "ai-marketing-agency": {
    work: [
      ["Select a workflow", "Choose a recurring task with clear inputs and a person who can review the output. Examples include clustering feedback, drafting variations from approved claims or creating a report outline."],
      ["Set evidence and review rules", "Decide which source material the workflow may use and what the tool must flag as uncertain. Build a real approval step for audience-facing material and keep a record of changes."],
      ["Test and compare", "Compare pilot output with the current process for quality, time and frequency of corrections. Keep the inputs, example evaluations and known failure cases so the pilot can be monitored after launch."]
    ],
    decision: ["When can automation help?", "AI can help where there is repeatable work and reliable source material. Sensitive campaign decisions, product claims and cultural or language nuances benefit from a reviewer with authority to make changes or stop publication."],
    delivery: ["What an AI marketing pilot can deliver", "A workflow map, access boundaries, sample inputs and outputs, review criteria and a documented escalation path. Rollout follows a test with the people who will actually use and approve the results."],
    questions: [
      ["Can we limit which information is used?", "Yes. We can scope permitted inputs and keep sensitive or unsuitable data outside the workflow by design."],
      ["Can teams keep their editorial approval?", "Yes. The approver can see the draft and its references, correct output and decide whether it should be used."]
    ],
    scenarios: {
      bangalore: ["Turning approved customer insights into campaign ideas", "Use a small set of anonymised, approved sales notes to identify recurring questions. Have product marketing verify the themes and decide which deserve a new asset. Keep customer names and contracts outside the inputs, and benchmark the exercise against the current manual research process."],
      chennai: ["Preparing bilingual creative for review", "Start with one campaign and lock the approved product claims before creating variations. Ask someone fluent in Tamil with product context to check clarity, terminology and tone. Keep the approved version available for reuse, with a short note explaining any recurring language corrections."],
      coimbatore: ["Preparing consistent product descriptions", "Start with one well-documented product family. Give the workflow an approved specification sheet and examples of claims it may use. Flag blank or contradictory fields for an engineer, then review whether draft preparation becomes faster without increasing correction work."]
    }
  },
  "seo-agency": {
    work: [
      ["Crawl and page audit", "Check crawling, indexability, redirects, duplicate URLs and internal linking. Note which fixes affect pages that answer real commercial or customer questions."],
      ["Content and search intent", "Compare search queries with the information people actually need. Update the most useful pages first and create new pages when they have a distinct purpose and sufficient material."],
      ["Local visibility and measurement", "For real branches or service areas, help customers find accurate business details and contact routes. Use Search Console and available enquiry tracking to monitor discovery and useful visits."]
    ],
    decision: ["When should a new page exist?", "A separate page makes sense when the audience has a distinct task and the page can answer it. Closely overlapping pages can benefit from clearer roles or consolidation. Pages that differ only by wording or spelling rarely need separate destinations."],
    delivery: ["What an SEO review can deliver", "An inventory of issues, prioritised fixes, page-level recommendations and a way to monitor what happens after changes. Content or technical implementation can be agreed separately, based on site access and owner capacity."],
    questions: [
      ["Do you guarantee a first-page ranking?", "Rankings depend on the search system, competition and site quality. We can make improvements and track changes without promising a ranking."],
      ["Can you work alongside our developers?", "Yes. We can make recommendations specific enough to implement, then check the affected URLs after release."]
    ],
    scenarios: {
      bangalore: ["Product and documentation pages competing for attention", "Map how evaluators look for a capability and how existing users look for setup help. Give the product page a clear explanation of the capability and let the documentation answer implementation steps. Connect the two with useful links and check which version appears for each type of query."],
      chennai: ["Several branches with different appointment options", "Confirm the hours, address and services for each genuine branch before putting the information on a page. Include practical details customers ask about, such as whether an appointment is needed, and provide a contact route suitable for that location. Fix stale details before adding new location pages."],
      coimbatore: ["A technical catalogue with similar component names", "Group models by what buyers need to compare, such as bore size, material or production environment. Give key applications their own pages when content and specifications justify them. Link to a quote form that captures product details so the effect can be evaluated beyond raw search impressions."]
    }
  },
  "saas-marketing-agency": {
    work: [
      ["Use-case and positioning review", "Identify which user gets value first, which team owns the budget and what alternative the buyer is replacing. Use those findings for the website, demo outline and sales material."],
      ["Demand and conversion paths", "Plan acquisition for people who can self-serve and for people who need a demo or procurement support. Give each path conversion goals that reflect how a customer actually progresses."],
      ["Activation and follow-up", "Connect the acquisition message to what a new user sees after sign-up. Review where users get stuck, and test onboarding or sales follow-up against the activation event your team considers meaningful."]
    ],
    decision: ["Should you promote a trial or a demo?", "Lead with the action a buyer can complete and get value from. A simple product may support trial-first acquisition. A regulated or integration-heavy product may need a guided evaluation. Mixed models can use both when analytics and follow-up are clear."],
    delivery: ["What a SaaS scope can include", "Audience and message guidance, page recommendations, campaign assets and a measurement plan for sign-ups, demos or activation. We can agree who owns lifecycle messaging, implementation and CRM reporting."],
    questions: [
      ["Can you support pre-launch SaaS marketing?", "Yes. We can help test a use case, positioning and early audience response before committing to a broader launch."],
      ["Can you work with an existing product analytics setup?", "Yes. We first agree which behaviour indicates progress and use available events where they are reliable."]
    ],
    scenarios: {
      bangalore: ["A self-serve product adding an enterprise tier", "Keep a clear trial flow for smaller teams and build an enterprise route that covers security, procurement and integration. Give sales a demonstration plan tied to the enterprise use case. Track trial activation separately from opportunities so channel decisions reflect both journeys."],
      chennai: ["An operations platform sold through implementation partners", "Show the end-user workflow before the technical setup and distinguish what the partner does from what the product team does. Prepare a follow-up asset partners can use consistently. Capture partner source and role in the opportunity so results can be reviewed without double counting."],
      coimbatore: ["A vertical product entering another region", "Choose one narrow use case and test how prospects already handle it, what import or onboarding looks like and who signs off on adoption. Turn the answers into a demo and a use-case page. Review which early conversations turn into useful evaluations before expanding to more regions."]
    }
  },
  "marketing-automation-agency": {
    work: [
      ["Map the current handoffs", "List the forms, campaigns and tools that create leads. Follow a record through the CRM, including its owner, qualification status, consent where applicable and the points where context gets lost."],
      ["Set up routing and follow-up", "Design ownership and escalation rules. Test how workflows behave for known accounts, duplicates, incomplete requests and leads that land outside response hours."],
      ["Measure and hand over", "Use test records to confirm how automations behave, then document field ownership, failure handling and where teams should look for reporting. Define which alerts need a person to act."]
    ],
    decision: ["What should you automate first?", "Choose a step where rules are stable and mistakes are detectable. Routing based on an agreed territory is a better first candidate than a decision the sales or technical team still makes case by case."],
    delivery: ["What implementation can include", "Workflow documentation, field mapping, CRM or integration configuration, test cases, and reporting or handover notes. Software choice and access are agreed before implementation."],
    questions: [
      ["Do we have to replace our CRM?", "Often the existing CRM can handle the most useful improvement. We assess its native capabilities and integrations before suggesting a change."],
      ["How do you handle duplicate records?", "Agree which fields can identify a matching contact or account. Use a review queue for uncertain matches rather than automatically merging records that might relate to different people."]
    ],
    scenarios: {
      bangalore: ["Trial and demo leads entering one CRM", "Route a trial signup to onboarding while a qualified demo request reaches the right account owner. Where the same person submits both, keep the history and stop messages that would conflict with sales follow-up. Test with sample records before the rules are enabled."],
      chennai: ["A customer enquiry shared across teams", "Start by recording the service line and branch. Add an owner, a response reminder and an exception queue for cases that cannot be matched. When reporting, distinguish assignment from the first useful response so responsibility gaps stay visible."],
      coimbatore: ["A quote request that moves between estimating and sales", "Capture the application when the request arrives, show who owns estimating and trigger follow-up only after the quote is sent. Keep unusual technical requests reviewable by an engineer before automation puts them into a standard response flow."]
    }
  }
};

