import BookingCTA from "@/components/sections/talent/BookingCTA";

export default function IndividualTalentPage() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Individual talent
        </h1>
        <p className="text-lg text-zinc-600 leading-8 mb-10">
          One-on-one sessions tailored to your personal goals. Our talent
          specialists create a safe, confidential space for you to explore
          challenges and build resilience.
        </p>
        <ul className="space-y-4">
          {[
            "Anxiety & stress management",
            "Relationship challenges",
            "Career transitions",
            "Grief & loss",
            "Self-esteem & identity",
          ].map((topic) => (
            <li key={topic} className="flex items-center gap-3 text-zinc-700">
              <span className="w-2 h-2 rounded-full bg-zinc-900 inline-block" />
              {topic}
            </li>
          ))}
        </ul>
      </section>
      <BookingCTA />
    </>
  );
}
