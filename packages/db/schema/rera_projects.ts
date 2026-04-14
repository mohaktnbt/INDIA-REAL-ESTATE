import { pgTable, uuid, text, numeric, integer, timestamp, jsonb } from 'drizzle-orm/pg-core';

export const reraProjects = pgTable('rera_projects', {
  id: uuid('id').defaultRandom().primaryKey(),
  reraNumber: text('rera_number').notNull().unique(),
  state: text('state').notNull(),
  projectName: text('project_name').notNull(),
  promoterName: text('promoter_name').notNull(),
  promoterType: text('promoter_type'),                 // 'individual' | 'company' | 'partnership'
  projectType: text('project_type'),                   // 'residential' | 'commercial' | 'mixed'
  district: text('district'),
  taluka: text('taluka'),
  village: text('village'),
  pincode: text('pincode'),
  latitude: numeric('latitude'),
  longitude: numeric('longitude'),
  totalUnits: integer('total_units'),
  totalArea: numeric('total_area'),                    // sq meters
  approvedDate: timestamp('approved_date'),
  completionDate: timestamp('completion_date'),
  extendedDate: timestamp('extended_date'),
  status: text('status'),                              // 'active' | 'completed' | 'lapsed' | 'revoked'
  bankAccountDetails: jsonb('bank_account_details'),
  complaints: integer('complaints').default(0),
  qprData: jsonb('qpr_data'),                         // Quarterly Progress Report JSON
  rawData: jsonb('raw_data'),                          // Full scraped JSON
  scrapedAt: timestamp('scraped_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
