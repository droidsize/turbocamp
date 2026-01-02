import { NextResponse } from 'next/server';
import type { NextRequest, NextMiddleware } from 'next/server';

export const config = {
  matcher: ['/((?!_next/static|_next/image|ingest|favicon.ico).*)'],
};

// Diagnostic middleware that works without failing imports
const middleware: NextMiddleware = async (request: NextRequest) => {
  try {
    // Try loading each module to identify which one fails
    const errors: string[] = [];

    // Test env import
    try {
      const { env } = await import('@/env');
      console.log('env loaded, FLAGS_SECRET:', !!env.FLAGS_SECRET);
    } catch (e) {
      errors.push(`env: ${e}`);
    }

    // Test auth middleware
    try {
      await import('@packages/auth/middleware');
      console.log('auth middleware loaded');
    } catch (e) {
      errors.push(`auth: ${e}`);
    }

    // Test i18n middleware
    try {
      const { internationalizationMiddleware } = await import('@packages/i18n/middleware');
      const i18nResponse = internationalizationMiddleware(request);
      if (i18nResponse) {
        return i18nResponse;
      }
      console.log('i18n middleware loaded');
    } catch (e) {
      errors.push(`i18n: ${e}`);
    }

    // Test security middleware
    try {
      await import('@packages/security/middleware');
      console.log('security middleware loaded');
    } catch (e) {
      errors.push(`security: ${e}`);
    }

    if (errors.length > 0) {
      console.error('Module loading errors:', errors);
      // Return error details for debugging
      return NextResponse.json({ errors }, { status: 500 });
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
};

export default middleware;
