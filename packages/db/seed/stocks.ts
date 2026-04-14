export interface StockSeed {
  symbol: string;
  name: string;
  category: 'realty' | 'reit' | 'hfc';
  isin: string;
}

export const niftyRealtyStocks: StockSeed[] = [
  { symbol: 'DLF', name: 'DLF Ltd', category: 'realty', isin: 'INE271C01023' },
  { symbol: 'GODREJPROP', name: 'Godrej Properties Ltd', category: 'realty', isin: 'INE484J01027' },
  { symbol: 'OBEROIRLTY', name: 'Oberoi Realty Ltd', category: 'realty', isin: 'INE093I01010' },
  { symbol: 'PRESTIGE', name: 'Prestige Estates Projects Ltd', category: 'realty', isin: 'INE811K01011' },
  { symbol: 'LODHA', name: 'Macrotech Developers Ltd', category: 'realty', isin: 'INE670K01029' },
  { symbol: 'BRIGADE', name: 'Brigade Enterprises Ltd', category: 'realty', isin: 'INE791I01019' },
  { symbol: 'SOBHA', name: 'Sobha Ltd', category: 'realty', isin: 'INE671H01015' },
  { symbol: 'MAHLIFE', name: 'Mahindra Lifespace Developers Ltd', category: 'realty', isin: 'INE813A01018' },
  { symbol: 'PHOENIXLTD', name: 'Phoenix Mills Ltd', category: 'realty', isin: 'INE211B01039' },
  { symbol: 'SUNTECK', name: 'Sunteck Realty Ltd', category: 'realty', isin: 'INE805D01034' },
];

export const reits: StockSeed[] = [
  { symbol: 'EMBASSY', name: 'Embassy Office Parks REIT', category: 'reit', isin: 'INE041025011' },
  { symbol: 'MINDSPACE', name: 'Mindspace Business Parks REIT', category: 'reit', isin: 'INE0CCU25010' },
  { symbol: 'BROOKREIT', name: 'Brookfield India Real Estate Trust', category: 'reit', isin: 'INE0JHU25010' },
  { symbol: 'NEXUS', name: 'Nexus Select Trust', category: 'reit', isin: 'INE0MBU25014' },
  { symbol: 'INDIGRID', name: 'India Grid Trust', category: 'reit', isin: 'INE219X25012' },
];

export const hfcs: StockSeed[] = [
  { symbol: 'HDFCBANK', name: 'HDFC Bank Ltd', category: 'hfc', isin: 'INE040A01034' },
  { symbol: 'LICHSGFIN', name: 'LIC Housing Finance Ltd', category: 'hfc', isin: 'INE115A01026' },
  { symbol: 'PNBHOUSING', name: 'PNB Housing Finance Ltd', category: 'hfc', isin: 'INE572E01012' },
  { symbol: 'CANFINHOME', name: 'Can Fin Homes Ltd', category: 'hfc', isin: 'INE477A01020' },
  { symbol: 'AAVAS', name: 'Aavas Financiers Ltd', category: 'hfc', isin: 'INE216P01012' },
  { symbol: 'HOMEFIRST', name: 'Home First Finance Company India Ltd', category: 'hfc', isin: 'INE481N01028' },
  { symbol: 'APTUS', name: 'Aptus Value Housing Finance India Ltd', category: 'hfc', isin: 'INE852O01025' },
  { symbol: 'REPCOHOME', name: 'Repco Home Finance Ltd', category: 'hfc', isin: 'INE612J01015' },
  { symbol: 'INDIASHLTR', name: 'India Shelter Finance Corporation Ltd', category: 'hfc', isin: 'INE922K01018' },
  { symbol: 'STARCEMENT', name: 'Star Housing Finance Ltd', category: 'hfc', isin: 'INE460H01021' },
];

export const allStocks = [...niftyRealtyStocks, ...reits, ...hfcs];
