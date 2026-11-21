import Link from "next/link";
import type { CityKey } from "@/data/location-types";
import { candidateLocationNotes } from "@/data/candidate-location-notes";

const opportunities: Record<CityKey, { heading: string; copy: string; checks: string[] }> = {
  bangalore: {
    heading: "Product, platform and delivery roles",
    copy: "A team hiring for a product may ask for direct ownership of a feature, system or release. A delivery role can add client meetings or integration work across several teams. When both sound relevant, read the responsibility and employment type before deciding what to highlight on your application.",
    checks: ["Clarify which office the team uses and which days require attendance.", "Ask which work is owned by the role and which decisions sit with a lead or customer.", "Confirm availability for a planned release, production support or an on-call rotation."]
  },
  chennai: {
    heading: "Build, implementation and support roles",
    copy: "When an opening covers enterprise applications, compare the phase of the work with your experience. A rollout may require testing and knowledge transfer. A support position can involve an agreed shift, rotation and escalation responsibilities. Include examples that are relevant to the stated phase.",
    checks: ["Check whether shift coverage is fixed or rotates.", "Confirm work location and whether training or transition takes place at a different office.", "Prepare examples of incident handling, handover or implementation work when the role asks for them."]
  },
  coimbatore: {
    heading: "Business systems, ERP and integration roles",
    copy: "A technical vacancy may combine application support with work alongside finance, warehouse or plant teams. Look for the business process and systems the role owns. If a position involves more than software delivery, include experience working across systems and operations where it is relevant.",
    checks: ["Confirm whether travel between offices or sites is expected.", "Describe the ERP module, systems and business process you supported.", "Ask which team owns the handover after rollout and whether the role includes ongoing support."]
  }
};

const guide = [
  {
    title: "Compare vacancies with similar titles",
    paragraphs: [
      "Two job listings can use the same title for substantially different jobs. Look at the reporting line, day-to-day responsibilities and required work mode. A senior engineer may own a system independently, while a lead may spend more time on design decisions, delivery coordination or mentoring. A support consultant may need incident experience that does not appear in an implementation role.",
      "Prioritise listings where your recent work covers the essential responsibilities. If a useful but optional skill is missing, say what comparable work you have done and how you would learn the rest. Keep required platform versions and modules factual so the recruiter can match you to the stated need."
    ]
  },
  {
    title: "Make your project experience easy to assess",
    paragraphs: [
      "Start with the project goal, technical environment and your responsibility. Explain the work you personally carried out and how the team reviewed it. Name relevant tools, modules or practices, but connect them to the result so a reader can distinguish hands-on delivery from general exposure.",
      "For a migration, describe the source and target, the portion you owned and how you checked that it was ready. For application support, explain a problem you investigated, how escalation worked and what you did before handing it over. For a leadership role, explain a decision you made and how you worked with the team affected by it."
    ]
  },
  {
    title: "Prepare for a recruiter conversation",
    paragraphs: [
      "Keep your CV, contact details and joining availability current. Think about the locations and hours you can realistically commit to, including whether you can relocate. Confirm whether current commitments affect interview scheduling or a start date, and be ready to discuss the role and pay expectations with a recruiter.",
      "Use the call to clarify material details, including whether the opportunity is permanent or contract, which organisation employs the successful candidate, and how the interview stages work. Ask for the next step and use the route in the listing to submit the information requested."
    ]
  },
  {
    title: "Use the technical interview to test mutual fit",
    paragraphs: [
      "Prepare to discuss one example in depth, including the problem, your trade-offs and how you checked the result. If you worked within someone else’s design, explain the part you owned instead of treating the whole project as your personal work. Give the interview panel enough context to ask a more useful follow-up.",
      "Ask what the team expects someone to accomplish in the first weeks, where the job sits in the wider delivery effort and how changes are approved. For support or contract roles, clarify coverage, assignment duration and handover. Record any important follow-up before comparing opportunities."
    ]
  },
  {
    title: "Review the offer or assignment before deciding",
    paragraphs: [
      "Confirm the responsibilities, work location, start date and engagement model against the details discussed in the interview. If a contract has an end date or a review for possible conversion, ask what is already agreed and what depends on a later decision.",
      "Check that joining commitments fit your existing obligations and availability. Keep a copy of the relevant communication and redirect questions about terms to the party responsible for them. If the listing closes or another candidate is selected, use the careers directory to check for roles that fit your experience and location."
    ]
  }
];

export default function CandidateLocationGuide({ city, careersUrl }: { city: CityKey; careersUrl: string }) {
  const local = opportunities[city];
  return (
    <>
      <section className="home-section">
        <div className="section-shell section-shell--wide">
          <h2 className="section-heading">{local.heading}</h2>
          <p className="section-subheading max-w-3xl">{local.copy}</p>
          <ul className="section-body grid gap-4 md:grid-cols-3">
            {local.checks.map(check => <li key={check} className="rounded-2xl border border-neutral-200 p-5 leading-relaxed">{check}</li>)}
          </ul>
        </div>
      </section>
      {[...candidateLocationNotes[city], ...guide].map(({ title, paragraphs }, i) => (
        <section key={title} className="home-section">
          <div className="section-shell section-shell--wide">
            <div className={i % 2 === 0 ? "rounded-[28px] bg-[#edf6ee] p-6 sm:p-10" : "px-1 sm:px-3"}>
              <h2 className="section-heading section-heading--sm">{title}</h2>
              <div className="mt-4 grid gap-4 text-[#3d4a5c] md:grid-cols-2">
                {paragraphs.map(paragraph => <p key={paragraph} className="leading-relaxed">{paragraph}</p>)}
              </div>
            </div>
          </div>
        </section>
      ))}
      <section className="home-section">
        <div className="section-shell section-shell--wide">
          <div className="rounded-[28px] border border-[#C5E8CA] bg-[#edf6ee] p-6 sm:p-10">
            <h2 className="section-heading section-heading--sm">Find a role you want to apply for</h2>
            <p className="section-subheading max-w-3xl">Review the current FyerX Careers listings for the roles and work locations that suit your experience.</p>
            <Link className="mt-5 inline-block font-semibold underline underline-offset-4" href={careersUrl}>Explore current openings</Link>
          </div>
        </div>
      </section>
    </>
  );
}

