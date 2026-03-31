import type { Metadata } from 'next';
import { MetricCard } from '@/components/ui/MetricCard';

export const metadata: Metadata = {
  title: 'Market Overview',
};

const metrics = [
  {
    label: 'NHB RESIDEX',
    value: '348.2',
    change: { value: '+2.3% QoQ', direction: 'up' as const },
    subtitle: 'National Index',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M3 3v18h18" />
        <path d="M18 9l-5 5-2-2-4 4" />
      </svg>
    ),
  },
  {
    label: 'Nifty Realty',
    value: '1,042.50',
    change: { value: '+1.8%', direction: 'up' as const },
    subtitle: 'NSE Live',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    label: 'Active RERA Projects',
    value: '48,320',
    change: { value: '+840 MoM', direction: 'up' as const },
    subtitle: 'All States',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    label: 'Avg Price/sqft',
    value: '\u20B98,450',
    change: { value: '+5.2% YoY', direction: 'up' as const },
    subtitle: 'National Avg',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export default function OverviewPage() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="font-mono text-lg font-bold text-text-primary">
          Market Command Center
        </h1>
        <p className="text-sm text-text-secondary">
          Real-time overview of the Indian real estate market
        </p>
      </div>

      {/* Key metrics row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard
            key={metric.label}
            icon={metric.icon}
            label={metric.label}
            value={metric.value}
            change={metric.change}
            subtitle={metric.subtitle}
          />
        ))}
      </div>

      {/* Main content: Map + Sidebar */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Map area (60%) */}
        <div className="lg:col-span-3">
          <div className="flex h-96 items-center justify-center rounded-lg border border-border-primary bg-bg-surface lg:h-[500px]">
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-text-muted"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z" />
                <path d="M8 2v16" />
                <path d="M16 6v16" />
              </svg>
              <p className="mt-3 font-mono text-sm text-text-muted">
                India Map — MapLibre + deck.gl
              </p>
              <p className="mt-1 text-xs text-text-muted">
                Price heatmap, RERA projects, metro lines
              </p>
            </div>
          </div>
        </div>

        {/* Right sidebar (40%) */}
        <div className="space-y-4 lg:col-span-2">
          {/* City Leaderboard */}
          <div className="rounded-lg border border-border-primary bg-bg-secondary p-4">
            <h2 className="mb-3 font-mono text-sm font-semibold text-text-primary">
              City Leaderboard
            </h2>
            <div className="space-y-2">
              {[
                { city: 'Bengaluru', change: '+8.2%', direction: 'up' },
                { city: 'Hyderabad', change: '+7.5%', direction: 'up' },
                { city: 'Pune', change: '+6.8%', direction: 'up' },
                { city: 'Mumbai', change: '+5.1%', direction: 'up' },
                { city: 'Chennai', change: '+4.9%', direction: 'up' },
                { city: 'Delhi NCR', change: '+4.2%', direction: 'up' },
                { city: 'Ahmedabad', change: '+3.8%', direction: 'up' },
                { city: 'Kolkata', change: '-1.2%', direction: 'down' },
              ].map((item, i) => (
                <div
                  key={item.city}
                  className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-bg-tertiary"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-text-muted">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-text-primary">{item.city}</span>
                  </div>
                  <span
                    className={`font-mono text-xs tabular-nums ${
                      item.direction === 'up'
                        ? 'text-accent-green'
                        : 'text-accent-red'
                    }`}
                  >
                    {item.change}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent RERA Filings */}
          <div className="rounded-lg border border-border-primary bg-bg-secondary p-4">
            <h2 className="mb-3 font-mono text-sm font-semibold text-text-primary">
              Recent RERA Filings
            </h2>
            <div className="space-y-2">
              {[
                { project: 'DLF The Arbour Phase 3', state: 'Haryana', units: 420 },
                { project: 'Godrej Horizon', state: 'Maharashtra', units: 312 },
                { project: 'Prestige Lake Ridge', state: 'Karnataka', units: 256 },
                { project: 'Brigade Utopia', state: 'Karnataka', units: 180 },
                { project: 'Sobha Crystal Meadows', state: 'Kerala', units: 144 },
              ].map((filing) => (
                <div
                  key={filing.project}
                  className="rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-bg-tertiary"
                >
                  <p className="text-text-primary">{filing.project}</p>
                  <p className="text-xs text-text-muted">
                    {filing.state} &middot; {filing.units} units
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Market Brief */}
          <div className="rounded-lg border border-accent-purple/20 bg-bg-secondary p-4">
            <div className="mb-2 flex items-center gap-2">
              <svg
                className="h-4 w-4 text-accent-purple"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L12 22" />
                <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
              </svg>
              <h2 className="font-mono text-sm font-semibold text-accent-purple">
                AI Market Brief
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-text-secondary">
              Indian residential markets continue to show broad-based strength with 7 out of 8 top
              cities registering positive price growth. Bengaluru leads with +8.2% YoY driven by
              tech corridor expansion. Mumbai&apos;s premium segment sees renewed interest post-RERA
              compliance push.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom: Chart area */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Price Index Chart */}
        <div className="rounded-lg border border-border-primary bg-bg-surface p-4">
          <h2 className="mb-3 font-mono text-sm font-semibold text-text-primary">
            NHB RESIDEX — Top 8 Cities (5Y)
          </h2>
          <div className="flex h-64 items-center justify-center">
            <p className="font-mono text-sm text-text-muted">
              ECharts Price Index — Coming Soon
            </p>
          </div>
        </div>

        {/* Volume Chart */}
        <div className="rounded-lg border border-border-primary bg-bg-surface p-4">
          <h2 className="mb-3 font-mono text-sm font-semibold text-text-primary">
            Monthly Transaction Volume
          </h2>
          <div className="flex h-64 items-center justify-center">
            <p className="font-mono text-sm text-text-muted">
              ECharts Volume Chart — Coming Soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
