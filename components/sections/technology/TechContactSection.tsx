"use client";

import Image from "next/image";
import { ContactEnquiryForm } from "@/components/sections/contact/ContactEnquiryForm";
import { TECH_HOME } from "@/lib/technology-home-palette";

export default function TechContactSection() {
  return (
    <section
      id="contact"
      className="home-section home-section--contact scroll-mt-[80px] bg-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="section-shell section-shell--wide">
        <div
          className="section-inset rounded-2xl sm:rounded-[24px]"
          style={{
            backgroundColor: TECH_HOME.soft,
            border: `1px solid ${TECH_HOME.paleAlt}`,
          }}
        >
          <div className="mx-auto flex w-full max-w-[1040px] flex-col gap-4 sm:gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-[var(--section-content-gap)]">
            <div className="flex min-w-0 flex-1 flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#20287A]">
                Let’s talk
              </p>
              <h2 className="section-heading mt-2 max-w-none sm:mt-3 lg:max-w-[470px]">
                Start a{" "}
                <span className="tech-gradient-text">conversation</span>.
              </h2>

              <p className="section-subheading max-w-none lg:max-w-[400px]">
                Tell us what you are looking to improve, build, modernise or
                manage. We will route your enquiry to the appropriate delivery
                lead.
              </p>
            </div>

            <div className="relative mx-auto mt-5 w-full min-w-0 max-w-[462px] shrink-0 sm:mt-8 lg:mx-0 lg:mt-0 lg:w-[462px]">
              <div className="absolute -top-[20px] left-1/2 z-10 -translate-x-1/2">
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

              <div className="w-full min-w-0 overflow-hidden rounded-[16px] bg-white px-3.5 py-5 shadow-[0px_6px_20px_rgba(29,37,45,0.05)] sm:px-9 sm:py-7">
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
