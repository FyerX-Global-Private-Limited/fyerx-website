import type { NavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Fyerx",
  url: "https://fyerx.com",
  description: "Marketing and consulting solutions by Fyerx.",
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Marketing", href: "/marketing" },
  { label: "Consulting", href: "/consulting" },
  { label: "Contact", href: "/contact" },
];

export const marketingNav: NavItem[] = [
  { label: "Home", href: "/marketing" },
  { label: "Services", href: "/marketing/services" },
  { label: "Case Studies", href: "/marketing/case-studies" },
  { label: "Contact", href: "/contact" },
];

export const consultingNav: NavItem[] = [
  { label: "Home", href: "/consulting" },
  { label: "Individual", href: "/consulting/individual" },
  { label: "Book a Session", href: "/consulting/book-session" },
  { label: "Contact", href: "/contact" },
];
