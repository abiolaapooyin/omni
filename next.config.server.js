/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove output: 'export' for custom server deployment
  trailingSlash: true,
  basePath: '/omni', // For subdirectory deployment
  assetPrefix: '/omni/',
  images: {
    unoptimized: true // Required for cPanel shared hosting
  },
  // Custom server configuration
  experimental: {
    outputFileTracingRoot: __dirname,
  },
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

module.exports = nextConfig