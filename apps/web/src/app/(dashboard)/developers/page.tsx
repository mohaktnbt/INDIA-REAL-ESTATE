import type { Metadata } from 'next';
import { StatusBadge } from '@/components/ui/StatusBadge';

export const metadata: Metadata = {
  title: 'Developers',
};

const developers = [
  {
    name: 'DLF Ltd',
    type: 'listed',
    hq: 'Gurugram',
    totalProjects: 180,
    activeProjects: 32,
    delayedProjects: 5,
    healthScore: 82,
    nseSymbol: 'DLF',
  },
  {
    name: 'Godrej Properties',
    type: 'listed',
    hq: 'Mumbai',
    totalProjects: 120,
    activeProjects: 45,
    delayedProjects: 2,
    healthScore: 90,
    nseSymbol: 'GODREJPROP',
  },
  {
    name: 'Prestige Estates',
    type: 'listed',
    hq: 'Bengaluru',
    totalProjects: 95,
    activeProjects: 38,
    delayedProjects: 3,
    healthScore: 86,
    nseSymbol: 'PRESTIGE',
  },
  {
    name: 'Macrotech (Lodha)',
    type: 'listed',
    hq: 'Mumbai',
    totalProjects: 140,
    activeProjects: 42,
    delayedProjects: 8,
    healthScore: 75,
    nseSymbol: 'LODHA',
  },
  {
    name: 'Brigade Enterprises',
    type: 'listed',
    hq: 'Bengaluru',
    totalProjects: 85,
    activeProjects: 28,
    delayedProjects: 1,
    healthScore: 88,
    nseSymbol: 'BRIGADE',
  },
  {
    name: 'Sobha Ltd',
    type: 'listed',
    hq: 'Bengaluru',
    totalProjects: 110,
    activeProjects: 35,
    delayedProjects: 4,
    healthScore: 80,
    nseSymbol: 'SOBHA',
  },
  {
    name: 'Puravankara Ltd',
    type: 'listed',
    hq: 'Bengaluru',
    totalProjects: 70,
    activeProjects: 22,
    delayedProjects: 6,
    healthScore: 68,
    nseSymbol: 'PURVA',
  },
  {
    name: 'Kalpataru Projects',
    type: 'private',
    hq: 'Mumbai',
    totalProjects: 60,
    activeProjects: 18,
    delayedProjects: 2,
    healthScore: 84,
    nseSymbol: null,
  },
];

function getHealthColor(score: number): string {
  if (score >= 80) return 'text-accent-green';
  if (score >= 60) return 'text-accent-blue';
  if (score >= 40) return 'text-accent-amber';
  return 'text-accent-red';
}

export default function DevelopersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-mono text-lg font-bold text-text-primary">Developers</h1>
        <p className="text-sm text-text-secondary">
          Developer profiles, health scores, and project delivery track record
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {developers.map((dev) => (
          <div
            key={dev.name}
            className="group cursor-pointer rounded-lg border border-border-primary bg-bg-secondary p-4 transition-all hover:border-border-highlight"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-text-primary group-hover:text-accent-blue">
                  {dev.name}
                </h3>
                <p className="text-xs text-text-muted">{dev.hq}</p>
              </div>
              <StatusBadge variant={dev.type === 'listed' ? 'info' : 'muted'}>
                {dev.type === 'listed' ? 'Listed' : 'Private'}
              </StatusBadge>
            </div>

            {dev.nseSymbol && (
              <p className="mt-1 font-mono text-xs text-accent-cyan">
                NSE: {dev.nseSymbol}
              </p>
            )}

            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-text-secondary">Total Projects</span>
                <span className="font-mono tabular-nums text-text-primary">
                  {dev.totalProjects}
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-text-secondary">Active</span>
                <span className="font-mono tabular-nums text-text-primary">
                  {dev.activeProjects}
                </span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-text-secondary">Delayed</span>
                <span
                  className={`font-mono tabular-nums ${
                    dev.delayedProjects > 5 ? 'text-accent-red' : 'text-text-primary'
                  }`}
                >
                  {dev.delayedProjects}
                </span>
              </div>

              {/* Health score bar */}
              <div className="pt-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-text-secondary">Health Score</span>
                  <span className={`font-mono font-semibold tabular-nums ${getHealthColor(dev.healthScore)}`}>
                    {dev.healthScore}
                  </span>
                </div>
                <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-bg-tertiary">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${dev.healthScore}%`,
                      backgroundColor:
                        dev.healthScore >= 80
                          ? 'var(--accent-green)'
                          : dev.healthScore >= 60
                            ? 'var(--accent-blue)'
                            : dev.healthScore >= 40
                              ? 'var(--accent-amber)'
                              : 'var(--accent-red)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
