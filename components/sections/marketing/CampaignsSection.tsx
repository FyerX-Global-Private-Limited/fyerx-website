import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { PublicImage } from "@/components/ui/PublicImage";
import { MARKETING_HOME } from "@/lib/marketing-home-palette";

export default function CampaignsSection() {
  return (
    <section className="w-full overflow-x-clip bg-white">
      <div className="mx-auto w-full max-w-[1400px]">
        <div
          className="overflow-hidden rounded-[32px] sm:rounded-[40px]"
          style={{ backgroundColor: "#FEF3D7" }}
        >
          <div className="grid items-center md:grid-cols-2">
            <div className="px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#3d4a5c] shadow-[0_1px_2px_rgba(16,16,20,0.04)]">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-[3px]"
                  style={{ backgroundColor: MARKETING_HOME.primary }}
                  aria-hidden="true"
                />
                FyerX Marketing
              </span>

              <h2 className="mt-6 max-w-lg text-[1.85rem] font-semibold leading-[1.12] tracking-tight text-[var(--ink)] sm:mt-8 sm:text-[2.35rem] lg:text-[2.75rem]">
                Marketing should feel less fragmented.
              </h2>

              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#5a5f6b] sm:mt-5 sm:text-base">
                FyerX gives you a team that can think through the bigger picture and
                take responsibility for the work that follows—without losing sight of
                day-to-day delivery.
              </p>

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
                Work with FyerX
              </PrimaryCtaLink>
            </div>

            <div className="px-4 pb-6 sm:px-6 sm:pb-8 md:px-6 md:py-8 md:pr-8">
              <PublicImage
                src="/marketingpageimages/section10.webp"
                alt="Marketer reviewing campaign performance, content calendar, and connected channels"
                width={2356}
                height={1872}
                className="h-auto w-full object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
