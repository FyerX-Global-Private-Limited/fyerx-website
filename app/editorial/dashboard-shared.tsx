import Link from "next/link";
import type { ReactNode } from "react";
import { FlaskConical } from "lucide-react";
import { dateLabel, type Traffic } from "@/lib/editorial/traffic-dates";
import styles from "./dashboard.module.css";

export function DashboardHeader({ title, description, actions }: { title: string; description: string; actions?: ReactNode }) {
  return <header className={styles.hero}>
    <div><p>FyerX Blogs</p><h1>{title}</h1><p>{description}</p></div>
    {actions}
  </header>;
}

export function SampleMode({ isolated, traffic, path }: { isolated: boolean; traffic: Traffic; path: string }) {
  if (!isolated) return null;
  return <div className={styles.sample}>
    <span><FlaskConical size={15} aria-hidden="true" />{traffic.sample ? "Isolated sample traffic · illustrative figures" : "Isolated workspace · recorded traffic"}</span>
    <Link href={path + (traffic.sample ? "" : (path.includes("?") ? "&" : "?") + "sample=1")}>{traffic.sample ? "Show recorded data" : "Show sample data"}</Link>
  </div>;
}

export function TrafficNote({ traffic }: { traffic: Traffic }) {
  if (!traffic.started) return <p className={styles.note}>Traffic data is currently unavailable.</p>;
  return <p className={styles.note}>{traffic.sample ? "Illustrative dataset" : "Measurement started " + dateLabel(traffic.started, true)} · Calendar days in IST</p>;
}
