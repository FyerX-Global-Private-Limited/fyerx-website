import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { blogBrandStyle } from "@/app/(main)/blog/blog-brand";
import { insightTopics, type InsightTopic } from "@/data/blog-topics";
import { livePosts } from "@/lib/editorial/store";
import styles from "./LatestBlogs.module.css";

export default async function LatestBlogs({ topic }: { topic?: InsightTopic }) {
  await connection();

  const articles = livePosts()
    .map(({ draft }) => draft)
    .filter((draft) => !topic || draft.topic === topic)
    .slice(0, 3);
  const label = topic ? insightTopics[topic].label : "";
  const indexHref = topic ? `/blog/${topic}` : "/blog";

  return (
    <section id="latest-blogs" className={styles.section} style={blogBrandStyle(topic)} aria-labelledby="latest-blogs-title">
      <div className={styles.shell}>
        <h2 id="latest-blogs-title" className={styles.heading}>
          {topic ? <>Latest <span>{label}</span> articles</> : <><span>Resources</span> and insights to inspire</>}
        </h2>

        {articles.length > 0 ? (
          <div className={styles.grid}>
            {articles.map((article) => (
              <article key={article.slug} className={styles.card} style={blogBrandStyle(article.topic)}>
                <Link href={`/blog/${article.slug}`} aria-labelledby={`latest-${article.slug}-title`}>
                  <div className={styles.cover}>
                    <Image src={article.cover.src} alt="" fill unoptimized sizes="(max-width: 639px) 100vw, (max-width: 959px) 50vw, 400px" />
                  </div>
                  <div className={styles.body}>
                    <span className={styles.category}>{insightTopics[article.topic].label}</span>
                    <h3 id={`latest-${article.slug}-title`}>{article.title}</h3>
                    <p>{article.description}</p>
                    <span className={styles.read}>Read article <ArrowUpRight size={16} aria-hidden="true" /></span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p className={styles.empty}>No {label ? `${label} ` : ""}articles published yet.</p>
        )}

        <div className={styles.actions}>
          <Link className={styles.more} href={indexHref}>
            {topic ? `View all ${label} articles` : "View all blogs"} <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
