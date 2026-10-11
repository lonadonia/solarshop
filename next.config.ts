import type { NextConfig } from "next";

// Static export: the build in /out is plain HTML/CSS/JS, so it uploads to any
// hosting (cPanel, Netlify, S3) and also deploys unchanged on Vercel.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  // Inline the (small) stylesheet into the HTML so the first paint does not
  // wait for a separate CSS request.
  experimental: { inlineCss: true },
};

export default nextConfig;
