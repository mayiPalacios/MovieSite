/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["themebeyond.com"],
    layout: "responsive",
  },
};

module.exports = nextConfig;
