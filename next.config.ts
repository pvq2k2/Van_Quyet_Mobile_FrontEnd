import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.hoanghamobile.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  devIndicators: false,
};

export default nextConfig;
