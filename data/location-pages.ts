import { marketingLocations } from "./location-marketing";
import { talentLocations } from "./location-talent";
import { locationCities, type CityKey } from "./location-types";

export { locationCities };

const cities = Object.keys(locationCities) as CityKey[];
const catalogues = { marketing: marketingLocations, talent: talentLocations } as const;

export const locationPages = (["marketing", "talent"] as const).flatMap((division) =>
  catalogues[division].flatMap((service) =>
    cities.map((cityKey) => ({
      division,
      service,
      cityKey,
      city: locationCities[cityKey],
      slug: service.slug + "-in-" + cityKey,
      copy: service.markets[cityKey]
    }))
  )
);

export type LocationPage = (typeof locationPages)[number];

export const locationsPath = "/locations";

export function findLocationPage(slug: string) {
  return locationPages.find((page) => page.slug === slug);
}

export function locationRedirects() {
  const aliases = [
    ["digital-marketing-company", "digital-marketing-agency"],
    ["recruitment-agency", "recruitment-company"],
    ["it-staffing-agency", "staffing-agency"]
  ];
  return [
    { source: "/digital-marketing-agency-in-bengaluru", destination: "/digital-marketing-agency-in-bangalore", permanent: true as const },
    ...aliases.flatMap(([from, to]) => cities.map((city) => ({
      source: "/" + from + "-in-" + city,
      destination: "/" + to + "-in-" + city,
      permanent: true as const
    })))
  ];
}

