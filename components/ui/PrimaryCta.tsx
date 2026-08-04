import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

/**
 * The site's one primary call-to-action style: a magenta pill with an
 * animated gradient orb sweeping through it (see `orbSwoosh` in
 * app/globals.css). Reserved for the single most important action on a
 * given screen — use Button/plain links for everything else.
 */

function CtaArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.3} strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="13 5 20 12 13 19" />
    </svg>
  );
}

const ctaClassName =
  "relative inline-flex w-fit items-center justify-start gap-2 overflow-hidden text-[15px] font-semibold text-white transition-opacity hover:opacity-95";

const DEFAULT_CTA_COLOR = "#ab0549";

function ctaStyle(color: string): CSSProperties {
  return {
    padding: "0.8125rem 1.75rem",
    borderRadius: "10rem",
    backgroundColor: color,
    backgroundImage:
      "radial-gradient(circle closest-side, rgba(254, 155, 11, 0.85) 0%, rgba(255, 129, 228, 0.85) 50%, rgba(97, 97, 255, 0) 100%)",
    backgroundSize: "350px 350px",
    backgroundRepeat: "no-repeat",
    animation: "orbSwoosh 6s ease-in-out 2s infinite both",
  };
}

type PrimaryCtaLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "style"> & {
  href: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode | null;
  /** Pill background color. Defaults to the site-wide magenta (#ab0549). */
  color?: string;
};

export function PrimaryCtaLink({
  href,
  children,
  className = "",
  icon,
  color = DEFAULT_CTA_COLOR,
  style,
  ...props
}: PrimaryCtaLinkProps) {
  return (
    <Link
      href={href}
      className={`${ctaClassName} ${className}`}
      style={{ ...ctaStyle(color), ...style }}
      {...props}
    >
      {children}
      {icon === null ? null : (icon ?? <CtaArrowIcon />)}
    </Link>
  );
}

type PrimaryCtaButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "style"> & {
  children: ReactNode;
  className?: string;
  icon?: ReactNode | null;
  /** Pill background color. Defaults to the site-wide magenta (#ab0549). */
  color?: string;
};

export function PrimaryCtaButton({
  children,
  className = "",
  icon,
  color = DEFAULT_CTA_COLOR,
  type = "button",
  ...props
}: PrimaryCtaButtonProps) {
  return (
    <button type={type} className={`${ctaClassName} ${className}`} style={ctaStyle(color)} {...props}>
      {children}
      {icon === null ? null : (icon ?? <CtaArrowIcon />)}
    </button>
  );
}
