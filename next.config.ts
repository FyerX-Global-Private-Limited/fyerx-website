import type { NextConfig } from "next";
import { getLeadsApiPath } from "./lib/leads-api-path";
import { wordpressPermanentRedirects } from "./lib/wordpress-legacy";

const leadsApiPath = getLeadsApiPath();

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.globalcoachcenter.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      ...wordpressPermanentRedirects(),
      {
        source: "/technology/case-studies/servicenow-platform-optimisation",
        destination: "/technology/case-studies/servicenow-workflow-transformation",
        permanent: true,
      },
      {
        source: "/technology/case-studies/salesforce-customer-operations",
        destination: "/technology/case-studies/crm-revenue-operations-enablement",
        permanent: true,
      },
      {
        source: "/technology/case-studies/cloud-devops-migration",
        destination: "/technology/case-studies/cloud-migration-with-release-discipline",
        permanent: true,
      },
      {
        source: "/technology/case-studies/data-ai-operating-foundation",
        destination: "/technology/case-studies/data-foundation-for-applied-ai",
        permanent: true,
      },
      {
        source: "/technology/case-studies/legacy-modernisation-programme",
        destination: "/technology/case-studies/legacy-application-modernisation",
        permanent: true,
      },
      {
        source: "/talent/book-session",
        destination: "/contact?form=talent",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    // Public path comes from LEADS_API_PATH (default /leads) → internal App Router handler
    if (leadsApiPath === "/api/leads") {
      return [];
    }
    return [{ source: leadsApiPath, destination: "/api/leads" }];
  },
};

export default nextConfig;
