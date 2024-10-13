import axios from "axios";
import { create } from "zustand";
import api from "../../../Utils/api";
const baseUrl = "http://localhost:5500/api/v1/";

const useAuthStore = create((set) => ({
    
    isLoggedIn: false,
    passwordVisibility: false,
    isLoading: false,
    username: "",
    password: "",
    setUsername: (username) => set({ username }),
    setPassword: (password) => set({ password }),
    togglePasswordVisibility: () => {
        set((state) => ({
            passwordVisibility: !state.passwordVisibility,
        }));
    },
    login: async () => {
        set({ isLoading: true });
        const {username, password} = useAuthStore.getState();
        try {
            const response = await api.post("login", {
                username, password
            });
            console.log("Response: ", response.data);

            if (response.status === 200) {
                set({ isLoggedIn: true })
            }
            
        } catch (e) {
            console.log(e.response ? e.response.data : e.message);
        } finally {
            set({ isLoading: false })
        }
        
    },
  
}));

export default useAuthStore;