import type { DateRange, PropertyType, TransactionType, RERAStatus, StockCategory } from './types';

// ---------------------------------------------------------------------------
// Indian States & Union Territories
// ---------------------------------------------------------------------------

export const INDIAN_STATES = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  // Union Territories
  'Andaman and Nicobar Islands',
  'Chandigarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh',
  'Lakshadweep',
  'Puducherry',
] as const;

export type IndianState = (typeof INDIAN_STATES)[number];

// ---------------------------------------------------------------------------
// Nifty Realty Index — 10 constituent stocks
// ---------------------------------------------------------------------------

export const NIFTY_REALTY_STOCKS: ReadonlyArray<{
  symbol: string;
  name: string;
  category: StockCategory;
}> = [
  { symbol: 'DLF', name: 'DLF Ltd', category: 'realty' },
  { symbol: 'GODREJPROP', name: 'Godrej Properties Ltd', category: 'realty' },
  { symbol: 'OBEROIRLTY', name: 'Oberoi Realty Ltd', category: 'realty' },
  { symbol: 'PHOENIXLTD', name: 'The Phoenix Mills Ltd', category: 'realty' },
  { symbol: 'PRESTIGE', name: 'Prestige Estates Projects Ltd', category: 'realty' },
  { symbol: 'BRIGADE', name: 'Brigade Enterprises Ltd', category: 'realty' },
  { symbol: 'LODHA', name: 'Macrotech Developers Ltd', category: 'realty' },
  { symbol: 'SOBHA', name: 'Sobha Ltd', category: 'realty' },
  { symbol: 'SUNTECK', name: 'Sunteck Realty Ltd', category: 'realty' },
  { symbol: 'RAYMOND', name: 'Raymond Ltd', category: 'realty' },
] as const;

// ---------------------------------------------------------------------------
// Listed REITs
// ---------------------------------------------------------------------------

export const REITS: ReadonlyArray<{
  symbol: string;
  name: string;
  category: StockCategory;
}> = [
  { symbol: 'EMBASSY', name: 'Embassy Office Parks REIT', category: 'reit' },
  { symbol: 'MINDSPACE', name: 'Mindspace Business Parks REIT', category: 'reit' },
  { symbol: 'BROOKFIELD', name: 'Brookfield India Real Estate Trust', category: 'reit' },
  { symbol: 'NEXUSSELECT', name: 'Nexus Select Trust', category: 'reit' },
  { symbol: 'SMREIT', name: 'SM REIT (Small & Medium REIT)', category: 'reit' },
] as const;

// ---------------------------------------------------------------------------
// Top Housing Finance Companies (HFCs)
// ---------------------------------------------------------------------------

export const HFCS: ReadonlyArray<{
  symbol: string;
  name: string;
  category: StockCategory;
}> = [
  { symbol: 'HDFC', name: 'HDFC Bank Ltd (merged)', category: 'hfc' },
  { symbol: 'LICHSGFIN', name: 'LIC Housing Finance Ltd', category: 'hfc' },
  { symbol: 'PNBHOUSING', name: 'PNB Housing Finance Ltd', category: 'hfc' },
  { symbol: 'CANFINHOME', name: 'Can Fin Homes Ltd', category: 'hfc' },
  { symbol: 'HOMEFIRST', name: 'Home First Finance Company India Ltd', category: 'hfc' },
  { symbol: 'AAVAS', name: 'Aavas Financiers Ltd', category: 'hfc' },
  { symbol: 'APTUS', name: 'Aptus Value Housing Finance India Ltd', category: 'hfc' },
  { symbol: 'BAJFINANCE', name: 'Bajaj Finance Ltd', category: 'hfc' },
  { symbol: 'SBICARD', name: 'SBI Cards & Payment Services Ltd', category: 'hfc' },
  { symbol: 'REPCO', name: 'Repco Home Finance Ltd', category: 'hfc' },
] as const;

// ---------------------------------------------------------------------------
// Enumeration constants
// ---------------------------------------------------------------------------

export const PROPERTY_TYPES: ReadonlyArray<PropertyType> = [
  'apartment',
  'villa',
  'plot',
  'commercial',
  'penthouse',
  'studio',
] as const;

export const TRANSACTION_TYPES: ReadonlyArray<TransactionType> = [
  'sale',
  'rent',
  'resale',
] as const;

export const BHK_CONFIGS = [
  '1 RK',
  '1 BHK',
  '1.5 BHK',
  '2 BHK',
  '2.5 BHK',
  '3 BHK',
  '3.5 BHK',
  '4 BHK',
  '4+ BHK',
  '5 BHK',
  '6+ BHK',
] as const;

export type BHKConfig = (typeof BHK_CONFIGS)[number];

export const RERA_STATUSES: ReadonlyArray<RERAStatus> = [
  'active',
  'completed',
  'lapsed',
  'revoked',
] as const;

export const DATE_RANGES: ReadonlyArray<DateRange> = [
  '1D',
  '1W',
  '1M',
  '3M',
  '6M',
  '1Y',
  '3Y',
  '5Y',
  'ALL',
] as const;

// ---------------------------------------------------------------------------
// Map defaults
// ---------------------------------------------------------------------------

export const MAP_CENTER = {
  lat: 20.5937,
  lng: 78.9629,
  zoom: 5,
} as const;

// ---------------------------------------------------------------------------
// Pagination
// ---------------------------------------------------------------------------

export const DEFAULT_PAGE_SIZE = 25;
export const MAX_PAGE_SIZE = 100;

// ---------------------------------------------------------------------------
// Data source identifiers
// ---------------------------------------------------------------------------

export const DATA_SOURCES = {
  LISTINGS: ['99acres', 'magicbricks', 'nobroker', 'housing'] as const,
  RERA: ['maharera', 'uprera', 'krera', 'tsrera', 'hrera', 'gujrera'] as const,
  GOVERNMENT: ['nhb_residex', 'rbi_dbie', 'data_gov_in', 'cpcb', 'pmay'] as const,
  FINANCIAL: ['nse', 'angel_one', 'jugaad_data'] as const,
  ALTERNATIVE: ['google_trends', 'news_rss', 'gdelt'] as const,
} as const;

// ---------------------------------------------------------------------------
// News sources
// ---------------------------------------------------------------------------

export const NEWS_SOURCES = [
  'ET Realty',
  'Moneycontrol Real Estate',
  'LiveMint',
  'Business Standard',
  'Financial Express',
  'NDTV Profit',
  'Housing.com News',
  'PropTiger',
  'RealtyNXT',
  'Track2Realty',
  'Indian Express',
  'Times of India',
  'Hindustan Times',
  'The Hindu',
  'Mint',
] as const;

// ---------------------------------------------------------------------------
// RERA state portals
// ---------------------------------------------------------------------------

export const RERA_PORTALS: ReadonlyArray<{
  state: string;
  name: string;
  url: string;
}> = [
  { state: 'Maharashtra', name: 'MahaRERA', url: 'https://maharera.maharashtra.gov.in' },
  { state: 'Uttar Pradesh', name: 'UP RERA', url: 'https://www.up-rera.in' },
  { state: 'Karnataka', name: 'Karnataka RERA', url: 'https://rera.karnataka.gov.in' },
  { state: 'Telangana', name: 'Telangana RERA', url: 'https://rera.telangana.gov.in' },
  { state: 'Haryana', name: 'HRERA', url: 'https://haryanarera.gov.in' },
  { state: 'Tamil Nadu', name: 'TNRERA', url: 'https://www.tnrera.in' },
  { state: 'Gujarat', name: 'GujRERA', url: 'https://gujrera.gujarat.gov.in' },
  { state: 'Rajasthan', name: 'Rajasthan RERA', url: 'https://rera.rajasthan.gov.in' },
  { state: 'West Bengal', name: 'WB HIRA', url: 'https://wbhira.gov.in' },
  { state: 'Kerala', name: 'Kerala RERA', url: 'https://rera.kerala.gov.in' },
  { state: 'Madhya Pradesh', name: 'MP RERA', url: 'https://rera.mp.gov.in' },
  { state: 'Punjab', name: 'Punjab RERA', url: 'https://rera.punjab.gov.in' },
  { state: 'Odisha', name: 'Odisha RERA', url: 'https://rera.odisha.gov.in' },
  { state: 'Goa', name: 'Goa RERA', url: 'https://rera.goa.gov.in' },
  { state: 'Delhi', name: 'Delhi RERA', url: 'https://rera.delhi.gov.in' },
] as const;
