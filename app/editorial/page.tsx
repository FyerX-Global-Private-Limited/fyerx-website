import { currentUser } from "@/lib/editorial/auth";
import type { Query } from "@/lib/pagination";
import { postLibraryData } from "./post-library-data";
import { Login } from "./session-controls";
import { PostsList } from "./posts-list";

export default async function EditorialPage({ searchParams }: { searchParams: Promise<Query> }) {
  if (!(await currentUser())) return <Login />;
  return <PostsList {...postLibraryData(await searchParams)} />;
}
