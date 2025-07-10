import { keys as auth } from '@packages/auth/keys';
import { keys as cms } from '@packages/cms/keys';
import { keys as email } from '@packages/email/keys';
import { keys as flags } from '@packages/feature-flags/keys';
import { keys as logging } from '@packages/logging/keys';
import { keys as security } from '@packages/security/keys';
import { createEnv } from '@t3-oss/env-nextjs';
import { keys as core } from '@tooling/next-config/keys';

export const env = createEnv({
  extends: [auth(), cms(), core(), email(), logging(), flags(), security()],
  server: {},
  client: {},
  runtimeEnv: {},
});
