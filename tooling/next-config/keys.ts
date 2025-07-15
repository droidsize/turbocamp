import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const keys = () =>
  createEnv({
    server: {
      ANALYZE: z.string().optional(),
      VERCEL: z.string().optional(),
      VERCEL_PROJECT_PRODUCTION_URL: z.string().optional(),

      // Added by Vercel
      NEXT_RUNTIME: z.enum(['nodejs', 'edge']).optional(),
    },
    client: {
      NEXT_PUBLIC_DASHBOARD_URL: z.string().url(),
      NEXT_PUBLIC_WEB_URL: z.string().url(),
      NEXT_PUBLIC_API_URL: z.string().url().optional(),
      NEXT_PUBLIC_DOCS_URL: z.string().url().optional(),
    },
    runtimeEnv: {
      ANALYZE: process.env.ANALYZE,
      VERCEL: process.env.VERCEL,
      VERCEL_PROJECT_PRODUCTION_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL,
      NEXT_RUNTIME: process.env.NEXT_RUNTIME,
      NEXT_PUBLIC_DASHBOARD_URL: process.env.NEXT_PUBLIC_DASHBOARD_URL,
      NEXT_PUBLIC_WEB_URL: process.env.NEXT_PUBLIC_WEB_URL,
      NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
      NEXT_PUBLIC_DOCS_URL: process.env.NEXT_PUBLIC_DOCS_URL,
    },
  });
