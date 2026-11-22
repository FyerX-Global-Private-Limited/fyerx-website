import { currentUser } from "@/lib/editorial/auth";
import type { Query } from "@/lib/pagination";
import { postLibraryData } from "./post-library-data";
import { Login } from "./session-controls";
import { PostsList } from "./posts-list";

export default async function EditorialPage({ searchParams }: { searchParams: Promise<Query> }) {
  const user = await currentUser();
  if (!user) return <Login />;
  const data = postLibraryData(await searchParams);
  const key = JSON.stringify([data.filters, data.pagination.page, data.pagination.size]);
  return <PostsList key={key} {...data} owner={user.role === "owner"} />;
}
