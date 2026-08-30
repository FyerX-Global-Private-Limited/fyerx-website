"use client";

import React, { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { CountryCode } from "libphonenumber-js";
import { PrimaryCtaButton } from "@/components/ui/PrimaryCta";
import { DEFAULT_PHONE_COUNTRY, PhoneInput } from "@/components/ui/PhoneInput";
import { validateEmail, validatePhone } from "@/lib/form-validation";
import { readFormString, submitLead } from "@/lib/submit-lead";
import { TRUSTBAR_LOGOS } from "@/lib/trustbar-logos";
import { CONTACT_TEAM_AVATARS } from "@/lib/contact-team-avatars";

const AVATARS = CONTACT_TEAM_AVATARS;

const inputBase =
  "w-full h-10 rounded-[8px] border border-[#c3c6d4] bg-white px-3.5 text-[13px] text-[#333333] placeholder-[#676879] outline-none transition-colors duration-150 focus:border-[#6161ff]";

function inputClassName(hasError?: boolean) {
  return `${inputBase}${hasError ? " border-[#730031]" : ""}`;
}

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
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneCountry, setPhoneCountry] = useState<CountryCode>(DEFAULT_PHONE_COUNTRY);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;
    const nextEmailError = validateEmail(email);
    const nextPhoneError = validatePhone(phone, phoneCountry);
    setEmailError(nextEmailError);
    setPhoneError(nextPhoneError);
    setSubmitError(null);
    if (nextEmailError || nextPhoneError) return;

    setSubmitting(true);
    const result = await submitLead({
      formType: "contact",
      firstName: readFormString(form, "firstName"),
      lastName: readFormString(form, "lastName"),
      email,
      phoneCountry,
      phone,
      jobTitle: readFormString(form, "jobTitle") || null,
      companyName: readFormString(form, "companyName") || null,
      companySize: readFormString(form, "companySize") || null,
      helpWith: readFormString(form, "helpWith") ? [readFormString(form, "helpWith")] : [],
      priority: readFormString(form, "priority") || null,
      message: readFormString(form, "message") || null,
      privacyAccepted: true,
    });
    setSubmitting(false);

    if (!result.ok) {
      setSubmitError(result.error);
      return;
    }

    router.push(`/contact/thankyou-home?leadId=${result.id}`);
  };

  return (
    <section
      id="contact"
      className="home-section bg-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="section-shell section-shell--wide">
        <div className="section-inset rounded-2xl border border-[#E6E9EF] bg-[#b0064817] sm:rounded-[24px]">
        <div className="mx-auto flex w-full max-w-[1040px] flex-col gap-6 sm:gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-[var(--section-content-gap)]">
          <div className="flex min-w-0 flex-1 flex-col">
            <h2 className="section-heading max-w-none lg:max-w-[470px]">
              Ready to see what FyerX can do for{" "}
              <span className="brand-gradient-text">your business?</span>
            </h2>

            <p className="section-subheading max-w-none lg:max-w-[400px]">
              Share your goals with our team to explore the right approach and
              pricing for your business.
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

          <div className="relative mt-8 w-full sm:mt-10 lg:mt-0 lg:w-[462px] lg:shrink-0">
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

              <form className="mt-4 flex flex-col gap-3" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input type="text" name="firstName" placeholder="First name*" required className={inputBase} />
                  <input type="text" name="lastName" placeholder="Last name*" required className={inputBase} />
                </div>

                <div>
                  <input
                    type="email"
                    name="workEmail"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError(null);
                    }}
                    placeholder="Work email*"
                    required
                    inputMode="email"
                    autoComplete="email"
                    aria-invalid={emailError ? true : undefined}
                    className={inputClassName(!!emailError)}
                  />
                  {emailError && (
                    <p className="mt-1.5 text-xs text-[#730031]" role="alert">
                      {emailError}
                    </p>
                  )}
                </div>
                <input type="text" name="jobTitle" placeholder="Job title" className={inputBase} />

                <PhoneInput
                  country={phoneCountry}
                  onCountryChange={(next) => {
                    setPhoneCountry(next);
                    if (phoneError) setPhoneError(null);
                  }}
                  value={phone}
                  onChange={(next) => {
                    setPhone(next);
                    if (phoneError) setPhoneError(null);
                  }}
                  error={phoneError}
                  placeholder="Phone number*"
                />

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

                {submitError && (
                  <p className="text-center text-xs text-[#730031]" role="alert">
                    {submitError}
                  </p>
                )}

                <PrimaryCtaButton
                  type="submit"
                  icon={null}
                  disabled={submitting}
                  className="mx-auto mt-3 h-10 justify-center px-6 text-[14px] font-medium disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? "Submitting..." : <>Send Enquiry &rarr;</>}
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
