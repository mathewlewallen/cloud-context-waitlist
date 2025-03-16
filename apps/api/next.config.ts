import { env } from '@/env';
import { config, withAnalyzer } from '@cc/next-config';
import { withLogging, withSentry } from '@cc/observability/next-config';
import type { NextConfig } from 'next';

let nextConfig: NextConfig = withLogging(config);

if (env.VERCEL) {
  nextConfig = withSentry(nextConfig);
}

if (env.ANALYZE === 'true') {
  nextConfig = withAnalyzer(nextConfig);
}

export default nextConfig;
