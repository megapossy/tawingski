import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { fetch } from "@nuxt/test-utils";

import Hey from "./hey.vue";

describe("Hey", () => {
  it("Email is not a valid email", () => {
    const wrapper = mount(Hey);
    const paragraph = wrapper.get('[data-testid="hey"] p');
    console.log("paragraph", wrapper.html);
  });
});
