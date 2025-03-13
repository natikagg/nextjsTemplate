import type { NextConfig } from "next";

// Replace 'your-repo-name' with your actual GitHub repository name
const repoName = 'nextjsTemplate'; // Example: 'my-nextjs-app'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Use these settings for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? `/${repoName}` : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '',
};

export default nextConfig;