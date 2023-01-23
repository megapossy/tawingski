<template>
  <div>
    <h1>TEST 2222222222</h1>
    <pre>{{ apiResult }}</pre>
    <NuxtLink to="/playtests/test1">test1</NuxtLink>
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
