<script setup lang="ts">
import { useRoute } from "vue-router";
import CollectionsComponent from "../components/CollectionsComponent.vue";
import FilterComponent from "../components/FilterComponent.vue";

const route = useRoute();
</script>

<template>
  <main v-if="route.name === 'collections'" class="main">
    <FilterComponent />

    <CollectionsComponent />
  </main>

  <template v-else>
    <RouterView />
  </template>
</template>

<style scoped lang="scss">
.main {
  background-color: rgb(var(--color-primary));
  display: grid;
  grid-template: auto / auto 1fr;
}

@media only screen and (max-width: 720px) {
  .main {
    grid-template: auto / auto;
  }
}
</style>
