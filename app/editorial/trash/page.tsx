import { redirect } from "next/navigation";
import { currentUser } from "@/lib/editorial/auth";
import { trashedPosts } from "@/lib/editorial/store";
import type { Query } from "@/lib/pagination";
import { Pagination } from "@/components/ui/Pagination";
import { DashboardHeader } from "../dashboard-shared";
import dashboard from "../dashboard.module.css";
import { TrashList } from "./trash-list";

export default async function TrashPage({ searchParams }: { searchParams: Promise<Query> }) {
  if ((await currentUser())?.role !== "owner") redirect("/editorial");
  const { articles, pagination } = trashedPosts(await searchParams);
  return (
    <div className={dashboard.dashboard}>
      <DashboardHeader title="Trash" description="Restore deleted posts as drafts. They stay private until published again." />
      <section className={dashboard.panel} aria-label="Deleted posts">
        <TrashList articles={articles} />
        <Pagination path="/editorial/trash" pagination={pagination} />
      </section>
    </div>
  );
}
