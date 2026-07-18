import Link from "next/link";

export default function BookingCTA() {
  return (
    <section className="bg-green-700 py-20">
      <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Ready to take the first step?
        </h2>
        <p className="text-green-100 text-lg leading-8 max-w-lg">
          Book a session today and speak with a qualified consultant who's here
          to support you.
        </p>
        <Link
          href="/consulting/book-session"
          className="rounded-full bg-white text-green-800 px-8 py-3 font-semibold hover:bg-green-50 transition-colors"
        >
          Book a Session
        </Link>
      </div>
    </section>
  );
}
