import type { CSSProperties } from "react";
import type { InsightTopic } from "@/data/blog-topics";
import { MARKETING_HOME } from "@/lib/marketing-home-palette";
import { TALENT_HOME } from "@/lib/talent-home-palette";
import { TECH_HOME } from "@/lib/technology-home-palette";

export const blogBrand = {
  talent: {
    text: TALENT_HOME.primary,
    highlight: TALENT_HOME.accent,
    tint: TALENT_HOME.paleGreen,
    soft: TALENT_HOME.mint,
    button: TALENT_HOME.primary,
    buttonText: TALENT_HOME.accent,
  },
  marketing: {
    text: "#5c4a0a", // MarketingHero's dark text on yellow.
    highlight: MARKETING_HOME.primary,
    tint: MARKETING_HOME.paleYellow,
    soft: MARKETING_HOME.paleAmber,
    button: MARKETING_HOME.primary,
    buttonText: "#111111", // Marketing header CTA.
  },
  technology: {
    text: TECH_HOME.primary,
    highlight: TECH_HOME.accent,
    tint: TECH_HOME.pale,
    soft: TECH_HOME.paleAlt,
    button: TECH_HOME.primary,
    buttonText: TECH_HOME.accent,
  },
} satisfies Record<InsightTopic, Record<string, string>>;

export function blogBrandStyle(topic?: InsightTopic): CSSProperties | undefined {
  if (!topic) return undefined;

  const brand = blogBrand[topic];
  return {
    "--accent": brand.text,
    "--highlight": brand.highlight,
    "--tint": brand.tint,
    "--soft": brand.soft,
  } as CSSProperties;
}
