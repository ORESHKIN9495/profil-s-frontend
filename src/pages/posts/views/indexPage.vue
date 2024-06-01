<script setup lang="ts">
import BreadCrumbsComponent from "@/components/BreadCrumbsComponent.vue";
import MaskComponent from "@/components/MaskComponent.vue";
import { computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import CardComponent from "../components/CardComponent.vue";
import { posts } from "../stores";

const url = import.meta.env.VITE_URL;

const store = posts();
const route = useRoute();

store.find();
watchEffect(() => store.findOne(route.params.id as string));

const next = computed(() => store.list.filter((el) => el.id !== +route.params.id)[0]);

const splitValue = computed(() => store.listOne?.name.split(" ").slice(0, 3).join(" ") + "...");
</script>

<template>
  <main v-if="store.listOne">
    <section>
      <BreadCrumbsComponent :crumb="splitValue" />

      <h1 class="heading" v-text="store.listOne.name" />

      <p class="content" v-text="store.listOne.description" />

      <CardComponent :data="next" />

      <picture>
        <img v-if="store.listOne?.file" :src="`${url}/out/${store.listOne?.file}.webp`" :alt="store.listOne?.name" />

        <MaskComponent v-else />
      </picture>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  section {
    display: grid;
    grid-template: auto / 1fr 480px;
    gap: 48px;
    margin: auto;
    max-width: 1200px;
    padding: clamp(48px, 5vw, 120px) 24px;

    nav {
      grid-column: 1 / -1;
    }

    h1 {
      grid-column: 1 / -1;
    }

    picture {
      background-color: rgb(var(--color-theme));
      border-radius: var(--theme-radius);
      min-height: 400px;

      img {
        height: 100%;
        object-fit: cover;
        width: 100%;
      }
    }

    article {
      height: fit-content;
    }
  }
}

@media only screen and (max-width: 920px) {
  main {
    section {
      grid-template: auto / auto;
    }
  }
}
</style>
