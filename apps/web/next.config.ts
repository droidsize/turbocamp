import { env } from '@/env';
import { withCMS } from '@packages/cms/next-config';
import { withToolbar } from '@packages/feature-flags/lib/toolbar';
import { config, withAnalyzer } from '@packages/next-config';
import { withLogging, withSentry } from '@packages/observability/next-config';
import type { NextConfig } from 'next';

let nextConfig: NextConfig = withToolbar(withLogging(config));

nextConfig.images?.remotePatterns?.push({
  protocol: 'https',
  hostname: 'assets.orama.com',
});

if (process.env.NODE_ENV === 'production') {
  const redirects: NextConfig['redirects'] = async () => [
    {
      source: '/legal',
      destination: '/legal/privacy',
      statusCode: 301,
    },
  ];

  nextConfig.redirects = redirects;
}

if (env.VERCEL) {
  nextConfig = withSentry(nextConfig);
}

if (env.ANALYZE === 'true') {
  nextConfig = withAnalyzer(nextConfig);
}

export default withCMS(nextConfig);
