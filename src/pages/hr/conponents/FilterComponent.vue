<script setup lang="ts">
import BreadCrumbsComponent from "@/components/BreadCrumbsComponent.vue";
import { computed } from "vue";
import { hr } from "../stores";
import CardComponent from "./CardComponent.vue";
const store = hr();

store.find();
const count = computed(() => store.list.filter((e) => e.published));
</script>

<template>
  <section>
    <BreadCrumbsComponent crumb="Вакансии" />

    <h1 class="heading">Вакансии</h1>
    <p v-text="'Открыто ' + count.length + ' вакансий'" />

    <div>
      <CardComponent v-for="(el, idx) of store.list.filter((el) => el.published)" :key="el.id" :data="el" :index="idx" />
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  margin: 0 0 0 auto;
  padding: clamp(48px, 5vw, 120px) clamp(24px, 2vw, 48px) 48px;

  p {
    margin: 24px 0 48px;
  }

  div {
    display: grid;
    gap: 24px;
  }
}

@media screen and (max-width: 920px) {
  section {
    margin: 0;

    div {
      grid-template: auto / repeat(auto-fit, minmax(250px, 1fr));
    }
  }
}
</style>
