"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ImagePlus, X } from "lucide-react";
import { editorialRequest } from "./api";
import type { ImageRequest } from "./rich-editor";
import styles from "./workspace.module.css";

export function ImageDialog({ request, close }: { request: ImageRequest; close: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [file, setFile] = useState(request.file);
  const [alt, setAlt] = useState(request.media?.alt ?? "");
  const [caption, setCaption] = useState(request.media?.caption ?? "");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => { dialog.current?.showModal(); }, []);

  async function submit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError("");
    try {
      const src = file ? (await editorialRequest("media", file)).src : request.media?.src;
      if (!src) throw new Error("Choose an image first");
      request.apply({ src, alt: alt.trim(), caption: caption.trim() });
      close();
    } catch (failure) {
      setError((failure as Error).message);
      setBusy(false);
    }
  }

  return <dialog ref={dialog} className={styles.dialog} aria-label={request.label} onCancel={(event) => {
    event.preventDefault();
    if (!busy) close();
  }}>
    <form onSubmit={submit}>
      <div className={styles.dialogTitle}><h2>{request.label}</h2><button type="button" aria-label="Close image dialog" className={styles.iconButton} disabled={busy} onClick={close}><X size={19} /></button></div>
      {request.media?.src && !file && <Image src={request.media.src} alt="" width={360} height={200} unoptimized />}
      <label className={styles.fileChoice}><ImagePlus size={18} /><span>{file?.name ?? "Choose a JPG, PNG or WebP · max 5 MB"}</span><input type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => setFile(event.target.files?.[0])} /></label>
      {request.allowCaption && <>
        <label>Alt text<input value={alt} onChange={(event) => setAlt(event.target.value)} maxLength={300} placeholder="Describe what the image communicates" /></label>
        <label>Caption <small>Optional</small><input value={caption} onChange={(event) => setCaption(event.target.value)} maxLength={400} /></label>
      </>}
      {error && <p className={styles.error} role="alert">{error}</p>}
      <div className={styles.lineActions}><button className={styles.primary} type="submit" disabled={busy}>{busy ? "Uploading…" : request.label.startsWith("Insert") ? "Insert image" : "Apply image"}</button><button type="button" className={styles.secondary} disabled={busy} onClick={close}>Cancel</button></div>
    </form>
  </dialog>;
}
