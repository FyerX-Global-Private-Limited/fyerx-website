import { notFound, redirect } from "next/navigation";
import { currentUser } from "@/lib/editorial/auth";
import { editorialOrigin } from "@/lib/editorial/config";
import { post } from "@/lib/editorial/store";
import { PostEditor } from "../../post-editor";

export default async function EditPost({ params }: { params: Promise<{ id: string }> }) {
  const user = await currentUser();
  if (!user) redirect("/editorial");
  const entry = post((await params).id);
  if (!entry) notFound();
  return <PostEditor initial={entry} role={user.role} origin={editorialOrigin()} />;
}
