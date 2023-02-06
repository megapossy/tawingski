<template>
  <div
    class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <BaseLogo />
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <div class="">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <BaseInputEmail v-model="form.email" />
            <BaseInputError data-testid="email-error" :errors="errors?.email" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <BaseInputPassword v-model="form.password" class="mt-2" />
            <BaseInputError :errors="errors?.password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <BaseCheckbox label="Remember Me" />
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-red-600 hover:text-red-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <BaseButton @click="submit()" :is-loading="isLoading">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                class="h-5 w-5 text-white-500 group-hover:text-white-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            Sign in
          </BaseButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User as UserModel } from "~~/models/User";

onMounted(async () => {
  console.log("onMounted");
});

const form = reactive({
  email: "",
  password: "",
});
const isLoading = ref(false);

const errors = ref<Awaited<ReturnType<typeof validateFields>>>();
const validate = async () => {
  errors.value = await validateFields([
    {
      field: "email",
      value: form.email,
    },
    {
      field: "password",
      value: form.password,
    },
  ]);
};

const submit = async () => {
  isLoading.value = true;
  try {
    await validate();
    console.log("errors.value", errors.value);
    errors.value = {};
  } catch (error: any) {
    console.log("validate", errors);
    errors.value = error;
    isLoading.value = false;
    return;
  }

  try {
    const user = new UserModel(form.email);
    // signin user
    await user.signIn(form.password);
  } catch (error: any) {
    console.error(error);
    isLoading.value = false;
    return;
  }

  isLoading.value = false;
};
</script>

<style scoped lang="scss"></style>
