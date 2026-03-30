# INDIA REAL ESTATE MONITOR — Claude Code Master Prompt

## Project Identity

**Name:** India Real Estate Monitor (IREM)
**Tagline:** "Bloomberg Terminal for Indian Real Estate"
**Repo:** `mohaktnbt/india-re-monitor`
**Live URL target:** `indiaremonitor.app`
**Inspiration:** https://www.worldmonitor.app / https://github.com/koala73/worldmonitor
**Goal:** The most comprehensive, data-heavy, real-time India real estate intelligence dashboard ever built — covering every data source, every city, every micro-market.

---

## Tech Stack (Non-Negotiable)

| Layer | Technology | Why |
|-------|-----------|-----|
| **Framework** | Next.js 15 (App Router, TypeScript) | SSR/SSG for SEO, React ecosystem, API routes |
| **Styling** | Tailwind CSS 4 + CSS variables for theming | Dark-first dashboard, rapid iteration |
| **Maps** | MapLibre GL JS + deck.gl + PMTiles (self-hosted) | WorldMonitor pattern; GPU-accelerated layers |
| **Charts** | Apache ECharts (primary) + TradingView Lightweight Charts (stocks) | ECharts has India map support; TV charts for candlesticks |
| **Data Tables** | AG Grid Community | Virtual scrolling, column pinning, Excel export |
| **Database** | PostgreSQL 16 + TimescaleDB + PostGIS (via Supabase) | Single DB for relational + time-series + geospatial |
| **Cache** | Redis (Upstash serverless) | API caching, rate limiting, pub/sub |
| **Search** | Meilisearch (self-hosted) | Fast fuzzy Hindi/English search, faceted filters |
| **Scraping** | Playwright (gov portals) + Scrapy (listing sites) | JS-heavy RERA portals need Playwright |
| **Orchestration** | Dagster (asset-based pipelines) | Observable, testable, sensor-driven scheduling |
| **AI/LLM** | Claude API (analysis/briefs) + Groq Llama 3.3 (fast inference) | Claude for deep reasoning; Groq for speed |
| **Notifications** | Telegram Bot API (free) + WhatsApp Business API (paid) | 487M+ Indian WhatsApp users |
| **Stock Data** | Angel One SmartAPI (free WebSocket) + jugaad-data (RBI/NSE) | Real-time Indian stocks at zero cost |
| **Hosting** | Hostinger VPS (168.231.103.49) + Vercel (frontend) | VPS for scrapers/Dagster; Vercel for Next.js |
| **CI/CD** | GitHub Actions | Auto-deploy on push to main |
| **Container** | Docker Compose (dev) + Docker (VPS services) | Reproducible local dev + prod deployment |

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                    FRONTEND (Next.js 15)                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────┐ │
│  │ MapLibre  │ │ ECharts  │ │ AG Grid  │ │ TV Charts  │ │
│  │ + deck.gl │ │ dashlets │ │  tables  │ │  stocks    │ │
│  └──────────┘ └──────────┘ └──────────┘ └────────────┘ │
│  ┌──────────────────────────────────────────────────┐   │
│  │          Zustand (global state) + React Query     │   │
│  └──────────────────────────────────────────────────┘   │
└──────────────────────┬──────────────────────────────────┘
                       │ REST + WebSocket
┌──────────────────────┴──────────────────────────────────┐
│                 API LAYER (Next.js API Routes)           │
│  /api/properties  /api/markets  /api/rera  /api/stocks  │
│  /api/news        /api/alerts   /api/ai    /api/maps    │
└──────────────────────┬──────────────────────────────────┘
                       │
┌──────────────────────┴──────────────────────────────────┐
│              DATA LAYER (PostgreSQL + TimescaleDB)        │
│  ┌─────────┐ ┌────────────┐ ┌─────────┐ ┌───────────┐  │
│  │ PostGIS │ │ TimescaleDB│ │  Redis  │ │Meilisearch│  │
│  │  (geo)  │ │ (prices)   │ │ (cache) │ │ (search)  │  │
│  └─────────┘ └────────────┘ └─────────┘ └───────────┘  │
└──────────────────────┬──────────────────────────────────┘
                       │
┌──────────────────────┴──────────────────────────────────┐
│             INGESTION LAYER (Dagster + Scrapers)         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────────┐  │
│  │Playwright│ │  Scrapy   │ │  APIs    │ │  RSS/NLP  │  │
│  │ (RERA,   │ │ (99acres, │ │ (RBI,   │ │ (news     │  │
│  │  IGRS)   │ │  MB, NB)  │ │  NSE)   │ │  feeds)   │  │
│  └──────────┘ └──────────┘ └──────────┘ └───────────┘  │
└─────────────────────────────────────────────────────────┘
```

---

## Directory Structure

```
india-re-monitor/
├── CLAUDE.md                      # This file — master context for Claude Code
├── AGENTS.md                      # ClawTeam parallel agent definitions
├── TODO.md                        # Manual tasks for the human operator
├── TIMELINE.md                    # Session-persistent build progress tracker
├── docker-compose.yml             # Local dev: postgres+timescale, redis, meilisearch
├── .env.example                   # Template for all API keys and secrets
├── .github/
│   └── workflows/
│       ├── deploy-frontend.yml    # Vercel deploy on push
│       └── deploy-scrapers.yml    # VPS deploy for scraper services
├── apps/
│   └── web/                       # Next.js 15 frontend
│       ├── next.config.ts
│       ├── tailwind.config.ts
│       ├── package.json
│       ├── public/
│       │   ├── india.pmtiles       # Self-hosted India map tiles
│       │   └── fonts/              # Custom dashboard fonts
│       └── src/
│           ├── app/
│           │   ├── layout.tsx       # Root layout with providers
│           │   ├── page.tsx         # Landing / main dashboard
│           │   ├── (dashboard)/
│           │   │   ├── overview/    # Market overview page
│           │   │   ├── map/         # Full-screen map explorer
│           │   │   ├── markets/     # City/micro-market drill-down
│           │   │   ├── rera/        # RERA project explorer
│           │   │   ├── stocks/      # Nifty Realty + REITs tracker
│           │   │   ├── developers/  # Developer profiles & health
│           │   │   ├── compare/     # Side-by-side comparisons
│           │   │   ├── news/        # AI-curated news feed
│           │   │   └── alerts/      # Watchlist & alert config
│           │   └── api/
│           │       ├── properties/
│           │       ├── markets/
│           │       ├── rera/
│           │       ├── stocks/
│           │       ├── news/
│           │       ├── alerts/
│           │       ├── search/
│           │       └── ai/
│           ├── components/
│           │   ├── layout/          # Sidebar, TopBar, CommandPalette
│           │   ├── maps/            # MapView, HeatmapLayer, RERALayer
│           │   ├── charts/          # PriceChart, VolumeChart, IndexChart
│           │   ├── tables/          # PropertyTable, RERATable, StockTable
│           │   ├── cards/           # MetricCard, CityCard, DeveloperCard
│           │   ├── widgets/         # MicroMarketHealth, EMICalculator
│           │   └── ui/              # Shared primitives (Button, Modal, etc.)
│           ├── lib/
│           │   ├── db.ts            # Supabase/Drizzle ORM client
│           │   ├── redis.ts         # Upstash Redis client
│           │   ├── search.ts        # Meilisearch client
│           │   ├── maps.ts          # MapLibre + deck.gl setup
│           │   ├── echarts.ts       # ECharts theme + helpers
│           │   ├── stocks.ts        # Angel One WebSocket + jugaad-data
│           │   ├── ai.ts            # Claude + Groq API wrappers
│           │   └── constants.ts     # Cities, micro-markets, enums
│           ├── hooks/
│           │   ├── useMarketData.ts
│           │   ├── useStockFeed.ts
│           │   ├── useMapLayers.ts
│           │   └── useAlerts.ts
│           ├── stores/
│           │   └── dashboard.ts     # Zustand store
│           └── types/
│               ├── property.ts
│               ├── market.ts
│               ├── rera.ts
│               └── stock.ts
├── packages/
│   ├── db/                          # Drizzle ORM schema + migrations
│   │   ├── schema/
│   │   │   ├── properties.ts
│   │   │   ├── markets.ts
│   │   │   ├── rera_projects.ts
│   │   │   ├── developers.ts
│   │   │   ├── price_history.ts     # TimescaleDB hypertable
│   │   │   ├── news_articles.ts
│   │   │   └── alerts.ts
│   │   ├── migrations/
│   │   └── seed/
│   │       ├── cities.ts            # 50+ cities with coordinates
│   │       ├── micro_markets.ts     # 500+ micro-markets
│   │       └── developers.ts        # Top 200 developers
│   └── shared/                      # Shared types, utils, constants
│       ├── types.ts
│       ├── cities.ts                # City metadata, coordinates, tiers
│       └── utils.ts
├── services/
│   ├── scrapers/
│   │   ├── rera/
│   │   │   ├── maharera.py          # Maharashtra RERA scraper
│   │   │   ├── uprera.py            # UP RERA scraper
│   │   │   ├── karnataka_rera.py    # Karnataka RERA scraper
│   │   │   ├── telangana_rera.py    # Telangana RERA scraper
│   │   │   └── base_rera.py         # Abstract base class
│   │   ├── listings/
│   │   │   ├── acres99.py           # 99acres via Apify
│   │   │   ├── magicbricks.py       # MagicBricks via Apify
│   │   │   ├── nobroker.py          # NoBroker API + scraper
│   │   │   └── housing_com.py       # Housing.com via Apify
│   │   ├── government/
│   │   │   ├── nhb_residex.py       # NHB RESIDEX price index
│   │   │   ├── rbi_housing.py       # RBI housing data via DBIE
│   │   │   ├── data_gov.py          # data.gov.in API wrapper
│   │   │   ├── cpcb_aqi.py          # Air quality API
│   │   │   └── pmay.py              # PMAY dashboard scraper
│   │   ├── financial/
│   │   │   ├── nse_realty.py         # Nifty Realty + RE stocks
│   │   │   ├── reit_tracker.py      # 5 listed REITs data
│   │   │   ├── home_loan_rates.py   # Bank website scraper
│   │   │   └── construction_costs.py # Cement, steel, sand prices
│   │   └── alternative/
│   │       ├── google_trends.py     # pytrends for RE search terms
│   │       ├── news_rss.py          # 100+ India RE news feeds
│   │       └── gdelt_sentiment.py   # GDELT news sentiment
│   ├── pipelines/
│   │   ├── dagster_home.py          # Dagster repository definition
│   │   ├── assets/
│   │   │   ├── rera_assets.py       # RERA data pipeline assets
│   │   │   ├── listing_assets.py    # Property listing assets
│   │   │   ├── market_assets.py     # Market indicators assets
│   │   │   ├── stock_assets.py      # Stock/REIT data assets
│   │   │   └── news_assets.py       # News ingestion assets
│   │   ├── sensors/
│   │   │   ├── market_hours.py      # Trigger stock jobs during NSE hours
│   │   │   └── new_rera_filings.py  # Detect new RERA registrations
│   │   └── schedules/
│   │       ├── daily.py             # Daily: listings, news, AQI, stocks
│   │       ├── weekly.py            # Weekly: RERA, home loan rates
│   │       └── quarterly.py         # Quarterly: NHB RESIDEX, macro data
│   └── ai/
│       ├── morning_brief.py         # Daily AI market brief generator
│       ├── market_health.py         # Micro-Market Health Index calculator
│       ├── price_predictor.py       # XGBoost price prediction model
│       └── news_classifier.py       # Classify news by city/topic/sentiment
└── infra/
    ├── docker/
    │   ├── Dockerfile.scrapers
    │   ├── Dockerfile.dagster
    │   └── Dockerfile.meilisearch
    ├── nginx/
    │   └── india-re-monitor.conf
    └── scripts/
        ├── setup-vps.sh             # VPS initial setup script
        ├── deploy-scrapers.sh       # Deploy scraper services
        └── import-pmtiles.sh        # Download + convert India OSM tiles
```

---

## Database Schema (Drizzle ORM + PostgreSQL + TimescaleDB + PostGIS)

### Core Tables

```typescript
// packages/db/schema/properties.ts
import { pgTable, uuid, text, numeric, integer, timestamp, jsonb, boolean } from 'drizzle-orm/pg-core';

export const properties = pgTable('properties', {
  id: uuid('id').defaultRandom().primaryKey(),
  source: text('source').notNull(),                // '99acres' | 'magicbricks' | 'nobroker' | 'housing'
  sourceId: text('source_id').notNull(),            // Original listing ID
  title: text('title').notNull(),
  propertyType: text('property_type').notNull(),    // 'apartment' | 'villa' | 'plot' | 'commercial'
  transactionType: text('transaction_type').notNull(), // 'sale' | 'rent' | 'resale'
  bhkConfig: text('bhk_config'),                    // '2BHK' | '3BHK' | etc.
  carpetArea: numeric('carpet_area'),               // sq ft
  builtUpArea: numeric('built_up_area'),
  superBuiltUpArea: numeric('super_built_up_area'),
  price: numeric('price'),                          // INR
  pricePerSqFt: numeric('price_per_sqft'),
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
  facing: text('facing'),
  furnishing: text('furnishing'),
  parking: integer('parking'),
  amenities: jsonb('amenities'),                    // Array of amenity strings
  possessionDate: timestamp('possession_date'),
  isVerified: boolean('is_verified').default(false),
  listedAt: timestamp('listed_at'),
  scrapedAt: timestamp('scraped_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// packages/db/schema/rera_projects.ts
export const reraProjects = pgTable('rera_projects', {
  id: uuid('id').defaultRandom().primaryKey(),
  reraNumber: text('rera_number').notNull().unique(),
  state: text('state').notNull(),
  projectName: text('project_name').notNull(),
  promoterName: text('promoter_name').notNull(),
  promoterType: text('promoter_type'),              // 'individual' | 'company' | 'partnership'
  projectType: text('project_type'),                // 'residential' | 'commercial' | 'mixed'
  district: text('district'),
  taluka: text('taluka'),
  village: text('village'),
  pincode: text('pincode'),
  latitude: numeric('latitude'),
  longitude: numeric('longitude'),
  totalUnits: integer('total_units'),
  totalArea: numeric('total_area'),                 // sq meters
  approvedDate: timestamp('approved_date'),
  completionDate: timestamp('completion_date'),
  extendedDate: timestamp('extended_date'),
  status: text('status'),                           // 'active' | 'completed' | 'lapsed' | 'revoked'
  bankAccountDetails: jsonb('bank_account_details'),
  complaints: integer('complaints').default(0),
  qprData: jsonb('qpr_data'),                       // Quarterly Progress Report JSON
  rawData: jsonb('raw_data'),                        // Full scraped JSON
  scrapedAt: timestamp('scraped_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// packages/db/schema/price_history.ts — TimescaleDB hypertable
export const priceHistory = pgTable('price_history', {
  time: timestamp('time').notNull(),
  city: text('city').notNull(),
  microMarket: text('micro_market').notNull(),
  propertyType: text('property_type').notNull(),
  bhkConfig: text('bhk_config'),
  medianPrice: numeric('median_price'),
  medianPricePerSqFt: numeric('median_price_per_sqft'),
  listingCount: integer('listing_count'),
  avgDaysOnMarket: numeric('avg_days_on_market'),
  source: text('source').notNull(),
});
// IMPORTANT: After table creation, run:
// SELECT create_hypertable('price_history', 'time');
// CREATE INDEX idx_ph_city_time ON price_history (city, time DESC);
// CREATE INDEX idx_ph_micro_time ON price_history (micro_market, time DESC);

// packages/db/schema/developers.ts
export const developers = pgTable('developers', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  type: text('type'),                               // 'listed' | 'private' | 'govt'
  nseSymbol: text('nse_symbol'),                    // For listed developers
  reraRegistrations: jsonb('rera_registrations'),    // {state: reraId}[]
  headquarters: text('headquarters'),
  foundedYear: integer('founded_year'),
  totalProjects: integer('total_projects'),
  activeProjects: integer('active_projects'),
  completedProjects: integer('completed_projects'),
  delayedProjects: integer('delayed_projects'),
  totalAreaDeveloped: numeric('total_area_developed'),
  ibbCases: integer('ibb_cases').default(0),        // IBC/NCLT insolvency cases
  healthScore: numeric('health_score'),              // 0-100 composite score
  metadata: jsonb('metadata'),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// packages/db/schema/markets.ts
export const markets = pgTable('markets', {
  id: uuid('id').defaultRandom().primaryKey(),
  city: text('city').notNull(),
  microMarket: text('micro_market').notNull(),
  state: text('state').notNull(),
  tier: integer('tier').notNull(),                   // 1, 2, or 3
  latitude: numeric('latitude').notNull(),
  longitude: numeric('longitude').notNull(),
  population: integer('population'),
  // Market health metrics (updated daily/weekly)
  healthIndex: numeric('health_index'),              // 0-100 composite
  medianPricePerSqFt: numeric('median_price_per_sqft'),
  priceChangeYoY: numeric('price_change_yoy'),       // percentage
  priceChangeMoM: numeric('price_change_mom'),
  activeListings: integer('active_listings'),
  newLaunches30d: integer('new_launches_30d'),
  unsoldInventory: integer('unsold_inventory'),
  monthsOfInventory: numeric('months_of_inventory'),  // unsold / monthly absorption
  reraProjects: integer('rera_projects'),
  avgAqi: numeric('avg_aqi'),
  metroConnectivity: boolean('metro_connectivity'),
  nearestAirportKm: numeric('nearest_airport_km'),
  avgRentalYield: numeric('avg_rental_yield'),        // percentage
  updatedAt: timestamp('updated_at').defaultNow(),
});

// packages/db/schema/news_articles.ts
export const newsArticles = pgTable('news_articles', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  url: text('url').notNull().unique(),
  source: text('source').notNull(),
  publishedAt: timestamp('published_at'),
  summary: text('summary'),
  cities: jsonb('cities'),                           // extracted city mentions
  developers: jsonb('developers'),                   // extracted developer mentions
  sentiment: numeric('sentiment'),                   // -1 to +1
  category: text('category'),                        // 'policy' | 'market' | 'project' | 'legal'
  isBreaking: boolean('is_breaking').default(false),
  scrapedAt: timestamp('scraped_at').defaultNow(),
});

// packages/db/schema/stock_data.ts — TimescaleDB hypertable
export const stockData = pgTable('stock_data', {
  time: timestamp('time').notNull(),
  symbol: text('symbol').notNull(),                  // 'DLF.NS' | 'NIFTYREALTY' | 'EMBASSYREIT'
  open: numeric('open'),
  high: numeric('high'),
  low: numeric('low'),
  close: numeric('close'),
  volume: numeric('volume'),
  marketCap: numeric('market_cap'),
});
// SELECT create_hypertable('stock_data', 'time');

// packages/db/schema/alerts.ts
export const alerts = pgTable('alerts', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id'),                           // anonymous or auth'd
  type: text('type').notNull(),                      // 'price' | 'rera' | 'news' | 'stock'
  target: text('target').notNull(),                  // city, micro-market, developer, RERA ID
  condition: jsonb('condition').notNull(),            // {field, operator, value}
  channel: text('channel').notNull(),                // 'telegram' | 'whatsapp' | 'email' | 'web'
  isActive: boolean('is_active').default(true),
  lastTriggered: timestamp('last_triggered'),
  createdAt: timestamp('created_at').defaultNow(),
});
```

---

## Design System

### Theme: "Dark Terminal" — inspired by Bloomberg Terminal meets Indian market data

**Color Palette (CSS Variables):**
```css
:root {
  /* Background layers */
  --bg-primary: #0a0e17;         /* Deep navy-black */
  --bg-secondary: #111827;       /* Card backgrounds */
  --bg-tertiary: #1a2332;        /* Hover states, elevated elements */
  --bg-surface: #0f1923;         /* Chart backgrounds */

  /* Accent colors — Indian market inspired */
  --accent-green: #00d09c;       /* Positive/bullish — Zerodha green */
  --accent-red: #ff5252;         /* Negative/bearish — NSE red */
  --accent-blue: #3b82f6;        /* Primary actions, links */
  --accent-amber: #f59e0b;       /* Warnings, pending states */
  --accent-purple: #8b5cf6;      /* AI/ML features */
  --accent-cyan: #06b6d4;        /* Map highlights */

  /* Text hierarchy */
  --text-primary: #f1f5f9;       /* Primary text */
  --text-secondary: #94a3b8;     /* Secondary text */
  --text-muted: #475569;         /* Muted labels */

  /* Borders */
  --border-primary: #1e293b;
  --border-highlight: #334155;

  /* Special */
  --gradient-hero: linear-gradient(135deg, #0a0e17 0%, #1a1a3e 50%, #0d1b2a 100%);
  --glow-green: 0 0 20px rgba(0, 208, 156, 0.3);
  --glow-red: 0 0 20px rgba(255, 82, 82, 0.3);
}
```

**Typography:**
- Display/Headings: `"JetBrains Mono"` (monospace, terminal feel for data)
- Body: `"Plus Jakarta Sans"` (clean, modern, excellent readability)
- Data/Numbers: `"JetBrains Mono"` (tabular numerals, data alignment)

**Key UI Patterns:**
- **Grid Dashboard:** CSS Grid with resizable panels (like Bloomberg)
- **Command Palette:** `Cmd+K` for instant city/developer/RERA search
- **Sparklines:** Inline mini-charts in table cells showing 30-day trends
- **Heat Indicators:** Color-coded text for price changes (green up, red down)
- **Status Badges:** RERA status pills (Active = green, Lapsed = red, Extended = amber)
- **Map Tooltips:** Rich property cards on hover with price, BHK, area, RERA badge
- **Loading States:** Skeleton screens matching final layout shapes

---

## Dashboard Pages — Detailed Specifications

### 1. `/overview` — Market Command Center (Default Landing)
**Layout:** 4-column grid with key metrics row + map + charts

**Top metrics row (4 cards):**
- NHB RESIDEX National Index (with QoQ change sparkline)
- Nifty Realty live price (with % change, vol)
- Total active RERA projects (with MoM change)
- National avg price/sqft (with YoY change)

**Left panel (60%):**
- Full-screen MapLibre map of India with:
  - HeatmapLayer: price per sqft by micro-market (deck.gl)
  - ScatterplotLayer: RERA project locations sized by unit count
  - Toggle layers: Metro lines, highways, airports, AQI overlay
  - Click city → zoom + show city-level stats sidebar

**Right panel (40%):**
- **City Leaderboard:** Top 10 cities ranked by price change (AG Grid)
- **Recent RERA Filings:** Latest 10 RERA registrations across states
- **AI Market Brief:** Today's AI-generated summary (expandable)
- **News Ticker:** Scrolling headlines from India RE news

**Bottom panel:**
- **Price Index Chart:** ECharts line chart — NHB RESIDEX for top 8 cities (5-year)
- **Volume Chart:** Monthly transaction volumes (stacked bar by city)

### 2. `/map` — Full-Screen Map Explorer
**Layout:** Full viewport map with floating panels

**Map features:**
- Base: MapLibre GL JS with self-hosted PMTiles (India OSM extract)
- Layers (toggleable via floating sidebar):
  - Price heatmap (₹/sqft by locality polygon)
  - RERA projects (color-coded by status: active/completed/delayed)
  - Metro stations + lines (operational + under construction)
  - NHAI highways (with planned expressways)
  - Airport proximity rings (5km, 10km, 20km)
  - AQI overlay (real-time from CPCB)
  - Flood risk zones (NDMA data)
  - LULC satellite overlay (Bhuvan WMS)
- **Floating search:** Geocode localities via Mappls API
- **Click any point:** Rich popup with nearest properties, avg prices, RERA projects

### 3. `/markets/[city]` — City Deep Dive
**Layout:** City header + tabbed content sections

**Header:** City name, Tier badge, population, current avg price/sqft, YoY change, Health Index gauge

**Tabs:**
- **Price Trends:** ECharts multi-line for micro-markets within city (selectable)
- **Supply Analysis:** New launches, unsold inventory, months of supply (stacked area)
- **RERA Dashboard:** All RERA projects in city (AG Grid with filters)
- **Developers:** Developer market share pie chart + health scorecard
- **Affordability:** EMI calculator with live bank rates, affordability index
- **Infrastructure:** Metro map, upcoming projects, airport distance
- **Environment:** AQI trend, flood risk score, green building count

### 4. `/rera` — RERA Explorer
**Layout:** Filterable table + detail drawer

**Features:**
- AG Grid with 20+ columns (project name, RERA#, state, developer, units, status, complaints, dates)
- Filters: state, city, status, developer, date range, unit count range
- Search: fuzzy search via Meilisearch
- Click row → slide-out detail panel with full RERA data + QPR timeline
- Compliance score badge per developer (% on-time completions)
- **Export:** CSV, Excel download of filtered results

### 5. `/stocks` — Nifty Realty & REITs Tracker
**Layout:** Market header + stock grid + REIT cards

**Market header:** Nifty Realty index (TradingView Lightweight Chart, candlestick, 1D/1W/1M/1Y)
**Stock grid:** All 10 Nifty Realty stocks + 5 REITs + top 10 HFCs (AG Grid with live prices)
**Each stock row:** Symbol, LTP, change%, volume, 52W range sparkline, P/E, market cap
**Click stock → detail:** Full TradingView chart + peer comparison + recent quarterly data

### 6. `/news` — AI-Curated News Hub
**Layout:** Filter sidebar + card grid

**Features:**
- Cards: headline, source logo, time ago, city tags, sentiment badge, AI summary
- Filters: city, category (policy/market/project/legal), sentiment, date
- **AI Daily Brief:** Expandable section with Claude-generated morning brief
- **Trending Topics:** Word cloud / tag cloud of trending RE topics

### 7. `/alerts` — Watchlist & Alerts
**Layout:** Alert creation form + active alerts list

**Alert types:**
- Price alert: "Notify when avg price/sqft in [micro-market] crosses ₹X"
- RERA alert: "Notify when new RERA projects registered in [city]"
- Stock alert: "Notify when [symbol] crosses ₹X"
- News alert: "Notify when news mentions [developer/city]"
- Developer alert: "Notify when [developer] has new NCLT/IBC filing"

**Channels:** Telegram (free), WhatsApp ($), Email, Browser push

---

## API Endpoints

### Properties
- `GET /api/properties` — List properties with filters (city, type, price range, BHK)
- `GET /api/properties/[id]` — Property detail
- `GET /api/properties/stats` — Aggregate stats (avg price, count, median)

### Markets
- `GET /api/markets` — All markets with health metrics
- `GET /api/markets/[city]` — City detail with all metrics
- `GET /api/markets/[city]/price-history` — TimescaleDB time-series query
- `GET /api/markets/[city]/micro-markets` — Micro-market breakdown

### RERA
- `GET /api/rera` — RERA projects with filters
- `GET /api/rera/[reraNumber]` — RERA project detail
- `GET /api/rera/stats` — State-wise RERA statistics

### Stocks
- `GET /api/stocks` — All RE stocks + REITs current data
- `GET /api/stocks/[symbol]` — Stock detail with historical data
- `WS /api/stocks/live` — WebSocket for real-time price feed

### News
- `GET /api/news` — Paginated news feed with filters
- `GET /api/news/brief` — Latest AI morning brief

### AI
- `POST /api/ai/analyze` — Analyze a micro-market or developer
- `POST /api/ai/compare` — Compare two cities/localities
- `GET /api/ai/health/[microMarket]` — Micro-Market Health Index

### Search
- `GET /api/search?q=...` — Unified search across all entities

---

## Scraper Implementation Priorities

### Phase 1 (Week 1-2): Get data flowing
1. **NHB RESIDEX** — Scrape quarterly price index data (50 cities)
2. **data.gov.in** — Housing datasets via REST API
3. **RBI DBIE** — Housing credit, repo rate, HPI via jugaad-data
4. **Nifty Realty stocks** — Via Angel One SmartAPI + yfinance
5. **News RSS** — 20+ India RE feeds (ET Realty, Moneycontrol, LiveMint)
6. **CPCB AQI** — Real-time via data.gov.in API

### Phase 2 (Week 3-4): Listing aggregation
7. **99acres** — Via Apify actor (top 10 cities)
8. **MagicBricks** — Via Apify actor
9. **NoBroker** — Via unofficial API
10. **Home loan rates** — Scrape PaisaBazaar/BankBazaar

### Phase 3 (Week 5-8): RERA and deep data
11. **MahaRERA** — Full Playwright scraper
12. **UP RERA** — Playwright scraper
13. **Karnataka RERA** — Playwright scraper
14. **Telangana RERA** — Playwright scraper
15. **IGRS Maharashtra** — Registration data scraper
16. **Google Trends** — pytrends for RE search terms

---

## Environment Variables Required

```bash
# .env.example

# Database (Supabase)
DATABASE_URL=postgresql://...
DIRECT_URL=postgresql://...

# Redis (Upstash)
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

# Meilisearch
MEILI_HOST=http://localhost:7700
MEILI_MASTER_KEY=

# Maps
MAPPLS_API_KEY=                      # MapMyIndia/Mappls
MAPLIBRE_STYLE_URL=                  # Self-hosted style JSON URL

# Stock Data
ANGEL_ONE_API_KEY=                   # Angel One SmartAPI
ANGEL_ONE_CLIENT_ID=
ANGEL_ONE_PASSWORD=
ANGEL_ONE_TOTP_SECRET=

# AI
ANTHROPIC_API_KEY=                   # Claude API
GROQ_API_KEY=                        # Groq (Llama 3.3)

# News
GDELT_API_KEY=                       # Optional (GDELT is free)
NEWS_API_KEY=                        # newsapi.org

# Notifications
TELEGRAM_BOT_TOKEN=                  # Telegram Bot
WHATSAPP_BUSINESS_TOKEN=             # WhatsApp Business API (optional)

# Scraping
APIFY_TOKEN=                         # Apify for listing scrapers
BRIGHTDATA_TOKEN=                    # Optional: proxy for heavy scraping

# Government APIs
DATA_GOV_IN_API_KEY=                 # data.gov.in (free registration)

# Google
GOOGLE_TRENDS_API_KEY=               # Google Trends Alpha API (if approved)

# VPS
VPS_HOST=168.231.103.49
VPS_USER=mohak
```

---

## Claude Code Session Management

### Starting a Session
```bash
# SSH into VPS
ssh mohak@168.231.103.49

# Start tmux session
tmux new -s irem

# Disable bracketed paste (important for Claude Code)
printf '\e[?2004l'

# Navigate to repo
cd ~/india-re-monitor

# Start Claude Code
claude --dangerously-skip-permissions
```

### Context Continuity
After each session, update `TIMELINE.md` with:
1. What was built/changed
2. Current state of each module
3. Next priorities
4. Any blockers or issues found

### ClawTeam Parallel Execution
See `AGENTS.md` for agent definitions. Use for:
- Parallel scraper development (one agent per RERA portal)
- Simultaneous frontend page development
- Database schema + API routes in parallel

---

## Build Commands

```bash
# Install dependencies
pnpm install

# Database
pnpm db:generate      # Generate Drizzle migrations
pnpm db:migrate       # Run migrations
pnpm db:seed          # Seed cities, developers, micro-markets
pnpm db:studio        # Open Drizzle Studio

# Development
pnpm dev              # Start Next.js dev server
pnpm dev:scrapers     # Start Dagster dev server
docker compose up -d  # Start Postgres, Redis, Meilisearch

# Production
pnpm build            # Build Next.js
pnpm start            # Start production server

# Scraping
python services/scrapers/government/nhb_residex.py    # One-off scrape
dagster dev -f services/pipelines/dagster_home.py      # Start Dagster UI
```

---

## CRITICAL RULES FOR CLAUDE CODE

1. **Always use TypeScript** — no plain JS files in the frontend
2. **Always use server components by default** — add `'use client'` only when needed
3. **Always use Drizzle ORM** — no raw SQL in API routes (raw SQL only in migrations)
4. **Always use CSS variables** for colors — no hardcoded hex in components
5. **Always add loading states** — every data-fetching component needs Suspense/skeleton
6. **Always add error boundaries** — graceful degradation when APIs fail
7. **Dark theme only** — no light mode toggle (saves complexity, matches terminal aesthetic)
8. **Mobile-responsive** — all pages must work on mobile (India is mobile-first)
9. **Data freshness indicators** — every data widget shows "Updated X ago" timestamp
10. **Incremental builds** — start with mock data, swap for real APIs progressively
11. **No placeholder data in production** — if a scraper isn't ready, hide the section
12. **Indian number formatting** — use ₹ symbol, lakh/crore notation (not million/billion)
13. **SEO meta tags** — every page needs proper OG tags for social sharing
14. **Performance budget** — LCP < 2.5s, FID < 100ms, CLS < 0.1
