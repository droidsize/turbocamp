import { stripe } from '@better-auth/stripe';
import { database } from '@packages/db';
import { resend } from '@packages/email';
import { stripe as stripeClient } from '@packages/payments';
import { keys as paymentKeys } from '@packages/payments/keys';
import { type BetterAuthOptions, betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { nextCookies } from 'better-auth/next-js';
import { organization } from 'better-auth/plugins';
import { keys } from './keys';

const env = keys();

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
    organization({
      allowUserToCreateOrganization: true,
      organizationLimit: 5,
      membershipLimit: 100,
      creatorRole: 'owner',
      sendInvitationEmail: async (data) => {
        await resend.emails.send({
          from: env.EMAIL_FROM ?? 'noreply@turbocamp.dev',
          to: data.email,
          subject: `You've been invited to join ${data.organization.name}`,
          text: `You've been invited to join ${data.organization.name}. Visit your dashboard to accept the invitation.`,
        });
      },
    }),
    stripe({
      stripeClient,
      stripeWebhookSecret: paymentKeys().STRIPE_WEBHOOK_SECRET || '',
      createCustomerOnSignUp: true,
    }),
  ],
} satisfies BetterAuthOptions;

export const auth = betterAuth(authOptions) as ReturnType<
  typeof betterAuth<typeof authOptions>
>;
