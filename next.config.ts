import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/portfolio_v4" : "",
  assetPrefix: isProd ? "/portfolio_v4/" : undefined,
  trailingSlash: true,
};

export default nextConfig;
