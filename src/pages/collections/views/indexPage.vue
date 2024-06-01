<script setup lang="ts">
import BreadCrumbsComponent from "@/components/BreadCrumbsComponent.vue";
import MaskComponent from "@/components/MaskComponent.vue";
import { useRoute } from "vue-router";
import SizeComponent from "../components/SizeComponent.vue";
import SpecsComponent from "../components/SpecsComponent.vue";
import { collections } from "../stores";

const url = import.meta.env.VITE_URL;

const store = collections();
const route = useRoute();

store.findOne(route.params.id as string);
</script>

<template>
  <main v-if="store.listOne">
    <section>
      <article :class="{ video: store.listOne?.category.file.video !== 'example.mp4' }">
        <video
          v-if="store.listOne?.category.file.video !== 'example.mp4'"
          :src="`${url}/media/${store.listOne?.category.file.video}.mp4`"
          :poster="`${url}/out/${store.listOne?.category.file.image}.webp`"
          autoplay
          loop
          muted
        ></video>

        <MaskComponent v-else />
      </article>

      <article>
        <BreadCrumbsComponent :crumb="store.listOne?.category.name" />

        <h1 v-text="store.listOne?.category.name" />

        <p v-html="store.listOne?.category.description" />
      </article>

      <SizeComponent :data="store.listOne?.characteristic" />

      <SpecsComponent :data="store.listOne?.category.sub_category" />
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  background-color: rgb(var(--color-primary));

  section {
    display: grid;
    gap: 48px;
    grid-template: auto / minmax(200px, 400px) 1fr;
    margin: auto;
    max-width: 1200px;
    padding: clamp(48px, 5vw, 120px) 24px;

    article {
      display: inherit;

      h1 {
        margin: 0 0 24px;
        text-transform: initial;
      }

      p {
        white-space: break-spaces;
      }

      &:first-of-type {
        border-radius: var(--theme-radius);
        grid-row: span 2;
        max-height: 400px;
        max-width: 400px;
        position: relative;

        &.video {
          height: fit-content;

          video {
            width: 100%;
          }

          &::before {
            background-color: #1448890f;
            border-radius: var(--theme-radius);
            content: "";
            inset: 0;
            position: absolute;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 920px) {
  main {
    section {
      grid-template: minmax(200px, 400px) auto / auto;

      article {
        &:first-of-type {
          grid-row: initial;
        }
      }
    }
  }
}
</style>
