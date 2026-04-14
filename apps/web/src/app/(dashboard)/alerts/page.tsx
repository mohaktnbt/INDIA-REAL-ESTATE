import type { Metadata } from 'next';
import { StatusBadge } from '@/components/ui/StatusBadge';

export const metadata: Metadata = {
  title: 'Alerts',
};

const mockAlerts = [
  {
    id: '1',
    type: 'price',
    target: 'Whitefield, Bengaluru',
    condition: 'Avg price/sqft crosses \u20B910,000',
    channel: 'Telegram',
    isActive: true,
    lastTriggered: null,
  },
  {
    id: '2',
    type: 'rera',
    target: 'Maharashtra',
    condition: 'New RERA project registered',
    channel: 'Telegram',
    isActive: true,
    lastTriggered: '2d ago',
  },
  {
    id: '3',
    type: 'stock',
    target: 'DLF.NS',
    condition: 'Price crosses \u20B9950',
    channel: 'WhatsApp',
    isActive: true,
    lastTriggered: null,
  },
  {
    id: '4',
    type: 'news',
    target: 'Godrej Properties',
    condition: 'Any news mention',
    channel: 'Email',
    isActive: false,
    lastTriggered: '5d ago',
  },
];

const typeIcons: Record<string, string> = {
  price: '\u20B9',
  rera: '\uD83D\uDCC4',
  stock: '\uD83D\uDCC8',
  news: '\uD83D\uDCF0',
  developer: '\uD83C\uDFE2',
};

export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-mono text-lg font-bold text-text-primary">Alerts</h1>
        <p className="text-sm text-text-secondary">
          Configure watchlists and get notified via Telegram, WhatsApp, or email
        </p>
      </div>

      {/* Create alert form */}
      <div className="rounded-lg border border-border-primary bg-bg-secondary p-6">
        <h2 className="mb-4 font-mono text-sm font-semibold text-text-primary">
          Create New Alert
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label className="mb-1 block text-xs text-text-secondary">Alert Type</label>
            <select className="w-full rounded-lg border border-border-primary bg-bg-primary px-3 py-2 text-sm text-text-secondary focus:border-accent-blue focus:outline-none">
              <option value="price">Price Alert</option>
              <option value="rera">RERA Alert</option>
              <option value="stock">Stock Alert</option>
              <option value="news">News Alert</option>
              <option value="developer">Developer Alert</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs text-text-secondary">Target</label>
            <input
              type="text"
              placeholder="City, micro-market, developer..."
              className="w-full rounded-lg border border-border-primary bg-bg-primary px-3 py-2 text-sm text-text-primary placeholder-text-muted focus:border-accent-blue focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs text-text-secondary">Channel</label>
            <select className="w-full rounded-lg border border-border-primary bg-bg-primary px-3 py-2 text-sm text-text-secondary focus:border-accent-blue focus:outline-none">
              <option value="telegram">Telegram</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="email">Email</option>
              <option value="web">Browser Push</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full rounded-lg bg-accent-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-blue/80">
              Create Alert
            </button>
          </div>
        </div>
      </div>

      {/* Active alerts */}
      <div>
        <h2 className="mb-3 font-mono text-sm font-semibold text-text-primary">
          Your Alerts ({mockAlerts.length})
        </h2>
        <div className="space-y-2">
          {mockAlerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-center justify-between rounded-lg border border-border-primary bg-bg-secondary px-4 py-3 transition-colors hover:border-border-highlight"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{typeIcons[alert.type]}</span>
                <div>
                  <p className="text-sm text-text-primary">
                    <span className="font-medium">{alert.target}</span>
                    <span className="text-text-muted"> &mdash; </span>
                    <span className="text-text-secondary">{alert.condition}</span>
                  </p>
                  <div className="mt-0.5 flex items-center gap-2 text-xs text-text-muted">
                    <span>{alert.channel}</span>
                    {alert.lastTriggered && (
                      <>
                        <span>&middot;</span>
                        <span>Last triggered {alert.lastTriggered}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge variant={alert.isActive ? 'success' : 'muted'}>
                  {alert.isActive ? 'Active' : 'Paused'}
                </StatusBadge>
                <button className="text-xs text-text-muted transition-colors hover:text-accent-red">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
