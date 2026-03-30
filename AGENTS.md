# AGENTS.md — ClawTeam Parallel Agent Definitions

> Use with ClawTeam for parallel execution of independent build tasks.
> Each agent gets its own tmux pane and operates on non-overlapping files.

---

## Phase 1 Agents — Foundation (Run in parallel)

### Agent 1: DATABASE ARCHITECT
```
You are building the database layer for India Real Estate Monitor.
Read CLAUDE.md for full context.

Tasks:
1. Initialize Drizzle ORM in packages/db/
2. Create ALL schema files exactly as specified in CLAUDE.md
3. Generate migrations
4. Create seed scripts for:
   - 50+ Indian cities with coordinates, tier, state, population
   - 500+ micro-markets mapped to cities
   - Top 200 real estate developers with NSE symbols where applicable
   - Nifty Realty 10 stocks + 5 REITs + 10 HFC symbols
5. Run migrations against Supabase
6. Execute: SELECT create_hypertable('price_history', 'time');
7. Execute: SELECT create_hypertable('stock_data', 'time');
8. Create PostGIS indexes on latitude/longitude columns
9. Test all CRUD operations

Files you own: packages/db/**, docker-compose.yml (postgres section)
Do NOT touch: apps/web/**, services/**
```

### Agent 2: FRONTEND SCAFFOLD
```
You are building the Next.js frontend scaffold for India Real Estate Monitor.
Read CLAUDE.md for full context — especially the Design System and Dashboard Pages sections.

Tasks:
1. Initialize Next.js 15 in apps/web/ with TypeScript, App Router, Tailwind CSS 4
2. Set up the full directory structure as specified in CLAUDE.md
3. Create the root layout.tsx with:
   - Dark theme CSS variables from CLAUDE.md
   - JetBrains Mono + Plus Jakarta Sans fonts (Google Fonts)
   - Global styles for scrollbars, selection, focus rings
4. Create the sidebar navigation component with links to all 7 pages
5. Create the top bar with: search trigger (Cmd+K), notifications bell, settings gear
6. Create the Command Palette component (Cmd+K search modal)
7. Build shared UI components: MetricCard, StatusBadge, Sparkline, SkeletonLoader
8. Create ALL page route files with placeholder layouts matching CLAUDE.md specs
9. Set up Zustand store in stores/dashboard.ts
10. Set up React Query provider

Files you own: apps/web/**
Do NOT touch: packages/db/**, services/**
Use mock data for all components — real API integration comes later.
```

### Agent 3: SCRAPER FOUNDATION
```
You are building the data ingestion layer for India Real Estate Monitor.
Read CLAUDE.md for full context — especially the Scraper Implementation Priorities.

Tasks:
1. Set up Python project structure in services/scrapers/ with pyproject.toml
2. Install: playwright, scrapy, httpx, beautifulsoup4, pandas, jugaad-data, pytrends, apify-client
3. Build base scraper classes with:
   - Retry logic with exponential backoff
   - User-agent rotation
   - Rate limiting (respect robots.txt)
   - Logging to structured JSON
   - Database insertion via psycopg2/asyncpg
4. Implement Phase 1 scrapers (data flows from day 1):
   a. nhb_residex.py — Scrape NHB RESIDEX portal for all 50 cities
   b. rbi_housing.py — Use jugaad-data to fetch RBI housing data
   c. data_gov.py — Wrapper for data.gov.in REST API (housing datasets)
   d. cpcb_aqi.py — Real-time AQI from CPCB via data.gov.in API
   e. news_rss.py — Parse 20+ RSS feeds (ET Realty, Moneycontrol, LiveMint, etc.)
   f. nse_realty.py — Fetch Nifty Realty + all RE stock data via yfinance
5. Create Dagster asset definitions for each scraper
6. Create schedules: daily, weekly, quarterly

Files you own: services/**, infra/docker/Dockerfile.scrapers
Do NOT touch: apps/web/**, packages/db/schema/** (use schema as read-only reference)
```

---

## Phase 2 Agents — Features (Run after Phase 1 merges)

### Agent 4: MAP ENGINE
```
You are building the map visualization system.
Read CLAUDE.md — Map section.

Tasks:
1. Set up MapLibre GL JS in apps/web/src/components/maps/
2. Configure PMTiles source (use Protomaps CDN for MVP)
3. Build toggleable map layers:
   - HeatmapLayer (deck.gl) for price per sqft
   - ScatterplotLayer for RERA project locations
   - GeoJsonLayer for metro lines (load from OSM Overpass)
   - IconLayer for airports, railway stations
4. Build the floating layer control panel
5. Build rich map popups/tooltips for property data
6. Implement the /map page as full-screen explorer
7. Integrate Mappls geocoding for Indian address search
8. Add India boundary GeoJSON (compliant with IT rules)

Files you own: apps/web/src/components/maps/**, apps/web/src/app/(dashboard)/map/**
```

### Agent 5: CHARTS & VISUALIZATION
```
You are building all charts and data visualizations.
Read CLAUDE.md — Charts section.

Tasks:
1. Set up Apache ECharts with dark theme matching CSS variables
2. Build reusable chart components:
   - PriceIndexChart (multi-line, city comparison, 5-year)
   - VolumeChart (stacked bar, monthly transactions by city)
   - SupplyChart (area chart, new launches vs absorption)
   - AffordabilityGauge (radial gauge, EMI/income ratio)
   - DeveloperMarketShare (pie/donut chart)
   - MicroMarketHealth (radar chart, 6 dimensions)
3. Set up TradingView Lightweight Charts for:
   - Nifty Realty candlestick chart (1D/1W/1M/1Y)
   - Individual stock charts with volume overlay
4. Build sparkline component for inline table use
5. Build the /stocks page with TV charts + AG Grid
6. Indian number formatting util (₹ symbol, lakh/crore)

Files you own: apps/web/src/components/charts/**, apps/web/src/app/(dashboard)/stocks/**
```

### Agent 6: RERA EXPLORER
```
You are building the RERA data explorer feature.

Tasks:
1. Build Playwright scrapers for:
   a. MahaRERA (maharera.maharashtra.gov.in) — prioritize this
   b. UP RERA (up-rera.in)
   c. Karnataka RERA (rera.karnataka.gov.in)
   d. Telangana RERA (rera.telangana.gov.in)
2. Each scraper should extract: RERA number, project name, promoter,
   location, units, dates, status, complaints, QPR data
3. Build the /rera page with AG Grid (20+ filterable columns)
4. Build RERA detail drawer (slide-out panel on row click)
5. Build compliance score calculator per developer
6. Set up Meilisearch index for RERA fuzzy search
7. Add Dagster assets and weekly schedule for RERA scraping

Files you own: services/scrapers/rera/**, apps/web/src/app/(dashboard)/rera/**
```

---

## Phase 3 Agents — Intelligence (Run after Phase 2)

### Agent 7: AI INTELLIGENCE
```
You are building the AI/ML features.

Tasks:
1. Build morning brief generator (services/ai/morning_brief.py):
   - Aggregate last 24h news via RSS + GDELT
   - Generate per-city summaries using Claude API
   - Format for Telegram + WhatsApp + web display
2. Build Micro-Market Health Index calculator:
   - Inputs: price momentum, inventory, RERA complaints, news sentiment, infra score
   - Output: 0-100 composite score per micro-market
   - Store in markets.health_index column
3. Build news classifier (services/ai/news_classifier.py):
   - Extract entities: cities, developers, project names
   - Classify: policy/market/project/legal
   - Score sentiment: -1 to +1
4. Build the /news page with AI-curated feed
5. Build the AI analysis API endpoints (/api/ai/*)
6. Set up Dagster schedule for 6 AM IST daily brief

Files you own: services/ai/**, apps/web/src/app/(dashboard)/news/**, apps/web/src/app/api/ai/**
```

### Agent 8: ALERTS & NOTIFICATIONS
```
You are building the alert and notification system.

Tasks:
1. Build Telegram bot integration:
   - /start command with welcome message
   - /watchlist command to show active alerts
   - /subscribe [city] command
   - Push notifications when alerts trigger
2. Build alert engine (check conditions against new data):
   - Price threshold alerts
   - New RERA registration alerts
   - Stock price alerts
   - News mention alerts
3. Build the /alerts page:
   - Alert creation form
   - Active alerts list with toggle/delete
   - Alert history log
4. Build alert evaluation in Dagster sensor
5. Optional: Email notifications via AWS SES or Resend

Files you own: services/notifications/**, apps/web/src/app/(dashboard)/alerts/**
```

---

## Conflict Prevention Rules

1. **Each agent owns specific file paths** — never edit files outside your scope
2. **packages/shared/** is read-only for all agents — only Agent 1 (DB) modifies types
3. **Schema changes** go through Agent 1 only — other agents import from packages/db
4. **Environment variables** — each agent documents what they need in .env.example
5. **Package installs** — each agent manages their own package.json / pyproject.toml
6. **Git branches** — each agent works on `agent-N/feature-name` branch, merge via PR
