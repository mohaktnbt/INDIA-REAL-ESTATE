import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare',
};

export default function ComparePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-mono text-lg font-bold text-text-primary">Compare</h1>
        <p className="text-sm text-text-secondary">
          Side-by-side comparison of cities, micro-markets, and developers
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Left selection */}
        <div className="rounded-lg border border-border-primary bg-bg-secondary p-6">
          <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-text-secondary">
            Select First
          </label>
          <select className="w-full rounded-lg border border-border-primary bg-bg-primary px-3 py-2 text-sm text-text-secondary focus:border-accent-blue focus:outline-none">
            <option value="">Choose city or micro-market...</option>
            <option value="mumbai">Mumbai</option>
            <option value="bengaluru">Bengaluru</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="pune">Pune</option>
            <option value="delhi-ncr">Delhi NCR</option>
            <option value="chennai">Chennai</option>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="kolkata">Kolkata</option>
          </select>

          <div className="mt-6 space-y-4">
            {[
              { label: 'Avg Price/sqft', value: '--' },
              { label: 'YoY Change', value: '--' },
              { label: 'Active Listings', value: '--' },
              { label: 'RERA Projects', value: '--' },
              { label: 'Health Index', value: '--' },
              { label: 'Rental Yield', value: '--' },
              { label: 'Months of Inventory', value: '--' },
              { label: 'AQI', value: '--' },
            ].map((row) => (
              <div key={row.label} className="flex justify-between border-b border-border-primary pb-2">
                <span className="text-xs text-text-secondary">{row.label}</span>
                <span className="font-mono text-sm tabular-nums text-text-muted">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right selection */}
        <div className="rounded-lg border border-border-primary bg-bg-secondary p-6">
          <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-text-secondary">
            Select Second
          </label>
          <select className="w-full rounded-lg border border-border-primary bg-bg-primary px-3 py-2 text-sm text-text-secondary focus:border-accent-blue focus:outline-none">
            <option value="">Choose city or micro-market...</option>
            <option value="mumbai">Mumbai</option>
            <option value="bengaluru">Bengaluru</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="pune">Pune</option>
            <option value="delhi-ncr">Delhi NCR</option>
            <option value="chennai">Chennai</option>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="kolkata">Kolkata</option>
          </select>

          <div className="mt-6 space-y-4">
            {[
              { label: 'Avg Price/sqft', value: '--' },
              { label: 'YoY Change', value: '--' },
              { label: 'Active Listings', value: '--' },
              { label: 'RERA Projects', value: '--' },
              { label: 'Health Index', value: '--' },
              { label: 'Rental Yield', value: '--' },
              { label: 'Months of Inventory', value: '--' },
              { label: 'AQI', value: '--' },
            ].map((row) => (
              <div key={row.label} className="flex justify-between border-b border-border-primary pb-2">
                <span className="text-xs text-text-secondary">{row.label}</span>
                <span className="font-mono text-sm tabular-nums text-text-muted">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison chart placeholder */}
      <div className="rounded-lg border border-border-primary bg-bg-surface p-4">
        <h2 className="mb-3 font-mono text-sm font-semibold text-text-primary">
          Price Trend Comparison
        </h2>
        <div className="flex h-64 items-center justify-center">
          <p className="font-mono text-sm text-text-muted">
            Select two cities to compare price trends — ECharts overlay coming soon
          </p>
        </div>
      </div>
    </div>
  );
}
