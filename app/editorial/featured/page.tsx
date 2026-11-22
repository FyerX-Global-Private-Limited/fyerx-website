import { redirect } from "next/navigation";
import { currentUser } from "@/lib/editorial/auth";
import { featuredArticles } from "@/lib/editorial/store";
import { DashboardHeader } from "../dashboard-shared";
import dashboard from "../dashboard.module.css";
import { FeaturedOrder } from "./featured-order";

export default async function FeaturedPage() {
  if ((await currentUser())?.role !== "owner") redirect("/editorial");
  const articles = featuredArticles();
  return (
    <div className={dashboard.dashboard}>
      <DashboardHeader title="Featured Blogs" description="Choose the order readers see on the homepage and the Featured Blogs page." />
      <FeaturedOrder key={articles.map(({ id }) => id).join(",")} articles={articles} />
    </div>
  );
}
