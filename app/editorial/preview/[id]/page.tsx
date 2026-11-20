import Link from "next/link";
import { notFound } from "next/navigation";
import { currentUser } from "@/lib/editorial/auth";
import { post } from "@/lib/editorial/store";
import { BlogArticle } from "../../../(main)/blog/blog-article";
import styles from "../../../(main)/blog/insights.module.css";
import workspace from "../../workspace.module.css";

export default async function Preview({ params }: { params: Promise<{ id: string }> }) {
  if (!(await currentUser())) notFound();
  const entry = post((await params).id);
  if (!entry) notFound();
  return <>
    <div className={workspace.previewBar}>
      <Link href={"/editorial/posts/" + entry.id}>← Back to editor</Link>
      <span>Private preview · Revision {entry.revision}</span>
    </div>
    <div className={styles.insights}><BlogArticle article={entry.draft} timestamp={entry.updated} preview /></div>
  </>;
}
