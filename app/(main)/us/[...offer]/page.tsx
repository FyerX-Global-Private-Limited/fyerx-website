import { notFound } from "next/navigation";
import { isUsOfferKey, usOffers } from "@/data/us-offers";
import { UsOfferPage, usMetadata } from "../_components";

type Props = { params: Promise<{ offer: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(usOffers).map((key) => ({ offer: key.split("/") }));
}

async function resolveOffer(params: Props["params"]) {
  const key = (await params).offer.join("/");
  if (!isUsOfferKey(key)) notFound();
  return key;
}

export async function generateMetadata({ params }: Props) {
  const selected = usOffers[await resolveOffer(params)];
  return usMetadata(selected.path, selected.heading, selected.description);
}

export default async function Page({ params }: Props) {
  return <UsOfferPage offerKey={await resolveOffer(params)} />;
}
