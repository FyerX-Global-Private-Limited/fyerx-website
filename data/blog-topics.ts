export const insightTopics = {
  talent: { label: "Talent", description: "Practical guidance for hiring specialists and building teams." },
  marketing: { label: "Marketing", description: "Practical guidance for making your brand and website work harder." },
  technology: { label: "Technology", description: "Perspectives on how teams choose, build and run technology." },
} as const;

export type InsightTopic = keyof typeof insightTopics;

export function getInsightTopic(slug: string): InsightTopic | undefined {
  return Object.hasOwn(insightTopics, slug) ? (slug as InsightTopic) : undefined;
}
