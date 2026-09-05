"use client";

import Image from "next/image";
import { ContactEnquiryForm } from "@/components/sections/contact/ContactEnquiryForm";
import { TECH_HOME } from "@/lib/technology-home-palette";

export default function TechContactSection() {
  return (
    <section
      id="contact"
      className="home-section home-section--contact scroll-mt-[80px] bg-white max-sm:relative max-sm:left-1/2 max-sm:w-screen max-sm:max-w-[100vw] max-sm:-translate-x-1/2"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="section-shell section-shell--wide max-sm:max-w-none max-sm:px-3">
        <div
          className="rounded-2xl px-3 py-5 sm:rounded-[24px] sm:px-[clamp(1.25rem,4vw,var(--section-content-gap))] sm:py-[clamp(1.25rem,4vw,var(--section-content-gap))]"
          style={{
            backgroundColor: TECH_HOME.soft,
            border: `1px solid ${TECH_HOME.paleAlt}`,
          }}
        >
          <div className="mx-auto flex w-full max-w-[1040px] flex-col gap-5 sm:gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-[var(--section-content-gap)]">
            <div className="flex min-w-0 w-full flex-1 flex-col px-1 text-left sm:px-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#20287A]">
                Let’s talk
              </p>
              <h2 className="section-heading mt-2 max-w-none sm:mt-3 lg:max-w-[470px]">
                Start a{" "}
                <span className="tech-gradient-text">conversation</span>
              </h2>

              <p className="section-subheading mt-3 max-w-none lg:max-w-[400px]">
                Tell us what you are looking to improve, build, modernise or
                manage. We will route your enquiry to the appropriate delivery
                lead.
              </p>
            </div>

            <div className="relative mt-1 w-full min-w-0 shrink-0 sm:mx-auto sm:mt-4 sm:max-w-[462px] lg:mx-0 lg:mt-0 lg:w-[462px] lg:max-w-none">
              <div className="absolute -top-[22px] left-1/2 z-10 -translate-x-1/2">
                <Image
                  src="/images/talent/contactformimg.svg"
                  alt=""
                  width={188}
                  height={44}
                  unoptimized
                  className="h-9 w-auto select-none sm:h-11"
                  draggable={false}
                />
              </div>

              <div className="w-full min-w-0 overflow-hidden rounded-[16px] bg-white px-4 py-5 shadow-[0px_6px_20px_rgba(29,37,45,0.05)] sm:px-9 sm:py-7">
                <ContactEnquiryForm
                  formKey="technology"
                  title="Talk to the FyerX Technology Team"
                  submitLabel="Contact Us"
                  className="mt-4 flex min-w-0 flex-col gap-3"
                  nameGridClassName="grid grid-cols-1 gap-3 sm:grid-cols-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
