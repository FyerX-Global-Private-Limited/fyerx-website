import type { LocationService } from "./location-types";

export const talentLocations: LocationService[] = [
  {
    slug: "staffing-agency", name: "IT Staffing Agency",
    offer: "Technology contractors for defined delivery needs", related: "contract-to-hire-staffing", proof: "cloud-devops-staffing",
    markets: {
      bangalore: {
        intro: "FyerX helps Bangalore delivery teams bring in IT contractors for cloud migrations, enterprise platform releases and time-bound product work.",
        heading: "Match contract skills to the release plan",
        detail: "A release programme might need a platform specialist now and QA automation closer to parallel testing. We agree the sequence, screen for hands-on responsibility and check availability, work mode and assignment duration before a candidate is presented.",
        brief: "Share must-have skills, deliverables, rate range, work location and the latest acceptable start date. Flag on-call or cross-time-zone coverage early.",
        question: "Can you source a specialist for a fixed-term project?",
        answer: "Yes. Share the platform, milestone, planned tenure and working arrangement. We can discuss contractor screening and a feasible start window around those constraints."
      },
      chennai: {
        intro: "FyerX helps Chennai teams staff software delivery, production support and enterprise transformation work with contractors matched to the project.",
        heading: "Define shift and on-site requirements early",
        detail: "A support transition can need different availability from a build team. We confirm which shifts, office days and handover windows are required, then screen candidates on relevant incident, deployment or integration work before interview scheduling.",
        brief: "Bring the project plan or support scope, office location, expected coverage and who will assess technical fit.",
        question: "Can you screen for an on-site or hybrid project?",
        answer: "Yes. We use the office location and required attendance pattern as part of screening and confirm that candidates can meet those expectations."
      },
      coimbatore: {
        intro: "FyerX helps Coimbatore teams add contract IT capacity for ERP work, application support, data projects and integrations.",
        heading: "Scope technical work around plant and office access",
        detail: "When an integration touches a plant or warehouse system, the assignment may need site visits for discovery and cutover. We agree which activities need people there, which can be delivered remotely and what experience is required from the contractor.",
        brief: "Bring the platform, integration points, project phase, access requirements and the team the contractor will work with.",
        question: "Can Coimbatore assignments combine on-site and remote work?",
        answer: "Yes, where your delivery model permits it. We confirm the frequency and purpose of site visits and include those expectations in the discussion with candidates."
      }
    }
  },
  {
    slug: "recruitment-company", name: "Permanent Recruitment Company",
    offer: "Permanent technology hiring with a clear role brief", related: "executive-search-firm",
    markets: {
      bangalore: {
        intro: "FyerX helps Bangalore employers hire permanent technology specialists and team leads for positions that need long-term ownership.",
        heading: "Screen for ownership at the right level",
        detail: "A senior engineer who owns architecture decisions needs a different interview from a lead who will mentor a team and coordinate delivery. We clarify the scope, map must-have experience and discuss compensation and notice period before shortlisting.",
        brief: "Bring the reporting line, level, compensation band, must-have decisions the hire will own, and an interview schedule your team can support.",
        question: "Can you help when we are deciding between senior and lead levels?",
        answer: "Yes. We can translate the responsibilities into evidence for screening and agree with your hiring panel where the two levels differ."
      },
      chennai: {
        intro: "FyerX supports permanent hiring in Chennai for employers building enterprise application, engineering and support teams.",
        heading: "Account for technology, location and joining constraints",
        detail: "An enterprise application hire may need both functional and technical experience, with attendance at a particular office. We agree the essential requirements, capture notice periods early and help coordinate interviews and offer follow-up through to joining.",
        brief: "Bring the job description, office location, work arrangement, range and interview stages. Include which experience can be developed after joining.",
        question: "How do you screen candidates for on-site permanent roles?",
        answer: "We confirm the work location and attendance expectations with candidates alongside technical fit and joining availability."
      },
      coimbatore: {
        intro: "FyerX helps Coimbatore employers fill permanent technology roles that sit close to business operations, customer delivery or internal systems.",
        heading: "Define what the hire will own after joining",
        detail: "For an ERP or applications role, the same title can mean helpdesk support, vendor coordination or ownership of configuration and releases. We clarify the responsibilities and check candidate examples against the real job before arranging interviews.",
        brief: "Share the systems in scope, reporting line, required site attendance, handover plan and whether you are open to candidates who need to relocate.",
        question: "Can you consider candidates willing to relocate?",
        answer: "Yes. We can discuss realistic relocation and joining timelines as part of screening so the hiring team can plan accordingly."
      }
    }
  },
  {
    slug: "hr-solutions-agency", name: "HR Solutions & Hiring Advisory",
    offer: "Hiring assessments, screening design and benchmarking", related: "recruitment-company",
    markets: {
      bangalore: {
        intro: "FyerX helps Bangalore hiring teams clarify levels, assess technology candidates consistently and plan how to check role fit before an offer.",
        heading: "Make job levels and interview evidence consistent",
        detail: "Teams hiring similar engineers across functions may use different titles and pay bands. We can help compare the scope, propose an assessment rubric and agree which panelist evaluates architecture, delivery or people leadership.",
        brief: "Bring current job levels, sample interview scorecards and compensation ranges the team already uses.",
        question: "Can we use the advisory service with our own recruiters?",
        answer: "Yes. The deliverable can be a scorecard, interview design or benchmarking brief that your internal team uses."
      },
      chennai: {
        intro: "FyerX helps Chennai teams agree how role requirements, interview assessments and pre-employment checks should be handled across departments.",
        heading: "Resolve gaps between managers and interviewers",
        detail: "When different panels assess similar application support roles, one may prioritise incident response while another focuses on development. We help the team agree common evidence, clarify who owns decisions and document exceptions for specialised roles.",
        brief: "Bring the roles in scope, current assessment process and examples of feedback that led to conflicting hiring decisions.",
        question: "Is background verification available as a separate discussion?",
        answer: "Yes. We can discuss the checks you need, the evidence required and who should own each step before the employment decision."
      },
      coimbatore: {
        intro: "FyerX supports Coimbatore employers reviewing hiring assessments, compensation expectations and role fit for technical and business systems positions.",
        heading: "Set a role benchmark before hiring",
        detail: "When a position spans plant support, ERP and vendor management, salary comparisons need to reflect actual responsibility. We can help define the scope and design interview questions that separate hands-on delivery from coordination experience.",
        brief: "Bring the role scope, internal pay range, similar existing roles and the tasks the successful hire will handle in the first few months.",
        question: "Can we start with one position?",
        answer: "Yes. A single hard-to-hire role can be used to test a clearer brief and assessment process before extending it elsewhere."
      }
    }
  },
  {
    slug: "contract-to-hire-staffing", name: "Contract-to-Hire Staffing",
    offer: "Time-bound assignments with a defined conversion option", related: "staffing-agency",
    markets: {
      bangalore: {
        intro: "FyerX can discuss contract-to-hire engagements for Bangalore teams that need project capacity now and have a possible permanent role later.",
        heading: "Agree the conversion criteria before interviews",
        detail: "If a platform team expects to extend ownership beyond a release, decide whether the permanent role has budget and what performance must be demonstrated. We discuss assignment scope, conversion eligibility and terms up front so candidates understand the engagement.",
        brief: "Share contract length, planned permanent role, who approves conversion and when the decision can realistically be made.",
        question: "Will a contractor definitely become a permanent employee?",
        answer: "Conversion depends on the agreed terms, your hiring decision and the individual’s interest. Discuss the decision window and criteria at the start."
      },
      chennai: {
        intro: "FyerX helps Chennai delivery teams scope contract-to-hire options where a transition or support assignment could become a long-term role.",
        heading: "Define the handover and a fair review point",
        detail: "During a support transition, the contractor may first learn the estate and later take the incident queue. We can help clarify the review milestone, evidence needed for conversion and whether the work pattern will change when a role becomes permanent.",
        brief: "Bring the transition plan, shifts, site requirements, expected contract term and the schedule for any permanent hiring review.",
        question: "Can work hours change at conversion?",
        answer: "They can be discussed as part of the permanent offer. It helps to disclose likely changes early so both sides can evaluate the engagement."
      },
      coimbatore: {
        intro: "FyerX can help Coimbatore teams define an initial project assignment and a possible permanent role for an ERP, applications or integration specialist.",
        heading: "Separate the project deliverable from the eventual job",
        detail: "An initial implementation or automation sprint may be followed by long-term operations ownership. We can capture both scopes in the brief and clarify the decision date so interviews cover project execution and the skills needed if the role continues.",
        brief: "Share the current project phase, what ongoing work may look like and which team would own a permanent hire.",
        question: "Can an assignment end after the initial project?",
        answer: "Yes, when that matches the agreed contract. Conversion is a separate decision, so the initial deliverables and end date should be clear from the beginning."
      }
    }
  },
  {
    slug: "sap-staffing", name: "SAP Staffing",
    offer: "Functional and technical SAP talent for programme milestones", related: "staffing-agency", proof: "sap-s4hana-transformation",
    markets: {
      bangalore: {
        intro: "FyerX helps Bangalore teams staff SAP delivery work across functional, technical and integration roles for transformation and ongoing programmes.",
        heading: "Define the SAP workstream and exact phase",
        detail: "A Finance consultant who led design may have a different profile from one needed for migration reconciliation or hypercare. We record the module, release, project phase and delivery ownership before screening.",
        brief: "Bring the SAP version, modules, workstream dependencies and whether the role owns configuration, development, testing or support.",
        question: "Can one requisition cover functional and technical work?",
        answer: "We can assess the brief and advise whether to search for a hybrid profile or split responsibilities where the delivery evidence is materially different."
      },
      chennai: {
        intro: "FyerX supports Chennai employers and delivery partners seeking SAP talent for implementation, integration, testing and support.",
        heading: "Screen around the handoff between functions",
        detail: "For a migration to S/4HANA, an MM specialist might need to prove how they resolved discrepancies with Finance and warehouse teams. We ask what they configured, how they tested integrations and what they supported during cutover.",
        brief: "Share the process area, integration points, cutover schedule and required office or site attendance.",
        question: "Can you screen SAP candidates for global support coverage?",
        answer: "Yes. Share the support hours, escalation model and module responsibilities so the screening includes both platform fit and availability."
      },
      coimbatore: {
        intro: "FyerX helps Coimbatore businesses source SAP talent where plant, procurement, inventory and finance processes connect.",
        heading: "Make plant process experience explicit",
        detail: "For manufacturing-related SAP roles, ask whether the consultant worked hands-on with the site processes in scope, such as materials movement, production planning or stock reconciliation. We capture expected plant access and cutover responsibilities in the role brief.",
        brief: "Share the plant processes, modules, interfaces, project stage and times when the candidate must be on site.",
        question: "Can you find SAP support for a rollout and later stabilisation?",
        answer: "Yes. We can discuss the skills for rollout and hypercare and whether you need the same consultant through both phases."
      }
    }
  },
  {
    slug: "servicenow-recruitment", name: "ServiceNow Recruitment",
    offer: "ServiceNow roles defined by module and delivery ownership", related: "recruitment-company", proof: "servicenow-implementation",
    markets: {
      bangalore: {
        intro: "FyerX helps Bangalore employers and delivery partners source ServiceNow developers, consultants and platform leads for specific modules and releases.",
        heading: "Distinguish platform build from workflow ownership",
        detail: "An ITSM developer can be strong at configuration while an integration specialist needs evidence of APIs, external systems and release practices. We use the work expected in the first months to identify which experience to screen for.",
        brief: "Share the modules, scope of customisation, integration list and whether the role leads platform design or delivers within an established design.",
        question: "Can you recruit ServiceNow talent beyond ITSM?",
        answer: "Yes. Share your target modules and role scope so we can discuss the required depth, including areas such as ITOM, CMDB or integration."
      },
      chennai: {
        intro: "FyerX helps Chennai teams find ServiceNow talent for service workflows, platform integrations and environments that need ongoing support.",
        heading: "Screen for the processes the platform supports",
        detail: "When the work involves discovery or CMDB, the role may need infrastructure context and experience dealing with data ownership. We clarify certification expectations, hands-on work and what the candidate needs to troubleshoot independently.",
        brief: "Bring use cases, platform modules, team dependencies and any planned changes to the instance or support model.",
        question: "Can you screen for both development and platform support?",
        answer: "Yes. We can agree which development responsibilities, support hours and troubleshooting experience are essential before shortlisting."
      },
      coimbatore: {
        intro: "FyerX helps Coimbatore delivery teams define and fill ServiceNow roles for workflow development, implementation and support.",
        heading: "Turn a broad developer brief into a focused shortlist",
        detail: "A vacancy might combine catalogue items, flow changes and integration work. We can separate mandatory tasks from skills that can be learned and align the interview around a relevant workflow the person has built or supported.",
        brief: "Share the workflows in scope, required independent ownership, preferred work mode and what the team can train after joining.",
        question: "Can you source for an on-site ServiceNow requirement?",
        answer: "Yes. Share the attendance requirements and site location so they can be checked alongside platform experience and availability."
      }
    }
  },
  {
    slug: "salesforce-staffing", name: "Salesforce Staffing",
    offer: "Salesforce talent aligned to cloud, integration and role", related: "staffing-agency", proof: "salesforce-implementation",
    markets: {
      bangalore: {
        intro: "FyerX helps Bangalore delivery teams source Salesforce administrators, developers and specialist consultants for defined programme work.",
        heading: "Identify which decisions a Salesforce specialist owns",
        detail: "A Sales Cloud developer may need Flow, Apex and release experience, while a consultant may need discovery skills and ownership of the operating model. We screen for the relevant delivery evidence and dependencies before introducing candidates.",
        brief: "Bring the Salesforce products, integrations, project stage and whether the candidate will design, build, test or own releases.",
        question: "Can you screen for both Apex and declarative automation?",
        answer: "Yes. We use your org and delivery requirements to agree what hands-on work the candidate needs to demonstrate in each."
      },
      chennai: {
        intro: "FyerX helps Chennai teams source Salesforce talent for implementation, service workflow improvements and ongoing platform support.",
        heading: "Define service operations and integrations",
        detail: "A Service Cloud role might involve routing, entitlements and integrations with other systems. We separate configuration from development and platform operations, then check whether candidates have solved comparable cases.",
        brief: "Share the Salesforce products, service processes, connected systems and any production support coverage.",
        question: "Can you staff a Salesforce support transition?",
        answer: "Yes. We can review the work that must transfer, relevant support experience and the availability required for handover and post-release support."
      },
      coimbatore: {
        intro: "FyerX helps Coimbatore employers and delivery partners source Salesforce professionals who understand sales, quotations and customer workflows.",
        heading: "Screen for the path from lead to order",
        detail: "A CRM that touches pricing or reseller workflows needs people who can translate how the business sells into Salesforce configuration or integrations. We map the responsibilities to the team’s cloud products and the systems that pass data into or out of Salesforce.",
        brief: "Bring your lead, quotation and order flow and describe which steps the role will implement or support.",
        question: "Can you help with a combined Salesforce and ERP integration role?",
        answer: "We can discuss the systems involved, interface design and responsibility boundaries so the search focuses on the experience the project needs."
      }
    }
  },
  {
    slug: "executive-search-firm", name: "Executive Search Firm",
    offer: "Search for leaders with a clear mandate", related: "recruitment-company",
    markets: {
      bangalore: {
        intro: "FyerX supports Bangalore employers preparing to hire technology and delivery leaders whose scope needs more definition than a standard requisition.",
        heading: "Agree the mandate for the first year",
        detail: "A product engineering leader may need to own architecture, managers and delivery predictability. Another may be hired to build a function from scratch. We work with the decision-makers to define success and screen for the scale and decisions the role will require.",
        brief: "Share the reporting line, team size, scope of decision-making, compensation range and first-year outcomes.",
        question: "Can an executive search be handled confidentially?",
        answer: "We can agree what may be disclosed at each stage, who can see candidate information and which people from your organisation join the process."
      },
      chennai: {
        intro: "FyerX supports Chennai employers defining and sourcing leadership roles across technology delivery, enterprise applications and operations.",
        heading: "Set expectations for delivery and stakeholder ownership",
        detail: "A delivery leader may oversee a portfolio and deal with escalations while an applications leader may be responsible for a shared platform. We discuss customer exposure, budget accountability and existing team capability before deciding how to approach the search.",
        brief: "Bring the operating model, reporting line, programme or portfolio responsibilities and the decisions this role should take over.",
        question: "How do you evaluate a leader who has worked in a different industry?",
        answer: "We can compare the scale, operating constraints and stakeholder responsibilities to see which experience transfers and where industry knowledge is essential."
      },
      coimbatore: {
        intro: "FyerX supports Coimbatore employers defining leadership hires where technology, enterprise systems and business operations meet.",
        heading: "Choose a leader who can work across functions",
        detail: "For a technology leader supporting a manufacturing or distribution business, the role may include vendors, internal IT and project adoption at several sites. We agree what the person owns and look for evidence that they can lead change across the relevant teams.",
        brief: "Share the systems portfolio, business sponsors, decision rights, site locations and the change the hire is expected to deliver.",
        question: "Can the search include candidates from outside Coimbatore?",
        answer: "Yes. We can discuss where the position can be recruited from and how office or site attendance affects the relocation conversation."
      }
    }
  },
  {
    slug: "recruitment-process-outsourcing", name: "Recruitment Process Outsourcing",
    offer: "Dedicated recruiting support around an agreed hiring process", related: "recruitment-company",
    markets: {
      bangalore: {
        intro: "FyerX helps Bangalore teams add recruiting capacity when several engineering or enterprise technology roles compete for the same interview and recruiting bandwidth.",
        heading: "Decide which parts of the funnel to hand over",
        detail: "An internal recruiting team may want help with sourcing and screening while retaining offers. We agree ownership, ATS access, stage definitions and a reporting rhythm around the decisions each side can control.",
        brief: "Share hiring volumes by role family, process ownership, panel capacity and existing ATS stages.",
        question: "Can you cover a defined hiring sprint?",
        answer: "Yes. We can agree a scope, duration, ownership split and review point for on-demand support."
      },
      chennai: {
        intro: "FyerX helps Chennai employers manage recurring hiring across teams through coordinated sourcing, screening and interview scheduling.",
        heading: "Make several hiring teams work from one process",
        detail: "When different managers use their own shortlist formats, feedback gets lost and candidates get different expectations. We can align the role intake, define common stages and capture feedback consistently while leaving technical decisions with the interviewers.",
        brief: "Bring sample requisitions, team contacts, interview calendars and the reporting your hiring managers need.",
        question: "Can an internal team retain final hiring decisions?",
        answer: "Yes. Recruiting activities can be delegated while interviews, offer approval and final decisions remain with your employer team."
      },
      coimbatore: {
        intro: "FyerX helps Coimbatore employers build repeatable hiring support when several technical or operations-enabling roles need attention at the same time.",
        heading: "Plan capacity around hiring waves",
        detail: "A systems rollout or business expansion can create different hiring needs before, during and after launch. We align sourcing and interviews to those waves and agree what should be reported about availability, interview feedback and joining risk.",
        brief: "Share the role list, planned start dates, business owners and which positions can be filled in stages.",
        question: "Can this work alongside a small HR team?",
        answer: "Yes. We can agree which tasks FyerX takes on and which decisions and candidate communication your HR team wants to retain."
      }
    }
  },
  {
    slug: "placement-services-agency", name: "Technology Job Placement Support",
    offer: "Find open roles and prepare a clearer application", related: "recruitment-company", careers: true,
    markets: {
      bangalore: {
        intro: "Looking for technology roles in Bangalore? Browse FyerX’s current listings and apply for positions that fit your experience, work mode and joining availability.",
        heading: "Show where you owned the work",
        detail: "For a platform, engineering or data role, use two recent project examples to explain the environment, your responsibility and the change you delivered. Include tools or modules you used directly and check whether the vacancy is permanent or contract before applying.",
        brief: "Update your CV with relevant project ownership, current city, realistic work mode and notice period. Apply via the role listing when it asks for a CV.",
        question: "Does submitting a CV guarantee an interview?",
        answer: "Applications are reviewed against the requirements and whether the vacancy is open. Interview decisions and offers depend on the employer’s process."
      },
      chennai: {
        intro: "Looking for a technology role in Chennai? Use FyerX Careers to check current jobs and review work location, shifts and assignment type before applying.",
        heading: "Check on-site and shift details early",
        detail: "Build, transition and support positions can come with different schedules even when they share a title. Look for office location, days on-site, time-zone coverage and whether interviews require travel before committing to a process.",
        brief: "Put your current location, notice period and realistic work schedule on your application. For support roles, add which incidents, deployments or migration activities you handled.",
        question: "Can I apply when my preferred schedule differs from the listing?",
        answer: "Check the listing for flexibility and mention your availability accurately in the application so the recruiting team can assess the fit."
      },
      coimbatore: {
        intro: "Looking for ERP, software or enterprise technology jobs in Coimbatore? Use FyerX Careers to check available roles and apply where your skills and work preferences match.",
        heading: "Describe the business process you supported",
        detail: "For an ERP, integration or application role, describe the business process you supported, the systems involved and your own responsibilities. If recurring site visits or relocation would affect your decision, mention that once you understand the role.",
        brief: "Prepare a CV with modules or systems, project phases, availability and current location. Use the relevant job listing to apply.",
        question: "What if there are no suitable Coimbatore roles listed?",
        answer: "Check Careers for new listings and consider nearby or remote roles if those work for you. Individual vacancies depend on active client demand."
      }
    }
  }
];

