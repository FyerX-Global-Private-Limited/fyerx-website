import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { currentUser } from "@/lib/editorial/auth";
import { editorialMode } from "@/lib/editorial/config";
import { SignOut } from "./session-controls";
import { DashboardNav } from "./dashboard-nav";
import styles from "./workspace.module.css";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Editorial workspace | FyerX Blogs",
  robots: { index: false, follow: false, nocache: true },
};

export default async function EditorialLayout({ children }: { children: React.ReactNode }) {
  if (!editorialMode()) notFound();
  const user = await currentUser();
  return (
    <div className={styles.workspace}>
      <header className={styles.topBar}>
        <Link href="/editorial" className={styles.logo}><span>FX</span> FyerX Blogs</Link>
        {user && <nav aria-label="Workspace" className={styles.topNav}>
          <DashboardNav />
          <span className={styles.role}>{user.username} · {user.role}</span>
          <SignOut />
        </nav>}
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
