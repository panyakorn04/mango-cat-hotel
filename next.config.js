const million = require("million/compiler");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["imagedelivery.net", "lh3.googleusercontent.com"],
  },
};
module.exports = million.next(nextConfig, { auto: { rsc: true } });
