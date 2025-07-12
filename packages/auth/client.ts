import { stripeClient } from '@better-auth/stripe/client';
import { organizationClient } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';

export const { signIn, signOut, signUp, useSession } = createAuthClient({
  baseURL: `${process.env.BETTER_AUTH_URL || 'http://localhost:3002'}/api/auth`,
  plugins: [
    organizationClient(),
    stripeClient({
      subscription: true,
    }),
  ],
});
