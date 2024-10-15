import { create } from "zustand";
import api from "../../../Utils/api";

const fetchCelebrants = async (set) => {
    try {
        console.log("Calling: ", api.defaults.baseURL + "birthday");
        const response = await api.post("birthday");
        console.log("Response: ", response.data);
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
}

const fetchAnniversaries = async (set) => {
    try {
        console.log("Calling: ", api.defaults.baseURL + "anniversary");
        const response = await api.post("anniversary")
        console.log("Response: ", response.data);
        if (response.status === 200) {
            const anniversaries = response.data.data.map((item) => ({
                ...item
            }));
            set({anniversaries});
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
    fetchCelebrants: async () => {fetchCelebrants(set)},
    fetchAnniversaries: async () => {fetchAnniversaries(set)},
}));


export default useDashboardStore;