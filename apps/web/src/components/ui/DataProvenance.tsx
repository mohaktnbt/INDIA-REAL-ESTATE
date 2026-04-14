import Link from 'next/link';
import clsx from 'clsx';
import { timeAgo } from '@irem/shared';
import { getDataSource, type DataSourceStatus } from '@/lib/data-sources';

interface DataProvenanceProps {
  sourceId: string;
  lastUpdated?: Date | string;
  className?: string;
  compact?: boolean;
}

const STATUS_DOT: Record<DataSourceStatus, string> = {
  active: 'bg-accent-green',
  paused: 'bg-accent-amber',
  planned: 'bg-accent-blue',
  degraded: 'bg-accent-red',
};

function formatTimeAgo(date: Date | string | undefined): string {
  if (!date) return '—';
  const d = typeof date === 'string' ? new Date(date) : date;
  if (isNaN(d.getTime())) return '—';
  return timeAgo(d);
}

export function DataProvenance({
  sourceId,
  lastUpdated,
  className,
  compact = false,
}: DataProvenanceProps) {
  const source = getDataSource(sourceId);

  if (!source) {
    return (
      <span className={clsx('text-[10px] text-text-muted', className)}>
        source unknown
      </span>
    );
  }

  const updatedAt = lastUpdated ?? source.lastUpdated;
  const dot = STATUS_DOT[source.status];

  if (compact) {
    return (
      <Link
        href={`/data-sources#${source.id}`}
        className={clsx(
          'group inline-flex items-center gap-1.5 font-mono text-[10px] text-text-muted transition-colors hover:text-text-secondary',
          className,
        )}
        title={`${source.name} · ${source.description}`}
      >
        <span className={clsx('h-1.5 w-1.5 rounded-full', dot)} />
        <span className="group-hover:underline">{source.name}</span>
        <span>·</span>
        <span>{formatTimeAgo(updatedAt)}</span>
      </Link>
    );
  }

  return (
    <Link
      href={`/data-sources#${source.id}`}
      className={clsx(
        'group block rounded-md border border-transparent px-2 py-1.5 transition-colors hover:border-border-primary hover:bg-bg-tertiary',
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <span className={clsx('h-2 w-2 rounded-full', dot)} />
        <span className="font-mono text-xs font-medium text-text-secondary group-hover:text-text-primary">
          {source.name}
        </span>
        <span className="text-[10px] text-text-muted">· {source.organization}</span>
      </div>
      <div className="mt-0.5 flex items-center gap-2 pl-4 text-[10px] text-text-muted">
        <span>Updated {formatTimeAgo(updatedAt)}</span>
        <span>·</span>
        <span className="uppercase tracking-wider">{source.method}</span>
        <span>·</span>
        <span>{source.reliability}% reliable</span>
      </div>
    </Link>
  );
}
