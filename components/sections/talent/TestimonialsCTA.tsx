"use client";

import React from "react";

/**
 * TestimonialsCTA — Enterprise CTA section with contact-sales form.
 *
 * Font: Poppins (make sure it is loaded globally, e.g. via next/font/google).
 * Avatar images use remote placeholders — swap the URLs in AVATARS for your
 * own assets under /public when available.
 */

const AVATARS = [
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/men/85.jpg",
  "https://randomuser.me/api/portraits/men/76.jpg",
];

const inputBase =
  "w-full h-10 rounded-[8px] border border-[#c3c6d4] bg-white px-3.5 text-[13px] text-[#333333] placeholder-[#676879] outline-none transition-colors duration-150 focus:border-[#11551C]";

const selectBase =
  "w-full h-10 rounded-[8px] border border-[#c3c6d4] bg-white px-3.5 pr-9 text-[13px] text-[#676879] outline-none appearance-none cursor-pointer transition-colors duration-150 focus:border-[#11551C]";

function Caret({ className }: { className?: string }) {
  return (
    <svg
      className={
        className ??
        "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#676879]"
      }
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TestimonialsCTA() {
  return (
    <section
      className="bg-white px-4 pb-2 sm:px-8 lg:px-[6%]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="rounded-[20px] bg-[#11551c26] px-4 py-10 sm:rounded-[24px] sm:px-6 sm:py-16 lg:py-[88px]">
        <div className="mx-auto flex w-full max-w-[1040px] flex-col gap-10 sm:gap-16 lg:flex-row lg:items-stretch lg:justify-between lg:gap-[120px]">
          {/* ------------------------------ Left column ------------------------------ */}
          <div className="flex min-w-0 flex-1 flex-col">
            <h2 className="section-heading max-w-none lg:max-w-[470px]">
              Need the right people in place{" "}
              <span className="brand-gradient-text">sooner?</span>
            </h2>

            <p className="section-subheading max-w-none lg:max-w-[400px]">
              Tell us what you need to hire, build, or deliver. We will help you
              choose the right talent model and next step.
            </p>
          </div>

          {/* --------------------------- Right column (form) --------------------------- */}
          <div className="relative w-full lg:w-[462px] lg:shrink-0">
            {/* Overlapping avatars */}
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
              <h3 className="text-center text-[16px] font-semibold text-[#181b34]">
                Talk to the FyerX Talent Team
              </h3>

              <form
                className="mt-4 flex flex-col gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name*"
                    required
                    className={inputBase}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name*"
                    required
                    className={inputBase}
                  />
                </div>

                <input
                  type="email"
                  name="workEmail"
                  placeholder="Work email*"
                  required
                  className={inputBase}
                />

                <input
                  type="text"
                  name="jobTitle"
                  placeholder="Job title"
                  className={inputBase}
                />

                {/* Phone with country code */}
                <div className="flex h-10 w-full overflow-hidden rounded-[8px] border border-[#c3c6d4] bg-white transition-colors duration-150 focus-within:border-[#11551C]">
                  <button
                    type="button"
                    className="flex h-full w-11 shrink-0 items-center justify-center gap-[3px] border-r border-[#c3c6d4] bg-white"
                    aria-label="Select country code"
                  >
                    <img
                      src="https://flagcdn.com/w20/in.png"
                      alt="India"
                      className="h-3 w-[18px] object-cover"
                    />
                    <svg
                      className="h-2.5 w-2.5 text-[#676879]"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91"
                    className="h-full w-full border-0 bg-white px-3.5 text-[13px] text-[#333333] placeholder-[#676879] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2">
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company name*"
                    required
                    className={inputBase}
                  />
                  <div className="relative">
                    <select
                      name="companySize"
                      required
                      defaultValue=""
                      className={selectBase}
                    >
                      <option value="" disabled>
                        Company size*
                      </option>
                      <option value="1-19">1-19</option>
                      <option value="20-49">20-49</option>
                      <option value="50-99">50-99</option>
                      <option value="100-250">100-250</option>
                      <option value="251-1500">251-1500</option>
                      <option value="1500+">1500+</option>
                    </select>
                    <Caret />
                  </div>
                </div>

                <div className="relative">
                  <select
                    name="rolesToFill"
                    required
                    defaultValue=""
                    className={selectBase}
                  >
                    <option value="" disabled>
                      What roles are you looking to fill?*
                    </option>
                    <option value="contract-staffing">Contract Staffing</option>
                    <option value="rpo">RPO</option>
                    <option value="permanent-executive">
                      Permanent Hiring &amp; Executive Search
                    </option>
                    <option value="it-tech-talent">IT &amp; Tech Talent</option>
                    <option value="hr-advisory">HR Advisory</option>
                    <option value="global-staffing">Global Staffing</option>
                    <option value="other">Other</option>
                  </select>
                  <Caret />
                </div>

                <textarea
                  name="message"
                  placeholder="Tell us more about your hiring needs"
                  className="h-[88px] w-full resize-none rounded-[8px] border border-[#c3c6d4] bg-white px-3.5 py-2.5 text-[13px] leading-[1.5] text-[#333333] placeholder-[#676879] outline-none transition-colors duration-150 focus:border-[#11551C]"
                />

                <button
                  type="submit"
                  className="mx-auto mt-3 h-10 w-[225px] rounded-full bg-[#11551C] text-[14px] font-normal text-[#9EEBAA] transition-colors duration-150 hover:bg-[#0d4216]"
                >
                  Submit Hiring Requirement
                </button>

                <p className="mx-auto mt-1.5 max-w-[300px] text-center text-[10.5px] leading-[1.6] text-[#333333]">
                  By submitting this form, you accept FyerX&rsquo;s{" "}
                  <a href="/privacy-policy" className="underline">
                    Privacy Policy
                  </a>{" "}
                  and consent to be contacted regarding your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
