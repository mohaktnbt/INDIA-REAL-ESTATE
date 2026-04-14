import { pgTable, text, numeric, integer, timestamp } from 'drizzle-orm/pg-core';

/**
 * TimescaleDB hypertable for price history time-series data.
 *
 * After table creation, run the following SQL to enable TimescaleDB features:
 *
 *   SELECT create_hypertable('price_history', 'time');
 *   CREATE INDEX idx_ph_city_time ON price_history (city, time DESC);
 *   CREATE INDEX idx_ph_micro_time ON price_history (micro_market, time DESC);
 */
export const priceHistory = pgTable('price_history', {
  time: timestamp('time').notNull(),
  city: text('city').notNull(),
  microMarket: text('micro_market').notNull(),
  propertyType: text('property_type').notNull(),       // 'apartment' | 'villa' | 'plot' | 'commercial'
  bhkConfig: text('bhk_config'),                       // '1BHK' | '2BHK' | '3BHK' | etc.
  medianPrice: numeric('median_price'),                // INR
  medianPricePerSqFt: numeric('median_price_per_sqft'),// INR per sq ft
  listingCount: integer('listing_count'),
  avgDaysOnMarket: numeric('avg_days_on_market'),
  source: text('source').notNull(),                    // '99acres' | 'magicbricks' | 'nobroker' | 'aggregated'
});
