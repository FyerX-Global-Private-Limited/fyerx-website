"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";

export const BRAND = {
  crimson: "#730031",
  blue: "#2A35A1",
  green: "#003335",
  yellow: "#FFC900",
} as const;

function IconBase({ children, size = 20 }: { children: ReactNode; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function MegaphoneIcon() {
  return (
    <IconBase>
      <path d="M3 10v4h2l1 5h2l-1-5h1l10 4V6L8 10H3z" />
      <line x1="18" y1="9" x2="18" y2="15" />
    </IconBase>
  );
}

export function BriefcaseIcon() {
  return (
    <IconBase>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="3" y1="13" x2="21" y2="13" />
    </IconBase>
  );
}

export function LaptopCodeIcon() {
  return (
    <IconBase>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M2 20h20" />
      <path d="M9.5 8.5 7.5 10.5 9.5 12.5" />
      <path d="M14.5 8.5 16.5 10.5 14.5 12.5" />
    </IconBase>
  );
}

export function BadgeCheckIcon() {
  return (
    <IconBase>
      <rect x="4" y="4" width="14" height="17" rx="2.5" />
      <circle cx="11" cy="10" r="2.4" />
      <path d="M7 18c.5-2.2 2-3.4 4-3.4s3.5 1.2 4 3.4" />
      <circle cx="18.5" cy="17" r="3" fill="white" />
      <path d="M17.1 17l1 1 1.7-1.9" />
    </IconBase>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export type FormKey = "marketing" | "talent" | "technology" | "job";

export type FormConfig = {
  key: FormKey;
  icon: ReactNode;
  tabLabel: string;
  hubCardTitle: string;
  badgeLabel: string;
  formHeader: string;
  formSubheading: string;
  tint: string;
  accent: string;
  onTint: string;
  onTintMuted: string;
  image: { src: string; alt: string };
  hubDescription: string;
  helpLabel?: string;
  helpOptions?: string[];
  teamOptions?: string[];
  budgetOptions?: string[];
  variant: "standard" | "job";
  submitLabel: string;
};

export const FORM_CONFIG: Record<FormKey, FormConfig> = {
  marketing: {
    key: "marketing",
    icon: <MegaphoneIcon />,
    tabLabel: "Marketing",
    hubCardTitle: "Marketing Enquiry",
    badgeLabel: "Marketing Enquiry",
    formHeader: "Contact Marketing",
    formSubheading:
      "Let's explore how we can build your pipeline through campaigns, SEO, content, or brand strategy.",
    tint: BRAND.yellow,
    accent: BRAND.yellow,
    onTint: "#111111",
    onTintMuted: "rgba(17, 17, 17, 0.78)",
    image: {
      src: "/contact/contact-marketing.webp",
      alt: "FyerX marketing team presenting campaign strategy",
    },
    hubDescription:
      "Explore campaigns, demand generation, SEO, branding, or content support for your business.",
    helpLabel: "What are you looking for help with?",
    helpOptions: [
      "Demand & Lead Generation",
      "SEO & AI Search Visibility",
      "Content & Creative Production",
      "Performance Marketing",
      "Marketing Automation & CRM",
      "Branding & Website Design",
      "Marketing Strategy & Consulting",
      "Other",
    ],
    budgetOptions: [
      "₹1,00,000 - ₹1,99,999",
      "₹2,00,000 - ₹4,99,999",
      "₹5,00,000 - ₹9,99,999",
      "Above ₹10,00,000",
    ],
    variant: "standard",
    submitLabel: "Submit",
  },
  talent: {
    key: "talent",
    icon: <BriefcaseIcon />,
    tabLabel: "Talent",
    hubCardTitle: "Talent Enquiry",
    badgeLabel: "Talent Enquiry",
    formHeader: "Contact Talent",
    formSubheading:
      "Let's explore how we can build your hiring pipeline through staffing, RPO, or executive search.",
    tint: BRAND.green,
    accent: BRAND.green,
    onTint: "#FFFFFF",
    onTintMuted: "rgba(255, 255, 255, 0.88)",
    image: {
      src: "/contact/contact-talent.webp",
      alt: "FyerX recruiter in conversation with a candidate",
    },
    hubDescription:
      "Explore contract staffing, permanent hiring, executive search, or recruitment support for your team.",
    helpLabel: "What are you looking for help with?",
    helpOptions: [
      "Contract Staffing",
      "Permanent Hiring",
      "Executive Search",
      "RPO",
      "IT & Tech Talent",
      "HR Advisory",
      "Other",
    ],
    variant: "standard",
    submitLabel: "Submit",
  },
  technology: {
    key: "technology",
    icon: <LaptopCodeIcon />,
    tabLabel: "Technology",
    hubCardTitle: "Technology Enquiry",
    badgeLabel: "Technology Enquiry",
    formHeader: "Contact Technology",
    formSubheading:
      "Let's explore how we can build or support the websites and tools your business runs on.",
    tint: BRAND.blue,
    accent: BRAND.blue,
    onTint: "#FFFFFF",
    onTintMuted: "rgba(255, 255, 255, 0.88)",
    image: {
      src: "/contact/contact-technology.webp",
      alt: "FyerX developer working at a dual-monitor setup",
    },
    hubDescription:
      "Explore website development, app development, or ongoing technical support for your business.",
    helpLabel: "What are you looking for help with?",
    helpOptions: [
      "ServiceNow Implementation & Support",
      "Enterprise Platforms (SAP, Salesforce, Dynamics, Oracle)",
      "Data & AI / Analytics",
      "Cloud & DevOps",
      "Quality Engineering & Testing",
      "Cybersecurity",
      "Ongoing Maintenance & Support",
      "Other",
    ],
    variant: "standard",
    submitLabel: "Submit",
  },
  job: {
    key: "job",
    icon: <BadgeCheckIcon />,
    tabLabel: "Careers",
    hubCardTitle: "I'm Looking for a Job",
    badgeLabel: "Career Enquiry",
    formHeader: "Apply to FyerX",
    formSubheading:
      "Let's explore roles at FyerX or through our hiring network, based on your experience and interests.",
    tint: BRAND.crimson,
    accent: BRAND.crimson,
    onTint: "#FFFFFF",
    onTintMuted: "rgba(255, 255, 255, 0.88)",
    image: {
      src: "/contact/contact-career.webp",
      alt: "Professional exploring career opportunities with FyerX",
    },
    hubDescription:
      "Explore open roles at FyerX or through our hiring network for client businesses.",
    helpLabel: "Which team are you interested in?",
    teamOptions: ["Marketing", "Talent", "Technology", "Design", "Sales", "Other"],
    variant: "job",
    submitLabel: "Submit Application",
  },
};

export const FORM_ORDER: FormKey[] = ["marketing", "talent", "technology", "job"];

export const THANK_YOU_BY_FORM: Record<FormKey, string> = {
  marketing: "/contact/thankyou-marketing",
  talent: "/contact/thankyou-talent",
  technology: "/contact/thankyou-technology",
  job: "/contact/thankyou-career",
};

const EXPECTED_START_OPTIONS = [
  "Immediately",
  "Within 1–3 Months",
  "Within 3–6 Months",
  "Exploring for Later",
] as const;

const inputBase =
  "w-full h-10 rounded-[8px] border border-[#c3c6d4] bg-white px-3.5 text-[13px] text-[#333333] placeholder-[#676879] outline-none transition-colors duration-150 focus:border-[#6161ff]";

const selectBase =
  "w-full h-10 rounded-[8px] border border-[#c3c6d4] bg-white px-3.5 pr-9 text-[13px] text-[#676879] outline-none appearance-none cursor-pointer transition-colors duration-150 focus:border-[#6161ff]";

const textareaBase =
  "h-[88px] w-full resize-none rounded-[8px] border border-[#c3c6d4] bg-white px-3.5 py-2.5 text-[13px] leading-[1.5] text-[#333333] placeholder-[#676879] outline-none transition-colors duration-150 focus:border-[#6161ff]";

function FormCaret() {
  return (
    <svg
      className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#676879]"
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

function RequiredMark() {
  return (
    <span className="ml-0.5 font-semibold" style={{ color: BRAND.crimson }} aria-hidden="true">
      *
    </span>
  );
}

function CompactPhoneInput() {
  return (
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
        placeholder="Your Phone Number*"
        required
        className="h-full w-full border-0 bg-white px-3.5 text-[13px] text-[#333333] placeholder-[#676879] outline-none"
      />
    </div>
  );
}

function CompactExpectedStartSelect() {
  return (
    <div className="relative">
      <select name="expectedStart" defaultValue="" className={selectBase}>
        <option value="" disabled>
          Expected Start
        </option>
        {EXPECTED_START_OPTIONS.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <FormCaret />
    </div>
  );
}

function CompactHelpMultiselect({
  config,
  options,
  label,
  selected,
  onToggle,
  error,
}: {
  config: FormConfig;
  options: string[];
  label: string;
  selected: string[];
  onToggle: (opt: string) => void;
  error: boolean;
}) {
  return (
    <div>
      <p className="mb-2 text-[13px] font-semibold text-[#181b34]">
        {label}
        <RequiredMark />
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const isSelected = selected.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onToggle(opt)}
              aria-pressed={isSelected}
              className="cursor-pointer rounded-full border px-3 py-2 text-[11px] font-medium transition-colors sm:text-xs"
              style={
                isSelected
                  ? {
                      background: config.accent,
                      borderColor: config.accent,
                      color: config.onTint === "#111111" ? "#111111" : "#fff",
                    }
                  : { background: "#f7f9fc", borderColor: "#e6e9ef", color: "#3d4a5c" }
              }
            >
              {opt}
            </button>
          );
        })}
      </div>
      {error && (
        <p className="mt-1.5 text-xs" style={{ color: BRAND.crimson }}>
          Please select at least one option.
        </p>
      )}
    </div>
  );
}

type ContactEnquiryFormProps = {
  formKey: FormKey;
  className?: string;
  title?: string;
  nameGridClassName?: string;
};

export function ContactEnquiryForm({
  formKey,
  className = "flex min-w-0 flex-col gap-4",
  title,
  nameGridClassName = "grid grid-cols-2 gap-3",
}: ContactEnquiryFormProps) {
  const router = useRouter();
  const config = FORM_CONFIG[formKey];
  const [selected, setSelected] = useState<string[]>([]);
  const [helpError, setHelpError] = useState(false);

  useEffect(() => {
    setSelected([]);
    setHelpError(false);
  }, [formKey]);

  const toggleOption = (opt: string) => {
    setSelected((prev) => {
      const next = prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt];
      if (next.length > 0) setHelpError(false);
      return next;
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const choiceOptions = config.teamOptions ?? config.helpOptions;
    if (choiceOptions && selected.length === 0) {
      setHelpError(true);
      return;
    }
    setHelpError(false);
    router.push(THANK_YOU_BY_FORM[formKey]);
  };

  return (
    <>
      {title && (
        <h3 className="text-center text-[16px] font-semibold text-[#181b34]">{title}</h3>
      )}

      <form key={formKey} className={className} onSubmit={handleSubmit}>
        <div className={nameGridClassName}>
          <input type="text" name="firstName" placeholder="Your First Name*" required className={inputBase} />
          <input type="text" name="lastName" placeholder="Your Last Name*" required className={inputBase} />
        </div>

        {config.variant === "job" ? (
          <div className={nameGridClassName}>
            <input type="text" name="jobTitle" placeholder="Your Current Job Title*" required className={inputBase} />
            <input type="text" name="experience" placeholder="Years of Experience*" required className={inputBase} />
          </div>
        ) : (
          <div className={nameGridClassName}>
            <input type="text" name="jobTitle" placeholder="Your Job Title" className={inputBase} />
            <input type="text" name="companyName" placeholder="Your Company*" required className={inputBase} />
          </div>
        )}

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <input type="email" name="email" placeholder="Your Email*" required className={inputBase} />
          <CompactPhoneInput />
        </div>

        {config.variant === "job" && (
          <input
            type="url"
            name="linkedin"
            placeholder="https://linkedin.com/in/your-profile"
            required
            className={inputBase}
          />
        )}

        {config.budgetOptions && (
          <div className="relative">
            <select name="monthlyBudget" required defaultValue="" className={selectBase}>
              <option value="" disabled>
                Monthly Marketing Budget*
              </option>
              {config.budgetOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <FormCaret />
          </div>
        )}

        {(config.helpOptions ?? config.teamOptions) && (
          <CompactHelpMultiselect
            config={config}
            options={config.helpOptions ?? config.teamOptions ?? []}
            label={config.helpLabel ?? "What are you looking for help with?"}
            selected={selected}
            onToggle={toggleOption}
            error={helpError}
          />
        )}

        {config.variant === "job" && (
          <div>
            <p className="mb-2 text-[13px] font-semibold text-[#181b34]">
              Upload your resume link
              <RequiredMark />
            </p>
            <input
              type="url"
              name="resumeUrl"
              placeholder="https://drive.google.com/file/d/your-resume-link/view"
              required
              className={inputBase}
            />
          </div>
        )}

        <CompactExpectedStartSelect />

        <textarea name="message" placeholder="Type your message..." className={textareaBase} />

        <button
          type="submit"
          className="mx-auto mt-3 inline-flex h-10 min-w-[7rem] items-center justify-center gap-2 rounded-full px-5 text-[14px] font-medium transition-colors duration-150"
          style={{
            background: config.accent,
            color: config.onTint === "#111111" ? "#111111" : "#ffffff",
          }}
        >
          {config.submitLabel}
          <ArrowRightIcon />
        </button>

        <p className="mx-auto mt-1.5 max-w-[300px] text-center text-[10.5px] leading-[1.6] text-[#333333]">
          By submitting this form, you accept FyerX&rsquo;s{" "}
          <a href="/privacy-policy" className="underline">
            Privacy Policy
          </a>{" "}
          {config.variant === "job"
            ? "and consent to be contacted regarding your application."
            : "and consent to be contacted regarding your enquiry."}
        </p>
      </form>
    </>
  );
}
