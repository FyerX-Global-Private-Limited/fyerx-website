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
    label: "SaaS & Technology",
    iconSrc: "/images/talent/iconwrap/saas.svg",
  },
  {
    label: "GCCs & Enterprise IT",
    iconSrc: "/images/talent/iconwrap/gccs.svg",
  },
  {
    label: "BFSI",
    iconSrc: "/images/talent/iconwrap/bfsi.svg",
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
    label: "Healthcare & Life Sciences",
    iconSrc: "/images/talent/iconwrap/healthcare.svg",
  },
  {
    label: "Media & Digital Businesses",
    iconSrc: "/images/talent/iconwrap/media.svg",
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
          <p className="section-subheading mx-auto max-w-2xl">
            From enterprise IT to digital-first businesses, we support hiring across sectors
            where specialist talent makes the difference.
          </p>
        </div>

        <div className="section-body mt-8 grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.label}
              className="flex min-w-0 items-center gap-2.5 rounded-xl border border-[#E6E9EF] bg-white px-3 py-3.5 transition-colors hover:border-[#C9CCD4] sm:gap-3 sm:px-4 sm:py-4"
            >
              <span className="relative h-10 w-10 shrink-0 sm:h-11 sm:w-11" aria-hidden="true">
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
