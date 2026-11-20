import { currentUser } from "@/lib/editorial/auth";
import { dashboardData } from "./dashboard-data";
import { Login } from "./session-controls";
import { PostsList } from "./posts-list";

export default async function EditorialPage({ searchParams }: { searchParams: Promise<{ sample?: string | string[] }> }) {
  if (!(await currentUser())) return <Login />;
  return <PostsList {...dashboardData((await searchParams).sample)} />;
}
