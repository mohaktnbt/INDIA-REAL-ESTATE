import { NextRequest, NextResponse } from 'next/server';

// Mock AI insights endpoint. In production this would call Claude/Groq.
// Returns structured insights about the market, micro-markets, or developers.

interface AIInsight {
  id: string;
  type: 'market-brief' | 'micro-market' | 'developer' | 'comparison';
  title: string;
  generatedAt: string;
  model: string;
  summary: string;
  highlights: string[];
  riskFactors: string[];
  opportunities: string[];
  confidence: number; // 0-100
}

const MOCK_INSIGHTS: Record<string, AIInsight> = {
  'daily-brief': {
    id: 'daily-brief',
    type: 'market-brief',
    title: 'India Real Estate — Morning Brief',
    generatedAt: new Date().toISOString(),
    model: 'claude-opus-4-6',
    summary:
      'Indian residential markets continue a broad-based upcycle with 7 of 8 tier-1 cities posting positive YoY price growth. Hyderabad leads at +15.3% driven by IT corridor expansion in Kokapet and Tellapur. Bengaluru follows at +12.5%, powered by record GCC absorption (4.2M sq ft in Q1). Mumbai remains structurally tight; BKC and Worli command premium valuations post metro-3 completion. Kolkata is the only soft market, with Q1 launches at a 5-year low.',
    highlights: [
      'Hyderabad H1 2026 new launches (38,500) are highest in India, overtaking Mumbai and NCR',
      'Nifty Realty index at 52-week high, up 24% YTD — DLF, Prestige, Lodha leading',
      'RBI holds repo at 6.25% — home loan rates stable at 8.35-9.10% band',
      'Mumbai metro-3 full operationalization drove BKC prices +18% YoY',
    ],
    riskFactors: [
      'Kolkata Q1 launches at 5-year low — demand weakness persists',
      'MahaRERA enforcement escalating — 14 Pune projects deregistered, ₹280cr Thane refund ordered',
      'NCR inventory-to-absorption ratio at 28 months — still high vs southern cities (12-18)',
    ],
    opportunities: [
      'Kokapet / Tellapur (Hyderabad) — new corridor with 15%+ YoY growth',
      'Noida Sector 146-150 — Godrej entry at ₹22.5k/sqft acquisition implied price',
      'OMR Sholinganallur (Chennai) — unsold inventory down 12%, absorption improving',
    ],
    confidence: 87,
  },
  mumbai: {
    id: 'mumbai',
    type: 'micro-market',
    title: 'Mumbai Market Analysis',
    generatedAt: new Date().toISOString(),
    model: 'claude-opus-4-6',
    summary:
      'Mumbai continues to be structurally supply-constrained with Q1 absorption at 95% of launches. Post metro-3 completion, the BKC-Worli-Lower Parel corridor has decisively re-priced upward (14-18% YoY). Thane West and Navi Mumbai offer the best affordability-growth combination, with Kharghar emerging as the strongest satellite market.',
    highlights: [
      'Average price/sqft: ₹18,500 (+7.2% YoY)',
      'BKC at ₹48,000/sqft, +18% YoY',
      'Thane West: best value with +11% YoY at ₹14,200/sqft',
      'Active RERA projects: 8,450 — highest in India',
    ],
    riskFactors: [
      'Months of inventory at 28 — above healthy 18-month range',
      'Heavy redevelopment pipeline may pressure resale prices',
    ],
    opportunities: [
      'Kharghar / Panvel — metro connectivity + affordability',
      'Wadala / Sion — BKC spillover corridor',
      'Dahisar — new metro extension completing in 2026',
    ],
    confidence: 91,
  },
  bangalore: {
    id: 'bangalore',
    type: 'micro-market',
    title: 'Bangalore Market Analysis',
    generatedAt: new Date().toISOString(),
    model: 'claude-opus-4-6',
    summary:
      'Bangalore is India\'s strongest fundamentals story. Record GCC absorption (4.2M sq ft in Q1 2026), healthiest inventory-to-absorption (16 months), and the highest health index (88) of all tier-1 cities. Whitefield and Sarjapur Road lead, with North Bangalore (Devanahalli, Yelahanka, Thanisandra) emerging on the back of airport corridor and metro phase 2.',
    highlights: [
      'Average price/sqft: ₹9,200 (+12.5% YoY)',
      '52,000 active listings — highest in India',
      'Health Index 88/100 — highest of all tier-1 cities',
      '380 new launches in last 30 days',
    ],
    riskFactors: [
      'Whitefield traffic congestion — infrastructure lag',
      'Tech sector hiring slowdown risk for peripheral markets',
    ],
    opportunities: [
      'North Bangalore (Devanahalli, Yelahanka) — airport corridor + metro',
      'Sarjapur Road — tech cluster spillover',
      'Electronic City phase 2 — infrastructure upgrade',
    ],
    confidence: 93,
  },
};

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const target = searchParams.get('target') || 'daily-brief';
  const insight = MOCK_INSIGHTS[target.toLowerCase()] || MOCK_INSIGHTS['daily-brief'];

  return NextResponse.json({
    data: insight,
    updatedAt: new Date().toISOString(),
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const target = body.target || 'daily-brief';
  const insight = MOCK_INSIGHTS[String(target).toLowerCase()] || MOCK_INSIGHTS['daily-brief'];

  return NextResponse.json({
    data: insight,
    updatedAt: new Date().toISOString(),
  });
}
