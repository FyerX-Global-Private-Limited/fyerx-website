"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PrimaryCtaButton } from "@/components/ui/PrimaryCta";

const AVATARS = [
  {
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face",
    alt: "Indian professional",
  },
  {
    src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=120&h=120&fit=crop&crop=face",
    alt: "Indian professional",
  },
  {
    src: "https://images.unsplash.com/photo-1627895157647-004c07cf388b?w=120&h=120&fit=crop&crop=face",
    alt: "Indian professional",
  },
  {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b3491?w=120&h=120&fit=crop&crop=face",
    alt: "Indian professional",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
    alt: "Indian professional",
  },
];

const WHAT_HAPPENS_NEXT = [
  {
    step: "01",
    color: "#730031",
    icon: "review" as const,
    title: "We review your enquiry",
    description: "Your requirement is directed to the appropriate FyerX team.",
  },
  {
    step: "02",
    color: "#6161FF",
    icon: "context" as const,
    title: "We understand the context",
    description: "A relevant team member connects to understand the business need.",
  },
  {
    step: "03",
    color: "#00CA72",
    icon: "next" as const,
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
  { name: "TrnDigital", img: "/trustbarlogos/trndigital.png" },
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

function StepIcon({ type, color }: { type: (typeof WHAT_HAPPENS_NEXT)[number]["icon"]; color: string }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  let icon: React.ReactNode;
  switch (type) {
    case "review":
      icon = (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M9 13h6" />
          <path d="M9 17h4" />
        </svg>
      );
      break;
    case "context":
      icon = (
        <svg {...common}>
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        </svg>
      );
      break;
    case "next":
      icon = (
        <svg {...common}>
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      );
      break;
  }

  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px]"
      style={{ backgroundColor: `${color}18`, color }}
    >
      {icon}
    </span>
  );
}

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
      id="contact"
      className="home-section bg-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="section-shell section-shell--wide">
        <div className="section-inset rounded-2xl bg-[#ab05491a] sm:rounded-[24px]">
        <div className="mx-auto flex w-full max-w-[1040px] flex-col gap-8 sm:gap-[var(--section-content-gap)] lg:flex-row lg:items-stretch lg:justify-between">
          <div className="flex min-w-0 flex-1 flex-col">
            <h2 className="section-heading max-w-none lg:max-w-[470px]">
              Ready to see what FyerX can do for{" "}
              <span className="brand-gradient-text">your business?</span>
            </h2>

            <p className="section-subheading max-w-none lg:max-w-[400px]">
              Share your goals with our team to explore the right approach and
              pricing for your business.
            </p>

            <div className="hidden min-h-[32px] flex-1 sm:block" />

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

            <div className="mt-6 w-full max-w-none rounded-[8px] border border-[#323338] p-4 sm:mt-7 sm:max-w-[465px] sm:p-6">
              <h3 className="flex flex-wrap items-center gap-2 text-[14px] font-semibold leading-[1.4] text-[#181b34] sm:gap-2.5 sm:text-[15px]">
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px]"
                  style={{
                    background: "linear-gradient(135deg, #730031 0%, #CC0057 100%)",
                    color: "#ffffff",
                  }}
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v3" />
                    <path d="M12 18v3" />
                    <path d="M3 12h3" />
                    <path d="M18 12h3" />
                    <path d="M5.6 5.6 7.7 7.7" />
                    <path d="M16.3 16.3l2.1 2.1" />
                    <path d="M5.6 18.4 7.7 16.3" />
                    <path d="M16.3 7.7l2.1-2.1" />
                  </svg>
                </span>
                What happens{" "}
                <span className="brand-gradient-text">next:</span>
              </h3>
              <ol className="mt-5 flex flex-col gap-5">
                {WHAT_HAPPENS_NEXT.map((item) => (
                  <li key={item.step} className="flex gap-3.5">
                    <StepIcon type={item.icon} color={item.color} />
                    <div className="min-w-0">
                      <p className="text-[14px] font-semibold leading-[1.4] text-[#181b34]">
                        <span className="mr-1.5 text-[12px] font-semibold tabular-nums" style={{ color: item.color }}>
                          {item.step}
                        </span>
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

          <div className="relative w-full lg:w-[462px] lg:shrink-0">
            <div className="absolute -top-[22px] left-1/2 z-10 flex -translate-x-1/2 -space-x-[6px]">
              {AVATARS.map((avatar, i) => (
                <img
                  key={avatar.src}
                  src={avatar.src}
                  alt={avatar.alt}
                  className="h-9 w-9 rounded-full border-2 border-[#0f0f10] object-cover"
                  style={{ zIndex: AVATARS.length - i }}
                />
              ))}
            </div>

            <div className="w-full rounded-[16px] bg-white px-4 py-6 shadow-[0px_6px_20px_rgba(29,37,45,0.05)] sm:px-9 sm:py-7">
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
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input type="text" name="firstName" placeholder="First name*" required className={inputBase} />
                  <input type="text" name="lastName" placeholder="Last name*" required className={inputBase} />
                </div>

                <input type="email" name="workEmail" placeholder="Work email*" required className={inputBase} />
                <input type="text" name="jobTitle" placeholder="Job title" className={inputBase} />

                <div className="flex h-10 w-full overflow-hidden rounded-[8px] border border-[#c3c6d4] bg-white transition-colors duration-150 focus-within:border-[#6161ff]">
                  <button
                    type="button"
                    className="flex h-full w-11 shrink-0 items-center justify-center gap-[3px] border-r border-[#c3c6d4] bg-white"
                    aria-label="Select country code"
                  >
                    <img src="https://flagcdn.com/w20/in.png" alt="India" className="h-3 w-[18px] object-cover" />
                    <svg className="h-2.5 w-2.5 text-[#676879]" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input type="text" name="companyName" placeholder="Company name*" required className={inputBase} />
                  <div className="relative">
                    <select name="companySize" defaultValue="" className={selectBase}>
                      <option value="" disabled>Company size</option>
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
                  <select name="helpWith" required defaultValue="" className={selectBase}>
                    <option value="" disabled>What can we help with?*</option>
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
                  <select name="priority" required defaultValue="" className={selectBase}>
                    <option value="" disabled>What is your priority?*</option>
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

                <PrimaryCtaButton
                  type="submit"
                  icon={null}
                  className="mx-auto mt-3 h-10 justify-center px-6 text-[14px] font-medium"
                >
                  Send Enquiry &rarr;
                </PrimaryCtaButton>

                <p className="mx-auto mt-1.5 max-w-[300px] text-center text-[10.5px] leading-[1.6] text-[#333333]">
                  By submitting this form, you accept FyerX&rsquo;s{" "}
                  <a href="/privacy-policy" className="underline">Privacy Policy</a>{" "}
                  and consent to be contacted regarding your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
