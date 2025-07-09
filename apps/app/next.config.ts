import { env } from '@/env';
import { withToolbar } from '@packages/feature-flags/lib/toolbar';
import { withLogging, withSentry } from '@packages/observability/next-config';
import { config, withAnalyzer } from '@tooling/next-config';
import type { NextConfig } from 'next';

let nextConfig: NextConfig = withToolbar(withLogging(config));

if (env.VERCEL) {
  nextConfig = withSentry(nextConfig);
}

if (env.ANALYZE === 'true') {
  nextConfig = withAnalyzer(nextConfig);
}

export default nextConfig;
