// Optional Sentry integration - falls back to console if not available
let captureException: (error: unknown) => void;
try {
  captureException = require('@sentry/nextjs').captureException;
} catch {
  captureException = (error: unknown) => {
    console.error('Error captured (Sentry not available):', error);
  };
}

import { log } from './log';

export const parseError = (error: unknown): string => {
  let message = 'An error occurred';
  console.log('parse error', error);

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = error.message as string;
  } else {
    message = String(error);
  }

  try {
    captureException(error);
    log.error(`Parsing error: ${JSON.stringify(message)}`);
  } catch (newError) {
    // biome-ignore lint/suspicious/noConsole: Need console here
    console.error('Error parsing error:', newError);
  }

  return message;
};
