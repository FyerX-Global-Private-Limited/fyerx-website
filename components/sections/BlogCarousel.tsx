"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./LatestBlogs.module.css";

export function BlogCarousel({ children, labelId }: { children: ReactNode; labelId: string }) {
  const id = useId();
  const viewport = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ previous: false, next: false });

  useEffect(() => {
    const track = viewport.current;
    if (!track) return;
    const update = () => setEdges({
      previous: track.scrollLeft > 2,
      next: track.scrollLeft + track.clientWidth < track.scrollWidth - 2,
    });
    const observer = new ResizeObserver(update);
    observer.observe(track);
    track.addEventListener("scroll", update, { passive: true });
    update();
    return () => {
      track.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, [children]);

  function move(direction: number) {
    const track = viewport.current;
    const first = track?.firstElementChild;
    if (!track || !first) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (first.getBoundingClientRect().width + gap) });
  }

  return (
    <div className={styles.carousel}>
      {(edges.previous || edges.next) && (
        <div className={styles.carouselControls}>
          <button type="button" aria-controls={id} aria-label="Previous article" disabled={!edges.previous} onClick={() => move(-1)}><ArrowLeft size={18} aria-hidden="true" /></button>
          <button type="button" aria-controls={id} aria-label="Next article" disabled={!edges.next} onClick={() => move(1)}><ArrowRight size={18} aria-hidden="true" /></button>
        </div>
      )}
      <div className={styles.grid} id={id} ref={viewport} role="region" aria-labelledby={labelId} tabIndex={0}>{children}</div>
    </div>
  );
}
