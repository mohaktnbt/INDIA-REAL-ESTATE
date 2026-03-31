import { create } from 'zustand';

interface DashboardState {
  sidebarOpen: boolean;
  selectedCity: string | null;
  selectedDateRange: string;
  toggleSidebar: () => void;
  setSidebarOpen: (open: boolean) => void;
  setSelectedCity: (city: string | null) => void;
  setSelectedDateRange: (range: string) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  sidebarOpen: true,
  selectedCity: null,
  selectedDateRange: '1Y',
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setSelectedCity: (city) => set({ selectedCity: city }),
  setSelectedDateRange: (range) => set({ selectedDateRange: range }),
}));
