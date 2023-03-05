<template>
  <div>
    <h1>test 3</h1>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const id = route.query.id;
const go1 = async () => {
  const data = await useFetch("/api/test?id=" + id);
  console.log("data1", data.data.value);
};

const go2 = async () => {
  const data = await useFetch("/api/test?id=2");
  console.log("data2", data.data.value);
};

const go3 = async () => {
  const data = await useFetch("/api/test?id=3");
  console.log("data3", data.data.value);
};

const go4 = async () => {
  const data = await useFetch("/api/test?id=" + id);
  console.log("data4", data.data.value);
};

await go1();
await go2();
await go3();
await go4();
</script>
