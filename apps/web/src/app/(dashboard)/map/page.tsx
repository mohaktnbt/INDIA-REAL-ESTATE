import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Map Explorer',
};

export default function MapPage() {
  return (
    <div className="-m-4 flex h-[calc(100vh-3.5rem)] items-center justify-center bg-bg-surface lg:-m-6">
      <div className="text-center">
        <svg
          className="mx-auto h-16 w-16 text-text-muted"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z" />
          <path d="M8 2v16" />
          <path d="M16 6v16" />
        </svg>
        <h1 className="mt-4 font-mono text-xl font-bold text-text-primary">
          Map Explorer
        </h1>
        <p className="mt-2 max-w-md text-sm text-text-secondary">
          Full-screen interactive map with price heatmaps, RERA project locations,
          metro lines, AQI overlay, and more. Powered by MapLibre GL + deck.gl with
          self-hosted PMTiles.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {['Price Heatmap', 'RERA Projects', 'Metro Lines', 'AQI Overlay', 'Flood Risk'].map(
            (layer) => (
              <span
                key={layer}
                className="rounded-full border border-border-primary bg-bg-secondary px-3 py-1 text-xs text-text-muted"
              >
                {layer}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
