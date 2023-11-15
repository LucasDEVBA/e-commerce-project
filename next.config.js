/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "fsw-store.s3.sa-east-1.amazonaws.com",
      "drive.google.com",
      "i.postimg.cc",
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
