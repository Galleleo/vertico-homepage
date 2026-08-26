import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vertico-homepage",
  assetPrefix: "/vertico-homepage/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
