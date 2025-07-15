'use client';

import { Button } from '@packages/base/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@packages/base/components/ui/card';
import { log } from '@packages/logging/log';
import { AlertCircle, RefreshCw } from 'lucide-react';
import React, { useEffect } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; reset: () => void }>;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    log.error('ErrorBoundary caught an error:', { error, errorInfo });
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return (
          <FallbackComponent error={this.state.error} reset={this.reset} />
        );
      }

      return (
        <DefaultErrorFallback error={this.state.error} reset={this.reset} />
      );
    }

    return this.props.children;
  }
}

function DefaultErrorFallback({
  error,
  reset,
}: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log error to monitoring service
    log.error('Application error:', { error });
  }, [error]);

  return (
    <div className="flex min-h-[400px] items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <CardTitle>Something went wrong</CardTitle>
          </div>
          <CardDescription>
            We encountered an unexpected error. Please try again or contact
            support if the problem persists.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <details className="text-sm">
            <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
              Error details
            </summary>
            <pre className="mt-2 overflow-auto rounded bg-muted p-2 text-xs">
              {error.message || 'Unknown error'}
            </pre>
          </details>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button onClick={reset} variant="default" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Try again
          </Button>
          <Button onClick={() => window.location.assign('/')} variant="outline">
            Go to home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export { ErrorBoundary, DefaultErrorFallback };
export type { ErrorBoundaryProps };
