<template>
  <div
    class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <TWLogo />
        <h2
          class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign up
        </h2>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <div class="rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <TWEmail />
          </div>
          <div class="mt-6">
            <label for="password" class="sr-only">Password</label>
            <TWPassword />
            <TWPassword class="mt-3" placeholder="Confirm Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <TWCheckbox label="Remember Me" />
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-red-600 hover:text-red-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <TWButton>
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
          </TWButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { api } from "@/lib/api";

console.log("setup");

let apiResult = ref();
onMounted(async () => {
  console.log("onMounted");
  // apiResult.value = await api();
});
apiResult.value = await api();
</script>

<style scoped></style>
