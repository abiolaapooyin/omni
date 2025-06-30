/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [], // Add any external image domains here
    unoptimized: false // Vercel supports image optimization
  },
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  // Vercel-specific optimizations
  swcMinify: true,
  compress: true,
}

module.exports = nextConfig