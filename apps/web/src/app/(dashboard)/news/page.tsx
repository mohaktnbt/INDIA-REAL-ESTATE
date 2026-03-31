import type { Metadata } from 'next';
import { StatusBadge } from '@/components/ui/StatusBadge';

export const metadata: Metadata = {
  title: 'News',
};

const mockNews = [
  {
    id: '1',
    title: 'RBI keeps repo rate unchanged at 6.5% — positive for housing demand',
    source: 'Economic Times',
    timeAgo: '2h ago',
    category: 'policy',
    sentiment: 'positive',
    cities: ['National'],
    summary:
      'The Reserve Bank of India maintained the repo rate, keeping EMIs stable and supporting continued growth in housing demand across major cities.',
  },
  {
    id: '2',
    title: 'Mumbai records highest-ever stamp duty collections in March 2026',
    source: 'LiveMint',
    timeAgo: '4h ago',
    category: 'market',
    sentiment: 'positive',
    cities: ['Mumbai'],
    summary:
      'Mumbai registered over 12,800 property transactions in March 2026, generating stamp duty revenue of over Rs 1,100 crore.',
  },
  {
    id: '3',
    title: 'Bengaluru sees 15% surge in premium housing demand in Q4',
    source: 'Moneycontrol',
    timeAgo: '6h ago',
    category: 'market',
    sentiment: 'positive',
    cities: ['Bengaluru'],
    summary:
      'Luxury and premium segment (Rs 1.5 Cr+) sales in Bengaluru jumped 15% QoQ driven by tech corridor expansion and infrastructure improvements.',
  },
  {
    id: '4',
    title: 'MahaRERA cracks down on 45 projects for non-compliance',
    source: 'Indian Express',
    timeAgo: '8h ago',
    category: 'legal',
    sentiment: 'negative',
    cities: ['Mumbai', 'Pune'],
    summary:
      'Maharashtra RERA issued show-cause notices to 45 projects for failing to submit quarterly progress reports and update project timelines.',
  },
  {
    id: '5',
    title: 'Delhi-Mumbai Expressway Phase 2 boosts real estate along the corridor',
    source: 'ET Realty',
    timeAgo: '12h ago',
    category: 'project',
    sentiment: 'positive',
    cities: ['Delhi NCR', 'Mumbai'],
    summary:
      'Property prices along the Delhi-Mumbai Expressway corridor have appreciated 20-25% since the Phase 2 announcement.',
  },
  {
    id: '6',
    title: 'Hyderabad airport expansion to fuel Shamshabad micro-market growth',
    source: 'Deccan Chronicle',
    timeAgo: '1d ago',
    category: 'project',
    sentiment: 'positive',
    cities: ['Hyderabad'],
    summary:
      'The planned second terminal at RGIA is expected to drive significant appreciation in the Shamshabad and surrounding micro-markets.',
  },
];

const sentimentVariant: Record<string, 'success' | 'danger' | 'muted'> = {
  positive: 'success',
  negative: 'danger',
  neutral: 'muted',
};

const categoryVariant: Record<string, 'info' | 'warning' | 'danger' | 'muted'> = {
  policy: 'info',
  market: 'success' as 'info',
  project: 'warning' as 'info',
  legal: 'danger',
};

export default function NewsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-mono text-lg font-bold text-text-primary">News</h1>
        <p className="text-sm text-text-secondary">
          AI-curated real estate news from 100+ Indian sources
        </p>
      </div>

      {/* AI Daily Brief */}
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
            AI Morning Brief — March 30, 2026
          </h2>
        </div>
        <p className="text-sm leading-relaxed text-text-secondary">
          Markets remain buoyant as RBI holds rates steady. Mumbai stamp duty collections
          hit all-time highs, while Bengaluru&apos;s premium segment continues its upward
          trajectory. Regulatory action by MahaRERA signals increasing compliance enforcement.
          Infrastructure projects, particularly the Delhi-Mumbai Expressway, are creating new
          investment corridors with 20-25% appreciation.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {['All', 'Policy', 'Market', 'Project', 'Legal'].map((filter) => (
          <button
            key={filter}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
              filter === 'All'
                ? 'border-accent-blue bg-accent-blue/10 text-accent-blue'
                : 'border-border-primary text-text-secondary hover:border-border-highlight hover:text-text-primary'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* News cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {mockNews.map((article) => (
          <article
            key={article.id}
            className="group cursor-pointer rounded-lg border border-border-primary bg-bg-secondary p-4 transition-all hover:border-border-highlight"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-medium leading-snug text-text-primary group-hover:text-accent-blue">
                {article.title}
              </h3>
            </div>

            <p className="mt-2 text-xs leading-relaxed text-text-secondary line-clamp-2">
              {article.summary}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              <StatusBadge variant={sentimentVariant[article.sentiment]}>
                {article.sentiment}
              </StatusBadge>
              <StatusBadge variant={categoryVariant[article.category] || 'muted'}>
                {article.category}
              </StatusBadge>
              {article.cities.map((city) => (
                <span
                  key={city}
                  className="rounded bg-bg-tertiary px-1.5 py-0.5 text-xs text-text-muted"
                >
                  {city}
                </span>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-text-muted">
              <span>{article.source}</span>
              <span>{article.timeAgo}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
