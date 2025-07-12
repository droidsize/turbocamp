import { type NextRequest, NextResponse } from 'next/server';

const corsOptions: {
  allowedMethods: string[];
  allowedOrigins: string[];
  allowedHeaders: string[];
  exposedHeaders: string[];
  maxAge?: number;
  credentials: boolean;
} = {
  allowedMethods: ['GET', 'DELETE', 'PATCH', 'POST', 'PUT', 'OPTIONS'],
  allowedOrigins: ['*'],
  allowedHeaders: [
    'X-CSRF-Token',
    'X-Requested-With',
    'Accept',
    'Accept-Version',
    'Content-Length',
    'Content-MD5',
    'Content-Type',
    'Date',
    'X-Api-Version',
  ],
  exposedHeaders: [
    'X-CSRF-Token',
    'X-Requested-With',
    'Accept',
    'Accept-Version',
    'Content-Length',
    'Content-MD5',
    'Content-Type',
    'Date',
    'X-Api-Version',
  ],
  maxAge: 60 * 60 * 24 * 30, // 30 days
  credentials: true,
};

// Middleware
// ========================================================
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Response
  const response = NextResponse.next();

  // Allowed origins check
  const origin = request.headers.get('origin') ?? '';
  if (
    corsOptions.allowedOrigins.includes('*') ||
    corsOptions.allowedOrigins.includes(origin)
  ) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }

  // Set default CORS headers
  response.headers.set(
    'Access-Control-Allow-Credentials',
    corsOptions.credentials.toString()
  );
  response.headers.set(
    'Access-Control-Allow-Methods',
    corsOptions.allowedMethods.join(',')
  );
  response.headers.set(
    'Access-Control-Allow-Headers',
    corsOptions.allowedHeaders.join(',')
  );
  response.headers.set(
    'Access-Control-Expose-Headers',
    corsOptions.exposedHeaders.join(',')
  );
  response.headers.set(
    'Access-Control-Max-Age',
    corsOptions.maxAge?.toString() ?? ''
  );

  // Return
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
};
