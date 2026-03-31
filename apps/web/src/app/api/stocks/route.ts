import { NextRequest, NextResponse } from 'next/server';

const NIFTY_REALTY_STOCKS = [
  { symbol: 'DLF', name: 'DLF Ltd', category: 'realty', lastPrice: 872.45, change: 12.30, changePercent: 1.43, volume: 8540000, marketCap: 215800, high52w: 968.00, low52w: 680.00 },
  { symbol: 'GODREJPROP', name: 'Godrej Properties', category: 'realty', lastPrice: 2845.60, change: -32.15, changePercent: -1.12, volume: 1250000, marketCap: 79200, high52w: 3402.00, low52w: 2180.00 },
  { symbol: 'OBEROIRLTY', name: 'Oberoi Realty', category: 'realty', lastPrice: 1965.30, change: 28.45, changePercent: 1.47, volume: 620000, marketCap: 71500, high52w: 2080.00, low52w: 1420.00 },
  { symbol: 'PRESTIGE', name: 'Prestige Estates', category: 'realty', lastPrice: 1720.80, change: 15.60, changePercent: 0.91, volume: 980000, marketCap: 69200, high52w: 1950.00, low52w: 1280.00 },
  { symbol: 'LODHA', name: 'Macrotech Developers', category: 'realty', lastPrice: 1380.25, change: -8.90, changePercent: -0.64, volume: 2100000, marketCap: 131500, high52w: 1580.00, low52w: 980.00 },
  { symbol: 'BRIGADE', name: 'Brigade Enterprises', category: 'realty', lastPrice: 1245.70, change: 22.80, changePercent: 1.86, volume: 540000, marketCap: 28800, high52w: 1380.00, low52w: 890.00 },
  { symbol: 'SOBHA', name: 'Sobha Ltd', category: 'realty', lastPrice: 1650.40, change: 8.20, changePercent: 0.50, volume: 320000, marketCap: 15600, high52w: 1920.00, low52w: 1180.00 },
  { symbol: 'MAHLIFE', name: 'Mahindra Lifespace', category: 'realty', lastPrice: 545.20, change: 3.15, changePercent: 0.58, volume: 280000, marketCap: 8400, high52w: 680.00, low52w: 420.00 },
  { symbol: 'PHOENIXLTD', name: 'Phoenix Mills', category: 'realty', lastPrice: 1890.60, change: -14.30, changePercent: -0.75, volume: 450000, marketCap: 33800, high52w: 2150.00, low52w: 1520.00 },
  { symbol: 'SUNTECK', name: 'Sunteck Realty', category: 'realty', lastPrice: 528.90, change: 6.75, changePercent: 1.29, volume: 680000, marketCap: 7400, high52w: 620.00, low52w: 380.00 },
];

const REITS = [
  { symbol: 'EMBASSY', name: 'Embassy Office Parks REIT', category: 'reit', lastPrice: 385.20, change: 2.40, changePercent: 0.63, volume: 1200000, marketCap: 36500, high52w: 420.00, low52w: 310.00 },
  { symbol: 'MINDSPACE', name: 'Mindspace Business Parks REIT', category: 'reit', lastPrice: 348.60, change: -1.80, changePercent: -0.51, volume: 850000, marketCap: 20600, high52w: 380.00, low52w: 285.00 },
  { symbol: 'BROOKREIT', name: 'Brookfield India REIT', category: 'reit', lastPrice: 292.40, change: 1.20, changePercent: 0.41, volume: 420000, marketCap: 10200, high52w: 340.00, low52w: 245.00 },
  { symbol: 'NEXUS', name: 'Nexus Select Trust', category: 'reit', lastPrice: 142.80, change: 0.65, changePercent: 0.46, volume: 2800000, marketCap: 21400, high52w: 165.00, low52w: 118.00 },
  { symbol: 'INDIGRID', name: 'India Grid Trust', category: 'reit', lastPrice: 148.50, change: -0.30, changePercent: -0.20, volume: 380000, marketCap: 12800, high52w: 162.00, low52w: 128.00 },
];

const HFCS = [
  { symbol: 'HDFC', name: 'HDFC Ltd', category: 'hfc', lastPrice: 1680.40, change: 18.50, changePercent: 1.11, volume: 4200000, marketCap: 920000, high52w: 1820.00, low52w: 1450.00 },
  { symbol: 'LICHSGFIN', name: 'LIC Housing Finance', category: 'hfc', lastPrice: 642.80, change: -5.20, changePercent: -0.80, volume: 2800000, marketCap: 35400, high52w: 780.00, low52w: 480.00 },
  { symbol: 'PNBHOUSING', name: 'PNB Housing Finance', category: 'hfc', lastPrice: 845.60, change: 12.40, changePercent: 1.49, volume: 680000, marketCap: 15200, high52w: 1020.00, low52w: 620.00 },
  { symbol: 'CANFINHOME', name: 'Can Fin Homes', category: 'hfc', lastPrice: 782.30, change: 8.90, changePercent: 1.15, volume: 420000, marketCap: 10400, high52w: 920.00, low52w: 640.00 },
  { symbol: 'AAVAS', name: 'Aavas Financiers', category: 'hfc', lastPrice: 1720.50, change: -15.30, changePercent: -0.88, volume: 180000, marketCap: 13600, high52w: 1980.00, low52w: 1380.00 },
];

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const category = searchParams.get('category');

  let stocks = [...NIFTY_REALTY_STOCKS, ...REITS, ...HFCS];

  if (category) {
    stocks = stocks.filter((s) => s.category === category);
  }

  // Nifty Realty Index summary
  const niftyRealty = {
    symbol: 'NIFTYREALTY',
    name: 'Nifty Realty Index',
    lastPrice: 1042.50,
    change: 18.35,
    changePercent: 1.79,
    dayHigh: 1048.20,
    dayLow: 1024.80,
    high52w: 1180.00,
    low52w: 780.00,
  };

  return NextResponse.json({
    data: {
      index: niftyRealty,
      stocks,
    },
    updatedAt: new Date().toISOString(),
  });
}
