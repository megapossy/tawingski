import { describe, it, expect } from "vitest";

import { User as UserModel } from "@/models/User";

describe("User Model", async () => {
  // negative
  it("throws error when new UserModel with invalid email", () => {
    expect(() => new UserModel("")).toThrowError("Invalid Email!");
  });

  // positive
  // no errors
  // isLoading: assign and retrieve isLoading to/from store
  // register(): use createUserWithEmailAndPassword(this._email,password)
  // signIn(): signInWithEmailAndPassword(this._email,password)
});
