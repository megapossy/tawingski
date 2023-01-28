<template>
  <input
    type="checkbox"
    class="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
  <label for="remember-me" class="ml-2 block text-sm text-red-900">
    {{ props.label }}
  </label>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
});
</script>

<style scoped></style>
