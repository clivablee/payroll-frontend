import { create } from "zustand";
import api from "../../../Utils/api";

const fetchProfile = async (set) => {
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

    }
}

const useProfileStore = create((set) => ({
    isLoading: false,
    setLoading: (isLoading) => set({ isLoading }),
    fetchProfile: async () => {fetchProfile(set)},

}));