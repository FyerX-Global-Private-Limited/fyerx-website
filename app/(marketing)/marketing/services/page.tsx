export default function ServicesPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Our Services</h1>
      <p className="text-lg text-zinc-600 mb-12">
        From brand strategy to performance campaigns, Fyerx Marketing delivers
        results-driven solutions for every stage of your growth.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {["Brand Strategy", "Content Marketing", "Performance Ads", "SEO & Growth", "Social Media", "Analytics"].map(
          (service) => (
            <div
              key={service}
              className="border border-zinc-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-lg mb-2">{service}</h3>
              <p className="text-sm text-zinc-500 leading-6">
                Tailored {service.toLowerCase()} solutions designed for
                measurable impact.
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
