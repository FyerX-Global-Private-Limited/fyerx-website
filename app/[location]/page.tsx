import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationPageView from "@/components/sections/LocationPageView";
import { findLocationPage } from "@/data/location-pages";
import { SITE_URL } from "@/data/seo-metadata";
import { buildMetadata } from "@/lib/seo";

type Props = { params: Promise<{ location: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = findLocationPage((await params).location);
  if (!page) notFound();
  const path = "/" + page.slug;
  const title = page.slug === "digital-marketing-agency-in-bangalore"
    ? "Bangalore Digital Marketing Agency for SEO & Paid Media | FyerX"
    : page.service.name + " in " + page.city + " | FyerX";
  return buildMetadata({
    path, title, description: page.copy.intro, canonical: SITE_URL + path,
    robots: "index,follow", ogType: "website"
  });
}

export default async function Page({ params }: Props) {
  const page = findLocationPage((await params).location);
  if (!page) notFound();
  return <LocationPageView page={page} />;
}
