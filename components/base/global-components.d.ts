import Components from "./components";
import Button from "./button.vue";
import Logo from "./logo.vue";
import Checkbox from "./checkbox.vue";
import InputEmail from "./input-email.vue";
import InputText from "./input-text.vue";
import InputPassword from "./input-password.vue";
import InputError from "./input-error.vue";
import Spinner from "./spinner.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    BaseButton: typeof Button;
    BaseLogo: typeof Logo;
    BaseCheckbox: typeof Checkbox;
    BaseInputEmail: typeof InputEmail;
    BaseInputText: typeof InputText;
    BaseInputPassword: typeof InputPassword;
    BaseInputError: typeof InputError;
    BaseSpinner: typeof Spinner;
  }
}
