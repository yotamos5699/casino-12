/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["drive.google.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
