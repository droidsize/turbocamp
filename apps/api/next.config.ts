import { env } from '@/env';
import { withLogging, withSentry } from '@packages/logging/next-config';
import { config, withAnalyzer } from '@tooling/next-config';
import type { NextConfig } from 'next';

let nextConfig: NextConfig = withLogging(config);

if (env.VERCEL) {
  nextConfig = withSentry(nextConfig);
}

if (env.ANALYZE === 'true') {
  nextConfig = withAnalyzer(nextConfig);
}

export default nextConfig;
