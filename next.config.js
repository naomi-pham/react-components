/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.goodfreephotos.com",
        port: "",
        pathname: "/albums/**",
      },
    ],
  },
};
