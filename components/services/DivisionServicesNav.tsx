import Link from "next/link";
import { serviceDirectory, type ServiceDivision } from "@/lib/service-directory";

const titles = {
  technology: "Technology services",
  talent: "Talent solutions",
  marketing: "Marketing services",
};

export function DivisionServicesNav({ division, pageTitle = false }: { division: ServiceDivision; pageTitle?: boolean }) {
  const Heading = pageTitle ? "h1" : "h2";
  const groups = new Map<string, typeof serviceDirectory>();
  for (const service of serviceDirectory.filter((item) => item.division === division)) {
    const group = groups.get(service.category) ?? [];
    group.push(service);
    groups.set(service.category, group);
  }

  return (
    <section id="service-directory" className="scroll-mt-20 bg-white px-5 py-12 sm:px-10 lg:py-16">
      <nav aria-labelledby="directory-heading" className="mx-auto max-w-[1200px]">
        <Heading id="directory-heading" className="section-title-lg">{titles[division]}</Heading>
        <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from(groups, ([category, services]) => (
            <div key={category} id={`services-${services[0].categorySlug}`} className="scroll-mt-20 border-t border-[#dddfe5] pt-4">
              <h3 className="text-lg font-semibold">{category}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {services.map((service) => (
                  <li key={service.path}>
                    <Link href={service.path} className="text-[#434757] underline decoration-[#c3c6d1] underline-offset-4 hover:decoration-current">
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </section>
  );
}
