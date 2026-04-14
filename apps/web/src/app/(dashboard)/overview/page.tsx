import type { Metadata } from 'next';
import { MetricCard } from '@/components/ui/MetricCard';
import { DataProvenance } from '@/components/ui/DataProvenance';
import { IndiaMap } from '@/components/maps';
import {
  PriceTrendChart,
  VolumeChart,
  CityComparisonChart,
  SentimentGauge,
} from '@/components/charts';
import {
  mockPriceTrendData,
  mockVolumeData,
  mockCityComparisonData,
  mockSentimentScore,
  MOCK_CITIES,
} from '@/lib/mock-data';
import { mockCityPoints } from '@/lib/mock-cities';

export const metadata: Metadata = {
  title: 'Market Overview',
  description: 'Real-time command center for Indian real estate markets.',
};

const metrics = [
  {
    label: 'NHB RESIDEX',
    value: '348.2',
    change: { value: '+2.3% QoQ', direction: 'up' as const },
    subtitle: 'National Index',
    sourceId: 'nhb-residex',
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
    sourceId: 'nse-nifty-realty',
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
    sourceId: 'maharera',
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
    sourceId: 'acres-99',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

async function fetchAIBrief() {
  // In production this would hit /api/ai; for SSR we import the shape directly.
  return {
    summary:
      'Indian residential markets continue a broad-based upcycle with 7 of 8 tier-1 cities posting positive YoY price growth. Hyderabad leads at +15.3% driven by IT corridor expansion in Kokapet and Tellapur. Bengaluru follows at +12.5%, powered by record GCC absorption (4.2M sq ft in Q1). Mumbai remains structurally tight; BKC and Worli command premium valuations post metro-3 completion. Kolkata is the only soft market, with Q1 launches at a 5-year low.',
    highlights: [
      'Hyderabad H1 2026 new launches (38,500) highest in India',
      'Nifty Realty index at 52-week high, +24% YTD',
      'RBI holds repo at 6.25% — home loan rates stable',
      'Mumbai metro-3 drives BKC prices +18% YoY',
    ],
    confidence: 87,
    model: 'claude-opus-4-6',
  };
}

export default async function OverviewPage() {
  const brief = await fetchAIBrief();

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-mono text-lg font-bold text-text-primary">
            Market Command Center
          </h1>
          <p className="text-sm text-text-secondary">
            Real-time overview of the Indian real estate market
          </p>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <span className="flex h-2 w-2 rounded-full bg-accent-green animate-pulse" />
          <span className="font-mono text-xs text-text-secondary">LIVE</span>
        </div>
      </div>

      {/* Key metrics row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="space-y-1">
            <MetricCard
              icon={metric.icon}
              label={metric.label}
              value={metric.value}
              change={metric.change}
              subtitle={metric.subtitle}
            />
            <DataProvenance sourceId={metric.sourceId} compact className="px-1" />
          </div>
        ))}
      </div>

      {/* Main content: Map + Sidebar */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Map area (60%) */}
        <div className="lg:col-span-3">
          <div className="rounded-lg border border-border-primary bg-bg-surface p-4">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h2 className="font-mono text-sm font-semibold text-text-primary">
                  Price Heatmap — India
                </h2>
                <p className="text-xs text-text-muted">
                  Circle size = ₹/sqft · Color = YoY % change
                </p>
              </div>
              <DataProvenance sourceId="nhb-residex" compact />
            </div>
            <IndiaMap cities={mockCityPoints} metric="price" />
          </div>
        </div>

        {/* Right sidebar (40%) */}
        <div className="space-y-4 lg:col-span-2">
          {/* AI Market Brief */}
          <div className="rounded-lg border border-accent-purple/30 bg-bg-secondary p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-accent-purple"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
                </svg>
                <h2 className="font-mono text-sm font-semibold text-accent-purple">
                  AI Market Brief
                </h2>
              </div>
              <span className="font-mono text-[10px] text-text-muted">
                {brief.confidence}% conf
              </span>
            </div>
            <p className="mb-3 text-sm leading-relaxed text-text-secondary">
              {brief.summary}
            </p>
            <div className="space-y-1.5 border-t border-border-primary pt-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                Key Highlights
              </div>
              {brief.highlights.map((h) => (
                <div key={h} className="flex items-start gap-2 text-xs text-text-secondary">
                  <span className="mt-1.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-accent-purple" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-border-primary pt-2 text-[10px] text-text-muted">
              <span className="font-mono">model: {brief.model}</span>
              <span>Refreshes every 6h</span>
            </div>
          </div>

          {/* Sentiment gauge */}
          <div className="rounded-lg border border-border-primary bg-bg-secondary p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-mono text-sm font-semibold text-text-primary">
                Market Sentiment
              </h2>
              <DataProvenance sourceId="gdelt" compact />
            </div>
            <SentimentGauge value={mockSentimentScore} label="composite score" />
          </div>

          {/* Recent RERA Filings */}
          <div className="rounded-lg border border-border-primary bg-bg-secondary p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-mono text-sm font-semibold text-text-primary">
                Recent RERA Filings
              </h2>
              <DataProvenance sourceId="maharera" compact />
            </div>
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
                    {filing.state} · {filing.units} units
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Charts row: Price trend + City comparison */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-border-primary bg-bg-surface p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h2 className="font-mono text-sm font-semibold text-text-primary">
                Price Trend — Top 8 Cities
              </h2>
              <p className="text-xs text-text-muted">Median ₹/sqft · 36-month view</p>
            </div>
            <DataProvenance sourceId="nhb-residex" compact />
          </div>
          <PriceTrendChart data={mockPriceTrendData} cities={[...MOCK_CITIES]} height={300} />
        </div>

        <div className="rounded-lg border border-border-primary bg-bg-surface p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h2 className="font-mono text-sm font-semibold text-text-primary">
                City Comparison — YoY Change
              </h2>
              <p className="text-xs text-text-muted">Top 15 cities ranked by price change</p>
            </div>
            <DataProvenance sourceId="acres-99" compact />
          </div>
          <CityComparisonChart
            data={mockCityComparisonData}
            metric="YoY %"
            height={300}
          />
        </div>
      </div>

      {/* Volume chart */}
      <div className="rounded-lg border border-border-primary bg-bg-surface p-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h2 className="font-mono text-sm font-semibold text-text-primary">
              Monthly Transaction Volume — 2025
            </h2>
            <p className="text-xs text-text-muted">Stacked by city · Festive season Q4 bump visible</p>
          </div>
          <DataProvenance sourceId="igrs-maharashtra" compact />
        </div>
        <VolumeChart data={mockVolumeData} cities={[...MOCK_CITIES]} height={280} />
      </div>
    </div>
  );
}
