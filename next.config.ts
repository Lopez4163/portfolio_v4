import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio_v4",
  assetPrefix: "/portfolio_v4/",
  trailingSlash: true,
};

export default nextConfig;
