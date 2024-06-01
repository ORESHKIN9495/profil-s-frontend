<script setup lang="ts">
import { computed } from "vue";
import CardComponent from "../components/CardComponent.vue";
import { posts } from "../stores";

const store = posts();

const filteredList = computed(() => {
  return store.list.filter((el) => {
    if (store.filter === 0) return el;
    if (store.filter === 1 && !el.promo) return el;
    if (store.filter === 2 && el.promo) return el;
  });
});

store.find();
</script>

<template>
  <section>
    <CardComponent v-for="el of filteredList.filter((el) => el.published)" :key="el.id" :data="el" />
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: rgb(var(--color-light));
  display: grid;
  grid-template: auto / repeat(2, 1fr);
  gap: 40px;
  margin: auto;
  max-width: 1200px;
  padding: 48px clamp(24px, 2vw, 48px);
}

@media only screen and (max-width: 720px) {
  section {
    grid-template: auto / auto;
  }
}
</style>
