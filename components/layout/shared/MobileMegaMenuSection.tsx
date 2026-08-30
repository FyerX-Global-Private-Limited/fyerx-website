"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import {
  MenuCategoryThumb,
  MenuDetailIcon,
  type MenuIconName,
} from "@/components/ui/MenuGlyph";

export type MobileMenuCategory = {
  label: string;
  subtitle?: string;
  avatar: string;
  icon?: MenuIconName;
  tint?: string;
  iconColor?: string;
  items: { label: string; href: string; icon: MenuIconName }[];
};

/** Long Talent labels that may wrap to a second line to avoid overlap. */
const MENU_LABELS_ALLOW_WRAP = new Set([
  "Permanent Hiring & Executive Search",
  "Cross-Border Contract Staffing (US)",
]);

export function allowsMenuLabelWrap(label: string) {
  return MENU_LABELS_ALLOW_WRAP.has(label);
}

export function menuLabelNowrapClass(label: string) {
  return allowsMenuLabelWrap(label) ? "leading-snug" : "whitespace-nowrap";
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function CategoryThumb({
  cat,
  size = 40,
}: {
  cat: MobileMenuCategory;
  size?: number;
}) {
  if (cat.icon && cat.tint) {
    return (
      <MenuCategoryThumb
        icon={cat.icon}
        tint={cat.tint}
        color={cat.iconColor ?? "#6161FF"}
        size={size}
      />
    );
  }

  return (
    <Image
      src={cat.avatar}
      alt=""
      width={size}
      height={size}
      className="shrink-0 rounded-[10px] object-cover"
      style={{ width: size, height: size }}
    />
  );
}

export function MobileMegaMenuSection({
  label,
  expanded,
  onToggle,
  activeClass,
  activeItemBg = "#fce8ef",
  categories,
  hoverColor,
  visitHomeHref,
  visitHomeLabel = "Visit Homepage",
  visitHomeColor = "#FFC900",
  visitHomeTextColor = "#111111",
  onClose,
}: {
  label: string;
  expanded: boolean;
  onToggle: () => void;
  activeClass: string;
  activeItemBg?: string;
  categories: MobileMenuCategory[];
  hoverColor: string;
  visitHomeHref?: string;
  visitHomeLabel?: string;
  visitHomeColor?: string;
  visitHomeTextColor?: string;
  onClose: () => void;
}) {
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  useEffect(() => {
    if (!expanded) setOpenCategory(null);
  }, [expanded]);

  return (
    <div className="border-b border-[#e6e9ef]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        className={`flex w-full items-center justify-between rounded-[8px] px-3 py-[10px] text-[0.9375rem] font-medium transition-colors ${
          expanded ? activeClass : "text-[#323338] hover:bg-[#f5f6f8]"
        }`}
      >
        <span>{label}</span>
        <ChevronDown open={expanded} />
      </button>

      {expanded && (
        <div className="pb-4 pl-1" style={{ ["--menu-hover" as string]: hoverColor }}>
          {visitHomeHref && (
            <div className="my-4 flex justify-center px-3">
              <PrimaryCtaLink
                href={visitHomeHref}
                onClick={onClose}
                color={visitHomeColor}
                textColor={visitHomeTextColor}
                variant="menu"
              >
                {visitHomeLabel}
              </PrimaryCtaLink>
            </div>
          )}

          {categories.map((cat, i) => {
            const isOpen = openCategory === i;
            return (
              <div key={cat.label} className="mt-1 px-2">
                <button
                  type="button"
                  onClick={() => setOpenCategory(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className={`flex w-full cursor-pointer items-center gap-2.5 rounded-[8px] px-2 py-1.5 text-left transition-colors duration-100 ${
                    isOpen ? "" : "hover:bg-[#f5f6f8]"
                  }`}
                  style={isOpen ? { backgroundColor: activeItemBg } : undefined}
                >
                  <CategoryThumb cat={cat} />
                  <div className="min-w-0 flex-1">
                    <p
                      className="text-[0.8125rem] font-semibold leading-snug transition-colors duration-100"
                      style={{ color: isOpen ? hoverColor : "#323338" }}
                    >
                      {cat.label}
                    </p>
                    {cat.subtitle && (
                      <p className="mt-0.5 text-[0.6875rem] leading-snug text-[#676879]">
                        {cat.subtitle}
                      </p>
                    )}
                  </div>
                  <ChevronDown open={isOpen} />
                </button>

                {isOpen && (
                  <ul className="ml-3 mt-1 flex flex-col gap-0.5 border-l border-[#eef0f4] pl-3">
                    {cat.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="flex items-center gap-2 py-2 text-[0.8125rem] leading-snug text-[#323338] transition-colors hover:text-[var(--menu-hover)]"
                        >
                          <MenuDetailIcon name={item.icon} />
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
