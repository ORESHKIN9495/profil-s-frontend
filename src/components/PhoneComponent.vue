<script setup lang="ts">
import { settings } from "@/stores/settings";
import { computed } from "vue";

const store = settings();
const phone = computed(() => store.responseData?.contacts[0].phone);
</script>

<template>
  <a :href="`tel:${phone}`" v-text="phone" />
</template>

<style scoped lang="scss">
a {
  &:hover {
    color: rgb(var(--color-theme));
  }
}
</style>
