import type { Metadata } from 'next';
import { timeAgo } from '@irem/shared';
import { StatusBadge } from '@/components/ui/StatusBadge';
import {
  dataSources,
  dataSourceCategories,
  groupSourcesByCategory,
  getDataSourceStats,
  type DataSource,
  type DataSourceCategory,
  type DataSourceStatus,
} from '@/lib/data-sources';

export const metadata: Metadata = {
  title: 'Data Sources',
  description:
    'Complete transparency on every data point — scrapers, APIs, and feeds powering IREM.',
};

const STATUS_VARIANT: Record<
  DataSourceStatus,
  'success' | 'warning' | 'info' | 'danger'
> = {
  active: 'success',
  paused: 'warning',
  planned: 'info',
  degraded: 'danger',
};

const METHOD_COLORS: Record<string, string> = {
  api: 'text-accent-blue',
  scraper: 'text-accent-cyan',
  rss: 'text-accent-amber',
  websocket: 'text-accent-green',
  manual: 'text-text-secondary',
};

function reliabilityColor(score: number): string {
  if (score >= 90) return 'bg-accent-green';
  if (score >= 75) return 'bg-accent-amber';
  return 'bg-accent-red';
}

function SourceCard({ source }: { source: DataSource }) {
  return (
    <div
      id={source.id}
      className="flex flex-col rounded-lg border border-border-primary bg-bg-secondary p-4 transition-colors hover:border-border-highlight"
    >
      <div className="mb-2 flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <div className="font-mono text-sm font-bold text-text-primary">
            {source.name}
          </div>
          <div className="truncate text-xs text-text-secondary">
            {source.organization}
          </div>
        </div>
        <StatusBadge variant={STATUS_VARIANT[source.status]}>
          {source.status}
        </StatusBadge>
      </div>

      <p className="mb-3 text-xs leading-relaxed text-text-secondary">
        {source.description}
      </p>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {source.dataPoints.slice(0, 4).map((dp) => (
          <span
            key={dp}
            className="rounded-full border border-border-primary bg-bg-tertiary px-2 py-0.5 text-[10px] text-text-secondary"
          >
            {dp}
          </span>
        ))}
        {source.dataPoints.length > 4 && (
          <span className="text-[10px] text-text-muted">
            +{source.dataPoints.length - 4} more
          </span>
        )}
      </div>

      <div className="mb-3 grid grid-cols-2 gap-y-1 border-y border-border-primary py-2 font-mono text-[10px] uppercase tracking-wider text-text-muted">
        <div>Method</div>
        <div className={`text-right ${METHOD_COLORS[source.method] ?? ''}`}>
          {source.method}
        </div>
        <div>Frequency</div>
        <div className="text-right text-text-secondary">{source.frequency}</div>
        <div>Coverage</div>
        <div className="truncate text-right text-text-secondary">{source.coverage}</div>
        <div>Updated</div>
        <div className="text-right text-text-secondary">
          {timeAgo(new Date(source.lastUpdated))}
        </div>
      </div>

      <div className="mb-3">
        <div className="mb-1 flex items-center justify-between text-[10px] text-text-muted">
          <span>Reliability</span>
          <span className="font-mono">{source.reliability}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-bg-tertiary">
          <div
            className={`h-full ${reliabilityColor(source.reliability)} transition-all`}
            style={{ width: `${source.reliability}%` }}
          />
        </div>
      </div>

      <a
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] text-accent-blue hover:underline"
      >
        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
        Visit source
      </a>
    </div>
  );
}

export default function DataSourcesPage() {
  const stats = getDataSourceStats();
  const grouped = groupSourcesByCategory();
  const categories = Object.keys(grouped) as DataSourceCategory[];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-mono text-lg font-bold text-text-primary">Data Sources</h1>
        <p className="text-sm text-text-secondary">
          Complete transparency on every data point — scrapers, APIs, and feeds powering IREM.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: 'Total Sources', value: stats.total, accent: 'text-accent-blue' },
          { label: 'Active', value: stats.active, accent: 'text-accent-green' },
          { label: 'Avg Reliability', value: `${stats.avgReliability}%`, accent: 'text-accent-cyan' },
          { label: 'Data Points', value: stats.totalDataPoints, accent: 'text-accent-purple' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-border-primary bg-bg-secondary p-4"
          >
            <div className="text-xs font-medium uppercase tracking-wider text-text-secondary">
              {stat.label}
            </div>
            <div className={`mt-2 font-mono text-2xl font-bold tabular-nums ${stat.accent}`}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Categories quick-jump */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const meta = dataSourceCategories[cat];
          const count = grouped[cat].length;
          return (
            <a
              key={cat}
              href={`#category-${cat}`}
              className="flex items-center gap-2 rounded-full border border-border-primary bg-bg-secondary px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-border-highlight hover:text-text-primary"
            >
              <span>{meta.label}</span>
              <span className="rounded-full bg-bg-tertiary px-1.5 font-mono text-[10px] text-text-muted">
                {count}
              </span>
            </a>
          );
        })}
      </div>

      {/* Category sections */}
      {categories.map((cat) => {
        const meta = dataSourceCategories[cat];
        const sources = grouped[cat];
        if (sources.length === 0) return null;

        return (
          <section key={cat} id={`category-${cat}`} className="space-y-3 scroll-mt-6">
            <div className="flex items-baseline justify-between border-b border-border-primary pb-2">
              <div>
                <h2 className="font-mono text-sm font-bold uppercase tracking-wider text-text-primary">
                  {meta.label}
                </h2>
                <p className="text-xs text-text-muted">{meta.description}</p>
              </div>
              <span className="font-mono text-xs text-text-muted">
                {sources.length} source{sources.length !== 1 ? 's' : ''}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {sources.map((source) => (
                <SourceCard key={source.id} source={source} />
              ))}
            </div>
          </section>
        );
      })}

      {/* Footer note */}
      <div className="rounded-lg border border-border-primary bg-bg-surface p-4">
        <p className="text-xs text-text-secondary">
          <span className="font-mono font-semibold text-text-primary">Transparency by design.</span>{' '}
          Every widget on IREM links back to its source. Click the small source tag (e.g. "NHB · 2h ago")
          beneath any metric to jump to that source here. New sources are added weekly — you can track
          roadmap items in the "planned" status.
        </p>
      </div>
    </div>
  );
}
