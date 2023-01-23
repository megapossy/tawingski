<template>
  <div>
    <h1>TEST 111</h1>
    <pre>{{ apiResult }}</pre>
    <NuxtLink to="/playtests/test2">test2</NuxtLink>
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
