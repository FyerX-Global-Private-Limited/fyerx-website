import type { CSSProperties, ReactNode } from "react";

export type MenuIconName =
  | "clipboardCheck"
  | "megaphone"
  | "gear"
  | "headset"
  | "personPlus"
  | "funnel"
  | "link"
  | "sparkle"
  | "heart"
  | "chart"
  | "doc"
  | "formEdit"
  | "plug"
  | "robot"
  | "database"
  | "tag"
  | "search"
  | "globe";

export const MENU_ICON_PALETTE: Record<
  MenuIconName,
  { tint: string; color: string }
> = {
  chart: { tint: "#FFF0E6", color: "#FDAB3D" },
  search: { tint: "#E8F4FF", color: "#579BFC" },
  megaphone: { tint: "#E8F8EF", color: "#00CA72" },
  robot: { tint: "#E8F4FF", color: "#0086C0" },
  sparkle: { tint: "#FFE8F5", color: "#FF5AC4" },
  heart: { tint: "#FFE8EE", color: "#E2445C" },
  doc: { tint: "#FFE8E6", color: "#E2445C" },
  funnel: { tint: "#F3EEFF", color: "#6161FF" },
  personPlus: { tint: "#E8F4FF", color: "#579BFC" },
  clipboardCheck: { tint: "#E8F8EF", color: "#00CA72" },
  tag: { tint: "#F3EEFF", color: "#A25DDC" },
  gear: { tint: "#FFF6E6", color: "#FDAB3D" },
  headset: { tint: "#F3EEFF", color: "#6161FF" },
  link: { tint: "#E8F4FF", color: "#0086C0" },
  formEdit: { tint: "#FFE8F5", color: "#FF5AC4" },
  plug: { tint: "#F3EEFF", color: "#6161FF" },
  database: { tint: "#E8F4FF", color: "#579BFC" },
  globe: { tint: "#E8F8EF", color: "#00CA72" },
};

function SvgWrap({
  size,
  children,
}: {
  size: number;
  children: ReactNode;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/** Bold, filled Monday-style menu icon. */
export function MenuGlyphBold({
  name,
  color = "#6161FF",
  size = 22,
}: {
  name: MenuIconName;
  color?: string;
  size?: number;
}) {
  const dark = color;

  switch (name) {
    case "chart":
      return (
        <SvgWrap size={size}>
          <rect x="4" y="13" width="4" height="7" rx="1.2" fill={color} />
          <rect x="10" y="8" width="4" height="12" rx="1.2" fill={color} opacity="0.85" />
          <rect x="16" y="11" width="4" height="9" rx="1.2" fill={color} opacity="0.65" />
        </SvgWrap>
      );
    case "search":
      return (
        <SvgWrap size={size}>
          <circle cx="10.5" cy="10.5" r="6.5" fill={`${color}33`} stroke={color} strokeWidth="2.2" />
          <path d="M15.5 15.5 20 20" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
        </SvgWrap>
      );
    case "megaphone":
      return (
        <SvgWrap size={size}>
          <path d="M4 10v4h2l1.2 4h1.8l-1.2-4H9l8 3.5V6.5L9 10H4z" fill={color} />
          <rect x="17.5" y="9" width="2" height="6" rx="1" fill={color} opacity="0.75" />
        </SvgWrap>
      );
    case "robot":
      return (
        <SvgWrap size={size}>
          <rect x="5" y="8" width="14" height="10" rx="2.5" fill={color} />
          <circle cx="9.5" cy="13" r="1.3" fill="#fff" />
          <circle cx="14.5" cy="13" r="1.3" fill="#fff" />
          <rect x="11" y="4" width="2" height="4" rx="1" fill={color} />
          <circle cx="12" cy="3" r="1.5" fill={color} opacity="0.8" />
        </SvgWrap>
      );
    case "sparkle":
      return (
        <SvgWrap size={size}>
          <path d="M12 2.5v4.5M12 17v4.5M2.5 12h4.5M17 12h4.5" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
          <path d="M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2.2" fill={color} />
        </SvgWrap>
      );
    case "heart":
      return (
        <SvgWrap size={size}>
          <path
            d="M12 20s-6.5-4-8.8-8.3A4.8 4.8 0 0 1 12 7a4.8 4.8 0 0 1 8.8 4.7C18.5 16 12 20 12 20z"
            fill={color}
          />
        </SvgWrap>
      );
    case "doc":
      return (
        <SvgWrap size={size}>
          <rect x="6" y="3" width="12" height="18" rx="2" fill={color} />
          <path d="M9 8h6M9 12h6M9 16h4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
        </SvgWrap>
      );
    case "funnel":
      return (
        <SvgWrap size={size}>
          <path d="M4 4h16L14 12v7l-4 2v-9L4 4z" fill={color} />
        </SvgWrap>
      );
    case "personPlus":
      return (
        <SvgWrap size={size}>
          <circle cx="10" cy="8" r="3.5" fill={color} />
          <path d="M4 20c0-3.5 2.7-6 6-6s6 2.5 6 6" fill={color} opacity="0.85" />
          <path d="M17 8v4M15 10h4" stroke={dark} strokeWidth="2.2" strokeLinecap="round" />
        </SvgWrap>
      );
    case "clipboardCheck":
      return (
        <SvgWrap size={size}>
          <rect x="6" y="4" width="12" height="16" rx="2" fill={color} />
          <rect x="9" y="2" width="6" height="3" rx="1" fill={color} opacity="0.8" />
          <path d="M9 12.5 11 14.5 15 10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </SvgWrap>
      );
    case "tag":
      return (
        <SvgWrap size={size}>
          <path d="M12 3H6.5A2.5 2.5 0 0 0 4 5.5v5.6l8 8 7.1-7.1-8-8Z" fill={color} />
          <circle cx="8.5" cy="8.5" r="1.4" fill="#fff" />
        </SvgWrap>
      );
    case "gear":
      return (
        <SvgWrap size={size}>
          <circle cx="12" cy="12" r="4" fill={color} />
          <path
            d="M12 3v2.5M12 18.5V21M21 12h-2.5M5.5 12H3M18.2 5.8l-1.8 1.8M7.6 16.4l-1.8 1.8M18.2 18.2l-1.8-1.8M7.6 7.6 5.8 5.8"
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </SvgWrap>
      );
    case "headset":
      return (
        <SvgWrap size={size}>
          <path d="M4 14v-2a8 8 0 0 1 16 0v2" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
          <rect x="3" y="13" width="4.5" height="6" rx="2" fill={color} />
          <rect x="16.5" y="13" width="4.5" height="6" rx="2" fill={color} />
        </SvgWrap>
      );
    case "link":
      return (
        <SvgWrap size={size}>
          <path
            d="M10.5 13.5 13.5 10.5M8.5 11.5 6.5 13.5a3 3 0 0 0 4.2 4.2l2-2M15.5 12.5l2-2a3 3 0 0 0-4.2-4.2l-2 2"
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </SvgWrap>
      );
    case "formEdit":
      return (
        <SvgWrap size={size}>
          <rect x="5" y="3" width="11" height="16" rx="2" fill={color} />
          <path d="M8 8h5M8 12h5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M15.5 18.5 19.5 14.5l1.5 1.5-4 4-2 .5.5-2z" fill={color} opacity="0.9" />
        </SvgWrap>
      );
    case "plug":
      return (
        <SvgWrap size={size}>
          <path d="M9 2.5v4M15 2.5v4M6 7h12v4a6 6 0 0 1-12 0V7z" fill={color} />
          <path d="M9 17v4M15 17v4" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
        </SvgWrap>
      );
    case "database":
      return (
        <SvgWrap size={size}>
          <ellipse cx="12" cy="6" rx="7" ry="2.8" fill={color} />
          <path d="M5 6v12c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8V6" fill={color} opacity="0.75" />
          <ellipse cx="12" cy="12" rx="7" ry="2.8" fill={color} opacity="0.55" />
        </SvgWrap>
      );
    case "globe":
      return (
        <SvgWrap size={size}>
          <circle cx="12" cy="12" r="8.5" fill={`${color}33`} stroke={color} strokeWidth="2" />
          <ellipse cx="12" cy="12" rx="3.5" ry="8.5" stroke={color} strokeWidth="1.8" />
          <path d="M3.5 12h17" stroke={color} strokeWidth="1.8" />
        </SvgWrap>
      );
  }
}

export function MenuCategoryThumb({
  icon,
  tint,
  color,
  size = 40,
}: {
  icon: MenuIconName;
  tint: string;
  color: string;
  size?: number;
}) {
  const iconSize = size >= 40 ? 24 : 20;
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-[10px] shadow-[0_2px_10px_rgba(20,20,43,0.1)]"
      style={{ backgroundColor: tint, width: size, height: size }}
    >
      <MenuGlyphBold name={icon} color={color} size={iconSize} />
    </span>
  );
}

/** Large round Monday-style hero icon — pastel fill, bold glyph, white ring. */
export function MenuHeroCircle({
  icon,
  label,
  tint,
  color,
  className = "",
  style,
}: {
  icon: MenuIconName;
  label: string;
  tint?: string;
  color?: string;
  className?: string;
  style?: CSSProperties;
}) {
  const palette = MENU_ICON_PALETTE[icon];
  return (
    <span
      role="img"
      aria-label={label}
      title={label}
      className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[3px] border-white shadow-[0_10px_28px_-8px_rgba(20,20,43,0.22)] sm:h-16 sm:w-16 md:h-[4.5rem] md:w-[4.5rem] lg:h-20 lg:w-20 ${className}`}
      style={{ backgroundColor: tint ?? palette.tint, ...style }}
    >
      <span className="scale-100 md:scale-110 lg:scale-[1.15]">
        <MenuGlyphBold name={icon} color={color ?? palette.color} size={28} />
      </span>
    </span>
  );
}

export function MenuDetailIcon({ name }: { name: MenuIconName }) {
  const palette = MENU_ICON_PALETTE[name];
  return (
    <span
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px]"
      style={{ backgroundColor: palette.tint }}
    >
      <MenuGlyphBold name={name} color={palette.color} size={15} />
    </span>
  );
}
