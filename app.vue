<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
// onMounted;
// const firebase = provide()

onMounted(() => {
  // init firebase
  useFirebase().actions.init.the();
});
</script>

<style scoped></style>
