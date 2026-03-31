import clsx from 'clsx';
import { formatIndianCurrency, formatChangePercent } from '@irem/shared';

interface IndianCurrencyProps {
  value: number;
  change?: number;
  className?: string;
}

export function IndianCurrency({
  value,
  change,
  className,
}: IndianCurrencyProps) {
  const formatted = formatIndianCurrency(value);

  return (
    <span className={clsx('font-mono tabular-nums', className)}>
      {formatted}
      {change !== undefined && (
        <span
          className={clsx(
            'ml-1.5 text-sm',
            change > 0 && 'text-accent-green',
            change < 0 && 'text-accent-red',
            change === 0 && 'text-text-secondary',
          )}
        >
          {formatChangePercent(change)}
        </span>
      )}
    </span>
  );
}
