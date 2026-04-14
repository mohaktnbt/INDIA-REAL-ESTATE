import clsx from 'clsx';

type SkeletonVariant = 'text' | 'card' | 'chart' | 'table-row';

interface SkeletonProps {
  variant?: SkeletonVariant;
  className?: string;
}

const variantStyles: Record<SkeletonVariant, string> = {
  text: 'h-4 w-full rounded',
  card: 'h-32 w-full rounded-lg',
  chart: 'h-64 w-full rounded-lg',
  'table-row': 'h-10 w-full rounded',
};

export function Skeleton({ variant = 'text', className }: SkeletonProps) {
  return (
    <div
      className={clsx(
        'animate-pulse bg-bg-tertiary',
        variantStyles[variant],
        className,
      )}
    />
  );
}

export function SkeletonGroup({
  count = 3,
  variant = 'text',
  gap = 'gap-3',
  className,
}: {
  count?: number;
  variant?: SkeletonVariant;
  gap?: string;
  className?: string;
}) {
  return (
    <div className={clsx('flex flex-col', gap, className)}>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} variant={variant} />
      ))}
    </div>
  );
}
