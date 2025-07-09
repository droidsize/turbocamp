import { keys as analytics } from '@packages/analytics/keys';
import { keys as auth } from '@packages/auth/keys';
import { keys as db } from '@packages/db/keys';
import { keys as email } from '@packages/email/keys';
import { keys as logging } from '@packages/logging/keys';
import { keys as payments } from '@packages/payments/keys';
import { createEnv } from '@t3-oss/env-nextjs';
import { keys as core } from '@tooling/next-config/keys';

export const env = createEnv({
  extends: [auth(), analytics(), core(), db(), email(), logging(), payments()],
  server: {},
  client: {},
  runtimeEnv: {},
});
