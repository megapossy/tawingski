import path from "path";
import vue from "@vitejs/plugin-vue";
const srcDir = path.resolve(__dirname);

export default {
  plugins: [vue()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": srcDir,
      "~": srcDir,
      "~~": srcDir,
    },
  },
};
