import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'kiminvestment.com' }],
        destination: 'https://www.kiminvestment.com/:path*',
        permanent: true,
      },
      {
        source: '/guide/basics',
        destination: '/posts/beginner-real-estate-investment-guide-2026',
        permanent: true,
      },
      {
        source: '/tax-legal/llc',
        destination: '/posts/us-llc-formation-guide',
        permanent: true,
      },
      {
        source: '/experience',
        destination: '/posts/duplex-east-coast-purchase-review',
        permanent: true,
      },
      {
        source: '/etf/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: '/posts/:slug*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
