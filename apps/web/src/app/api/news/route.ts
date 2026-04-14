import { NextRequest, NextResponse } from 'next/server';

// Mock news data — structured for eventual real scraper backfill.
// Sources modeled after ET Realty, Moneycontrol, LiveMint, Business Standard, The Hindu RE.
const MOCK_NEWS = [
  {
    id: 'n001',
    title: 'Bengaluru office leasing hits record high as GCC expansion continues',
    url: 'https://economictimes.indiatimes.com/news/real-estate',
    source: 'ET Realty',
    sourceLogo: null,
    publishedAt: '2026-04-10T08:15:00Z',
    summary: 'Bengaluru recorded its highest-ever quarterly office leasing in Q1 2026, driven by Global Capability Centres taking up 4.2 million sq ft across Whitefield, Outer Ring Road and North corridor.',
    cities: ['Bangalore'],
    developers: ['Prestige Estates', 'Brigade Enterprises'],
    sentiment: 0.72,
    category: 'market',
    isBreaking: true,
  },
  {
    id: 'n002',
    title: 'MahaRERA orders ₹280 cr refund to homebuyers in delayed Thane project',
    url: 'https://www.moneycontrol.com/news/business/real-estate/',
    source: 'Moneycontrol',
    sourceLogo: null,
    publishedAt: '2026-04-10T06:45:00Z',
    summary: 'MahaRERA has directed a Thane-based developer to refund ₹280 crore with 10.85% interest to 1,200 homebuyers after the project missed its extended completion deadline by over 18 months.',
    cities: ['Thane', 'Mumbai'],
    developers: [],
    sentiment: -0.35,
    category: 'legal',
    isBreaking: false,
  },
  {
    id: 'n003',
    title: 'Hyderabad leads India in H1 2026 new launches with 38,500 units',
    url: 'https://www.livemint.com/industry/real-estate',
    source: 'LiveMint',
    sourceLogo: null,
    publishedAt: '2026-04-10T04:20:00Z',
    summary: 'Hyderabad overtook Mumbai and NCR in new residential launches during H1 2026. Kokapet, Tellapur and Narsingi together accounted for 42% of the new supply.',
    cities: ['Hyderabad'],
    developers: ['My Home Group', 'Aparna Constructions'],
    sentiment: 0.58,
    category: 'market',
    isBreaking: false,
  },
  {
    id: 'n004',
    title: 'RBI holds repo rate at 6.25%, home loan rates expected to stay stable',
    url: 'https://www.business-standard.com/real-estate',
    source: 'Business Standard',
    sourceLogo: null,
    publishedAt: '2026-04-09T14:30:00Z',
    summary: 'The Reserve Bank of India maintained the repo rate at 6.25% in its April policy meeting. Home loan rates from HDFC, SBI and LIC Housing are expected to remain in the 8.35%-9.10% range.',
    cities: [],
    developers: [],
    sentiment: 0.25,
    category: 'policy',
    isBreaking: false,
  },
  {
    id: 'n005',
    title: 'DLF launches luxury project in Gurgaon Golf Course Extension, ₹5,200 cr GDV',
    url: 'https://realty.economictimes.indiatimes.com/',
    source: 'ET Realty',
    sourceLogo: null,
    publishedAt: '2026-04-09T11:10:00Z',
    summary: 'DLF has launched Phase 4 of its luxury residential project on Golf Course Extension Road in Gurgaon with a gross development value of ₹5,200 crore. Prices start at ₹4.8 crore for 3-BHK units.',
    cities: ['Gurgaon'],
    developers: ['DLF Ltd'],
    sentiment: 0.62,
    category: 'project',
    isBreaking: false,
  },
  {
    id: 'n006',
    title: 'Mumbai metro line 3 fully operational — BKC property prices up 18% YoY',
    url: 'https://www.thehindu.com/business/industry/',
    source: 'The Hindu',
    sourceLogo: null,
    publishedAt: '2026-04-09T09:05:00Z',
    summary: 'With the full operationalization of Mumbai Metro Line 3 (Aqua Line), property prices in BKC, Worli and Dadar have appreciated 18%, 14% and 11% respectively over the past year.',
    cities: ['Mumbai'],
    developers: [],
    sentiment: 0.68,
    category: 'infrastructure',
    isBreaking: false,
  },
  {
    id: 'n007',
    title: 'Chennai sees 12% drop in unsold inventory as demand absorbs new launches',
    url: 'https://www.livemint.com/industry/real-estate',
    source: 'LiveMint',
    sourceLogo: null,
    publishedAt: '2026-04-08T16:45:00Z',
    summary: 'Chennai residential unsold inventory dropped to 45,200 units in Q1 2026, a 12% decline YoY. OMR and Porur saw the strongest absorption rates.',
    cities: ['Chennai'],
    developers: [],
    sentiment: 0.55,
    category: 'market',
    isBreaking: false,
  },
  {
    id: 'n008',
    title: 'Godrej Properties acquires 60-acre land parcel in Noida for ₹1,350 cr',
    url: 'https://www.moneycontrol.com/news/business/real-estate/',
    source: 'Moneycontrol',
    sourceLogo: null,
    publishedAt: '2026-04-08T12:30:00Z',
    summary: 'Godrej Properties has acquired a 60-acre land parcel in Noida Sector 146 for ₹1,350 crore. The project will have a gross development potential of 5.5 million sq ft.',
    cities: ['Noida'],
    developers: ['Godrej Properties'],
    sentiment: 0.70,
    category: 'project',
    isBreaking: false,
  },
  {
    id: 'n009',
    title: 'Pune RERA cancels registration of 14 projects for non-compliance',
    url: 'https://realty.economictimes.indiatimes.com/',
    source: 'ET Realty',
    sourceLogo: null,
    publishedAt: '2026-04-08T08:20:00Z',
    summary: 'MahaRERA has cancelled the registration of 14 Pune-based projects for failing to update Quarterly Progress Reports and violating escrow account provisions.',
    cities: ['Pune'],
    developers: [],
    sentiment: -0.42,
    category: 'legal',
    isBreaking: false,
  },
  {
    id: 'n010',
    title: 'Nifty Realty index hits 52-week high, up 24% YTD',
    url: 'https://www.business-standard.com/markets',
    source: 'Business Standard',
    sourceLogo: null,
    publishedAt: '2026-04-07T15:55:00Z',
    summary: 'The Nifty Realty index touched a 52-week high of 1,082.40 on Monday, with DLF, Prestige and Lodha leading the gains. The index is up 24% year-to-date.',
    cities: [],
    developers: ['DLF Ltd', 'Prestige Estates', 'Macrotech Developers (Lodha)'],
    sentiment: 0.78,
    category: 'market',
    isBreaking: false,
  },
  {
    id: 'n011',
    title: 'Kolkata residential market records lowest launches in 5 years',
    url: 'https://www.livemint.com/industry/real-estate',
    source: 'LiveMint',
    sourceLogo: null,
    publishedAt: '2026-04-07T11:15:00Z',
    summary: 'Kolkata recorded just 4,200 new residential launches in Q1 2026, the lowest in five years. Analysts cite weak demand and regulatory delays as primary causes.',
    cities: ['Kolkata'],
    developers: [],
    sentiment: -0.52,
    category: 'market',
    isBreaking: false,
  },
  {
    id: 'n012',
    title: 'Ahmedabad sees 8.1% YoY price growth, SG Highway remains premium corridor',
    url: 'https://www.thehindu.com/business/',
    source: 'The Hindu',
    sourceLogo: null,
    publishedAt: '2026-04-07T07:40:00Z',
    summary: 'Ahmedabad residential prices grew 8.1% YoY in Q1 2026, led by SG Highway, Prahlad Nagar and Bopal. Average price/sqft crossed ₹5,200 for the first time.',
    cities: ['Ahmedabad'],
    developers: [],
    sentiment: 0.48,
    category: 'market',
    isBreaking: false,
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const city = searchParams.get('city');
  const category = searchParams.get('category');
  const limit = parseInt(searchParams.get('limit') || '50', 10);

  let news = [...MOCK_NEWS];

  if (city) {
    news = news.filter((n) =>
      n.cities.some((c) => c.toLowerCase() === city.toLowerCase()),
    );
  }

  if (category) {
    news = news.filter((n) => n.category === category);
  }

  news = news.slice(0, limit);

  // Category breakdown for UI filters
  const categories = ['market', 'policy', 'project', 'legal', 'infrastructure'];
  const categoryCounts = Object.fromEntries(
    categories.map((c) => [c, MOCK_NEWS.filter((n) => n.category === c).length]),
  );

  return NextResponse.json({
    data: news,
    meta: {
      total: news.length,
      categoryCounts,
    },
    updatedAt: new Date().toISOString(),
  });
}
