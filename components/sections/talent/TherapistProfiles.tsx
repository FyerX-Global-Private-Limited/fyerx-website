const therapists = [
  {
    name: "Dr. Priya Mehra",
    specialty: "Anxiety & Stress",
    experience: "12 years",
    initials: "PM",
  },
  {
    name: "Arjun Nair",
    specialty: "Relationship Consulting",
    experience: "8 years",
    initials: "AN",
  },
  {
    name: "Sneha Rao",
    specialty: "Grief & Trauma",
    experience: "10 years",
    initials: "SR",
  },
];

export default function TherapistProfiles() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-[46px] font-medium leading-[1.12] tracking-[-0.02em] text-center text-[var(--ink)] mb-14">
          Meet our talent
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {therapists.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-center text-center gap-4 bg-zinc-50 rounded-2xl p-8"
            >
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold text-lg">
                {t.initials}
              </div>
              <div>
                <p className="font-semibold text-lg">{t.name}</p>
                <p className="text-sm text-zinc-500">{t.specialty}</p>
                <p className="text-xs text-zinc-400 mt-1">{t.experience} experience</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
