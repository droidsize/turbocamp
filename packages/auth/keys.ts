import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const keys = () =>
  createEnv({
    server: {
      BETTER_AUTH_SECRET: z.string().min(32),
      BETTER_AUTH_URL: z.string().url().optional(),
      AUTH_API_URL: z.string().url().default('http://localhost:3002'),
      // Additional trusted origins for flexibility (comma-separated)
      ADDITIONAL_TRUSTED_ORIGINS: z.string().optional(),
    },
    client: {
      NEXT_PUBLIC_BETTER_AUTH_URL: z.string().url().optional(),
      // Client-side API URL for browsers
      NEXT_PUBLIC_AUTH_API_URL: z
        .string()
        .url()
        .default('http://localhost:3002'),
    },
    runtimeEnv: {
      BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
      BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
      NEXT_PUBLIC_BETTER_AUTH_URL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
      AUTH_API_URL: process.env.AUTH_API_URL,
      ADDITIONAL_TRUSTED_ORIGINS: process.env.ADDITIONAL_TRUSTED_ORIGINS,
      NEXT_PUBLIC_AUTH_API_URL: process.env.NEXT_PUBLIC_AUTH_API_URL,
    },
  });
