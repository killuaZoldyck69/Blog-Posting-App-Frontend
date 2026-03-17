import "./src/env";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // You can leave pathname blank to allow all images from Unsplash,
        // or restrict it to specific folders if you want to be extra secure.
        pathname: "/**",
      },
      // You can add more objects here later if you use other image hosts!
    ],
  },
};

export default nextConfig;
