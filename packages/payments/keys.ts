import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const keys = () =>
  createEnv({
    server: {
      STRIPE_SECRET_KEY: z.string().startsWith('sk_'),
      STRIPE_WEBHOOK_SECRET: z.string().optional(),
      POLAR_ACCESS_TOKEN: z.string().optional(),
      POLAR_WEBHOOK_SECRET: z.string().optional(),
      POLAR_ENVIRONMENT: z.enum(['sandbox', 'production']).default('sandbox'),
      DODO_PAYMENTS_API_KEY: z.string().optional(),
      DODO_PAYMENTS_WEBHOOK_SECRET: z.string().optional(),
      DODO_PAYMENTS_ENVIRONMENT: z
        .enum(['test_mode', 'live_mode'])
        .default('test_mode'),
    },
    runtimeEnv: {
      STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
      STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
      POLAR_ACCESS_TOKEN: process.env.POLAR_ACCESS_TOKEN,
      POLAR_WEBHOOK_SECRET: process.env.POLAR_WEBHOOK_SECRET,
      POLAR_ENVIRONMENT: process.env.POLAR_ENVIRONMENT,
      DODO_PAYMENTS_API_KEY: process.env.DODO_PAYMENTS_API_KEY,
      DODO_PAYMENTS_WEBHOOK_SECRET: process.env.DODO_PAYMENTS_WEBHOOK_SECRET,
      DODO_PAYMENTS_ENVIRONMENT: process.env.DODO_PAYMENTS_ENVIRONMENT,
    },
  });
