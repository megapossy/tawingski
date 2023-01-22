import Button from "./button.vue";
import Logo from "./logo.vue";
import Checkbox from "./checkbox.vue";
import Email from "./input-email.vue";

export interface CompTypes {
  TWButton: typeof Button;
  TWLogo: typeof Logo;
  TWCheckbox: typeof Checkbox;
  TWEmail: typeof Email;
}

export default {
  Button,
  Logo,
  Checkbox,
  Email,
};
