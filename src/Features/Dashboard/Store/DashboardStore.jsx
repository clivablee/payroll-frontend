import { create } from "zustand";
import api from "../../../Utils/api";

const fetchCelebrants = async (set) => {
    try {
        const response = await api.post("birthday");
        console.log("Response: ", response.data);
        if (response.status === 200) {
            const celebrants = response.data.data.map((item) => ({
                ...item,
            }));
            set({ isLoading: false, celebrants });
        }
    } catch (e) {
        console.log("Error: ", e);
    } finally {
        set({ isLoading: false });
    }
}

const useDashboardStore = create((set) => ({
    isLoading: false,
    celebrants: null,
    anniversaries: null,
    fetchCelebrants: async () => {fetchCelebrants(set)},
    fetchAnniversaries: () => {},
}));


export default useDashboardStore;