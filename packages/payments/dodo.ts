import 'server-only';
import DodoPayments from 'dodopayments';
import { keys } from './keys';

const env = keys();

export const dodoPayments = env.DODO_PAYMENTS_API_KEY
  ? new DodoPayments({
      bearerToken: env.DODO_PAYMENTS_API_KEY,
      environment: env.DODO_PAYMENTS_ENVIRONMENT,
    })
  : null;
