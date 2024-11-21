import { create } from "zustand";
import api from "../../../Utils/api";

const fetchCelebrants = async (set) => {
  try {
    const response = await api.post("birthday", null, {
      withCredentials: true,
    });
    if (response.status === 200) {
      const celebrants = response.data.data.map((item) => ({
        ...item,
      }));
      set({ celebrants });
    }
  } catch (e) {
    console.log("Error: ", e);
  } finally {
    set({ isLoading: false });
  }
};

const fetchAnniversaries = async (set) => {
  try {
    const response = await api.post("anniversary", null, {
      withCredentials: true,
    });
    if (response.status === 200) {
      const anniversaries = response.data.data.map((item) => ({
        ...item,
      }));
      set({ anniversaries: anniversaries });
    }
  } catch (e) {
    console.log("Error: ", e);
  } finally {
    set({ isLoading: false });
  }
};

const useDashboardStore = create((set) => ({
  isLoading: false,
  celebrants: null,
  anniversaries: null,
  fetchCelebrants: async () => {
    fetchCelebrants(set);
  },
  fetchAnniversaries: async () => {
    fetchAnniversaries(set);
  },
}));

export default useDashboardStore;
