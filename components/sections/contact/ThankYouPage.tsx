"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export type ThankYouVariant = "marketing" | "talent" | "technology" | "career" | "home";

const EASE = [0.16, 1, 0.3, 1] as const;

const PAGE_CONTENT: Record<
  ThankYouVariant,
  { heading: string; body: string; pageBg: string; glowA: string; glowB: string }
> = {
  marketing: {
    heading: "Thank you. Your marketing enquiry is with us.",
    body: "Our marketing team will review your requirement and contact you shortly.",
    pageBg: "#FFFCF3",
    glowA: "rgba(255, 201, 0, 0.14)",
    glowB: "rgba(255, 234, 160, 0.35)",
  },
  talent: {
    heading: "Thank you. Your talent enquiry is with us.",
    body: "Our talent team will review your hiring requirement and contact you shortly.",
    pageBg: "#F6FBFA",
    glowA: "rgba(0, 168, 138, 0.12)",
    glowB: "rgba(0, 51, 53, 0.08)",
  },
  technology: {
    heading: "Thank you. Your technology enquiry is with us.",
    body: "Our technology team will review your requirement and connect with you shortly.",
    pageBg: "#F7F8FD",
    glowA: "rgba(42, 53, 161, 0.12)",
    glowB: "rgba(154, 168, 232, 0.28)",
  },
  career: {
    heading: "Thank you for sharing your profile.",
    body: "Our team will review your application and contact you if there is a relevant opportunity.",
    pageBg: "#FDF8FA",
    glowA: "rgba(115, 0, 49, 0.1)",
    glowB: "rgba(232, 160, 184, 0.28)",
  },
  home: {
    heading: "Thank you. We have received your enquiry.",
    body: "Your enquiry will be reviewed and directed to the relevant FyerX team.",
    pageBg: "#FDF8FA",
    glowA: "rgba(115, 0, 49, 0.1)",
    glowB: "rgba(232, 196, 212, 0.32)",
  },
};

const NAV_CARDS = [
  {
    label: "Visit Marketing Home",
    href: "/marketing",
    headerTint: "#FFFBEB",
    accent: "#FFC900",
    image: {
      src: "/contact/contact-marketing.png",
      alt: "Marketing team collaborating on campaigns and growth strategy",
    },
  },
  {
    label: "Visit Talent Home",
    href: "/talent",
    headerTint: "#EFF9F6",
    accent: "#00A88A",
    image: {
      src: "/contact/contact-talent.png",
      alt: "Talent team supporting staffing and recruitment",
    },
  },
  {
    label: "Visit Technology Home",
    href: "/",
    headerTint: "#EEF1FA",
    accent: "#2A35A1",
    image: {
      src: "/contact/contact-technology.png",
      alt: "Technology team working on cloud, data, and digital transformation",
    },
  },
] as const;

function EnvelopeSuccessIcon({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <motion.div
      className="relative mx-auto mb-7 flex h-[88px] w-[104px] items-center justify-center"
      aria-hidden="true"
      initial={reducedMotion ? false : { opacity: 0, y: 14, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      <motion.svg
        width="104"
        height="88"
        viewBox="0 0 104 88"
        fill="none"
        initial={reducedMotion ? false : { rotate: -4 }}
        animate={{ rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
      >
        <defs>
          <linearGradient id="ty-env-body" x1="12" y1="18" x2="92" y2="72" gradientUnits="userSpaceOnUse">
            <stop stopColor="#d9f0ff" />
            <stop offset="1" stopColor="#8ecff5" />
          </linearGradient>
          <linearGradient id="ty-env-flap" x1="52" y1="14" x2="52" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#eef9ff" />
            <stop offset="1" stopColor="#b8e4fb" />
          </linearGradient>
          <filter id="ty-env-shadow" x="0" y="0" width="104" height="88" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#2a35a1" floodOpacity="0.12" />
          </filter>
        </defs>
        <g filter="url(#ty-env-shadow)">
          <rect x="14" y="24" width="76" height="52" rx="6" fill="url(#ty-env-body)" stroke="#6bb8e8" strokeWidth="1.5" />
          <path d="M14 28 52 52 90 28" fill="url(#ty-env-flap)" stroke="#6bb8e8" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M14 28h76" stroke="#6bb8e8" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 76 38 58M90 76 66 58" stroke="#9ed4f3" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      </motion.svg>
      <motion.span
        className="absolute -right-1 -top-1 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(34,197,94,0.35)] ring-4 ring-white"
        initial={reducedMotion ? false : { scale: 0, rotate: -24 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 16, delay: 0.35 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="#22c55e" />
          <motion.path
            d="M7.5 12.2 10.4 15l6.1-6.8"
            stroke="#fff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.55, ease: EASE }}
          />
        </svg>
      </motion.span>
    </motion.div>
  );
}

function NavCard({
  label,
  href,
  headerTint,
  accent,
  image,
  index,
  reducedMotion,
}: (typeof NAV_CARDS)[number] & { index: number; reducedMotion: boolean }) {
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 + index * 0.12, ease: EASE }}
      whileHover={reducedMotion ? undefined : { y: -6 }}
      whileTap={reducedMotion ? undefined : { scale: 0.98 }}
    >
      <Link
        href={href}
        className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#e8ebf0] bg-white shadow-[0_4px_20px_rgba(20,20,43,0.06)] transition-[border-color,box-shadow] duration-300 hover:border-[#d8dce6] hover:shadow-[0_16px_32px_rgba(20,20,43,0.12)]"
      >
        <div className="relative h-[148px] overflow-hidden border-b border-[#eef0f4]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 320px"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, ${accent}18 0%, transparent 42%, ${headerTint}dd 100%)`,
            }}
          />
          <motion.span
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left"
            style={{ backgroundColor: accent }}
            initial={reducedMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.45, delay: 0.65 + index * 0.12, ease: EASE }}
          />
        </div>
        <div className="flex flex-1 flex-col justify-center px-5 py-5">
          <span className="text-sm font-semibold text-[#181b34] transition-colors duration-200 group-hover:text-[#730031]">
            {label}
          </span>
          <span
            className="mt-2 inline-flex w-fit items-center gap-1 text-xs font-medium transition-all duration-200 group-hover:gap-2"
            style={{ color: accent }}
          >
            Explore
            <svg
              className="transition-transform duration-200 group-hover:translate-x-1"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ThankYouPage({ variant }: { variant: ThankYouVariant }) {
  const content = PAGE_CONTENT[variant];
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section
      className="relative min-h-[calc(100vh-60px)] overflow-hidden px-4 py-12 sm:px-8 sm:py-16 lg:py-20"
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: content.pageBg,
      }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="animate-ty-glow-a absolute -left-24 -top-24 h-80 w-80 rounded-full blur-3xl"
          style={{ backgroundColor: content.glowA }}
        />
        <div
          className="animate-ty-glow-b absolute -bottom-20 right-0 h-96 w-96 rounded-full blur-3xl"
          style={{ backgroundColor: content.glowB }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[960px]">
        <motion.div
          className="mx-auto max-w-[520px] rounded-2xl bg-white px-8 py-10 text-center shadow-[0_16px_48px_rgba(20,20,43,0.12)] sm:px-12 sm:py-12"
          initial={reducedMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <EnvelopeSuccessIcon reducedMotion={reducedMotion} />
          <motion.h1
            className="text-xl font-semibold leading-snug text-[#181b34] sm:text-2xl"
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25, ease: EASE }}
          >
            {content.heading}
          </motion.h1>
          <motion.p
            className="mx-auto mt-4 max-w-[400px] text-sm leading-relaxed text-[#676879] sm:text-[15px]"
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.38, ease: EASE }}
          >
            {content.body}
          </motion.p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-6">
          {NAV_CARDS.map((card, index) => (
            <NavCard
              key={card.label}
              {...card}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
