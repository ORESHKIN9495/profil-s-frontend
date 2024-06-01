<script setup lang="ts">
import { root } from "@/stores/index";

const store = root();
</script>

<template>
  <svg v-if="store.stateMenu" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" v-on:click="store.stateMenu = false">
    <rect y="18.3848" width="26" height="2" transform="rotate(-45 0 18.3848)" fill="currentColor" />
    <rect x="1.41406" width="26" height="2" transform="rotate(45 1.41406 0)" fill="currentColor" />
  </svg>

  <svg v-else width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg" v-on:click="store.stateMenu = true">
    <rect width="30" height="1.8" fill="currentColor" />
    <rect y="8" width="30" height="1.8" fill="currentColor" />
    <rect y="16" width="30" height="1.8" fill="currentColor" />
  </svg>
</template>

<style scoped lang="scss">
svg {
  margin: auto 0 2px auto;
}
</style>
