import Button from "./components/button.vue";
import CheckBox from "./components/input-checkbox.vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("TWButton", Button);
  nuxtApp.vueApp.component("TWCheckBox", CheckBox);
});
