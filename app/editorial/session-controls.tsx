"use client";

import { useState, type FormEvent } from "react";
import { editorialRequest } from "./api";
import styles from "./workspace.module.css";

export function SignOut() {
  const [error, setError] = useState("");
  return <div>
    <button className={styles.textButton} onClick={async () => {
      try {
        await editorialRequest("logout");
        window.location.assign("/editorial");
      } catch (failure) {
        setError((failure as Error).message);
      }
    }}>Sign out</button>
    {error && <small role="alert">{error}</small>}
  </div>;
}

export function Login() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    setBusy(true);
    setError("");
    try {
      await editorialRequest("login", Object.fromEntries(values));
      window.location.assign("/editorial");
    } catch (failure) {
      setError((failure as Error).message);
      setBusy(false);
    }
  }

  return <section className={styles.login}>
    <p className={styles.kicker}>Private editorial workspace</p>
    <h1>Sign in to FyerX Blogs</h1>
    <p>Manage drafts, reviews and published posts.</p>
    <form onSubmit={submit}>
      <label>Email or username<input name="username" autoComplete="username" required maxLength={254} /></label>
      <label>Password<input name="password" type="password" autoComplete="current-password" required maxLength={256} /></label>
      <button type="submit" className={styles.primary} disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
      {error && <p role="alert" className={styles.error}>{error}</p>}
    </form>
  </section>;
}
