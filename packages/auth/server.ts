import { stripe } from '@better-auth/stripe';
import { database } from '@packages/db';
import { stripe as stripeClient } from '@packages/payments';
import { keys } from '@packages/payments/keys';
import { type BetterAuthOptions, betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { nextCookies } from 'better-auth/next-js';
import { organization } from 'better-auth/plugins';

const authOptions = {
  database: prismaAdapter(database, {
    provider: 'postgresql',
  }),

  advanced: {
    crossSubDomainCookies: {
      enabled: true,
      domain:
        process.env.NODE_ENV === 'production' ? '.turbocamp.dev' : 'localhost',
    },
  },
  trustedOrigins: [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
    ...(process.env.NODE_ENV === 'production'
      ? [
          'https://turbocamp.dev',
          'https://dashboard.turbocamp.dev',
          'https://api.turbocamp.dev',
          'https://*.turbocamp.dev',
        ]
      : []),

    ...(process.env.ADDITIONAL_TRUSTED_ORIGINS
      ? process.env.ADDITIONAL_TRUSTED_ORIGINS.split(',').map((origin) =>
          origin.trim()
        )
      : []),
  ],
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },

  plugins: [
    nextCookies(),
    organization(),
    stripe({
      stripeClient,
      stripeWebhookSecret: keys().STRIPE_WEBHOOK_SECRET || '',
    }),
  ],
} satisfies BetterAuthOptions;

export const auth = betterAuth(authOptions) as ReturnType<
  typeof betterAuth<typeof authOptions>
>;
