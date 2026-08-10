import Link from "next/link";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";

export default function TalentHero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32 flex flex-col items-center text-center gap-6">
      <span className="text-xs font-semibold uppercase tracking-widest text-green-700 bg-green-50 px-4 py-1.5 rounded-full">
        Fyerx Talent
      </span>
      <h1 className="text-[46px] font-medium tracking-[-0.02em] text-[var(--ink)] max-w-3xl leading-[1.12] md:text-6xl">
        Expert guidance for growth and clarity
      </h1>
      <p className="text-xl text-zinc-500 max-w-xl leading-8">
        Professional talent services tailored to help you navigate
        challenges and unlock your potential.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <PrimaryCtaLink href="/talent/book-session" color="#11551C" textColor="#9EEBAA">
          Book a Session
        </PrimaryCtaLink>
        <Link
          href="/talent/individual"
          className="rounded-full border border-zinc-200 text-zinc-900 px-8 py-3 font-medium hover:bg-zinc-50 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
