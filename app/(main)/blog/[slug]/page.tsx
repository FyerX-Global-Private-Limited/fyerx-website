import Link from "next/link";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { getInsightTopic } from "@/data/blog-topics";
import { livePost } from "@/lib/editorial/store";
import { postMetadata, postStructuredData } from "@/lib/editorial/metadata";
import type { Query } from "@/lib/pagination";
import LatestBlogs from "@/components/sections/LatestBlogs";
import { feedMetadata, InsightsFeed } from "../insights-feed";
import { currentUser } from "@/lib/editorial/auth";
import { trafficEnabled } from "@/lib/editorial/traffic";
import { ArticleView } from "../article-view";
import { BlogArticle } from "../blog-article";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }>; searchParams: Promise<Query> };

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getInsightTopic(slug);
  if (topic || slug === "featured") return feedMetadata({ topic, featured: slug === "featured", query: await searchParams });
  const { article } = livePost(slug);
  return article ? postMetadata(article) : {};
}

const relatedService: Record<string, { href: string; label: string }> = {
  "dhoni-retirement-ipl-2027-advertising-sponsorship": {
    href: "/marketing/services/performance-marketing/analytics-roi-tracking",
    label: "Marketing analytics and ROI tracking",
  },
  "quit-your-it-job-to-become-a-youtuber-in-2027": {
    href: "/talent/individual",
    label: "Explore FyerX resources for job seekers",
  },
};

export default async function BlogPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const topic = getInsightTopic(slug);
  if (topic || slug === "featured") return <InsightsFeed topic={topic} featured={slug === "featured"} query={await searchParams} />;

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
      <LatestBlogs relatedTo={{ slug, topic: article.draft.topic }} />
    </>
  );
}
