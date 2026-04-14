import type { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';
import { formatPricePerSqFt, formatIndianNumber, formatChangePercent } from '@irem/shared';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { DataProvenance } from '@/components/ui/DataProvenance';
import { CityComparisonChart } from '@/components/charts';
import { mockCityComparisonData } from '@/lib/mock-data';

export const metadata: Metadata = {
  title: 'Markets',
  description: 'City-level market data with health indices and trends.',
};

export const dynamic = 'force-dynamic';

interface MarketRow {
  city: string;
  state: string;
  tier: number;
  population: number;
  healthIndex: number;
  medianPricePerSqFt: number;
  priceChangeYoY: number;
  activeListings: number;
  reraProjects: number;
  avgRentalYield: number;
  metroConnectivity: boolean;
}

interface MarketsResponse {
  data: MarketRow[];
}

async function fetchMarkets(): Promise<MarketsResponse> {
  const h = await headers();
  const host = h.get('host') ?? 'localhost:3000';
  const protocol = host.startsWith('localhost') ? 'http' : 'https';
  try {
    const res = await fetch(`${protocol}://${host}/api/markets`, { cache: 'no-store' });
    if (!res.ok) throw new Error('fetch failed');
    return res.json();
  } catch {
    return { data: [] };
  }
}

function healthColor(score: number): string {
  if (score >= 85) return 'text-accent-green';
  if (score >= 70) return 'text-accent-cyan';
  if (score >= 55) return 'text-accent-amber';
  return 'text-accent-red';
}

function healthBarColor(score: number): string {
  if (score >= 85) return 'bg-accent-green';
  if (score >= 70) return 'bg-accent-cyan';
  if (score >= 55) return 'bg-accent-amber';
  return 'bg-accent-red';
}

function CityCard({ market }: { market: MarketRow }) {
  const isPositive = market.priceChangeYoY >= 0;
  return (
    <Link
      href={`/markets/${market.city.toLowerCase()}`}
      className="group flex flex-col rounded-lg border border-border-primary bg-bg-secondary p-4 transition-colors hover:border-border-highlight"
    >
      <div className="mb-3 flex items-start justify-between">
        <div>
          <h3 className="font-mono text-base font-bold text-text-primary group-hover:text-accent-blue">
            {market.city}
          </h3>
          <div className="mt-0.5 flex items-center gap-2">
            <span className="text-xs text-text-secondary">{market.state}</span>
            <StatusBadge variant={market.tier === 1 ? 'info' : 'muted'}>
              Tier {market.tier}
            </StatusBadge>
          </div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
            Health
          </div>
          <div className={`font-mono text-xl font-bold ${healthColor(market.healthIndex)}`}>
            {market.healthIndex}
          </div>
        </div>
      </div>

      {/* Health bar */}
      <div className="mb-3 h-1 w-full overflow-hidden rounded-full bg-bg-tertiary">
        <div
          className={`h-full ${healthBarColor(market.healthIndex)} transition-all`}
          style={{ width: `${market.healthIndex}%` }}
        />
      </div>

      <div className="mb-3">
        <div className="font-mono text-2xl font-bold tabular-nums text-text-primary">
          {formatPricePerSqFt(market.medianPricePerSqFt)}
        </div>
        <div
          className={`flex items-center gap-1 font-mono text-xs tabular-nums ${
            isPositive ? 'text-accent-green' : 'text-accent-red'
          }`}
        >
          <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor">
            <path d={isPositive ? 'M6 2l4 5H2l4-5z' : 'M6 10l4-5H2l4 5z'} />
          </svg>
          {formatChangePercent(market.priceChangeYoY)} YoY
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-1.5 border-t border-border-primary pt-3 text-[11px]">
        <div className="text-text-muted">Listings</div>
        <div className="text-right font-mono text-text-secondary">
          {formatIndianNumber(market.activeListings)}
        </div>
        <div className="text-text-muted">RERA Projects</div>
        <div className="text-right font-mono text-text-secondary">
          {formatIndianNumber(market.reraProjects)}
        </div>
        <div className="text-text-muted">Rental Yield</div>
        <div className="text-right font-mono text-text-secondary">
          {market.avgRentalYield.toFixed(1)}%
        </div>
        <div className="text-text-muted">Metro</div>
        <div className="text-right font-mono text-text-secondary">
          {market.metroConnectivity ? 'Yes' : 'No'}
        </div>
      </div>
    </Link>
  );
}

export default async function MarketsPage() {
  const response = await fetchMarkets();
  const markets = response.data;

  const totalListings = markets.reduce((a, m) => a + (m.activeListings ?? 0), 0);
  const totalRera = markets.reduce((a, m) => a + (m.reraProjects ?? 0), 0);
  const avgHealth =
    markets.length > 0
      ? Math.round(markets.reduce((a, m) => a + m.healthIndex, 0) / markets.length)
      : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-mono text-lg font-bold text-text-primary">Markets</h1>
        <p className="text-sm text-text-secondary">
          City-level market intelligence · {markets.length} cities tracked
        </p>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-border-primary bg-bg-secondary p-4">
          <div className="text-xs font-medium uppercase tracking-wider text-text-secondary">
            Cities
          </div>
          <div className="mt-2 font-mono text-2xl font-bold text-accent-blue">
            {markets.length}
          </div>
        </div>
        <div className="rounded-lg border border-border-primary bg-bg-secondary p-4">
          <div className="text-xs font-medium uppercase tracking-wider text-text-secondary">
            Active Listings
          </div>
          <div className="mt-2 font-mono text-2xl font-bold text-accent-cyan">
            {formatIndianNumber(totalListings)}
          </div>
        </div>
        <div className="rounded-lg border border-border-primary bg-bg-secondary p-4">
          <div className="text-xs font-medium uppercase tracking-wider text-text-secondary">
            RERA Projects
          </div>
          <div className="mt-2 font-mono text-2xl font-bold text-accent-amber">
            {formatIndianNumber(totalRera)}
          </div>
        </div>
        <div className="rounded-lg border border-border-primary bg-bg-secondary p-4">
          <div className="text-xs font-medium uppercase tracking-wider text-text-secondary">
            Avg Health
          </div>
          <div className={`mt-2 font-mono text-2xl font-bold ${healthColor(avgHealth)}`}>
            {avgHealth}
          </div>
        </div>
      </div>

      {/* Comparison chart */}
      <div className="rounded-lg border border-border-primary bg-bg-surface p-4">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h2 className="font-mono text-sm font-semibold text-text-primary">
              Top 15 Cities — YoY Price Change
            </h2>
            <p className="text-xs text-text-muted">Ranked by price growth · Indian Rupee per sq ft</p>
          </div>
          <DataProvenance sourceId="nhb-residex" compact />
        </div>
        <CityComparisonChart
          data={mockCityComparisonData}
          metric="YoY %"
          height={340}
        />
      </div>

      {/* City cards grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-text-secondary">
            City Cards
          </h2>
          <DataProvenance sourceId="acres-99" compact />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {markets.map((market) => (
            <CityCard key={market.city} market={market} />
          ))}
        </div>
      </div>
    </div>
  );
}
