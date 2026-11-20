import "server-only";

import technology from "@/data/technology-service-content.json";
import talent from "@/data/talent-service-content.json";
import marketing from "@/data/marketing-service-content.json";
import { serviceDirectory, type ServiceEntry } from "./service-directory";

export type ServiceDivision = ServiceEntry["division"];
export type ServiceParams = { category: string; service: string };
export type ServiceArticle = {
  intro: string;
  sections: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
};

const articles: Record<ServiceDivision, Record<string, ServiceArticle>> = {
  technology,
  talent,
  marketing,
};

export function articleFor(entry: ServiceEntry) {
  const article = articles[entry.division][entry.label];
  if (!article) throw new Error(`Missing service article at ${entry.path}`);
  return article;
}

export function findService(division: ServiceDivision, params: ServiceParams) {
  return serviceDirectory.find(entry =>
    entry.division === division && entry.categorySlug === params.category && entry.slug === params.service
  );
}

export function paramsFor(division: ServiceDivision): ServiceParams[] {
  return serviceDirectory
    .filter(entry => entry.division === division)
    .map(entry => ({ category: entry.categorySlug, service: entry.slug }));
}

export const divisionNames: Record<ServiceDivision, string> = {
  technology: "Technology",
  talent: "Talent",
  marketing: "Marketing",
};
