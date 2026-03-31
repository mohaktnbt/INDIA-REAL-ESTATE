import type { Metadata } from 'next';
import { StatusBadge } from '@/components/ui/StatusBadge';

export const metadata: Metadata = {
  title: 'Stocks & REITs',
};

const stocks = [
  { symbol: 'DLF', name: 'DLF Ltd', ltp: 892.45, change: +2.34, category: 'realty' },
  { symbol: 'GODREJPROP', name: 'Godrej Properties', ltp: 2145.80, change: +1.56, category: 'realty' },
  { symbol: 'OBEROIRLTY', name: 'Oberoi Realty', ltp: 1876.30, change: -0.82, category: 'realty' },
  { symbol: 'PRESTIGE', name: 'Prestige Estates', ltp: 1534.60, change: +3.12, category: 'realty' },
  { symbol: 'BRIGADE', name: 'Brigade Enterprises', ltp: 1245.90, change: +1.95, category: 'realty' },
  { symbol: 'SOBHA', name: 'Sobha Ltd', ltp: 1678.20, change: -1.24, category: 'realty' },
  { symbol: 'LODHA', name: 'Macrotech Developers', ltp: 1320.75, change: +0.78, category: 'realty' },
  { symbol: 'PHOENIXLTD', name: 'Phoenix Mills', ltp: 3245.10, change: +0.45, category: 'realty' },
  { symbol: 'EMBASSY', name: 'Embassy Office REIT', ltp: 342.50, change: +0.32, category: 'reit' },
  { symbol: 'MINDSPACE', name: 'Mindspace REIT', ltp: 312.80, change: -0.15, category: 'reit' },
  { symbol: 'BROOKFIELD', name: 'Brookfield India REIT', ltp: 278.40, change: +0.68, category: 'reit' },
  { symbol: 'NEXUS', name: 'Nexus Select Trust', ltp: 138.90, change: +1.12, category: 'reit' },
  { symbol: 'HDFC', name: 'HDFC Bank (HFC)', ltp: 1742.30, change: +0.92, category: 'hfc' },
  { symbol: 'LICHSGFIN', name: 'LIC Housing Finance', ltp: 478.60, change: -0.56, category: 'hfc' },
  { symbol: 'PNBHOUSING', name: 'PNB Housing Finance', ltp: 892.40, change: +1.34, category: 'hfc' },
];

export default function StocksPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-mono text-lg font-bold text-text-primary">
          Nifty Realty &amp; REITs
        </h1>
        <p className="text-sm text-text-secondary">
          Real-time tracking of real estate stocks, REITs, and housing finance companies
        </p>
      </div>

      {/* Index header */}
      <div className="rounded-lg border border-border-primary bg-bg-secondary p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-xs text-text-muted">NIFTY REALTY INDEX</span>
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-3xl font-bold tabular-nums text-text-primary">
                1,042.50
              </span>
              <span className="font-mono text-sm tabular-nums text-accent-green">
                +18.75 (+1.83%)
              </span>
            </div>
          </div>
          <div className="flex h-24 flex-1 max-w-md items-center justify-center rounded border border-border-primary bg-bg-surface">
            <span className="font-mono text-xs text-text-muted">
              TradingView Chart — Coming Soon
            </span>
          </div>
        </div>
      </div>

      {/* Stocks table */}
      <div className="overflow-x-auto rounded-lg border border-border-primary">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border-primary bg-bg-tertiary">
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                Symbol
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                Company
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                Type
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-text-secondary">
                LTP
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-text-secondary">
                Change %
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-primary">
            {stocks.map((stock) => (
              <tr
                key={stock.symbol}
                className="bg-bg-secondary transition-colors hover:bg-bg-tertiary"
              >
                <td className="whitespace-nowrap px-4 py-3 font-mono text-sm font-semibold text-accent-blue">
                  {stock.symbol}
                </td>
                <td className="px-4 py-3 text-text-primary">{stock.name}</td>
                <td className="px-4 py-3">
                  <StatusBadge
                    variant={
                      stock.category === 'realty'
                        ? 'info'
                        : stock.category === 'reit'
                          ? 'success'
                          : 'muted'
                    }
                  >
                    {stock.category.toUpperCase()}
                  </StatusBadge>
                </td>
                <td className="px-4 py-3 text-right font-mono tabular-nums text-text-primary">
                  {'\u20B9'}
                  {stock.ltp.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                </td>
                <td
                  className={`px-4 py-3 text-right font-mono tabular-nums ${
                    stock.change >= 0 ? 'text-accent-green' : 'text-accent-red'
                  }`}
                >
                  {stock.change >= 0 ? '+' : ''}
                  {stock.change.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
