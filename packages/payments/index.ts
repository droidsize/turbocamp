import 'server-only';
import Stripe from 'stripe';
import { keys } from './keys';

export const stripe = new Stripe(keys().STRIPE_SECRET_KEY, {
  apiVersion: '2025-08-27.basil',
});

export type { Stripe } from 'stripe';
