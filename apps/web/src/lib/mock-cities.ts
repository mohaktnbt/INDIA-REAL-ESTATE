import type { CityPoint } from '@/components/maps/IndiaMap';

/**
 * Mock dataset of ~25 major Indian cities with real lat/lng coordinates,
 * realistic median price (₹/sq ft) and YoY % change.
 *
 * Used for the landing-page India map and development previews until the
 * real market indicators pipeline from `packages/db` is wired up.
 */
export const mockCityPoints: CityPoint[] = [
  // Tier 1 — metros
  { name: 'Mumbai',      latitude: 19.0760, longitude: 72.8777, priceIndex: 18500, change:  7.2, tier: 1 },
  { name: 'Delhi',       latitude: 28.6139, longitude: 77.2090, priceIndex: 12800, change:  5.8, tier: 1 },
  { name: 'Bangalore',   latitude: 12.9716, longitude: 77.5946, priceIndex:  9200, change: 12.5, tier: 1 },
  { name: 'Hyderabad',   latitude: 17.3850, longitude: 78.4867, priceIndex:  7800, change: 15.3, tier: 1 },
  { name: 'Chennai',     latitude: 13.0827, longitude: 80.2707, priceIndex:  7200, change:  6.8, tier: 1 },
  { name: 'Pune',        latitude: 18.5204, longitude: 73.8567, priceIndex:  7500, change:  9.4, tier: 1 },
  { name: 'Kolkata',     latitude: 22.5726, longitude: 88.3639, priceIndex:  5800, change:  4.2, tier: 1 },
  { name: 'Ahmedabad',   latitude: 23.0225, longitude: 72.5714, priceIndex:  5200, change:  8.1, tier: 1 },

  // Tier 2 — major non-metros
  { name: 'Jaipur',             latitude: 26.9124, longitude: 75.7873, priceIndex: 4800, change:  6.5, tier: 2 },
  { name: 'Lucknow',            latitude: 26.8467, longitude: 80.9462, priceIndex: 4300, change:  5.1, tier: 2 },
  { name: 'Chandigarh',         latitude: 30.7333, longitude: 76.7794, priceIndex: 6100, change:  4.8, tier: 2 },
  { name: 'Kochi',              latitude:  9.9312, longitude: 76.2673, priceIndex: 5400, change:  7.9, tier: 2 },
  { name: 'Indore',             latitude: 22.7196, longitude: 75.8577, priceIndex: 4100, change:  9.2, tier: 2 },
  { name: 'Nagpur',             latitude: 21.1458, longitude: 79.0882, priceIndex: 3900, change:  3.7, tier: 2 },
  { name: 'Coimbatore',         latitude: 11.0168, longitude: 76.9558, priceIndex: 4500, change:  6.3, tier: 2 },
  { name: 'Visakhapatnam',      latitude: 17.6868, longitude: 83.2185, priceIndex: 4700, change: 10.1, tier: 2 },
  { name: 'Bhopal',             latitude: 23.2599, longitude: 77.4126, priceIndex: 3600, change:  4.4, tier: 2 },
  { name: 'Vadodara',           latitude: 22.3072, longitude: 73.1812, priceIndex: 4200, change:  5.9, tier: 2 },
  { name: 'Thiruvananthapuram', latitude:  8.5241, longitude: 76.9366, priceIndex: 4900, change:  5.5, tier: 2 },

  // Tier 3 — emerging
  { name: 'Patna',      latitude: 25.5941, longitude: 85.1376, priceIndex: 3200, change:  2.9, tier: 3 },
  { name: 'Bhubaneswar',latitude: 20.2961, longitude: 85.8245, priceIndex: 3800, change:  6.7, tier: 3 },
  { name: 'Guwahati',   latitude: 26.1445, longitude: 91.7362, priceIndex: 3500, change:  4.1, tier: 3 },
  { name: 'Dehradun',   latitude: 30.3165, longitude: 78.0322, priceIndex: 4600, change:  5.2, tier: 3 },
  { name: 'Mysuru',     latitude: 12.2958, longitude: 76.6394, priceIndex: 3700, change:  7.4, tier: 3 },
  { name: 'Ranchi',     latitude: 23.3441, longitude: 85.3096, priceIndex: 3100, change: -1.2, tier: 3 },
];
