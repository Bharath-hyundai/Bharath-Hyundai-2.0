import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
     
      {
        protocol: 'https',
        hostname: '**', // This allows all HTTPS image sources
      },
      {
        protocol: 'http',
        hostname: '**', // This allows all HTTP image sources (optional)
      },
    ],
  },
};

export default nextConfig;
