import { defineStore } from "pinia";

export interface UserType {
  username: string;
  email: string;
  firstName: string;
  middleName: string;
  lastName: string;
}

export const useStore = defineStore("user.profile", {
  state: () => {
    return {
      data: {
        username: "",
        email: "",
        firstName: "",
        middleName: "",
        lastName: "",
      } as UserType,
      isLoading: false,
    };
  },
  persist: true,
});
