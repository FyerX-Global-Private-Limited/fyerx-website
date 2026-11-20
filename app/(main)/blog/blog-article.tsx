import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronDown, ChevronRight } from "lucide-react";
import { insights } from "@/data/insights";
import { insightTopics } from "@/data/blog-topics";
import { PrimaryCtaLink } from "@/components/ui/PrimaryCta";
import { blogBrand, blogBrandStyle } from "./blog-brand";
import type { Draft } from "@/lib/editorial/document";
import { ArticleBody, articleHeadings } from "./article-body";
import styles from "./insights.module.css";

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
            <Enquiry article={article} />
          </div>
        </aside>
        <div className={styles.articleBody}>
          <ArticleBody doc={article.body} />
          <div className={`${styles.enquiry} ${styles.mobileEnquiry}`}>
            <Enquiry article={article} />
          </div>
        </div>
      </div>
    </article>
  );
}

function Enquiry({ article }: { article: Draft }) {
  const enquiry = insights.find((entry) => entry.topic === article.topic)?.enquiry ?? {
    title: "Have a technology project?",
    description: "Tell FyerX Technology what you are building and where you need support.",
    label: "Discuss your project",
  };
  const brand = blogBrand[article.topic];

  return (
    <>
      <h2>{enquiry.title}</h2>
      <p>{enquiry.description}</p>
      <PrimaryCtaLink href={`/contact?form=${article.topic}`} variant="nav" color={brand.button} textColor={brand.buttonText} className={styles.enquiryLink}>
        {enquiry.label}
      </PrimaryCtaLink>
    </>
  );
}
