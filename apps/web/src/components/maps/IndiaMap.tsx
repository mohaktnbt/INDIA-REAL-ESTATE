'use client';

import { useMemo, useState, type MouseEvent as ReactMouseEvent } from 'react';
import { scaleSqrt, scaleLinear } from 'd3-scale';
import clsx from 'clsx';
import {
  formatPricePerSqFt,
  formatChangePercent,
} from '@irem/shared';

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface CityPoint {
  name: string;
  latitude: number;
  longitude: number;
  /** Median price per sq ft in INR — drives marker size. */
  priceIndex: number;
  /** YoY % change — drives color when `metric === 'change'`. */
  change: number;
  tier: 1 | 2 | 3;
}

export interface IndiaMapProps {
  cities: CityPoint[];
  onCityClick?: (city: CityPoint) => void;
  /** Which dimension to visualize with marker color. */
  metric?: 'price' | 'change' | 'volume';
  className?: string;
}

/* ------------------------------------------------------------------ */
/* Projection                                                          */
/* ------------------------------------------------------------------ */

// Mainland India bounding box (approx): 6°N–38°N, 68°E–98°E.
const LAT_MIN = 6;
const LAT_MAX = 38;
const LNG_MIN = 68;
const LNG_MAX = 98;

function project(
  lat: number,
  lng: number,
  width: number,
  height: number,
): { x: number; y: number } {
  const x = ((lng - LNG_MIN) / (LNG_MAX - LNG_MIN)) * width;
  const y = ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * height;
  return { x, y };
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

const VIEW_WIDTH = 800;
const VIEW_HEIGHT = 900;

export function IndiaMap({
  cities,
  onCityClick,
  metric = 'price',
  className,
}: IndiaMapProps) {
  const [hovered, setHovered] = useState<CityPoint | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  /* ---------- Scales ---------- */

  const radiusScale = useMemo(() => {
    const prices = cities.map((c) => c.priceIndex);
    const min = prices.length ? Math.min(...prices) : 0;
    const max = prices.length ? Math.max(...prices) : 1;
    return scaleSqrt<number, number>()
      .domain([min, max])
      .range([4, 18])
      .clamp(true);
  }, [cities]);

  const priceColorScale = useMemo(() => {
    const prices = cities.map((c) => c.priceIndex);
    const min = prices.length ? Math.min(...prices) : 0;
    const max = prices.length ? Math.max(...prices) : 1;
    return scaleLinear<string>()
      .domain([min, (min + max) / 2, max])
      .range(['#06b6d4', '#3b82f6', '#f59e0b'])
      .clamp(true);
  }, [cities]);

  const colorForCity = (city: CityPoint): string => {
    if (metric === 'change') {
      return city.change >= 0 ? 'var(--accent-green)' : 'var(--accent-red)';
    }
    if (metric === 'price') {
      return priceColorScale(city.priceIndex);
    }
    return 'var(--accent-blue)';
  };

  const opacityForCity = (city: CityPoint): number => {
    if (metric === 'change') {
      const mag = Math.min(Math.abs(city.change) / 15, 1);
      return 0.45 + mag * 0.55;
    }
    return 1;
  };

  /* ---------- Grid lines ---------- */

  const latLines = useMemo(() => {
    const lines: number[] = [];
    for (let lat = LAT_MIN; lat <= LAT_MAX; lat += 5) lines.push(lat);
    return lines;
  }, []);

  const lngLines = useMemo(() => {
    const lines: number[] = [];
    for (let lng = LNG_MIN; lng <= LNG_MAX; lng += 5) lines.push(lng);
    return lines;
  }, []);

  /* ---------- Landmass outline (stylized) ---------- */
  // A rough, non-geographic silhouette drawn in *data-space* (lat/lng),
  // projected at render time. Kept intentionally loose — the vibe is
  // "terminal map" not cartographic accuracy.
  const indiaShape: Array<[number, number]> = useMemo(
    () => [
      [35.5, 74.0], // Kashmir NW
      [35.0, 77.5],
      [34.5, 79.5], // Ladakh
      [32.5, 79.0],
      [31.0, 81.0],
      [29.5, 82.0],
      [28.0, 84.0],
      [27.5, 88.0], // Sikkim
      [27.0, 89.5], // Bhutan edge
      [27.3, 92.0],
      [28.2, 95.5], // Arunachal NE
      [27.5, 96.5],
      [25.5, 95.0],
      [23.5, 94.0],
      [22.5, 93.0], // Mizoram
      [23.0, 91.0], // Tripura
      [24.5, 88.5], // Bangladesh border
      [22.0, 88.5], // Kolkata
      [20.0, 87.0], // Odisha coast
      [17.5, 83.0], // Vizag
      [15.5, 80.5],
      [13.0, 80.3], // Chennai
      [10.0, 79.8],
      [ 8.1, 77.5], // Kanyakumari
      [ 8.5, 76.5], // Kerala coast
      [11.0, 75.5],
      [13.5, 74.5],
      [15.5, 73.5], // Goa
      [18.0, 72.8], // Mumbai
      [20.5, 72.5],
      [22.5, 69.0], // Gujarat Saurashtra
      [23.5, 68.5], // Kutch
      [25.0, 70.5], // Thar
      [27.5, 71.5],
      [30.0, 73.5], // Punjab
      [32.5, 74.5],
      [34.0, 74.5],
      [35.5, 74.0], // close
    ],
    [],
  );

  const landPath = useMemo(() => {
    if (!indiaShape.length) return '';
    return (
      indiaShape
        .map(([lat, lng], i) => {
          const { x, y } = project(lat, lng, VIEW_WIDTH, VIEW_HEIGHT);
          return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
        })
        .join(' ') + ' Z'
    );
  }, [indiaShape]);

  /* ---------- Mouse tracking (for tooltip) ---------- */

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  /* ---------- Render ---------- */

  return (
    <div
      className={clsx('relative w-full select-none', className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHovered(null)}
    >
      <svg
        viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
        className="h-auto w-full"
        role="img"
        aria-label="Map of India with city-level real estate indicators"
      >
        <defs>
          <radialGradient id="india-bg" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="var(--bg-secondary)" />
            <stop offset="100%" stopColor="var(--bg-primary)" />
          </radialGradient>
          <radialGradient id="india-land" cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="var(--bg-tertiary)" />
            <stop offset="100%" stopColor="var(--bg-secondary)" />
          </radialGradient>
          <filter id="marker-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ocean background */}
        <rect width={VIEW_WIDTH} height={VIEW_HEIGHT} fill="url(#india-bg)" />

        {/* Graticule — longitude lines */}
        {lngLines.map((lng) => {
          const { x: x1 } = project(LAT_MAX, lng, VIEW_WIDTH, VIEW_HEIGHT);
          const { x: x2, y: y2 } = project(
            LAT_MIN,
            lng,
            VIEW_WIDTH,
            VIEW_HEIGHT,
          );
          return (
            <line
              key={`lng-${lng}`}
              x1={x1}
              y1={0}
              x2={x2}
              y2={y2}
              stroke="var(--border-primary)"
              strokeOpacity={0.25}
              strokeWidth={0.5}
              strokeDasharray="2 4"
            />
          );
        })}

        {/* Graticule — latitude lines */}
        {latLines.map((lat) => {
          const { y: y1 } = project(lat, LNG_MIN, VIEW_WIDTH, VIEW_HEIGHT);
          return (
            <line
              key={`lat-${lat}`}
              x1={0}
              y1={y1}
              x2={VIEW_WIDTH}
              y2={y1}
              stroke="var(--border-primary)"
              strokeOpacity={0.25}
              strokeWidth={0.5}
              strokeDasharray="2 4"
            />
          );
        })}

        {/* Graticule labels (corners) */}
        {latLines.map((lat) => {
          const { y } = project(lat, LNG_MIN, VIEW_WIDTH, VIEW_HEIGHT);
          return (
            <text
              key={`lat-label-${lat}`}
              x={6}
              y={y - 2}
              fill="var(--text-muted)"
              fontSize={9}
              fontFamily="var(--font-mono, monospace)"
            >
              {lat}°N
            </text>
          );
        })}
        {lngLines.map((lng) => {
          const { x } = project(LAT_MIN, lng, VIEW_WIDTH, VIEW_HEIGHT);
          return (
            <text
              key={`lng-label-${lng}`}
              x={x + 2}
              y={VIEW_HEIGHT - 6}
              fill="var(--text-muted)"
              fontSize={9}
              fontFamily="var(--font-mono, monospace)"
            >
              {lng}°E
            </text>
          );
        })}

        {/* Landmass */}
        <path
          d={landPath}
          fill="url(#india-land)"
          stroke="var(--border-highlight)"
          strokeWidth={1.25}
          strokeLinejoin="round"
        />

        {/* City markers */}
        {cities.map((city) => {
          const { x, y } = project(
            city.latitude,
            city.longitude,
            VIEW_WIDTH,
            VIEW_HEIGHT,
          );
          const r = radiusScale(city.priceIndex);
          const color = colorForCity(city);
          const opacity = opacityForCity(city);
          const isHovered = hovered?.name === city.name;
          const isTopCity = city.tier === 1 && city.priceIndex >= 12000;

          return (
            <g
              key={city.name}
              className="cursor-pointer"
              onMouseEnter={() => setHovered(city)}
              onClick={() => onCityClick?.(city)}
            >
              {/* Outer halo */}
              <circle
                cx={x}
                cy={y}
                r={r * 2.2}
                fill={color}
                opacity={0.12}
                className={isTopCity ? 'animate-pulse' : undefined}
              />
              {/* Mid ring */}
              <circle
                cx={x}
                cy={y}
                r={r * 1.5}
                fill={color}
                opacity={0.25}
              />
              {/* Core dot */}
              <circle
                cx={x}
                cy={y}
                r={isHovered ? r + 2 : r}
                fill={color}
                fillOpacity={opacity}
                stroke="var(--text-primary)"
                strokeWidth={isHovered ? 1.25 : 0.5}
                filter={isHovered ? 'url(#marker-glow)' : undefined}
              />
              {city.tier === 1 && (
                <text
                  x={x + r + 5}
                  y={y + 3}
                  fontSize={11}
                  fontFamily="var(--font-mono, monospace)"
                  fill="var(--text-secondary)"
                  style={{ pointerEvents: 'none' }}
                >
                  {city.name}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {/* Tooltip */}
      {hovered && (
        <div
          className="pointer-events-none absolute z-10 rounded-lg border px-3 py-2 text-xs shadow-lg backdrop-blur"
          style={{
            left: Math.min(mousePos.x + 14, 9999),
            top: mousePos.y + 14,
            backgroundColor: 'color-mix(in srgb, var(--bg-secondary) 92%, transparent)',
            borderColor: 'var(--border-highlight)',
            color: 'var(--text-primary)',
            minWidth: 180,
          }}
        >
          <div className="mb-1 flex items-center justify-between gap-2">
            <span className="font-mono text-sm font-bold">{hovered.name}</span>
            <span
              className="rounded px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-secondary)',
              }}
            >
              T{hovered.tier}
            </span>
          </div>
          <div
            className="flex items-center justify-between gap-4 font-mono"
            style={{ color: 'var(--text-secondary)' }}
          >
            <span>Price</span>
            <span style={{ color: 'var(--text-primary)' }}>
              {formatPricePerSqFt(hovered.priceIndex)}
            </span>
          </div>
          <div className="flex items-center justify-between gap-4 font-mono">
            <span style={{ color: 'var(--text-secondary)' }}>YoY</span>
            <span
              style={{
                color:
                  hovered.change >= 0
                    ? 'var(--accent-green)'
                    : 'var(--accent-red)',
              }}
            >
              {formatChangePercent(hovered.change)}
            </span>
          </div>
        </div>
      )}

      {/* Legend */}
      <div
        className="absolute bottom-3 left-3 rounded-lg border px-3 py-2 text-[11px] shadow-lg backdrop-blur"
        style={{
          backgroundColor: 'color-mix(in srgb, var(--bg-secondary) 85%, transparent)',
          borderColor: 'var(--border-primary)',
          color: 'var(--text-secondary)',
        }}
      >
        <div
          className="mb-1.5 font-mono text-[10px] uppercase tracking-wider"
          style={{ color: 'var(--text-muted)' }}
        >
          {metric === 'change'
            ? 'YoY Change'
            : metric === 'price'
              ? 'Price / sq ft'
              : 'Markets'}
        </div>
        {metric === 'change' ? (
          <div className="flex items-center gap-3 font-mono">
            <span className="flex items-center gap-1">
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: 'var(--accent-green)' }}
              />
              Up
            </span>
            <span className="flex items-center gap-1">
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: 'var(--accent-red)' }}
              />
              Down
            </span>
          </div>
        ) : metric === 'price' ? (
          <div className="flex items-center gap-2 font-mono">
            <span style={{ color: 'var(--accent-cyan)' }}>Low</span>
            <span
              className="h-1.5 w-20 rounded-full"
              style={{
                background:
                  'linear-gradient(90deg, var(--accent-cyan), var(--accent-blue), var(--accent-amber))',
              }}
            />
            <span style={{ color: 'var(--accent-amber)' }}>High</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 font-mono">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: 'var(--accent-blue)' }}
            />
            <span>{cities.length} cities</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default IndiaMap;
