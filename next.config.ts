import withBundleAnalyzer from "@next/bundle-analyzer"
import { type NextConfig } from "next"
import withNextIntl from "next-intl/plugin"
import { env } from "@cc/env.mjs"

const config: NextConfig = {
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

const nextIntlConfig = withNextIntl("./i18n.ts")(config)

const finalConfig = env.ANALYZE
  ? withBundleAnalyzer({ enabled: env.ANALYZE })(nextIntlConfig)
  : nextIntlConfig

export default finalConfig