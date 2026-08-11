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

const DEFAULT_CTA_COLOR = "#86013A";

function ctaStyle(color: string, textColor = "#ffffff"): CSSProperties {
  return {
    padding: "0.8125rem 1.75rem",
    borderRadius: "10rem",
    backgroundColor: color,
    color: textColor,
    backgroundImage:
      "radial-gradient(circle closest-side, rgba(254, 155, 11, 0.85) 0%, rgba(255, 129, 228, 0.85) 50%, rgba(97, 97, 255, 0) 100%)",
    backgroundSize: "350px 350px",
    backgroundRepeat: "no-repeat",
    animation: "orbSwoosh 6s ease-in-out 2s infinite both",
  };
}

const ctaClassName =
  "relative inline-flex w-fit cursor-pointer items-center justify-start gap-2 overflow-hidden text-[15px] font-semibold transition-opacity hover:opacity-95";

type PrimaryCtaLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
  href: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode | null;
  /** Pill background color. Defaults to the site-wide home burgundy (#86013A). */
  color?: string;
  /** Text color on the pill. Defaults to white; use dark text on light buttons (e.g. Marketing yellow). */
  textColor?: string;
  style?: CSSProperties;
};

export function PrimaryCtaLink({
  href,
  children,
  className = "",
  icon,
  color = DEFAULT_CTA_COLOR,
  textColor = "#ffffff",
  style,
  ...props
}: PrimaryCtaLinkProps) {
  return (
    <Link
      href={href}
      className={`${ctaClassName} ${className}`}
      style={{ ...ctaStyle(color, textColor), ...style }}
      {...props}
    >
      {children}
      {icon === null ? null : (icon ?? <CtaArrowIcon />)}
    </Link>
  );
}

type PrimaryCtaButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
  children: ReactNode;
  className?: string;
  icon?: ReactNode | null;
  /** Pill background color. Defaults to the site-wide home burgundy (#86013A). */
  color?: string;
  /** Text color on the pill. Defaults to white. */
  textColor?: string;
  style?: CSSProperties;
};

export function PrimaryCtaButton({
  children,
  className = "",
  icon,
  color = DEFAULT_CTA_COLOR,
  textColor = "#ffffff",
  style,
  type = "button",
  ...props
}: PrimaryCtaButtonProps) {
  return (
    <button type={type} className={`${ctaClassName} ${className}`} style={{ ...ctaStyle(color, textColor), ...style }} {...props}>
      {children}
      {icon === null ? null : (icon ?? <CtaArrowIcon />)}
    </button>
  );
}
