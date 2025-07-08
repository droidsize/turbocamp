import { stripeClient } from '@better-auth/stripe/client';
import { organizationClient } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';

export const { signIn, signOut, signUp, useSession } = createAuthClient({
  plugins: [
    organizationClient(),
    stripeClient({
      subscription: true,
    }),
  ],
});
