import { redirect } from "next/navigation";
import { currentUser, teamMembers } from "@/lib/editorial/auth";
import { TeamManager } from "./team-manager";
import styles from "../workspace.module.css";

export default async function TeamPage() {
  const user = await currentUser();
  if (user?.role !== "owner") redirect("/editorial");
  return <>
    <header className={styles.pageHead}>
      <div>
        <h1>Team</h1>
        <p>Add contributors who can write drafts and submit them for your review.</p>
      </div>
    </header>
    <TeamManager initialMembers={teamMembers()} />
  </>;
}
