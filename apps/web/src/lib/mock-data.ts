/**
 * Deterministic mock datasets for chart components.
 *
 * These are used until the real TimescaleDB-backed market indicators pipeline
 * is wired up. All datasets are generated with a seeded pseudo-random number
 * generator so values are stable across renders / SSR hydration.
 */

export interface PriceTrendPoint {
  month: string; // '2023-01' format
  [city: string]: number | string;
}

export interface VolumePoint {
  month: string; // '2023-01' format
  [city: string]: number | string;
}

export interface CityComparisonPoint {
  city: string;
  value: number; // median price per sq ft
  change: number; // YoY % change
}

// ---------- seeded RNG helpers ----------

/**
 * Mulberry32 — tiny deterministic PRNG, good enough for mock data.
 */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return function rng() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pad2(n: number): string {
  return n < 10 ? `0${n}` : String(n);
}

function monthKey(year: number, month1to12: number): string {
  return `${year}-${pad2(month1to12)}`;
}

// ---------- cities ----------

export const MOCK_CITIES = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  'Pune',
  'Kolkata',
  'Ahmedabad',
] as const;

export type MockCity = (typeof MOCK_CITIES)[number];

const CITY_START_PRICES: Record<MockCity, number> = {
  Mumbai: 18000,
  Delhi: 12500,
  Bangalore: 8500,
  Hyderabad: 7000,
  Chennai: 6800,
  Pune: 7200,
  Kolkata: 5500,
  Ahmedabad: 4900,
};

// Baseline monthly growth by city (mean), with some cities hotter than others.
const CITY_GROWTH_MEAN: Record<MockCity, number> = {
  Mumbai: 0.0055,
  Delhi: 0.0048,
  Bangalore: 0.0095,
  Hyderabad: 0.0110,
  Chennai: 0.0052,
  Pune: 0.0075,
  Kolkata: 0.0035,
  Ahmedabad: 0.0065,
};

// Per-city volatility (std-dev-ish) for MoM noise.
const CITY_VOL: Record<MockCity, number> = {
  Mumbai: 0.004,
  Delhi: 0.0045,
  Bangalore: 0.0055,
  Hyderabad: 0.006,
  Chennai: 0.0042,
  Pune: 0.005,
  Kolkata: 0.0038,
  Ahmedabad: 0.0045,
};

// ---------- mockPriceTrendData ----------

/**
 * 36 months of median price per sq ft for 8 cities, Jan-2023 through Dec-2025.
 * Growth is seeded so values are deterministic but varied.
 */
export const mockPriceTrendData: PriceTrendPoint[] = (() => {
  const points: PriceTrendPoint[] = [];
  const rng = mulberry32(0xA17C0DE1);

  // Working values mutated month-over-month.
  const current: Record<MockCity, number> = { ...CITY_START_PRICES };

  let year = 2023;
  let month = 1;

  for (let i = 0; i < 36; i += 1) {
    const entry: PriceTrendPoint = { month: monthKey(year, month) };

    for (const city of MOCK_CITIES) {
      if (i > 0) {
        const mean = CITY_GROWTH_MEAN[city];
        const vol = CITY_VOL[city];
        // noise in [-vol, +vol]
        const noise = (rng() * 2 - 1) * vol;
        // Occasional slight pullback months
        const pullback = rng() < 0.08 ? -Math.abs(mean) * 0.6 : 0;
        const growth = mean + noise + pullback;
        current[city] = Math.max(1000, current[city] * (1 + growth));
      }
      entry[city] = Math.round(current[city]);
    }

    points.push(entry);

    month += 1;
    if (month > 12) {
      month = 1;
      year += 1;
    }
  }

  return points;
})();

// ---------- mockVolumeData ----------

/**
 * 12 months of transaction volumes (count of registered transactions)
 * per city for Jan-2025 through Dec-2025. Values in the 2,000 – 15,000 range.
 */
export const mockVolumeData: VolumePoint[] = (() => {
  const points: VolumePoint[] = [];
  const rng = mulberry32(0xBEEF1234);

  // Per-city baseline monthly volume.
  const baseline: Record<MockCity, number> = {
    Mumbai: 12500,
    Delhi: 10500,
    Bangalore: 11000,
    Hyderabad: 8500,
    Chennai: 6500,
    Pune: 7500,
    Kolkata: 4500,
    Ahmedabad: 5200,
  };

  // Seasonal multipliers — festive season Q4 bump, weak Q1, etc.
  const seasonal = [
    0.85, 0.88, 1.02, 0.98, 1.05, 1.0, 0.95, 0.92, 1.08, 1.18, 1.22, 1.12,
  ];

  for (let i = 0; i < 12; i += 1) {
    const year = 2025;
    const month = i + 1;
    const entry: VolumePoint = { month: monthKey(year, month) };

    for (const city of MOCK_CITIES) {
      const season = seasonal[i] ?? 1;
      const noise = 0.85 + rng() * 0.3; // ±15% noise
      const raw = baseline[city] * season * noise;
      const clamped = Math.max(2000, Math.min(15000, raw));
      entry[city] = Math.round(clamped);
    }

    points.push(entry);
  }

  return points;
})();

// ---------- mockCityComparisonData ----------

/**
 * Top 15 Indian cities with current median ₹/sq ft and YoY % change.
 * Used by the `CityComparisonChart`.
 */
export const mockCityComparisonData: CityComparisonPoint[] = [
  { city: 'Mumbai',       value: 19_850, change:  7.2 },
  { city: 'Delhi NCR',    value: 13_420, change:  5.8 },
  { city: 'Bangalore',    value:  9_680, change: 12.5 },
  { city: 'Hyderabad',    value:  8_120, change: 15.3 },
  { city: 'Pune',         value:  7_950, change:  9.4 },
  { city: 'Chennai',      value:  7_280, change:  6.8 },
  { city: 'Kolkata',      value:  5_980, change:  4.2 },
  { city: 'Ahmedabad',    value:  5_410, change:  8.1 },
  { city: 'Chandigarh',   value:  6_250, change:  4.8 },
  { city: 'Jaipur',       value:  4_920, change:  6.5 },
  { city: 'Kochi',        value:  5_480, change:  7.9 },
  { city: 'Lucknow',      value:  4_410, change:  5.1 },
  { city: 'Coimbatore',   value:  4_560, change:  6.3 },
  { city: 'Indore',       value:  4_180, change:  9.2 },
  { city: 'Nagpur',       value:  3_940, change: -1.8 },
];

// ---------- mockSentimentScore ----------

/**
 * Composite market sentiment score (0-100). ~72 = bullish.
 */
export const mockSentimentScore = 72;
