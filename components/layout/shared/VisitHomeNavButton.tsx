import Link from "next/link";
import type { CSSProperties } from "react";

/**
 * Monday-style outline nav button → FyerX main home.
 * Brand-colored border/text; fills with brand color on hover.
 */
export function VisitHomeNavButton({
  color,
  textColor,
  hoverTextColor = "#ffffff",
  onClick,
  onMouseEnter,
  className = "",
}: {
  color: string;
  /** Outline label color; defaults to brand `color`. Use dark text on yellow. */
  textColor?: string;
  hoverTextColor?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  className?: string;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={`inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full border-2 bg-transparent px-5 text-[0.875rem] font-semibold leading-none text-[var(--visit-home-text)] transition-colors duration-200 hover:bg-[var(--visit-home-color)] hover:text-[var(--visit-home-hover-text)] ${className}`}
      style={
        {
          ["--visit-home-color" as string]: color,
          ["--visit-home-text" as string]: textColor ?? color,
          ["--visit-home-hover-text" as string]: hoverTextColor,
          borderColor: color,
        } as CSSProperties
      }
    >
      Visit Home
    </Link>
  );
}
