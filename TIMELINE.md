# TIMELINE.md — Build Progress Tracker

> Updated after each Claude Code session. Read this first to understand current state.

---

## Current Status: 🟡 PLANNING COMPLETE — READY TO BUILD

### Last Session: 2026-03-30
- Created CLAUDE.md (master prompt)
- Created TODO.md (manual tasks)
- Created AGENTS.md (ClawTeam definitions)
- Created TIMELINE.md (this file)
- Created bootstrap.sh (repo initialization)

### Immediate Next Steps:
1. **Human:** Complete 🔴 CRITICAL items in TODO.md (Supabase, Upstash, API keys)
2. **Human:** Create GitHub repo and push initial files
3. **Claude Code:** Run `bash bootstrap.sh` to initialize project structure
4. **Claude Code:** Start with Agent 1 (Database) + Agent 2 (Frontend) in parallel

---

## Build Phases

### Phase 1: Foundation (Target: Week 1-2)
- [ ] GitHub repo created and initial commit pushed
- [ ] Database schema deployed to Supabase (Drizzle + TimescaleDB + PostGIS)
- [ ] Seed data: 50 cities, 500 micro-markets, 200 developers
- [ ] Next.js 15 scaffold with all 7 pages (placeholder layouts)
- [ ] Dark theme design system with CSS variables
- [ ] Sidebar navigation + Command Palette
- [ ] Phase 1 scrapers running: NHB RESIDEX, RBI data, AQI, news RSS, NSE stocks
- [ ] Docker Compose for local dev (postgres, redis, meilisearch)
- [ ] Basic API routes returning real data

### Phase 2: Core Features (Target: Week 3-4)
- [ ] MapLibre + deck.gl map with 5+ toggleable layers
- [ ] ECharts price index charts (8 cities, 5-year)
- [ ] TradingView stock charts for Nifty Realty + REITs
- [ ] AG Grid property table with filters
- [ ] RERA explorer with MahaRERA + UP RERA data
- [ ] Listing aggregation: 99acres + MagicBricks + NoBroker
- [ ] Home loan rate tracker
- [ ] City deep-dive pages for top 8 cities

### Phase 3: Intelligence (Target: Week 5-8)
- [ ] AI morning briefs via Claude API
- [ ] Micro-Market Health Index scoring
- [ ] News classifier + sentiment analysis
- [ ] Telegram bot with alert notifications
- [ ] Watchlist + alert system
- [ ] Google Trends integration
- [ ] RERA scrapers for 4+ states
- [ ] Vercel deployment with custom domain

### Phase 4: Scale (Target: Month 3+)
- [ ] 20+ state RERA portals
- [ ] Satellite imagery integration (Sentinel-2)
- [ ] XGBoost price prediction model
- [ ] WhatsApp Business integration
- [ ] REST API for third-party access
- [ ] Mobile PWA optimization
- [ ] SEO content pages for organic traffic

---

## Session Log

### Session 1 — 2026-03-30
**Duration:** Planning session
**What was done:**
- Research report completed (200+ data sources cataloged)
- CLAUDE.md master prompt created
- TODO.md manual task list created
- AGENTS.md parallel agent definitions created
- TIMELINE.md created
- bootstrap.sh created

**Blockers:** None yet — waiting for human to complete API signups

**Next session should:**
1. Initialize the project with `pnpm init` and set up monorepo
2. Create database schema with Drizzle ORM
3. Scaffold Next.js 15 frontend with dark theme
4. Build first scraper (NHB RESIDEX — simplest government source)
