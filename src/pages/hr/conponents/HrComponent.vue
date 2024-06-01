<script setup lang="ts">
import BadgeComponent from "@/components/BadgeComponent.vue";
import { computed } from "vue";
import ListComponent from "../conponents/ListComponent.vue";
import { hr } from "../stores";

const store = hr();
const filtered = computed(() => store.list.filter((el, idx) => idx === store.index && el.published)[0]);

store.find();
</script>

<template>
  <section v-if="filtered">
    <h2 v-text="filtered.name" />

    <button class="button" v-on:click="store.stateModal = true">Откликнуться</button>

    <BadgeComponent :title="filtered.period" />

    <article>
      <h3>Зарплата</h3>
      <p v-text="filtered.cost" />
    </article>

    <article>
      <h3>Место работы</h3>
      <p v-text="filtered.address" />
    </article>

    <ListComponent title="Обязанности" :data="filtered.duties" />
    <ListComponent title="Требования" :data="filtered.requirements" />
    <ListComponent title="Условия" :data="filtered.conditions" />
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: rgb(var(--color-light));
  display: grid;
  grid-template: auto / auto 1fr;
  gap: 48px;
  place-items: baseline;
  padding: clamp(48px, 5vw, 120px) clamp(24px, 2vw, 48px) 48px;

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

@media screen and (max-width: 720px) {
  section {
    grid-template: auto / auto;
  }
}
</style>
