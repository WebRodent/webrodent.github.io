/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Use 'export' for static HTML export suitable for GitHub Pages
    images: {
      unoptimized: true, // Disable Image Optimization for static export
    },
  };
  
  module.exports = nextConfig;
  