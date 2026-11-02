import type { NextConfig } from "next";
import { resolve } from "node:path";

// Normal Next.js app (no static export), so API routes / Supabase can be added later.
const nextConfig: NextConfig = {
  outputFileTracingRoot: resolve(process.cwd()),
};

export default nextConfig;
