import { defineStore } from "pinia";
import { Firebase } from "@/services/Firebase";

export const useStore = defineStore("firebase.the", {
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
