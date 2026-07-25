"use client";

import { useMemo, useState, type InputHTMLAttributes, type ReactNode } from "react";
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

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

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
  subheading: string;
  helpLabel: string;
  helpOptions: string[];
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
    tint: "#DCEAFB",
    accent: "#2E63B8",
    subheading:
      "Let's explore how we can build your pipeline through campaigns, SEO, content, or brand strategy.",
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
    tint: "#FBE2DE",
    accent: "#D6543A",
    subheading:
      "Let's explore how we can build your hiring pipeline through staffing, RPO, or executive search.",
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
    badgeLabel: "Technology Enquiry",
    tint: "#FCF0D6",
    accent: "#B7791F",
    subheading:
      "Let's explore how we can build or support the websites and tools your business runs on.",
    helpLabel: "What are you looking for help with?",
    helpOptions: [
      "Website Development",
      "App Development",
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
    badgeLabel: "Career Enquiry",
    tint: "#DFF4EC",
    accent: "#0E8A7D",
    subheading:
      "Let's explore roles at FyerX or through our hiring network, based on your experience and interests.",
    helpLabel: "Which team are you interested in?",
    helpOptions: ["Marketing", "Talent", "Technology", "Design", "Sales", "Other"],
    variant: "job",
    submitLabel: "Submit Application",
  },
};

const FORM_ORDER: FormKey[] = ["marketing", "talent", "technology", "job"];

/* ============================================================= */
/* Form field primitives                                          */
/* ============================================================= */

const inputCls =
  "w-full rounded-xl border border-transparent bg-[#f7f9fc] px-4 py-3 text-sm text-[#181b34] placeholder-[#8b8fa3] outline-none transition-colors focus:border-[#0B2E59] focus:bg-white";
const selectCls = `${inputCls} appearance-none cursor-pointer pr-9`;
const labelCls = "mb-1.5 block text-sm font-semibold text-[#181b34]";

function Field({
  label,
  className = "",
  ...props
}: { label: string; className?: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={`block ${className}`}>
      <span className={labelCls}>{label}</span>
      <input {...props} className={inputCls} />
    </label>
  );
}

/* ============================================================= */
/* Fixed visual — stays constant regardless of which enquiry tab  */
/* is active.                                                     */
/* ============================================================= */

function ContactVisual() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
      <Image
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww"
        alt="A FyerX team member ready to help with your enquiry"
        fill
        sizes="(min-width: 1024px) 480px, 100vw"
        className="object-cover"
      />
    </div>
  );
}

/* ============================================================= */
/* Hero                                                           */
/* ============================================================= */

function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f9fc] px-6 py-10 sm:py-14">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full sm:w-3/5" aria-hidden="true">
        <div className="absolute -right-16 top-1/4 h-[420px] w-[420px] rounded-full bg-[#4A7FC1] opacity-30 blur-[100px]" />
        <div className="absolute right-16 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-[#1F5C99] opacity-30 blur-[90px]" />
        <div className="absolute -right-10 bottom-0 h-[320px] w-[320px] rounded-full bg-[#0B2E59] opacity-20 blur-[90px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-[#1F5C99]">Get in Touch</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#181b34] sm:text-4xl">
            Let&rsquo;s Talk, Reach Out to Us
          </h1>
          <p className="mt-3 max-w-md text-base leading-relaxed text-[#3d4a5c]">
            Our team is ready to help — whether you&rsquo;re hiring, marketing, building, or
            exploring a career at FyerX.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================= */
/* Form + switcher card                                           */
/* ============================================================= */

function ContactFormSection({ initial }: { initial: FormKey }) {
  const [active, setActive] = useState<FormKey>(initial);
  const [selected, setSelected] = useState<string[]>([]);
  const config = FORM_CONFIG[active];
  const otherKeys = FORM_ORDER.filter((key) => key !== active);

  const toggleOption = (opt: string) =>
    setSelected((prev) =>
      prev.includes(opt) ? prev.filter((o) => o !== opt) : [...prev, opt]
    );

  const handleSwitch = (key: FormKey) => {
    setActive(key);
    setSelected([]);
  };

  return (
    <section className="w-full bg-white px-6 py-10 sm:py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-[28px] border border-[#e6e9ef] shadow-[0_20px_60px_rgba(11,46,89,0.08)] lg:grid-cols-2">
        {/* Left — form, always shows the active enquiry type */}
        <div className="p-6 sm:p-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#E8F1FB] px-3.5 py-1.5 text-xs font-semibold text-[#0B2E59]">
            {config.icon}
            {config.badgeLabel}
          </span>

          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#3d4a5c]">
            {config.subheading}
          </p>

          <div className="mt-5 border-t border-[#e6e9ef]" />

          <form key={config.key} className="mt-5 flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="First Name" type="text" required />
              <Field label="Last Name" type="text" required />
            </div>

            {config.variant === "job" ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Current Job Title" type="text" />
                <Field label="Years of Experience" type="text" />
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Job Title" type="text" />
                <Field label="Company" type="text" />
              </div>
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Email" type="email" required />
              <Field label="Phone Number" type="tel" />
            </div>

            {config.budgetOptions && (
              <label className="block">
                <span className={labelCls}>Monthly Marketing Budget</span>
                <span className="relative block">
                  <select defaultValue="" className={selectCls}>
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

            <div>
              <p className={labelCls}>{config.helpLabel}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {config.helpOptions.map((opt) => {
                  const isSelected = selected.includes(opt);
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => toggleOption(opt)}
                      aria-pressed={isSelected}
                      className="rounded-full border px-3.5 py-2 text-xs font-medium transition-colors"
                      style={
                        isSelected
                          ? { background: "#0B2E59", borderColor: "#0B2E59", color: "#fff" }
                          : { background: "#f7f9fc", borderColor: "transparent", color: "#3d4a5c" }
                      }
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </div>

            {config.variant === "job" && (
              <div>
                <p className={labelCls}>Resume Upload</p>
                <input
                  type="file"
                  accept=".pdf"
                  className="mt-2 block w-full rounded-xl border border-dashed border-[#d6dae3] bg-[#f7f9fc] px-4 py-3 text-xs text-[#8b8fa3] file:mr-3 file:rounded-full file:border-0 file:bg-[#0B2E59]/10 file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-[#0B2E59]"
                />
                <p className="mt-1.5 text-xs text-[#8b8fa3]">PDF, max 5MB</p>
              </div>
            )}

            <label className="block">
              <span className={labelCls}>Message</span>
              <textarea rows={4} className={`${inputCls} resize-none`} />
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-[#0B2E59] px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {config.submitLabel}
              <ArrowRightIcon />
            </button>
          </form>
        </div>

        {/* Right — fixed visual on top, the other 3 enquiry types below.  */}
        {/* Clicking one swaps the form on the left; the visual never     */}
        {/* changes.                                                       */}
        <div className="flex flex-col gap-4 bg-[#f7f9fc] p-6 sm:p-8">
          <div className="flex flex-col gap-3">
            {otherKeys.map((key) => {
              const cfg = FORM_CONFIG[key];
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleSwitch(key)}
                  className="group flex items-center gap-4 rounded-2xl p-4 text-left transition-transform hover:-translate-y-0.5"
                  style={{ background: cfg.tint }}
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/70"
                    style={{ color: cfg.accent }}
                  >
                    {cfg.icon}
                  </span>
                  <span className="flex-1 text-sm font-semibold text-[#181b34]">
                    {cfg.tabLabel}
                  </span>
                  <span
                    className="transition-transform group-hover:translate-x-1"
                    style={{ color: cfg.accent }}
                  >
                    <ArrowRightIcon />
                  </span>
                </button>
              );
            })}
          </div>

          <ContactVisual />
        </div>
      </div>
    </section>
  );
}

/* ============================================================= */
/* Contact details & map                                          */
/* ============================================================= */

const DETAIL_ITEMS = [
  {
    key: "location",
    icon: <PinIcon />,
    label: "Location",
    value: "HSR Layout, Bengaluru, Karnataka – 560102",
    actionLabel: "Get directions",
    href: "https://maps.google.com/?q=HSR+Layout,+Bengaluru,+Karnataka+560102",
  },
  {
    key: "contact",
    icon: <PhoneIcon />,
    label: "Contact",
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
  {
    key: "map",
    icon: <PinIcon />,
    label: "Visit Us",
    value: "See us on the map",
    actionLabel: "Open in Maps",
    href: "https://maps.google.com/?q=HSR+Layout,+Bengaluru,+Karnataka+560102",
  },
];

function ContactDetailsMap() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-[#f7f9fc] to-[#e8f1fb] px-6 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#181b34] sm:text-4xl">
            Contact Details
          </h2>
          <p className="mt-2 text-base leading-relaxed text-[#3d4a5c]">
            Prefer to reach us directly? Here&rsquo;s how to find us.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DETAIL_ITEMS.map((item) => (
            <div
              key={item.key}
              className="flex flex-col items-start rounded-2xl border border-[#e6e9ef] bg-white p-5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F1FB] text-[#0B2E59]">
                {item.icon}
              </span>
              <p className="mt-3 text-base font-semibold text-[#181b34]">{item.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-[#3d4a5c]">{item.value}</p>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="mt-4 inline-flex items-center justify-center rounded-full border border-[#d6dae3] px-4 py-2 text-xs font-semibold text-[#181b34] transition-colors hover:border-[#0B2E59] hover:text-[#0B2E59]"
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

  const initial = useMemo<FormKey>(() => {
    const param = searchParams.get("form");
    return param && param in FORM_CONFIG ? (param as FormKey) : "marketing";
  }, [searchParams]);

  return (
    <>
      <HeroSection />
      <ContactFormSection initial={initial} />
      <ContactDetailsMap />
    </>
  );
}
