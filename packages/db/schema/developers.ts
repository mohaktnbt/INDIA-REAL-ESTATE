import { pgTable, uuid, text, numeric, integer, timestamp, jsonb } from 'drizzle-orm/pg-core';

export const developers = pgTable('developers', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  type: text('type'),                                  // 'listed' | 'private' | 'govt'
  nseSymbol: text('nse_symbol'),                       // For listed developers (e.g., 'DLF', 'GODREJPROP')
  reraRegistrations: jsonb('rera_registrations'),       // Array of { state: string, reraId: string }
  headquarters: text('headquarters'),
  foundedYear: integer('founded_year'),
  totalProjects: integer('total_projects'),
  activeProjects: integer('active_projects'),
  completedProjects: integer('completed_projects'),
  delayedProjects: integer('delayed_projects'),
  totalAreaDeveloped: numeric('total_area_developed'),  // sq ft
  ibbCases: integer('ibb_cases').default(0),           // IBC/NCLT insolvency cases
  healthScore: numeric('health_score'),                 // 0-100 composite score
  metadata: jsonb('metadata'),
  updatedAt: timestamp('updated_at').defaultNow(),
});
