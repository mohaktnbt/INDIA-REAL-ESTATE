'use client';

import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { formatChangePercent, formatIndianNumber } from '@irem/shared';

export interface CityComparisonChartProps {
  data: Array<{
    city: string;
    value: number;
    change?: number;
  }>;
  metric: string;
  formatter?: (v: number) => string;
  height?: number;
}

function getBarColor(change: number | undefined): string {
  if (change === undefined || change === null || change === 0) {
    return 'var(--accent-blue)';
  }
  if (change > 0) return 'var(--accent-green)';
  return 'var(--accent-red)';
}

interface TooltipPayloadItem {
  payload?: {
    city?: string;
    value?: number;
    change?: number;
  };
  value?: number | string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  formatter: (v: number) => string;
  metric: string;
}

function CustomTooltip({ active, payload, formatter, metric }: CustomTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;
  const entry = payload[0];
  if (!entry || !entry.payload) return null;

  const { city, value, change } = entry.payload;
  const changeColor =
    change === undefined || change === 0
      ? 'var(--text-secondary)'
      : change > 0
        ? 'var(--accent-green)'
        : 'var(--accent-red)';

  return (
    <div
      className="rounded-md border px-3 py-2 font-mono text-xs shadow-xl"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--border-highlight)',
        color: 'var(--text-primary)',
      }}
    >
      <div
        className="mb-1.5 text-[10px] uppercase tracking-wider"
        style={{ color: 'var(--text-muted)' }}
      >
        {city}
      </div>
      <div className="flex items-center justify-between gap-4">
        <span style={{ color: 'var(--text-secondary)' }}>{metric}</span>
        <span style={{ color: 'var(--text-primary)' }}>
          {typeof value === 'number' ? formatter(value) : ''}
        </span>
      </div>
      {change !== undefined && change !== null ? (
        <div className="mt-1 flex items-center justify-between gap-4">
          <span style={{ color: 'var(--text-secondary)' }}>YoY</span>
          <span style={{ color: changeColor }}>{formatChangePercent(change)}</span>
        </div>
      ) : null}
    </div>
  );
}

export function CityComparisonChart({
  data,
  metric,
  formatter = (v: number) => formatIndianNumber(v),
  height = 420,
}: CityComparisonChartProps) {
  // Sort descending by value so largest is on top
  const sorted = [...data].sort((a, b) => b.value - a.value);

  const rowHeight = 28;
  const resolvedHeight = Math.max(height, sorted.length * rowHeight + 40);

  return (
    <div style={{ width: '100%', height: resolvedHeight }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sorted}
          layout="vertical"
          margin={{ top: 8, right: 72, left: 8, bottom: 8 }}
          barCategoryGap="25%"
        >
          <XAxis
            type="number"
            hide
            domain={[0, (dataMax: number) => dataMax * 1.15]}
          />
          <YAxis
            type="category"
            dataKey="city"
            stroke="var(--text-secondary)"
            tick={{
              fill: 'var(--text-secondary)',
              fontSize: 11,
              fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
            }}
            tickLine={false}
            axisLine={{ stroke: 'var(--border-primary)' }}
            width={96}
          />
          <Tooltip
            content={<CustomTooltip formatter={formatter} metric={metric} />}
            cursor={{ fill: 'var(--bg-tertiary)', fillOpacity: 0.4 }}
          />
          <Bar
            dataKey="value"
            radius={[0, 4, 4, 0]}
            isAnimationActive
            animationDuration={700}
            animationEasing="ease-out"
          >
            {sorted.map((entry, idx) => (
              <Cell key={`cell-${entry.city}-${idx}`} fill={getBarColor(entry.change)} />
            ))}
            <LabelList
              dataKey="value"
              position="right"
              formatter={(value: React.ReactNode) =>
                typeof value === 'number' ? formatter(value) : String(value ?? '')
              }
              style={{
                fill: 'var(--text-primary)',
                fontSize: 11,
                fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CityComparisonChart;
