/**
 * Format a number as Indian currency with lakh/crore notation.
 *
 * Examples:
 *   formatIndianCurrency(1500)        → "₹1,500"
 *   formatIndianCurrency(85000)       → "₹85,000"
 *   formatIndianCurrency(4500000)     → "₹45 L"
 *   formatIndianCurrency(15000000)    → "₹1.5 Cr"
 *   formatIndianCurrency(250000000)   → "₹25 Cr"
 *   formatIndianCurrency(1200000000)  → "₹120 Cr"
 */
export function formatIndianCurrency(amount: number): string {
  const abs = Math.abs(amount);
  const sign = amount < 0 ? '-' : '';

  if (abs >= 1_00_00_000) {
    // Crores (1 Cr = 10,000,000)
    const crores = abs / 1_00_00_000;
    const formatted = crores >= 100
      ? `${Math.round(crores)}`
      : crores >= 10
        ? `${Math.round(crores * 10) / 10}`
        : `${Math.round(crores * 100) / 100}`;
    return `${sign}₹${formatted} Cr`;
  }

  if (abs >= 1_00_000) {
    // Lakhs (1 L = 100,000)
    const lakhs = abs / 1_00_000;
    const formatted = lakhs >= 100
      ? `${Math.round(lakhs)}`
      : lakhs >= 10
        ? `${Math.round(lakhs * 10) / 10}`
        : `${Math.round(lakhs * 100) / 100}`;
    return `${sign}₹${formatted} L`;
  }

  // Below 1 lakh — use Indian comma grouping
  return `${sign}₹${formatIndianNumber(abs)}`;
}

/**
 * Format a number with Indian comma grouping (lakhs and crores).
 *
 * Examples:
 *   formatIndianNumber(1234)       → "1,234"
 *   formatIndianNumber(12345)      → "12,345"
 *   formatIndianNumber(1234567)    → "12,34,567"
 *   formatIndianNumber(123456789)  → "12,34,56,789"
 */
export function formatIndianNumber(num: number): string {
  const str = Math.round(num).toString();

  if (str.length <= 3) {
    return str;
  }

  // Last 3 digits get a comma before them, then groups of 2
  const lastThree = str.slice(-3);
  const remaining = str.slice(0, -3);

  // Insert commas every 2 digits from right in the remaining part
  const withCommas = remaining.replace(/\B(?=(\d{2})+(?!\d))/g, ',');

  return `${withCommas},${lastThree}`;
}

/**
 * Format price per square foot.
 *
 * Examples:
 *   formatPricePerSqFt(8500)   → "₹8,500/sq ft"
 *   formatPricePerSqFt(15200)  → "₹15,200/sq ft"
 */
export function formatPricePerSqFt(price: number): string {
  return `₹${formatIndianNumber(price)}/sq ft`;
}

/**
 * Format area in square feet with comma separation.
 *
 * Examples:
 *   formatArea(1250)  → "1,250 sq ft"
 *   formatArea(45000) → "45,000 sq ft"
 */
export function formatArea(sqft: number): string {
  return `${formatIndianNumber(sqft)} sq ft`;
}

/**
 * Format a percentage change with sign and 2 decimal places.
 *
 * Examples:
 *   formatChangePercent(5.235)  → "+5.24%"
 *   formatChangePercent(-3.1)   → "-3.10%"
 *   formatChangePercent(0)      → "0.00%"
 */
export function formatChangePercent(change: number): string {
  const sign = change > 0 ? '+' : '';
  return `${sign}${change.toFixed(2)}%`;
}

/**
 * Return a human-readable "time ago" string.
 *
 * Examples:
 *   timeAgo(new Date(Date.now() - 30_000))         → "30s ago"
 *   timeAgo(new Date(Date.now() - 2 * 3600_000))   → "2h ago"
 *   timeAgo(new Date(Date.now() - 3 * 86400_000))  → "3d ago"
 */
export function timeAgo(date: Date): string {
  const now = Date.now();
  const diffMs = now - date.getTime();

  if (diffMs < 0) return 'just now';

  const seconds = Math.floor(diffMs / 1000);
  if (seconds < 60) return `${seconds}s ago`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;

  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;

  const years = Math.floor(months / 12);
  return `${years}y ago`;
}

/**
 * Convert arbitrary text to a URL-safe slug.
 *
 * Examples:
 *   slugify("Hello World!")       → "hello-world"
 *   slugify("Bandra (West)")      → "bandra-west"
 *   slugify("DLF Phase 5")        → "dlf-phase-5"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')  // remove non-word chars except spaces and hyphens
    .replace(/[\s_]+/g, '-')   // replace spaces and underscores with hyphens
    .replace(/-+/g, '-')       // collapse consecutive hyphens
    .replace(/^-+|-+$/g, '');  // trim leading/trailing hyphens
}

/**
 * Convert a city name to a URL slug.
 *
 * Examples:
 *   cityToSlug("New Delhi")       → "new-delhi"
 *   cityToSlug("Navi Mumbai")     → "navi-mumbai"
 *   cityToSlug("Visakhapatnam")   → "visakhapatnam"
 */
export function cityToSlug(city: string): string {
  return slugify(city);
}

/**
 * Generate a UUID v4 string.
 */
export function generateId(): string {
  // Use crypto.randomUUID where available (Node 19+, modern browsers)
  if (typeof globalThis.crypto?.randomUUID === 'function') {
    return globalThis.crypto.randomUUID();
  }

  // Fallback: manual UUID v4 generation
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Clamp a value between min and max (inclusive).
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Return a CSS variable name representing the health of a 0-100 score.
 *
 *   80-100 → "var(--accent-green)"
 *   60-79  → "var(--accent-blue)"
 *   40-59  → "var(--accent-amber)"
 *   0-39   → "var(--accent-red)"
 */
export function getHealthColor(score: number): string {
  if (score >= 80) return 'var(--accent-green)';
  if (score >= 60) return 'var(--accent-blue)';
  if (score >= 40) return 'var(--accent-amber)';
  return 'var(--accent-red)';
}

/**
 * Return a CSS variable name for a price change value.
 *
 *   positive → "var(--accent-green)"
 *   zero     → "var(--text-secondary)"
 *   negative → "var(--accent-red)"
 */
export function getPriceChangeColor(change: number): string {
  if (change > 0) return 'var(--accent-green)';
  if (change < 0) return 'var(--accent-red)';
  return 'var(--text-secondary)';
}
