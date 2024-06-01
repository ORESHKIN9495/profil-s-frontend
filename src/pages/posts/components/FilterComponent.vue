<script setup lang="ts">
import BreadCrumbsComponent from "@/components/BreadCrumbsComponent.vue";
import { ref } from "vue";
import { posts } from "../stores";

const store = posts();

const array = ref(["Все", "Новости", "Акции"]);

const sorted = ref(false);
</script>

<template>
  <section>
    <article>
      <BreadCrumbsComponent crumb="Новости" />

      <h1 class="heading">Новости</h1>

      <ol>
        <li v-for="(el, idx) of array" :key="idx" :class="{ button: store.filter === idx }" v-on:click="store.filter = idx" v-text="el" />
      </ol>

      <ol>
        Сортировать по дате:
        <li v-on:click="sorted = !sorted" v-text="sorted ? 'Сначала старые' : 'Сначала новые'" />
      </ol>
    </article>
  </section>
</template>

<style scoped lang="scss">
section {
  background-color: rgb(var(--color-primary));

  article {
    margin: auto;
    max-width: 1200px;
    padding: clamp(24px, 5vw, 120px) clamp(24px, 2vw, 48px) 48px;

    h1 {
      margin: 0 0 48px;
    }

    ol {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      width: fit-content;

      li {
        cursor: pointer;
      }

      &:first-of-type {
        border-radius: var(--theme-radius);
        overflow: hidden;

        li {
          background-color: rgba(var(--color-dark), 0.05);
          color: rgba(var(--color-dark), 0.4);
          flex-grow: 1;
          padding: 12px 48px;
          text-align: center;

          &.button {
            background-color: rgb(var(--color-theme));
            color: rgb(var(--color-light));
          }
        }
      }

      &:last-of-type {
        margin: clamp(20px, 5vw, 120px) 0 0;

        li {
          color: rgb(var(--color-theme));
          margin: 0 0 0 10px;
        }
      }
    }
  }
}
</style>
