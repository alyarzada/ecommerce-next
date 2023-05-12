/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "https://irshad.az/",
  //       port: "",
  //       pathname: "/irshad.az/**",
  //     },
  //   ],
  // },
};

module.exports = nextConfig;
