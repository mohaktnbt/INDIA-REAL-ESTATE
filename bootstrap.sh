#!/bin/bash
# bootstrap.sh — Initialize India Real Estate Monitor project
# Run this AFTER creating the GitHub repo and cloning it

set -euo pipefail

echo "🏗️  Initializing India Real Estate Monitor..."

# ============================================================
# 1. Root monorepo setup with pnpm workspaces
# ============================================================
echo "📦 Setting up pnpm workspace..."

cat > pnpm-workspace.yaml << 'EOF'
packages:
  - 'apps/*'
  - 'packages/*'
EOF

cat > package.json << 'EOF'
{
  "name": "india-re-monitor",
  "private": true,
  "scripts": {
    "dev": "pnpm --filter web dev",
    "build": "pnpm --filter web build",
    "start": "pnpm --filter web start",
    "db:generate": "pnpm --filter @irem/db generate",
    "db:migrate": "pnpm --filter @irem/db migrate",
    "db:seed": "pnpm --filter @irem/db seed",
    "db:studio": "pnpm --filter @irem/db studio",
    "lint": "pnpm --filter web lint",
    "format": "prettier --write ."
  },
  "devDependencies": {
    "prettier": "^3.4.0",
    "typescript": "^5.7.0"
  },
  "engines": {
    "node": ">=22.0.0",
    "pnpm": ">=9.0.0"
  }
}
EOF

# ============================================================
# 2. Docker Compose for local development services
# ============================================================
echo "🐳 Creating Docker Compose..."

cat > docker-compose.yml << 'EOF'
services:
  postgres:
    image: timescale/timescaledb-ha:pg16
    container_name: irem-postgres
    environment:
      POSTGRES_DB: irem
      POSTGRES_USER: irem
      POSTGRES_PASSWORD: irem_dev_password
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/home/postgres/pgdata/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U irem"]
      interval: 5s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    container_name: irem-redis
    ports:
      - "6379:6379"
    volumes:
      - redisdata:/data

  meilisearch:
    image: getmeili/meilisearch:v1.12
    container_name: irem-meilisearch
    environment:
      MEILI_MASTER_KEY: irem_dev_meili_key
      MEILI_ENV: development
    ports:
      - "7700:7700"
    volumes:
      - meilidata:/meili_data

volumes:
  pgdata:
  redisdata:
  meilidata:
EOF

# ============================================================
# 3. Git configuration
# ============================================================
echo "📝 Creating .gitignore..."

cat > .gitignore << 'EOF'
# Dependencies
node_modules/
.pnpm-store/
__pycache__/
*.pyc
.venv/
venv/

# Environment
.env
.env.local
.env.production

# Build
.next/
out/
dist/
build/
*.tsbuildinfo

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
logs/

# Database
*.sql.bak
pgdata/

# Temporary
tmp/
temp/

# PMTiles (large files)
*.pmtiles

# Python
*.egg-info/
.eggs/
pip-log.txt
EOF

# ============================================================
# 4. Environment template
# ============================================================
echo "🔐 Creating .env.example..."

cat > .env.example << 'EOF'
# ===========================================
# India Real Estate Monitor — Environment
# ===========================================

# --- Database (Supabase or local Docker) ---
# For local dev: postgresql://irem:irem_dev_password@localhost:5432/irem
DATABASE_URL=postgresql://irem:irem_dev_password@localhost:5432/irem
DIRECT_URL=postgresql://irem:irem_dev_password@localhost:5432/irem

# --- Redis ---
# For local dev: redis://localhost:6379
# For production: use Upstash
UPSTASH_REDIS_REST_URL=http://localhost:6379
UPSTASH_REDIS_REST_TOKEN=

# --- Meilisearch ---
MEILI_HOST=http://localhost:7700
MEILI_MASTER_KEY=irem_dev_meili_key

# --- Maps ---
MAPPLS_API_KEY=
NEXT_PUBLIC_MAPLIBRE_STYLE=https://api.protomaps.com/styles/v4/dark/en.json?key=YOUR_KEY

# --- Stock Data ---
ANGEL_ONE_API_KEY=
ANGEL_ONE_CLIENT_ID=
ANGEL_ONE_PASSWORD=
ANGEL_ONE_TOTP_SECRET=

# --- AI ---
ANTHROPIC_API_KEY=
GROQ_API_KEY=

# --- News ---
NEWS_API_KEY=

# --- Notifications ---
TELEGRAM_BOT_TOKEN=

# --- Scraping ---
APIFY_TOKEN=

# --- Government APIs ---
DATA_GOV_IN_API_KEY=

# --- App ---
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=India Real Estate Monitor
EOF

# ============================================================
# 5. Create directory structure
# ============================================================
echo "📁 Creating directory structure..."

# Frontend
mkdir -p apps/web/src/{app/{api,\(dashboard\)/{overview,map,markets,rera,stocks,developers,compare,news,alerts}},components/{layout,maps,charts,tables,cards,widgets,ui},lib,hooks,stores,types}
mkdir -p apps/web/public/{fonts,icons}

# Database package
mkdir -p packages/db/{schema,migrations,seed}
mkdir -p packages/shared

# Services
mkdir -p services/scrapers/{rera,listings,government,financial,alternative}
mkdir -p services/pipelines/{assets,sensors,schedules}
mkdir -p services/ai
mkdir -p services/notifications

# Infrastructure
mkdir -p infra/{docker,nginx,scripts}

# GitHub Actions
mkdir -p .github/workflows

echo "✅ Directory structure created!"

# ============================================================
# 6. Create placeholder files to preserve git structure
# ============================================================
echo "📄 Creating placeholder files..."

# Keep empty dirs in git
find . -type d -empty -not -path './.git/*' -exec touch {}/.gitkeep \;

echo ""
echo "============================================"
echo "🎉 Bootstrap complete!"
echo "============================================"
echo ""
echo "Next steps:"
echo "  1. Copy .env.example to .env and fill in your API keys"
echo "  2. Run: docker compose up -d"
echo "  3. Run: pnpm install"
echo "  4. Start Claude Code and begin building!"
echo ""
echo "Recommended first Claude Code command:"
echo '  "Read CLAUDE.md and TIMELINE.md. Initialize the Next.js 15'
echo '   app in apps/web/ and the Drizzle ORM schema in packages/db/.'
echo '   Start with the database schema and seed data, then scaffold'
echo '   the frontend with the dark theme design system."'
echo ""
