"use client";

/**
 * CampaignsSection
 * -------------------------------------------------------------------------
 * Replica of the monday "campaigns" promo block:
 *
 *   - Black rounded card
 *   - Left: monday|campaigns lockup, headline, sub-copy, "Get Started"
 *     pill + "Learn more" text link
 *   - Right: an email-builder mockup (THE INTERIOR newsletter with the
 *     "Ocean boho" hero, "shop now" button and a product grid) plus a
 *     floating glassy "Open rate 31%" stat card with a sparkline.
 *
 * The photographic parts of the email are reconstructed with warm gradient
 * placeholders (no source imagery was available). Swap the gradient blocks
 * marked `PHOTO` for real <img> tags to reach full pixel-parity.
 * -------------------------------------------------------------------------
 */

/* ---------------------------------------------------------------- icons */

function MondayGlyph({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-6 w-6 items-center justify-center rounded-md bg-cyan-400 ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <circle cx="6" cy="15" r="2.4" fill="#0b0b0b" />
        <circle cx="12" cy="15" r="2.4" fill="#0b0b0b" />
        <circle cx="18" cy="15" r="2.4" fill="#0b0b0b" />
      </svg>
    </span>
  );
}

/* -------------------------------------------------------------- mockups */

function OpenRateCard() {
  return (
    <div className="absolute -left-6 bottom-16 z-20 w-[210px] overflow-hidden rounded-2xl border border-white/40 bg-white/70 p-4 shadow-2xl backdrop-blur-md">
      <p className="text-[13px] text-neutral-500">Open rate</p>
      <p className="mt-1 text-4xl font-bold tracking-tight text-neutral-900">31%</p>
      <p className="mt-1 text-[13px] text-neutral-500">7,786</p>
      <svg viewBox="0 0 200 60" className="mt-1 h-12 w-full" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="orc-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 45 C40 45 45 20 85 22 C120 24 130 40 160 30 C180 24 190 20 200 18 L200 60 L0 60 Z"
          fill="url(#orc-fill)"
        />
        <path
          d="M0 45 C40 45 45 20 85 22 C120 24 130 40 160 30 C180 24 190 20 200 18"
          fill="none"
          stroke="#06b6d4"
          strokeWidth={2.5}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function EmailMockup() {
  return (
    <div className="relative w-[300px] overflow-hidden rounded-t-2xl bg-white shadow-2xl">
      {/* browser bar */}
      <div className="bg-[#1f2b45] py-2 text-center">
        <span className="text-[11px] font-medium text-white underline">View in browser</span>
      </div>

      <div className="px-5 pt-5">
        <p
          className="text-center text-2xl font-semibold tracking-[0.15em] text-sky-500"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          THE INTERIOR
        </p>

        {/* hero — PHOTO placeholder */}
        <div className="relative mt-4 h-[190px] overflow-hidden rounded-lg bg-gradient-to-br from-[#c9b79c] via-[#b7a488] to-[#8f7f6a]">
          <div className="absolute right-4 top-4 h-16 w-12 rounded bg-white/30 ring-1 ring-white/40" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
          <div className="absolute left-4 top-5">
            <p className="text-lg font-semibold text-neutral-900">Ocean boho</p>
            <p className="mt-1 max-w-[150px] text-[8.5px] leading-snug text-neutral-800">
              Transform your bedroom with Boho Ocean, a collection inspired by relaxed coastal
              living and natural textures.
            </p>
            <button className="mt-2 rounded bg-[#1f2b45] px-3 py-1.5 text-[9px] font-semibold text-white">
              shop now
            </button>
          </div>
        </div>

        {/* product grid */}
        <div className="mt-3 grid grid-cols-2 gap-3 pb-3">
          {/* PHOTO placeholder */}
          <div className="h-[120px] rounded-lg bg-gradient-to-br from-[#d9cdbb] to-[#b3a488]" />
          <div className="flex h-[120px] items-center justify-center rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50">
            <span className="text-3xl font-light text-neutral-400">+</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ component */

export default function CampaignsSection() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="relative rounded-[32px] bg-black">
          <div className="grid items-center gap-8 md:grid-cols-2">
            {/* Left: copy */}
            <div className="px-8 py-12 sm:px-12 sm:py-16 lg:pl-16">
              <div className="flex items-center gap-2">
                <MondayGlyph />
                <span className="text-lg text-white">
                  <b className="font-bold">monday</b>{" "}
                  <span className="font-normal text-neutral-300">campaigns</span>
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
                Increase sales with a built-in marketing platform
              </h2>

              <p className="mt-6 max-w-sm text-sm font-medium leading-relaxed text-neutral-300">
                Create, launch, and optimize marketing campaigns straight from monday CRM.
              </p>

              <div className="mt-8 flex items-center gap-6">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-100"
                >
                  Get Started
                  <span aria-hidden="true">→</span>
                </button>
                <a
                  href="#"
                  className="text-sm font-medium text-white underline underline-offset-4 hover:text-neutral-200"
                >
                  Learn more
                </a>
              </div>
            </div>

            {/* Right: email builder mockup */}
            <div className="relative hidden h-[420px] items-end justify-center md:flex">
              <OpenRateCard />
              <div className="translate-y-8">
                <EmailMockup />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
