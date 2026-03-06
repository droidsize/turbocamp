import 'server-only';
import { Polar } from '@polar-sh/sdk';
import { keys } from './keys';

const env = keys();

export const polar = env.POLAR_ACCESS_TOKEN
  ? new Polar({
      accessToken: env.POLAR_ACCESS_TOKEN,
      server: env.POLAR_ENVIRONMENT,
    })
  : null;
