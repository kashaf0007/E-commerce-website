import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 
  images:{
    domains:['fakestoreapi.com'],
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },
  typescript: {
    ignoreBuildErrors: true, 
  },
};

export default nextConfig;


