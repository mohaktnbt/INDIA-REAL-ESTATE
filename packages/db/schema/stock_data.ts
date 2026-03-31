import { pgTable, text, numeric, timestamp } from 'drizzle-orm/pg-core';

/**
 * TimescaleDB hypertable for stock/REIT price data.
 *
 * After table creation, run the following SQL to enable TimescaleDB features:
 *
 *   SELECT create_hypertable('stock_data', 'time');
 *   CREATE INDEX idx_sd_symbol_time ON stock_data (symbol, time DESC);
 */
export const stockData = pgTable('stock_data', {
  time: timestamp('time').notNull(),
  symbol: text('symbol').notNull(),                    // 'DLF' | 'GODREJPROP' | 'NIFTYREALTY' | 'EMBASSYREIT' | etc.
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  marketCap: numeric('market_cap'),
});
