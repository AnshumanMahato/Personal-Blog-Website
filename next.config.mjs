/** @type {import('next').NextConfig} */

const ANALYTICS_BASE_URL = "https://hn-ping2.hashnode.com";
const HASHNODE_ADVANCED_ANALYTICS_URL = "https://user-analytics.hashnode.com";
const HASHNODE_BASE_PATH = process.env.NEXT_PUBLIC_HASHNODE_BASE_PATH;

const nextConfig = {
  experimental: {
    scrollRestoration: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: `${HASHNODE_BASE_PATH || ""}/ping/data-event`,
        destination: `${ANALYTICS_BASE_URL}/api/data-event`,
      },
      {
        source: `${HASHNODE_BASE_PATH || ""}/api/analytics`,
        destination: `${HASHNODE_ADVANCED_ANALYTICS_URL}/api/analytics`,
      },
    ];
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
