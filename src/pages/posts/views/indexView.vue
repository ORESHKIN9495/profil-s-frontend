<script setup lang="ts">
import { useRoute } from "vue-router";
import FilterComponent from "../components/FilterComponent.vue";
import PostsComponent from "../components/PostsComponent.vue";

const route = useRoute();
</script>

<template>
  <main v-if="route.name === 'posts'">
    <FilterComponent />

    <PostsComponent />
  </main>

  <template v-else>
    <RouterView />
  </template>
</template>

<style scoped lang="scss"></style>
