<script setup lang="ts">
import CardComponent from "../components/CardComponent.vue";
import { services } from "../stores";

const store = services();

store.find();
</script>

<template>
  <section>
    <div>
      <h2 class="heading">Что мы делаем?</h2>

      <CardComponent v-for="(el, idx) of store.list.filter((el) => el.published)" :key="el.id" :data="el" :index="idx" v-on:click="store.index = idx" />
    </div>

    <div v-for="el of store.list.filter((el, idx) => store.index === idx && el.published)" :key="el.id">
      <article>
        <h3 v-text="el.name" />

        <p class="content" v-text="el.content" />

        <q v-text="el.quote" />
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: rgb(var(--color-primary));
  display: grid;
  grid-template: auto / 1fr 1fr;

  div {
    padding: 48px clamp(24px, 2vw, 48px);

    h2 {
      margin: 0 0 48px;
    }

    &:first-of-type {
      max-width: 600px;
      margin: 0 0 0 auto;
    }

    &:last-of-type {
      background-color: rgb(var(--color-light));

      article {
        display: grid;
        gap: 48px;
        max-width: 600px;

        q {
          border-top: 1px solid rgba(var(--color-dark), 0.1);
          padding: 48px 0 0;
        }
      }
    }
  }
}

@media only screen and (max-width: 920px) {
  section {
    grid-template: auto / auto;

    div {
      &:first-of-type {
        margin: 0;
        max-width: unset;
      }

      &:last-of-type {
        display: none;
      }
    }
  }
}
</style>
