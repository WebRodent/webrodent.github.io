import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  basePath: process.env.NEXT_PUBLIC_BASE_URL ? '' : `/${process.env.GITHUB_REPOSITORY?.split('/')[1] || ''}`,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_URL ? '' : `/${process.env.GITHUB_REPOSITORY?.split('/')[1] || ''}`,
  trailingSlash: true,
};

export default nextConfig;
