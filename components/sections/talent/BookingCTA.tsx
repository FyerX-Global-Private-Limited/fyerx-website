import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";

export default function BookingCTA() {
  return (
    <section className="bg-green-700 py-20">
      <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          Ready to take the first step?
        </h2>
        <p className="text-green-100 text-lg leading-8 max-w-lg">
          Book a session today and speak with a qualified talent specialist
          who&apos;s here to support you.
        </p>
        <PrimaryCtaLink href="/talent/book-session" color="#2935a3">
          Book a Session
        </PrimaryCtaLink>
      </div>
    </section>
  );
}
