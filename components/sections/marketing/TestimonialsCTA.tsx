"use client";

import React from "react";
import { CONTACT_TEAM_AVATARS } from "@/lib/contact-team-avatars";
import { ContactEnquiryForm } from "@/components/sections/contact/ContactEnquiryForm";
import { TRUSTBAR_LOGOS } from "@/lib/trustbar-logos";
import { MARKETING_HOME } from "@/lib/marketing-home-palette";

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
          className="section-inset rounded-2xl border border-[#FFC900]/30 sm:rounded-[24px]"
          style={{ backgroundColor: `${MARKETING_HOME.primary}14` }}
        >
          <div className="mx-auto flex w-full max-w-[1040px] flex-col gap-6 sm:gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-[var(--section-content-gap)]">
            <div className="flex min-w-0 flex-1 flex-col">
              <h2 className="section-heading max-w-none lg:max-w-[470px]">
                Ready to make marketing move with{" "}
                <span className="marketing-gradient-text">more purpose?</span>
              </h2>

              <p className="section-subheading max-w-none lg:max-w-[400px]">
                Tell us what you are building, fixing, launching, or trying to grow.
                We will come back with a clear next step.
              </p>

              <div className="mt-8 w-full max-w-none lg:max-w-[520px]">
                <p className="text-sm font-medium text-[#676879]">
                  Organisations that have partnered with us
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                  {TRUSTBAR_LOGOS.map((logo) => (
                    <div
                      key={logo.name}
                      className="flex h-14 items-center justify-center rounded-xl border border-[#E6E9EF] bg-white px-3 py-2 sm:h-16 sm:px-4"
                    >
                      {logo.badge ? (
                        <span className="text-center text-xs font-semibold leading-tight text-[#323338] sm:text-sm">
                          {logo.name}
                        </span>
                      ) : (
                        <img
                          src={logo.img}
                          alt={logo.name}
                          className="max-h-7 w-full object-contain sm:max-h-8"
                          loading="lazy"
                          style={
                            logo.scale
                              ? { transform: `scale(${logo.scale})`, transformOrigin: "center" }
                              : undefined
                          }
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative w-full lg:w-[462px] lg:shrink-0">
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
                  formKey="marketing"
                  title="Talk to the FyerX Marketing Team"
                  submitLabel="Contact Us"
                  className="mt-4 flex flex-col gap-3"
                  nameGridClassName="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
