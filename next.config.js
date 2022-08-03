/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/lessons",
        destination: "/lesson/before-you-start",
      },
      {
        source: "/bites",
        destination: "/bite/about-bites",
      },
    ];
  },
};

module.exports = nextConfig;
