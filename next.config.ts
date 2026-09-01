import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async rewrites() {
    return [
      {source: "/api/:path*", destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`}
    ]
  }
};

export default nextConfig;
