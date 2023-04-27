/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/about",
        headers: [
          {
            key: "cache-control",
            value: "public, max-age=600, stale-if-error=86400",
          },
          {
            key: "x-another-custom-header",
            value: "my other custom header value",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
