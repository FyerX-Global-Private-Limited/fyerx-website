export default function BookSessionPage() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight mb-4">
        Book a Session
      </h1>
      <p className="text-lg text-zinc-600 mb-10">
        Schedule your first talent session with a Fyerx specialist. Choose
        a time that works for you.
      </p>
      <form className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Full name"
          className="border border-zinc-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900"
        />
        <input
          type="email"
          placeholder="Email address"
          className="border border-zinc-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900"
        />
        <input
          type="tel"
          placeholder="Phone number"
          className="border border-zinc-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900"
        />
        <select className="border border-zinc-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900 bg-white">
          <option value="">Select session type</option>
          <option value="individual">Individual talent</option>
          <option value="group">Group Session</option>
          <option value="couples">Couples talent</option>
        </select>
        <textarea
          placeholder="Brief reason for booking (optional)"
          rows={4}
          className="border border-zinc-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900 resize-none"
        />
        <button
          type="submit"
          className="self-start rounded-full bg-[#0B2E59] text-white px-8 py-3 text-sm font-medium hover:bg-[#092547] transition-colors"
        >
          Request Session
        </button>
      </form>
    </section>
  );
}
