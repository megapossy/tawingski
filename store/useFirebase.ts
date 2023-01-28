import { defineStore } from "pinia";
import { Firebase } from "@/services/Firebase";

export const useUserStore = defineStore("firebase.user", {
  state: (): {
    instance: Firebase | undefined;
    isLoading: boolean;
  } => {
    return {
      instance: undefined,
      isLoading: false,
    };
  },
});
