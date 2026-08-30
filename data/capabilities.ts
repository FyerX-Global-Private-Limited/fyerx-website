export type CapabilityIconName =
  | "signal"
  | "people"
  | "brackets"
  | "certificate"
  | "device";

export interface Capability {
  slug: string;
  title: string;
  description: string;
  icon: CapabilityIconName;
  href: string;
}

// Single source of truth for the homepage "Our Capabilities" section and the
// footer's capabilities column. Add an entry here and both surfaces update —
// no other structural changes needed. See README.md for a non-developer guide.
export const capabilities: Capability[] = [
  {
    slug: "marketing",
    title: "Marketing",
    description:
      "Performance marketing, brand strategy, and content designed to produce measurable business results.",
    icon: "signal",
    href: "/marketing",
  },
  {
    slug: "talent",
    title: "Talent",
    description:
      "Recruitment and staffing solutions that connect businesses with professionals suited to their specific needs.",
    icon: "people",
    href: "/talent",
  },
  {
    slug: "technology",
    title: "Technology",
    description:
      "Websites, applications, and digital infrastructure built to support businesses as they scale.",
    icon: "brackets",
    href: "/technology",
  },
  {
    slug: "learning-development",
    title: "Learning & Development",
    description:
      "Structured training programmes that build practical, industry-ready skills for individuals and organisations.",
    icon: "certificate",
    href: "#capabilities",
  },
  {
    slug: "digital-products",
    title: "Digital Products",
    description:
      "Independently developed digital products, including mobile applications, built under the FyerX name.",
    icon: "device",
    href: "#capabilities",
  },
];
