import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { PublicImage } from "@/components/ui/PublicImage";

const FEATURES = [
  "A team matched to the work",
  "Clear scope and working rhythm",
  "Flexible ways to engage",
  "Practical recommendations, not sales pressure",
] as const;

function GreenCheck() {
  return (
    <span
      className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22C55E]"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" width={11} height={11} fill="none">
        <path
          d="M5 12.5l4.5 4.5L19 7.5"
          stroke="#ffffff"
          strokeWidth={2.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function EnterpriseSection() {
  return (
    <section className="w-full overflow-x-clip bg-white">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <h2 className="max-w-xl text-[1.85rem] font-semibold leading-[1.12] tracking-tight text-[var(--ink)] sm:text-[2.35rem] lg:text-[2.75rem]">
              Bring us the brief, the bottleneck, or the big question.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#5a5f6b] sm:mt-5 sm:text-base">
              Whether you need a full marketing partner or focused support on one
              priority, we will help you identify a sensible next step.
            </p>

            <ul className="mt-6 flex flex-col items-start gap-2.5 sm:mt-8">
              {FEATURES.map((label) => (
                <li
                  key={label}
                  className="inline-flex w-fit items-center gap-2.5 rounded-full bg-white px-3.5 py-2 text-[13px] font-medium text-[#27272a] shadow-[0_1px_2px_rgba(16,16,20,0.04)] ring-1 ring-[#E6E9EF]"
                >
                  <GreenCheck />
                  <span className="leading-snug">{label}</span>
                </li>
              ))}
            </ul>

            <PrimaryCtaLink
              href="/contact#marketing"
              variant="nav"
              color="#FFDF66"
              textColor="#111111"
              className="mt-7 h-12 text-[15px] sm:mt-8"
              style={{
                padding: "0.8rem 1.75rem",
                boxShadow: "0 10px 28px rgba(255, 201, 0, 0.28)",
              }}
            >
              Talk to Our Team
            </PrimaryCtaLink>
          </div>

          <div className="min-w-0">
            <div className="overflow-hidden rounded-[24px] sm:rounded-[28px]">
              <PublicImage
                src="/marketingpageimages/bigquestions.webp"
                alt="Two colleagues discussing a brief at a whiteboard"
                width={2460}
                height={2144}
                className="h-auto w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
