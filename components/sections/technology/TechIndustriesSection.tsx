"use client";

import Image from "next/image";

type Industry = {
  label: string;
  iconSrc: string;
};

const INDUSTRIES: Industry[] = [
  {
    label: "IT Services & Consulting",
    iconSrc: "/images/talent/iconwrap/it-services.svg",
  },
  {
    label: "SaaS & Technology Products",
    iconSrc: "/images/talent/iconwrap/saas.svg",
  },
  {
    label: "BFSI",
    iconSrc: "/images/talent/iconwrap/bfsi.svg",
  },
  {
    label: "Healthcare & Life Sciences",
    iconSrc: "/images/talent/iconwrap/healthcare.svg",
  },
  {
    label: "Retail & E-commerce",
    iconSrc: "/images/talent/iconwrap/retail.svg",
  },
  {
    label: "Manufacturing & Logistics",
    iconSrc: "/images/talent/iconwrap/manufacturing.svg",
  },
  {
    label: "Media & Digital Businesses",
    iconSrc: "/images/talent/iconwrap/media.svg",
  },
  {
    label: "GCCs & Enterprise IT",
    iconSrc: "/images/talent/iconwrap/gccs.svg",
  },
];

export default function TechIndustriesSection() {
  return (
    <section className="home-section bg-white">
      <div className="section-shell">
        <div className="section-header section-header--center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#20287A]">
            Industries We Serve
          </p>
          <h2 className="section-heading mt-3">
            Delivery shaped by the{" "}
            <span className="tech-gradient-text">operating environment</span>.
          </h2>
          <p className="section-subheading mx-auto max-w-2xl">
            We adapt platforms, delivery models and governance to the systems,
            regulations and operating priorities of each sector.
          </p>
        </div>

        <div className="section-body mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-3 lg:grid-cols-4">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.label}
              className="flex min-w-0 items-center gap-2 rounded-xl border border-[#E6E9EF] bg-white px-2.5 py-2.5 transition-colors hover:border-[#C9CCD4] sm:gap-3 sm:px-4 sm:py-4"
            >
              <span className="relative h-9 w-9 shrink-0 sm:h-11 sm:w-11" aria-hidden="true">
                <Image
                  src={industry.iconSrc}
                  alt=""
                  fill
                  unoptimized
                  sizes="44px"
                  className="object-contain"
                />
              </span>
              <p className="min-w-0 text-[12px] font-medium leading-snug text-[#323338] sm:text-[0.875rem]">
                {industry.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
