/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // For Vercel deployment
  },
  // Removed rewrites for production - API calls go directly to backend
  // For development, use .env.local with localhost URLs
};

module.exports = nextConfig;
