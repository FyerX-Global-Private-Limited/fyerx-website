import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Code2, LayoutGrid, Megaphone, Users } from "lucide-react";
import { insightTopics, type InsightTopic } from "@/data/blog-topics";
import { livePosts } from "@/lib/editorial/store";
import { editorialMode } from "@/lib/editorial/config";
import { blogBrandStyle } from "./blog-brand";
import styles from "./insights.module.css";

const topics = [
  { slug: "", label: "All Blogs", Icon: LayoutGrid },
  { slug: "talent", label: insightTopics.talent.label, Icon: Users },
  { slug: "marketing", label: insightTopics.marketing.label, Icon: Megaphone },
  { slug: "technology", label: insightTopics.technology.label, Icon: Code2 },
] as const;

export function InsightsFeed({ topic }: { topic?: InsightTopic }) {
  const articles = livePosts().map((post) => post.draft).filter((draft) => !topic || topic === draft.topic);

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
            <Link key={label} href={slug ? `/blog/${slug}` : "/blog"} style={blogBrandStyle(slug || undefined)} aria-current={(topic ?? "") === slug ? "page" : undefined}>
              <Icon aria-hidden="true" size={17} />
              {label}
            </Link>
          ))}
        </nav>
        <section aria-labelledby="feed-title">
          <div className={styles.feedHeading}>
            <h2 id="feed-title">{topic ? insightTopics[topic].label : "All Blogs"}</h2>
            <span>{articles.length} {articles.length === 1 ? "article" : "articles"}</span>
          </div>
          {topic && <p className={styles.topicDescription}>{insightTopics[topic].description}</p>}
          {articles.length ? (
            <div className={styles.grid}>
              {articles.map((article) => (
                <article key={article.slug} className={styles.card} style={blogBrandStyle(article.topic)}>
                  <Link href={`/blog/${article.slug}`} aria-labelledby={`${article.slug}-title`}>
                    <div className={styles.cardImage}>
                      <Image src={article.cover.src} alt="" fill unoptimized sizes="(max-width: 700px) 95vw, 42vw" />
                    </div>
                    <div className={styles.cardBody}>
                      <div className={styles.cardMeta}>
                        <span className={styles.topic}>{insightTopics[article.topic].label}</span>
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
              <h3>{topic ? `No ${insightTopics[topic].label} articles yet` : "No articles yet"}</h3>
              <p>{topic === "technology" ? "This section will open with its first full-length Technology article." : "Articles will appear here once published."}</p>
              {topic && <Link className={styles.read} href="/blog">Browse all blogs <ArrowRight aria-hidden="true" size={16} /></Link>}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
