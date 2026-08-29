import type { NextConfig } from "next";
import { getLeadsApiPath } from "./lib/leads-api-path";

const leadsApiPath = getLeadsApiPath();

const nextConfig: NextConfig = {
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
  async rewrites() {
    // Public path comes from LEADS_API_PATH (default /leads) → internal App Router handler
    if (leadsApiPath === "/api/leads") {
      return [];
    }
    return [{ source: leadsApiPath, destination: "/api/leads" }];
  },
};

export default nextConfig;
