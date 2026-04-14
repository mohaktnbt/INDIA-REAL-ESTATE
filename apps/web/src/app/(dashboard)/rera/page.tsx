import type { Metadata } from 'next';
import { StatusBadge } from '@/components/ui/StatusBadge';

export const metadata: Metadata = {
  title: 'RERA Explorer',
};

const mockProjects = [
  {
    reraNumber: 'P52100054321',
    projectName: 'DLF The Arbour Phase 3',
    promoter: 'DLF Ltd',
    state: 'Haryana',
    district: 'Gurugram',
    units: 420,
    status: 'active' as const,
    approvedDate: '2025-08-15',
    completionDate: '2028-12-31',
  },
  {
    reraNumber: 'A52000032145',
    projectName: 'Godrej Horizon',
    promoter: 'Godrej Properties',
    state: 'Maharashtra',
    district: 'Pune',
    units: 312,
    status: 'active' as const,
    approvedDate: '2025-06-10',
    completionDate: '2028-06-30',
  },
  {
    reraNumber: 'PRM/KA/RERA/1251/2025',
    projectName: 'Prestige Lake Ridge',
    promoter: 'Prestige Estates',
    state: 'Karnataka',
    district: 'Bengaluru Urban',
    units: 256,
    status: 'active' as const,
    approvedDate: '2025-05-20',
    completionDate: '2027-11-30',
  },
  {
    reraNumber: 'PRM/KA/RERA/1302/2025',
    projectName: 'Brigade Utopia',
    promoter: 'Brigade Enterprises',
    state: 'Karnataka',
    district: 'Bengaluru Urban',
    units: 180,
    status: 'active' as const,
    approvedDate: '2025-09-01',
    completionDate: '2028-03-31',
  },
  {
    reraNumber: 'K-RERA/PRJ/089/2025',
    projectName: 'Sobha Crystal Meadows',
    promoter: 'Sobha Ltd',
    state: 'Kerala',
    district: 'Ernakulam',
    units: 144,
    status: 'active' as const,
    approvedDate: '2025-07-12',
    completionDate: '2027-12-31',
  },
  {
    reraNumber: 'P52100067890',
    projectName: 'Lodha Palava Phase 4',
    promoter: 'Macrotech Developers',
    state: 'Maharashtra',
    district: 'Thane',
    units: 890,
    status: 'completed' as const,
    approvedDate: '2022-03-15',
    completionDate: '2025-06-30',
  },
  {
    reraNumber: 'UPRERAPRJ246810',
    projectName: 'ATS Knightsbridge',
    promoter: 'ATS Infrastructure',
    state: 'Uttar Pradesh',
    district: 'Noida',
    units: 520,
    status: 'lapsed' as const,
    approvedDate: '2020-01-10',
    completionDate: '2023-12-31',
  },
];

const statusVariant: Record<string, 'success' | 'warning' | 'danger' | 'info'> = {
  active: 'success',
  completed: 'info',
  lapsed: 'danger',
  revoked: 'danger',
};

export default function RERAPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-mono text-lg font-bold text-text-primary">RERA Explorer</h1>
        <p className="text-sm text-text-secondary">
          Search and filter RERA projects across all states
        </p>
      </div>

      {/* Search and filters */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search by project name, RERA number, promoter..."
            className="w-full rounded-lg border border-border-primary bg-bg-primary py-2 pl-10 pr-4 text-sm text-text-primary placeholder-text-muted transition-colors focus:border-accent-blue focus:outline-none"
          />
        </div>
        <div className="flex gap-2">
          <select className="rounded-lg border border-border-primary bg-bg-primary px-3 py-2 text-sm text-text-secondary focus:border-accent-blue focus:outline-none">
            <option value="">All States</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Haryana">Haryana</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Kerala">Kerala</option>
          </select>
          <select className="rounded-lg border border-border-primary bg-bg-primary px-3 py-2 text-sm text-text-secondary focus:border-accent-blue focus:outline-none">
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="lapsed">Lapsed</option>
            <option value="revoked">Revoked</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-border-primary">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border-primary bg-bg-tertiary">
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                RERA Number
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                Project
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                Promoter
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                State
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium uppercase tracking-wider text-text-secondary">
                Units
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium uppercase tracking-wider text-text-secondary">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-text-secondary">
                Completion
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-primary">
            {mockProjects.map((project) => (
              <tr
                key={project.reraNumber}
                className="bg-bg-secondary transition-colors hover:bg-bg-tertiary"
              >
                <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-accent-cyan">
                  {project.reraNumber}
                </td>
                <td className="px-4 py-3 text-text-primary">{project.projectName}</td>
                <td className="px-4 py-3 text-text-secondary">{project.promoter}</td>
                <td className="px-4 py-3 text-text-secondary">{project.state}</td>
                <td className="px-4 py-3 text-right font-mono tabular-nums text-text-primary">
                  {project.units}
                </td>
                <td className="px-4 py-3 text-center">
                  <StatusBadge variant={statusVariant[project.status]}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </StatusBadge>
                </td>
                <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-text-secondary">
                  {project.completionDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-text-muted">
        Showing {mockProjects.length} of 48,320 projects &mdash; AG Grid integration coming soon
      </p>
    </div>
  );
}
