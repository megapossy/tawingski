import { describe, it, expect } from "vitest";
import { fileURLToPath } from "node:url";
import { $fetch, setup } from "@nuxt/test-utils";

describe.skip("Hey", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("./fixture", import.meta.url)),
  });
  it("Hey test", async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch("/login/hey");
    expect(html).toContain("asdasd");
  });
});
