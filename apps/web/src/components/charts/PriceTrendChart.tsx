'use client';

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { formatPricePerSqFt } from '@irem/shared';

export interface PriceTrendChartProps {
  data: Array<{
    month: string; // '2023-01' format
    [city: string]: number | string;
  }>;
  cities: string[];
  height?: number;
}

const CHART_COLORS = [
  'var(--accent-green)',
  'var(--accent-blue)',
  'var(--accent-purple)',
  'var(--accent-cyan)',
  'var(--accent-amber)',
  'var(--accent-red)',
  '#ec4899',
  '#14b8a6',
];

const MONTH_SHORT = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function formatMonthTick(value: string): string {
  // '2023-01' -> 'Jan 23'
  const parts = value.split('-');
  if (parts.length !== 2) return value;
  const year = parts[0];
  const monthRaw = parts[1];
  if (!year || !monthRaw) return value;
  const monthIdx = parseInt(monthRaw, 10) - 1;
  if (Number.isNaN(monthIdx) || monthIdx < 0 || monthIdx > 11) return value;
  return `${MONTH_SHORT[monthIdx]} ${year.slice(2)}`;
}

interface TooltipPayloadItem {
  name?: string | number;
  value?: number | string;
  color?: string;
  dataKey?: string | number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;

  const sorted = [...payload].sort((a, b) => {
    const av = typeof a.value === 'number' ? a.value : 0;
    const bv = typeof b.value === 'number' ? b.value : 0;
    return bv - av;
  });

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
        {label ? formatMonthTick(label) : ''}
      </div>
      <div className="space-y-1">
        {sorted.map((entry, idx) => (
          <div key={`${entry.dataKey ?? idx}`} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span style={{ color: 'var(--text-secondary)' }}>{entry.name}</span>
            </div>
            <span style={{ color: 'var(--text-primary)' }}>
              {typeof entry.value === 'number' ? formatPricePerSqFt(entry.value) : entry.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PriceTrendChart({ data, cities, height = 360 }: PriceTrendChartProps) {
  const limitedCities = cities.slice(0, 8);

  return (
    <div style={{ width: '100%', height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 12, right: 16, left: 4, bottom: 4 }}>
          <defs>
            {limitedCities.map((city, idx) => {
              const color = CHART_COLORS[idx % CHART_COLORS.length];
              return (
                <linearGradient
                  key={`gradient-${city}`}
                  id={`priceTrendGradient-${idx}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor={color} stopOpacity={0.22} />
                  <stop offset="100%" stopColor={color} stopOpacity={0.02} />
                </linearGradient>
              );
            })}
          </defs>

          <CartesianGrid
            stroke="var(--border-primary)"
            strokeDasharray="3 3"
            strokeOpacity={0.5}
            vertical={false}
          />

          <XAxis
            dataKey="month"
            stroke="var(--text-muted)"
            tick={{
              fill: 'var(--text-muted)',
              fontSize: 11,
              fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
            }}
            tickLine={false}
            axisLine={{ stroke: 'var(--border-primary)' }}
            tickFormatter={formatMonthTick}
            minTickGap={24}
          />

          <YAxis
            stroke="var(--text-muted)"
            tick={{
              fill: 'var(--text-muted)',
              fontSize: 11,
              fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
            }}
            tickLine={false}
            axisLine={{ stroke: 'var(--border-primary)' }}
            tickFormatter={(value: number) => formatPricePerSqFt(value)}
            width={90}
          />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: 'var(--border-highlight)', strokeWidth: 1, strokeDasharray: '4 4' }}
          />

          <Legend
            wrapperStyle={{
              paddingTop: 12,
              fontSize: 11,
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono, JetBrains Mono, monospace)',
            }}
            iconType="circle"
            iconSize={8}
          />

          {limitedCities.map((city, idx) => {
            const color = CHART_COLORS[idx % CHART_COLORS.length];
            return (
              <Area
                key={city}
                type="monotone"
                dataKey={city}
                name={city}
                stroke={color}
                strokeWidth={2}
                fill={`url(#priceTrendGradient-${idx})`}
                fillOpacity={1}
                activeDot={{ r: 4, strokeWidth: 0, fill: color }}
                isAnimationActive
                animationDuration={600}
              />
            );
          })}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PriceTrendChart;
