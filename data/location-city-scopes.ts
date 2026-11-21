import type { Playbook } from "./location-playbooks";
import type { CityKey } from "./location-types";

type CityScope = Pick<Playbook, "work" | "decision" | "delivery">;

export const cityServiceScopes: Partial<Record<string, Record<CityKey, CityScope>>> = {
  "b2b-marketing-agency": {
    bangalore: {
      work: [
        ["Separate technical buyers from commercial sponsors", "Use security, integration and deployment questions to plan material for evaluators. Give budget owners a separate view of rollout effort and the operating problem the product solves."],
        ["Plan around account activity", "Agree which roles matter at each target account. Use that list to decide whether an account needs a technical brief, a product walkthrough or a sales conversation."],
        ["Review accepted meetings with sales", "Record the buyer’s use case and next milestone. Review which campaigns opened qualified conversations that the account owner could advance."],
      ],
      decision: ["Build the evaluation path first", "If buyers already book demos but stall at technical review, start with implementation, security and integration material. Reserve new acquisition spend until the path to evaluation is clear."],
      delivery: ["What sales receives", "An account list with buying roles, approved evaluation messaging, an agreed demo handoff and a shared definition for a sales-accepted meeting."],
    },
    chennai: {
      work: [
        ["Turn operational problems into campaign briefs", "Interview sales and delivery to identify where prospects lose time in support, maintenance or fulfilment. Organise outreach around problems the team can demonstrate."],
        ["Build support for the buying committee", "Give an operational sponsor material they can use with finance and procurement. Show how a pilot would work, which data it needs and how the team would assess it."],
        ["Record progress between sites and teams", "Capture the plant, branch or business unit connected to an enquiry. Assign an owner and review whether the next milestone is a site discussion, a pilot or a commercial quote."],
      ],
      decision: ["Choose one practical entry point", "For a complex offer, start with one operational problem and an achievable evaluation. This lets a prospect test value with their own process before involving additional sites or departments."],
      delivery: ["What the campaign supplies", "A focused offer page, sales material for the internal sponsor and a pipeline view that records site ownership and the next evaluation step."],
    },
    coimbatore: {
      work: [
        ["Build around applications and specifications", "Use product drawings, material constraints and operating conditions to help engineering buyers identify a suitable configuration. Confirm which specifications the sales team can publish."],
        ["Route dealer and direct enquiries", "Ask where a buyer operates and whether they need supply, installation or support. Use the answer to assign the request to an appropriate dealer or account owner."],
        ["Measure enquiries ready for a quotation", "Have sales mark which submissions include enough information to assess feasibility. Review the missing fields or product questions before increasing traffic."],
      ],
      decision: ["Start with the richest product family", "Choose a family with clear applications, usable specification data and a sales owner who can close the loop on quotes. Use that feedback before expanding to adjacent products."],
      delivery: ["What a manufacturer can use", "An application-led landing page, a quotation form with the necessary technical details and a clear routing rule for dealers and direct sales."],
    },
  },
  "ai-marketing-agency": {
    bangalore: {
      work: [
        ["Build a source set for product claims", "Give the workflow approved product documentation, positioning and security statements. Assign an owner to update those sources when features or policies change."],
        ["Review outputs for each audience", "Test drafts for product evaluators, business buyers and sales teams. Have the appropriate reviewer confirm that each version describes the same capabilities accurately."],
        ["Measure edits before scaling", "Track review time and the corrections people make to drafts. Use the findings to decide where AI helps and where product or legal review takes more effort."],
      ],
      decision: ["Start with a bounded content workflow", "A release-note brief or an email draft is easier to review than an entire campaign. Define who approves the output before connecting it to customer-facing tools."],
      delivery: ["What the pilot includes", "A documented source list, an approval step, a sample set of reviewed outputs and criteria for expanding the workflow."],
    },
    chennai: {
      work: [
        ["Choose one repeatable message type", "Start with appointment instructions, service follow-ups or location-specific answers. Collect the wording that teams already use when customers ask for help."],
        ["Validate language and operating details", "If customers use more than one language, send sample messages to the people who take calls. Ask them to check tone, branch hours, eligibility and escalation wording."],
        ["Keep unusual cases with a person", "Set rules for handoff when a request involves a complaint, a refund or an unfamiliar issue. Give staff enough context to respond without asking the customer to repeat the details."],
      ],
      decision: ["Test with one team before rolling out", "Pick a location with a clear response owner and review the messages with staff over a normal service cycle. Correct policy and language mistakes before expanding."],
      delivery: ["What operations can review", "A message library, language review notes, handoff conditions and a short set of test cases for routine and exceptional enquiries."],
    },
    coimbatore: {
      work: [
        ["Organise the source material", "Identify which product sheet, drawing or catalogue revision supports each application claim. Ask product owners to mark which fields require manual approval."],
        ["Produce material for buyers and distributors", "Use the approved information to prepare application summaries or dealer email drafts. Include the technical context buyers need before they request a quote."],
        ["Protect technical review", "Send drafts containing dimensions, tolerances, warranties or certifications to a reviewer. Capture corrections so the source material can be improved."],
      ],
      decision: ["Pilot one product family", "Start with a set of products that already has reliable documentation and a technical reviewer. Compare preparation time and factual corrections before widening the scope."],
      delivery: ["What the product team receives", "A structured product source list, sample buyer and distributor materials, and a review checklist for factual claims."],
    },
  },
  "recruitment-company": {
    bangalore: {
      work: [
        ["Define ownership for the first hire", "Agree which product or platform decisions the hire will own and where they will depend on a founder or lead. Document the split between hands-on delivery and team management."],
        ["Screen for evidence of decisions", "Ask candidates to explain a technical decision they made, the constraints and what happened after launch. Share evidence relevant to the team’s current stage."],
        ["Align the interview panel on level", "Agree how the panel will assess a lead, manager or individual contributor. Confirm compensation, work mode and notice period early enough to identify offer issues."],
      ],
      decision: ["Run separate searches for different jobs", "If the team needs engineering leadership and a hands-on platform specialist, write separate success criteria. A shared job title can obscure differences in the work and the candidate pool."],
      delivery: ["What the hiring team can review", "A role brief with ownership boundaries, screening notes tied to examples, and an agreed sequence for interviews and offer decisions."],
    },
    chennai: {
      work: [
        ["Agree transition and support responsibilities", "Define the systems the hire takes over, the support window and the change or release work expected. Record which responsibilities require office or client-site attendance."],
        ["Screen against realistic service scenarios", "Ask how candidates handled incidents, runbooks or handover material in a comparable role. Record what they owned and how they coordinated with stakeholders."],
        ["Make joining and shift expectations explicit", "Confirm location, shift, travel and handover dates with both parties. Allow time for the hiring team to align on the start and induction plan."],
      ],
      decision: ["Identify the handover window first", "When a permanent hire is taking over an existing system, work back from the end of the outgoing team’s availability. Decide which competencies must already be in place on day one."],
      delivery: ["What the interview panel receives", "A support-oriented role brief, candidate notes on handover and ownership, and a record of work-location and joining requirements."],
    },
    coimbatore: {
      work: [
        ["Locate the work across plant and office", "Record where the hire must meet operations staff and which tasks can be handled remotely. Include deployment or maintenance windows in the role brief."],
        ["Test cross-functional problem solving", "For manufacturing technology roles, ask candidates to explain how a change affected users in production, planning or finance. Evaluate how they checked requirements and documented the outcome."],
        ["Confirm site readiness before the offer", "Discuss practical travel, relocation or attendance expectations while the search is active. Confirm who handles plant access and induction before the joining date."],
      ],
      decision: ["Choose the business process the hire owns", "Decide whether the role leads an implementation, maintains a live system or acts as a bridge with plant users. That gives the panel a basis for judging which experience matters most."],
      delivery: ["What operations and HR receive", "A brief that records site obligations and systems, candidate notes on operational collaboration and a checklist for offer and induction."],
    },
  },
  "hr-solutions-agency": {
    bangalore: {
      work: [
        ["Connect requests to approved headcount", "Give each open role a budget owner and a target start date. Review indefinite requests with the delivery lead before assigning sourcing capacity."],
        ["Set up a shared decision record", "Use a simple scorecard to record evidence for the skills the hiring manager agreed to assess. Assign an owner to resolve conflicting feedback and unblock next steps."],
        ["Check where product-team searches stall", "Distinguish slow approvals, panel gaps, changing role requirements and offer delays. Use the cause to choose what the hiring team needs to change."],
      ],
      decision: ["Pick the stage costing the most time", "If intake changes repeatedly after sourcing starts, improve the intake process first. When the problem is interview availability, agree reserved panel time and separate ownership for scheduling."],
      delivery: ["What a growth team can use", "A hiring intake checklist, clear ownership of review stages and a short report on delays and decisions that need an owner."],
    },
    chennai: {
      work: [
        ["Align hiring with delivery commitments", "List the roles required for transition, shift coverage or new work. Confirm which team owns each requirement and how much overlap it needs for handover."],
        ["Agree a handoff between managers and HR", "Identify who approves the role, who evaluates technical readiness and who confirms work-location and shift conditions. Reflect those steps in the interview sequence."],
        ["Check exceptions before joining", "Document issues such as delayed access, panel availability and an amended start date. Assign one person to communicate each change to the candidate and supervisor."],
      ],
      decision: ["Define a repeatable process for one delivery team", "Test the intake and handoff with a team that has recurring hiring needs. Use its delays and exceptions to refine the process before moving it to another function."],
      delivery: ["What delivery and HR can share", "A decision map, a hiring stage checklist and a handover tracker that identifies support, shift and joining dependencies."],
    },
    coimbatore: {
      work: [
        ["Plan requests around operating schedules", "Work with site and office managers to understand hours, technician availability and induction capacity. Establish which roles have fixed start windows."],
        ["Create evidence-based role scorecards", "Capture the safety, equipment, system or process knowledge the role actually involves. Use examples managers can assess during a structured interview."],
        ["Join up hiring and site induction", "Confirm documents, access and supervisor availability before a person arrives. Ask managers to flag start conditions that vary by facility or team."],
      ],
      decision: ["Separate office and site workflows where needed", "Keep common approvals in one process. Add role-specific checks when the job requires plant access, an operating shift or training before equipment can be used."],
      delivery: ["What multi-site teams can use", "A common role intake and a site-specific joining checklist, with named owners for approvals, candidate decisions and induction."],
    },
  },
};
