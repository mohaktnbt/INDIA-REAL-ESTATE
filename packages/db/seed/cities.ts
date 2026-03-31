/**
 * Seed data: 50+ Indian cities with real coordinates, populations, and tier classifications.
 * Population figures are approximate (2021-2024 estimates for urban agglomeration).
 * Coordinates point to city center.
 */

export interface CityData {
  name: string;
  state: string;
  tier: 1 | 2 | 3;
  latitude: number;
  longitude: number;
  population: number;
}

export const cities: CityData[] = [
  // ─────────────────────────────────────────────────
  // TIER 1 — Metro cities (8)
  // ─────────────────────────────────────────────────
  { name: 'Mumbai', state: 'Maharashtra', tier: 1, latitude: 19.0760, longitude: 72.8777, population: 21000000 },
  { name: 'Delhi', state: 'Delhi', tier: 1, latitude: 28.6139, longitude: 77.2090, population: 19500000 },
  { name: 'Bangalore', state: 'Karnataka', tier: 1, latitude: 12.9716, longitude: 77.5946, population: 13200000 },
  { name: 'Hyderabad', state: 'Telangana', tier: 1, latitude: 17.3850, longitude: 78.4867, population: 10530000 },
  { name: 'Chennai', state: 'Tamil Nadu', tier: 1, latitude: 13.0827, longitude: 80.2707, population: 11500000 },
  { name: 'Kolkata', state: 'West Bengal', tier: 1, latitude: 22.5726, longitude: 88.3639, population: 15100000 },
  { name: 'Pune', state: 'Maharashtra', tier: 1, latitude: 18.5204, longitude: 73.8567, population: 7800000 },
  { name: 'Ahmedabad', state: 'Gujarat', tier: 1, latitude: 23.0225, longitude: 72.5714, population: 8600000 },

  // ─────────────────────────────────────────────────
  // TIER 2 — Major cities (20)
  // ─────────────────────────────────────────────────
  { name: 'Jaipur', state: 'Rajasthan', tier: 2, latitude: 26.9124, longitude: 75.7873, population: 4100000 },
  { name: 'Lucknow', state: 'Uttar Pradesh', tier: 2, latitude: 26.8467, longitude: 80.9462, population: 3800000 },
  { name: 'Kochi', state: 'Kerala', tier: 2, latitude: 9.9312, longitude: 76.2673, population: 2300000 },
  { name: 'Chandigarh', state: 'Chandigarh', tier: 2, latitude: 30.7333, longitude: 76.7794, population: 1200000 },
  { name: 'Indore', state: 'Madhya Pradesh', tier: 2, latitude: 22.7196, longitude: 75.8577, population: 3200000 },
  { name: 'Nagpur', state: 'Maharashtra', tier: 2, latitude: 21.1458, longitude: 79.0882, population: 3100000 },
  { name: 'Coimbatore', state: 'Tamil Nadu', tier: 2, latitude: 11.0168, longitude: 76.9558, population: 2200000 },
  { name: 'Visakhapatnam', state: 'Andhra Pradesh', tier: 2, latitude: 17.6868, longitude: 83.2185, population: 2100000 },
  { name: 'Bhopal', state: 'Madhya Pradesh', tier: 2, latitude: 23.2599, longitude: 77.4126, population: 2500000 },
  { name: 'Patna', state: 'Bihar', tier: 2, latitude: 25.6093, longitude: 85.1376, population: 2700000 },
  { name: 'Vadodara', state: 'Gujarat', tier: 2, latitude: 22.3072, longitude: 73.1812, population: 2200000 },
  { name: 'Gurgaon', state: 'Haryana', tier: 2, latitude: 28.4595, longitude: 77.0266, population: 1500000 },
  { name: 'Noida', state: 'Uttar Pradesh', tier: 2, latitude: 28.5355, longitude: 77.3910, population: 1200000 },
  { name: 'Ghaziabad', state: 'Uttar Pradesh', tier: 2, latitude: 28.6692, longitude: 77.4538, population: 2400000 },
  { name: 'Thane', state: 'Maharashtra', tier: 2, latitude: 19.2183, longitude: 72.9781, population: 2400000 },
  { name: 'Navi Mumbai', state: 'Maharashtra', tier: 2, latitude: 19.0330, longitude: 73.0297, population: 1800000 },
  { name: 'Greater Noida', state: 'Uttar Pradesh', tier: 2, latitude: 28.4744, longitude: 77.5040, population: 600000 },
  { name: 'Surat', state: 'Gujarat', tier: 2, latitude: 21.1702, longitude: 72.8311, population: 6900000 },
  { name: 'Bhubaneswar', state: 'Odisha', tier: 2, latitude: 20.2961, longitude: 85.8245, population: 1100000 },
  { name: 'Thiruvananthapuram', state: 'Kerala', tier: 2, latitude: 8.5241, longitude: 76.9366, population: 1800000 },

  // ─────────────────────────────────────────────────
  // TIER 3 — Emerging cities (30+)
  // ─────────────────────────────────────────────────
  { name: 'Agra', state: 'Uttar Pradesh', tier: 3, latitude: 27.1767, longitude: 78.0081, population: 2100000 },
  { name: 'Varanasi', state: 'Uttar Pradesh', tier: 3, latitude: 25.3176, longitude: 82.9739, population: 1700000 },
  { name: 'Dehradun', state: 'Uttarakhand', tier: 3, latitude: 30.3165, longitude: 78.0322, population: 800000 },
  { name: 'Mysuru', state: 'Karnataka', tier: 3, latitude: 12.2958, longitude: 76.6394, population: 1200000 },
  { name: 'Mangaluru', state: 'Karnataka', tier: 3, latitude: 12.9141, longitude: 74.8560, population: 700000 },
  { name: 'Nashik', state: 'Maharashtra', tier: 3, latitude: 19.9975, longitude: 73.7898, population: 2100000 },
  { name: 'Aurangabad', state: 'Maharashtra', tier: 3, latitude: 19.8762, longitude: 75.3433, population: 1600000 },
  { name: 'Rajkot', state: 'Gujarat', tier: 3, latitude: 22.3039, longitude: 70.8022, population: 1800000 },
  { name: 'Ludhiana', state: 'Punjab', tier: 3, latitude: 30.9010, longitude: 75.8573, population: 1900000 },
  { name: 'Amritsar', state: 'Punjab', tier: 3, latitude: 31.6340, longitude: 74.8723, population: 1300000 },
  { name: 'Raipur', state: 'Chhattisgarh', tier: 3, latitude: 21.2514, longitude: 81.6296, population: 1200000 },
  { name: 'Ranchi', state: 'Jharkhand', tier: 3, latitude: 23.3441, longitude: 85.3096, population: 1300000 },
  { name: 'Guwahati', state: 'Assam', tier: 3, latitude: 26.1445, longitude: 91.7362, population: 1100000 },
  { name: 'Vijayawada', state: 'Andhra Pradesh', tier: 3, latitude: 16.5062, longitude: 80.6480, population: 1400000 },
  { name: 'Jodhpur', state: 'Rajasthan', tier: 3, latitude: 26.2389, longitude: 73.0243, population: 1400000 },
  { name: 'Madurai', state: 'Tamil Nadu', tier: 3, latitude: 9.9252, longitude: 78.1198, population: 1500000 },
  { name: 'Tiruchirappalli', state: 'Tamil Nadu', tier: 3, latitude: 10.7905, longitude: 78.7047, population: 1100000 },
  { name: 'Kanpur', state: 'Uttar Pradesh', tier: 3, latitude: 26.4499, longitude: 80.3319, population: 3100000 },
  { name: 'Meerut', state: 'Uttar Pradesh', tier: 3, latitude: 28.9845, longitude: 77.7064, population: 1800000 },
  { name: 'Faridabad', state: 'Haryana', tier: 3, latitude: 28.4089, longitude: 77.3178, population: 1800000 },
  { name: 'Jalandhar', state: 'Punjab', tier: 3, latitude: 31.3260, longitude: 75.5762, population: 1000000 },
  { name: 'Hubli-Dharwad', state: 'Karnataka', tier: 3, latitude: 15.3647, longitude: 75.1240, population: 1100000 },
  { name: 'Udaipur', state: 'Rajasthan', tier: 3, latitude: 24.5854, longitude: 73.7125, population: 600000 },
  { name: 'Jammu', state: 'Jammu & Kashmir', tier: 3, latitude: 32.7266, longitude: 74.8570, population: 600000 },
  { name: 'Kozhikode', state: 'Kerala', tier: 3, latitude: 11.2588, longitude: 75.7804, population: 700000 },
  { name: 'Thrissur', state: 'Kerala', tier: 3, latitude: 10.5276, longitude: 76.2144, population: 500000 },
  { name: 'Salem', state: 'Tamil Nadu', tier: 3, latitude: 11.6643, longitude: 78.1460, population: 900000 },
  { name: 'Guntur', state: 'Andhra Pradesh', tier: 3, latitude: 16.3067, longitude: 80.4365, population: 800000 },
  { name: 'Jamshedpur', state: 'Jharkhand', tier: 3, latitude: 22.8046, longitude: 86.2029, population: 1400000 },
  { name: 'Siliguri', state: 'West Bengal', tier: 3, latitude: 26.7271, longitude: 88.3953, population: 800000 },
  { name: 'Panaji', state: 'Goa', tier: 3, latitude: 15.4909, longitude: 73.8278, population: 120000 },
  { name: 'Gandhinagar', state: 'Gujarat', tier: 3, latitude: 23.2156, longitude: 72.6369, population: 400000 },
];
