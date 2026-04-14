'use client';

import { useMemo } from 'react';
import { clamp } from '@irem/shared';

export interface SentimentGaugeProps {
  value: number; // 0-100
  label?: string;
  size?: number;
}

interface ColorStop {
  at: number;
  color: string;
}

const COLOR_STOPS: ColorStop[] = [
  { at: 0, color: 'var(--accent-red)' },
  { at: 40, color: 'var(--accent-red)' },
  { at: 55, color: 'var(--accent-amber)' },
  { at: 70, color: 'var(--accent-amber)' },
  { at: 85, color: 'var(--accent-green)' },
  { at: 100, color: 'var(--accent-green)' },
];

function getSentimentColor(value: number): string {
  if (value < 40) return 'var(--accent-red)';
  if (value < 70) return 'var(--accent-amber)';
  return 'var(--accent-green)';
}

function getSentimentLabel(value: number): string {
  if (value < 30) return 'Bearish';
  if (value < 45) return 'Weak';
  if (value < 60) return 'Neutral';
  if (value < 75) return 'Bullish';
  return 'Strong Bullish';
}

// Build an SVG arc path between two angles (in degrees)
// Angles measured clockwise from left (180deg) to right (0deg) across the top semicircle.
function polarToCartesian(cx: number, cy: number, radius: number, angleDeg: number) {
  const angleRad = ((angleDeg - 180) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(angleRad),
    y: cy + radius * Math.sin(angleRad),
  };
}

function describeArc(cx: number, cy: number, radius: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  return [
    'M',
    start.x.toFixed(3),
    start.y.toFixed(3),
    'A',
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x.toFixed(3),
    end.y.toFixed(3),
  ].join(' ');
}

export function SentimentGauge({ value, label = 'Market Sentiment', size = 260 }: SentimentGaugeProps) {
  const safeValue = clamp(value, 0, 100);

  const geometry = useMemo(() => {
    const width = size;
    const height = size * 0.62; // semicircle plus a bit for labels
    const cx = width / 2;
    const cy = size * 0.55;
    const strokeWidth = Math.max(10, size * 0.07);
    const radius = (width - strokeWidth * 2) / 2;
    // 0 value at 0deg (left), 100 value at 180deg (right)
    const valueAngle = (safeValue / 100) * 180;

    return { width, height, cx, cy, strokeWidth, radius, valueAngle };
  }, [safeValue, size]);

  const { width, height, cx, cy, strokeWidth, radius, valueAngle } = geometry;

  const trackPath = describeArc(cx, cy, radius, 0, 180);
  const valuePath = describeArc(cx, cy, radius, 0, Math.max(0.5, valueAngle));

  const needle = polarToCartesian(cx, cy, radius, valueAngle);
  const color = getSentimentColor(safeValue);
  const sentimentLabel = getSentimentLabel(safeValue);

  return (
    <div className="flex flex-col items-center" style={{ width }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={`${label}: ${Math.round(safeValue)} out of 100`}
      >
        <defs>
          <linearGradient id="sentimentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            {COLOR_STOPS.map((stop) => (
              <stop key={stop.at} offset={`${stop.at}%`} stopColor={stop.color} />
            ))}
          </linearGradient>
        </defs>

        {/* Track */}
        <path
          d={trackPath}
          fill="none"
          stroke="var(--border-primary)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          opacity={0.7}
        />

        {/* Value arc */}
        <path
          d={valuePath}
          fill="none"
          stroke="url(#sentimentGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          style={{
            transition: 'd 600ms ease-out',
            filter: `drop-shadow(0 0 6px ${color})`,
          }}
        />

        {/* Needle tip */}
        <circle
          cx={needle.x}
          cy={needle.y}
          r={strokeWidth * 0.55}
          fill={color}
          stroke="var(--bg-primary)"
          strokeWidth={2}
        />

        {/* End labels */}
        <text
          x={cx - radius - strokeWidth * 0.2}
          y={cy + strokeWidth * 1.2}
          textAnchor="middle"
          fontSize={Math.max(10, size * 0.045)}
          fill="var(--text-muted)"
          fontFamily="var(--font-mono, JetBrains Mono, monospace)"
        >
          0
        </text>
        <text
          x={cx + radius + strokeWidth * 0.2}
          y={cy + strokeWidth * 1.2}
          textAnchor="middle"
          fontSize={Math.max(10, size * 0.045)}
          fill="var(--text-muted)"
          fontFamily="var(--font-mono, JetBrains Mono, monospace)"
        >
          100
        </text>

        {/* Center value */}
        <text
          x={cx}
          y={cy - size * 0.02}
          textAnchor="middle"
          fontSize={size * 0.22}
          fill={color}
          fontFamily="var(--font-mono, JetBrains Mono, monospace)"
          fontWeight={700}
        >
          {Math.round(safeValue)}
        </text>
      </svg>

      <div className="mt-1 flex flex-col items-center">
        <span
          className="font-mono text-xs uppercase tracking-wider"
          style={{ color: 'var(--text-secondary)' }}
        >
          {label}
        </span>
        <span className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider" style={{ color }}>
          {sentimentLabel}
        </span>
      </div>
    </div>
  );
}

export default SentimentGauge;
