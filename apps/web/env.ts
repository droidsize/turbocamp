import { keys as cms } from '@packages/cms/keys';
import { keys as email } from '@packages/email/keys';
import { keys as flags } from '@packages/feature-flags/keys';
import { keys as core } from '@packages/next-config/keys';
import { keys as observability } from '@packages/observability/keys';
import { keys as rateLimit } from '@packages/rate-limit/keys';
import { keys as security } from '@packages/security/keys';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  extends: [
    cms(),
    core(),
    email(),
    observability(),
    flags(),
    security(),
    rateLimit(),
  ],
  server: {},
  client: {},
  runtimeEnv: {},
});
