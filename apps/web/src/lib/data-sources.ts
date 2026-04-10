/**
 * Data Sources Registry — the transparency backbone of IREM.
 *
 * Every scraper, API integration, and data feed IREM pulls from is registered
 * here. The DataProvenance component looks up entries by id to display source
 * attribution + freshness on every widget. The /data-sources page renders this
 * registry grouped by category.
 */

export type DataSourceCategory =
  | 'government'
  | 'rera'
  | 'listings'
  | 'financial'
  | 'news'
  | 'environment'
  | 'infrastructure'
  | 'alternative';

export type DataSourceMethod =
  | 'api'
  | 'scraper'
  | 'rss'
  | 'websocket'
  | 'manual';

export type DataSourceStatus = 'active' | 'paused' | 'planned' | 'degraded';

export type UpdateFrequency =
  | 'realtime'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'quarterly';

export interface DataSource {
  id: string;
  name: string;
  organization: string;
  category: DataSourceCategory;
  method: DataSourceMethod;
  status: DataSourceStatus;
  frequency: UpdateFrequency;
  url: string;
  description: string;
  dataPoints: string[];
  coverage: string;
  lastUpdated: string; // ISO
  reliability: number; // 0-100
}

export const dataSourceCategories: Record<
  DataSourceCategory,
  { label: string; description: string }
> = {
  government: {
    label: 'Government',
    description: 'Official central & state government data portals',
  },
  rera: {
    label: 'RERA',
    description: 'State RERA authority project registration data',
  },
  listings: {
    label: 'Listings',
    description: 'Property listing marketplaces & aggregators',
  },
  financial: {
    label: 'Financial',
    description: 'Stock markets, REITs, home loans, construction costs',
  },
  news: {
    label: 'News',
    description: 'Real estate journalism & market analysis',
  },
  environment: {
    label: 'Environment',
    description: 'Air quality, weather, floods, satellite imagery',
  },
  infrastructure: {
    label: 'Infrastructure',
    description: 'Metro, road, rail, airport connectivity data',
  },
  alternative: {
    label: 'Alternative',
    description: 'Trends, sentiment, corporate filings & news signals',
  },
};

export const dataSources: DataSource[] = [
  // ─────────────────────────────────────────────
  // GOVERNMENT
  // ─────────────────────────────────────────────
  {
    id: 'nhb-residex',
    name: 'NHB RESIDEX',
    organization: 'National Housing Bank',
    category: 'government',
    method: 'scraper',
    status: 'active',
    frequency: 'quarterly',
    url: 'https://residex.nhbonline.org.in/',
    description:
      'Quarterly residential housing price index covering 50 Indian cities. India\'s official benchmark for residential price tracking.',
    dataPoints: ['Price index', 'YoY change', 'QoQ change', '50-city coverage'],
    coverage: '50 cities',
    lastUpdated: '2026-03-15T00:00:00Z',
    reliability: 96,
  },
  {
    id: 'rbi-dbie',
    name: 'RBI DBIE',
    organization: 'Reserve Bank of India',
    category: 'government',
    method: 'api',
    status: 'active',
    frequency: 'monthly',
    url: 'https://dbie.rbi.org.in/',
    description:
      'Database on Indian Economy — housing credit, HPI, repo rate, bank lending data.',
    dataPoints: ['Housing credit', 'Repo rate', 'HPI', 'NHB loans'],
    coverage: 'National',
    lastUpdated: '2026-04-05T08:30:00Z',
    reliability: 98,
  },
  {
    id: 'data-gov-in',
    name: 'data.gov.in',
    organization: 'Ministry of Electronics & IT',
    category: 'government',
    method: 'api',
    status: 'active',
    frequency: 'daily',
    url: 'https://www.data.gov.in/',
    description:
      'Open Government Data Platform. Housing datasets, census data, PMAY progress.',
    dataPoints: ['PMAY progress', 'Housing stats', 'Census housing'],
    coverage: 'National',
    lastUpdated: '2026-04-09T22:00:00Z',
    reliability: 88,
  },
  {
    id: 'pmay-dashboard',
    name: 'PMAY Dashboard',
    organization: 'Ministry of Housing & Urban Affairs',
    category: 'government',
    method: 'scraper',
    status: 'active',
    frequency: 'weekly',
    url: 'https://pmaymis.gov.in/',
    description:
      'Pradhan Mantri Awas Yojana progress dashboard. Unit sanctions, completion, subsidies by state.',
    dataPoints: ['Units sanctioned', 'Units completed', 'Subsidies disbursed'],
    coverage: 'All states + UTs',
    lastUpdated: '2026-04-07T10:15:00Z',
    reliability: 85,
  },
  {
    id: 'census-india',
    name: 'Census India',
    organization: 'Office of Registrar General',
    category: 'government',
    method: 'manual',
    status: 'active',
    frequency: 'quarterly',
    url: 'https://censusindia.gov.in/',
    description:
      'Population, household, and housing amenities data. Used for tier classification.',
    dataPoints: ['Population', 'Households', 'Urban population', 'Housing amenities'],
    coverage: 'All districts',
    lastUpdated: '2026-01-15T00:00:00Z',
    reliability: 92,
  },
  {
    id: 'mohua',
    name: 'MoHUA',
    organization: 'Ministry of Housing & Urban Affairs',
    category: 'government',
    method: 'scraper',
    status: 'active',
    frequency: 'monthly',
    url: 'https://mohua.gov.in/',
    description:
      'Smart Cities, AMRUT, urban development mission progress and budgets.',
    dataPoints: ['Smart Cities progress', 'AMRUT budgets', 'Urban missions'],
    coverage: 'All states',
    lastUpdated: '2026-04-01T12:00:00Z',
    reliability: 86,
  },
  {
    id: 'igrs-maharashtra',
    name: 'IGRS Maharashtra',
    organization: 'Dept. of Registration & Stamps, Maharashtra',
    category: 'government',
    method: 'scraper',
    status: 'active',
    frequency: 'daily',
    url: 'https://igrmaharashtra.gov.in/',
    description:
      'Property registration and stamp duty data. Ground-truth source for transaction volumes in Maharashtra.',
    dataPoints: ['Registrations', 'Stamp duty', 'Transaction value'],
    coverage: 'Maharashtra',
    lastUpdated: '2026-04-10T07:30:00Z',
    reliability: 94,
  },
  {
    id: 'nhai',
    name: 'NHAI',
    organization: 'National Highways Authority of India',
    category: 'government',
    method: 'scraper',
    status: 'active',
    frequency: 'weekly',
    url: 'https://nhai.gov.in/',
    description:
      'National highway project status, upcoming expressways, connectivity data.',
    dataPoints: ['Highway projects', 'Expressway routes', 'Project status'],
    coverage: 'National',
    lastUpdated: '2026-04-06T14:20:00Z',
    reliability: 89,
  },

  // ─────────────────────────────────────────────
  // RERA
  // ─────────────────────────────────────────────
  {
    id: 'maharera',
    name: 'MahaRERA',
    organization: 'Maharashtra Real Estate Regulatory Authority',
    category: 'rera',
    method: 'scraper',
    status: 'active',
    frequency: 'daily',
    url: 'https://maharera.maharashtra.gov.in/',
    description:
      'Largest state RERA portal. Project registrations, promoter details, quarterly progress reports, complaints.',
    dataPoints: ['Project registrations', 'Promoter info', 'QPRs', 'Complaints', 'Bank accounts'],
    coverage: 'Maharashtra',
    lastUpdated: '2026-04-10T06:00:00Z',
    reliability: 95,
  },
  {
    id: 'up-rera',
    name: 'UP RERA',
    organization: 'Uttar Pradesh RERA',
    category: 'rera',
    method: 'scraper',
    status: 'active',
    frequency: 'daily',
    url: 'https://www.up-rera.in/',
    description: 'UP RERA project database covering Noida, Greater Noida, Ghaziabad, Lucknow.',
    dataPoints: ['Projects', 'Promoters', 'QPRs', 'Status updates'],
    coverage: 'Uttar Pradesh',
    lastUpdated: '2026-04-10T05:30:00Z',
    reliability: 91,
  },
  {
    id: 'karnataka-rera',
    name: 'Karnataka RERA',
    organization: 'Karnataka RERA',
    category: 'rera',
    method: 'scraper',
    status: 'active',
    frequency: 'daily',
    url: 'https://rera.karnataka.gov.in/',
    description:
      'Karnataka RERA portal — essential for Bengaluru market tracking.',
    dataPoints: ['Projects', 'Promoters', 'Complaints', 'Bank escrow'],
    coverage: 'Karnataka',
    lastUpdated: '2026-04-10T06:15:00Z',
    reliability: 90,
  },
  {
    id: 'telangana-rera',
    name: 'Telangana RERA',
    organization: 'Telangana RERA',
    category: 'rera',
    method: 'scraper',
    status: 'active',
    frequency: 'daily',
    url: 'https://rera.telangana.gov.in/',
    description: 'Telangana RERA — Hyderabad project data.',
    dataPoints: ['Projects', 'Units', 'Promoters', 'Status'],
    coverage: 'Telangana',
    lastUpdated: '2026-04-10T06:20:00Z',
    reliability: 89,
  },
  {
    id: 'tn-rera',
    name: 'TN RERA',
    organization: 'Tamil Nadu RERA',
    category: 'rera',
    method: 'scraper',
    status: 'active',
    frequency: 'weekly',
    url: 'https://rera.tn.gov.in/',
    description: 'Tamil Nadu RERA — Chennai and Coimbatore data.',
    dataPoints: ['Projects', 'Promoters', 'QPRs'],
    coverage: 'Tamil Nadu',
    lastUpdated: '2026-04-08T09:00:00Z',
    reliability: 87,
  },
  {
    id: 'gujarat-rera',
    name: 'Gujarat RERA',
    organization: 'Gujarat RERA',
    category: 'rera',
    method: 'scraper',
    status: 'active',
    frequency: 'weekly',
    url: 'https://gujrera.gujarat.gov.in/',
    description: 'Gujarat RERA — Ahmedabad, Surat, Vadodara data.',
    dataPoints: ['Projects', 'Promoters', 'Complaints'],
    coverage: 'Gujarat',
    lastUpdated: '2026-04-07T11:30:00Z',
    reliability: 88,
  },
  {
    id: 'wb-hira',
    name: 'WB HIRA',
    organization: 'West Bengal Housing Industry Regulatory Authority',
    category: 'rera',
    method: 'scraper',
    status: 'degraded',
    frequency: 'weekly',
    url: 'https://hira.wb.gov.in/',
    description: 'West Bengal housing regulator — Kolkata project data.',
    dataPoints: ['Projects', 'Promoters'],
    coverage: 'West Bengal',
    lastUpdated: '2026-04-03T15:00:00Z',
    reliability: 72,
  },
  {
    id: 'haryana-rera',
    name: 'Haryana RERA',
    organization: 'Haryana RERA',
    category: 'rera',
    method: 'scraper',
    status: 'active',
    frequency: 'daily',
    url: 'https://haryanarera.gov.in/',
    description:
      'Haryana RERA — critical for Gurgaon and Faridabad project tracking.',
    dataPoints: ['Projects', 'Promoters', 'Complaints', 'QPRs'],
    coverage: 'Haryana',
    lastUpdated: '2026-04-10T06:10:00Z',
    reliability: 90,
  },

  // ─────────────────────────────────────────────
  // LISTINGS
  // ─────────────────────────────────────────────
  {
    id: 'acres-99',
    name: '99acres',
    organization: '99acres.com',
    category: 'listings',
    method: 'scraper',
    status: 'active',
    frequency: 'daily',
    url: 'https://www.99acres.com/',
    description:
      'India\'s largest property listing marketplace. Primary source for median price and inventory signals.',
    dataPoints: ['Listings', 'Price/sqft', 'BHK config', 'Amenities', 'Developer'],
    coverage: 'All major cities',
    lastUpdated: '2026-04-10T04:00:00Z',
    reliability: 82,
  },
  {
    id: 'magicbricks',
    name: 'MagicBricks',
    organization: 'Times Group',
    category: 'listings',
    method: 'scraper',
    status: 'active',
    frequency: 'daily',
    url: 'https://www.magicbricks.com/',
    description:
      'Tier-1 listing portal with strong metro coverage. Cross-check for 99acres data.',
    dataPoints: ['Listings', 'Price trends', 'Locality insights'],
    coverage: 'All major cities',
    lastUpdated: '2026-04-10T03:45:00Z',
    reliability: 80,
  },
  {
    id: 'housing-com',
    name: 'Housing.com',
    organization: 'Elara Technologies',
    category: 'listings',
    method: 'scraper',
    status: 'active',
    frequency: 'daily',
    url: 'https://housing.com/',
    description:
      'PropTiger/Housing listing aggregator. Strong verified listings segment.',
    dataPoints: ['Listings', 'Verified listings', 'Developer info'],
    coverage: 'All major cities',
    lastUpdated: '2026-04-10T03:30:00Z',
    reliability: 81,
  },
  {
    id: 'nobroker',
    name: 'NoBroker',
    organization: 'NoBroker Technologies',
    category: 'listings',
    method: 'api',
    status: 'active',
    frequency: 'daily',
    url: 'https://www.nobroker.in/',
    description:
      'Broker-less listing platform. High-quality rental and owner-listed data.',
    dataPoints: ['Owner listings', 'Rental data', 'Deposit info'],
    coverage: '15+ cities',
    lastUpdated: '2026-04-10T02:00:00Z',
    reliability: 85,
  },
  {
    id: 'square-yards',
    name: 'Square Yards',
    organization: 'Square Yards',
    category: 'listings',
    method: 'scraper',
    status: 'planned',
    frequency: 'daily',
    url: 'https://www.squareyards.com/',
    description: 'New-launch focused listing portal. Developer partnerships.',
    dataPoints: ['New launches', 'Developer campaigns'],
    coverage: 'Top 8 metros',
    lastUpdated: '2026-01-01T00:00:00Z',
    reliability: 75,
  },
  {
    id: 'nestaway',
    name: 'Nestaway',
    organization: 'Nestaway Technologies',
    category: 'listings',
    method: 'scraper',
    status: 'planned',
    frequency: 'daily',
    url: 'https://www.nestaway.com/',
    description: 'Managed rentals data — co-living signal.',
    dataPoints: ['Managed rentals', 'Co-living inventory'],
    coverage: 'Top 6 metros',
    lastUpdated: '2026-01-01T00:00:00Z',
    reliability: 70,
  },

  // ─────────────────────────────────────────────
  // FINANCIAL
  // ─────────────────────────────────────────────
  {
    id: 'nse-nifty-realty',
    name: 'NSE Nifty Realty',
    organization: 'National Stock Exchange',
    category: 'financial',
    method: 'websocket',
    status: 'active',
    frequency: 'realtime',
    url: 'https://www.nseindia.com/',
    description:
      'Live Nifty Realty index + 10 constituent stocks. Real-time OHLC via websocket.',
    dataPoints: ['Live prices', 'OHLC', 'Volume', 'Market cap', 'Index value'],
    coverage: '10 stocks + index',
    lastUpdated: '2026-04-10T09:30:00Z',
    reliability: 99,
  },
  {
    id: 'angel-one',
    name: 'Angel One SmartAPI',
    organization: 'Angel One',
    category: 'financial',
    method: 'websocket',
    status: 'active',
    frequency: 'realtime',
    url: 'https://smartapi.angelbroking.com/',
    description:
      'Free NSE/BSE real-time WebSocket feed. Used for Nifty Realty + REIT tickers.',
    dataPoints: ['Tick data', 'Order book', 'Historical candles'],
    coverage: 'NSE + BSE',
    lastUpdated: '2026-04-10T09:30:00Z',
    reliability: 96,
  },
  {
    id: 'jugaad-data',
    name: 'jugaad-data',
    organization: 'Open-source Python library',
    category: 'financial',
    method: 'api',
    status: 'active',
    frequency: 'daily',
    url: 'https://github.com/jugaad-py/jugaad-data',
    description:
      'NSE/BSE/RBI historical data wrapper. Used for backfilling stock_data hypertable.',
    dataPoints: ['Historical OHLC', 'Corporate actions', 'RBI rates'],
    coverage: 'NSE + BSE + RBI',
    lastUpdated: '2026-04-09T23:00:00Z',
    reliability: 90,
  },
  {
    id: 'moneycontrol',
    name: 'Moneycontrol',
    organization: 'Network18',
    category: 'financial',
    method: 'scraper',
    status: 'active',
    frequency: 'hourly',
    url: 'https://www.moneycontrol.com/',
    description:
      'Fundamental data for listed developers — P/E, market cap, quarterly results.',
    dataPoints: ['Fundamentals', 'Quarterly results', 'Analyst estimates'],
    coverage: 'Listed Indian cos',
    lastUpdated: '2026-04-10T08:00:00Z',
    reliability: 87,
  },
  {
    id: 'bse-reit',
    name: 'BSE REIT Data',
    organization: 'Bombay Stock Exchange',
    category: 'financial',
    method: 'api',
    status: 'active',
    frequency: 'daily',
    url: 'https://www.bseindia.com/',
    description: 'Listed REIT disclosures — Embassy, Mindspace, Brookfield, Nexus.',
    dataPoints: ['NAV', 'Distributions', 'Occupancy', 'AUM'],
    coverage: '5 REITs',
    lastUpdated: '2026-04-09T18:00:00Z',
    reliability: 94,
  },
  {
    id: 'paisabazaar',
    name: 'PaisaBazaar',
    organization: 'PB Fintech',
    category: 'financial',
    method: 'scraper',
    status: 'active',
    frequency: 'daily',
    url: 'https://www.paisabazaar.com/',
    description: 'Home loan rate comparison across 25+ banks and HFCs.',
    dataPoints: ['Home loan rates', 'Processing fees', 'Eligibility'],
    coverage: '25+ lenders',
    lastUpdated: '2026-04-10T01:00:00Z',
    reliability: 84,
  },

  // ─────────────────────────────────────────────
  // NEWS
  // ─────────────────────────────────────────────
  {
    id: 'et-realty',
    name: 'ET Realty',
    organization: 'Economic Times',
    category: 'news',
    method: 'rss',
    status: 'active',
    frequency: 'hourly',
    url: 'https://realty.economictimes.indiatimes.com/',
    description:
      'India\'s most-read real estate news publication. Primary source for market and policy news.',
    dataPoints: ['News articles', 'Analysis', 'Developer press releases'],
    coverage: 'National',
    lastUpdated: '2026-04-10T08:15:00Z',
    reliability: 90,
  },
  {
    id: 'moneycontrol-re',
    name: 'Moneycontrol RE',
    organization: 'Network18',
    category: 'news',
    method: 'rss',
    status: 'active',
    frequency: 'hourly',
    url: 'https://www.moneycontrol.com/news/business/real-estate/',
    description: 'Real estate news and financial analysis from Moneycontrol.',
    dataPoints: ['News', 'Analysis', 'Regulatory updates'],
    coverage: 'National',
    lastUpdated: '2026-04-10T06:45:00Z',
    reliability: 89,
  },
  {
    id: 'livemint-housing',
    name: 'LiveMint Housing',
    organization: 'HT Media',
    category: 'news',
    method: 'rss',
    status: 'active',
    frequency: 'hourly',
    url: 'https://www.livemint.com/industry/real-estate',
    description: 'Mint real estate coverage — policy, markets, deal flow.',
    dataPoints: ['News', 'Opinion', 'Data stories'],
    coverage: 'National',
    lastUpdated: '2026-04-10T04:20:00Z',
    reliability: 90,
  },
  {
    id: 'business-standard-re',
    name: 'Business Standard RE',
    organization: 'Business Standard',
    category: 'news',
    method: 'rss',
    status: 'active',
    frequency: 'hourly',
    url: 'https://www.business-standard.com/real-estate',
    description: 'Business Standard real estate coverage.',
    dataPoints: ['News', 'Market reports'],
    coverage: 'National',
    lastUpdated: '2026-04-09T14:30:00Z',
    reliability: 88,
  },
  {
    id: 'hindu-re',
    name: 'The Hindu RE',
    organization: 'The Hindu',
    category: 'news',
    method: 'rss',
    status: 'active',
    frequency: 'daily',
    url: 'https://www.thehindu.com/business/',
    description: 'The Hindu business and real estate coverage.',
    dataPoints: ['News', 'Long-form analysis'],
    coverage: 'National, strong South India',
    lastUpdated: '2026-04-09T09:05:00Z',
    reliability: 92,
  },
  {
    id: 'magicbricks-news',
    name: 'MagicBricks News',
    organization: 'Times Group',
    category: 'news',
    method: 'rss',
    status: 'active',
    frequency: 'daily',
    url: 'https://www.magicbricks.com/blog/',
    description: 'Locality insights, buyer guides, market snapshots.',
    dataPoints: ['Locality insights', 'Guides', 'Trend reports'],
    coverage: 'All major cities',
    lastUpdated: '2026-04-09T12:00:00Z',
    reliability: 78,
  },

  // ─────────────────────────────────────────────
  // ENVIRONMENT
  // ─────────────────────────────────────────────
  {
    id: 'cpcb-aqi',
    name: 'CPCB AQI',
    organization: 'Central Pollution Control Board',
    category: 'environment',
    method: 'api',
    status: 'active',
    frequency: 'hourly',
    url: 'https://cpcb.nic.in/',
    description: 'Real-time air quality monitoring from 500+ stations nationwide.',
    dataPoints: ['PM2.5', 'PM10', 'NO2', 'SO2', 'O3', 'AQI'],
    coverage: '500+ stations',
    lastUpdated: '2026-04-10T09:00:00Z',
    reliability: 93,
  },
  {
    id: 'openweather',
    name: 'OpenWeatherMap',
    organization: 'OpenWeather',
    category: 'environment',
    method: 'api',
    status: 'active',
    frequency: 'hourly',
    url: 'https://openweathermap.org/',
    description:
      'Weather data, rainfall forecasts, historical climate data for monsoon analysis.',
    dataPoints: ['Temp', 'Rainfall', 'Humidity', 'Forecast'],
    coverage: 'Global (India focus)',
    lastUpdated: '2026-04-10T09:00:00Z',
    reliability: 92,
  },
  {
    id: 'imd',
    name: 'IMD',
    organization: 'India Meteorological Department',
    category: 'environment',
    method: 'scraper',
    status: 'active',
    frequency: 'daily',
    url: 'https://mausam.imd.gov.in/',
    description:
      'Official weather & monsoon data. Critical for flood-risk scoring in coastal markets.',
    dataPoints: ['Rainfall', 'Monsoon', 'Cyclone warnings'],
    coverage: 'National',
    lastUpdated: '2026-04-10T06:00:00Z',
    reliability: 94,
  },
  {
    id: 'ndma',
    name: 'NDMA Flood Data',
    organization: 'National Disaster Management Authority',
    category: 'environment',
    method: 'scraper',
    status: 'active',
    frequency: 'weekly',
    url: 'https://ndma.gov.in/',
    description:
      'Flood-prone zone mapping. Used for micro-market environmental risk scoring.',
    dataPoints: ['Flood zones', 'Disaster events', 'Vulnerability'],
    coverage: 'National',
    lastUpdated: '2026-04-05T10:00:00Z',
    reliability: 85,
  },
  {
    id: 'bhuvan',
    name: 'Bhuvan ISRO',
    organization: 'Indian Space Research Organisation',
    category: 'environment',
    method: 'api',
    status: 'planned',
    frequency: 'monthly',
    url: 'https://bhuvan.nrsc.gov.in/',
    description:
      'Satellite imagery + LULC maps for construction activity detection.',
    dataPoints: ['Satellite imagery', 'LULC', 'Change detection'],
    coverage: 'National',
    lastUpdated: '2026-01-01T00:00:00Z',
    reliability: 90,
  },

  // ─────────────────────────────────────────────
  // INFRASTRUCTURE
  // ─────────────────────────────────────────────
  {
    id: 'delhi-metro',
    name: 'Delhi Metro',
    organization: 'Delhi Metro Rail Corporation',
    category: 'infrastructure',
    method: 'scraper',
    status: 'active',
    frequency: 'weekly',
    url: 'https://www.delhimetrorail.com/',
    description:
      'Delhi Metro route map, upcoming lines, station data. Used for connectivity scoring.',
    dataPoints: ['Stations', 'Lines', 'Upcoming phases'],
    coverage: 'Delhi NCR',
    lastUpdated: '2026-04-03T14:00:00Z',
    reliability: 92,
  },
  {
    id: 'bmrcl',
    name: 'BMRCL',
    organization: 'Bangalore Metro Rail Corporation',
    category: 'infrastructure',
    method: 'scraper',
    status: 'active',
    frequency: 'weekly',
    url: 'https://english.bmrc.co.in/',
    description: 'Namma Metro stations and phase 2/3 construction progress.',
    dataPoints: ['Stations', 'Phase 2', 'Phase 3'],
    coverage: 'Bangalore',
    lastUpdated: '2026-04-05T11:00:00Z',
    reliability: 88,
  },
  {
    id: 'mmrda',
    name: 'MMRDA',
    organization: 'Mumbai Metropolitan Region Development Authority',
    category: 'infrastructure',
    method: 'scraper',
    status: 'active',
    frequency: 'weekly',
    url: 'https://mmrda.maharashtra.gov.in/',
    description:
      'Mumbai metro lines, coastal road, sea link projects. Infrastructure pipeline data.',
    dataPoints: ['Metro lines', 'Coastal road', 'Sea links'],
    coverage: 'MMR',
    lastUpdated: '2026-04-06T09:30:00Z',
    reliability: 87,
  },
  {
    id: 'hmrl',
    name: 'HMRL',
    organization: 'Hyderabad Metro Rail',
    category: 'infrastructure',
    method: 'scraper',
    status: 'active',
    frequency: 'weekly',
    url: 'https://www.ltmetro.com/',
    description: 'Hyderabad Metro operations and phase 2 expansion.',
    dataPoints: ['Stations', 'Ridership', 'Phase 2'],
    coverage: 'Hyderabad',
    lastUpdated: '2026-04-04T10:00:00Z',
    reliability: 85,
  },
  {
    id: 'indian-railways',
    name: 'Indian Railways',
    organization: 'Indian Railways',
    category: 'infrastructure',
    method: 'api',
    status: 'active',
    frequency: 'monthly',
    url: 'https://indianrailways.gov.in/',
    description:
      'Rail connectivity data, upcoming station projects, dedicated freight corridors.',
    dataPoints: ['Stations', 'DFC', 'New routes'],
    coverage: 'National',
    lastUpdated: '2026-03-28T15:00:00Z',
    reliability: 86,
  },
  {
    id: 'aai',
    name: 'AAI Airports',
    organization: 'Airports Authority of India',
    category: 'infrastructure',
    method: 'scraper',
    status: 'active',
    frequency: 'monthly',
    url: 'https://www.aai.aero/',
    description:
      'Airport locations, upcoming greenfield airports, passenger traffic data.',
    dataPoints: ['Airports', 'Passenger traffic', 'Greenfield projects'],
    coverage: 'National',
    lastUpdated: '2026-03-30T12:00:00Z',
    reliability: 88,
  },

  // ─────────────────────────────────────────────
  // ALTERNATIVE
  // ─────────────────────────────────────────────
  {
    id: 'google-trends',
    name: 'Google Trends',
    organization: 'Google',
    category: 'alternative',
    method: 'api',
    status: 'active',
    frequency: 'daily',
    url: 'https://trends.google.com/',
    description:
      'Search interest for real estate terms, localities, developers. Demand signal.',
    dataPoints: ['Search interest', 'Related queries', 'Regional breakdown'],
    coverage: 'All major cities',
    lastUpdated: '2026-04-10T02:00:00Z',
    reliability: 82,
  },
  {
    id: 'gdelt',
    name: 'GDELT',
    organization: 'GDELT Project',
    category: 'alternative',
    method: 'api',
    status: 'active',
    frequency: 'hourly',
    url: 'https://www.gdeltproject.org/',
    description:
      'Global news sentiment database. Used for composite sentiment scoring by city.',
    dataPoints: ['News mentions', 'Sentiment score', 'Entity extraction'],
    coverage: 'Global (India focus)',
    lastUpdated: '2026-04-10T09:00:00Z',
    reliability: 84,
  },
  {
    id: 'mca',
    name: 'MCA Filings',
    organization: 'Ministry of Corporate Affairs',
    category: 'alternative',
    method: 'scraper',
    status: 'active',
    frequency: 'weekly',
    url: 'https://www.mca.gov.in/',
    description:
      'Corporate filings for developers — NCLT cases, IBC proceedings, director changes.',
    dataPoints: ['NCLT cases', 'IBC filings', 'Director changes', 'Financials'],
    coverage: 'All registered cos',
    lastUpdated: '2026-04-05T13:00:00Z',
    reliability: 95,
  },
  {
    id: 'twitter-sentiment',
    name: 'Twitter/X Sentiment',
    organization: 'X Corp',
    category: 'alternative',
    method: 'api',
    status: 'planned',
    frequency: 'hourly',
    url: 'https://developer.x.com/',
    description:
      'Social media sentiment for developers and cities. Early warning signal.',
    dataPoints: ['Mentions', 'Sentiment', 'Virality'],
    coverage: 'All major entities',
    lastUpdated: '2026-01-01T00:00:00Z',
    reliability: 65,
  },
];

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

export function getDataSource(id: string): DataSource | undefined {
  return dataSources.find((s) => s.id === id);
}

export function groupSourcesByCategory(): Record<DataSourceCategory, DataSource[]> {
  const grouped = {
    government: [],
    rera: [],
    listings: [],
    financial: [],
    news: [],
    environment: [],
    infrastructure: [],
    alternative: [],
  } as Record<DataSourceCategory, DataSource[]>;

  for (const source of dataSources) {
    grouped[source.category].push(source);
  }

  return grouped;
}

export function getDataSourceStats() {
  const total = dataSources.length;
  const active = dataSources.filter((s) => s.status === 'active').length;
  const planned = dataSources.filter((s) => s.status === 'planned').length;
  const degraded = dataSources.filter((s) => s.status === 'degraded').length;
  const avgReliability = Math.round(
    dataSources.reduce((a, b) => a + b.reliability, 0) / total,
  );
  const totalDataPoints = dataSources.reduce(
    (acc, s) => acc + s.dataPoints.length,
    0,
  );

  return { total, active, planned, degraded, avgReliability, totalDataPoints };
}
