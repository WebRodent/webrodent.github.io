import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const basePath = process.env.NEXT_PUBLIC_BASE_URL ? '' : repoName ? `/${repoName}` : '';

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
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
};

export default nextConfig;
