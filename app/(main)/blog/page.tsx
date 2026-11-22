import type { Query } from "@/lib/pagination";
import { feedMetadata, InsightsFeed } from "./insights-feed";

export const dynamic = "force-dynamic";
type Props = { searchParams: Promise<Query> };

export async function generateMetadata({ searchParams }: Props) {
  return feedMetadata({ query: await searchParams });
}

export default async function InsightsPage({ searchParams }: Props) {
  return <InsightsFeed query={await searchParams} />;
}
