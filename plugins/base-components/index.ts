// import Button from "./components/button.vue";
// import Logo from "./components/logo.vue";
// import CheckBox from "./components/checkbox.vue";
import Components from "./components";

import fs from "fs";
import path from "path";
const srcDir = path.resolve(__dirname);

export default defineNuxtPlugin((nuxtApp) => {
  for (const [compName, comp] of Object.entries(Components)) {
    nuxtApp.vueApp.component(`TW${compName}`, comp);
  }
});

// tailwindcss: {
//   config: {
//     content: [
//       `${srcDir}/plugins/**/*.vue`,
//     ],
//   }
// }
