"use client";

import { useMemo, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  BRAND,
  ContactEnquiryForm,
  FORM_CONFIG,
  FORM_ORDER,
  type FormConfig,
  type FormKey,
} from "@/components/sections/contact/ContactEnquiryForm";

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

function LinkedInIcon() {
  return (
    <IconBase>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7.5v.01" strokeWidth={2.2} />
      <path d="M12 10v7M12 13c0-1.5 1-2.5 2.5-2.5S17 11.5 17 13v4" />
    </IconBase>
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

/* ============================================================= */
/* Layout helpers                                                 */
/* ============================================================= */

const sectionPad = "px-4 sm:px-6";
const containerCls = "mx-auto w-full min-w-0 max-w-6xl";

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
            Ready to Get Started? Let&rsquo;s Talk.
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#3d4a5c] sm:text-base">
            Our team is ready to work with you, whether you&rsquo;re hiring, marketing, building, or
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
            Tell us what you need, and we&rsquo;ll route you to the right team.
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
                      {cfg.hubCardTitle}
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
  return (
    <section className={`w-full overflow-x-clip bg-white py-8 sm:py-12 md:py-14 ${sectionPad}`}>
      <div className={`${containerCls} grid grid-cols-1 overflow-hidden rounded-2xl border border-[#e6e9ef] shadow-[0_12px_40px_rgba(11,46,89,0.06)] sm:rounded-[28px] sm:shadow-[0_20px_60px_rgba(11,46,89,0.08)] lg:grid-cols-2`}>
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
              <span className="truncate">{config.formHeader}</span>
            </span>
          </div>

          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#3d4a5c]">
            {config.formSubheading}
          </p>

          <div className="mt-5 border-t border-[#e6e9ef]" />

          <ContactEnquiryForm formKey={config.key} className="mt-5 flex min-w-0 flex-col gap-4" />
        </div>

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
    href: "https://maps.app.goo.gl/meBMGbVpLetWKUqy6",
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
  {
    key: "linkedin",
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    value: "linkedin.com/company/fyerx",
    actionLabel: "Visit Page",
    href: "https://www.linkedin.com/company/fyerx",
  },
];

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.826155497647!2d77.6515039!3d12.918892399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae157b4e431207%3A0x3d3f8f103b4f1795!2sFyerX%20Global%20Private%20Limited!5e0!3m2!1sen!2sin!4v1787816413986!5m2!1sen!2sin";

function ContactDetailsMap() {
  return (
    <section
      className={`w-full overflow-x-clip py-12 sm:py-16 md:py-20 ${sectionPad}`}
      style={{
        background:
          "linear-gradient(180deg, #FFE8EE 0%, #FFF7F9 38%, #FFFFFF 68%, #F8F5F7 100%)",
      }}
    >
      <div className={containerCls}>
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <div className="flex min-h-0 min-w-0 flex-col overflow-hidden rounded-3xl border border-[#F0D4DE] bg-white shadow-[0_12px_40px_rgba(115,0,49,0.06)]">
            <iframe
              title="FyerX Global Private Limited office location"
              src={MAP_EMBED_SRC}
              className="min-h-[280px] w-full flex-1 border-0 sm:min-h-[360px] lg:min-h-[480px]"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="flex min-w-0 flex-col justify-center text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: BRAND.crimson }}>
              Get in Touch
            </p>
            <h2 className="mt-2 text-[clamp(1.75rem,4vw,2.75rem)] font-medium leading-[1.12] tracking-[-0.02em] text-[#181b34]">
              Contact Details
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-[#3d4a5c] sm:text-base lg:mx-0">
              Reach our team directly for staffing, technology, marketing, or career enquiries. We respond with
              clarity on next steps and the right contact path.
            </p>

            {/* Mobile — unified premium panel */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-[#F0D4DE] bg-white shadow-[0_16px_48px_rgba(115,0,49,0.08)] sm:hidden">
              {DETAIL_ITEMS.map((item, index) => (
                <a
                  key={item.key}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-start gap-3.5 px-4 py-4 text-left transition-colors active:bg-[#FFF7F9] ${
                    index > 0 ? "border-t border-[#F7E4EB]" : ""
                  }`}
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "#FFE8EE", color: BRAND.crimson }}
                  >
                    {item.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#8A4A62]">
                      {item.label}
                    </span>
                    <span className="mt-1 block break-words text-sm font-medium leading-snug text-[#181b34]">
                      {item.value}
                    </span>
                    <span
                      className="mt-2 inline-flex items-center gap-1 text-xs font-semibold"
                      style={{ color: BRAND.crimson }}
                    >
                      {item.actionLabel}
                      <ChevronRightIcon />
                    </span>
                  </span>
                </a>
              ))}
            </div>

            {/* Desktop / tablet — 2×2 crimson cards */}
            <div className="mt-8 hidden flex-1 grid-cols-2 gap-4 sm:grid">
              {DETAIL_ITEMS.map((item) => (
                <div
                  key={item.key}
                  className="flex h-full min-h-[180px] min-w-0 flex-col items-start rounded-2xl border border-[#F0D4DE] bg-white p-5 text-left shadow-[0_10px_32px_rgba(115,0,49,0.05)] transition-shadow hover:shadow-[0_14px_40px_rgba(115,0,49,0.1)]"
                >
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: "#FFE8EE", color: BRAND.crimson }}
                  >
                    {item.icon}
                  </span>
                  <p className="mt-3 text-sm font-medium text-[#8A4A62]">{item.label}</p>
                  <p className="mt-1 break-words text-sm font-medium leading-relaxed text-[#181b34]">{item.value}</p>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-auto inline-flex min-h-[40px] items-center justify-center rounded-full border border-[rgba(115,0,49,0.28)] px-4 py-2 text-xs font-semibold text-[#730031] transition-colors hover:border-[#730031] hover:bg-[#FFE8EE]"
                  >
                    {item.actionLabel}
                  </a>
                </div>
              ))}
            </div>
          </div>
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
