"use client";

import React from "react";
import { CONTACT_TEAM_AVATARS } from "@/lib/contact-team-avatars";
import { ContactEnquiryForm } from "@/components/sections/contact/ContactEnquiryForm";

const AVATARS = CONTACT_TEAM_AVATARS.map((avatar) => avatar.src);

export default function TestimonialsCTA() {
  return (
    <section
      id="contact"
      className="home-section home-section--contact bg-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="section-shell section-shell--wide">
        <div
          className="section-inset rounded-2xl border border-[#C5E8CA] sm:rounded-[24px]"
          style={{ backgroundColor: "#11551c14" }}
        >
          <div className="mx-auto flex w-full max-w-[1040px] flex-col gap-6 sm:gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-[var(--section-content-gap)]">
            <div className="flex min-w-0 flex-1 flex-col">
              <h2 className="section-heading max-w-none lg:max-w-[470px]">
                Need the right people in place{" "}
                <span className="talent-gradient-text">sooner?</span>
              </h2>

              <p className="section-subheading max-w-none lg:max-w-[400px]">
                Tell us what you need to hire, build, or deliver. We will help you
                choose the right talent model and next step.
              </p>
            </div>

            <div className="relative mt-8 w-full sm:mt-10 lg:mt-0 lg:w-[462px] lg:shrink-0">
              <div className="absolute -top-[22px] left-1/2 z-10 flex -translate-x-1/2 -space-x-[6px]">
                {AVATARS.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-[#0f0f10] object-cover"
                    style={{ zIndex: AVATARS.length - i }}
                  />
                ))}
              </div>

              <div className="w-full rounded-[16px] bg-white px-4 py-6 shadow-[0px_6px_20px_rgba(29,37,45,0.05)] sm:px-9 sm:py-7">
                <ContactEnquiryForm
                  formKey="talent"
                  title="Talk to the FyerX Talent Team"
                  submitLabel="Contact Us"
                  className="mt-4 flex flex-col gap-3"
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
