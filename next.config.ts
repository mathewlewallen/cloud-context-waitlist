import withBundleAnalyzer from "@next/bundle-analyzer"
import { type NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"
import { env } from "@cc/env.js"

const withNextIntl = createNextIntlPlugin("./src/internationalization/i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  rewrites: async () => [
    { source: "/healthz", destination: "/api/health" },
    { source: "/api/healthz", destination: "/api/health" },
    { source: "/health", destination: "/api/health" },
    { source: "/ping", destination: "/api/health" },
  ],
}

const finalConfig = env.ANALYZE
  ? withBundleAnalyzer({ enabled: env.ANALYZE })(withNextIntl(nextConfig))
  : withNextIntl

export default finalConfig;