<script setup lang="ts">
import BadgeComponent from "@/components/BadgeComponent.vue";
import BreadCrumbsComponent from "@/components/BreadCrumbsComponent.vue";
import { useRoute } from "vue-router";
import ListComponent from "../conponents/ListComponent.vue";
import { hr } from "../stores";

const route = useRoute();
const store = hr();

store.findOne(route.params.id as string);
</script>

<template>
  <main>
    <section v-if="store.listOne">
      <BreadCrumbsComponent :crumb="store.listOne.name" />

      <h2 v-text="store.listOne.name" />

      <button class="button" v-on:click="store.stateModal = true">Откликнуться</button>

      <BadgeComponent :title="store.listOne.period" />

      <article>
        <h3>Зарплата</h3>
        <p v-text="store.listOne.cost" />
      </article>

      <article>
        <h3>Место работы</h3>
        <p v-text="store.listOne.address" />
      </article>

      <ListComponent title="Обязанности" :data="store.listOne.duties" />
      <ListComponent title="Требования" :data="store.listOne.requirements" />
      <ListComponent title="Условия" :data="store.listOne.conditions" />
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  section {
    display: grid;
    grid-template: auto / auto 1fr;
    gap: 48px;
    margin: auto;
    max-width: 1200px;

    place-items: baseline;
    padding: clamp(48px, 5vw, 120px) clamp(24px, 2vw, 48px) 48px;

    nav {
      grid-column: 1 / -1;
    }

    h2 {
      line-height: 1;
      margin: auto 0 0;
    }

    h3 {
      opacity: 0.3;
      text-transform: uppercase;
    }

    span {
      grid-column: 1 / -1;
    }

    ul {
      grid-column: 1 / -1;
    }
  }
}

@media screen and (max-width: 720px) {
  main {
    section {
      grid-template: auto / auto;
    }
  }
}
</style>
