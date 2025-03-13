import type { NextConfig } from "next";

// Replace 'your-repo-name' with your actual GitHub repository name
const repoName = 'nextjsTemplate'; // Example: 'my-nextjs-app'
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Use these settings for GitHub Pages
  basePath: isProd? `/${repoName}` : '',
  assetPrefix: isProd? `/${repoName}/` : '',
};

export default nextConfig;