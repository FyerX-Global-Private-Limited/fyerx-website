import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

/**
 * The site's one primary call-to-action style: a magenta pill with an
 * animated gradient orb sweeping through it (see `orbSwoosh` in
 * app/globals.css). Reserved for the single most important action on a
 * given screen — use Button/plain links for everything else.
 *
 * `variant="nav"` is a Monday-style solid premium pill for header CTAs:
 * no orb animation, crisp shadow, subtle hover lift.
 */

function CtaArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`shrink-0 ${className}`}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="4" y1="12" x2="20" y2="12" />
      <polyline points="13 5 20 12 13 19" />
    </svg>
  );
}

const DEFAULT_CTA_COLOR = "#86013A";

function defaultCtaStyle(color: string, textColor = "#ffffff"): CSSProperties {
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

function navCtaStyle(color: string, textColor = "#ffffff"): CSSProperties {
  return {
    padding: "0.625rem 1.25rem",
    borderRadius: "9999px",
    backgroundColor: color,
    color: textColor,
    boxShadow:
      "0 1px 2px rgba(16, 16, 20, 0.06), 0 6px 16px rgba(16, 16, 20, 0.12)",
  };
}

const defaultCtaClassName =
  "relative inline-flex w-fit cursor-pointer items-center justify-center gap-2 overflow-hidden text-[15px] font-semibold transition-opacity hover:opacity-95";

const navCtaClassName =
  "relative inline-flex h-10 w-fit cursor-pointer items-center justify-center gap-2 whitespace-nowrap text-[0.875rem] font-semibold leading-none transition-[transform,box-shadow,filter] duration-200 hover:-translate-y-px hover:brightness-[1.05] hover:shadow-[0_4px_14px_rgba(16,16,20,0.16)] active:translate-y-0 active:brightness-100";

type CtaVariant = "default" | "nav";

type PrimaryCtaLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
  href: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode | null;
  /** Pill background color. Defaults to the site-wide home burgundy (#86013A). */
  color?: string;
  /** Text color on the pill. Defaults to white; use dark text on light buttons (e.g. Marketing yellow). */
  textColor?: string;
  /** `nav` = Monday-style solid premium header CTA (no orb). */
  variant?: CtaVariant;
  style?: CSSProperties;
};

export function PrimaryCtaLink({
  href,
  children,
  className = "",
  icon,
  color = DEFAULT_CTA_COLOR,
  textColor = "#ffffff",
  variant = "default",
  style,
  ...props
}: PrimaryCtaLinkProps) {
  const isNav = variant === "nav";
  return (
    <Link
      href={href}
      className={`${isNav ? navCtaClassName : defaultCtaClassName} ${className}`}
      style={{
        ...(isNav ? navCtaStyle(color, textColor) : defaultCtaStyle(color, textColor)),
        ...style,
      }}
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
  variant?: CtaVariant;
  style?: CSSProperties;
};

export function PrimaryCtaButton({
  children,
  className = "",
  icon,
  color = DEFAULT_CTA_COLOR,
  textColor = "#ffffff",
  variant = "default",
  style,
  type = "button",
  ...props
}: PrimaryCtaButtonProps) {
  const isNav = variant === "nav";
  return (
    <button
      type={type}
      className={`${isNav ? navCtaClassName : defaultCtaClassName} ${className}`}
      style={{
        ...(isNav ? navCtaStyle(color, textColor) : defaultCtaStyle(color, textColor)),
        ...style,
      }}
      {...props}
    >
      {children}
      {icon === null ? null : (icon ?? <CtaArrowIcon />)}
    </button>
  );
}
