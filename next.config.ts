import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.2", "192.168.1.2:3000", "192.168.1.4", "192.168.1.4:3000", "localhost:3000"],
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
