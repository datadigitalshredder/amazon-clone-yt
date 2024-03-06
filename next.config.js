/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["pngimg.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pngimg.com",
        pathname: "/*/**",
      },
    ]
  }
};

module.exports = nextConfig;
