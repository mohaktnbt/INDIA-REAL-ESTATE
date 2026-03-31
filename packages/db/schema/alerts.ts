import { pgTable, uuid, text, timestamp, jsonb, boolean } from 'drizzle-orm/pg-core';

export const alerts = pgTable('alerts', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id'),                             // anonymous or authenticated user ID
  type: text('type').notNull(),                        // 'price' | 'rera' | 'news' | 'stock'
  target: text('target').notNull(),                    // city, micro-market, developer, RERA ID, stock symbol
  condition: jsonb('condition').notNull(),              // { field: string, operator: string, value: number|string }
  channel: text('channel').notNull(),                  // 'telegram' | 'whatsapp' | 'email' | 'web'
  isActive: boolean('is_active').default(true),
  lastTriggered: timestamp('last_triggered'),
  createdAt: timestamp('created_at').defaultNow(),
});
