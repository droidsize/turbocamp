import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

type AuthSession = {
  userId?: string;
  user?: {
    id: string;
    email: string;
    name?: string;
  };
} | null;

const isProtectedRoute = (request: NextRequest) => {
  return request.url.includes('/dashboard'); // change this to your protected route
};

// Simple middleware for direct usage (like in main app)
export const authMiddleware = async (
  request: NextRequest
): Promise<NextResponse | null> => {
  // Get the API URL from environment, fallback to localhost for development
  const apiUrl = process.env.AUTH_API_URL || 'http://localhost:3002';
  const url = new URL('/api/auth/get-session', apiUrl);

  let session: AuthSession = null;

  try {
    const response = await fetch(url, {
      headers: {
        cookie: request.headers.get('cookie') || '',
      },
    });

    // Check if response is ok and has JSON content type
    if (response.ok) {
      const contentType = response.headers.get('content-type');
      if (contentType?.includes('application/json')) {
        session = await response.json();
      }
    }
  } catch (error) {
    console.error('Auth middleware error:', error);
    session = null;
  }

  // Check if user should be redirected for protected routes
  if (isProtectedRoute(request) && !session) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  // Return null if no redirect is needed (let the request continue)
  return null;
};

// Higher-Order Function version for web app (wraps other middleware)
export const authMiddlewareWrapper = (
  middleware: (
    auth: AuthSession,
    request: NextRequest
  ) => NextResponse | Promise<NextResponse>
) => {
  return async (request: NextRequest) => {
    // Get the API URL from environment, fallback to localhost for development
    const apiUrl = process.env.AUTH_API_URL || 'http://localhost:3002';
    const url = new URL('/api/auth/get-session', apiUrl);

    let session: AuthSession = null;

    try {
      const response = await fetch(url, {
        headers: {
          cookie: request.headers.get('cookie') || '',
        },
      });

      // Check if response is ok and has JSON content type
      if (response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType?.includes('application/json')) {
          session = await response.json();
        }
      }
    } catch (error) {
      console.error('Auth middleware error:', error);
      session = null;
    }

    // Check if user should be redirected for protected routes
    if (isProtectedRoute(request) && !session) {
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    // Call the wrapped middleware with auth session and request
    return middleware(session, request);
  };
};
