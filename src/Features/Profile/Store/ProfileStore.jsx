import { create } from "zustand";
import api from "../../../Utils/api";

const fetchProfile = async (set) => {
  try {
    const response = await api.get("profile", {
      withCredentials: true,
    });
    console.log("Response: ", response.data.data);
    if (response.status === 200) {
      const profile = response.data.data;
      set({ profile });
    }
  } catch (e) {
    console.log("Error: ", e);
  }
};

const useProfileStore = create((set) => ({
  isLoading: false,
  profile: null,
  setLoading: (isLoading) => set({ isLoading }),
  fetchProfile: async () => {
    fetchProfile(set);
  },
}));

export default useProfileStore;
