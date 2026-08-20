import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ===== IMAGE OPTIMIZATION =====
  images: {
    // CRITICAL FIX: Tell Next.js to trust Cloudinary images
    // This prevents Next.js from trying to re-optimize already optimized images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // Allow all Cloudinary paths
      },
    ],

    // Standard device sizes for optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Image sizes for art direction
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // OPTIMIZATION: Cache optimized images for a long time
    // Cloudinary handles versioning via public_id
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },

  // ===== PERFORMANCE =====
  swcMinify: true, // Use SWC for faster minification

  // ===== FONT OPTIMIZATION =====
  optimizeFonts: true,

  // ===== WEBPACK CONFIGURATION =====
  webpack: (config) => {
    // Add any webpack optimizations here if needed
    return config;
  },

  // ===== EXPERIMENTAL FEATURES =====
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: [
      "react-icons",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
    ],
  },

  // ===== BUILD CONFIGURATION =====
  // Use turbopack for faster builds (already in package.json for dev)
  // Note: Don't set turbopack here if using --turbopack CLI flag
};

export default nextConfig;