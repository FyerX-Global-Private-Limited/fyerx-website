export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Contact Us</h1>
      <p className="text-lg text-zinc-600 mb-10">
        Get in touch with the Fyerx team. We'd love to hear from you.
      </p>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your name"
          className="border border-zinc-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900"
        />
        <input
          type="email"
          placeholder="Your email"
          className="border border-zinc-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900"
        />
        <textarea
          placeholder="Your message"
          rows={5}
          className="border border-zinc-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900 resize-none"
        />
        <button
          type="submit"
          className="self-start rounded-full bg-zinc-900 text-white px-8 py-3 text-sm font-medium hover:bg-zinc-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
