import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { timeAgo } from '@irem/shared';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { DataProvenance } from '@/components/ui/DataProvenance';

export const metadata: Metadata = {
  title: 'News',
  description: 'AI-curated Indian real estate news from 30+ sources.',
};

export const dynamic = 'force-dynamic';

interface NewsArticle {
  id: string;
  title: string;
  url: string;
  source: string;
  publishedAt: string;
  summary: string;
  cities: string[];
  developers: string[];
  sentiment: number;
  category: string;
  isBreaking: boolean;
}

interface NewsResponse {
  data: NewsArticle[];
  meta: {
    total: number;
    categoryCounts: Record<string, number>;
  };
  updatedAt: string;
}

async function fetchNews(): Promise<NewsResponse> {
  const h = await headers();
  const host = h.get('host') ?? 'localhost:3000';
  const protocol = host.startsWith('localhost') ? 'http' : 'https';
  try {
    const res = await fetch(`${protocol}://${host}/api/news`, { cache: 'no-store' });
    if (!res.ok) throw new Error('fetch failed');
    return res.json();
  } catch {
    return {
      data: [],
      meta: { total: 0, categoryCounts: {} },
      updatedAt: new Date().toISOString(),
    };
  }
}

const CATEGORY_ICONS: Record<string, string> = {
  market: 'M',
  policy: 'P',
  project: 'B',
  legal: 'L',
  infrastructure: 'I',
};

const CATEGORY_LABELS: Record<string, string> = {
  market: 'Market',
  policy: 'Policy',
  project: 'Projects',
  legal: 'Legal',
  infrastructure: 'Infrastructure',
};

function sourceToProvenanceId(source: string): string {
  const map: Record<string, string> = {
    'ET Realty': 'et-realty',
    Moneycontrol: 'moneycontrol-re',
    LiveMint: 'livemint-housing',
    'Business Standard': 'business-standard-re',
    'The Hindu': 'hindu-re',
  };
  return map[source] ?? 'et-realty';
}

function sentimentBadge(sentiment: number) {
  if (sentiment >= 0.3)
    return <StatusBadge variant="success">Bullish</StatusBadge>;
  if (sentiment <= -0.3)
    return <StatusBadge variant="danger">Bearish</StatusBadge>;
  return <StatusBadge variant="info">Neutral</StatusBadge>;
}

function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="group relative flex flex-col rounded-lg border border-border-primary bg-bg-secondary p-4 transition-colors hover:border-border-highlight">
      {article.isBreaking && (
        <div className="absolute -top-2 left-4">
          <StatusBadge variant="danger">BREAKING</StatusBadge>
        </div>
      )}

      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-bg-tertiary font-mono text-[10px] font-bold text-accent-cyan">
            {CATEGORY_ICONS[article.category] ?? '?'}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-accent-cyan">
            {CATEGORY_LABELS[article.category] ?? article.category}
          </span>
        </div>
        {sentimentBadge(article.sentiment)}
      </div>

      <h3 className="mb-2 text-sm font-semibold leading-snug text-text-primary group-hover:text-accent-blue">
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          {article.title}
        </a>
      </h3>

      <p className="mb-3 line-clamp-3 text-xs leading-relaxed text-text-secondary">
        {article.summary}
      </p>

      {(article.cities.length > 0 || article.developers.length > 0) && (
        <div className="mb-3 flex flex-wrap gap-1.5">
          {article.cities.map((c) => (
            <span
              key={`c-${c}`}
              className="rounded-full border border-accent-blue/30 bg-accent-blue/10 px-2 py-0.5 text-[10px] text-accent-blue"
            >
              {c}
            </span>
          ))}
          {article.developers.map((d) => (
            <span
              key={`d-${d}`}
              className="rounded-full border border-accent-purple/30 bg-accent-purple/10 px-2 py-0.5 text-[10px] text-accent-purple"
            >
              {d}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-center justify-between border-t border-border-primary pt-2">
        <DataProvenance
          sourceId={sourceToProvenanceId(article.source)}
          lastUpdated={article.publishedAt}
          compact
        />
        <span className="font-mono text-[10px] text-text-muted">
          {timeAgo(new Date(article.publishedAt))}
        </span>
      </div>
    </article>
  );
}

export default async function NewsPage() {
  const response = await fetchNews();
  const articles = response.data;
  const breaking = articles.filter((a) => a.isBreaking);
  const regular = articles.filter((a) => !a.isBreaking);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-mono text-lg font-bold text-text-primary">News</h1>
          <p className="text-sm text-text-secondary">
            AI-curated real estate news from 30+ sources · {articles.length} articles
          </p>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <span className="flex h-2 w-2 rounded-full bg-accent-green animate-pulse" />
          <span className="font-mono text-xs text-text-secondary">LIVE</span>
        </div>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2">
        {Object.entries(response.meta.categoryCounts).map(([cat, count]) => (
          <div
            key={cat}
            className="flex items-center gap-2 rounded-full border border-border-primary bg-bg-secondary px-3 py-1.5 text-xs font-medium text-text-secondary"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-bg-tertiary font-mono text-[9px] font-bold text-accent-cyan">
              {CATEGORY_ICONS[cat]}
            </span>
            <span>{CATEGORY_LABELS[cat] ?? cat}</span>
            <span className="rounded-full bg-bg-tertiary px-1.5 font-mono text-[10px] text-text-muted">
              {count}
            </span>
          </div>
        ))}
      </div>

      {/* Breaking news */}
      {breaking.length > 0 && (
        <section className="space-y-3">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-accent-red">
            Breaking
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {breaking.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* Latest news */}
      <section className="space-y-3">
        <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-text-secondary">
          Latest
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {regular.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </div>
  );
}
