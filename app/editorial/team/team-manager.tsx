"use client";

import { useState, type FormEvent } from "react";
import { editorialRequest } from "../api";
import styles from "../workspace.module.css";

type Member = { email: string; created: string };
const dateFormat = new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeZone: "Asia/Kolkata" });

export function TeamManager({ initialMembers }: { initialMembers: Member[] }) {
  const [members, setMembers] = useState(initialMembers);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [created, setCreated] = useState("");

  async function addMember(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setBusy(true);
    setError("");
    setCreated("");
    try {
      const { member } = await editorialRequest("team", data) as { member: Member };
      setMembers((previous) => [...previous, member].sort((a, b) => a.email.localeCompare(b.email)));
      setCreated(member.email);
      form.reset();
    } catch (failure) {
      setError((failure as Error).message);
    } finally {
      setBusy(false);
    }
  }

  return <div className={styles.teamGrid}>
    <section className={styles.teamPanel}>
      <h2>Add a contributor</h2>
      <form onSubmit={addMember} aria-busy={busy}>
        <label>Email address<input name="email" type="email" required maxLength={254} autoComplete="off" /></label>
        <label>Password<input name="password" type="password" required minLength={16} maxLength={256} autoComplete="new-password" />
          <small>Use at least 16 characters. Share the password securely with your contributor.</small>
        </label>
        <button type="submit" className={styles.primary} disabled={busy}>{busy ? "Creating account…" : "Create account"}</button>
      </form>
      {error && <p role="alert" className={styles.error}>{error}</p>}
      {created && <p role="status" className={styles.hint}>Account created for {created}.</p>}
    </section>
    <section className={styles.teamPanel}>
      <h2>Contributors</h2>
      {members.length ? <ul className={styles.teamList}>
        {members.map(({ email, created }) => <li key={email}>
          <span>{email}</span><time dateTime={created}>{dateFormat.format(new Date(created))}</time>
        </li>)}
      </ul> : <p className={styles.hint}>No contributors have been added yet.</p>}
    </section>
  </div>;
}
