import { pgTable, uuid, text, numeric, integer, timestamp, boolean } from 'drizzle-orm/pg-core';

export const markets = pgTable('markets', {
  id: uuid('id').defaultRandom().primaryKey(),
  city: text('city').notNull(),
  microMarket: text('micro_market').notNull(),
  state: text('state').notNull(),
  tier: integer('tier').notNull(),                       // 1, 2, or 3
  latitude: numeric('latitude').notNull(),
  longitude: numeric('longitude').notNull(),
  population: integer('population'),
  // Market health metrics (updated daily/weekly)
  healthIndex: numeric('health_index'),                  // 0-100 composite score
  medianPricePerSqFt: numeric('median_price_per_sqft'), // INR per sq ft
  priceChangeYoY: numeric('price_change_yoy'),           // percentage
  priceChangeMoM: numeric('price_change_mom'),           // percentage
  activeListings: integer('active_listings'),
  newLaunches30d: integer('new_launches_30d'),
  unsoldInventory: integer('unsold_inventory'),
  monthsOfInventory: numeric('months_of_inventory'),     // unsold / monthly absorption
  reraProjects: integer('rera_projects'),
  avgAqi: numeric('avg_aqi'),
  metroConnectivity: boolean('metro_connectivity'),
  nearestAirportKm: numeric('nearest_airport_km'),
  avgRentalYield: numeric('avg_rental_yield'),           // percentage
  updatedAt: timestamp('updated_at').defaultNow(),
});
