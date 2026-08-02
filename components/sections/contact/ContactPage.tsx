"use client";

import { useEffect, useMemo, useState, type FormEvent, type InputHTMLAttributes, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

/* ============================================================= */
/* Icons — 20x20 stroke line icons, colour set via currentColor  */
/* ============================================================= */

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

function MegaphoneIcon() {
  return (
    <IconBase>
      <path d="M3 10v4h2l1 5h2l-1-5h1l10 4V6L8 10H3z" />
      <line x1="18" y1="9" x2="18" y2="15" />
    </IconBase>
  );
}

function BriefcaseIcon() {
  return (
    <IconBase>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="3" y1="13" x2="21" y2="13" />
    </IconBase>
  );
}

function LaptopCodeIcon() {
  return (
    <IconBase>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M2 20h20" />
      <path d="M9.5 8.5 7.5 10.5 9.5 12.5" />
      <path d="M14.5 8.5 16.5 10.5 14.5 12.5" />
    </IconBase>
  );
}

function BadgeCheckIcon() {
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

function PinIcon() {
  return (
    <IconBase>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.4" />
    </IconBase>
  );
}

function PhoneIcon() {
  return (
    <IconBase>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </IconBase>
  );
}

function EnvelopeIcon() {
  return (
    <IconBase>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </IconBase>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
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

/* ============================================================= */
/* Brand colours — logo palette                                   */
/* ============================================================= */

const BRAND = {
  crimson: "#730031",
  blue: "#2A35A1",
  green: "#003335",
  yellow: "#FFC900",
} as const;

/* ============================================================= */
/* Form field data                                                */
/* ============================================================= */

type FormKey = "marketing" | "talent" | "technology" | "job";

type FormConfig = {
  key: FormKey;
  icon: ReactNode;
  tabLabel: string;
  badgeLabel: string;
  tint: string;
  accent: string;
  onTint: string;
  onTintMuted: string;
  image: { src: string; alt: string };
  hubDescription: string;
  helpLabel?: string;
  helpOptions?: string[];
  budgetOptions?: string[];
  variant: "standard" | "job";
  submitLabel: string;
};

const FORM_CONFIG: Record<FormKey, FormConfig> = {
  marketing: {
    key: "marketing",
    icon: <MegaphoneIcon />,
    tabLabel: "Marketing",
    badgeLabel: "Marketing Enquiry",
    tint: BRAND.yellow,
    accent: BRAND.yellow,
    onTint: "#111111",
    onTintMuted: "rgba(17, 17, 17, 0.78)",
    image: { src: "/contact/contact-marketing.png", alt: "Marketing team collaborating on campaigns and growth strategy" },
    hubDescription:
      "Speak with our marketing team about demand generation, campaigns, brand, content, and growth strategy.",
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
    badgeLabel: "Talent Enquiry",
    tint: BRAND.green,
    accent: BRAND.green,
    onTint: "#FFFFFF",
    onTintMuted: "rgba(255, 255, 255, 0.88)",
    image: { src: "/contact/contact-talent.png", alt: "Talent team supporting staffing and recruitment" },
    hubDescription:
      "Connect with our talent team for staffing, permanent hiring, executive search, or recruitment support.",
    helpLabel: "What are you looking for help with?",
    helpOptions: [
      "Contract Staffing",
      "Permanent Hiring",
      "Executive Search",
      "RPO",
      "IT & Tech Talent",
      "Global Staffing",
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
    badgeLabel: "Technology Enquiry",
    tint: BRAND.blue,
    accent: BRAND.blue,
    onTint: "#FFFFFF",
    onTintMuted: "rgba(255, 255, 255, 0.88)",
    image: { src: "/contact/contact-technology.png", alt: "Technology team working on cloud, data, and digital transformation" },
    hubDescription:
      "Engage our technology team for ServiceNow, transformation, data and AI, cloud, DevOps, or advisory requirements.",
    helpLabel: "What are you looking for help with?",
    helpOptions: [
      "ServiceNow",
      "Digital Transformation",
      "Data & AI",
      "Cloud & DevOps",
      "Technology Consulting",
      "Other",
    ],
    variant: "standard",
    submitLabel: "Submit",
  },
  job: {
    key: "job",
    icon: <BadgeCheckIcon />,
    tabLabel: "Careers",
    badgeLabel: "Career Enquiry",
    tint: BRAND.crimson,
    accent: BRAND.crimson,
    onTint: "#FFFFFF",
    onTintMuted: "rgba(255, 255, 255, 0.88)",
    image: { src: "/contact/contact-career.png", alt: "Professionals exploring career opportunities with FyerX" },
    hubDescription:
      "Submit your profile for opportunities with FyerX and roles across our client hiring network.",
    variant: "job",
    submitLabel: "Submit Application",
  },
};

const FORM_ORDER: FormKey[] = ["marketing", "talent", "technology", "job"];

/* ============================================================= */
/* Form field primitives                                          */
/* ============================================================= */

const sectionPad = "px-4 sm:px-6";
const containerCls = "mx-auto w-full min-w-0 max-w-6xl";

const inputCls =
  "w-full min-w-0 rounded-xl border border-transparent bg-[#f7f9fc] px-4 py-3 text-base text-[#181b34] placeholder-[#8b8fa3] outline-none transition-colors focus:border-[#730031] focus:bg-white sm:text-sm [-webkit-appearance:none]";
const selectCls = `${inputCls} appearance-none cursor-pointer bg-[#f7f9fc] pr-9`;
const labelCls = "mb-1.5 block text-sm font-semibold text-[#181b34]";
const footerHeadingCls = "text-sm font-medium text-[rgb(88,89,101)]";

function RequiredMark() {
  return (
    <span className="ml-0.5 font-semibold" style={{ color: BRAND.crimson }} aria-hidden="true">
      *
    </span>
  );
}

function FieldLabel({
  children,
  required = false,
  className = labelCls,
}: {
  children: ReactNode;
  required?: boolean;
  className?: string;
}) {
  return (
    <span className={className}>
      {children}
      {required && <RequiredMark />}
    </span>
  );
}

function Field({
  label,
  className = "",
  required,
  ...props
}: { label: string; className?: string; required?: boolean } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={`block ${className}`}>
      <FieldLabel required={required}>{label}</FieldLabel>
      <input {...props} required={required} className={inputCls} />
    </label>
  );
}

/* ============================================================= */
/* Hero                                                           */
/* ============================================================= */

function HeroSection() {
  return (
    <section className={`relative w-full overflow-x-clip bg-white py-8 sm:py-12 md:py-14 ${sectionPad}`}>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full sm:w-3/5" aria-hidden="true">
        <div className="absolute -right-8 top-1/4 h-[220px] w-[220px] rounded-full opacity-20 blur-[80px] sm:-right-16 sm:h-[420px] sm:w-[420px] sm:opacity-25 sm:blur-[100px]" style={{ background: BRAND.yellow }} />
        <div className="absolute right-4 top-1/2 h-[180px] w-[180px] -translate-y-1/2 rounded-full opacity-20 blur-[70px] sm:right-16 sm:h-[360px] sm:w-[360px] sm:opacity-25 sm:blur-[90px]" style={{ background: BRAND.blue }} />
        <div className="absolute -right-6 bottom-0 h-[160px] w-[160px] rounded-full opacity-20 blur-[70px] sm:-right-10 sm:h-[320px] sm:w-[320px] sm:blur-[90px]" style={{ background: BRAND.crimson }} />
      </div>

      <div className={`relative ${containerCls}`}>
        <div className="max-w-xl">
          <p className="text-sm font-semibold" style={{ color: BRAND.crimson }}>Get in Touch</p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-[#181b34] sm:text-3xl md:text-4xl">
            Let&rsquo;s Talk, Reach Out to Us
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#3d4a5c] sm:text-base">
            Our team is ready to help — whether you&rsquo;re hiring, marketing, building, or
            exploring a career at FyerX.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================= */
/* Hub — the default landing view. One big clickable card per     */
/* enquiry type (unmistakably clickable), plus a photo grid.      */
/* ============================================================= */

function ContactHub({ onSelect }: { onSelect: (key: FormKey) => void }) {
  return (
    <section className={`w-full overflow-x-clip bg-white py-8 sm:py-12 md:py-14 ${sectionPad}`}>
      <div className={`${containerCls} grid grid-cols-1 gap-6 rounded-2xl border border-[#e6e9ef] bg-white p-4 sm:gap-8 sm:rounded-[28px] sm:p-6 md:p-8 lg:grid-cols-2 lg:gap-10`}>
        {/* Left — heading + category cards */}
        <div className="min-w-0">
          <h2 className="text-2xl font-bold tracking-tight text-[#181b34] sm:text-3xl md:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#3d4a5c]">
            Select the area relevant to your enquiry, and our team will take it from there.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:mt-7 sm:gap-4">
            {FORM_ORDER.map((key) => {
              const cfg = FORM_CONFIG[key];
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => onSelect(key)}
                  className="group flex w-full min-w-0 cursor-pointer items-start gap-3 rounded-2xl p-4 text-left transition-transform duration-150 active:scale-[0.99] sm:items-center sm:gap-4 sm:p-5 sm:hover:-translate-y-0.5"
                  style={{ background: cfg.tint }}
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm sm:h-11 sm:w-11"
                    style={{ color: cfg.accent }}
                  >
                    {cfg.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold sm:text-base" style={{ color: cfg.onTint }}>
                      {cfg.tabLabel}
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed sm:text-sm" style={{ color: cfg.onTintMuted }}>
                      {cfg.hubDescription}
                    </span>
                  </span>
                  <span
                    className="mt-1 shrink-0 transition-transform duration-150 sm:mt-0 sm:group-hover:translate-x-1"
                    style={{ color: cfg.onTint }}
                  >
                    <ChevronRightIcon />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right — 2x2 photo grid */}
        <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4">
          {FORM_ORDER.map((key) => {
            const img = FORM_CONFIG[key].image;
            return (
              <div key={key} className="relative aspect-[4/5] min-h-[140px] overflow-hidden rounded-xl sm:min-h-0 sm:rounded-2xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 44vw, (min-width: 1024px) 280px, 45vw"
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================= */
/* Form — shown once an enquiry type is selected from the hub.    */
/* ============================================================= */

function ContactForm({ config, onBack }: { config: FormConfig; onBack: () => void }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [helpError, setHelpError] = useState(false);

  useEffect(() => {
    setSelected([]);
    setHelpError(false);
  }, [config.key]);

  const toggleOption = (opt: string) => {
    setSelected((prev) => {
      const next = prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt];
      if (next.length > 0) setHelpError(false);
      return next;
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (config.helpOptions && selected.length === 0) {
      setHelpError(true);
      return;
    }
    setHelpError(false);
  };

  return (
    <section className={`w-full overflow-x-clip bg-white py-8 sm:py-12 md:py-14 ${sectionPad}`}>
      <div className={`${containerCls} grid grid-cols-1 overflow-hidden rounded-2xl border border-[#e6e9ef] shadow-[0_12px_40px_rgba(11,46,89,0.06)] sm:rounded-[28px] sm:shadow-[0_20px_60px_rgba(11,46,89,0.08)] lg:grid-cols-2`}>
        {/* Form — first on mobile */}
        <div className="order-1 min-w-0 p-4 sm:p-6 lg:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 text-sm font-medium text-[#3d4a5c] transition-colors hover:text-[#181b34]"
            >
              <ArrowLeftIcon />
              Back
            </button>

            <span
              className="inline-flex max-w-full items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold sm:px-3.5 sm:text-xs"
              style={{ background: config.tint, color: config.onTint }}
            >
              <span className="shrink-0">{config.icon}</span>
              <span className="truncate">{config.tabLabel}</span>
            </span>
          </div>

          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#3d4a5c]">
            {config.hubDescription}
          </p>

          <div className="mt-5 border-t border-[#e6e9ef]" />

          <form key={config.key} className="mt-5 flex min-w-0 flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="First Name" type="text" required />
              <Field label="Last Name" type="text" required />
            </div>

            {config.variant === "job" ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Current Job Title" type="text" required />
                <Field label="Years of Experience" type="text" required />
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Job Title" type="text" required />
                <Field label="Company" type="text" required />
              </div>
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Email" type="email" required />
              <Field label="Phone Number" type="tel" required />
            </div>

            {config.variant === "job" && (
              <>
                <Field label="LinkedIn Profile (URL)" type="url" placeholder="https://linkedin.com/in/your-profile" required />
                <Field label="What type of role are you looking for?" type="text" required />
              </>
            )}

            {config.budgetOptions && (
              <label className="block">
                <FieldLabel required>Monthly Marketing Budget</FieldLabel>
                <span className="relative block">
                  <select defaultValue="" className={selectCls} required>
                    <option value="" disabled>
                      Select a range
                    </option>
                    {config.budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8b8fa3]">
                    <ChevronDownIcon />
                  </span>
                </span>
              </label>
            )}

            {config.helpOptions && (
              <div>
                <FieldLabel required>{config.helpLabel}</FieldLabel>
                <div className="mt-2 flex flex-wrap gap-2">
                  {config.helpOptions.map((opt) => {
                    const isSelected = selected.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => toggleOption(opt)}
                        aria-pressed={isSelected}
                        className="cursor-pointer rounded-full border px-3 py-2 text-[11px] font-medium transition-colors sm:px-3.5 sm:py-2 sm:text-xs"
                        style={
                          isSelected
                            ? { background: config.accent, borderColor: config.accent, color: config.onTint === "#111111" ? "#111111" : "#fff" }
                            : { background: "#f7f9fc", borderColor: "transparent", color: "#3d4a5c" }
                        }
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {helpError && (
                  <p className="mt-1.5 text-xs" style={{ color: BRAND.crimson }}>Please select at least one option.</p>
                )}
              </div>
            )}

            {config.variant === "job" && (
              <div>
                <FieldLabel required>Resume Upload</FieldLabel>
                <input
                  type="file"
                  accept=".pdf"
                  required
                  className="mt-2 block w-full rounded-xl border border-dashed border-[#d6dae3] bg-[#f7f9fc] px-4 py-3 text-xs text-[#8b8fa3] file:mr-3 file:rounded-full file:border-0 file:bg-[#730031]/10 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-[#730031]"
                />
                <p className="mt-1.5 text-xs text-[#8b8fa3]">PDF, max 5MB</p>
              </div>
            )}

            <label className="block">
              <FieldLabel>Message</FieldLabel>
              <textarea rows={4} className={`${inputCls} resize-none`} />
            </label>

            {config.variant === "job" && (
              <label className="flex cursor-pointer items-start gap-2.5">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-[#d6dae3]"
                  style={{ accentColor: BRAND.crimson }}
                />
                <span className="text-xs leading-relaxed text-[#3d4a5c]">
                  <RequiredMark /> By submitting this form, you accept FyerX&rsquo;s{" "}
                  <a href="/privacy-policy" className="underline hover:opacity-80" style={{ color: BRAND.crimson }}>
                    Privacy Policy
                  </a>{" "}
                  and consent to be contacted regarding your application.
                </span>
              </label>
            )}

            <button
              type="submit"
              className="mt-2 inline-flex w-full min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:w-fit"
              style={{ background: BRAND.crimson }}
            >
              {config.submitLabel}
              <ArrowRightIcon />
            </button>
          </form>
        </div>

        {/* Image — below form on mobile, right column on desktop */}
        <div className="order-2 p-4 sm:p-6 lg:p-8" style={{ background: config.tint }}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:aspect-[5/4] sm:rounded-2xl lg:aspect-auto lg:min-h-[420px] lg:h-full">
            <Image
              src={config.image.src}
              alt={config.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================= */
/* Hub / form switcher                                            */
/* ============================================================= */

function ContactHubAndForm({ initial }: { initial: FormKey | null }) {
  const [active, setActive] = useState<FormKey | null>(initial);

  if (active === null) {
    return <ContactHub onSelect={setActive} />;
  }

  return (
    <ContactForm
      key={active}
      config={FORM_CONFIG[active]}
      onBack={() => setActive(null)}
    />
  );
}

/* ============================================================= */
/* Contact details & map                                          */
/* ============================================================= */

const DETAIL_ITEMS = [
  {
    key: "address",
    icon: <PinIcon />,
    label: "Address",
    value: "HSR Layout, Bengaluru, Karnataka – 560102",
    actionLabel: "Get directions",
    href: "https://maps.google.com/?q=HSR+Layout,+Bengaluru,+Karnataka+560102",
  },
  {
    key: "phone",
    icon: <PhoneIcon />,
    label: "Phone",
    value: "+91 7598306999",
    actionLabel: "Call us",
    href: "tel:+917598306999",
  },
  {
    key: "email",
    icon: <EnvelopeIcon />,
    label: "Email",
    value: "hello@fyerx.com",
    actionLabel: "Email us",
    href: "mailto:hello@fyerx.com",
  },
];

function ContactDetailsMap() {
  return (
    <section className={`w-full overflow-x-clip bg-gradient-to-b from-white via-[#fafafa] to-[#f5f5f5] py-8 sm:py-12 md:py-14 ${sectionPad}`}>
      <div className={containerCls}>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[#181b34] sm:text-3xl md:text-4xl">
            Contact Details
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#3d4a5c] sm:text-base">
            Prefer to reach us directly? Here&rsquo;s how to find us.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
          {DETAIL_ITEMS.map((item) => (
            <div
              key={item.key}
              className="flex min-w-0 flex-col items-start rounded-2xl border border-[#e6e9ef] bg-white p-4 sm:p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl text-white sm:h-11 sm:w-11" style={{ background: BRAND.crimson }}>
                {item.icon}
              </span>
              <p className={`mt-3 ${footerHeadingCls}`}>{item.label}</p>
              <p className="mt-1 break-words text-sm leading-relaxed text-[#3d4a5c]">{item.value}</p>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-4 inline-flex min-h-[40px] items-center justify-center rounded-full border border-[#d6dae3] px-4 py-2 text-xs font-semibold text-[#181b34] transition-colors hover:border-[#730031] hover:text-[#730031]"
              >
                {item.actionLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================= */
/* Page orchestrator                                              */
/* ============================================================= */

export default function ContactPage() {
  const searchParams = useSearchParams();

  const initial = useMemo<FormKey | null>(() => {
    const param = searchParams.get("form");
    return param && param in FORM_CONFIG ? (param as FormKey) : null;
  }, [searchParams]);

  return (
    <div className="overflow-x-clip pb-[env(safe-area-inset-bottom)]">
      <HeroSection />
      <ContactHubAndForm initial={initial} />
      <ContactDetailsMap />
    </div>
  );
}
