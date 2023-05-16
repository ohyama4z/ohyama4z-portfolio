/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/" : "",
}

module.exports = nextConfig
