export type FooterLink = {
  label: string;
  href: string;
};

export type FooterCapability = FooterLink & {
  icon: "marketing" | "talent" | "technology" | "learning";
};

export const FOOTER_CONTACT = {
  phone: "+91 7598306999",
  phoneHref: "tel:+917598306999",
  email: "hello@fyerx.com",
  emailHref: "mailto:hello@fyerx.com",
} as const;

export const FOOTER_CAPABILITIES: FooterCapability[] = [
  { label: "Marketing", href: "/marketing", icon: "marketing" },
  { label: "Talent", href: "/talent", icon: "talent" },
  { label: "Technology", href: "/contact?form=technology", icon: "technology" },
  { label: "Learning", href: "#capabilities", icon: "learning" },
];

export const FOOTER_EXPLORE_LINKS: FooterLink[] = [
  { label: "About FyerX", href: "/about" },
  { label: "Industries", href: "/about#industries" },
  { label: "Insights", href: "/blog" },
  { label: "Careers", href: "/contact?form=job" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_FOR_BUSINESS_LINKS: FooterLink[] = [
  { label: "Growth & Marketing", href: "/marketing" },
  { label: "Talent & Hiring", href: "/talent" },
  { label: "Technology & Transformation", href: "/contact?form=technology" },
  { label: "Learning & Development", href: "#capabilities" },
];

export const FOOTER_RESOURCES_LINKS: FooterLink[] = [
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/marketing/case-studies" },
  { label: "FAQs", href: "/contact#faqs" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export type FooterSocial = {
  label: string;
  href: string;
  path: string;
};

export const FOOTER_SOCIALS: FooterSocial[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/fyerx",
    path: "M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM.2 8h4.6v14.5H.2V8zm7.4 0h4.4v2h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.4 3 5.4 6.9v7.9h-4.6v-7c0-1.7 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.7v7.1H7.6V8z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fyerx.official",
    path: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2a3.8 3.8 0 01-.9 1.4c-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4a3.8 3.8 0 01-1.4-.9 3.8 3.8 0 01-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.2-.1 1.6-.1 4.8-.1zM12 0C8.7 0 8.3 0 7.1.1 5.8.2 4.9.4 4.1.7a5.9 5.9 0 00-2.2 1.4A5.9 5.9 0 00.7 4.1C.4 4.9.2 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.3 2.2.6 3a5.9 5.9 0 001.4 2.2 5.9 5.9 0 002.2 1.4c.8.3 1.7.5 3 .6 1.2.1 1.6.1 4.9.1s3.7 0 4.9-.1c1.3-.1 2.2-.3 3-.6a5.9 5.9 0 002.2-1.4 5.9 5.9 0 001.4-2.2c.3-.8.5-1.7.6-3 .1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.3-2.2-.6-3a5.9 5.9 0 00-1.4-2.2A5.9 5.9 0 0019.9.7c-.8-.3-1.7-.5-3-.6C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm7.9-10.4a1.4 1.4 0 11-2.9 0 1.4 1.4 0 012.9 0z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Fyerx/",
    path: "M24 12a12 12 0 10-13.9 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0024 12z",
  },
];
