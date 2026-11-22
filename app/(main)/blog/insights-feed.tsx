import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, LayoutGrid, Megaphone, Star, Users } from "lucide-react";
import { insightTopics, type InsightTopic } from "@/data/blog-topics";
import { dateLabel } from "@/lib/editorial/traffic-dates";
import { blogCardPage, blogCardPagination } from "@/lib/editorial/store";
import { Pagination } from "@/components/ui/Pagination";
import { pageHref, type Query } from "@/lib/pagination";
import type { Metadata } from "next";
import { editorialMode } from "@/lib/editorial/config";
import { blogBrandStyle } from "./blog-brand";
import styles from "./insights.module.css";

const topics = [
  { slug: "", label: "All Blogs", Icon: LayoutGrid },
  { slug: "featured", label: "Featured Blogs", Icon: Star },
  { slug: "talent", label: insightTopics.talent.label, Icon: Users },
  { slug: "marketing", label: insightTopics.marketing.label, Icon: Megaphone },
  { slug: "technology", label: insightTopics.technology.label, Icon: Code2 },
] as const;

type Feed = { topic?: InsightTopic; featured?: boolean; query: Query };

export function feedMetadata({ topic, featured, query }: Feed): Metadata {
  const path = featured ? "/blog/featured" : topic ? `/blog/${topic}` : "/blog";
  const description = topic ? insightTopics[topic].description : featured
    ? "Selected FyerX articles on talent, marketing and technology."
    : "Practical perspectives on talent, marketing and technology.";
  const { page, size, total } = blogCardPagination({ topic, featured }, query);
  const title = featured ? "Featured Blogs | FyerX" : topic ? `${insightTopics[topic].label} | FyerX Blogs` : "FyerX Blogs";
  return {
    title: page > 1 ? `${title} – Page ${page}` : title,
    description,
    alternates: { canonical: "https://fyerx.com" + pageHref(path, page, { size: String(size) }) },
    ...(size !== 10 || (featured && !total) ? { robots: { index: false, follow: true } } : {}),
  };
}

export function InsightsFeed({ topic, featured, query }: Feed) {
  const { articles, pagination } = blogCardPage({ topic, featured }, query);
  const active = featured ? "featured" : topic ?? "";
  const path = active ? `/blog/${active}` : "/blog";

  return (
    <div style={blogBrandStyle(topic)}>
      <header className={styles.masthead}>
        <div className={styles.shell}>
          {editorialMode() !== "live" && <p className={styles.eyebrow}><span /> Private preview</p>}
          <h1>FyerX <em>Blogs</em></h1>
          <p className={styles.mastheadIntro}>Practical perspectives on building teams, growing brands and making technology work.</p>
        </div>
      </header>
      <div className={`${styles.shell} ${styles.feed}`}>
        <nav aria-label="Blog categories" className={styles.categories}>
          <p className={styles.navLabel}>Browse by topic</p>
          {topics.map(({ slug, label, Icon }) => (
            <Link key={label} href={slug ? `/blog/${slug}` : "/blog"} style={blogBrandStyle(slug && slug !== "featured" ? slug : undefined)} aria-current={active === slug ? "page" : undefined}>
              <Icon aria-hidden="true" size={17} />
              {label}
            </Link>
          ))}
        </nav>
        <section aria-labelledby="feed-title">
          <div className={styles.feedHeading}>
            <h2 id="feed-title">{featured ? "Featured Blogs" : topic ? insightTopics[topic].label : "All Blogs"}</h2>
            <span>{pagination.total} {pagination.total === 1 ? "article" : "articles"}</span>
          </div>
          {topic && <p className={styles.topicDescription}>{insightTopics[topic].description}</p>}
          {articles.length ? (
            <div className={styles.grid}>
              {articles.map((article) => (
                <article key={article.slug} className={styles.card} style={blogBrandStyle(article.topic)}>
                  <Link prefetch={false} href={`/blog/${article.slug}`} target="_blank" rel="noopener" aria-labelledby={`${article.slug}-title`}>
                    <div className={styles.cardImage}>
                      <Image src={article.cover} alt="" fill unoptimized sizes="(max-width: 700px) 95vw, 42vw" />
                    </div>
                    <div className={styles.cardBody}>
                      <div className={styles.cardMeta}>
                        <span className={styles.topic}>{insightTopics[article.topic].label}</span>
                        {!active && <time className={styles.publicationDate} dateTime={article.published}>{dateLabel(article.published, true)}</time>}
                      </div>
                      <h3 id={`${article.slug}-title`}>{article.title}</h3>
                      <p>{article.description}</p>
                      <span className={styles.read}>Read article <ArrowUpRight aria-hidden="true" size={16} /></span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <span className={styles.emptyIcon}><Code2 aria-hidden="true" size={24} /></span>
              <h3>{featured ? "No featured articles yet" : topic ? `No ${insightTopics[topic].label} articles yet` : "No articles yet"}</h3>
              <p>{topic === "technology" ? "This section will open with its first full-length Technology article." : "Articles will appear here once published."}</p>
              {active && <Link className={styles.read} href="/blog">Browse all blogs <ArrowRight aria-hidden="true" size={16} /></Link>}
            </div>
          )}
          <Pagination path={path} pagination={pagination} />
        </section>
      </div>
    </div>
  );
}
