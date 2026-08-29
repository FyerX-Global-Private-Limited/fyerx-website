"use client";

type CardIcon = "clover" | "sparkle" | "flower";

const CARDS = [
  {
    title: "Screened talent network",
    body: "Every profile is evaluated for role relevance, skill depth, and availability before it reaches you.",
    tags: ["Technical Screening", "Skill Validation", "Role-Fit Assessment"],
    bg: "linear-gradient(165deg, #FFF5F8 0%, #FFE4EC 42%, #FFD6E5 100%)",
    titleColor: "#101014",
    bodyColor: "#5c5c66",
    tagBg: "#E84A7F",
    tagColor: "#FFFFFF",
    icon: "clover" as CardIcon,
    iconColor: "#C2185B",
  },
  {
    title: "Structured hiring process",
    body: "Defined timelines and a single point of contact keep every role moving without surprises.",
    tags: ["Defined Timelines", "Status Updates", "Dedicated Recruiter"],
    bg: "linear-gradient(165deg, #FFFCF2 0%, #FFF6D6 42%, #FFE9A8 100%)",
    titleColor: "#101014",
    bodyColor: "#5c5c66",
    tagBg: "#C9A227",
    tagColor: "#FFFFFF",
    icon: "sparkle" as CardIcon,
    iconColor: "#C9A227",
  },
  {
    title: "Compliance-ready staffing",
    body: "Background checks, contracts, and statutory requirements are handled correctly from day one.",
    tags: ["Background Verification", "Contract", "Statutory Compliance"],
    bg: "linear-gradient(165deg, #F3FBF5 0%, #DDF7E3 42%, #C5F0D0 100%)",
    titleColor: "#101014",
    bodyColor: "#5c5c66",
    tagBg: "#2E9B4E",
    tagColor: "#FFFFFF",
    icon: "flower" as CardIcon,
    iconColor: "#1B7A3A",
  },
] as const;

function CardGlyph({ name, color }: { name: CardIcon; color: string }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": true as const,
  };

  if (name === "clover") {
    return (
      <svg {...common}>
        <circle cx="12" cy="6.2" r="3.5" />
        <circle cx="6.2" cy="12" r="3.5" />
        <circle cx="17.8" cy="12" r="3.5" />
        <circle cx="12" cy="17.8" r="3.5" />
        <circle cx="12" cy="12" r="1.7" fill="#FFE4EC" />
      </svg>
    );
  }

  if (name === "sparkle") {
    return (
      <svg {...common}>
        <path d="M12 2.2c.4 3.6 2.2 5.4 5.8 5.8-3.6.4-5.4 2.2-5.8 5.8-.4-3.6-2.2-5.4-5.8-5.8 3.6-.4 5.4-2.2 5.8-5.8Z" />
        <path d="M18.5 14.5c.22 1.85 1.15 2.78 3 3-1.85.22-2.78 1.15-3 3-.22-1.85-1.15-2.78-3-3 1.85-.22 2.78-1.15 3-3Z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="5.2" r="2.5" />
      <circle cx="12" cy="18.8" r="2.5" />
      <circle cx="5.2" cy="12" r="2.5" />
      <circle cx="18.8" cy="12" r="2.5" />
      <circle cx="7.1" cy="7.1" r="2.1" />
      <circle cx="16.9" cy="7.1" r="2.1" />
      <circle cx="7.1" cy="16.9" r="2.1" />
      <circle cx="16.9" cy="16.9" r="2.1" />
      <circle cx="12" cy="12" r="1.8" fill="#DDF7E3" />
    </svg>
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

        <div className="mt-10 grid items-stretch gap-4 sm:mt-14 md:grid-cols-3 md:gap-5">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="relative flex h-full min-h-[300px] flex-col rounded-2xl p-5 sm:min-h-[320px] sm:p-6 lg:p-7"
              style={{ background: card.bg }}
            >
              <span
                className="absolute right-5 top-5 sm:right-6 sm:top-6"
                aria-hidden="true"
              >
                <CardGlyph name={card.icon} color={card.iconColor} />
              </span>

              <h3
                className="mt-8 min-h-[3.6em] pr-12 text-xl font-semibold leading-snug sm:mt-10 sm:text-[1.35rem]"
                style={{ color: card.titleColor }}
              >
                {card.title}
              </h3>

              <p
                className="mt-2 min-h-[4.5em] flex-1 text-sm leading-relaxed sm:text-[15px]"
                style={{ color: card.bodyColor }}
              >
                {card.body}
              </p>

              <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full px-3 py-1.5 text-[11px] font-semibold leading-none sm:text-xs"
                    style={{
                      backgroundColor: card.tagBg,
                      color: card.tagColor,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
