import { internationalizationMiddleware } from '@cc/internationalization/middleware';
import { env } from '@cc/env';

export default middleware({
  locales: ["en", "de", "cz", "uk"],
  defaultLocale: "en",
});

export const config = {
  // matcher tells Next.js which routes to run the middleware on. This runs the
  // middleware on all routes except for static assets and Posthog ingest
  matcher: [
    "/((?!_next/static|_next/image|ingest|favicon.ico).*)",
    "/((?!api|_next|.*\\..*).*)"],
};

const middleware = authMiddleware(async (_auth, request) => {
  const i18nResponse = internationalizationMiddleware(
    request as unknown as NextRequest
  );
  if (i18nResponse) {
    return i18nResponse;

export default middleware;
