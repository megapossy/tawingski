<template>
  <div>
    <h1>This is a block</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["authenticated-users-only"],
});
</script>

<style scoped></style>
