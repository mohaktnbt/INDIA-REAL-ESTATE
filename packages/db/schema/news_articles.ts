import { pgTable, uuid, text, numeric, timestamp, jsonb, boolean } from 'drizzle-orm/pg-core';

export const newsArticles = pgTable('news_articles', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  url: text('url').notNull().unique(),
  source: text('source').notNull(),                    // 'ET Realty' | 'Moneycontrol' | 'LiveMint' | etc.
  publishedAt: timestamp('published_at'),
  summary: text('summary'),                            // AI-generated summary
  cities: jsonb('cities'),                             // Array of extracted city mentions
  developers: jsonb('developers'),                     // Array of extracted developer mentions
  sentiment: numeric('sentiment'),                     // -1 to +1
  category: text('category'),                          // 'policy' | 'market' | 'project' | 'legal'
  isBreaking: boolean('is_breaking').default(false),
  scrapedAt: timestamp('scraped_at').defaultNow(),
});
