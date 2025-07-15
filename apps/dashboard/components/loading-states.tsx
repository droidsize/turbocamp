'use client';

import { Skeleton } from '@packages/base/components/ui/skeleton';
import { cn } from '@packages/base/lib/utils';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function LoadingSpinner({
  className,
  size = 'md',
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  };

  return (
    <Loader2
      className={cn(
        'animate-spin text-muted-foreground',
        sizeClasses[size],
        className
      )}
    />
  );
}

export function LoadingPage() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <LoadingSpinner size="lg" />
    </div>
  );
}

export function TableSkeleton({
  rows = 5,
  columns = 4,
}: { rows?: number; columns?: number }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-[200px]" />
        <Skeleton className="h-10 w-[120px]" />
      </div>
      <div className="rounded-md border">
        <div className="border-b p-4">
          <div className="flex gap-4">
            {Array.from({ length: columns }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-[100px]" />
            ))}
          </div>
        </div>
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="border-b p-4 last:border-0">
            <div className="flex gap-4">
              {Array.from({ length: columns }).map((_, j) => (
                <Skeleton key={j} className="h-4 w-[100px]" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <Skeleton className="mb-4 h-4 w-[250px]" />
      <Skeleton className="mb-2 h-3 w-[200px]" />
      <Skeleton className="h-3 w-[150px]" />
    </div>
  );
}

export function FormSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-10 w-full" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-24 w-full" />
      </div>
      <Skeleton className="h-10 w-[120px]" />
    </div>
  );
}

export function PageHeaderSkeleton() {
  return (
    <div className="mb-8">
      <Skeleton className="mb-2 h-8 w-[300px]" />
      <Skeleton className="h-4 w-[500px]" />
    </div>
  );
}
