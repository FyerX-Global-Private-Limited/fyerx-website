import { redirect } from "next/navigation";
import { currentUser } from "@/lib/editorial/auth";
import { dashboardData } from "../dashboard-data";
import { AnalyticsDashboard } from "./analytics-dashboard";

export default async function AnalyticsPage({ searchParams }: {
  searchParams: Promise<{ sample?: string | string[]; post?: string | string[] }>;
}) {
  if (!(await currentUser())) redirect("/editorial");
  const { sample, post } = await searchParams;
  return <AnalyticsDashboard key={String(post ?? "")} {...dashboardData(sample)} initialPost={typeof post === "string" ? post : ""} />;
}
