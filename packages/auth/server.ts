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
  plugins: [
    nextCookies(),
    organization(),
    stripe({
      stripeClient,
      stripeWebhookSecret: keys().STRIPE_WEBHOOK_SECRET,
    }),
  ],
} satisfies BetterAuthOptions;

export const auth = betterAuth(authOptions) as ReturnType<
  typeof betterAuth<typeof authOptions>
>;
