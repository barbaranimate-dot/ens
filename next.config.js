/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // For Vercel deployment
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during build for production
  },
  // Removed rewrites for production - API calls go directly to backend
  // For development, use .env.local with localhost URLs
};

module.exports = nextConfig;
