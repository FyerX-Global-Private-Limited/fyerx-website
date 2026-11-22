import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { serviceSummaries } from "@/data/service-summaries";
import samples from "@/data/service-work-samples.json";
import { SITE_URL } from "@/data/seo-metadata";
import { serviceDirectory, type ServiceEntry } from "@/lib/service-directory";
import { articleFor, divisionNames, findService, type ServiceDivision, type ServiceParams } from "@/lib/service-articles";
import searchMetadata from "@/data/service-search-metadata.json";
import { buildMetadata } from "@/lib/seo";
import { ServiceReference } from "./ServiceReference";
import ApprovedServiceNow from "./ApprovedServiceNow";
import styles from "./service-detail.module.css";

export type ServicePageProps = { params: Promise<ServiceParams> };

const serviceNowPath = "/technology/services/enterprise-platforms/servicenow";

const serviceTitles: Record<string, string> = {
  sap: "SAP consulting and implementation services",
  "oracle-fusion": "Oracle Fusion Cloud consulting services",
  salesforce: "Salesforce consulting and implementation services",
  "microsoft-business-applications": "Microsoft business application consulting",
  "application-modernisation": "Application modernisation services",
  "connected-experiences": "Connected digital experience services",
  "delivery-foundations": "Software delivery foundations",
  "data-engineering-platforms": "Data engineering and platform services",
  mlops: "Machine learning operations (MLOps)",
  "devops-ci-cd": "DevOps and CI/CD delivery services",
  "reliability-cost": "Cloud reliability and cost optimisation",
  "strategy-roadmap": "Technology strategy and roadmap consulting",
  "architecture-leadership": "Technology architecture and leadership advisory",
  "vendor-platform-decisions": "Technology vendor selection and platform evaluation",
  "transformation-planning": "Technology transformation planning",
  "it-contract-staffing": "IT contract staffing",
  "high-volume-staffing": "High-volume staffing services",
  "software-development-roles": "Software developer recruitment",
  "data-ai-talent": "Data and AI recruitment",
  "devops-cloud-talent": "DevOps and cloud recruitment",
  "paid-search": "Paid search management",
  "paid-social": "Paid social advertising",
  "website-ux-design": "Website design and UI/UX services",
};

function headingFor(entry: ServiceEntry) {
  return serviceTitles[entry.slug] || entry.label;
}

export function serviceMetadata(division: ServiceDivision, params: ServiceParams): Metadata {
  const entry = findService(division, params);
  if (!entry) notFound();
  const metadata: Record<string, { title: string; description: string }> = searchMetadata;
  return buildMetadata({
    path: entry.path,
    canonical: SITE_URL + entry.path,
    ...metadata[entry.slug],
    robots: "index,follow",
    ogType: "website",
  });
}

const groupImages: Record<string, string> = {
  "Marketing Strategy & Consulting": "/marketingpageimages/Marketing Strategy & Consulting.webp",
  "Demand & Lead Generation": "/marketingpageimages/Demand & Lead Generation.webp",
  "Search & AI Visibility": "/marketingpageimages/Search & AI Visibility.webp",
  "AI Marketing & Automation": "/marketingpageimages/AI Marketing.webp",
  "Performance Marketing": "/marketingpageimages/Performance Marketing.webp",
  "Brand & Digital Experience": "/marketingpageimages/Branding & Design.webp",
  "Global Staffing": "/updatedtalentimage/section9.webp",
  "RPO": "/updatedtalentimage/section10.webp",
  "Permanent Hiring & Executive Search": "/updatedtalentimage/herosection.webp",
  "IT & Tech Talent": "/images/talent/talent-hero-specialist.webp",
  "Cloud & DevOps": "/images/services/servicenow-operations.webp",
  "Enterprise Platforms": "/images/services/servicenow-operations.webp",
};

const technologyRecruitmentImages: Record<string, string> = {
  "software-development-roles": "/updatedtalentimage/section11-1.webp",
  "servicenow-enterprise-platform-talent": "/updatedtalentimage/section11-2.webp",
  "data-ai-talent": "/updatedmainpage/section9-1.webp",
  "devops-cloud-talent": "/contact/contact-technology.webp",
};

const coverImages = {
  talent: "/updatedtalentimage/herosection.webp",
  technology: "/contact/contact-technology.webp",
  marketing: "/contact/contact-marketing.webp",
};

function StructuredService({entry, description}: {entry: ServiceEntry; description: string}) {
  const url = SITE_URL + entry.path;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {"@type": "Service", "@id": url + "#service", url, name: headingFor(entry), description,
        serviceType: entry.category,
        provider: {"@type": "Organization", name: "FyerX Global Private Limited", url: SITE_URL}},
      {"@type": "BreadcrumbList", itemListElement: [
        {"@type": "ListItem", position: 1, name: "FyerX", item: SITE_URL},
        {"@type": "ListItem", position: 2, name: divisionNames[entry.division], item: SITE_URL + "/" + entry.division},
        {"@type": "ListItem", position: 3, name: entry.label, item: url},
      ]},
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

function Paragraphs({text}: {text: string}) {
  return <>{text.split(/\n+/).filter(Boolean).map((paragraph, i) => <p key={i}>{paragraph}</p>)}</>;
}

export function ServiceDetail({division, params}: {division: ServiceDivision; params: ServiceParams}) {
  const entry = findService(division, params);
  if (!entry) notFound();
  if (entry.path === serviceNowPath) return <>
    <StructuredService entry={entry} description="ServiceNow consulting, implementation and platform support for enterprise IT, HR and customer teams." />
    <ApprovedServiceNow />
  </>;
  const article = articleFor(entry);
  const specialistImage = division === "talent" && entry.categorySlug === "technology-recruitment"
    ? technologyRecruitmentImages[entry.slug]
    : undefined;
  const sample = (samples as Record<string, { title: string; input: string; decision: string; output: string }>)[entry.slug];
  if (!sample) throw new Error(`Missing worked example at ${entry.path}`);
  const team = divisionNames[division];
  const enquire = `/contact?form=${division}`;
  const related = serviceDirectory.filter(s => s.categorySlug === entry.categorySlug && s.division === division && s.path !== entry.path);
  const jumpLinks = [
    {id: "service-scope", title: "Service scope"},
    {id: "delivery", title: "Delivery details"},
    {id: "questions", title: "FAQs"},
    {id: "related", title: "Related services"},
  ];
  const sections = article.sections.map((section, index) => ({...section, id: `section-${index + 1}`}));
  const first = sections[0];
  const capabilities = sections.slice(1, 5);
  const delivery = sections.slice(5, -3);
  const decisions = sections.slice(-3);

  return <article className={styles.page} data-division={division}>
    <StructuredService entry={entry} description={serviceSummaries[entry.slug]} />
    <div className={styles.hero}>
      <div className={styles.shell}>
        <nav className={styles.crumb} aria-label="Breadcrumb">
          <Link href="/">FyerX</Link><span>/</span><Link href={`/${division}`}>{team}</Link><span>/</span><span>{entry.category}</span>
        </nav>
        <div className={styles.heroGrid}>
          <div>
            <h1>{headingFor(entry)}</h1>
            <div className={styles.summary}><Paragraphs text={article.intro}/></div>
            <Link className={styles.button} href={enquire}>Discuss your {division === "talent" ? "hiring requirement" : division === "marketing" ? "marketing brief" : "technology project"}</Link>
          </div>
          <figure className={styles.heroArt}>
            <img src={specialistImage || groupImages[entry.category] || coverImages[division]} alt="" fetchPriority="high" />
            {entry.image && <div className={styles.glyph}><img src={entry.image} alt=""/></div>}
          </figure>
        </div>
      </div>
    </div>
    <nav className={styles.jump} aria-label="On this page"><div className={styles.shell}>
      {jumpLinks.map(link => <a key={link.id} href={"#" + link.id}>{link.title}</a>)}
    </div></nav>
    <section className={styles.opening} id="service-scope"><div className={styles.shell}>
      <div className={styles.opener} id={first.id}><h2>{first.title}</h2><div><Paragraphs text={first.body}/></div></div>
      <div className={styles.capabilities}>
        {capabilities.map(section => <section id={section.id} key={section.id}>
          <h3>{section.title}</h3><Paragraphs text={section.body}/>
        </section>)}
      </div>
    </div></section>
    <section className={styles.example}><div className={styles.shell}>
      <div className={styles.exampleTitle}><p>Illustrative engagement</p><h2>{sample.title}</h2></div>
      <ol>{[["Starting point", sample.input], ["Decision", sample.decision], ["Deliverable", sample.output]].map(([label, detail]) =>
        <li key={label}><h3>{label}</h3><p>{detail}</p></li>
      )}</ol>
    </div></section>
    <div className={styles.reading} id="delivery"><div className={styles.shell}>
      <div className={styles.columns}>
        <aside className={styles.contents}><div><p>Delivery details</p><ul>
          {delivery.map(section => <li key={section.id}><a href={"#" + section.id}>{section.title}</a></li>)}
        </ul></div></aside>
        <div className={styles.chapters}>
          {delivery.map(section => <section className={styles.chapter} id={section.id} key={section.id}>
            <h2>{section.title}</h2><Paragraphs text={section.body}/>
          </section>)}
          <ServiceReference entry={entry} />
        </div>
      </div>
    </div></div>
    <section className={styles.decisions}><div className={styles.shell}>
      <h2>Planning your engagement</h2>
      {decisions.map(section => <div className={styles.decision} key={section.id} id={section.id}>
        <h3>{section.title}</h3><div><Paragraphs text={section.body}/></div>
      </div>)}
    </div></section>
    <section className={styles.faq} id="questions"><div className={styles.shell}><div className={styles.faqGrid}>
      <div><h2>Frequently asked questions</h2><p>{entry.label}</p></div>
      <div>{article.faqs.map(item => <details key={item.question}><summary>{item.question}</summary><Paragraphs text={item.answer}/></details>)}</div>
    </div></div></section>
    <section className={styles.related} id="related"><div className={styles.shell}>
      <h2>Related {division} services</h2><div className={styles.linkGrid}>
      {related.map(link => <Link key={link.path} href={link.path}>{link.image && <img src={link.image} alt="" width="38" height="38" loading="lazy"/>}{link.label}</Link>)}
      <Link href={`/${division}`}>Explore FyerX {team}</Link></div>
    </div></section>
    <section className={styles.closing}><div className={styles.shell}>
      <h2>Talk to FyerX about {entry.label}</h2><Link className={styles.button} href={enquire}>Contact {team}</Link>
    </div></section>
  </article>;
}
