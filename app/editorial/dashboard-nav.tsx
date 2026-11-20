"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { BarChart3, Files, Users } from "lucide-react";
import styles from "./workspace.module.css";

export function DashboardNav({ canManageTeam }: { canManageTeam: boolean }) {
  const pathname = usePathname();
  const sample = useSearchParams().get("sample") === "1" ? "?sample=1" : "";
  const analytics = pathname === "/editorial/analytics";
  const team = pathname === "/editorial/team";
  return <div className={styles.dashboardNav}>
    <Link href={"/editorial" + sample} aria-current={!analytics && !team ? "page" : undefined}><Files size={15} aria-hidden="true" />Posts</Link>
    <Link href={"/editorial/analytics" + sample} aria-current={analytics ? "page" : undefined}><BarChart3 size={15} aria-hidden="true" />Analytics</Link>
    {canManageTeam && <Link href="/editorial/team" aria-current={team ? "page" : undefined}><Users size={15} aria-hidden="true" />Team</Link>}
  </div>;
}
