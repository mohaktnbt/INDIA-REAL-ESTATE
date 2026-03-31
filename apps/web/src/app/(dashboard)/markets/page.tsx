import type { Metadata } from 'next';
import { StatusBadge } from '@/components/ui/StatusBadge';

export const metadata: Metadata = {
  title: 'Markets',
};

const cities = [
  {
    name: 'Mumbai',
    state: 'Maharashtra',
    tier: 1,
    avgPrice: '\u20B924,500/sq ft',
    yoyChange: '+5.1%',
    direction: 'up' as const,
    activeListings: '12,450',
    reraProjects: 4820,
    healthIndex: 78,
  },
  {
    name: 'Bengaluru',
    state: 'Karnataka',
    tier: 1,
    avgPrice: '\u20B99,200/sq ft',
    yoyChange: '+8.2%',
    direction: 'up' as const,
    activeListings: '9,870',
    reraProjects: 3240,
    healthIndex: 85,
  },
  {
    name: 'Hyderabad',
    state: 'Telangana',
    tier: 1,
    avgPrice: '\u20B98,750/sq ft',
    yoyChange: '+7.5%',
    direction: 'up' as const,
    activeListings: '7,630',
    reraProjects: 2180,
    healthIndex: 82,
  },
  {
    name: 'Pune',
    state: 'Maharashtra',
    tier: 1,
    avgPrice: '\u20B98,100/sq ft',
    yoyChange: '+6.8%',
    direction: 'up' as const,
    activeListings: '8,240',
    reraProjects: 3560,
    healthIndex: 80,
  },
  {
    name: 'Delhi NCR',
    state: 'Delhi/Haryana/UP',
    tier: 1,
    avgPrice: '\u20B912,800/sq ft',
    yoyChange: '+4.2%',
    direction: 'up' as const,
    activeListings: '15,320',
    reraProjects: 5670,
    healthIndex: 72,
  },
  {
    name: 'Chennai',
    state: 'Tamil Nadu',
    tier: 1,
    avgPrice: '\u20B97,600/sq ft',
    yoyChange: '+4.9%',
    direction: 'up' as const,
    activeListings: '6,180',
    reraProjects: 2450,
    healthIndex: 76,
  },
  {
    name: 'Ahmedabad',
    state: 'Gujarat',
    tier: 2,
    avgPrice: '\u20B95,800/sq ft',
    yoyChange: '+3.8%',
    direction: 'up' as const,
    activeListings: '4,560',
    reraProjects: 1890,
    healthIndex: 74,
  },
  {
    name: 'Kolkata',
    state: 'West Bengal',
    tier: 1,
    avgPrice: '\u20B95,200/sq ft',
    yoyChange: '-1.2%',
    direction: 'down' as const,
    activeListings: '3,780',
    reraProjects: 1240,
    healthIndex: 58,
  },
];

function getTierBadge(tier: number) {
  if (tier === 1) return <StatusBadge variant="info">Tier {tier}</StatusBadge>;
  if (tier === 2) return <StatusBadge variant="success">Tier {tier}</StatusBadge>;
  return <StatusBadge variant="muted">Tier {tier}</StatusBadge>;
}

function getHealthColor(score: number): string {
  if (score >= 80) return 'text-accent-green';
  if (score >= 60) return 'text-accent-blue';
  if (score >= 40) return 'text-accent-amber';
  return 'text-accent-red';
}

export default function MarketsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-mono text-lg font-bold text-text-primary">Markets</h1>
        <p className="text-sm text-text-secondary">
          City-level market data across India &mdash; click a city to drill down
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cities.map((city) => (
          <div
            key={city.name}
            className="group cursor-pointer rounded-lg border border-border-primary bg-bg-secondary p-4 transition-all hover:border-border-highlight hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-text-primary group-hover:text-accent-blue">
                  {city.name}
                </h3>
                <p className="text-xs text-text-muted">{city.state}</p>
              </div>
              {getTierBadge(city.tier)}
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-secondary">Avg Price</span>
                <span className="font-mono text-sm tabular-nums text-text-primary">
                  {city.avgPrice}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-secondary">YoY Change</span>
                <span
                  className={`font-mono text-sm tabular-nums ${
                    city.direction === 'up' ? 'text-accent-green' : 'text-accent-red'
                  }`}
                >
                  {city.yoyChange}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-secondary">Listings</span>
                <span className="font-mono text-sm tabular-nums text-text-primary">
                  {city.activeListings}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-secondary">RERA Projects</span>
                <span className="font-mono text-sm tabular-nums text-text-primary">
                  {city.reraProjects.toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-secondary">Health Index</span>
                <span
                  className={`font-mono text-sm font-semibold tabular-nums ${getHealthColor(city.healthIndex)}`}
                >
                  {city.healthIndex}/100
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
