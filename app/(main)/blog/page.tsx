import type { Metadata } from "next";
import { InsightsFeed } from "./insights-feed";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "FyerX Blogs",
  description: "Practical perspectives on talent, marketing and technology.",
};

export default function InsightsPage() {
  return <InsightsFeed />;
}
