export interface DeveloperSeed {
  name: string;
  slug: string;
  type: 'listed' | 'private' | 'govt';
  nseSymbol: string | null;
  headquarters: string;
  foundedYear: number | null;
}

export const developers: DeveloperSeed[] = [
  // ─────────────────────────────────────────────────
  // LISTED DEVELOPERS — Nifty Realty + Others
  // ─────────────────────────────────────────────────
  { name: 'DLF Ltd', slug: 'dlf', type: 'listed', nseSymbol: 'DLF', headquarters: 'Gurugram', foundedYear: 1946 },
  { name: 'Godrej Properties', slug: 'godrej-properties', type: 'listed', nseSymbol: 'GODREJPROP', headquarters: 'Mumbai', foundedYear: 1990 },
  { name: 'Oberoi Realty', slug: 'oberoi-realty', type: 'listed', nseSymbol: 'OBEROIRLTY', headquarters: 'Mumbai', foundedYear: 1998 },
  { name: 'Prestige Estates Projects', slug: 'prestige-estates', type: 'listed', nseSymbol: 'PRESTIGE', headquarters: 'Bangalore', foundedYear: 1986 },
  { name: 'Macrotech Developers (Lodha)', slug: 'lodha', type: 'listed', nseSymbol: 'LODHA', headquarters: 'Mumbai', foundedYear: 1995 },
  { name: 'Brigade Enterprises', slug: 'brigade-enterprises', type: 'listed', nseSymbol: 'BRIGADE', headquarters: 'Bangalore', foundedYear: 1986 },
  { name: 'Sobha Ltd', slug: 'sobha', type: 'listed', nseSymbol: 'SOBHA', headquarters: 'Bangalore', foundedYear: 1995 },
  { name: 'Mahindra Lifespace Developers', slug: 'mahindra-lifespace', type: 'listed', nseSymbol: 'MAHLIFE', headquarters: 'Mumbai', foundedYear: 2000 },
  { name: 'Phoenix Mills', slug: 'phoenix-mills', type: 'listed', nseSymbol: 'PHOENIXLTD', headquarters: 'Mumbai', foundedYear: 1905 },
  { name: 'Sunteck Realty', slug: 'sunteck-realty', type: 'listed', nseSymbol: 'SUNTECK', headquarters: 'Mumbai', foundedYear: 2000 },
  { name: 'Puravankara Ltd', slug: 'puravankara', type: 'listed', nseSymbol: 'PURVA', headquarters: 'Bangalore', foundedYear: 1975 },
  { name: 'Kolte-Patil Developers', slug: 'kolte-patil', type: 'listed', nseSymbol: 'KOLTEPATIL', headquarters: 'Pune', foundedYear: 1991 },
  { name: 'Keystone Realtors (Rustomjee)', slug: 'rustomjee', type: 'listed', nseSymbol: 'RUSTOMJEE', headquarters: 'Mumbai', foundedYear: 1996 },
  { name: 'Signature Global', slug: 'signature-global', type: 'listed', nseSymbol: 'SIGNATURE', headquarters: 'Gurugram', foundedYear: 2014 },
  { name: 'Raymond Realty', slug: 'raymond-realty', type: 'listed', nseSymbol: 'RAYMOND', headquarters: 'Mumbai', foundedYear: 2019 },
  { name: 'Anant Raj Ltd', slug: 'anant-raj', type: 'listed', nseSymbol: 'ANANTRAJ', headquarters: 'Delhi', foundedYear: 1969 },
  { name: 'Omaxe Ltd', slug: 'omaxe', type: 'listed', nseSymbol: 'OMAXE', headquarters: 'Delhi', foundedYear: 1987 },
  { name: 'Indiabulls Real Estate', slug: 'indiabulls-real-estate', type: 'listed', nseSymbol: 'IBREALEST', headquarters: 'Mumbai', foundedYear: 2006 },
  { name: 'Hemisphere Properties', slug: 'hemisphere-properties', type: 'listed', nseSymbol: 'HEMISPHERE', headquarters: 'Delhi', foundedYear: 2005 },
  { name: 'DB Realty', slug: 'db-realty', type: 'listed', nseSymbol: 'DBREALTY', headquarters: 'Mumbai', foundedYear: 2007 },
  { name: 'Arvind SmartSpaces', slug: 'arvind-smartspaces', type: 'listed', nseSymbol: 'ARVIND', headquarters: 'Ahmedabad', foundedYear: 2008 },
  { name: 'Shriram Properties', slug: 'shriram-properties', type: 'listed', nseSymbol: 'SHRIRAMPPS', headquarters: 'Chennai', foundedYear: 2000 },
  { name: 'Ajmera Realty', slug: 'ajmera-realty', type: 'listed', nseSymbol: 'AJMERA', headquarters: 'Mumbai', foundedYear: 1985 },
  { name: 'Ashiana Housing', slug: 'ashiana-housing', type: 'listed', nseSymbol: 'ASHIANA', headquarters: 'Delhi', foundedYear: 1979 },
  { name: 'Suraj Estate Developers', slug: 'suraj-estate', type: 'listed', nseSymbol: 'SURAJEST', headquarters: 'Mumbai', foundedYear: 1986 },
  { name: 'Eldeco Housing', slug: 'eldeco-housing', type: 'listed', nseSymbol: 'ELDEHSG', headquarters: 'Lucknow', foundedYear: 1985 },
  { name: 'Parsvnath Developers', slug: 'parsvnath', type: 'listed', nseSymbol: 'PARSVNATH', headquarters: 'Delhi', foundedYear: 1990 },
  { name: 'Unitech Ltd', slug: 'unitech', type: 'listed', nseSymbol: 'UNITECH', headquarters: 'Gurugram', foundedYear: 1972 },
  { name: 'Hubtown Ltd', slug: 'hubtown', type: 'listed', nseSymbol: 'HUBTOWN', headquarters: 'Mumbai', foundedYear: 1985 },
  { name: 'Orion Realtors', slug: 'orion-realtors', type: 'listed', nseSymbol: 'ORION', headquarters: 'Bangalore', foundedYear: 2004 },

  // ─────────────────────────────────────────────────
  // PRIVATE DEVELOPERS — Top Tier
  // ─────────────────────────────────────────────────
  { name: 'Hiranandani Group', slug: 'hiranandani', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 1978 },
  { name: 'K Raheja Corp', slug: 'k-raheja-corp', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 1956 },
  { name: 'Shapoorji Pallonji', slug: 'shapoorji-pallonji', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 1865 },
  { name: 'Runwal Group', slug: 'runwal-group', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 1978 },
  { name: 'Piramal Realty', slug: 'piramal-realty', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 2012 },
  { name: 'L&T Realty', slug: 'lt-realty', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 2011 },
  { name: 'Tata Housing', slug: 'tata-housing', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 1984 },
  { name: 'Adani Realty', slug: 'adani-realty', type: 'private', nseSymbol: null, headquarters: 'Ahmedabad', foundedYear: 2012 },
  { name: 'Birla Estates', slug: 'birla-estates', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 2016 },
  { name: 'Wadhwa Group', slug: 'wadhwa-group', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 1969 },
  { name: 'Kalpataru Ltd', slug: 'kalpataru', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 1969 },
  { name: 'Rajesh Lifespaces', slug: 'rajesh-lifespaces', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 2003 },
  { name: 'Dosti Realty', slug: 'dosti-realty', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 1980 },
  { name: 'Arkade Group', slug: 'arkade-group', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 2005 },
  { name: 'Nahar Group', slug: 'nahar-group', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 1973 },
  { name: 'Marathon Group', slug: 'marathon-group', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 1969 },
  { name: 'Rustomjee (Keystone)', slug: 'keystone-realtors', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 1996 },
  { name: 'SD Corporation', slug: 'sd-corporation', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 2002 },
  { name: 'Kanakia Group', slug: 'kanakia-group', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 1986 },
  { name: 'Ruparel Realty', slug: 'ruparel-realty', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 2013 },

  // ─────────────────────────────────────────────────
  // BANGALORE DEVELOPERS
  // ─────────────────────────────────────────────────
  { name: 'Embassy Group', slug: 'embassy-group', type: 'private', nseSymbol: null, headquarters: 'Bangalore', foundedYear: 1993 },
  { name: 'Salarpuria Sattva', slug: 'salarpuria-sattva', type: 'private', nseSymbol: null, headquarters: 'Bangalore', foundedYear: 1986 },
  { name: 'Total Environment', slug: 'total-environment', type: 'private', nseSymbol: null, headquarters: 'Bangalore', foundedYear: 1996 },
  { name: 'Assetz Property Group', slug: 'assetz', type: 'private', nseSymbol: null, headquarters: 'Bangalore', foundedYear: 2006 },
  { name: 'Rohan Builders', slug: 'rohan-builders', type: 'private', nseSymbol: null, headquarters: 'Bangalore', foundedYear: 1993 },
  { name: 'Mantri Developers', slug: 'mantri-developers', type: 'private', nseSymbol: null, headquarters: 'Bangalore', foundedYear: 1999 },
  { name: 'Provident Housing', slug: 'provident-housing', type: 'private', nseSymbol: null, headquarters: 'Bangalore', foundedYear: 2008 },
  { name: 'Vaishnavi Group', slug: 'vaishnavi-group', type: 'private', nseSymbol: null, headquarters: 'Bangalore', foundedYear: 1997 },
  { name: 'Shriram Properties (BLR)', slug: 'shriram-properties-blr', type: 'private', nseSymbol: null, headquarters: 'Bangalore', foundedYear: 1995 },
  { name: 'Mana Projects', slug: 'mana-projects', type: 'private', nseSymbol: null, headquarters: 'Bangalore', foundedYear: 2005 },
  { name: 'Adarsh Developers', slug: 'adarsh-developers', type: 'private', nseSymbol: null, headquarters: 'Bangalore', foundedYear: 1988 },
  { name: 'Century Real Estate', slug: 'century-real-estate', type: 'private', nseSymbol: null, headquarters: 'Bangalore', foundedYear: 1973 },
  { name: 'NCC Urban', slug: 'ncc-urban', type: 'private', nseSymbol: null, headquarters: 'Bangalore', foundedYear: 2005 },

  // ─────────────────────────────────────────────────
  // DELHI NCR DEVELOPERS
  // ─────────────────────────────────────────────────
  { name: 'M3M India', slug: 'm3m-india', type: 'private', nseSymbol: null, headquarters: 'Gurugram', foundedYear: 2010 },
  { name: 'Emaar India', slug: 'emaar-india', type: 'private', nseSymbol: null, headquarters: 'Gurugram', foundedYear: 2005 },
  { name: 'Godrej Properties NCR', slug: 'godrej-ncr', type: 'private', nseSymbol: null, headquarters: 'Gurugram', foundedYear: 2010 },
  { name: 'ATS Infrastructure', slug: 'ats-infrastructure', type: 'private', nseSymbol: null, headquarters: 'Noida', foundedYear: 2002 },
  { name: 'Supertech Ltd', slug: 'supertech', type: 'private', nseSymbol: null, headquarters: 'Noida', foundedYear: 1988 },
  { name: 'Gaurs Group', slug: 'gaurs-group', type: 'private', nseSymbol: null, headquarters: 'Greater Noida', foundedYear: 1995 },
  { name: 'Gulshan Homz', slug: 'gulshan-homz', type: 'private', nseSymbol: null, headquarters: 'Noida', foundedYear: 2002 },
  { name: 'Mahagun Group', slug: 'mahagun-group', type: 'private', nseSymbol: null, headquarters: 'Noida', foundedYear: 1999 },
  { name: 'Ace Group', slug: 'ace-group', type: 'private', nseSymbol: null, headquarters: 'Greater Noida', foundedYear: 2010 },
  { name: 'CRC Group', slug: 'crc-group', type: 'private', nseSymbol: null, headquarters: 'Noida', foundedYear: 2014 },
  { name: 'BPTP Ltd', slug: 'bptp', type: 'private', nseSymbol: null, headquarters: 'Faridabad', foundedYear: 2003 },
  { name: 'Raheja Developers', slug: 'raheja-developers', type: 'private', nseSymbol: null, headquarters: 'Gurugram', foundedYear: 1990 },
  { name: 'Vatika Group', slug: 'vatika-group', type: 'private', nseSymbol: null, headquarters: 'Gurugram', foundedYear: 1997 },
  { name: 'Paras Buildtech', slug: 'paras-buildtech', type: 'private', nseSymbol: null, headquarters: 'Gurugram', foundedYear: 2000 },
  { name: 'Prateek Group', slug: 'prateek-group', type: 'private', nseSymbol: null, headquarters: 'Ghaziabad', foundedYear: 2004 },
  { name: 'Wave Group', slug: 'wave-group', type: 'private', nseSymbol: null, headquarters: 'Noida', foundedYear: 2006 },
  { name: 'Jaypee Infratech', slug: 'jaypee-infratech', type: 'private', nseSymbol: null, headquarters: 'Noida', foundedYear: 2007 },
  { name: 'Central Park', slug: 'central-park', type: 'private', nseSymbol: null, headquarters: 'Gurugram', foundedYear: 2006 },
  { name: 'Ireo', slug: 'ireo', type: 'private', nseSymbol: null, headquarters: 'Gurugram', foundedYear: 2004 },
  { name: 'Conscient Infrastructure', slug: 'conscient', type: 'private', nseSymbol: null, headquarters: 'Gurugram', foundedYear: 2010 },

  // ─────────────────────────────────────────────────
  // HYDERABAD DEVELOPERS
  // ─────────────────────────────────────────────────
  { name: 'My Home Group', slug: 'my-home-group', type: 'private', nseSymbol: null, headquarters: 'Hyderabad', foundedYear: 1982 },
  { name: 'Aparna Constructions', slug: 'aparna-constructions', type: 'private', nseSymbol: null, headquarters: 'Hyderabad', foundedYear: 1996 },
  { name: 'Phoenix Group (Hyd)', slug: 'phoenix-group-hyd', type: 'private', nseSymbol: null, headquarters: 'Hyderabad', foundedYear: 2000 },
  { name: 'Rajapushpa Properties', slug: 'rajapushpa', type: 'private', nseSymbol: null, headquarters: 'Hyderabad', foundedYear: 2005 },
  { name: 'Sumadhura Group', slug: 'sumadhura-group', type: 'private', nseSymbol: null, headquarters: 'Hyderabad', foundedYear: 1995 },
  { name: 'Ramky Group', slug: 'ramky-group', type: 'private', nseSymbol: null, headquarters: 'Hyderabad', foundedYear: 1994 },
  { name: 'Mantri Realty (Hyd)', slug: 'mantri-hyd', type: 'private', nseSymbol: null, headquarters: 'Hyderabad', foundedYear: 2005 },
  { name: 'SMR Holdings', slug: 'smr-holdings', type: 'private', nseSymbol: null, headquarters: 'Hyderabad', foundedYear: 2001 },
  { name: 'Hallmark Builders', slug: 'hallmark-builders', type: 'private', nseSymbol: null, headquarters: 'Hyderabad', foundedYear: 2003 },
  { name: 'Aliens Group', slug: 'aliens-group', type: 'private', nseSymbol: null, headquarters: 'Hyderabad', foundedYear: 2005 },

  // ─────────────────────────────────────────────────
  // CHENNAI DEVELOPERS
  // ─────────────────────────────────────────────────
  { name: 'Casagrand', slug: 'casagrand', type: 'private', nseSymbol: null, headquarters: 'Chennai', foundedYear: 2004 },
  { name: 'Radiance Realty', slug: 'radiance-realty', type: 'private', nseSymbol: null, headquarters: 'Chennai', foundedYear: 2005 },
  { name: 'Navin\'s', slug: 'navins', type: 'private', nseSymbol: null, headquarters: 'Chennai', foundedYear: 1997 },
  { name: 'TVS Emerald', slug: 'tvs-emerald', type: 'private', nseSymbol: null, headquarters: 'Chennai', foundedYear: 2013 },
  { name: 'Alliance Group', slug: 'alliance-group', type: 'private', nseSymbol: null, headquarters: 'Chennai', foundedYear: 1994 },
  { name: 'Akshaya Pvt Ltd', slug: 'akshaya', type: 'private', nseSymbol: null, headquarters: 'Chennai', foundedYear: 2005 },
  { name: 'SPR Group', slug: 'spr-group', type: 'private', nseSymbol: null, headquarters: 'Chennai', foundedYear: 2008 },
  { name: 'Appaswamy Real Estates', slug: 'appaswamy', type: 'private', nseSymbol: null, headquarters: 'Chennai', foundedYear: 1970 },
  { name: 'DAC Developers', slug: 'dac-developers', type: 'private', nseSymbol: null, headquarters: 'Chennai', foundedYear: 2008 },

  // ─────────────────────────────────────────────────
  // PUNE DEVELOPERS
  // ─────────────────────────────────────────────────
  { name: 'Kumar Properties', slug: 'kumar-properties', type: 'private', nseSymbol: null, headquarters: 'Pune', foundedYear: 1980 },
  { name: 'Rohan Builders (Pune)', slug: 'rohan-builders-pune', type: 'private', nseSymbol: null, headquarters: 'Pune', foundedYear: 1993 },
  { name: 'VTP Realty', slug: 'vtp-realty', type: 'private', nseSymbol: null, headquarters: 'Pune', foundedYear: 2007 },
  { name: 'Panchshil Realty', slug: 'panchshil', type: 'private', nseSymbol: null, headquarters: 'Pune', foundedYear: 2002 },
  { name: 'Gera Developments', slug: 'gera-developments', type: 'private', nseSymbol: null, headquarters: 'Pune', foundedYear: 1970 },
  { name: 'Marvel Realtors', slug: 'marvel-realtors', type: 'private', nseSymbol: null, headquarters: 'Pune', foundedYear: 2001 },
  { name: 'Nyati Group', slug: 'nyati-group', type: 'private', nseSymbol: null, headquarters: 'Pune', foundedYear: 2000 },
  { name: 'Kalpataru (Pune)', slug: 'kalpataru-pune', type: 'private', nseSymbol: null, headquarters: 'Pune', foundedYear: 2000 },
  { name: 'Karia Developers', slug: 'karia-developers', type: 'private', nseSymbol: null, headquarters: 'Pune', foundedYear: 1970 },
  { name: 'Pride Purple', slug: 'pride-purple', type: 'private', nseSymbol: null, headquarters: 'Pune', foundedYear: 1995 },

  // ─────────────────────────────────────────────────
  // KOLKATA DEVELOPERS
  // ─────────────────────────────────────────────────
  { name: 'Merlin Group', slug: 'merlin-group', type: 'private', nseSymbol: null, headquarters: 'Kolkata', foundedYear: 1984 },
  { name: 'Ambuja Neotia', slug: 'ambuja-neotia', type: 'private', nseSymbol: null, headquarters: 'Kolkata', foundedYear: 1986 },
  { name: 'Eden Realty', slug: 'eden-realty', type: 'private', nseSymbol: null, headquarters: 'Kolkata', foundedYear: 2001 },
  { name: 'PS Group', slug: 'ps-group', type: 'private', nseSymbol: null, headquarters: 'Kolkata', foundedYear: 2002 },
  { name: 'Siddha Group', slug: 'siddha-group', type: 'private', nseSymbol: null, headquarters: 'Kolkata', foundedYear: 2001 },
  { name: 'Sugam Group', slug: 'sugam-group', type: 'private', nseSymbol: null, headquarters: 'Kolkata', foundedYear: 1991 },
  { name: 'Emami Realty', slug: 'emami-realty', type: 'private', nseSymbol: null, headquarters: 'Kolkata', foundedYear: 2006 },
  { name: 'Srijan Realty', slug: 'srijan-realty', type: 'private', nseSymbol: null, headquarters: 'Kolkata', foundedYear: 1998 },
  { name: 'Mani Group', slug: 'mani-group', type: 'private', nseSymbol: null, headquarters: 'Kolkata', foundedYear: 1999 },

  // ─────────────────────────────────────────────────
  // AHMEDABAD / GUJARAT DEVELOPERS
  // ─────────────────────────────────────────────────
  { name: 'Sun Builders', slug: 'sun-builders', type: 'private', nseSymbol: null, headquarters: 'Ahmedabad', foundedYear: 1997 },
  { name: 'Shivalik Group', slug: 'shivalik-group', type: 'private', nseSymbol: null, headquarters: 'Ahmedabad', foundedYear: 2001 },
  { name: 'Safal Group', slug: 'safal-group', type: 'private', nseSymbol: null, headquarters: 'Ahmedabad', foundedYear: 2004 },
  { name: 'Pacifica Companies', slug: 'pacifica', type: 'private', nseSymbol: null, headquarters: 'Ahmedabad', foundedYear: 2007 },
  { name: 'Swaminarayan City', slug: 'swaminarayan-city', type: 'private', nseSymbol: null, headquarters: 'Ahmedabad', foundedYear: 2010 },
  { name: 'Savvy Infrastructures', slug: 'savvy-infra', type: 'private', nseSymbol: null, headquarters: 'Ahmedabad', foundedYear: 2008 },

  // ─────────────────────────────────────────────────
  // JAIPUR / RAJASTHAN DEVELOPERS
  // ─────────────────────────────────────────────────
  { name: 'Mahima Group', slug: 'mahima-group', type: 'private', nseSymbol: null, headquarters: 'Jaipur', foundedYear: 1990 },
  { name: 'Unique Shanti Developers', slug: 'unique-shanti', type: 'private', nseSymbol: null, headquarters: 'Jaipur', foundedYear: 2005 },
  { name: 'Vatika Group (Jaipur)', slug: 'vatika-jaipur', type: 'private', nseSymbol: null, headquarters: 'Jaipur', foundedYear: 2000 },
  { name: 'Manglam Group', slug: 'manglam-group', type: 'private', nseSymbol: null, headquarters: 'Jaipur', foundedYear: 2000 },
  { name: 'Apna Ghar', slug: 'apna-ghar', type: 'private', nseSymbol: null, headquarters: 'Jaipur', foundedYear: 2006 },

  // ─────────────────────────────────────────────────
  // LUCKNOW / UP DEVELOPERS
  // ─────────────────────────────────────────────────
  { name: 'Eldeco Group', slug: 'eldeco-group', type: 'private', nseSymbol: null, headquarters: 'Lucknow', foundedYear: 1975 },
  { name: 'Shalimar Corp', slug: 'shalimar-corp', type: 'private', nseSymbol: null, headquarters: 'Lucknow', foundedYear: 1999 },
  { name: 'Ansal Housing', slug: 'ansal-housing', type: 'private', nseSymbol: null, headquarters: 'Lucknow', foundedYear: 1983 },
  { name: 'Ajnara Group', slug: 'ajnara-group', type: 'private', nseSymbol: null, headquarters: 'Ghaziabad', foundedYear: 2001 },

  // ─────────────────────────────────────────────────
  // KERALA DEVELOPERS
  // ─────────────────────────────────────────────────
  { name: 'Malabar Developers', slug: 'malabar-developers', type: 'private', nseSymbol: null, headquarters: 'Kochi', foundedYear: 1998 },
  { name: 'Skyline Builders', slug: 'skyline-builders', type: 'private', nseSymbol: null, headquarters: 'Kochi', foundedYear: 1989 },
  { name: 'Asset Homes', slug: 'asset-homes', type: 'private', nseSymbol: null, headquarters: 'Kochi', foundedYear: 2007 },
  { name: 'Confident Group', slug: 'confident-group', type: 'private', nseSymbol: null, headquarters: 'Kochi', foundedYear: 2002 },
  { name: 'DLF Builders (Kerala)', slug: 'dlf-kerala', type: 'private', nseSymbol: null, headquarters: 'Trivandrum', foundedYear: 2009 },

  // ─────────────────────────────────────────────────
  // SURAT / WEST INDIA DEVELOPERS
  // ─────────────────────────────────────────────────
  { name: 'Sahjanand Group', slug: 'sahjanand-group', type: 'private', nseSymbol: null, headquarters: 'Surat', foundedYear: 2001 },
  { name: 'Shubhkamna Group', slug: 'shubhkamna-group', type: 'private', nseSymbol: null, headquarters: 'Surat', foundedYear: 2003 },

  // ─────────────────────────────────────────────────
  // PAN-INDIA / MISC PRIVATE DEVELOPERS
  // ─────────────────────────────────────────────────
  { name: 'House of Abhinandan Lodha', slug: 'hoabl', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 2021 },
  { name: 'Max Estates', slug: 'max-estates', type: 'private', nseSymbol: null, headquarters: 'Delhi', foundedYear: 2016 },
  { name: 'Elan Group', slug: 'elan-group', type: 'private', nseSymbol: null, headquarters: 'Gurugram', foundedYear: 2014 },
  { name: 'Smartworld Developers', slug: 'smartworld', type: 'private', nseSymbol: null, headquarters: 'Gurugram', foundedYear: 2019 },
  { name: 'Krisumi Corporation', slug: 'krisumi', type: 'private', nseSymbol: null, headquarters: 'Gurugram', foundedYear: 2018 },
  { name: 'Migsun Group', slug: 'migsun-group', type: 'private', nseSymbol: null, headquarters: 'Ghaziabad', foundedYear: 2004 },
  { name: 'County Group', slug: 'county-group', type: 'private', nseSymbol: null, headquarters: 'Noida', foundedYear: 2010 },
  { name: 'SKA Group', slug: 'ska-group', type: 'private', nseSymbol: null, headquarters: 'Greater Noida', foundedYear: 2012 },
  { name: 'ROF Group', slug: 'rof-group', type: 'private', nseSymbol: null, headquarters: 'Gurugram', foundedYear: 2016 },
  { name: 'Ayansh Group', slug: 'ayansh-group', type: 'private', nseSymbol: null, headquarters: 'Hyderabad', foundedYear: 2015 },
  { name: 'Urbanrise', slug: 'urbanrise', type: 'private', nseSymbol: null, headquarters: 'Chennai', foundedYear: 2018 },
  { name: 'Lancor Holdings', slug: 'lancor-holdings', type: 'private', nseSymbol: null, headquarters: 'Chennai', foundedYear: 1985 },
  { name: 'Ozone Group', slug: 'ozone-group', type: 'private', nseSymbol: null, headquarters: 'Bangalore', foundedYear: 2006 },
  { name: 'Tata Realty & Infrastructure', slug: 'tata-realty', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 2007 },
  { name: 'Lodha Developers (Thane)', slug: 'lodha-thane', type: 'private', nseSymbol: null, headquarters: 'Thane', foundedYear: 2010 },
  { name: 'Raymond Realty (Thane)', slug: 'raymond-thane', type: 'private', nseSymbol: null, headquarters: 'Thane', foundedYear: 2019 },

  // ─────────────────────────────────────────────────
  // GOVERNMENT / PUBLIC SECTOR
  // ─────────────────────────────────────────────────
  { name: 'NBCC (India) Ltd', slug: 'nbcc', type: 'govt', nseSymbol: 'NBCC', headquarters: 'Delhi', foundedYear: 1960 },
  { name: 'HUDCO', slug: 'hudco', type: 'govt', nseSymbol: 'HUDCO', headquarters: 'Delhi', foundedYear: 1970 },
  { name: 'DDA (Delhi Development Authority)', slug: 'dda', type: 'govt', nseSymbol: null, headquarters: 'Delhi', foundedYear: 1957 },
  { name: 'CIDCO', slug: 'cidco', type: 'govt', nseSymbol: null, headquarters: 'Navi Mumbai', foundedYear: 1970 },
  { name: 'MHADA', slug: 'mhada', type: 'govt', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 1977 },
  { name: 'BWSSB (BDA)', slug: 'bda', type: 'govt', nseSymbol: null, headquarters: 'Bangalore', foundedYear: 1976 },
  { name: 'TNHB', slug: 'tnhb', type: 'govt', nseSymbol: null, headquarters: 'Chennai', foundedYear: 1961 },
  { name: 'GHMC / HMDA', slug: 'hmda', type: 'govt', nseSymbol: null, headquarters: 'Hyderabad', foundedYear: 2008 },

  // ─────────────────────────────────────────────────
  // ADDITIONAL DEVELOPERS (various cities)
  // ─────────────────────────────────────────────────
  { name: 'Bhutani Group', slug: 'bhutani-group', type: 'private', nseSymbol: null, headquarters: 'Noida', foundedYear: 2003 },
  { name: 'Gaursons India', slug: 'gaursons', type: 'private', nseSymbol: null, headquarters: 'Greater Noida', foundedYear: 1995 },
  { name: 'Nirala Group', slug: 'nirala-group', type: 'private', nseSymbol: null, headquarters: 'Greater Noida', foundedYear: 2008 },
  { name: 'Cosmos Group', slug: 'cosmos-group', type: 'private', nseSymbol: null, headquarters: 'Thane', foundedYear: 2005 },
  { name: 'Raunak Group', slug: 'raunak-group', type: 'private', nseSymbol: null, headquarters: 'Thane', foundedYear: 1980 },
  { name: 'Regency Group', slug: 'regency-group', type: 'private', nseSymbol: null, headquarters: 'Thane', foundedYear: 1996 },
  { name: 'Arihant Superstructures', slug: 'arihant-superstructures', type: 'private', nseSymbol: null, headquarters: 'Navi Mumbai', foundedYear: 1983 },
  { name: 'Sai World', slug: 'sai-world', type: 'private', nseSymbol: null, headquarters: 'Navi Mumbai', foundedYear: 2005 },
  { name: 'MJR Builders', slug: 'mjr-builders', type: 'private', nseSymbol: null, headquarters: 'Hyderabad', foundedYear: 2006 },
  { name: 'GRC Infra', slug: 'grc-infra', type: 'private', nseSymbol: null, headquarters: 'Hyderabad', foundedYear: 2010 },
  { name: 'Navanaami Developers', slug: 'navanaami', type: 'private', nseSymbol: null, headquarters: 'Hyderabad', foundedYear: 2012 },
  { name: 'SNN Builders', slug: 'snn-builders', type: 'private', nseSymbol: null, headquarters: 'Bangalore', foundedYear: 2000 },
  { name: 'EIPL Group', slug: 'eipl-group', type: 'private', nseSymbol: null, headquarters: 'Hyderabad', foundedYear: 2006 },
  { name: 'Indiabulls Green', slug: 'indiabulls-green', type: 'private', nseSymbol: null, headquarters: 'Chennai', foundedYear: 2012 },
  { name: 'Concorde Group', slug: 'concorde-group', type: 'private', nseSymbol: null, headquarters: 'Bangalore', foundedYear: 1998 },
  { name: 'Sowparnika Projects', slug: 'sowparnika', type: 'private', nseSymbol: null, headquarters: 'Bangalore', foundedYear: 2005 },
  { name: 'Svamitva Developers', slug: 'svamitva', type: 'private', nseSymbol: null, headquarters: 'Indore', foundedYear: 2008 },
  { name: 'Sanskar Developers', slug: 'sanskar-developers', type: 'private', nseSymbol: null, headquarters: 'Bhopal', foundedYear: 2005 },
  { name: 'Mantra Properties', slug: 'mantra-properties', type: 'private', nseSymbol: null, headquarters: 'Pune', foundedYear: 2006 },
  { name: 'Pristine Properties', slug: 'pristine-properties', type: 'private', nseSymbol: null, headquarters: 'Pune', foundedYear: 2006 },
  { name: 'Kohinoor Group', slug: 'kohinoor-group', type: 'private', nseSymbol: null, headquarters: 'Pune', foundedYear: 1990 },
  { name: 'Majestique Landmarks', slug: 'majestique', type: 'private', nseSymbol: null, headquarters: 'Pune', foundedYear: 2005 },
  { name: 'Shapoorji Pallonji RE', slug: 'sp-real-estate', type: 'private', nseSymbol: null, headquarters: 'Pune', foundedYear: 2010 },
  { name: 'Goel Ganga Group', slug: 'goel-ganga', type: 'private', nseSymbol: null, headquarters: 'Pune', foundedYear: 1982 },
  { name: 'Mittal Brothers', slug: 'mittal-brothers', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 1975 },
  { name: 'N Rose Developers', slug: 'n-rose', type: 'private', nseSymbol: null, headquarters: 'Gurugram', foundedYear: 2010 },
  { name: 'Pareena Infrastructure', slug: 'pareena', type: 'private', nseSymbol: null, headquarters: 'Gurugram', foundedYear: 2015 },
  { name: 'Rishabh Group', slug: 'rishabh-group', type: 'private', nseSymbol: null, headquarters: 'Indore', foundedYear: 2001 },
  { name: 'Safal Sealand', slug: 'safal-sealand', type: 'private', nseSymbol: null, headquarters: 'Ahmedabad', foundedYear: 2010 },
  { name: 'Ganesh Housing', slug: 'ganesh-housing', type: 'listed', nseSymbol: 'GANESHHOUC', headquarters: 'Ahmedabad', foundedYear: 1991 },
  { name: 'Sunteck (Naigaon)', slug: 'sunteck-naigaon', type: 'private', nseSymbol: null, headquarters: 'Mumbai', foundedYear: 2015 },
];
