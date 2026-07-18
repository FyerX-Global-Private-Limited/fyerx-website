export default function CaseStudiesPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Case Studies</h1>
      <p className="text-lg text-zinc-600 mb-12">
        Real results from real clients. See how Fyerx Marketing has helped
        brands grow.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {["Brand Relaunch", "Lead Generation", "E-commerce Growth", "Community Building"].map(
          (study) => (
            <div
              key={study}
              className="bg-zinc-50 rounded-2xl p-8 hover:bg-zinc-100 transition-colors cursor-pointer"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-3 block">
                Case Study
              </span>
              <h3 className="font-semibold text-xl mb-2">{study}</h3>
              <p className="text-sm text-zinc-500 leading-6">
                How Fyerx helped a client achieve breakthrough results through
                strategic {study.toLowerCase()}.
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
