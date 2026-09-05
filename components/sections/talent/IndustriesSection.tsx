"use client";

import Image from "next/image";

type Industry = {
  label: string;
  iconSrc: string;
};

const INDUSTRIES: Industry[] = [
  {
    label: "IT Services & Consulting",
    iconSrc: "/updatedtalentimage/section8 (2).webp",
  },
  {
    label: "SaaS & Technology",
    iconSrc: "/updatedtalentimage/section8 (3).webp",
  },
  {
    label: "GCCs & Enterprise IT",
    iconSrc: "/updatedtalentimage/section8 (4).webp",
  },
  {
    label: "BFSI",
    iconSrc: "/updatedtalentimage/section8 (5).webp",
  },
  {
    label: "Retail & E-commerce",
    iconSrc: "/updatedtalentimage/section8 (6).webp",
  },
  {
    label: "Manufacturing & Logistics",
    iconSrc: "/updatedtalentimage/section8 (7).webp",
  },
  {
    label: "Healthcare & Life Sciences",
    iconSrc: "/updatedtalentimage/section8 (8).webp",
  },
  {
    label: "Media & Digital Businesses",
    iconSrc: "/updatedtalentimage/section8 (1).webp",
  },
];

export default function IndustriesSection() {
  return (
    <section className="home-section bg-white">
      <div className="section-shell">
        <div className="section-header section-header--center">
          <h2 className="section-heading">
            Industries We{" "}
            <span className="talent-gradient-text">Serve</span>
          </h2>
          <p className="section-subheading mx-auto max-w-2xl px-1 sm:px-0">
            From enterprise IT to digital-first businesses, we support hiring across sectors
            where specialist talent makes the difference.
          </p>
        </div>

        <div className="section-body mt-5 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.label}
              className="flex min-h-[5.5rem] min-w-0 flex-col items-center justify-center gap-1.5 rounded-xl border border-[#E6E9EF] bg-white px-2 py-2.5 text-center transition-colors hover:border-[#C9CCD4] sm:min-h-0 sm:flex-row sm:items-center sm:justify-start sm:gap-3 sm:px-4 sm:py-4 sm:text-left"
            >
              <span
                className="relative h-8 w-8 shrink-0 sm:h-11 sm:w-11"
                aria-hidden="true"
              >
                <Image
                  src={industry.iconSrc}
                  alt=""
                  fill
                  unoptimized
                  sizes="44px"
                  className="object-contain"
                />
              </span>
              <p className="min-w-0 max-w-[9.5rem] text-[11px] font-medium leading-tight text-[#323338] text-pretty sm:max-w-none sm:text-[0.875rem] sm:leading-snug">
                {industry.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
