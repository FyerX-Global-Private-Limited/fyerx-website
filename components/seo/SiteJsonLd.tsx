import { FOOTER_CONTACT, FOOTER_SOCIALS } from "@/lib/footer-data";
import { SITE_OG_IMAGE, SITE_URL } from "@/data/seo-metadata";
import { JsonLd } from "@/components/seo/JsonLd";

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "FyerX Global",
  legalName: "FyerX Global Private Limited",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: SITE_OG_IMAGE,
  },
  email: FOOTER_CONTACT.email,
  telephone: FOOTER_CONTACT.phone,
  sameAs: FOOTER_SOCIALS.map((social) => social.href),
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "FyerX Global",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en",
};

export function SiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [organization, website],
      }}
    />
  );
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http") ? item.path : `${SITE_URL}${item.path === "/" ? "/" : item.path}`,
    })),
  };
}

export function articleJsonLd(input: {
  headline: string;
  description: string;
  url: string;
  type?: "Article" | "CreativeWork";
}) {
  return {
    "@context": "https://schema.org",
    "@type": input.type ?? "Article",
    headline: input.headline,
    description: input.description,
    url: input.url,
    mainEntityOfPage: input.url,
    publisher: {
      "@type": "Organization",
      name: "FyerX Global",
      logo: {
        "@type": "ImageObject",
        url: SITE_OG_IMAGE,
      },
    },
  };
}

export function CaseStudyJsonLd({
  section,
  sectionName,
  listingName,
  listingPath,
  studyTitle,
  studyDescription,
  slug,
  schemaType = "Article",
}: {
  section: "marketing" | "talent" | "technology";
  sectionName: string;
  listingName: string;
  listingPath: string;
  studyTitle: string;
  studyDescription: string;
  slug: string;
  schemaType?: "Article" | "CreativeWork";
}) {
  const url = `${SITE_URL}/${section}/case-studies/${slug}`;
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: sectionName, path: `/${section}` },
          { name: listingName, path: listingPath },
          { name: studyTitle, path: url },
        ])}
      />
      <JsonLd
        data={articleJsonLd({
          headline: studyTitle,
          description: studyDescription,
          url,
          type: schemaType,
        })}
      />
    </>
  );
}
