"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { BarChart3, Files } from "lucide-react";
import styles from "./workspace.module.css";

export function DashboardNav() {
  const pathname = usePathname();
  const sample = useSearchParams().get("sample") === "1" ? "?sample=1" : "";
  const analytics = pathname === "/editorial/analytics";
  return <div className={styles.dashboardNav}>
    <Link href={"/editorial" + sample} aria-current={!analytics ? "page" : undefined}><Files size={15} aria-hidden="true" />Posts</Link>
    <Link href={"/editorial/analytics" + sample} aria-current={analytics ? "page" : undefined}><BarChart3 size={15} aria-hidden="true" />Analytics</Link>
  </div>;
}
