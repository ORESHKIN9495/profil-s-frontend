<script setup lang="ts">
import { home } from "@/pages/home/stores";
import { onMounted } from "vue";

const store = home();

onMounted(() => (store.index = 0));
</script>

<template>
  <div :class="{ hide: store.index > 3 }">
    <span v-text="store.index > 3 ? 4 : store.index + 1" />
    <hr />
    <span v-text="4" />
  </div>
</template>

<style scoped lang="scss">
div {
  align-items: baseline;
  display: flex;
  gap: 12px;
  height: 200px;
  inset: 40% 0;
  margin: -200px 48px 0 auto;
  position: sticky;
  transition: opacity 0.3s ease-in-out;
  width: fit-content;

  hr {
    border-left: 1px solid rgba(var(--color-light), 0.2);
    height: 100%;
  }

  span {
    font-size: 82px;

    &:last-of-type {
      font-size: 40px;
      opacity: 0.4;
    }
  }
}

@media only screen and (max-width: 720px) {
  div {
    display: none;
  }
}
</style>
