"use client";

import React from "react";

/**
 * TestimonialsCTA — Enterprise CTA section with contact-sales form.
 *
 * Font: Poppins (make sure it is loaded globally, e.g. via next/font/google).
 * Avatar images use remote placeholders — swap the URLs in AVATARS /
 * TESTIMONIAL_AVATAR for your own assets under /public when available.
 */

const AVATARS = [
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/men/85.jpg",
  "https://randomuser.me/api/portraits/men/76.jpg",
];

const TESTIMONIAL_AVATAR = "https://randomuser.me/api/portraits/women/47.jpg";

// Same client roster as TrustBar.tsx, muted grayscale for this darker card background.
const LOGOS = [
  { name: "Adro", img: "/trustbarlogos/trimmed/adro.png" },
  { name: "Ambience", img: "/trustbarlogos/trimmed/ambience.png" },
  { name: "Avekshaa", img: "/trustbarlogos/trimmed/avekshaa.png" },
  { name: "Blummber", img: "/trustbarlogos/trimmed/blummber.png" },
  { name: "Bullsmart", img: "/trustbarlogos/trimmed/bullsmart.png" },
  { name: "Cinepebble", img: "/trustbarlogos/trimmed/cinipebble.png" },
  { name: "Codeus", img: "/trustbarlogos/trimmed/codeus.png" },
  { name: "Digitathya", img: "/trustbarlogos/trimmed/digitathya.png" },
  { name: "Dyashin", img: "/trustbarlogos/trimmed/dyashin.png" },
  { name: "Kaypee Space", img: "/trustbarlogos/trimmed/kaypeespace.png" },
  { name: "Multimedia", img: "/trustbarlogos/trimmed/multimedia.png" },
  { name: "Onroadz", img: "/trustbarlogos/trimmed/onroad.png" },
  { name: "Orihiro", img: "/trustbarlogos/trimmed/orihiro.png" },
  { name: "Saraogi", img: "/trustbarlogos/trimmed/sarogi.png" },
  { name: "Silvercross", img: "/trustbarlogos/trimmed/silvercross.png" },
  { name: "Solv", img: "/trustbarlogos/trimmed/solv.png" },
  { name: "SpinMatch", img: "/trustbarlogos/trimmed/spinmatch.png" },
  { name: "WeGoFin", img: "/trustbarlogos/trimmed/wegofin.png" },
  { name: "Workdays", img: "/trustbarlogos/trimmed/workdays.png" },
  { name: "Zassets", img: "/trustbarlogos/trimmed/zassets.png" },
];

function LogoSet() {
  return (
    <>
      {LOGOS.map((logo) => (
        <span key={logo.name} className="flex shrink-0 items-center">
          <img
            src={logo.img}
            alt={logo.name}
            className="h-6 w-auto max-w-full object-contain grayscale opacity-60"
          />
        </span>
      ))}
    </>
  );
}

const inputBase =
  "w-full h-10 rounded-[8px] border border-[#c3c6d4] bg-white px-3.5 text-[13px] text-[#333333] placeholder-[#676879] outline-none transition-colors duration-150 focus:border-[#6161ff]";

const selectBase =
  "w-full h-10 rounded-[8px] border border-[#c3c6d4] bg-white px-3.5 pr-9 text-[13px] text-[#676879] outline-none appearance-none cursor-pointer transition-colors duration-150 focus:border-[#6161ff]";

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
      <div className="rounded-[24px] bg-[#d9d2f4] px-6 py-16 lg:py-[88px]">
        <div className="mx-auto flex w-full max-w-[1040px] flex-col gap-16 lg:flex-row lg:items-stretch lg:justify-between lg:gap-[120px]">
          {/* ------------------------------ Left column ------------------------------ */}
          <div className="flex min-w-0 flex-1 flex-col">
            <h2 className="max-w-[470px] mt-0 mb-0 text-[46px] font-medium leading-[1.12] tracking-[-0.02em] text-[var(--ink)]">
              Ready to build a stronger team?
            </h2>

            <p className="mt-6 max-w-[400px] text-[18px] font-light leading-[140%] text-[#181b34]">
              Request a callback from our team to talk through the roles
              you're looking to fill.
            </p>

            {/* Spacer pushes logos + testimonial to the bottom of the column */}
            <div className="min-h-[48px] flex-1" />

            {/* Logos strip — infinite scroll loop, pauses on hover */}
            <div className="group w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="animate-marquee flex w-max items-center gap-10 group-hover:[animation-play-state:paused]">
                <div className="flex shrink-0 items-center gap-10">
                  <LogoSet />
                </div>
                <div className="flex shrink-0 items-center gap-10" aria-hidden="true">
                  <LogoSet />
                </div>
              </div>
            </div>

            {/* Testimonial card — placeholder, pending a verified client quote */}
            <div className="mt-7 max-w-[465px] rounded-[8px] border border-[#323338] p-6">
              <p className="text-[14px] leading-[1.5] text-[#181b34]">
                &ldquo;[Insert client quote, 15-25 words]&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-4">
                <img
                  src={TESTIMONIAL_AVATAR}
                  alt="[Client Name]"
                  className="h-[54px] w-[54px] shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="text-[15px] font-semibold leading-[1.4] text-[#181b34]">
                    [Client Name]
                  </p>
                  <p className="text-[14px] leading-[1.4] text-[#181b34]">
                    [Title] | [Company Name]
                  </p>
                </div>
              </div>
            </div>
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

            <div className="w-full rounded-[16px] bg-white px-6 py-7 shadow-[0px_6px_20px_rgba(29,37,45,0.05)] sm:px-9">
              <h3 className="text-center text-[16px] font-semibold text-[#181b34]">
                Contact our talent team
              </h3>

              <form
                className="mt-4 flex flex-col gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-2 gap-3">
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
                <div className="flex h-10 w-full overflow-hidden rounded-[8px] border border-[#c3c6d4] bg-white transition-colors duration-150 focus-within:border-[#6161ff]">
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

                <div className="grid grid-cols-2 gap-3">
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
                  className="h-[88px] w-full resize-none rounded-[8px] border border-[#c3c6d4] bg-white px-3.5 py-2.5 text-[13px] leading-[1.5] text-[#333333] placeholder-[#676879] outline-none transition-colors duration-150 focus:border-[#6161ff]"
                />

                <button
                  type="submit"
                  className="mx-auto mt-3 h-10 w-24 rounded-full bg-[#0B2E59] text-[14px] font-normal text-white transition-colors duration-150 hover:bg-[#092547]"
                >
                  Submit
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
