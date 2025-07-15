import { parseError } from '@packages/logging/error';
import { log } from '@packages/logging/log';
import { useCallback } from 'react';
import { toast } from 'sonner';

interface ErrorHandlerOptions {
  fallbackMessage?: string;
  showToast?: boolean;
  logError?: boolean;
}

export function useErrorHandler() {
  const handleError = useCallback((
    error: unknown, 
    options: ErrorHandlerOptions = {}
  ) => {
    const {
      fallbackMessage = 'An unexpected error occurred. Please try again.',
      showToast = true,
      logError = true,
    } = options;

    const errorMessage = parseError(error) || fallbackMessage;

    if (logError) {
      log.error('Error handled:', { error, errorMessage });
    }

    if (showToast) {
      toast.error(errorMessage);
    }

    return errorMessage;
  }, []);

  return { handleError };
}

// Common error messages for specific scenarios
export const ERROR_MESSAGES = {
  NETWORK: 'Network error. Please check your connection and try again.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION: 'Please check your input and try again.',
  RATE_LIMIT: 'Too many requests. Please try again later.',
  SERVER: 'Server error. Please try again later.',
  ORGANIZATION_LIMIT: 'You have reached the maximum number of organizations.',
  MEMBER_LIMIT: 'This organization has reached the maximum number of members.',
  PERMISSION_DENIED: 'You do not have permission to perform this action.',
} as const;