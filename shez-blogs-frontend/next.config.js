/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "icons.iconarchive.com",
      "cdn.jsdelivr.net",
      "robohash.org",
      "localhost",
    ],
  },
};

module.exports = nextConfig;
