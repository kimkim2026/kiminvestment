import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
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
        destination: '/blog/beginner-real-estate-investment-guide-2026',
        permanent: true,
      },
      {
        source: '/tax-legal/llc',
        destination: '/blog/us-llc-formation-guide',
        permanent: true,
      },
      {
        source: '/experience',
        destination: '/blog/duplex-east-coast-purchase-review',
        permanent: true,
      },
      {
        source: '/etf/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog',
        has: [{ type: 'query', key: 'category', value: 'my-experience' }],
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog',
        has: [{ type: 'query', key: 'category', value: 'tax-legal' }],
        destination: '/',
        permanent: true,
      },
      {
        source: '/posts',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
