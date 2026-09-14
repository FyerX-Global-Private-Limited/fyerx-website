import type { NextConfig } from "next";
import { getLeadsApiPath } from "./lib/leads-api-path";

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
      {
        source: "/technology/case-studies/servicenow-platform-optimisation",
        destination: "/technology/case-studies/servicenow-workflow-transformation",
        statusCode: 301,
      },
      {
        source: "/technology/case-studies/salesforce-customer-operations",
        destination: "/technology/case-studies/crm-revenue-operations-enablement",
        statusCode: 301,
      },
      {
        source: "/technology/case-studies/cloud-devops-migration",
        destination: "/technology/case-studies/cloud-migration-with-release-discipline",
        statusCode: 301,
      },
      {
        source: "/technology/case-studies/data-ai-operating-foundation",
        destination: "/technology/case-studies/data-foundation-for-applied-ai",
        statusCode: 301,
      },
      {
        source: "/technology/case-studies/legacy-modernisation-programme",
        destination: "/technology/case-studies/legacy-application-modernisation",
        statusCode: 301,
      },
      {
        source: "/talent/book-session",
        destination: "/contact?form=talent",
        statusCode: 301,
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
