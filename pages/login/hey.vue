<template>
  <div data-testid="hey">
    <p>asdasd</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { User as UserModel } from "~~/models/User";

export default defineComponent({
  setup() {
    const user = new UserModel("seuper@gmai.com");

    return {};
  },
});
</script>

<style scoped></style>
