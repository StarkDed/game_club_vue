import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore("authStore", () => {
  const isAuthenticated = ref(true); // Реактивная переменная

  return {
    isAuthenticated,
  };
});
