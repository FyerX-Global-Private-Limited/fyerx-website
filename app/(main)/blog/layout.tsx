import type { Metadata } from "next";
import styles from "./insights.module.css";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return <div className={styles.insights}>{children}</div>;
}
