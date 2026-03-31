// ---------------------------------------------------------------------------
// Property types
// ---------------------------------------------------------------------------

export type PropertyType = 'apartment' | 'villa' | 'plot' | 'commercial' | 'penthouse' | 'studio';
export type TransactionType = 'sale' | 'rent' | 'resale';
export type FurnishingType = 'furnished' | 'semi-furnished' | 'unfurnished';
export type FacingDirection =
  | 'north'
  | 'south'
  | 'east'
  | 'west'
  | 'north-east'
  | 'north-west'
  | 'south-east'
  | 'south-west';

export interface Property {
  id: string;
  source: string;
  sourceId: string;
  title: string;
  propertyType: PropertyType;
  transactionType: TransactionType;
  bhkConfig: string | null;
  carpetArea: number | null;
  builtUpArea: number | null;
  superBuiltUpArea: number | null;
  price: number | null;
  pricePerSqFt: number | null;
  city: string;
  microMarket: string | null;
  locality: string | null;
  pincode: string | null;
  latitude: number | null;
  longitude: number | null;
  developerId: string | null;
  reraId: string | null;
  floor: number | null;
  totalFloors: number | null;
  facing: FacingDirection | null;
  furnishing: FurnishingType | null;
  parking: number | null;
  amenities: string[] | null;
  possessionDate: Date | null;
  isVerified: boolean;
  listedAt: Date | null;
  scrapedAt: Date;
  updatedAt: Date;
}

// ---------------------------------------------------------------------------
// Market types
// ---------------------------------------------------------------------------

export type CityTier = 1 | 2 | 3;

export interface City {
  name: string;
  state: string;
  tier: CityTier;
  latitude: number;
  longitude: number;
  population: number;
}

export interface MicroMarket {
  name: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

export interface MarketData {
  id: string;
  city: string;
  microMarket: string;
  state: string;
  tier: CityTier;
  latitude: number;
  longitude: number;
  population: number | null;
  healthIndex: number | null;
  medianPricePerSqFt: number | null;
  priceChangeYoY: number | null;
  priceChangeMoM: number | null;
  activeListings: number | null;
  newLaunches30d: number | null;
  unsoldInventory: number | null;
  monthsOfInventory: number | null;
  reraProjects: number | null;
  avgAqi: number | null;
  metroConnectivity: boolean | null;
  nearestAirportKm: number | null;
  avgRentalYield: number | null;
  updatedAt: Date;
}

// ---------------------------------------------------------------------------
// Price history types
// ---------------------------------------------------------------------------

export interface PriceHistoryPoint {
  time: Date;
  city: string;
  microMarket: string;
  propertyType: PropertyType;
  bhkConfig: string | null;
  medianPrice: number | null;
  medianPricePerSqFt: number | null;
  listingCount: number | null;
  avgDaysOnMarket: number | null;
  source: string;
}

// ---------------------------------------------------------------------------
// RERA types
// ---------------------------------------------------------------------------

export type RERAStatus = 'active' | 'completed' | 'lapsed' | 'revoked';
export type PromoterType = 'individual' | 'company' | 'partnership' | 'llp' | 'society';
export type ProjectType = 'residential' | 'commercial' | 'mixed';

export interface RERAProject {
  id: string;
  reraNumber: string;
  state: string;
  projectName: string;
  promoterName: string;
  promoterType: PromoterType | null;
  projectType: ProjectType | null;
  district: string | null;
  taluka: string | null;
  village: string | null;
  pincode: string | null;
  latitude: number | null;
  longitude: number | null;
  totalUnits: number | null;
  totalArea: number | null;
  approvedDate: Date | null;
  completionDate: Date | null;
  extendedDate: Date | null;
  status: RERAStatus | null;
  complaints: number;
  scrapedAt: Date;
  updatedAt: Date;
}

// ---------------------------------------------------------------------------
// Stock types
// ---------------------------------------------------------------------------

export type StockCategory = 'realty' | 'reit' | 'hfc';

export interface Stock {
  symbol: string;
  name: string;
  category: StockCategory;
  lastPrice: number | null;
  change: number | null;
  changePercent: number | null;
  volume: number | null;
  marketCap: number | null;
  high52w: number | null;
  low52w: number | null;
}

export interface StockCandle {
  time: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

// ---------------------------------------------------------------------------
// Developer types
// ---------------------------------------------------------------------------

export type DeveloperType = 'listed' | 'private' | 'govt';

export interface Developer {
  id: string;
  name: string;
  slug: string;
  type: DeveloperType | null;
  nseSymbol: string | null;
  headquarters: string | null;
  foundedYear: number | null;
  healthScore: number | null;
  totalProjects: number | null;
  activeProjects: number | null;
  completedProjects: number | null;
  delayedProjects: number | null;
  totalAreaDeveloped: number | null;
  ibbCases: number;
  updatedAt: Date;
}

// ---------------------------------------------------------------------------
// News types
// ---------------------------------------------------------------------------

export type NewsCategory = 'policy' | 'market' | 'project' | 'legal' | 'infrastructure';
export type NewsSentiment = 'positive' | 'negative' | 'neutral';

export interface NewsArticle {
  id: string;
  title: string;
  url: string;
  source: string;
  publishedAt: Date | null;
  summary: string | null;
  cities: string[] | null;
  developers: string[] | null;
  sentiment: number | null;
  category: NewsCategory | null;
  isBreaking: boolean;
  scrapedAt: Date;
}

// ---------------------------------------------------------------------------
// Alert types
// ---------------------------------------------------------------------------

export type AlertType = 'price' | 'rera' | 'news' | 'stock' | 'developer';
export type AlertChannel = 'telegram' | 'whatsapp' | 'email' | 'web';

export interface AlertCondition {
  field: string;
  operator: 'gt' | 'lt' | 'eq' | 'gte' | 'lte' | 'contains';
  value: string | number | boolean;
}

export interface Alert {
  id: string;
  userId: string | null;
  type: AlertType;
  target: string;
  condition: AlertCondition;
  channel: AlertChannel;
  isActive: boolean;
  lastTriggered: Date | null;
  createdAt: Date;
}

// ---------------------------------------------------------------------------
// API response types
// ---------------------------------------------------------------------------

export interface ApiResponse<T> {
  data: T;
  meta?: {
    total: number;
    page: number;
    pageSize: number;
  };
  updatedAt?: string;
}

export interface ApiError {
  error: string;
  message: string;
  statusCode: number;
}

// ---------------------------------------------------------------------------
// Dashboard state types
// ---------------------------------------------------------------------------

export type DateRange = '1D' | '1W' | '1M' | '3M' | '6M' | '1Y' | '3Y' | '5Y' | 'ALL';

export type MapLayerType =
  | 'price-heatmap'
  | 'rera-projects'
  | 'metro-lines'
  | 'highways'
  | 'airports'
  | 'aqi'
  | 'flood-risk';

export interface MapViewState {
  latitude: number;
  longitude: number;
  zoom: number;
  bearing: number;
  pitch: number;
}

export interface DashboardFilters {
  city: string | null;
  microMarket: string | null;
  propertyType: PropertyType | null;
  transactionType: TransactionType | null;
  bhkConfig: string | null;
  priceMin: number | null;
  priceMax: number | null;
  areaMin: number | null;
  areaMax: number | null;
  dateRange: DateRange;
}

// ---------------------------------------------------------------------------
// Search types
// ---------------------------------------------------------------------------

export type SearchEntityType = 'city' | 'micro_market' | 'developer' | 'rera_project' | 'property';

export interface SearchResult {
  id: string;
  entityType: SearchEntityType;
  title: string;
  subtitle: string | null;
  url: string;
}
