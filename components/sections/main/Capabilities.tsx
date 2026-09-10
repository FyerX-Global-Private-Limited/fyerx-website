"use client";

import React from "react";
import { PublicImage as Image } from "@/components/ui/PublicImage";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";

interface CapabilityCard {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

const COLUMN_ONE: CapabilityCard[] = [
  {
    image: "/updatedmainpage/section4-1.webp",
    imageAlt: "Onboarding support",
    title: "Onboarding support",
    description: "Structured onboarding to get your engagement set up correctly from day one.",
  },
  {
    image: "/updatedmainpage/section4-2.webp",
    imageAlt: "Dedicated account management",
    title: "Dedicated account management",
    description: "A single point of contact who understands your business and stays with you throughout.",
  },
];

const COLUMN_TWO: CapabilityCard[] = [
  {
    image: "/updatedmainpage/section4-3.webp",
    imageAlt: "Ongoing strategic guidance",
    title: "Ongoing strategic guidance",
    description: "Regular check-ins to keep your engagement aligned with your evolving goals.",
  },
  {
    image: "/updatedmainpage/section4-4.webp",
    imageAlt: "Engagement continuity",
    title: "Engagement continuity",
    description:
      "Proactive follow-through to keep work moving, resolve issues early, and maintain momentum throughout the engagement.",
  },
  {
    image: "/updatedmainpage/section4-5.webp",
    imageAlt: "Tailored engagements",
    title: "Tailored engagements",
    description: "Custom scopes of work for specific needs outside our standard offerings.",
  },
];

const Card: React.FC<CapabilityCard> = ({ image, imageAlt, title, description }) => (
  <article className="rounded-xl bg-white p-4 sm:p-6">
    <div className="relative mb-7 h-12 w-12 overflow-hidden rounded-xl">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="48px"
        className="object-contain object-center"
      />
    </div>
    <h3 className="max-w-none text-[18px] font-normal leading-[1.2] text-gray-900 sm:max-w-[190px] sm:text-[20px] md:text-[22px]">
      {title}
    </h3>
    <p className="mt-4 text-[13.5px] leading-relaxed text-gray-600">{description}</p>
  </article>
);

const Capabilities: React.FC = () => {
  return (
    <section className="home-section w-full bg-white">
      <div className="section-shell section-shell--wide">
        <div className="section-inset rounded-2xl bg-[#F4F4F7] sm:rounded-3xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.35fr] md:gap-12 lg:gap-20">
            <div className="self-start md:sticky md:top-24">
              <h2 className="section-heading max-w-none md:max-w-[420px]">
                Dedicated support <br /> for{" "}
                <span className="brand-gradient-text">lasting success</span>
              </h2>

              <PrimaryCtaLink href="/contact" className="mt-[var(--section-content-gap)]">
                Contact Us
              </PrimaryCtaLink>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              <div className="flex flex-col gap-4 sm:gap-5 lg:pt-28">
                {COLUMN_ONE.map((card) => (
                  <Card key={card.title} {...card} />
                ))}
              </div>
              <div className="flex flex-col gap-5">
                {COLUMN_TWO.map((card) => (
                  <Card key={card.title} {...card} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
