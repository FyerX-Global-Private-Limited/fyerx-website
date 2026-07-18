import Link from "next/link";

export default function ConsultingHero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32 flex flex-col items-center text-center gap-6">
      <span className="text-xs font-semibold uppercase tracking-widest text-green-700 bg-green-50 px-4 py-1.5 rounded-full">
        Fyerx Consulting
      </span>
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 max-w-3xl leading-tight">
        Expert guidance for growth and clarity
      </h1>
      <p className="text-xl text-zinc-500 max-w-xl leading-8">
        Professional consulting services tailored to help you navigate
        challenges and unlock your potential.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Link
          href="/consulting/book-session"
          className="rounded-full bg-green-700 text-white px-8 py-3 font-medium hover:bg-green-800 transition-colors"
        >
          Book a Session
        </Link>
        <Link
          href="/consulting/individual"
          className="rounded-full border border-zinc-200 text-zinc-900 px-8 py-3 font-medium hover:bg-zinc-50 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
