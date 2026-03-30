# TODO — Manual Tasks (Human Operator Required)

> These are tasks Claude Code **cannot** execute — they require account creation, payment, manual approval, or physical actions. Complete these in priority order.

---

## 🔴 CRITICAL — Block Phase 1 Build

### 1. GitHub Repository
- [ ] Create repo `mohaktnbt/india-re-monitor` on GitHub
- [ ] Set repo to **private** initially (public after MVP)
- [ ] Clone to VPS: `git clone git@github.com:mohaktnbt/india-re-monitor.git ~/india-re-monitor`
- [ ] Add `.env` file (copy from `.env.example` and fill in)

### 2. Supabase (Database)
- [ ] Create new Supabase project at https://supabase.com
  - Project name: `india-re-monitor`
  - Region: **Mumbai (ap-south-1)**
  - Database password: (save securely)
- [ ] Enable **TimescaleDB** extension: Settings → Database → Extensions → search "timescaledb" → Enable
- [ ] Enable **PostGIS** extension: same path → search "postgis" → Enable
- [ ] Copy `DATABASE_URL` and `DIRECT_URL` from Settings → Database → Connection string → URI
- [ ] Add to `.env`

### 3. Upstash Redis
- [ ] Create account at https://upstash.com
- [ ] Create new Redis database
  - Name: `irem-cache`
  - Region: **ap-south-1 (Mumbai)**
  - Type: Regional
- [ ] Copy `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`
- [ ] Add to `.env`

### 4. Anthropic (Claude API)
- [ ] Verify API key exists at https://console.anthropic.com
- [ ] Add `ANTHROPIC_API_KEY` to `.env`
- [ ] Ensure billing is active with sufficient credits (~$50/month for briefs)

### 5. data.gov.in API Key
- [ ] Register at https://data.gov.in/user/register (free)
- [ ] Go to My Account → API Keys → Generate API Key
- [ ] Copy `DATA_GOV_IN_API_KEY`
- [ ] Add to `.env`
- [ ] Test: `curl "https://api.data.gov.in/resource/RESOURCE_ID?api-key=YOUR_KEY&format=json"`

---

## 🟡 HIGH PRIORITY — Block Phase 2

### 6. Angel One SmartAPI (Free Real-Time Stock Data)
- [ ] Open Angel One demat account at https://www.angelone.in (if not already)
- [ ] Apply for SmartAPI access at https://smartapi.angelone.in
- [ ] Generate API key from SmartAPI dashboard
- [ ] Note down: `API_KEY`, `CLIENT_ID`, `PASSWORD`, `TOTP_SECRET`
- [ ] Add all to `.env`
- [ ] Install Python SDK: `pip install smartapi-python`

### 7. Apify Account (Property Listing Scrapers)
- [ ] Create account at https://apify.com (free tier: $5/month credits)
- [ ] Generate API token from Settings → Integrations
- [ ] Add `APIFY_TOKEN` to `.env`
- [ ] Test 99acres scraper: https://apify.com/easyapi/99acres-com-scraper (run manually first)
- [ ] Test MagicBricks scraper: https://apify.com/ecomscrape/magicbricks-property-search-scraper
- [ ] Budget: Free tier may be enough for MVP; $49/month for Scale tier if needed

### 8. Mappls (MapMyIndia) API
- [ ] Create developer account at https://about.mappls.com/api/signup
- [ ] Free tier gives $200/month credits (sufficient for MVP)
- [ ] Generate `MAPPLS_API_KEY` (REST API key)
- [ ] Add to `.env`
- [ ] Note: Mappls provides India-specific geocoding, POI search, routing

### 9. Groq API (Fast LLM Inference)
- [ ] Create account at https://console.groq.com
- [ ] Generate API key
- [ ] Add `GROQ_API_KEY` to `.env`
- [ ] Free tier: 30 req/min, 14,400 req/day (sufficient for MVP)

### 10. Telegram Bot
- [ ] Open Telegram, search for `@BotFather`
- [ ] Send `/newbot`
- [ ] Name: `India RE Monitor Bot`
- [ ] Username: `india_re_monitor_bot`
- [ ] Copy `TELEGRAM_BOT_TOKEN`
- [ ] Add to `.env`
- [ ] Create a Telegram channel: `@india_re_monitor` for public alerts

---

## 🟢 MEDIUM PRIORITY — Block Phase 3

### 11. Vercel Deployment
- [ ] Connect GitHub repo to Vercel at https://vercel.com
- [ ] Set root directory to `apps/web`
- [ ] Add all environment variables from `.env` to Vercel project settings
- [ ] Configure custom domain: `indiaremonitor.app` (or similar)
- [ ] Purchase domain if not owned

### 12. Meilisearch on VPS
- [ ] SSH to VPS and install via Docker:
  ```bash
  docker run -d --name meilisearch \
    -p 7700:7700 \
    -e MEILI_MASTER_KEY='your-master-key-here' \
    -v $(pwd)/meili_data:/meili_data \
    getmeili/meilisearch:v1.12
  ```
- [ ] Add `MEILI_HOST` and `MEILI_MASTER_KEY` to `.env`

### 13. India PMTiles (Self-Hosted Map Tiles)
- [ ] Download India OSM extract from Geofabrik:
  ```bash
  wget https://download.geofabrik.de/asia/india-latest.osm.pbf
  ```
- [ ] Convert to PMTiles using `tilemaker` or `planetiler`:
  ```bash
  # Using planetiler (Java required)
  java -jar planetiler.jar --osm-path=india-latest.osm.pbf --output=india.pmtiles
  ```
- [ ] Upload to Cloudflare R2 bucket OR serve from VPS via nginx
- [ ] Alternative shortcut: Use Protomaps CDN for MVP (`pmtiles://https://api.protomaps.com/tiles/v4.json?key=FREE_KEY`)

### 14. Google Trends Alpha API (Optional)
- [ ] Apply for access at https://developers.google.com/search/apis/trends
- [ ] Approval may take weeks — use `pytrends` library as fallback
- [ ] If approved, add `GOOGLE_TRENDS_API_KEY` to `.env`

### 15. NewsAPI
- [ ] Register at https://newsapi.org (free tier: 100 req/day)
- [ ] Upgrade to Business ($449/month) only when traffic demands it
- [ ] Add `NEWS_API_KEY` to `.env`
- [ ] Alternative free option: GDELT API (no key needed) + RSS feeds

---

## 🔵 LOW PRIORITY — Nice to Have / Phase 4

### 16. Commercial Data Provider Trials
- [ ] Request PropEquity trial/demo: https://www.propequity.in/contact
- [ ] Request CRE Matrix trial: https://www.crematrix.com/
- [ ] Request Propstack API access: https://www.propstack.com/ (has explicit API)
- [ ] Request Square Yards Data Intelligence API: https://dataintelligence.squareyards.com/
- [ ] Request Liases Foras data access: https://www.liasesforas.com/

### 17. SurePass RERA API
- [ ] Sign up at https://surepass.io
- [ ] Test RERA verification API (₹2-5 per lookup)
- [ ] Evaluate if cost-effective vs. direct scraping

### 18. WhatsApp Business API (Paid Notifications)
- [ ] Apply via Meta Business Suite: https://business.facebook.com
- [ ] Need a verified business + phone number
- [ ] Costs: ₹0.13/utility msg, ₹0.88/marketing msg
- [ ] Consider using **Interakt** or **Wati** as BSP (easier setup)
- [ ] Only needed when user base > 1000

### 19. Google Earth Engine (Satellite Monitoring)
- [ ] Register for commercial access at https://earthengine.google.com
- [ ] Free for nonprofits/research; commercial from ~$10K/year
- [ ] For MVP: use free Copernicus/Sentinel-2 data via STAC API
- [ ] Apply for Google for Startups credits ($100K cloud credits)

### 20. ISRO Bhoonidhi Access
- [ ] Register at https://bhoonidhi.nrsc.gov.in
- [ ] Request data access (free for <5m resolution, paid for <1m)
- [ ] Explore STAC API for programmatic access

### 21. Proxy Service (Heavy Scraping)
- [ ] Only needed if government portals start blocking
- [ ] Options: Bright Data ($500+/month), Oxylabs ($400+/month), SmartProxy ($200+/month)
- [ ] For MVP: residential rotating proxies from $50/month should suffice
- [ ] Start with free options: rotate user-agents, add delays, use VPS IP

---

## 📋 RECURRING TASKS (Monthly/Quarterly)

### Monthly
- [ ] Check all scrapers are running (Dagster dashboard)
- [ ] Review Apify billing (stay within tier)
- [ ] Update home loan rates scraper if bank websites change
- [ ] Check for new RERA portals that have launched
- [ ] Review error logs for scraper failures

### Quarterly
- [ ] Download new NHB RESIDEX data when published
- [ ] Update city/micro-market seed data if new markets emerge
- [ ] Review and update news RSS feed list
- [ ] Check if any APIs have deprecated endpoints
- [ ] Audit database growth and optimize TimescaleDB compression

### Annually
- [ ] Download new Ready Reckoner / Circle Rates when published (state-wise)
- [ ] Update Census data when Census 2027 Phase 1 data releases (late 2026)
- [ ] Renew API subscriptions and evaluate if tier changes needed
- [ ] Review commercial data provider pricing vs. value

---

## 📊 API Cost Estimates (Monthly)

| Service | Free Tier | Paid Tier | Estimated MVP Cost |
|---------|-----------|-----------|-------------------|
| Supabase | Free (500MB) | Pro $25/month | Free → $25 |
| Upstash Redis | Free (10K cmds/day) | Pay-as-you-go | Free |
| Anthropic Claude | N/A | ~$0.003/1K tokens | ~$50 |
| Groq | Free (14.4K req/day) | N/A | Free |
| Angel One SmartAPI | Free | N/A | Free |
| Apify | $5/month | $49/month | $5 → $49 |
| Mappls | Free ($200 credits) | ₹10K/month | Free |
| data.gov.in | Free | N/A | Free |
| NewsAPI | Free (100 req/day) | $449/month | Free |
| Telegram | Free | N/A | Free |
| Vercel | Free (hobby) | Pro $20/month | Free → $20 |
| Cloudflare R2 | Free (10GB) | $0.015/GB | Free |
| **TOTAL MVP** | | | **~$55–$145/month** |

---

## 🏗️ VPS Setup Checklist (168.231.103.49)

- [ ] SSH access verified: `ssh mohak@168.231.103.49`
- [ ] Docker installed and running
- [ ] Docker Compose installed
- [ ] Node.js 22 installed (via nvm)
- [ ] Python 3.12+ installed
- [ ] PM2 installed globally
- [ ] Git configured with GitHub SSH key
- [ ] tmux installed
- [ ] nginx installed and configured
- [ ] SSL certificates (Certbot/Let's Encrypt) configured
- [ ] UFW firewall: ports 80, 443, 22 open; others closed
- [ ] Dagster systemd service configured
- [ ] Meilisearch Docker container running
- [ ] Cron jobs for log rotation configured

---

## ✅ COMPLETION TRACKING

Mark each section complete when ALL items within are done:

- [ ] 🔴 CRITICAL (blocks Phase 1)
- [ ] 🟡 HIGH PRIORITY (blocks Phase 2)
- [ ] 🟢 MEDIUM PRIORITY (blocks Phase 3)
- [ ] 🔵 LOW PRIORITY (nice to have)
- [ ] 🏗️ VPS Setup
