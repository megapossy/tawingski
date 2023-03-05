import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import Login from "./index.vue";

describe("Login", async () => {
  it("Email is not a valid email", async () => {
    const wrapper = mount(Login);
  });
});
