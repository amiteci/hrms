import { defineStore } from "pinia";
import api from "../api/axios";
import router from "../router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    role: localStorage.getItem("role") || null
  }),

  actions: {
    async login(data) {
      const res = await api.post("/auth/login", data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      this.role = res.data.role;

      router.push("/dashboard");
    },

    logout() {
      localStorage.clear();
      this.role = null;
      router.push("/login");
    }
  }
});