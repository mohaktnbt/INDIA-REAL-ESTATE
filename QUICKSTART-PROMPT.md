# QUICKSTART PROMPT — Paste This Into Claude Code

> Copy the prompt below and paste it as your first message to Claude Code
> after SSH'ing into the VPS and starting a tmux session.

---

## First Session Prompt (Database + Frontend Foundation)

```
Read CLAUDE.md, AGENTS.md, and TIMELINE.md in this repo carefully before doing anything.

This is the India Real Estate Monitor project — a Bloomberg Terminal-style dashboard for Indian real estate. Your job is to build the complete foundation in this session.

## STEP 1: Initialize the monorepo
Run `bash bootstrap.sh` to create the project structure, then run `pnpm install` after creating the package.json files.

## STEP 2: Set up the database package (packages/db/)
- Initialize Drizzle ORM with PostgreSQL + TimescaleDB + PostGIS
- Create ALL schema files exactly as specified in CLAUDE.md:
  - properties, rera_projects, price_history (hypertable), developers, markets, news_articles, stock_data (hypertable), alerts
- Generate and run migrations
- Create comprehensive seed files:
  - 50+ Indian cities (Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, + 42 more Tier 1-3 cities) with lat/lng, state, tier, population
  - 500+ micro-markets mapped to cities (e.g., Bandra West → Mumbai, Whitefield → Bangalore, Gachibowli → Hyderabad, etc.)
  - Top 200 developers with NSE symbols where listed (DLF, Godrej Properties, Oberoi Realty, Prestige, Macrotech/Lodha, etc.)
  - Nifty Realty 10 stocks + 5 REITs + top HFC symbols

## STEP 3: Scaffold Next.js 15 frontend (apps/web/)
- Initialize with: TypeScript, App Router, Tailwind CSS 4, src/ directory
- Set up the EXACT dark theme design system from CLAUDE.md:
  - CSS variables for all colors (--bg-primary: #0a0e17, etc.)
  - JetBrains Mono + Plus Jakarta Sans via Google Fonts
  - Dark scrollbar styles, selection colors, focus ring styles
- Build the dashboard shell:
  - Collapsible sidebar with icon + text nav links for all 7 sections
  - Top bar with search trigger (Cmd+K icon), notification bell
  - Main content area with proper padding
- Build shared components:
  - MetricCard (value, label, change%, sparkline placeholder, icon)
  - StatusBadge (variant: success/warning/danger/info)
  - Skeleton loader matching each component shape
  - IndianCurrency formatter (₹ symbol, lakh/crore notation)
- Create ALL page route files with placeholder layouts:
  - /overview — 4 metric cards + placeholder map + placeholder charts
  - /map — full-screen placeholder
  - /markets — city grid
  - /rera — placeholder table
  - /stocks — placeholder chart + table
  - /news — card grid
  - /alerts — form + list
- Set up Zustand store with initial slices: selectedCity, selectedDateRange, sidebarOpen
- Set up TanStack React Query provider

## STEP 4: Create first API routes
- GET /api/markets — return seeded city data from database
- GET /api/stocks — return static Nifty Realty component data
- GET /api/health — system health check

## STEP 5: Build the first scraper
- Create services/scrapers/government/nhb_residex.py
  - Scrape NHB RESIDEX portal for all 50 cities
  - Parse quarterly price index data
  - Insert into price_history hypertable
- Create a simple runner script to test it

After each major step, commit to git with descriptive message.
Update TIMELINE.md at the end of the session with what was accomplished.

IMPORTANT: Follow ALL rules in CLAUDE.md — TypeScript only, server components by default, CSS variables for colors, Indian number formatting (₹, lakh, crore), mobile-responsive, dark theme only.
```

---

## Subsequent Session Prompts

### Session 2: Map + Charts
```
Read CLAUDE.md and TIMELINE.md. Continue building the India Real Estate Monitor.

This session: build the map visualization and chart components.

1. Install and configure MapLibre GL JS in apps/web/
2. Set up Protomaps CDN as tile source (use dark basemap style)
3. Build the MapView component with:
   - India centered view (lat: 20.5937, lng: 78.9629, zoom: 5)
   - deck.gl HeatmapLayer for price data (use seeded market data)
   - deck.gl ScatterplotLayer for RERA projects
   - Floating layer control panel (checkboxes to toggle layers)
   - Click-to-zoom on cities
4. Build the /map page as full-screen map explorer
5. Set up Apache ECharts with dark theme matching our CSS variables
6. Build chart components:
   - PriceIndexChart: multi-line chart, city selector, 5-year view
   - VolumeChart: stacked bar chart by city
   - Sparkline: tiny inline chart for table cells
7. Set up TradingView Lightweight Charts for /stocks page:
   - Nifty Realty index candlestick chart
   - Dark theme matching our palette
8. Wire the /overview page with real components (map + charts + metrics)

Update TIMELINE.md when done.
```

### Session 3: RERA Scrapers + Explorer
```
Read CLAUDE.md and TIMELINE.md. Continue building.

This session: build RERA scrapers and the RERA explorer page.

1. Build MahaRERA scraper (services/scrapers/rera/maharera.py):
   - Use Playwright to navigate maharera.maharashtra.gov.in
   - Search by district, scrape all project listings
   - Extract: RERA#, project name, promoter, location, units, status, dates
   - Handle pagination, rate limiting, retries
   - Insert into rera_projects table
2. Build the /rera page:
   - AG Grid with 15+ columns from rera_projects schema
   - Column filters, sorting, search
   - Click row → slide-out detail panel
   - Status badges: Active (green), Completed (blue), Lapsed (red)
3. Set up Meilisearch index for RERA projects
4. Build GET /api/rera endpoint with pagination, filters
5. Build GET /api/rera/[reraNumber] detail endpoint

Update TIMELINE.md when done.
```

### Session 4: Listing Aggregation + Stocks
```
Read CLAUDE.md and TIMELINE.md. Continue building.

This session: integrate property listings and stock data.

1. Build Apify-based scrapers for top 3 cities:
   - 99acres via apify/easyapi/99acres-com-scraper
   - MagicBricks via apify/ecomscrape/magicbricks-property-search-scraper
   - NoBroker via unofficial API (api.market/store/the-api-guy/nobroker-api)
2. Normalize listing data into properties schema
3. Build GET /api/properties with filters (city, type, price, BHK)
4. Set up Angel One SmartAPI WebSocket for live stock data
5. Build stock data pipeline: fetch + store in stock_data hypertable
6. Build the /stocks page with:
   - TradingView candlestick for Nifty Realty
   - AG Grid for all RE stocks + REITs with live prices
   - Stock detail view on click
7. Wire /overview page stock ticker widget

Update TIMELINE.md when done.
```

### Session 5: AI Intelligence + Alerts
```
Read CLAUDE.md and TIMELINE.md. Continue building.

This session: build AI features and notification system.

1. Build morning brief generator (services/ai/morning_brief.py):
   - Aggregate last 24h news from RSS feeds
   - Call Claude API to generate per-city summaries
   - Store in database, serve via GET /api/news/brief
2. Build news classifier:
   - Entity extraction (cities, developers)
   - Category classification
   - Sentiment scoring
3. Build Micro-Market Health Index:
   - Composite score from: price trend, inventory, RERA health, sentiment, infra
   - Update markets.health_index daily
4. Build Telegram bot:
   - /start, /watchlist, /subscribe commands
   - Alert push notifications
5. Build /alerts page with alert creation form
6. Build /news page with AI-curated feed
7. Set up Dagster for orchestrating all data pipelines:
   - Daily: listings, news, AQI, stocks
   - Weekly: RERA, home loan rates
   - Quarterly: NHB RESIDEX

Update TIMELINE.md when done.
```
