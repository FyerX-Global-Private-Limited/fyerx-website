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
          className="border border-zinc-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#11551C]"
        />
        <input
          type="email"
          placeholder="Email address"
          className="border border-zinc-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#11551C]"
        />
        <input
          type="tel"
          placeholder="Phone number"
          className="border border-zinc-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#11551C]"
        />
        <select className="border border-zinc-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#11551C] bg-white">
          <option value="">Select session type</option>
          <option value="individual">Individual talent</option>
          <option value="group">Group Session</option>
          <option value="couples">Couples talent</option>
        </select>
        <textarea
          placeholder="Brief reason for booking (optional)"
          rows={4}
          className="border border-zinc-200 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#11551C] resize-none"
        />
        <button
          type="submit"
          className="self-start rounded-full bg-[#11551C] text-[#9EEBAA] px-8 py-3 text-sm font-medium hover:bg-[#0d4216] transition-colors"
        >
          Request Session
        </button>
      </form>
    </section>
  );
}
