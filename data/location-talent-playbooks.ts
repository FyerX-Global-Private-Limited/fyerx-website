import type { Playbook } from "./location-playbooks";

export const talentPlaybooks: Record<string, Playbook> = {
  "staffing-agency": {
    work: [
      ["Contract role intake", "Agree the deliverables, duration, work mode and reporting line. Confirm whether the person joins an existing team, owns a defined workstream or provides cover during a cutover or transition."],
      ["Technical screening and availability", "Ask candidates for examples of work they performed themselves. Check the actual platform responsibilities, joining availability, work arrangement and rate expectations against the agreed brief."],
      ["Interview, onboarding and handover", "Coordinate technical assessment and onboarding with the client. Agree who owns access, induction, escalation and the handover at the end of the assignment."]
    ],
    decision: ["Contract staffing or permanent recruitment?", "Contract staffing fits defined delivery work, temporary gaps and projects with an end or review date. A permanent search makes more sense when the role has continuing ownership and an approved headcount. Define the work before choosing the model."],
    delivery: ["What the handover can include", "A clear requirement, candidate summaries anchored to the skill and availability criteria, interview coordination and agreement on start conditions. Assignment terms and the commercial model are confirmed for the specific engagement."],
    questions: [
      ["Can you support multiple roles on the same programme?", "Yes. We can agree where the skills overlap and plan separate screening for roles with distinct responsibilities."],
      ["Can a contract role require platform migration experience?", "Yes. Tell us the source and target platforms, the project phase and what the candidate must have delivered independently."]
    ],
    scenarios: {
      bangalore: ["A product team staffing a release without expanding headcount", "One contract specialist might support deployment automation before release, while an SRE is required for the monitoring and on-call handover. Brief them separately. Identify the systems where access is needed and agree with engineering which parts each person will own after cutover."],
      chennai: ["A support team taking ownership from a delivery vendor", "During transition, contractors may need to overlap with the outgoing team and cover a particular shift. Check whether they have run comparable incidents, documented fixes and handled escalations. Build the work-location and shift confirmation into screening before sending candidates to the panel."],
      coimbatore: ["An application integration spanning office and plant systems", "Ask which environment is available for remote testing and which activities require site access. A contractor who can support a data cutover may need a different start from a developer writing the interface. Clarify access and handover dates before deciding whether one assignment or two is appropriate."]
    }
  },
  "recruitment-company": {
    work: [
      ["Define the permanent role", "Agree what the new hire owns, what experience is essential and where the team can train. Record the reporting line, compensation range and work arrangement for a realistic search."],
      ["Source and assess relevant experience", "Look at work the candidate has delivered, their decision-making scope and the responsibilities they want next. Match screening to the actual role and share evidence the panel can use."],
      ["Keep the offer and joining process clear", "Agree interview steps, feedback owners and decision timing. Discuss joining availability early and keep the candidate informed once the employer reaches an offer decision."]
    ],
    decision: ["When should you run a permanent search?", "Use a permanent search when the person will own an ongoing product, system, team or business function. If the work is fixed-term or budget is approved for a project only, define the assignment first and assess whether contract staffing is a better fit."],
    delivery: ["What to expect during the search", "An agreed role brief, a shortlist with screening notes, interview coordination and follow-up on offer and joining requirements. The employer owns final assessment, offer terms and the hiring decision."],
    questions: [
      ["Can we run this over several related roles?", "Yes. We can agree a common role framework, then separate the requirements where scope, seniority or technology differs."],
      ["How early should we discuss compensation and notice period?", "Bring the approved compensation range and target start window to the intake. It lets us set realistic expectations before interviews start."]
    ],
    scenarios: {
      bangalore: ["A first engineering lead for a new product team", "Write down which decisions the lead can make, how much they will build and how many engineers they are expected to mentor. Ask candidates to explain a trade-off they owned, then use a separate interview to assess collaboration. That helps when different job titles have hidden differences in scope."],
      chennai: ["A permanent hire for an enterprise application team", "List the modules the person will own, the support rotation and the office days. Decide whether they are expected to lead implementation changes or handle an existing estate. Share those details in screening so the panel can focus on relevant technical examples."],
      coimbatore: ["An internal systems role that has grown beyond support", "Document how much of the role is operations, configuration and vendor coordination. For a role supporting several sites, specify where the person must be and how often. Include those facts in compensation and relocation conversations alongside the long-term scope."]
    }
  },
  "hr-solutions-agency": {
    work: [
      ["Role and compensation review", "Compare job scope and responsibility across teams. Identify titles or expectations that make hiring inconsistent and discuss how to frame a realistic level and compensation range."],
      ["Assessment and interview design", "Convert responsibilities into evidence that interviewers can assess. Decide who owns each criterion and what a relevant example should demonstrate."],
      ["Pre-employment check planning", "Agree which checks are necessary for the role, who can see the information and how exceptions are handled. Keep the hiring decision with the organisation responsible for the role."]
    ],
    decision: ["What problem is the assessment meant to solve?", "If interviewers disagree because the role is vague, start with the brief. If the brief is clear but feedback varies, redesign the evidence and panel ownership. If an offer is held up by checks, agree the scope and review path before the next hire."],
    delivery: ["What a hiring advisory engagement can produce", "An agreed brief, assessment criteria, interview responsibilities and a clear account of data and approvals needed for the agreed checks. A limited pilot can show what to improve before rolling the process out more broadly."],
    questions: [
      ["Can FyerX review our existing assessment?", "Yes. Share the current scorecard and the decision it is meant to support. We can identify overlap, gaps and inconsistent interpretation."],
      ["Can advisory work be separate from a recruiting mandate?", "Yes. We can scope the assessment, benchmarking or verification discussion separately from sourcing."]
    ],
    scenarios: {
      bangalore: ["Two teams using different levels for similar engineering roles", "Compare architecture ownership, production responsibility and mentoring before comparing titles. Use one evidence rubric for work common to both roles and add specific criteria for the differences. Calibrate the existing panels with the same candidate example before introducing a new scorecard."],
      chennai: ["Hiring panels assessing support engineers differently", "When one interviewer prioritises coding and another prioritises incident ownership, decide how much each contributes to the actual job. Give the panel explicit criteria and assign a person to assess each area. Review inconsistent feedback for scope differences before changing the pass threshold."],
      coimbatore: ["Benchmarking a role spanning ERP and plant operations", "Separate technical configuration, site support, vendor ownership and escalation work. Examine the closest internal peers before assuming a common job title reflects the same scope. Use those responsibilities to guide the range and to decide what can be taught after joining."]
    }
  },
  "contract-to-hire-staffing": {
    work: [
      ["Define the initial contract", "Agree assignment length, availability, location and deliverables. Write down what happens if the assignment ends as planned, extends or moves into a permanent role."],
      ["Make conversion terms clear", "Discuss decision timing, approvals and eligibility before interviews. Candidates can then decide whether the initial arrangement and possible longer-term role fit their goals."],
      ["Plan the review before the transition", "Choose the milestone when both sides can evaluate the engagement. Capture evidence about technical work, collaboration and any change in responsibilities after conversion."]
    ],
    decision: ["Is the permanent role approved?", "If the future headcount is uncertain, communicate that clearly. A contract can still serve a real project need, but the initial assignment should stand on its own and a conversion conversation should have defined owners and timing."],
    delivery: ["What to agree before the first interview", "A contract brief, likely permanent role, a review milestone, availability constraints and how the conversion decision will be communicated. A permanent offer remains a separate employer decision."],
    questions: [
      ["Can we set a review date early?", "Yes. Defining the review date and evidence in advance helps the hiring team and the candidate plan for different outcomes."],
      ["What if the project scope changes?", "Revisit the assignment scope and timing with the parties involved. Any change to work arrangements or conversion expectations should be discussed clearly."]
    ],
    scenarios: {
      bangalore: ["A platform contractor who may take long-term ownership", "Start with release deliverables and clarify which production responsibilities the permanent role would add. Decide which lead will review design quality and handover before an offer can be considered. Keep the potential role visible in the brief without presenting it as a commitment."],
      chennai: ["A transition contractor who may join the support team", "Agree who owns knowledge transfer, the point at which the contractor runs the queue and the shift pattern after a possible conversion. Review transition documentation and incident handling at a natural milestone so the hiring decision is based on the work the role will require."],
      coimbatore: ["A project specialist moving into a broader operations role", "The short engagement might support integration testing, while the proposed permanent role adds vendor and site responsibilities. Discuss the difference before screening, including travel and access. Set a review after the agreed project phase so both sides have evidence before considering the move."]
    }
  },
  "sap-staffing": {
    work: [
      ["Map the module and process", "Capture the SAP product and version, business process, functional and technical roles, and any connected systems. Clarify what the consultant needs to configure, develop or support."],
      ["Screen for responsibility at the delivery phase", "Evidence for solution design differs from evidence for testing, migration, cutover and support. Ask for concrete examples of the candidate’s role in the activities that matter for this programme."],
      ["Schedule assignments around programme milestones", "Discuss dependencies with other modules, whether on-site work is necessary and the likely duration. Align interviews and joining expectations to the phase that actually needs support."]
    ],
    decision: ["Should the requirement use one hybrid role or two specialists?", "Review scope, handoffs and time demands first. A hybrid role can work when the person genuinely owns both areas and the workload is manageable. Distinct functional and development responsibilities may be easier to cover with dedicated specialists."],
    delivery: ["What to put in a staffing brief", "Include modules, process ownership, project phase, role scope, work model, integration areas and whether onsite participation is needed for key events. Specify the evidence the project team expects to see at interview."],
    questions: [
      ["Can you source for S/4HANA and existing SAP environments?", "Yes. The version, modules and expected work are useful for separating implementation, upgrade and ongoing support requirements."],
      ["Can we screen for both configuration and cutover?", "Yes. Describe the specific configuration ownership and cutover tasks so each can be assessed rather than relying on a job title."]
    ],
    scenarios: {
      bangalore: ["An S/4HANA finance stream with migration dependencies", "A design consultant might have set the target process while a migration specialist owns reconciliation and validation. Ask candidates where they worked across the phase and which decisions they took. Include the timeline of Finance testing and data handover when planning joins."],
      chennai: ["A procurement workstream linked to warehouse and finance", "Map the interfaces and manual exceptions before sourcing. A relevant functional candidate can explain how a purchase or stock movement flows through the process and where discrepancies are resolved. Include the cutover and support windows when you confirm work arrangements."],
      coimbatore: ["A plant rollout connected to inventory and production planning", "Ask the plant team which transactions require on-site discovery and which can be tested remotely. Include the manufacturing and stock processes that the consultant should know, and specify who signs off on training and cutover. If specialist hypercare is needed, state that in the brief."]
    }
  },
  "servicenow-recruitment": {
    work: [
      ["Specify modules and role boundaries", "List the parts of the instance in scope, what can be configured and where extension or integration work is expected. Identify who owns architecture, implementation and ongoing support."],
      ["Screen for what candidates delivered", "Use examples from real workflow or platform work and ask what the person configured, integrated or supported. Agree when certification is essential and when practical ownership is the stronger signal."],
      ["Coordinate the interviews and start window", "Plan technical assessment around the target module, instance access and release sequence. Confirm the work location and availability expectations before progressing interviews."]
    ],
    decision: ["Developer, consultant or platform lead?", "A developer may own the build, while a consultant can work with service owners to define workflows. A platform lead may own design decisions and release guardrails. Define responsibilities first so the role title does not carry the entire brief."],
    delivery: ["What a focused ServiceNow brief should include", "Modules, workflow issues to solve, affected integrations, work mode and who owns releases. State which configuration, development or design examples the interview team needs to assess."],
    questions: [
      ["Can you work with a narrowly defined module requirement?", "Yes. ServiceNow screening can focus on a specific module and the relevant development, implementation or support responsibility."],
      ["How do you check integration experience?", "We can ask for examples covering the connected systems, the person’s work and how errors, retries or ownership were handled in the workflow."]
    ],
    scenarios: {
      bangalore: ["An ITSM build that also needs an external integration", "Separate the workflow responsibilities from the work that connects another platform. Ask who defined the interface, handled failure cases and owned release coordination. If the core team already has an integration specialist, the developer search can focus on the platform work it genuinely needs."],
      chennai: ["A CMDB and discovery programme with separate infrastructure owners", "Include the inventory sources, approval boundaries and data stewardship in the role brief. Ask candidates how they handled inaccurate or incomplete records and what they needed from infrastructure teams. Confirm how production support and instance governance will be shared."],
      coimbatore: ["A developer joining a delivery partner for catalogue work", "List the items, approvals and integrations the developer is expected to own during the first phase. Identify the capabilities the team will teach after joining. A screening exercise can focus on a comparable workflow and how the candidate tested it before release."]
    }
  },
  "salesforce-staffing": {
    work: [
      ["Clarify the cloud and delivery scope", "Specify the Salesforce products, core workflows and connected systems. Define who owns discovery, configuration, development and release where several roles share responsibility."],
      ["Assess implementation evidence", "Ask how the candidate handled approval flows, data and access, testing or release. Make it clear when declarative work, development or integration experience carries the most weight."],
      ["Align staffing to project and support needs", "Plan around discovery, build or support phases and clarify site or time-zone expectations. Establish who can interview for each platform area before sending a shortlist."]
    ],
    decision: ["Administrator, developer or consultant?", "An administrator can own platform configuration and support. A developer may build functionality and integrations. A consultant often works across business process and solution definition. Choose the responsibilities before fixing the title."],
    delivery: ["What the delivery team can specify", "A role brief with the clouds, process responsibilities, level of technical ownership, current project phase and availability. For support work, include the escalation route and handover expectations."],
    questions: [
      ["Can you support separate business and technical roles?", "Yes. We can brief each role independently and clarify where their responsibilities meet so the project team can evaluate the right evidence."],
      ["Can you source someone for a limited release?", "Yes. Confirm the delivery window, specific platform work and release ownership before we assess candidate availability."]
    ],
    scenarios: {
      bangalore: ["A Sales Cloud release mixing Flow and custom development", "Separate what the org should do declaratively from work that needs Apex or an interface. Ask for examples showing how the candidate chose an approach and checked who would maintain it. Share release timelines early so the staffing plan reflects when those skills are needed."],
      chennai: ["A Service Cloud handover to a production team", "The role may involve routing and entitlements as well as the discipline to document changes. Ask candidates what they owned during a support transition and how they diagnosed issues without disrupting service. Include the site or shift pattern in the initial conversation."],
      coimbatore: ["A CRM connected to quotations and order processing", "Draw the path from sales enquiry to order and identify where the CRM exchanges data with another system. Agree which side the new role owns and the kind of API or workflow issues they will troubleshoot. Use those examples to guide technical screening."]
    }
  },
  "executive-search-firm": {
    work: [
      ["Define a leadership mandate", "Agree the decisions the leader will own, scope of the team, relationships to other functions and what should change in the first year. Record what can be shared at each stage."],
      ["Identify relevant leadership experience", "Assess candidates on the scale and environment of work they led, the outcomes they were accountable for and how they made decisions. Agree which operating experience can transfer across sectors."],
      ["Coordinate an aligned interview process", "Schedule discussions with the relevant decision-makers. Clarify what each stage should assess and maintain a clear process for managing candidate information and discussions."]
    ],
    decision: ["When is executive search appropriate?", "Use it when the mandate is consequential, the pool is narrow or confidentiality matters. If the decision-makers have different expectations of the role, resolve the mandate first so the search can be evaluated against a common brief."],
    delivery: ["What to agree in a search kickoff", "A leadership mandate, first-year priorities, compensation guidance, market or experience constraints and how to manage confidential information. Decide how the employer will assess the shortlist and who owns the final call."],
    questions: [
      ["Can we scope a market mapping step first?", "Yes. A defined first step can help clarify relevant experience and the likely reach of the search before progressing to candidate discussions."],
      ["Who runs final assessments and offers?", "Your organisation owns final decisions and offer terms. We can coordinate the search, manage communication and share relevant evidence from screening."]
    ],
    scenarios: {
      bangalore: ["A product company choosing between a builder and a scale-up leader", "Set out whether the person will hire the first managers, improve delivery across several teams or both. Review examples of budget, architecture and people decisions at a comparable stage. Agree with founders which responsibilities can be learned after joining and which need immediate ownership."],
      chennai: ["A delivery leadership hire for a multi-client portfolio", "Map the programme responsibilities, commercial exposure and escalation boundaries. Ask for examples of how candidates managed delivery quality without losing sight of customer relationships. Be clear about travel, time zones and site expectations that affect the actual role."],
      coimbatore: ["A technology leader accountable to operations and finance", "Define which systems the leader owns and which decisions remain with business sponsors. Discuss the needed experience with vendors, adoption at different sites and budget prioritisation. A mandate with clear boundaries makes it easier to evaluate leaders who come from different industries."]
    }
  },
  "recruitment-process-outsourcing": {
    work: [
      ["Map roles and ownership", "Review which recruiting steps are backlogged, who approves roles and what the internal team needs to retain. Define a workable ownership split and the access required for delivery."],
      ["Set up a common workflow", "Agree requirement intake, shortlist format, candidate communication and interview scheduling. Use the existing hiring system where it supports the agreed process."],
      ["Review quality and capacity together", "Report what is entering each stage, where decisions stall and which roles face the most constraints. Use the review to change hiring priorities, sourcing and interview availability when needed."]
    ],
    decision: ["RPO or a one-off recruitment mandate?", "A one-off search can suit an individual role. RPO can help when the work repeats across teams or hiring waves and a consistent process needs capacity. Pick a starting scope and define which decisions the employer will retain."],
    delivery: ["What to agree before the team starts", "Specify role volume, required recruiting activities, review rhythm, reporting definitions and system access. Clarify who owns interview feedback, candidate updates, offers and process changes."],
    questions: [
      ["Can we start with two teams and add more later?", "Yes. A limited scope can prove the intake and reporting model before a larger rollout."],
      ["Can the service operate in our current ATS?", "Where practical, yes. We can agree the workflow, access and stage definitions around the system you already use."]
    ],
    scenarios: {
      bangalore: ["Engineering roles exceeding the internal panel’s capacity", "Group positions by skill and start window. Agree what can be screened before panel time is booked, and ask hiring teams to set feedback windows. A weekly review can distinguish a shortage of relevant candidates from a shortage of technical interview time."],
      chennai: ["Recruiting teams with different handoffs and interview formats", "Pick a common intake for recurring roles and retain exceptions for highly specialised searches. Define ownership of hiring manager feedback and candidate updates. Track how long each stage takes and where approvals stall before changing recruiting volume."],
      coimbatore: ["Several hiring phases around a systems rollout", "Put discovery, implementation and support positions into separate waves. Identify decisions or dependencies that can move the start dates. Set a regular review with HR and delivery owners so recruiting capacity can move to the roles that are actually cleared to hire."]
    }
  },
  "placement-services-agency": {
    work: [
      ["Read the vacancy carefully", "Check the city, work mode, required experience, engagement type and likely joining window. Use the role description to decide whether the work actually matches your experience and plans."],
      ["Prepare evidence for the role", "Describe two relevant projects with the system or environment, your individual responsibility and a concrete result. Mention enough detail for a recruiter or panel to understand the scope."],
      ["Apply through the right channel", "Use the link on the relevant careers listing and provide the information it requests. Keep your availability, contact details and preferred work arrangement current so the team can follow up if there is a fit."]
    ],
    decision: ["Contract or permanent work?", "Check which model the employer has advertised and clarify the expected duration and working arrangement. Choose based on the actual scope, terms and your plans. A contract and a permanent offer are different processes."],
    delivery: ["What to prepare before an interview", "Have a clear explanation of your role on relevant projects, the work you did independently, your notice period and your current location. Ask the recruiter about anything in the role description that affects your ability to join."],
    questions: [
      ["Where can I check current listings?", "Use FyerX Careers to see the roles that are currently listed and apply through the instructions on the selected vacancy."],
      ["Is this a list of guaranteed openings?", "Listings reflect current hiring activity and may change as requirements close. An application does not guarantee selection or an offer."]
    ],
    scenarios: {
      bangalore: ["Applying for a platform engineering position", "Choose a recent release or migration you worked on and explain which part you owned, which teams you coordinated with and how you checked the change in production. State on-site availability and any on-call constraints. A precise application is easier to match to the work described."],
      chennai: ["Comparing a build position with a support vacancy", "Read the responsibilities to see whether the role needs feature delivery, transition or incident coverage. A similar title may refer to a different shift or workplace. Highlight your relevant delivery or support evidence and give realistic joining availability."],
      coimbatore: ["Applying for an ERP or integration role", "Describe the business process you supported, the modules you used and where your work began and ended. If the role involves a plant or branch, check how often you would need to visit. Note the locations you can reasonably reach or whether you would relocate."]
    }
  }
};

