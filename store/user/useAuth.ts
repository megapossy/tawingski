import { defineStore } from "pinia";

export const useStore = defineStore("user.auth", {
  state: () => {
    return {
      isLoggedIn: false,
      isLoading: false,
    };
  },
  persist: true,
});
