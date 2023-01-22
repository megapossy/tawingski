import Components from "./components";

declare module "@vue/runtime-core" {
  interface GlobalComponents {
    TWButton: typeof Components.Button;
    TWLogo: typeof Components.Logo;
    TWCheckbox: typeof Components.Checkbox;
    TWEmail: typeof Components.Email;
  }
}
