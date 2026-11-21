import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronRight } from "lucide-react";
import { insightTopics, type InsightTopic } from "@/data/blog-topics";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { blogBrand, blogBrandStyle } from "./blog-brand";
import type { Draft } from "@/lib/editorial/document";
import { ArticleBody, articleHeadings } from "./article-body";
import styles from "./insights.module.css";

const enquiryByTopic = {
  marketing: {
    title: "Looking for marketing support?",
    description: "Tell us what you want to achieve and where your team could use support.",
    label: "Talk to FyerX Marketing",
  },
  technology: {
    title: "Looking for technology support?",
    description: "Tell us what you need to build, improve, or manage.",
    label: "Talk to FyerX Technology",
  },
  talent: {
    title: "Looking for recruitment support?",
    description: "Tell us which roles you’re hiring for and when you need them filled.",
    label: "Talk to FyerX Talent",
  },
} satisfies Record<InsightTopic, { title: string; description: string; label: string }>;

function ContentsLinks({ headings }: { headings: ReturnType<typeof articleHeadings> }) {
  return (
    <ol className={styles.contentsLinks}>
      {headings.map((section) => (
        <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>
      ))}
    </ol>
  );
}

export function BlogArticle({ article, timestamp, preview }: { article: Draft; timestamp: string; preview?: boolean }) {
  const headings = articleHeadings(article.body);
  const date = new Intl.DateTimeFormat("en-IN", { dateStyle: "long", timeZone: "UTC" }).format(new Date(timestamp));

  return (
    <article style={blogBrandStyle(article.topic)}>
      <header className={styles.articleHeader}>
        <div className={styles.shell}>
          <nav aria-label="Article breadcrumb" className={styles.breadcrumb}>
            <Link href="/blog"><ArrowLeft aria-hidden="true" size={15} /> All Blogs</Link>
            <ChevronRight aria-hidden="true" size={13} />
            <Link href={`/blog/${article.topic}`}>{insightTopics[article.topic].label}</Link>
          </nav>
          <div className={styles.hero}>
            <div className={styles.heroCopy}>
              <div className={styles.cardMeta}>
                <span className={styles.topic}>{insightTopics[article.topic].label}</span>
                {preview && <span className={styles.draft}>Private preview</span>}
              </div>
              <h1>{article.title}</h1>
              <p>{article.description}</p>
              <div className={styles.byline}>
                <span>{article.author}</span>
                <time dateTime={timestamp}>{date}</time>
              </div>
            </div>
            {article.cover.src && (
              <figure>
                <div className={styles.cover}>
                  <Image src={article.cover.src} alt={article.cover.alt} fill sizes="(max-width: 700px) 95vw, 46vw" unoptimized preload />
                </div>
                {article.cover.caption && <figcaption>{article.cover.caption}</figcaption>}
              </figure>
            )}
          </div>
        </div>
      </header>
      <div className={`${styles.shell} ${styles.readingLayout}`}>
        <aside className={styles.readingAside} aria-label="Article tools">
          {headings.length > 0 && <nav aria-label="On this page" className={styles.desktopContents}>
            <p className={styles.contentsTitle}>On this page</p>
            <ContentsLinks headings={headings} />
          </nav>}
          {headings.length > 0 && <details className={styles.mobileContents}>
            <summary>On this page <ChevronDown size={18} aria-hidden="true" /></summary>
            <nav aria-label="On this page"><ContentsLinks headings={headings} /></nav>
          </details>}
          <div className={`${styles.enquiry} ${styles.desktopEnquiry}`}>
            <Enquiry topic={article.topic} />
          </div>
        </aside>
        <div className={styles.articleBody}>
          <ArticleBody doc={article.body} />
          <div className={`${styles.enquiry} ${styles.mobileEnquiry}`}>
            <Enquiry topic={article.topic} />
          </div>
        </div>
      </div>
    </article>
  );
}

function Enquiry({ topic }: { topic: InsightTopic }) {
  const enquiry = enquiryByTopic[topic];
  const brand = blogBrand[topic];

  return (
    <>
      <h2>{enquiry.title}</h2>
      <p>{enquiry.description}</p>
      <PrimaryCtaLink href={`/contact?form=${topic}`} variant="nav" color={brand.button} textColor={brand.buttonText} className={styles.enquiryLink}>
        {enquiry.label}
      </PrimaryCtaLink>
    </>
  );
}
