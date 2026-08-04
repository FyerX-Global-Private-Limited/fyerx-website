"use client";

import React from "react";
import { useRouter } from "next/navigation";

/**
 * TestimonialsCTA — Enterprise CTA section with contact-sales form.
 * Avatar images use remote placeholders — swap the URLs in AVATARS
 * for your own assets under /public when available.
 */

const AVATARS = [
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/men/85.jpg",
  "https://randomuser.me/api/portraits/men/76.jpg",
];

const WHAT_HAPPENS_NEXT = [
  {
    step: "01",
    title: "We review your enquiry",
    description: "Your requirement is directed to the appropriate FyerX team.",
  },
  {
    step: "02",
    title: "We understand the context",
    description: "A relevant team member connects to understand the business need.",
  },
  {
    step: "03",
    title: "We define the next step",
    description: "You receive a clear recommendation on how to proceed.",
  },
] as const;

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
  const router = useRouter();

  return (
    <section
      className="bg-white px-4 pb-2 sm:px-8 lg:px-[6%]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="rounded-[24px] bg-[#ab05491a] px-6 py-16 lg:py-[88px]">
        <div className="mx-auto flex w-full max-w-[1040px] flex-col gap-16 lg:flex-row lg:items-stretch lg:justify-between lg:gap-[120px]">
          {/* ------------------------------ Left column ------------------------------ */}
          <div className="flex min-w-0 flex-1 flex-col">
            <h2 className="max-w-[470px] mt-0 mb-0 font-[family-name:var(--font-poppins)] text-[36px] font-medium leading-[1.25] tracking-[-0.02em] text-[var(--ink)]">
              Ready to see what FyerX can do for{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #730031 0%, #CC0057 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                }}
              >
                your business?
              </span>
            </h2>

            <p className="mt-6 max-w-[400px] text-[18px] font-light leading-[140%] text-[#181b34]">
              Share your goals with our team to explore the right approach and
              pricing for your business.
            </p>

            {/* Spacer pushes logos + testimonial to the bottom of the column */}
            <div className="min-h-[48px] flex-1" />

            {/* Logos strip — infinite scroll loop, pauses on hover */}
            <div className="group w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="animate-marquee flex w-max items-center gap-x-8 sm:gap-x-10 lg:gap-x-12 group-hover:[animation-play-state:paused]">
                {[...LOGOS, ...LOGOS].map((logo, i) => (
                  <div
                    key={`${logo.name}-${i}`}
                    className="flex h-4 w-[88px] shrink-0 items-center justify-center px-2 sm:h-5 sm:w-[96px] lg:h-5 lg:w-[104px]"
                  >
                    <img
                      src={logo.img}
                      alt={logo.name}
                      className="h-full w-full object-contain opacity-45 grayscale"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* What happens next */}
            <div className="mt-7 max-w-[465px] rounded-[8px] border border-[#323338] p-6">
              <h3 className="text-[15px] font-semibold leading-[1.4] text-[#181b34]">
                What happens next
              </h3>
              <ol className="mt-5 flex flex-col gap-5">
                {WHAT_HAPPENS_NEXT.map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="shrink-0 text-[13px] font-semibold tabular-nums text-[#730031]">
                      {item.step}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[14px] font-semibold leading-[1.4] text-[#181b34]">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[14px] leading-[1.5] text-[#181b34]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
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
                Contact our team
              </h3>

              <form
                className="mt-4 flex flex-col gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  router.push("/contact/thankyou-home");
                }}
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
                    placeholder="Phone number*"
                    required
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
                      defaultValue=""
                      className={selectBase}
                    >
                      <option value="" disabled>
                        Company size
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
                    name="helpWith"
                    required
                    defaultValue=""
                    className={selectBase}
                  >
                    <option value="" disabled>
                      What can we help with?*
                    </option>
                    <option value="marketing">Marketing</option>
                    <option value="talent-staffing">Talent &amp; Staffing</option>
                    <option value="technology">Technology</option>
                    <option value="learning-training">Learning &amp; Training</option>
                    <option value="general">General Business Enquiry</option>
                    <option value="other">Other</option>
                  </select>
                  <Caret />
                </div>

                <div className="relative">
                  <select
                    name="priority"
                    required
                    defaultValue=""
                    className={selectBase}
                  >
                    <option value="" disabled>
                      What is your priority?*
                    </option>
                    <option value="generate-demand">Generate demand</option>
                    <option value="build-brand">Build a brand</option>
                    <option value="hire-talent">Hire talent</option>
                    <option value="modernise-technology">Modernise technology</option>
                    <option value="digital-product">Build a digital product</option>
                    <option value="upskill-team">Upskill a team</option>
                    <option value="partnership">Explore a partnership</option>
                    <option value="other">Other</option>
                  </select>
                  <Caret />
                </div>

                <textarea
                  name="message"
                  placeholder="Tell us more about your goals, timeline, or anything else that would help us prepare for the conversation."
                  className="h-[88px] w-full resize-none rounded-[8px] border border-[#c3c6d4] bg-white px-3.5 py-2.5 text-[13px] leading-[1.5] text-[#333333] placeholder-[#676879] outline-none transition-colors duration-150 focus:border-[#6161ff]"
                />

                <button
                  type="submit"
                  className="mx-auto mt-3 inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#730031] px-6 text-[14px] font-medium text-white transition-colors duration-150 hover:bg-[#5a0027]"
                >
                  Send Enquiry
                  <span aria-hidden="true">&rarr;</span>
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
