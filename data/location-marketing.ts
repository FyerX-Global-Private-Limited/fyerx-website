import type { LocationService } from "./location-types";

export const marketingLocations: LocationService[] = [
  {
    slug: "digital-marketing-agency", name: "Digital Marketing Agency",
    offer: "Search, campaigns and the pages customers land on", related: "performance-marketing-agency",
    proof: "onroadz",
    markets: {
      bangalore: {
        intro: "FyerX helps Bangalore businesses turn search and paid media into qualified enquiries. We bring SEO, performance marketing, content and landing pages together so you can see which campaigns generate leads.",
        heading: "Choose the lead you actually want",
        detail: "A Bengaluru software firm selling annual contracts needs demos with the right accounts. A local service business needs calls from people it can actually serve. We plan the campaigns separately, give each its own landing page, and set up measurement around the next step that sales or operations can confirm.",
        brief: "Bring your current website, target customers, service area and two examples of good enquiries. We can use these to decide whether to start with search visibility, paid acquisition or fixes to the site.",
        question: "Can you run local SEO and B2B campaigns together?",
        answer: "Yes, when the offers and audiences are distinct. We can give each a separate landing page, budget and reporting goal so booked appointments and B2B demos stay easy to evaluate."
      },
      chennai: {
        intro: "For Chennai businesses with both consumer and trade enquiries, FyerX can give each buyer a clearer route from search or an ad to a call, consultation or quote.",
        heading: "Give retail and trade buyers separate paths",
        detail: "A business serving households and commercial buyers may receive both through the same contact form. We can create separate enquiry paths, combine English and Tamil creative where the audience calls for it, and distinguish a local booking from a reseller or procurement enquiry.",
        brief: "Share how leads arrive now, who answers them and which type you most want to grow. Include any differences between what customers can book online and what needs a call.",
        question: "Can one campaign cover English and Tamil audiences?",
        answer: "We can develop language-specific creative where the brief calls for it. We would match copy and landing-page expectations to the audience and compare the quality of enquiries by campaign."
      },
      coimbatore: {
        intro: "FyerX helps Coimbatore businesses make products and services easier to find online, then turn the right visits into enquiries your team can quote or book.",
        heading: "Make technical enquiries easier to qualify",
        detail: "A manufacturer may need buyers to send an application, capacity requirement or drawing. A service company may only need a location and a date. We organise pages and forms around the information your team needs to respond, then track the sources of usable enquiries.",
        brief: "Start with the product lines or services you want to grow, any areas you serve, and a few past enquiries that turned into orders.",
        question: "Can you market a business that sells outside Coimbatore?",
        answer: "Yes. We can plan different search and landing-page journeys for local customers, regional distributors or national buyers based on how each buys."
      }
    }
  },
  {
    slug: "performance-marketing-agency", name: "Performance Marketing Agency",
    offer: "Paid media with measurable outcomes", related: "digital-marketing-agency", proof: "adro",
    markets: {
      bangalore: {
        intro: "FyerX plans and manages paid search and paid social for Bangalore teams that need to see what ad spend contributes to trials, demos or revenue.",
        heading: "Trace ad spend to pipeline",
        detail: "If your company has separate trial and enterprise demo journeys, we can set up different conversion goals and budgets. We review CRM feedback alongside campaign data before increasing spend on a channel with cheap leads but few sales conversations.",
        brief: "Share recent spend, campaign access, conversion definitions and how your team currently records opportunities. Include any product lines or markets that need separate reporting.",
        question: "Can you audit an existing Google Ads or Meta account?",
        answer: "Yes. We can review search terms, audience overlap, landing pages and conversion tracking, then prioritise fixes before recommending any budget change."
      },
      chennai: {
        intro: "FyerX helps Chennai teams run paid campaigns for enquiries that can be answered, qualified and converted by the people who handle sales.",
        heading: "Plan around response capacity",
        detail: "A showroom or appointment-based business may be able to serve customers only in certain zones or hours. We build campaigns around those constraints, test call and form routes separately, and review booked appointments alongside lead cost.",
        brief: "Bring your branch locations, lead response hours, priorities by area and a breakdown of which enquiries become visits or confirmed bookings.",
        question: "Can we separate phone calls from form enquiries?",
        answer: "Yes. Each can be measured separately, with the final reporting based on which calls connect and which enquiries become qualified visits or bookings."
      },
      coimbatore: {
        intro: "FyerX uses paid search and landing-page testing to help Coimbatore businesses find people who are ready to request a quote or place an order.",
        heading: "Separate product demand from general browsing",
        detail: "For specialist product lines, we group search campaigns by buying intent, cut queries for spares or jobs where irrelevant, and send visitors to a page with the right application details. For a retail campaign, we can track purchases instead of quoting activity.",
        brief: "Share your product categories, serviceable markets and the information a lead must provide before the team can quote.",
        question: "Should industrial campaigns start with Google or Meta?",
        answer: "It depends on where demand appears. Search can be a practical first test for explicit model or application queries, while paid social can support promotion where the audience or offer is identifiable."
      }
    }
  },
  {
    slug: "b2b-marketing-agency", name: "B2B Marketing Agency",
    offer: "Positioning, demand and sales enablement", related: "lead-generation-agency", proof: "workdayz",
    markets: {
      bangalore: {
        intro: "FyerX helps Bangalore B2B teams explain complex products and services, reach target accounts and give sales a stronger reason to start a conversation.",
        heading: "Give each buying role the right evidence",
        detail: "Engineering, finance and procurement may join the same buying decision with different concerns. We can map their questions, prepare industry-specific proof and equip sales with material for discovery, technical evaluation and approval.",
        brief: "Bring one recent win, one stalled deal and the buyer roles involved. We use them to identify useful messaging and sales assets.",
        question: "Can you help build an account-based marketing programme?",
        answer: "We can help define accounts, roles, messages and channels, then agree with sales what counts as progress at an account."
      },
      chennai: {
        intro: "FyerX helps Chennai B2B firms organise capabilities, buyer proof and sales material for procurement-led conversations and partner outreach.",
        heading: "Turn expertise into a case buyers can evaluate",
        detail: "Engineering or managed-services buyers often ask about delivery boundaries, technical scope and handover responsibilities. We can build sector pages, qualification decks and follow-up content that clarify those points before the next sales call.",
        brief: "Share the tender questions and capability documents your sales team reuses, plus the commercial objections prospects raise most often.",
        question: "Can this support partner-led sales?",
        answer: "Yes. We can prepare material that channel partners can use consistently, with supporting pages that explain technical scope and how enquiries should be routed."
      },
      coimbatore: {
        intro: "FyerX helps Coimbatore suppliers and service companies explain their value to OEMs, distributors and enterprise buyers with different buying requirements.",
        heading: "Support distributor and direct enquiries",
        detail: "A distributor may ask about territory coverage and stocking, while a direct buyer asks for specifications, lead times and quality documentation. We build the sales story around those distinct needs and make the enquiry route clear for each audience.",
        brief: "Bring your product range, target buyer types and any approved material your sales team can share about production or delivery.",
        question: "Can you work with a product catalogue and existing dealer network?",
        answer: "Yes. The catalogue can remain the product reference while we create targeted pages and sales resources around applications, buyer questions and approved dealer enquiries."
      }
    }
  },
  {
    slug: "lead-generation-agency", name: "Lead Generation Agency",
    offer: "Define qualification before increasing volume", related: "b2b-marketing-agency", proof: "wegofin",
    markets: {
      bangalore: {
        intro: "FyerX helps Bangalore teams build a repeatable path from outreach and campaign responses to qualified meetings that sales can act on.",
        heading: "Agree what makes a meeting qualified",
        detail: "For a B2B product, we can set account and buyer criteria, connect LinkedIn or search to a dedicated offer, and report meeting acceptance and opportunity creation. A high volume of form fills has little value if they all come from the wrong type of company.",
        brief: "Share target account sizes, buyer roles, exclusions and examples of what sales considers qualified.",
        question: "Can you report on sales-accepted meetings?",
        answer: "Yes, when the sales team records the outcome. We can use the agreed CRM stage or disposition and reconcile it with channel activity."
      },
      chennai: {
        intro: "FyerX helps Chennai businesses build lead programmes that distinguish a prospect with a live requirement from a general enquiry.",
        heading: "Agree who follows up and when",
        detail: "For a company handling enquiries through a central team and regional representatives, we can structure campaign forms around service needs and route the response to the right owner. We review whether leads receive a response and move to an assessment or quote.",
        brief: "Bring the current lead form, follow-up process and the questions your team asks before it can book a meeting.",
        question: "Can you capture enquiries from several business lines?",
        answer: "Yes. Separate qualification fields and owners make it possible to see which business line a prospect needs and whether the enquiry was handled."
      },
      coimbatore: {
        intro: "FyerX helps Coimbatore teams generate enquiries with enough context for sales to estimate fit and take the next step.",
        heading: "Collect the details that make a quote possible",
        detail: "A useful industrial enquiry may include application, approximate volume and delivery location. We can test offers and forms that ask for the right level of detail, then review the enquiries that turn into quote activity rather than counting every submission equally.",
        brief: "Bring examples of strong and weak enquiries, a shortlist of target sectors and any fields your estimator needs.",
        question: "Can we generate leads for a narrow product category?",
        answer: "Yes. We can start with specific applications and buyer roles, then judge the test on qualified interest, usable requirements and follow-up outcomes."
      }
    }
  },
  {
    slug: "ai-marketing-agency", name: "AI Marketing Agency",
    offer: "AI-assisted marketing with clear review steps", related: "marketing-automation-agency",
    markets: {
      bangalore: {
        intro: "FyerX helps Bangalore marketing teams identify where AI can remove repetitive work in research, intake and reporting while keeping brand and commercial decisions with their team.",
        heading: "Pilot AI in one measurable workflow",
        detail: "A practical starting point is summarising sales notes into topic ideas or reviewing CRM enquiries against a published qualification checklist. We can design an approval step, define what data the workflow can access and compare the quality and effort with the manual process.",
        brief: "Bring one recurring task, its inputs, current turnaround time and the examples your team uses to judge quality.",
        question: "Can AI-generated material go through our existing approval process?",
        answer: "Yes. We can structure the workflow around a human review step and apply the same editorial policies to assisted and manually written material."
      },
      chennai: {
        intro: "FyerX helps Chennai teams use AI to prepare campaign variations and reporting summaries within the brand, access and approval rules they already use.",
        heading: "Review local language and product claims",
        detail: "Where a campaign serves English and Tamil-speaking audiences, automation can help prepare variations. The team responsible for language and product accuracy should review them before launch. We agree which claims require a named approver and which edits can be delegated.",
        brief: "Share approved past creative, your review stages and any terminology that needs consistent translation.",
        question: "Can AI help adapt creative into Tamil?",
        answer: "AI can support drafts and alternatives. Native-language review and product approval can stay in the workflow before creative is distributed."
      },
      coimbatore: {
        intro: "FyerX helps Coimbatore teams use AI to organise product information and reduce the time it takes to prepare well-sourced campaign material.",
        heading: "Build from approved specifications",
        detail: "For a technical catalogue, we can set up an assisted content process that draws from approved specification sheets. The workflow can highlight missing values and route drafts to a product reviewer before an application claim reaches a website or sales document.",
        brief: "Bring a representative product family, approved PDFs or sheets, and the people who own technical sign-off.",
        question: "Can this work with inconsistent catalogue data?",
        answer: "We can start by identifying which fields are reliable and where a reviewer is required. A pilot can be limited to one product family with reasonably complete records."
      }
    }
  },
  {
    slug: "seo-agency", name: "SEO Agency",
    offer: "Technical, content and local search work", related: "digital-marketing-agency", proof: "onroadz",
    markets: {
      bangalore: {
        intro: "FyerX helps Bangalore teams improve how search engines and buyers find their most useful service, product and location pages.",
        heading: "Give every search page a clear job",
        detail: "A software firm may have documentation, updates and acquisition pages competing for similar queries. We can audit index coverage, clarify which page answers each buyer question and improve links between support content and the relevant commercial page.",
        brief: "Share the site and any available Search Console access, plus the products or services that matter most to the business.",
        question: "Can you help when two pages compete for the same search?",
        answer: "We can review query overlap and each page’s purpose, then recommend clearer targeting, consolidation or redirects where that improves the customer journey."
      },
      chennai: {
        intro: "FyerX helps Chennai organisations organise site content and location information so people searching by service or branch can get an accurate answer.",
        heading: "Make branch pages useful before scaling them",
        detail: "An effective branch page explains what visitors can do there, how to reach it and whether an appointment is needed. We look at site structure, Business Profile consistency and the usefulness of each branch page before recommending more pages.",
        brief: "Share the branch list, published operating information and the services or appointments each location can actually provide.",
        question: "Can you improve local search for multiple locations?",
        answer: "Yes. We can coordinate location details, relevant links and measurement for real branches and service areas, with a plan for how the business keeps the information current."
      },
      coimbatore: {
        intro: "FyerX helps Coimbatore businesses improve search visibility for product applications and services that buyers can actually enquire about.",
        heading: "Build around the way people specify a product",
        detail: "A technical buyer often searches by material, use case, tolerance or part number. We can evaluate how product categories are indexed, decide what belongs on a dedicated page and structure specification content so buyers can compare options and send a clearer enquiry.",
        brief: "Bring a product catalogue and the common specification questions your team gets before quoting.",
        question: "Can you optimise a catalogue site without e-commerce?",
        answer: "Yes. We can improve product discovery and measure useful actions such as quote requests, catalogue downloads and visits to the appropriate application pages."
      }
    }
  },
  {
    slug: "saas-marketing-agency", name: "SaaS Marketing Agency",
    offer: "Improve trials, demos and product adoption", related: "b2b-marketing-agency",
    markets: {
      bangalore: {
        intro: "FyerX works with Bangalore SaaS teams on website messaging, demand programmes and conversion paths for products with multiple ways to buy.",
        heading: "Separate self-serve from enterprise evaluation",
        detail: "A self-serve product page can answer setup and pricing questions while an enterprise page can explain integration, deployment and buying requirements. We can map acquisition and activation events separately so sales-assist and product-led efforts are evaluated fairly.",
        brief: "Bring your pricing, current acquisition mix, activation event and the point where a buyer typically needs someone from sales.",
        question: "Can you work with both trial and demo goals?",
        answer: "Yes. We agree what success looks like for each route, then set up messaging and campaign measurement around their distinct buying journeys."
      },
      chennai: {
        intro: "FyerX helps Chennai software teams explain the value of a specialised SaaS product to operators, decision-makers and channel partners.",
        heading: "Show the product in the buyer’s workflow",
        detail: "For a vertical SaaS platform, a use-case page can show how operators start a task, where approvals happen and what the buyer can measure after adoption. We can turn that flow into demos, onboarding messages and material for partner-led sales.",
        brief: "Bring the workflow that users adopt first, common objections and any approved customer evidence about the process after implementation.",
        question: "Can you support a SaaS business selling through implementation partners?",
        answer: "Yes. We can prepare partner-facing material and joint campaign assets, and help define how partner-sourced demos should be identified in reporting."
      },
      coimbatore: {
        intro: "FyerX helps Coimbatore software teams turn a specialised product into a clear proposition for regional customers and buyers in new markets.",
        heading: "Explain the move from spreadsheets or legacy tools",
        detail: "For operations software, buyers may worry about importing data, training staff and handling go-live. We can use those questions to structure use-case pages, demo content and nurture messages for prospects who need reassurance before signing up.",
        brief: "Bring the setup steps, target customer profile and examples of what users typically replace when they adopt your product.",
        question: "Can you help a product with a small customer base?",
        answer: "Yes. A focused launch can start with a narrowly defined buyer and use case, testing the message and early conversion before expanding spend."
      }
    }
  },
  {
    slug: "marketing-automation-agency", name: "Marketing Automation Agency",
    offer: "Connect forms, CRM, follow-up and reporting", related: "lead-generation-agency",
    markets: {
      bangalore: {
        intro: "FyerX helps Bangalore teams connect marketing campaigns to their customer records so good enquiries reach the right owner with enough context for follow-up.",
        heading: "Set rules for trial and enterprise follow-up",
        detail: "An enterprise demo may require account assignment and timely sales outreach. A trial user may benefit from event-based onboarding. We map the two workflows, agree exception handling and test each route with sample records before switching automation on.",
        brief: "Bring your CRM stages, form sources, assignment rules and examples of duplicated or lost leads.",
        question: "Can you improve automation without changing our CRM?",
        answer: "Often, yes. We review native CRM capabilities and available integrations first, then identify where changes to fields, routing or follow-up rules can help."
      },
      chennai: {
        intro: "FyerX helps Chennai teams automate how campaign enquiries are assigned, acknowledged and followed up across their service lines.",
        heading: "Stop leads waiting in shared inboxes",
        detail: "When multiple branches or product teams share one enquiry form, lack of ownership can delay a response. We can map service and territory rules, add an exception queue and report how long it takes for a lead to reach an owner.",
        brief: "Share your entry points, branch or team ownership map, shared inbox process and what should happen when the assigned team is unavailable.",
        question: "Can the automation notify the team that already handles the account?",
        answer: "Yes, when the customer record can be matched reliably. We can add ownership checks and an exception path for unknown or duplicate records."
      },
      coimbatore: {
        intro: "FyerX helps Coimbatore teams connect website forms and campaign responses to the people responsible for quotations and distributor follow-up.",
        heading: "Keep quote requests visible after handover",
        detail: "A request may start with marketing, move to estimating and return to sales for follow-up. We can record that progression, report which requests fall between teams and use reminders that stop once a quote or response is logged.",
        brief: "Share a typical quote journey, including who reviews applications, who approves estimates and which parts currently depend on manual reminders.",
        question: "Can we automate parts of follow-up while keeping technical review manual?",
        answer: "Yes. Assignment, acknowledgements and appropriate reminders can be automated while technical assessment and quotation approval stay with the relevant team."
      }
    }
  }
];

