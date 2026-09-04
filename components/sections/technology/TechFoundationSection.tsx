"use client";

type CardIcon = "clover" | "sparkle" | "flower";

const CARDS = [
  {
    number: "01",
    title: "Business-led discovery",
    body: "We begin with the operating need, users, systems, risks and expected outcome—not a pre-selected platform.",
    tags: ["Business context", "Current-state assessment", "Clear priorities"],
    bg: "linear-gradient(165deg, #EEF0FA 0%, #DCE3F8 42%, #C8D2F5 100%)",
    titleColor: "#101014",
    bodyColor: "#5c5c66",
    tagBg: "#20287A",
    tagColor: "#FFFFFF",
    icon: "clover" as CardIcon,
    iconColor: "#20287A",
  },
  {
    number: "02",
    title: "Architecture that fits",
    body: "Solutions are designed around the existing environment, integration needs, security requirements, budget and future roadmap.",
    tags: ["Solution design", "Integration planning", "Build-versus-buy clarity"],
    bg: "linear-gradient(165deg, #F3F0FF 0%, #E6E0FF 42%, #D4CCF8 100%)",
    titleColor: "#101014",
    bodyColor: "#5c5c66",
    tagBg: "#5B4DB8",
    tagColor: "#FFFFFF",
    icon: "sparkle" as CardIcon,
    iconColor: "#5B4DB8",
  },
  {
    number: "03",
    title: "Delivery beyond go-live",
    body: "We stay involved through implementation, adoption, documentation and agreed support to keep the solution working in practice.",
    tags: ["Delivery governance", "Knowledge transfer", "Continuous improvement"],
    bg: "linear-gradient(165deg, #F0F7FA 0%, #D8EEF4 42%, #C5E8F0 100%)",
    titleColor: "#101014",
    bodyColor: "#5c5c66",
    tagBg: "#2A7A7A",
    tagColor: "#FFFFFF",
    icon: "flower" as CardIcon,
    iconColor: "#2A7A7A",
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
        <circle cx="12" cy="12" r="1.7" fill="#DCE3F8" />
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
      <circle cx="12" cy="12" r="1.8" fill="#D8EEF4" />
    </svg>
  );
}

export default function TechFoundationSection() {
  return (
    <section className="overflow-x-clip bg-white">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#20287A]">
            The FyerX Delivery Model
          </p>
          <h2 className="section-title-lg mt-3">
            Delivery with clear{" "}
            <span className="tech-gradient-text">business ownership</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#52525b] sm:mt-4 sm:text-base sm:text-[17px]">
            We combine business context, solution design and delivery discipline
            so that initiatives remain practical, transparent and aligned to the
            operating need.
          </p>
        </div>

        <div className="mt-6 grid items-stretch gap-3 sm:mt-10 sm:gap-4 lg:mt-14 md:grid-cols-3 md:gap-5">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="relative flex h-full min-h-0 flex-col rounded-2xl p-4 sm:min-h-[280px] sm:p-6 lg:min-h-[320px] lg:p-7"
              style={{ background: card.bg }}
            >
              <span
                className="absolute right-4 top-4 sm:right-6 sm:top-6"
                aria-hidden="true"
              >
                <CardGlyph name={card.icon} color={card.iconColor} />
              </span>

              <p className="text-xs font-semibold tracking-[0.12em] text-[#676879]">
                {card.number}
              </p>

              <h3
                className="mt-3 min-h-0 pr-10 text-lg font-semibold leading-snug sm:mt-6 sm:min-h-[3.6em] sm:pr-12 sm:text-xl lg:text-[1.35rem]"
                style={{ color: card.titleColor }}
              >
                {card.title}
              </h3>

              <p
                className="mt-2 min-h-0 flex-1 text-sm leading-relaxed sm:min-h-[4.5em] sm:text-[15px]"
                style={{ color: card.bodyColor }}
              >
                {card.body}
              </p>

              <div className="mt-auto flex flex-wrap items-center gap-2 pt-4 sm:pt-5">
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
