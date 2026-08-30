"use client";

import { useEffect } from "react";

/** Legacy book-session URL — send visitors to the Talent contact form. */
export default function BookSessionPage() {
  useEffect(() => {
    window.location.replace("/contact#talent");
  }, []);

  return null;
}
