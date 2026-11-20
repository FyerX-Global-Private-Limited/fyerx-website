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

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const topic = getInsightTopic(slug);
  if (topic) return <InsightsFeed topic={topic} />;

  const { article, redirect } = livePost(slug);
  if (redirect) permanentRedirect("/blog/" + redirect);
  if (!article) notFound();

  const measure = trafficEnabled() && !(await currentUser());

  return (
    <>
      {measure && <ArticleView key={slug} slug={slug} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(postStructuredData(article)).replace(/</g, "\\u003c"),
      }} />
      <BlogArticle article={article.draft} timestamp={article.published} />
    </>
  );
}
