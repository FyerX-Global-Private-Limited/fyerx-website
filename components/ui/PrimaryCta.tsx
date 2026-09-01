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
 *
 * `variant="menu"` is a compact premium pill for mega-menu actions
 * (e.g. Visit Homepage): soft brand glow, inset sheen, hover lift.
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

function menuCtaStyle(color: string, textColor = "#ffffff"): CSSProperties {
  return {
    padding: "0.5rem 1rem 0.5rem 1.125rem",
    borderRadius: "9999px",
    backgroundColor: color,
    color: textColor,
    backgroundImage:
      "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 55%)",
    boxShadow: `
      0 1px 0 rgba(255,255,255,0.28) inset,
      0 1px 2px rgba(16, 16, 20, 0.06),
      0 8px 20px -6px color-mix(in srgb, ${color} 55%, transparent)
    `,
  };
}

const defaultCtaClassName =
  "relative inline-flex w-fit cursor-pointer items-center justify-center gap-2 overflow-hidden text-[15px] font-semibold transition-opacity hover:opacity-95";

const navCtaClassName =
  "relative inline-flex h-10 w-fit cursor-pointer items-center justify-center gap-2 whitespace-nowrap text-[0.875rem] font-semibold leading-none transition-[transform,box-shadow,filter] duration-200 hover:-translate-y-px hover:brightness-[1.05] hover:shadow-[0_4px_14px_rgba(16,16,20,0.16)] active:translate-y-0 active:brightness-100";

const menuCtaClassName =
  "relative inline-flex h-[34px] w-fit shrink-0 cursor-pointer items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap text-[13px] font-semibold leading-none tracking-[-0.01em] transition-[transform,box-shadow,filter] duration-200 hover:-translate-y-px hover:brightness-[1.04] hover:shadow-[0_2px_0_rgba(255,255,255,0.2)_inset,0_10px_24px_-8px_rgba(16,16,20,0.22)] active:translate-y-0 active:brightness-100";

type CtaVariant = "default" | "nav" | "menu";

function ctaStyleForVariant(variant: CtaVariant, color: string, textColor: string): CSSProperties {
  if (variant === "nav") return navCtaStyle(color, textColor);
  if (variant === "menu") return menuCtaStyle(color, textColor);
  return defaultCtaStyle(color, textColor);
}

function ctaClassForVariant(variant: CtaVariant) {
  if (variant === "nav") return navCtaClassName;
  if (variant === "menu") return menuCtaClassName;
  return defaultCtaClassName;
}

type PrimaryCtaLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
  href: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode | null;
  /** Pill background color. Defaults to the site-wide home burgundy (#86013A). */
  color?: string;
  /** Text color on the pill. Defaults to white; use dark text on light buttons (e.g. Marketing yellow). */
  textColor?: string;
  /** `nav` = Monday-style solid premium header CTA (no orb). `menu` = compact mega-menu CTA. */
  variant?: CtaVariant;
  style?: CSSProperties;
};

function MenuCtaArrowIcon() {
  return (
    <svg
      className="shrink-0 opacity-90"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

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
  const resolvedIcon =
    icon === null ? null : icon !== undefined ? icon : variant === "menu" ? <MenuCtaArrowIcon /> : <CtaArrowIcon />;

  const classNameResolved = `${ctaClassForVariant(variant)} ${className}`;
  const styleResolved = {
    ...ctaStyleForVariant(variant, color, textColor),
    ...style,
  };

  // Hash deep-links (e.g. /contact#talent) use a plain <a> so Next.js Link
  // client navigation cannot append the fragment twice (#talent#talent).
  if (href.includes("#")) {
    return (
      <a href={href} className={classNameResolved} style={styleResolved} {...props}>
        {children}
        {resolvedIcon}
      </a>
    );
  }

  return (
    <Link href={href} className={classNameResolved} style={styleResolved} {...props}>
      {children}
      {resolvedIcon}
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
  const resolvedIcon =
    icon === null ? null : icon !== undefined ? icon : variant === "menu" ? <MenuCtaArrowIcon /> : <CtaArrowIcon />;

  return (
    <button
      type={type}
      className={`${ctaClassForVariant(variant)} ${className}`}
      style={{
        ...ctaStyleForVariant(variant, color, textColor),
        ...style,
      }}
      {...props}
    >
      {children}
      {resolvedIcon}
    </button>
  );
}
