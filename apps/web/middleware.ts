import { NextResponse } from 'next/server';
import type { NextRequest, NextMiddleware } from 'next/server';

export const config = {
  matcher: ['/((?!_next/static|_next/image|ingest|favicon.ico).*)'],
};

// Simplified middleware to diagnose deployment issue
const middleware: NextMiddleware = (request: NextRequest) => {
  // Log environment check
  const hasEnv = !!process.env.BETTER_AUTH_SECRET;
  console.log('Middleware running, hasEnv:', hasEnv);

  return NextResponse.next();
};

export default middleware;
