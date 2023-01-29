<template>
  <div
    class="text-red-600 m-3"
    v-if="errors.length && typeof errors === 'object'">
    <p>
      {{ errors[0] }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  errors: {
    type: Array as PropType<string[]>,
    default: [],
  },
});
</script>

<style scoped></style>
