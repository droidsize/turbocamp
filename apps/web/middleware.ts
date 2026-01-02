import { env } from '@/env';
import { authMiddlewareWrapper } from '@packages/auth/middleware';
import { internationalizationMiddleware } from '@packages/i18n/middleware';
import { parseError } from '@packages/logging/error';
import {
  noseconeMiddleware,
  noseconeOptions,
  noseconeOptionsWithToolbar,
} from '@packages/security/middleware';
import {
  type NextMiddleware,
  type NextRequest,
  NextResponse,
} from 'next/server';

export const config = {
  // matcher tells Next.js which routes to run the middleware on. This runs the
  // middleware on all routes except for static assets and Posthog ingest
  matcher: ['/((?!_next/static|_next/image|ingest|favicon.ico).*)'],
};

const securityHeaders = env.FLAGS_SECRET
  ? noseconeMiddleware(noseconeOptionsWithToolbar)
  : noseconeMiddleware(noseconeOptions);

const middleware = authMiddlewareWrapper((_auth, request) => {
  const i18nResponse = internationalizationMiddleware(
    request as unknown as NextRequest
  );
  if (i18nResponse) {
    return i18nResponse;
  }

  try {
    // Apply security headers and continue
    securityHeaders();
    return NextResponse.next();
  } catch (error) {
    const message = parseError(error);

    return NextResponse.json({ error: message }, { status: 403 });
  }
}) as unknown as NextMiddleware;

export default middleware;
