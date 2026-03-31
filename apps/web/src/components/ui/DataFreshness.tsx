'use client';

import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { timeAgo } from '@irem/shared';

interface DataFreshnessProps {
  date: Date;
  className?: string;
}

export function DataFreshness({ date, className }: DataFreshnessProps) {
  const [display, setDisplay] = useState(() => timeAgo(date));

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplay(timeAgo(date));
    }, 30_000);
    return () => clearInterval(interval);
  }, [date]);

  return (
    <span className={clsx('text-xs text-text-muted', className)}>
      Updated {display}
    </span>
  );
}
