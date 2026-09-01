"use client";

import Image from "next/image";
import { ContactEnquiryForm } from "@/components/sections/contact/ContactEnquiryForm";

export default function TestimonialsCTA() {
  return (
    <section
      id="contact"
      className="home-section home-section--contact bg-white max-sm:relative max-sm:left-1/2 max-sm:w-screen max-sm:max-w-[100vw] max-sm:-translate-x-1/2"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="section-shell section-shell--wide max-sm:max-w-none max-sm:px-3">
        <div
          className="rounded-2xl border border-[#C5E8CA] px-3 py-5 sm:rounded-[24px] sm:px-[clamp(1.25rem,4vw,var(--section-content-gap))] sm:py-[clamp(1.25rem,4vw,var(--section-content-gap))]"
          style={{ backgroundColor: "#11551c14" }}
        >
          <div className="mx-auto flex w-full max-w-[1040px] flex-col gap-5 sm:gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-[var(--section-content-gap)]">
            <div className="flex min-w-0 w-full flex-1 flex-col px-1 text-left sm:px-0">
              <h2 className="section-heading max-w-none lg:max-w-[470px]">
                Need the right people in place{" "}
                <span className="talent-gradient-text">sooner?</span>
              </h2>

              <p className="section-subheading mt-3 max-w-none lg:max-w-[400px]">
                Tell us what you need to hire, build, or deliver. We will help you
                choose the right talent model and next step.
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
                  formKey="talent"
                  title="Talk to the FyerX Talent Team"
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
