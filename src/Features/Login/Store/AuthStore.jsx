import { create } from "zustand";
import api from "../../../Utils/api";

const useAuthStore = create((set) => ({
  error: "",
  isLoggedIn: !!window.localStorage.getItem("isLoggedIn"),
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
    const { username, password } = useAuthStore.getState();
    try {
      const response = await api.post(
        "login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        },
      );
      console.log("Response: ", response.data);

      if (response.status === 200) {
        set({ isLoggedIn: true });
        // window.localStorage.setItem("isLoggedIn", true);
      }
    } catch (e) {
      set({ error: "Wrong input" });

      console.log(e.response ? e.response.data : e.message);
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    set({ isLoggedIn: false });
    window.localStorage.removeItem("isLoggedIn");
  },
}));

export default useAuthStore;
