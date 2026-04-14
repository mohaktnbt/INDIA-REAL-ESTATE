import { pgTable, uuid, text, numeric, integer, timestamp, jsonb, boolean } from 'drizzle-orm/pg-core';
import { developers } from './developers.js';

export const properties = pgTable('properties', {
  id: uuid('id').defaultRandom().primaryKey(),
  source: text('source').notNull(),                    // '99acres' | 'magicbricks' | 'nobroker' | 'housing'
  sourceId: text('source_id').notNull(),               // Original listing ID
  title: text('title').notNull(),
  propertyType: text('property_type').notNull(),       // 'apartment' | 'villa' | 'plot' | 'commercial'
  transactionType: text('transaction_type').notNull(), // 'sale' | 'rent' | 'resale'
  bhkConfig: text('bhk_config'),                       // '1BHK' | '2BHK' | '3BHK' | '4BHK' | '5BHK+'
  carpetArea: numeric('carpet_area'),                  // sq ft
  builtUpArea: numeric('built_up_area'),               // sq ft
  superBuiltUpArea: numeric('super_built_up_area'),    // sq ft
  price: numeric('price'),                             // INR
  pricePerSqFt: numeric('price_per_sqft'),             // INR per sq ft
  city: text('city').notNull(),
  microMarket: text('micro_market'),
  locality: text('locality'),
  pincode: text('pincode'),
  latitude: numeric('latitude'),
  longitude: numeric('longitude'),
  developerId: uuid('developer_id').references(() => developers.id),
  reraId: text('rera_id'),
  floor: integer('floor'),
  totalFloors: integer('total_floors'),
  facing: text('facing'),                              // 'North' | 'South' | 'East' | 'West' | 'NE' | 'NW' | 'SE' | 'SW'
  furnishing: text('furnishing'),                      // 'unfurnished' | 'semi-furnished' | 'fully-furnished'
  parking: integer('parking'),
  amenities: jsonb('amenities'),                       // Array of amenity strings
  possessionDate: timestamp('possession_date'),
  isVerified: boolean('is_verified').default(false),
  listedAt: timestamp('listed_at'),
  scrapedAt: timestamp('scraped_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
