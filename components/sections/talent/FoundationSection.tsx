"use client";
const CARDS = [
  {
    title: "Screened talent network",
    body: "Every profile is evaluated for role relevance, skill depth, and availability before it reaches you.",
    tags: ["Technical Screening", "Skill Validation", "Role-Fit Assessment"],
    bg: "#E6E0FF",
    titleColor: "#101014",
    bodyColor: "#3d4a5c",
    tagBg: "rgba(255,255,255,0.55)",
    tagBorder: "rgba(124,58,237,0.2)",
    tagColor: "#5b21b6",
    exploreColor: "#5b21b6",
    exploreCircle: "rgba(255,255,255,0.7)",
  },
  {
    title: "Structured hiring process",
    body: "Defined timelines and a single point of contact keep every role moving without surprises.",
    tags: ["Defined Timelines", "Status Updates", "Dedicated Recruiter"],
    bg: "#D8E9FB",
    titleColor: "#101014",
    bodyColor: "#3d4a5c",
    tagBg: "rgba(255,255,255,0.55)",
    tagBorder: "rgba(31,92,153,0.2)",
    tagColor: "#1F5C99",
    exploreColor: "#1F5C99",
    exploreCircle: "rgba(255,255,255,0.7)",
  },
  {
    title: "Compliance-ready staffing",
    body: "Background checks, contracts, and statutory requirements are handled correctly from day one.",
    tags: ["Background Verification", "Contract & Payroll Support", "Statutory Compliance"],
    bg: "#FCE7F3",
    titleColor: "#101014",
    bodyColor: "#3d4a5c",
    tagBg: "rgba(255,255,255,0.55)",
    tagBorder: "rgba(219,39,119,0.2)",
    tagColor: "#be185d",
    exploreColor: "#be185d",
    exploreCircle: "rgba(255,255,255,0.7)",
  },
] as const;

function ExploreLink({ color, circleBg }: { color: string; circleBg: string }) {
  return (
    <span
      className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium"
      style={{ color }}
    >
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-full"
        style={{ backgroundColor: circleBg }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      Explore
    </span>
  );
}

export default function FoundationSection() {
  return (
    <section className="overflow-x-clip bg-white">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title-lg">
            Built on a foundation you can{" "}
            <span className="talent-gradient-text">rely on</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#52525b] sm:text-[17px]">
            The screening, process, and compliance behind every hire we make.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-3 md:gap-5">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="flex min-h-[320px] flex-col rounded-2xl p-6 sm:min-h-[340px] sm:p-7 lg:p-8"
              style={{ backgroundColor: card.bg }}
            >
              <h3
                className="text-xl font-semibold leading-snug sm:text-[1.35rem]"
                style={{ color: card.titleColor }}
              >
                {card.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border px-2.5 py-1 text-[11px] font-medium sm:text-xs"
                    style={{
                      backgroundColor: card.tagBg,
                      borderColor: card.tagBorder,
                      color: card.tagColor,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p
                className="mt-5 flex-1 text-sm leading-relaxed sm:text-[15px]"
                style={{ color: card.bodyColor }}
              >
                {card.body}
              </p>

              <ExploreLink color={card.exploreColor} circleBg={card.exploreCircle} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
