<template>
  <input
    name="email"
    type="email"
    autocomplete="email"
    required
    class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
    :placeholder="props.placeholder" />
</template>

<script setup lang="ts">
const props = defineProps({
  placeholder: {
    type: String,
    default: "Email address",
  },
});
</script>

<style scoped></style>
