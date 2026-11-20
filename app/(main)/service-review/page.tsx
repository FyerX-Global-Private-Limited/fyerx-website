import Link from "next/link";
import { serviceDirectory } from "@/lib/service-directory";

export const metadata = {
  title: "Service page review | FyerX",
  robots: { index: false, follow: false },
};

const divisions = [
  { name: "Technology", key: "technology", color: "#302982" },
  { name: "Talent", key: "talent", color: "#11551c" },
  { name: "Marketing", key: "marketing", color: "#8b5800" },
] as const;

export default function ServiceReview() {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-20">
      <h1 className="mb-4 text-4xl font-semibold tracking-tight">Service page review</h1>
      <p className="mb-10 text-lg">{serviceDirectory.length} service pages across Technology, Talent and Marketing.</p>
      <div className="grid items-start gap-10 lg:grid-cols-3">
        {divisions.map(({ name, key, color }) => {
          const services = serviceDirectory.filter(service => service.division === key);
          const categories = [...new Set(services.map(service => service.category))];
          return (
            <section key={key} className="border-t-4 pt-5" style={{borderColor: color}}>
              <h2 className="mb-5 text-2xl font-semibold" style={{color}}>{name} · {services.length}</h2>
              {categories.map(category => (
                <div key={category} className="mb-6">
                  <h3 className="mb-2 text-base font-semibold">{category}</h3>
                  <ul className="space-y-2">
                    {services.filter(service => service.category === category).map(service => (
                      <li key={service.path}><Link prefetch={false} className="underline decoration-gray-300 underline-offset-4 hover:decoration-current" href={service.path}>{service.label}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          );
        })}
      </div>
    </div>
  );
}
