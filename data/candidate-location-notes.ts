import type { CityKey } from "./location-types";

type CandidateNote = { title: string; paragraphs: string[] };

export const candidateLocationNotes: Record<CityKey, CandidateNote[]> = {
  bangalore: [
    {
      title: "Check the exact office and work pattern",
      paragraphs: [
        "An office label alone tells you very little about how the team works. Compare the site in the listing with the days attendance is expected and where the team conducts final interviews. If the position can work from more than one site, ask which one applies to the role before discussing your start date.",
        "For release or support work, confirm how often the team needs attendance outside its regular hours. Tell the recruiter if a location, schedule or planned relocation would affect your decision. That gives both sides a chance to resolve the requirement while the interview is still being arranged."
      ]
    },
    {
      title: "Show ownership of a product or platform change",
      paragraphs: [
        "Choose a release you can discuss without disclosing customer or employer information. Describe the requirement, the service or platform affected and the technical decision you made. Then explain how the team evaluated impact before release and what changed after it shipped.",
        "If the role is focused on an engineering platform, show the experience requested, such as build pipelines, monitoring, cloud configuration or a database migration. For a product role, explain how the technical work supported a user or team. Two relevant examples are usually easier to assess than a long list of tools."
      ]
    },
    {
      title: "Compare platform operations with feature delivery",
      paragraphs: [
        "Feature teams and teams that maintain shared platforms often use similar job titles. Review the vacancy for signs that the role owns reliability, internal developer tools or production incident response. A feature team may emphasise user outcomes and release milestones instead.",
        "Ask how responsibilities are split between the product team and operations staff, and whether the role involves on-call work. When preparing an example, pick an incident, improvement or feature that lets you explain the decisions expected in this particular job."
      ]
    },
    {
      title: "Discuss level and scope together",
      paragraphs: [
        "A lead title can involve people management, a difficult technical workstream or both. Ask which decisions the successful candidate will own, whether anyone reports to the role and how hands-on it is expected to be. This makes it easier to compare positions with similar titles.",
        "If you are moving from individual contribution into management, say which planning and mentoring work you have already done. If you want to stay hands-on, find out how the team shares coding and review responsibilities before relying on the title alone."
      ]
    },
    {
      title: "Prepare questions about the assignment and employer",
      paragraphs: [
        "For a contract listing, confirm the project phase, expected assignment duration and organisation responsible for employment or contracting. Understand whether work mode and access requirements are set by the recruiting firm or the end client.",
        "When considering a permanent position, clarify how it fits the team’s longer-term plans and who approves the offer. Both arrangements can suit different goals. Review the written terms and ask for clarification on points that differ from what was discussed in the interview."
      ]
    }
  ],
  chennai: [
    {
      title: "Distinguish implementation from transition and support",
      paragraphs: [
        "Enterprise application roles can be advertised under the same title even when the delivery phase differs. An implementation brief may focus on design, configuration or user testing. A transition role can emphasise knowledge transfer and process documentation. Ongoing support may involve queue ownership and escalation.",
        "Read which phase the position will enter and tailor the project example you prepare. For a transition, describe what information you received, what you documented and when your team became responsible. For an implementation, explain what you configured or tested and how it reached production."
      ]
    },
    {
      title: "Ask about shifts and site attendance before interview",
      paragraphs: [
        "A support role may require fixed or rotating shifts depending on the teams it serves. Confirm the regular schedule, on-site days and any period when handover needs longer overlap. Ask how frequently late coverage is expected and what arrangements apply after transition.",
        "Plan for the location written in the listing rather than assuming every role in the city runs from the same office. If you can work hybrid but cannot regularly travel to a particular site, explain that early so the recruiting team can assess whether the position allows flexibility."
      ]
    },
    {
      title: "Prepare an example of resolving an application issue",
      paragraphs: [
        "Use an example that shows how you ruled out causes rather than simply listing the tools involved. Identify what the business experienced, how the issue was reproduced and which systems or owners you consulted before making a change.",
        "Describe what you did after the immediate fix. A useful follow-up can cover documentation, monitoring or another measure the team used to reduce repeat work. If you were responsible only for investigation or escalation, explain that scope clearly so the panel can ask relevant follow-ups."
      ]
    },
    {
      title: "Clarify how technical and functional work connect",
      paragraphs: [
        "Responsibilities may span both system changes and coordination with people responsible for the underlying process. Check whether the role expects you to design a change, translate a requirement, configure the platform or coordinate approval and testing.",
        "Prepare an example of working across two teams. Explain how you confirmed the requirement, what was agreed about ownership and who signed off before the change went live. That can show a stronger fit than claiming broad responsibility for the whole project."
      ]
    },
    {
      title: "Compare the offer with the advertised work",
      paragraphs: [
        "When you reach the offer or assignment stage, match the work mode, shifts, team and start requirements to the details discussed earlier. If the schedule will change after a handover or initial training period, ask when and what you will be expected to cover.",
        "Confirm the engagement type and who will communicate the written terms. Check that timing works with your notice period and any agreed attendance. If a detail is missing or has changed, raise it with the responsible recruiter or employer before agreeing to a start date."
      ]
    }
  ],
  coimbatore: [
    {
      title: "Understand which site the work supports",
      paragraphs: [
        "A role described as application or ERP support can involve office users, operations teams or periodic work at a plant or warehouse. Look for the named systems and who uses them. Ask whether the team works from one location or visits other sites for discovery, testing or go-live.",
        "If travel or relocation is a factor, confirm the frequency, likely schedule and reasons for attendance. Be clear about what you can commit to and when. Work arrangements for ongoing support can differ from arrangements during a rollout."
      ]
    },
    {
      title: "Describe an ERP process in business terms",
      paragraphs: [
        "A list of module names helps, but it does not explain the part you owned. Describe the business event, how it flowed through the system, and what users or other teams needed from it. Explain the point at which it became your responsibility and which changes required another owner.",
        "Use an example relevant to the vacancy, such as configuration, stock reconciliation, process testing or user support. Add how you checked that a change worked and what you did with exceptions. Keep customer-specific details confidential and focus on the delivery evidence."
      ]
    },
    {
      title: "Explain the handover between systems",
      paragraphs: [
        "An integration role often crosses an ownership boundary. Choose an example where you can explain how information moved from the source to the destination, how errors were identified, and how the teams responsible for each side communicated.",
        "Show what you personally delivered, such as mapping, testing, monitoring or production support. If your work involved a cutover, explain how the team checked that data or transactions transferred correctly. That makes the example useful for implementation and support interviews alike."
      ]
    },
    {
      title: "Decide how close you want to work with operations",
      paragraphs: [
        "Some positions are primarily technical. Others involve training users, supporting an implementation partner or explaining operational constraints to vendors. Read the duties beyond the software names and ask how much time the role spends with business users.",
        "Give a relevant example if you have worked with finance, supply chain or production teams. Explain the decision or action you supported, the inputs you needed and what happened after testing or approval. If your experience is mostly technical, identify which operational responsibilities the team expects you to take on."
      ]
    },
    {
      title: "Compare rollout work with long-term system ownership",
      paragraphs: [
        "In a rollout role, the brief may end at delivery and handover. In a continuing role, the employer may need ongoing configuration, vendor management and support. Confirm whether the current phase is a fixed assignment or part of a broader long-term role.",
        "Ask how implementation and post-launch work are divided, what travel is expected after go-live and who handles escalations. Compare the written scope and employment model to your career plans and realistic availability before proceeding."
      ]
    }
  ]
};

