"use client";

import { useEffect, useState } from "react";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { PublicImage } from "@/components/ui/PublicImage";
import { MARKETING_HOME } from "@/lib/marketing-home-palette";

const WORDS = [
  { w: "Clarity", bg: "#fdeecc", dot: MARKETING_HOME.primary, text: "#6b4a12" },
  { w: "Demand", bg: "#fff3cd", dot: "#e6a800", text: "#5c4a0a" },
  { w: "Visibility", bg: "#fef9c3", dot: "#ca8a04", text: "#5c4a0a" },
  { w: "Conversion", bg: "#fde68a", dot: "#d97706", text: "#6b4a12" },
  { w: "Growth", bg: "#fef3c7", dot: "#f59e0b", text: "#6b2f12" },
] as const;

type LocationHero = { title: string; highlight: string; description: string; href: string; action: string };

export default function MarketingHero({ location }: { location?: LocationHero }) {
  const [typing, setTyping] = useState({ index: 0, length: WORDS[0].w.length + 1, deleting: false });
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const { w, bg, dot, text } = WORDS[reducedMotion ? 0 : typing.index];
  const word = w + ".";

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (location || paused || reducedMotion) return;
    const { index, length, deleting } = typing;
    const complete = length === word.length;
    const delay = deleting ? 45 : complete ? 1050 : 75;
    const id = window.setTimeout(() => {
      if (deleting && length === 0) setTyping({ index: (index + 1) % WORDS.length, length: 0, deleting: false });
      else if (deleting || complete) setTyping({ index, length: length - 1, deleting: true });
      else setTyping({ index, length: length + 1, deleting: false });
    }, delay);
    return () => window.clearTimeout(id);
  }, [location, paused, reducedMotion, typing, word.length]);

  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >

      <div className="mx-auto max-w-[1360px] text-center">
        <div className="flex items-center justify-center" aria-hidden="true">
          <PublicImage
            src="/marketingpageimages/Hero Icon.webp"
            alt=""
            width={1726}
            height={320}
            priority
            className="h-14 w-auto object-contain sm:h-16 md:h-[4.5rem] lg:h-20"
          />
        </div>

        <h1 className="mt-3 text-[clamp(1.625rem,7vw,6rem)] font-medium leading-[1.12] tracking-[-0.02em] text-[var(--ink)] sm:mt-4 sm:leading-[1.2] sm:tracking-[-0.03em] lg:mt-4 lg:leading-[1.26] lg:tracking-[-0.04em]">
          {location?.title ?? "Marketing built to create"}{" "}
          {!location && <span className="sr-only">Clarity.</span>}
          <span
            aria-hidden={location ? undefined : true}
            className="inline-flex h-[1.22em] -translate-y-[0.06em] items-center rounded-full pl-[0.4em] pr-[0.48em] align-middle transition-colors duration-300"
            style={{ backgroundColor: bg }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <span
              className="inline-flex items-center gap-[0.22em] leading-none"
              style={{ color: text }}
            >
              <span
                className="h-[0.27em] w-[0.27em] shrink-0 rounded-full"
                style={{ backgroundColor: dot }}
                aria-hidden="true"
              />
              {location ? location.highlight : (
                <span className="inline-grid whitespace-nowrap text-left">
                  <span className="invisible col-start-1 row-start-1">Conversion.</span>
                  <span className="col-start-1 row-start-1">
                    {reducedMotion ? word : word.slice(0, typing.length)}
                    {!reducedMotion && <span className="ml-[0.04em] inline-block h-[0.8em] w-[0.025em] bg-current align-baseline" />}
                  </span>
                </span>
              )}
            </span>
          </span>
        </h1>

        <p className={"mt-4 text-[15px] leading-[1.5] text-[#191918] sm:mt-5 sm:text-[17px] lg:mt-[26px] lg:text-[20px]" + (location ? " mx-auto max-w-[52rem]" : "")}>
          {location?.description ?? "We combine strategy, creative, search, and automation into marketing programs that build visibility and drive conversions."}
        </p>

        <div className="mt-6 flex w-full flex-col items-center justify-center sm:mt-[30px]">
          <PrimaryCtaLink
            href={location?.href ?? "/contact#marketing"}
            className={(location ? "min-w-[234px]" : "w-[234px]") + " justify-center text-black!"}
            color={MARKETING_HOME.primary}
          >
            {location?.action ?? "Start a Conversation"}
          </PrimaryCtaLink>
        </div>
      </div>
    </section>
  );
}
