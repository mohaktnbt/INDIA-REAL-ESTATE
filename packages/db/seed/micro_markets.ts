export interface MicroMarketSeed {
  name: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

export const microMarkets: MicroMarketSeed[] = [
  // ─────────────────────────────────────────────────
  // MUMBAI (30)
  // ─────────────────────────────────────────────────
  { name: 'Bandra West', city: 'Mumbai', state: 'Maharashtra', latitude: 19.0596, longitude: 72.8295 },
  { name: 'Andheri West', city: 'Mumbai', state: 'Maharashtra', latitude: 19.1364, longitude: 72.8296 },
  { name: 'Andheri East', city: 'Mumbai', state: 'Maharashtra', latitude: 19.1187, longitude: 72.8686 },
  { name: 'Powai', city: 'Mumbai', state: 'Maharashtra', latitude: 19.1176, longitude: 72.9060 },
  { name: 'Goregaon West', city: 'Mumbai', state: 'Maharashtra', latitude: 19.1663, longitude: 72.8399 },
  { name: 'Goregaon East', city: 'Mumbai', state: 'Maharashtra', latitude: 19.1632, longitude: 72.8598 },
  { name: 'Worli', city: 'Mumbai', state: 'Maharashtra', latitude: 19.0176, longitude: 72.8150 },
  { name: 'Lower Parel', city: 'Mumbai', state: 'Maharashtra', latitude: 18.9980, longitude: 72.8310 },
  { name: 'Malad West', city: 'Mumbai', state: 'Maharashtra', latitude: 19.1867, longitude: 72.8314 },
  { name: 'Borivali West', city: 'Mumbai', state: 'Maharashtra', latitude: 19.2307, longitude: 72.8404 },
  { name: 'Kandivali West', city: 'Mumbai', state: 'Maharashtra', latitude: 19.2048, longitude: 72.8370 },
  { name: 'Juhu', city: 'Mumbai', state: 'Maharashtra', latitude: 19.0883, longitude: 72.8265 },
  { name: 'Dadar', city: 'Mumbai', state: 'Maharashtra', latitude: 19.0178, longitude: 72.8478 },
  { name: 'Chembur', city: 'Mumbai', state: 'Maharashtra', latitude: 19.0522, longitude: 72.8994 },
  { name: 'Mulund West', city: 'Mumbai', state: 'Maharashtra', latitude: 19.1726, longitude: 72.9425 },
  { name: 'Vikhroli', city: 'Mumbai', state: 'Maharashtra', latitude: 19.1100, longitude: 72.9278 },
  { name: 'BKC', city: 'Mumbai', state: 'Maharashtra', latitude: 19.0658, longitude: 72.8654 },
  { name: 'Wadala', city: 'Mumbai', state: 'Maharashtra', latitude: 19.0177, longitude: 72.8637 },
  { name: 'Sion', city: 'Mumbai', state: 'Maharashtra', latitude: 19.0400, longitude: 72.8621 },
  { name: 'Ghatkopar', city: 'Mumbai', state: 'Maharashtra', latitude: 19.0860, longitude: 72.9080 },
  { name: 'Kurla', city: 'Mumbai', state: 'Maharashtra', latitude: 19.0726, longitude: 72.8794 },
  { name: 'Dahisar', city: 'Mumbai', state: 'Maharashtra', latitude: 19.2502, longitude: 72.8544 },
  { name: 'Mira Road', city: 'Mumbai', state: 'Maharashtra', latitude: 19.2812, longitude: 72.8685 },
  { name: 'Vasai', city: 'Mumbai', state: 'Maharashtra', latitude: 19.3607, longitude: 72.8311 },
  { name: 'Thane West', city: 'Thane', state: 'Maharashtra', latitude: 19.2183, longitude: 72.9563 },
  { name: 'Vashi', city: 'Navi Mumbai', state: 'Maharashtra', latitude: 19.0771, longitude: 72.9986 },
  { name: 'Kharghar', city: 'Navi Mumbai', state: 'Maharashtra', latitude: 19.0474, longitude: 73.0603 },
  { name: 'Panvel', city: 'Navi Mumbai', state: 'Maharashtra', latitude: 18.9894, longitude: 73.1175 },
  { name: 'Airoli', city: 'Navi Mumbai', state: 'Maharashtra', latitude: 19.1590, longitude: 72.9988 },
  { name: 'Nerul', city: 'Navi Mumbai', state: 'Maharashtra', latitude: 19.0330, longitude: 73.0169 },

  // ─────────────────────────────────────────────────
  // BANGALORE (25)
  // ─────────────────────────────────────────────────
  { name: 'Whitefield', city: 'Bangalore', state: 'Karnataka', latitude: 12.9698, longitude: 77.7500 },
  { name: 'Electronic City', city: 'Bangalore', state: 'Karnataka', latitude: 12.8399, longitude: 77.6770 },
  { name: 'Sarjapur Road', city: 'Bangalore', state: 'Karnataka', latitude: 12.9100, longitude: 77.7400 },
  { name: 'HSR Layout', city: 'Bangalore', state: 'Karnataka', latitude: 12.9116, longitude: 77.6389 },
  { name: 'Koramangala', city: 'Bangalore', state: 'Karnataka', latitude: 12.9352, longitude: 77.6245 },
  { name: 'Indiranagar', city: 'Bangalore', state: 'Karnataka', latitude: 12.9784, longitude: 77.6408 },
  { name: 'Hebbal', city: 'Bangalore', state: 'Karnataka', latitude: 13.0358, longitude: 77.5970 },
  { name: 'Yelahanka', city: 'Bangalore', state: 'Karnataka', latitude: 13.1007, longitude: 77.5963 },
  { name: 'JP Nagar', city: 'Bangalore', state: 'Karnataka', latitude: 12.9063, longitude: 77.5857 },
  { name: 'Bannerghatta Road', city: 'Bangalore', state: 'Karnataka', latitude: 12.8876, longitude: 77.5973 },
  { name: 'Marathahalli', city: 'Bangalore', state: 'Karnataka', latitude: 12.9591, longitude: 77.6974 },
  { name: 'KR Puram', city: 'Bangalore', state: 'Karnataka', latitude: 12.9988, longitude: 77.6951 },
  { name: 'Devanahalli', city: 'Bangalore', state: 'Karnataka', latitude: 13.2357, longitude: 77.7106 },
  { name: 'Thanisandra', city: 'Bangalore', state: 'Karnataka', latitude: 13.0593, longitude: 77.6367 },
  { name: 'Hennur', city: 'Bangalore', state: 'Karnataka', latitude: 13.0450, longitude: 77.6450 },
  { name: 'Rajajinagar', city: 'Bangalore', state: 'Karnataka', latitude: 12.9870, longitude: 77.5520 },
  { name: 'Jayanagar', city: 'Bangalore', state: 'Karnataka', latitude: 12.9308, longitude: 77.5838 },
  { name: 'BTM Layout', city: 'Bangalore', state: 'Karnataka', latitude: 12.9166, longitude: 77.6101 },
  { name: 'Bellandur', city: 'Bangalore', state: 'Karnataka', latitude: 12.9260, longitude: 77.6762 },
  { name: 'Kanakapura Road', city: 'Bangalore', state: 'Karnataka', latitude: 12.8700, longitude: 77.5700 },
  { name: 'Banashankari', city: 'Bangalore', state: 'Karnataka', latitude: 12.9255, longitude: 77.5468 },
  { name: 'Malleshwaram', city: 'Bangalore', state: 'Karnataka', latitude: 12.9967, longitude: 77.5713 },
  { name: 'Basavanagudi', city: 'Bangalore', state: 'Karnataka', latitude: 12.9426, longitude: 77.5750 },
  { name: 'Sahakara Nagar', city: 'Bangalore', state: 'Karnataka', latitude: 13.0595, longitude: 77.5810 },
  { name: 'Yeshwanthpur', city: 'Bangalore', state: 'Karnataka', latitude: 13.0220, longitude: 77.5510 },

  // ─────────────────────────────────────────────────
  // DELHI NCR (30)
  // ─────────────────────────────────────────────────
  { name: 'Dwarka', city: 'Delhi', state: 'Delhi', latitude: 28.5921, longitude: 77.0460 },
  { name: 'Rohini', city: 'Delhi', state: 'Delhi', latitude: 28.7495, longitude: 77.0565 },
  { name: 'Saket', city: 'Delhi', state: 'Delhi', latitude: 28.5244, longitude: 77.2066 },
  { name: 'Vasant Kunj', city: 'Delhi', state: 'Delhi', latitude: 28.5195, longitude: 77.1573 },
  { name: 'Hauz Khas', city: 'Delhi', state: 'Delhi', latitude: 28.5494, longitude: 77.2001 },
  { name: 'Greater Kailash', city: 'Delhi', state: 'Delhi', latitude: 28.5484, longitude: 77.2339 },
  { name: 'Mayur Vihar', city: 'Delhi', state: 'Delhi', latitude: 28.5937, longitude: 77.2998 },
  { name: 'Laxmi Nagar', city: 'Delhi', state: 'Delhi', latitude: 28.6304, longitude: 77.2772 },
  { name: 'Janakpuri', city: 'Delhi', state: 'Delhi', latitude: 28.6219, longitude: 77.0866 },
  { name: 'Pitampura', city: 'Delhi', state: 'Delhi', latitude: 28.6976, longitude: 77.1290 },
  { name: 'DLF Phase 1-3', city: 'Gurgaon', state: 'Haryana', latitude: 28.4700, longitude: 77.0936 },
  { name: 'Golf Course Road', city: 'Gurgaon', state: 'Haryana', latitude: 28.4440, longitude: 77.1025 },
  { name: 'Sohna Road', city: 'Gurgaon', state: 'Haryana', latitude: 28.4100, longitude: 77.0650 },
  { name: 'MG Road', city: 'Gurgaon', state: 'Haryana', latitude: 28.4800, longitude: 77.0280 },
  { name: 'Sector 56-57', city: 'Gurgaon', state: 'Haryana', latitude: 28.4200, longitude: 77.0900 },
  { name: 'Dwarka Expressway', city: 'Gurgaon', state: 'Haryana', latitude: 28.5000, longitude: 76.9800 },
  { name: 'New Gurgaon (Sec 76-95)', city: 'Gurgaon', state: 'Haryana', latitude: 28.3900, longitude: 76.9600 },
  { name: 'Sector 62', city: 'Noida', state: 'Uttar Pradesh', latitude: 28.6240, longitude: 77.3650 },
  { name: 'Sector 75-78', city: 'Noida', state: 'Uttar Pradesh', latitude: 28.5700, longitude: 77.3900 },
  { name: 'Sector 128-137', city: 'Noida', state: 'Uttar Pradesh', latitude: 28.5100, longitude: 77.3700 },
  { name: 'Sector 150', city: 'Noida', state: 'Uttar Pradesh', latitude: 28.4700, longitude: 77.4000 },
  { name: 'Greater Noida West', city: 'Greater Noida', state: 'Uttar Pradesh', latitude: 28.5700, longitude: 77.4300 },
  { name: 'Tech Zone 4', city: 'Greater Noida', state: 'Uttar Pradesh', latitude: 28.4600, longitude: 77.5000 },
  { name: 'Indirapuram', city: 'Ghaziabad', state: 'Uttar Pradesh', latitude: 28.6353, longitude: 77.3579 },
  { name: 'Vaishali', city: 'Ghaziabad', state: 'Uttar Pradesh', latitude: 28.6422, longitude: 77.3424 },
  { name: 'Raj Nagar Extension', city: 'Ghaziabad', state: 'Uttar Pradesh', latitude: 28.7000, longitude: 77.4200 },
  { name: 'Crossing Republic', city: 'Ghaziabad', state: 'Uttar Pradesh', latitude: 28.5800, longitude: 77.4000 },
  { name: 'Defence Colony', city: 'Delhi', state: 'Delhi', latitude: 28.5743, longitude: 77.2330 },
  { name: 'Paschim Vihar', city: 'Delhi', state: 'Delhi', latitude: 28.6636, longitude: 77.0954 },
  { name: 'Rajouri Garden', city: 'Delhi', state: 'Delhi', latitude: 28.6492, longitude: 77.1229 },

  // ─────────────────────────────────────────────────
  // HYDERABAD (20)
  // ─────────────────────────────────────────────────
  { name: 'Gachibowli', city: 'Hyderabad', state: 'Telangana', latitude: 17.4401, longitude: 78.3489 },
  { name: 'HITEC City', city: 'Hyderabad', state: 'Telangana', latitude: 17.4435, longitude: 78.3772 },
  { name: 'Kondapur', city: 'Hyderabad', state: 'Telangana', latitude: 17.4600, longitude: 78.3548 },
  { name: 'Madhapur', city: 'Hyderabad', state: 'Telangana', latitude: 17.4483, longitude: 78.3915 },
  { name: 'Miyapur', city: 'Hyderabad', state: 'Telangana', latitude: 17.4969, longitude: 78.3518 },
  { name: 'Kukatpally', city: 'Hyderabad', state: 'Telangana', latitude: 17.4849, longitude: 78.3870 },
  { name: 'Banjara Hills', city: 'Hyderabad', state: 'Telangana', latitude: 17.4138, longitude: 78.4404 },
  { name: 'Jubilee Hills', city: 'Hyderabad', state: 'Telangana', latitude: 17.4318, longitude: 78.4073 },
  { name: 'Manikonda', city: 'Hyderabad', state: 'Telangana', latitude: 17.4040, longitude: 78.3870 },
  { name: 'Narsingi', city: 'Hyderabad', state: 'Telangana', latitude: 17.3896, longitude: 78.3568 },
  { name: 'Kompally', city: 'Hyderabad', state: 'Telangana', latitude: 17.5435, longitude: 78.4878 },
  { name: 'Bachupally', city: 'Hyderabad', state: 'Telangana', latitude: 17.5436, longitude: 78.3760 },
  { name: 'Shamshabad', city: 'Hyderabad', state: 'Telangana', latitude: 17.2543, longitude: 78.4299 },
  { name: 'Uppal', city: 'Hyderabad', state: 'Telangana', latitude: 17.3990, longitude: 78.5593 },
  { name: 'LB Nagar', city: 'Hyderabad', state: 'Telangana', latitude: 17.3488, longitude: 78.5515 },
  { name: 'Kokapet', city: 'Hyderabad', state: 'Telangana', latitude: 17.4158, longitude: 78.3310 },
  { name: 'Financial District', city: 'Hyderabad', state: 'Telangana', latitude: 17.4216, longitude: 78.3430 },
  { name: 'Tellapur', city: 'Hyderabad', state: 'Telangana', latitude: 17.4780, longitude: 78.3050 },
  { name: 'Nallagandla', city: 'Hyderabad', state: 'Telangana', latitude: 17.4600, longitude: 78.3200 },
  { name: 'Medchal', city: 'Hyderabad', state: 'Telangana', latitude: 17.6310, longitude: 78.4820 },

  // ─────────────────────────────────────────────────
  // CHENNAI (20)
  // ─────────────────────────────────────────────────
  { name: 'Adyar', city: 'Chennai', state: 'Tamil Nadu', latitude: 13.0063, longitude: 80.2574 },
  { name: 'Velachery', city: 'Chennai', state: 'Tamil Nadu', latitude: 12.9815, longitude: 80.2180 },
  { name: 'OMR Sholinganallur', city: 'Chennai', state: 'Tamil Nadu', latitude: 12.9010, longitude: 80.2279 },
  { name: 'Porur', city: 'Chennai', state: 'Tamil Nadu', latitude: 13.0382, longitude: 80.1584 },
  { name: 'Tambaram', city: 'Chennai', state: 'Tamil Nadu', latitude: 12.9249, longitude: 80.1000 },
  { name: 'Medavakkam', city: 'Chennai', state: 'Tamil Nadu', latitude: 12.9209, longitude: 80.1921 },
  { name: 'Anna Nagar', city: 'Chennai', state: 'Tamil Nadu', latitude: 13.0850, longitude: 80.2101 },
  { name: 'T Nagar', city: 'Chennai', state: 'Tamil Nadu', latitude: 13.0418, longitude: 80.2341 },
  { name: 'Perambur', city: 'Chennai', state: 'Tamil Nadu', latitude: 13.1097, longitude: 80.2456 },
  { name: 'Perungudi', city: 'Chennai', state: 'Tamil Nadu', latitude: 12.9630, longitude: 80.2430 },
  { name: 'Thoraipakkam', city: 'Chennai', state: 'Tamil Nadu', latitude: 12.9345, longitude: 80.2281 },
  { name: 'Kelambakkam', city: 'Chennai', state: 'Tamil Nadu', latitude: 12.7857, longitude: 80.2205 },
  { name: 'Guduvancheri', city: 'Chennai', state: 'Tamil Nadu', latitude: 12.8462, longitude: 80.0620 },
  { name: 'ECR', city: 'Chennai', state: 'Tamil Nadu', latitude: 12.8700, longitude: 80.2500 },
  { name: 'Pallavaram', city: 'Chennai', state: 'Tamil Nadu', latitude: 12.9675, longitude: 80.1491 },
  { name: 'Chromepet', city: 'Chennai', state: 'Tamil Nadu', latitude: 12.9516, longitude: 80.1462 },
  { name: 'Mogappair', city: 'Chennai', state: 'Tamil Nadu', latitude: 13.0860, longitude: 80.1740 },
  { name: 'Ambattur', city: 'Chennai', state: 'Tamil Nadu', latitude: 13.0982, longitude: 80.1625 },
  { name: 'Thiruvanmiyur', city: 'Chennai', state: 'Tamil Nadu', latitude: 12.9830, longitude: 80.2633 },
  { name: 'Mylapore', city: 'Chennai', state: 'Tamil Nadu', latitude: 13.0339, longitude: 80.2676 },

  // ─────────────────────────────────────────────────
  // PUNE (20)
  // ─────────────────────────────────────────────────
  { name: 'Hinjewadi', city: 'Pune', state: 'Maharashtra', latitude: 18.5912, longitude: 73.7380 },
  { name: 'Wakad', city: 'Pune', state: 'Maharashtra', latitude: 18.5991, longitude: 73.7640 },
  { name: 'Baner', city: 'Pune', state: 'Maharashtra', latitude: 18.5590, longitude: 73.7868 },
  { name: 'Kharadi', city: 'Pune', state: 'Maharashtra', latitude: 18.5535, longitude: 73.9407 },
  { name: 'Viman Nagar', city: 'Pune', state: 'Maharashtra', latitude: 18.5679, longitude: 73.9143 },
  { name: 'Hadapsar', city: 'Pune', state: 'Maharashtra', latitude: 18.5089, longitude: 73.9260 },
  { name: 'Koregaon Park', city: 'Pune', state: 'Maharashtra', latitude: 18.5362, longitude: 73.8935 },
  { name: 'Aundh', city: 'Pune', state: 'Maharashtra', latitude: 18.5585, longitude: 73.8076 },
  { name: 'Balewadi', city: 'Pune', state: 'Maharashtra', latitude: 18.5697, longitude: 73.7736 },
  { name: 'Pimple Saudagar', city: 'Pune', state: 'Maharashtra', latitude: 18.5978, longitude: 73.7977 },
  { name: 'Undri', city: 'Pune', state: 'Maharashtra', latitude: 18.4638, longitude: 73.9089 },
  { name: 'NIBM Road', city: 'Pune', state: 'Maharashtra', latitude: 18.4730, longitude: 73.9010 },
  { name: 'Kothrud', city: 'Pune', state: 'Maharashtra', latitude: 18.5074, longitude: 73.8077 },
  { name: 'Warje', city: 'Pune', state: 'Maharashtra', latitude: 18.4878, longitude: 73.7978 },
  { name: 'Ravet', city: 'Pune', state: 'Maharashtra', latitude: 18.6470, longitude: 73.7500 },
  { name: 'Tathawade', city: 'Pune', state: 'Maharashtra', latitude: 18.6120, longitude: 73.7510 },
  { name: 'Wagholi', city: 'Pune', state: 'Maharashtra', latitude: 18.5800, longitude: 73.9800 },
  { name: 'Punawale', city: 'Pune', state: 'Maharashtra', latitude: 18.6179, longitude: 73.7361 },
  { name: 'Dhanori', city: 'Pune', state: 'Maharashtra', latitude: 18.5882, longitude: 73.8999 },
  { name: 'Kondhwa', city: 'Pune', state: 'Maharashtra', latitude: 18.4618, longitude: 73.8835 },

  // ─────────────────────────────────────────────────
  // KOLKATA (15)
  // ─────────────────────────────────────────────────
  { name: 'Salt Lake', city: 'Kolkata', state: 'West Bengal', latitude: 22.5800, longitude: 88.4100 },
  { name: 'Rajarhat New Town', city: 'Kolkata', state: 'West Bengal', latitude: 22.5958, longitude: 88.4844 },
  { name: 'EM Bypass', city: 'Kolkata', state: 'West Bengal', latitude: 22.5100, longitude: 88.3900 },
  { name: 'Garia', city: 'Kolkata', state: 'West Bengal', latitude: 22.4623, longitude: 88.3838 },
  { name: 'Behala', city: 'Kolkata', state: 'West Bengal', latitude: 22.4970, longitude: 88.3130 },
  { name: 'Tollygunge', city: 'Kolkata', state: 'West Bengal', latitude: 22.4998, longitude: 88.3474 },
  { name: 'Alipore', city: 'Kolkata', state: 'West Bengal', latitude: 22.5333, longitude: 88.3359 },
  { name: 'Ballygunge', city: 'Kolkata', state: 'West Bengal', latitude: 22.5268, longitude: 88.3647 },
  { name: 'Howrah', city: 'Kolkata', state: 'West Bengal', latitude: 22.5958, longitude: 88.2636 },
  { name: 'Lake Town', city: 'Kolkata', state: 'West Bengal', latitude: 22.5949, longitude: 88.3902 },
  { name: 'Dum Dum', city: 'Kolkata', state: 'West Bengal', latitude: 22.6237, longitude: 88.3994 },
  { name: 'Kasba', city: 'Kolkata', state: 'West Bengal', latitude: 22.5195, longitude: 88.3898 },
  { name: 'Jadavpur', city: 'Kolkata', state: 'West Bengal', latitude: 22.4992, longitude: 88.3694 },
  { name: 'Barrackpore', city: 'Kolkata', state: 'West Bengal', latitude: 22.7649, longitude: 88.3781 },
  { name: 'Madhyamgram', city: 'Kolkata', state: 'West Bengal', latitude: 22.6647, longitude: 88.4541 },

  // ─────────────────────────────────────────────────
  // AHMEDABAD (15)
  // ─────────────────────────────────────────────────
  { name: 'SG Highway', city: 'Ahmedabad', state: 'Gujarat', latitude: 23.0300, longitude: 72.5100 },
  { name: 'Prahlad Nagar', city: 'Ahmedabad', state: 'Gujarat', latitude: 23.0135, longitude: 72.5122 },
  { name: 'Bopal', city: 'Ahmedabad', state: 'Gujarat', latitude: 23.0300, longitude: 72.4700 },
  { name: 'South Bopal', city: 'Ahmedabad', state: 'Gujarat', latitude: 23.0100, longitude: 72.4700 },
  { name: 'Gota', city: 'Ahmedabad', state: 'Gujarat', latitude: 23.1000, longitude: 72.5400 },
  { name: 'Thaltej', city: 'Ahmedabad', state: 'Gujarat', latitude: 23.0500, longitude: 72.4900 },
  { name: 'Vastrapur', city: 'Ahmedabad', state: 'Gujarat', latitude: 23.0358, longitude: 72.5270 },
  { name: 'Satellite', city: 'Ahmedabad', state: 'Gujarat', latitude: 23.0155, longitude: 72.5310 },
  { name: 'Chandkheda', city: 'Ahmedabad', state: 'Gujarat', latitude: 23.1100, longitude: 72.5800 },
  { name: 'Motera', city: 'Ahmedabad', state: 'Gujarat', latitude: 23.0900, longitude: 72.5900 },
  { name: 'Maninagar', city: 'Ahmedabad', state: 'Gujarat', latitude: 22.9900, longitude: 72.6100 },
  { name: 'Navrangpura', city: 'Ahmedabad', state: 'Gujarat', latitude: 23.0400, longitude: 72.5600 },
  { name: 'Shela', city: 'Ahmedabad', state: 'Gujarat', latitude: 23.0000, longitude: 72.4600 },
  { name: 'Ambli', city: 'Ahmedabad', state: 'Gujarat', latitude: 23.0300, longitude: 72.4800 },
  { name: 'Ghatlodiya', city: 'Ahmedabad', state: 'Gujarat', latitude: 23.0700, longitude: 72.5400 },

  // ─────────────────────────────────────────────────
  // JAIPUR (12)
  // ─────────────────────────────────────────────────
  { name: 'Mansarovar', city: 'Jaipur', state: 'Rajasthan', latitude: 26.8656, longitude: 75.7645 },
  { name: 'Jagatpura', city: 'Jaipur', state: 'Rajasthan', latitude: 26.8400, longitude: 75.8500 },
  { name: 'Vaishali Nagar', city: 'Jaipur', state: 'Rajasthan', latitude: 26.9124, longitude: 75.7267 },
  { name: 'Malviya Nagar', city: 'Jaipur', state: 'Rajasthan', latitude: 26.8563, longitude: 75.8100 },
  { name: 'Tonk Road', city: 'Jaipur', state: 'Rajasthan', latitude: 26.8600, longitude: 75.8000 },
  { name: 'Ajmer Road', city: 'Jaipur', state: 'Rajasthan', latitude: 26.9000, longitude: 75.7100 },
  { name: 'C-Scheme', city: 'Jaipur', state: 'Rajasthan', latitude: 26.9100, longitude: 75.7900 },
  { name: 'Bani Park', city: 'Jaipur', state: 'Rajasthan', latitude: 26.9300, longitude: 75.7800 },
  { name: 'Pratap Nagar', city: 'Jaipur', state: 'Rajasthan', latitude: 26.8300, longitude: 75.7700 },
  { name: 'Sanganer', city: 'Jaipur', state: 'Rajasthan', latitude: 26.8200, longitude: 75.7900 },
  { name: 'Jhotwara', city: 'Jaipur', state: 'Rajasthan', latitude: 26.9500, longitude: 75.7500 },
  { name: 'Sitapura', city: 'Jaipur', state: 'Rajasthan', latitude: 26.7800, longitude: 75.8500 },

  // ─────────────────────────────────────────────────
  // LUCKNOW (10)
  // ─────────────────────────────────────────────────
  { name: 'Gomti Nagar', city: 'Lucknow', state: 'Uttar Pradesh', latitude: 26.8568, longitude: 81.0040 },
  { name: 'Hazratganj', city: 'Lucknow', state: 'Uttar Pradesh', latitude: 26.8500, longitude: 80.9500 },
  { name: 'Aliganj', city: 'Lucknow', state: 'Uttar Pradesh', latitude: 26.8900, longitude: 80.9400 },
  { name: 'Indira Nagar', city: 'Lucknow', state: 'Uttar Pradesh', latitude: 26.8700, longitude: 80.9900 },
  { name: 'Mahanagar', city: 'Lucknow', state: 'Uttar Pradesh', latitude: 26.8700, longitude: 80.9500 },
  { name: 'Alambagh', city: 'Lucknow', state: 'Uttar Pradesh', latitude: 26.8100, longitude: 80.9100 },
  { name: 'Vikas Nagar', city: 'Lucknow', state: 'Uttar Pradesh', latitude: 26.8700, longitude: 80.9800 },
  { name: 'Jankipuram', city: 'Lucknow', state: 'Uttar Pradesh', latitude: 26.9200, longitude: 80.9500 },
  { name: 'Faizabad Road', city: 'Lucknow', state: 'Uttar Pradesh', latitude: 26.8800, longitude: 81.0200 },
  { name: 'Sushant Golf City', city: 'Lucknow', state: 'Uttar Pradesh', latitude: 26.7800, longitude: 81.0200 },

  // ─────────────────────────────────────────────────
  // SURAT (10)
  // ─────────────────────────────────────────────────
  { name: 'Vesu', city: 'Surat', state: 'Gujarat', latitude: 21.1550, longitude: 72.7700 },
  { name: 'Adajan', city: 'Surat', state: 'Gujarat', latitude: 21.1900, longitude: 72.7900 },
  { name: 'Althan', city: 'Surat', state: 'Gujarat', latitude: 21.1700, longitude: 72.8100 },
  { name: 'Pal', city: 'Surat', state: 'Gujarat', latitude: 21.1600, longitude: 72.7500 },
  { name: 'Dumas Road', city: 'Surat', state: 'Gujarat', latitude: 21.1300, longitude: 72.7600 },
  { name: 'Citylight', city: 'Surat', state: 'Gujarat', latitude: 21.1600, longitude: 72.7800 },
  { name: 'Piplod', city: 'Surat', state: 'Gujarat', latitude: 21.1500, longitude: 72.7700 },
  { name: 'Varachha', city: 'Surat', state: 'Gujarat', latitude: 21.2100, longitude: 72.8500 },
  { name: 'Katargam', city: 'Surat', state: 'Gujarat', latitude: 21.2200, longitude: 72.8200 },
  { name: 'Dindoli', city: 'Surat', state: 'Gujarat', latitude: 21.1300, longitude: 72.8500 },

  // ─────────────────────────────────────────────────
  // KOCHI (10)
  // ─────────────────────────────────────────────────
  { name: 'Kakkanad', city: 'Kochi', state: 'Kerala', latitude: 10.0159, longitude: 76.3419 },
  { name: 'Edappally', city: 'Kochi', state: 'Kerala', latitude: 10.0249, longitude: 76.3081 },
  { name: 'Marine Drive', city: 'Kochi', state: 'Kerala', latitude: 9.9816, longitude: 76.2745 },
  { name: 'Aluva', city: 'Kochi', state: 'Kerala', latitude: 10.1004, longitude: 76.3570 },
  { name: 'Tripunithura', city: 'Kochi', state: 'Kerala', latitude: 9.9500, longitude: 76.3500 },
  { name: 'Thripunithura', city: 'Kochi', state: 'Kerala', latitude: 9.9480, longitude: 76.3480 },
  { name: 'Palarivattom', city: 'Kochi', state: 'Kerala', latitude: 10.0071, longitude: 76.3109 },
  { name: 'Vytilla', city: 'Kochi', state: 'Kerala', latitude: 9.9700, longitude: 76.3200 },
  { name: 'Kadavanthra', city: 'Kochi', state: 'Kerala', latitude: 9.9700, longitude: 76.2900 },
  { name: 'Maradu', city: 'Kochi', state: 'Kerala', latitude: 9.9400, longitude: 76.3200 },

  // ─────────────────────────────────────────────────
  // CHANDIGARH (8)
  // ─────────────────────────────────────────────────
  { name: 'Sector 17', city: 'Chandigarh', state: 'Chandigarh', latitude: 30.7412, longitude: 76.7871 },
  { name: 'Mohali', city: 'Chandigarh', state: 'Chandigarh', latitude: 30.7046, longitude: 76.7179 },
  { name: 'Zirakpur', city: 'Chandigarh', state: 'Chandigarh', latitude: 30.6425, longitude: 76.8173 },
  { name: 'Panchkula', city: 'Chandigarh', state: 'Chandigarh', latitude: 30.6942, longitude: 76.8606 },
  { name: 'Kharar', city: 'Chandigarh', state: 'Chandigarh', latitude: 30.7400, longitude: 76.6500 },
  { name: 'Sector 35', city: 'Chandigarh', state: 'Chandigarh', latitude: 30.7251, longitude: 76.7709 },
  { name: 'Aerocity Mohali', city: 'Chandigarh', state: 'Chandigarh', latitude: 30.6700, longitude: 76.7000 },
  { name: 'New Chandigarh', city: 'Chandigarh', state: 'Chandigarh', latitude: 30.7800, longitude: 76.7200 },

  // ─────────────────────────────────────────────────
  // INDORE (8)
  // ─────────────────────────────────────────────────
  { name: 'Vijay Nagar', city: 'Indore', state: 'Madhya Pradesh', latitude: 22.7500, longitude: 75.8900 },
  { name: 'Super Corridor', city: 'Indore', state: 'Madhya Pradesh', latitude: 22.6800, longitude: 75.8100 },
  { name: 'AB Road', city: 'Indore', state: 'Madhya Pradesh', latitude: 22.6900, longitude: 75.8500 },
  { name: 'Nipania', city: 'Indore', state: 'Madhya Pradesh', latitude: 22.7600, longitude: 75.9100 },
  { name: 'Rau', city: 'Indore', state: 'Madhya Pradesh', latitude: 22.6500, longitude: 75.8700 },
  { name: 'Bhicholi Mardana', city: 'Indore', state: 'Madhya Pradesh', latitude: 22.7800, longitude: 75.8300 },
  { name: 'Scheme 78', city: 'Indore', state: 'Madhya Pradesh', latitude: 22.7400, longitude: 75.9000 },
  { name: 'MR-10 Road', city: 'Indore', state: 'Madhya Pradesh', latitude: 22.7100, longitude: 75.8200 },

  // ─────────────────────────────────────────────────
  // NAGPUR (8)
  // ─────────────────────────────────────────────────
  { name: 'Dharampeth', city: 'Nagpur', state: 'Maharashtra', latitude: 21.1420, longitude: 79.0650 },
  { name: 'Manish Nagar', city: 'Nagpur', state: 'Maharashtra', latitude: 21.1100, longitude: 79.0500 },
  { name: 'Wardha Road', city: 'Nagpur', state: 'Maharashtra', latitude: 21.1000, longitude: 79.1200 },
  { name: 'Hingna', city: 'Nagpur', state: 'Maharashtra', latitude: 21.1000, longitude: 79.0000 },
  { name: 'Besa', city: 'Nagpur', state: 'Maharashtra', latitude: 21.0800, longitude: 79.0900 },
  { name: 'Civil Lines', city: 'Nagpur', state: 'Maharashtra', latitude: 21.1500, longitude: 79.0700 },
  { name: 'Sadar', city: 'Nagpur', state: 'Maharashtra', latitude: 21.1600, longitude: 79.0800 },
  { name: 'Koradi Road', city: 'Nagpur', state: 'Maharashtra', latitude: 21.2000, longitude: 79.1100 },

  // ─────────────────────────────────────────────────
  // COIMBATORE (8)
  // ─────────────────────────────────────────────────
  { name: 'Saravanampatti', city: 'Coimbatore', state: 'Tamil Nadu', latitude: 11.0800, longitude: 76.9900 },
  { name: 'Ganapathy', city: 'Coimbatore', state: 'Tamil Nadu', latitude: 11.0310, longitude: 76.9600 },
  { name: 'Peelamedu', city: 'Coimbatore', state: 'Tamil Nadu', latitude: 11.0300, longitude: 77.0200 },
  { name: 'Singanallur', city: 'Coimbatore', state: 'Tamil Nadu', latitude: 11.0000, longitude: 77.0200 },
  { name: 'Vadavalli', city: 'Coimbatore', state: 'Tamil Nadu', latitude: 11.0200, longitude: 76.9000 },
  { name: 'RS Puram', city: 'Coimbatore', state: 'Tamil Nadu', latitude: 11.0100, longitude: 76.9500 },
  { name: 'Kovaipudur', city: 'Coimbatore', state: 'Tamil Nadu', latitude: 10.9600, longitude: 76.9300 },
  { name: 'Thudiyalur', city: 'Coimbatore', state: 'Tamil Nadu', latitude: 11.0600, longitude: 76.9600 },

  // ─────────────────────────────────────────────────
  // VISAKHAPATNAM (8)
  // ─────────────────────────────────────────────────
  { name: 'Madhurawada', city: 'Visakhapatnam', state: 'Andhra Pradesh', latitude: 17.7800, longitude: 83.3600 },
  { name: 'Gajuwaka', city: 'Visakhapatnam', state: 'Andhra Pradesh', latitude: 17.7100, longitude: 83.2100 },
  { name: 'Rushikonda', city: 'Visakhapatnam', state: 'Andhra Pradesh', latitude: 17.7900, longitude: 83.3800 },
  { name: 'Seethammadhara', city: 'Visakhapatnam', state: 'Andhra Pradesh', latitude: 17.7400, longitude: 83.3100 },
  { name: 'MVP Colony', city: 'Visakhapatnam', state: 'Andhra Pradesh', latitude: 17.7500, longitude: 83.2800 },
  { name: 'Pendurthi', city: 'Visakhapatnam', state: 'Andhra Pradesh', latitude: 17.8100, longitude: 83.2400 },
  { name: 'NAD Junction', city: 'Visakhapatnam', state: 'Andhra Pradesh', latitude: 17.7200, longitude: 83.2600 },
  { name: 'Beach Road', city: 'Visakhapatnam', state: 'Andhra Pradesh', latitude: 17.7200, longitude: 83.3300 },

  // ─────────────────────────────────────────────────
  // BHOPAL (8)
  // ─────────────────────────────────────────────────
  { name: 'Hoshangabad Road', city: 'Bhopal', state: 'Madhya Pradesh', latitude: 23.2100, longitude: 77.4400 },
  { name: 'Kolar Road', city: 'Bhopal', state: 'Madhya Pradesh', latitude: 23.2000, longitude: 77.4600 },
  { name: 'Arera Colony', city: 'Bhopal', state: 'Madhya Pradesh', latitude: 23.2200, longitude: 77.4300 },
  { name: 'MP Nagar', city: 'Bhopal', state: 'Madhya Pradesh', latitude: 23.2300, longitude: 77.4200 },
  { name: 'Ayodhya Bypass', city: 'Bhopal', state: 'Madhya Pradesh', latitude: 23.2500, longitude: 77.4700 },
  { name: 'Misrod', city: 'Bhopal', state: 'Madhya Pradesh', latitude: 23.1800, longitude: 77.4700 },
  { name: 'Shahpura', city: 'Bhopal', state: 'Madhya Pradesh', latitude: 23.1900, longitude: 77.4400 },
  { name: 'Habibganj', city: 'Bhopal', state: 'Madhya Pradesh', latitude: 23.2300, longitude: 77.4100 },

  // ─────────────────────────────────────────────────
  // SMALLER CITIES (8-10 each for select cities)
  // ─────────────────────────────────────────────────

  // GOA
  { name: 'Panjim', city: 'Panaji', state: 'Goa', latitude: 15.4989, longitude: 73.8278 },
  { name: 'Mapusa', city: 'Panaji', state: 'Goa', latitude: 15.5911, longitude: 73.8084 },
  { name: 'Margao', city: 'Panaji', state: 'Goa', latitude: 15.2832, longitude: 73.9862 },
  { name: 'Vasco', city: 'Panaji', state: 'Goa', latitude: 15.3981, longitude: 73.8111 },
  { name: 'Porvorim', city: 'Panaji', state: 'Goa', latitude: 15.5268, longitude: 73.8386 },
  { name: 'Calangute', city: 'Panaji', state: 'Goa', latitude: 15.5449, longitude: 73.7553 },

  // DEHRADUN
  { name: 'Rajpur Road', city: 'Dehradun', state: 'Uttarakhand', latitude: 30.3540, longitude: 78.0479 },
  { name: 'Mussoorie Road', city: 'Dehradun', state: 'Uttarakhand', latitude: 30.3700, longitude: 78.0600 },
  { name: 'Sahastradhara Road', city: 'Dehradun', state: 'Uttarakhand', latitude: 30.3800, longitude: 78.1000 },
  { name: 'GMS Road', city: 'Dehradun', state: 'Uttarakhand', latitude: 30.3100, longitude: 78.0100 },
  { name: 'Clement Town', city: 'Dehradun', state: 'Uttarakhand', latitude: 30.2800, longitude: 78.0200 },
  { name: 'Dalanwala', city: 'Dehradun', state: 'Uttarakhand', latitude: 30.3300, longitude: 78.0300 },

  // NASHIK
  { name: 'Gangapur Road', city: 'Nashik', state: 'Maharashtra', latitude: 20.0200, longitude: 73.7600 },
  { name: 'College Road', city: 'Nashik', state: 'Maharashtra', latitude: 19.9900, longitude: 73.7800 },
  { name: 'Pathardi Phata', city: 'Nashik', state: 'Maharashtra', latitude: 20.0000, longitude: 73.8200 },
  { name: 'Indira Nagar Nashik', city: 'Nashik', state: 'Maharashtra', latitude: 19.9800, longitude: 73.7500 },
  { name: 'Makhmalabad', city: 'Nashik', state: 'Maharashtra', latitude: 20.0400, longitude: 73.7300 },
  { name: 'Deolali', city: 'Nashik', state: 'Maharashtra', latitude: 19.9400, longitude: 73.8300 },

  // VADODARA
  { name: 'Alkapuri', city: 'Vadodara', state: 'Gujarat', latitude: 22.3100, longitude: 73.1700 },
  { name: 'Gotri', city: 'Vadodara', state: 'Gujarat', latitude: 22.3200, longitude: 73.1300 },
  { name: 'Vasna Road', city: 'Vadodara', state: 'Gujarat', latitude: 22.2700, longitude: 73.1600 },
  { name: 'Manjalpur', city: 'Vadodara', state: 'Gujarat', latitude: 22.2700, longitude: 73.1900 },
  { name: 'Waghodia Road', city: 'Vadodara', state: 'Gujarat', latitude: 22.3100, longitude: 73.2200 },
  { name: 'Gorwa', city: 'Vadodara', state: 'Gujarat', latitude: 22.3400, longitude: 73.1800 },

  // PATNA
  { name: 'Boring Road', city: 'Patna', state: 'Bihar', latitude: 25.6100, longitude: 85.1200 },
  { name: 'Kankarbagh', city: 'Patna', state: 'Bihar', latitude: 25.5900, longitude: 85.1600 },
  { name: 'Bailey Road', city: 'Patna', state: 'Bihar', latitude: 25.6200, longitude: 85.1300 },
  { name: 'Danapur', city: 'Patna', state: 'Bihar', latitude: 25.6300, longitude: 85.0500 },
  { name: 'Anisabad', city: 'Patna', state: 'Bihar', latitude: 25.6200, longitude: 85.1500 },
  { name: 'Saguna More', city: 'Patna', state: 'Bihar', latitude: 25.6300, longitude: 85.0800 },

  // BHUBANESWAR
  { name: 'Patia', city: 'Bhubaneswar', state: 'Odisha', latitude: 20.3500, longitude: 85.8200 },
  { name: 'Chandrasekharpur', city: 'Bhubaneswar', state: 'Odisha', latitude: 20.3300, longitude: 85.8200 },
  { name: 'Saheed Nagar', city: 'Bhubaneswar', state: 'Odisha', latitude: 20.2900, longitude: 85.8400 },
  { name: 'Nayapalli', city: 'Bhubaneswar', state: 'Odisha', latitude: 20.2900, longitude: 85.8000 },
  { name: 'Khandagiri', city: 'Bhubaneswar', state: 'Odisha', latitude: 20.2600, longitude: 85.7800 },
  { name: 'Sundarpada', city: 'Bhubaneswar', state: 'Odisha', latitude: 20.2800, longitude: 85.7700 },

  // GUWAHATI
  { name: 'Zoo Road', city: 'Guwahati', state: 'Assam', latitude: 26.1700, longitude: 91.7500 },
  { name: 'GS Road', city: 'Guwahati', state: 'Assam', latitude: 26.1500, longitude: 91.7700 },
  { name: 'Beltola', city: 'Guwahati', state: 'Assam', latitude: 26.1200, longitude: 91.7900 },
  { name: 'Dispur', city: 'Guwahati', state: 'Assam', latitude: 26.1400, longitude: 91.7900 },
  { name: 'Sixmile', city: 'Guwahati', state: 'Assam', latitude: 26.1200, longitude: 91.8200 },
  { name: 'Ganeshguri', city: 'Guwahati', state: 'Assam', latitude: 26.1400, longitude: 91.7800 },

  // MYSURU
  { name: 'Vijayanagar', city: 'Mysuru', state: 'Karnataka', latitude: 12.3100, longitude: 76.6200 },
  { name: 'Kuvempunagar', city: 'Mysuru', state: 'Karnataka', latitude: 12.2800, longitude: 76.6300 },
  { name: 'Hebbal Mysuru', city: 'Mysuru', state: 'Karnataka', latitude: 12.3400, longitude: 76.6400 },
  { name: 'Bogadi', city: 'Mysuru', state: 'Karnataka', latitude: 12.2600, longitude: 76.5800 },
  { name: 'JP Nagar Mysuru', city: 'Mysuru', state: 'Karnataka', latitude: 12.2900, longitude: 76.6200 },
  { name: 'Dattagalli', city: 'Mysuru', state: 'Karnataka', latitude: 12.2700, longitude: 76.5900 },

  // TRIVANDRUM
  { name: 'Technopark', city: 'Thiruvananthapuram', state: 'Kerala', latitude: 8.5569, longitude: 76.8825 },
  { name: 'Kazhakootam', city: 'Thiruvananthapuram', state: 'Kerala', latitude: 8.5600, longitude: 76.8800 },
  { name: 'Kowdiar', city: 'Thiruvananthapuram', state: 'Kerala', latitude: 8.5100, longitude: 76.9600 },
  { name: 'Pattom', city: 'Thiruvananthapuram', state: 'Kerala', latitude: 8.5200, longitude: 76.9400 },
  { name: 'Vattiyoorkavu', city: 'Thiruvananthapuram', state: 'Kerala', latitude: 8.5300, longitude: 76.9200 },
  { name: 'Mannanthala', city: 'Thiruvananthapuram', state: 'Kerala', latitude: 8.5500, longitude: 76.9100 },

  // RAJKOT
  { name: 'Kalawad Road', city: 'Rajkot', state: 'Gujarat', latitude: 22.2900, longitude: 70.7600 },
  { name: '150 Feet Ring Road', city: 'Rajkot', state: 'Gujarat', latitude: 22.3100, longitude: 70.7800 },
  { name: 'University Road', city: 'Rajkot', state: 'Gujarat', latitude: 22.3000, longitude: 70.8000 },
  { name: 'Raiya Road', city: 'Rajkot', state: 'Gujarat', latitude: 22.2800, longitude: 70.7700 },
  { name: 'Amin Marg', city: 'Rajkot', state: 'Gujarat', latitude: 22.3000, longitude: 70.8100 },

  // RAIPUR
  { name: 'Shankar Nagar', city: 'Raipur', state: 'Chhattisgarh', latitude: 21.2400, longitude: 81.6400 },
  { name: 'Telibandha', city: 'Raipur', state: 'Chhattisgarh', latitude: 21.2500, longitude: 81.6300 },
  { name: 'Devendra Nagar', city: 'Raipur', state: 'Chhattisgarh', latitude: 21.2300, longitude: 81.6100 },
  { name: 'Amanaka', city: 'Raipur', state: 'Chhattisgarh', latitude: 21.2500, longitude: 81.6500 },
  { name: 'Naya Raipur', city: 'Raipur', state: 'Chhattisgarh', latitude: 21.1600, longitude: 81.7400 },

  // RANCHI
  { name: 'Morabadi', city: 'Ranchi', state: 'Jharkhand', latitude: 23.3600, longitude: 85.3300 },
  { name: 'Harmu', city: 'Ranchi', state: 'Jharkhand', latitude: 23.3700, longitude: 85.3100 },
  { name: 'Ashok Nagar', city: 'Ranchi', state: 'Jharkhand', latitude: 23.3500, longitude: 85.3100 },
  { name: 'Bariatu', city: 'Ranchi', state: 'Jharkhand', latitude: 23.3600, longitude: 85.3000 },
  { name: 'Kanke Road', city: 'Ranchi', state: 'Jharkhand', latitude: 23.3800, longitude: 85.3200 },
];
