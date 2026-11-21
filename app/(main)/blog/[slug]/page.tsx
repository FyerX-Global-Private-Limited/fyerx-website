import Link from "next/link";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { getInsightTopic, insightTopics } from "@/data/blog-topics";
import { livePost } from "@/lib/editorial/store";
import { postMetadata, postStructuredData } from "@/lib/editorial/metadata";
import { InsightsFeed } from "../insights-feed";
import { currentUser } from "@/lib/editorial/auth";
import { trafficEnabled } from "@/lib/editorial/traffic";
import { ArticleView } from "../article-view";
import { BlogArticle } from "../blog-article";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getInsightTopic(slug);
  if (topic) return { title: `${insightTopics[topic].label} | FyerX Blogs`, description: insightTopics[topic].description };
  const { article } = livePost(slug);
  return article ? postMetadata(article) : {};
}

const relatedService: Record<string, { href: string; label: string }> = {
  "dhoni-retirement-ipl-2027-advertising-sponsorship": {
    href: "/marketing/services/performance-marketing/analytics-roi-tracking",
    label: "Marketing analytics and ROI tracking",
  },
  "quit-your-it-job-to-become-a-youtuber-in-2027": {
    href: "/careers",
    label: "Explore career opportunities at FyerX",
  },
};

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const topic = getInsightTopic(slug);
  if (topic) return <InsightsFeed topic={topic} />;

  const { article, redirect } = livePost(slug);
  if (redirect) permanentRedirect("/blog/" + redirect);
  if (!article) notFound();

  const related = relatedService[slug];
  const measure = trafficEnabled() && !(await currentUser());

  return (
    <>
      {measure && <ArticleView key={slug} slug={slug} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(postStructuredData(article)).replace(/</g, "\\u003c"),
      }} />
      <BlogArticle article={article.draft} timestamp={article.published} />
      {related && (
        <nav aria-label="Related resources" className="mx-auto max-w-3xl px-5 pb-12 text-sm font-semibold text-slate-900 sm:px-8">
          <Link className="underline underline-offset-4" href={related.href}>{related.label}</Link>
        </nav>
      )}
    </>
  );
}
