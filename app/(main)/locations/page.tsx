import Link from "next/link";
import { locationCities, locationPages, locationsPath } from "@/data/location-pages";
import { SITE_URL } from "@/data/seo-metadata";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: locationsPath,
  title: "Marketing & Talent Services by City | FyerX",
  description: "Explore FyerX marketing, recruitment and IT staffing services for businesses in Bangalore, Chennai and Coimbatore.",
  canonical: SITE_URL + locationsPath,
  robots: "index,follow",
  ogType: "website"
});

export default function LocationsPage() {
  return (
    <section className="home-section">
      <div className="section-shell section-shell--wide">
        <h1 className="section-heading">Find FyerX services <span className="brand-gradient-text">by city</span></h1>
        <p className="section-subheading">Explore marketing and talent support in Bangalore, Chennai and Coimbatore.</p>
        <nav aria-label="Cities" className="mt-6 flex flex-wrap gap-5 font-semibold">
          {Object.entries(locationCities).map(([key, city]) => <a key={key} href={"#" + key} className="underline underline-offset-4">{city}</a>)}
        </nav>
        {Object.entries(locationCities).map(([key, city]) => (
          <section key={key} id={key} className="mt-10 scroll-mt-32 rounded-3xl border border-neutral-200 p-5 sm:p-8">
            <h2 className="section-heading section-heading--sm">{city}</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {(["marketing", "talent"] as const).map((division) => (
                <div key={division}>
                  <h3 className="text-lg font-semibold">{division === "marketing" ? "Marketing" : "Talent"}</h3>
                  <ul className="mt-3 space-y-2">
                    {locationPages.filter((page) => page.cityKey === key && page.division === division).map((page) => (
                      <li key={page.slug}><Link href={"/" + page.slug} className="underline underline-offset-4">{page.service.name}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

