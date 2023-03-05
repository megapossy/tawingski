import { useStore as useUserProfileStore } from "@/store/user/useProfile";
import type { UserType } from "@/store/user/useProfile";
import { useStore as useFBStore } from "@/store/useFirebase";

import { validateFields } from "@/utils/fieldValidate";
import { error as er } from "@/utils/error";

import { AUTH_ERROR_CODES_ENUM as AECU } from "@/services/Firebase";

export class User {
  private _email: string;
  private static collection = "users";

  /**
   * Email must be valid
   * @param email
   */
  constructor(email: string) {
    const hasErrors = validateFields([
      {
        field: "email",
        value: email,
      },
    ]);
    if (hasErrors?.email?.length) throw er.create("Invalid Email!");

    this._email = email;
  }

  get data() {
    const uups = useUserProfileStore();
    return uups.data;
  }

  // static methods
  //////////////////

  static get isLoading() {
    const uups = useUserProfileStore();
    return uups.isLoading;
  }

  static set isLoading(data: boolean) {
    const uups = useUserProfileStore();
    uups.isLoading = data;
  }

  static async register(data: {
    username: string;
    email: string;
    password: string;
  }) {
    const fbStore = useFBStore();
    const userRes = await fbStore.instance?.createUserWithEmailAndPassword(
      data.email,
      data.password
    );

    // check if email and username exist
    try {
      const usrFound = await fbStore.instance?.read(User.collection, [
        {
          field: "email",
          value: data.email,
        },
      ]);
      if (usrFound?.size)
        throw er.create("Email already existed!", AECU.EMAIL_EXISTS);
    } catch (error: any) {
      if (error.code === AECU.EMAIL_EXISTS)
        throw er.create("Email already existed!", AECU.EMAIL_EXISTS);
    }

    // add username to users
    await fbStore.instance?.write(User.collection, {
      username: data.username,
      email: data.email,
    });
  }

  static async signIn(data: { email: string; password: string }) {
    const fbStore = useFBStore();

    try {
      const userCreds = await fbStore.instance?.signInWithEmailAndPassword(
        data.email,
        data.password
      );

      if (userCreds) {
        data.email = userCreds.user.email || "";
      } else throw error.create("No email!");

      console.log("userCreds", userCreds);
    } catch (error) {
      throw error;
    }
  }
}
