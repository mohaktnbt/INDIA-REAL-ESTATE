import clsx from 'clsx';

type BadgeVariant = 'success' | 'warning' | 'danger' | 'info' | 'muted';

interface StatusBadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  success: 'bg-accent-green/15 text-accent-green',
  warning: 'bg-accent-amber/15 text-accent-amber',
  danger: 'bg-accent-red/15 text-accent-red',
  info: 'bg-accent-blue/15 text-accent-blue',
  muted: 'bg-bg-tertiary text-text-muted',
};

export function StatusBadge({ variant, children, className }: StatusBadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
