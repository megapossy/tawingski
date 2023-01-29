<template>
  <div
    class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <BaseLogo />
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign up
        </h2>
      </div>
      <h1 class="big-text">
        TEST
        <span>this is yellow</span>
        <span class="yo">this is green</span>
      </h1>

      <form class="mt-8 space-y-6" action="#" method="POST">
        <div class="">
          <div>
            <label for="username" class="sr-only">Username</label>
            <BaseInputText v-model="form.username" :placeholder="'Username'" />
            <BaseInputError :errors="errors?.username" />
          </div>
          <div class="mt-3">
            <label for="email-address" class="sr-only">Email address</label>
            <BaseInputEmail v-model="form.email" />
            <BaseInputError :errors="errors?.email" />
          </div>
          <div class="mt-8">
            <label for="password" class="sr-only">Password</label>
            <BaseInputPassword v-model="form.password" />
            <BaseInputError :errors="errors?.password" />
            <BaseInputPassword
              v-model="form.confirmPassword"
              class="mt-3"
              placeholder="Confirm Password" />
            <BaseInputError :errors="errors?.confirmPassword" />
          </div>
        </div>

        <div>
          <BaseButton @click="submit()" :is-loading="isValidating">
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
            Sign up
          </BaseButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import Test from "@/components/test.vue";

onMounted(async () => {
  console.log("onMounted");
});

const form = reactive({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const errors = ref<Awaited<ReturnType<typeof validateFields>>>();
const validate = async () => {
  errors.value = await validateFields([
    {
      field: "email",
      value: form.email,
    },
    {
      field: "username",
      value: form.username,
    },
    {
      field: "password",
      value: form.password,
    },
    {
      field: "confirmPassword",
      value: form.confirmPassword,
    },
  ]);
};

const isValidating = ref(false);

const submit = async () => {
  isValidating.value = true;
  try {
    await validate();
    console.log("errors.value", errors.value);
    errors.value = {};
  } catch (error: any) {
    errors.value = error;
  }
  if (!errors.value) {
    alert("SUBMITTING!");
  }
  isValidating.value = false;
};
</script>

<style scoped lang="scss">
.big-text .yo {
  color: $green;
}
</style>
