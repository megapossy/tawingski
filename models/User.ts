import { useStore as useUserProfileStore } from "~~/store/user/useProfile";
import type { UserType } from "~~/store/user/useProfile";
import { useStore as useFBUserStore } from "@/store/useFirebase";

export class User {
  private _email: string;

  constructor(email: string) {
    this._email = email;
  }

  get data() {
    const uups = useUserProfileStore();
    return uups.data;
  }

  get isLoading() {
    const uups = useUserProfileStore();
    return uups.isLoading;
  }

  set isLoading(data: boolean) {
    const uups = useUserProfileStore();
    uups.isLoading = data;
  }

  async register(password: string) {
    const fbUserStore = useFBUserStore();
    await fbUserStore.instance?.createUserWithEmailAndPassword(
      this._email,
      password
    );
  }

  async signIn(password: string) {
    const fbUserStore = useFBUserStore();

    try {
      const userCreds = await fbUserStore.instance?.signInWithEmailAndPassword(
        this._email,
        password
      );

      if (userCreds) {
        this.data.email = userCreds.user.email || "";
        this.isLoading = true; // test
      } else throw error.createError("No email!");

      console.log("userCreds", userCreds);
    } catch (error) {
      throw error;
    }
  }
}
