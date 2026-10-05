import { cn } from '../../lib/utils';

export function ImageSkeleton({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn('absolute inset-0 animate-pulse bg-foreground/10', className)}
    />
  );
}