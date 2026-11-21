export const locationCities = { bangalore: "Bangalore", chennai: "Chennai", coimbatore: "Coimbatore" } as const;

export type CityKey = keyof typeof locationCities;

export type LocalCopy = {
  intro: string;
  heading: string;
  detail: string;
  brief: string;
  question: string;
  answer: string;
};

export type LocationService = {
  slug: string;
  name: string;
  offer: string;
  related: string;
  proof?: string;
  careers?: true;
  markets: Record<CityKey, LocalCopy>;
};

