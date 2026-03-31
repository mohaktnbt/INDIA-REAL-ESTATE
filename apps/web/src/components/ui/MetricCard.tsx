'use client';

import clsx from 'clsx';

interface MetricCardProps {
  icon?: React.ReactNode;
  label: string;
  value: string;
  change?: {
    value: string;
    direction: 'up' | 'down' | 'neutral';
  };
  subtitle?: string;
  sparkline?: React.ReactNode;
  className?: string;
}

export function MetricCard({
  icon,
  label,
  value,
  change,
  subtitle,
  sparkline,
  className,
}: MetricCardProps) {
  return (
    <div
      className={clsx(
        'rounded-lg border border-border-primary bg-bg-secondary p-4 transition-colors hover:border-border-highlight',
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            {icon && (
              <span className="text-text-muted">{icon}</span>
            )}
            <span className="text-xs font-medium uppercase tracking-wider text-text-secondary">
              {label}
            </span>
          </div>
          <div className="mt-2 font-mono text-2xl font-bold tabular-nums text-text-primary">
            {value}
          </div>
          <div className="mt-1 flex items-center gap-2">
            {change && (
              <span
                className={clsx(
                  'flex items-center gap-0.5 font-mono text-sm font-medium tabular-nums',
                  change.direction === 'up' && 'text-accent-green',
                  change.direction === 'down' && 'text-accent-red',
                  change.direction === 'neutral' && 'text-text-secondary',
                )}
              >
                {change.direction === 'up' && (
                  <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 2l4 5H2l4-5z" />
                  </svg>
                )}
                {change.direction === 'down' && (
                  <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M6 10l4-5H2l4 5z" />
                  </svg>
                )}
                {change.value}
              </span>
            )}
            {subtitle && (
              <span className="text-xs text-text-muted">{subtitle}</span>
            )}
          </div>
        </div>
        {sparkline && (
          <div className="ml-3 h-10 w-20 flex-shrink-0">{sparkline}</div>
        )}
      </div>
    </div>
  );
}
