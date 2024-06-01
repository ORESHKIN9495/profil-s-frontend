<script setup lang="ts">
import { watchEffect } from "vue";
import { useRoute } from "vue-router";
import FilterComponent from "../conponents/FilterComponent.vue";
import HrComponent from "../conponents/HrComponent.vue";
import ModalComponent from "../conponents/ModalComponent.vue";
import { hr } from "../stores";

const route = useRoute();
const store = hr();

watchEffect(() => {
  window.addEventListener("resize", () => (window.innerWidth < 920 ? (store.resolution = true) : (store.resolution = false)));
  window.innerWidth < 920 ? (store.resolution = true) : (store.resolution = false);
});
</script>

<template>
  <main class="main_hr" v-if="route.name === 'hr'">
    <FilterComponent />
    <HrComponent v-if="!store.resolution" />
  </main>

  <template v-else>
    <RouterView />
  </template>

  <ModalComponent />
</template>

<style scoped lang="scss">
.main_hr {
  background-color: rgb(var(--color-primary));
  display: grid;
  grid-template: auto / repeat(2, 1fr);
}

@media screen and (max-width: 920px) {
  .main_hr {
    grid-template: auto / auto;
  }
}
</style>
