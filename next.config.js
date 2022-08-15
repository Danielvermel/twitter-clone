/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['help.twitter.com', 'media-exp1.licdn.com'],
  },
  swcMinify: true,
}

module.exports = nextConfig
