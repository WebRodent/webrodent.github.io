/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Use 'export' for static HTML export suitable for GitHub Pages
  images: {
    unoptimized: true, // Disable Image Optimization for static export
  },
  basePath: '', // Add this line to handle base path in static export
  assetPrefix: './', // Update this line to handle assets in static export
  trailingSlash: true, // Add this to ensure proper static file serving
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    config.resolve.fallback = { fs: false };
    // Suppress HMR websocket warnings in production
    if (!isServer) {
      config.infrastructureLogging = {
        level: 'error'
      }
    }
    return config;
  },
};

module.exports = nextConfig;
