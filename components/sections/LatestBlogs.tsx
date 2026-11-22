import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { blogBrandStyle } from "@/app/(main)/blog/blog-brand";
import { insightTopics, type InsightTopic } from "@/data/blog-topics";
import { blogCards } from "@/lib/editorial/store";
import { BlogCarousel } from "./BlogCarousel";
import styles from "./LatestBlogs.module.css";

export default async function LatestBlogs({ topic, featured, relatedTo }: {
  topic?: InsightTopic;
  featured?: boolean;
  relatedTo?: { slug: string; topic: InsightTopic };
}) {
  await connection();
  const articles = blogCards({ topic, featured, relatedTo });
  const category = topic ?? relatedTo?.topic;
  const label = topic ? insightTopics[topic].label : "";
  const id = featured ? "featured-blogs" : relatedTo ? "related-articles" : "latest-blogs";
  const indexHref = featured ? "/blog/featured" : category ? `/blog/${category}` : "/blog";

  if (relatedTo && !articles.length) return null;

  return (
    <section id={id} className={styles.section} style={blogBrandStyle(category)} aria-labelledby={`${id}-title`}>
      <div className={styles.shell}>
        <h2 id={`${id}-title`} className={styles.heading}>
          {featured ? "Featured Blogs" : relatedTo ? "Related articles" : topic ? <>Latest <span>{label}</span> articles</> : <><span>Resources</span> and insights to inspire</>}
        </h2>

        {articles.length > 0 ? (
          <BlogCarousel labelId={`${id}-title`}>
            {articles.map((article) => (
              <article key={article.slug} className={styles.card} style={blogBrandStyle(article.topic)}>
                <Link prefetch={false} href={`/blog/${article.slug}`} aria-labelledby={`${id}-${article.slug}-title`}>
                  <div className={styles.cover}>
                    <Image src={article.cover} alt="" fill unoptimized sizes="(max-width: 639px) 100vw, (max-width: 959px) 50vw, 400px" />
                  </div>
                  <div className={styles.body}>
                    <span className={styles.category}>{insightTopics[article.topic].label}</span>
                    <h3 id={`${id}-${article.slug}-title`}>{article.title}</h3>
                    <p>{article.description}</p>
                    <span className={styles.read}>Read article <ArrowUpRight size={16} aria-hidden="true" /></span>
                  </div>
                </Link>
              </article>
            ))}
          </BlogCarousel>
        ) : (
          <p className={styles.empty}>No {featured ? "featured " : label ? `${label} ` : ""}articles published yet.</p>
        )}

        <div className={styles.actions}>
          <Link className={styles.more} href={indexHref}>
            {featured ? "View all featured blogs" : category ? `View all ${insightTopics[category].label} articles` : "View all blogs"} <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
