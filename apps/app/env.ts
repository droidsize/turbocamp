import { keys as analytics } from '@packages/analytics/keys';
import { keys as auth } from '@packages/auth/keys';
import { keys as collaboration } from '@packages/collaboration/keys';
import { keys as database } from '@packages/database/keys';
import { keys as email } from '@packages/email/keys';
import { keys as flags } from '@packages/feature-flags/keys';
import { keys as core } from '@packages/next-config/keys';
import { keys as observability } from '@packages/observability/keys';
import { keys as security } from '@packages/security/keys';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
  extends: [
    auth(),
    analytics(),
    collaboration(),
    core(),
    database(),
    email(),
    flags(),
    observability(),
    security(),
  ],
  server: {},
  client: {},
  runtimeEnv: {},
});
