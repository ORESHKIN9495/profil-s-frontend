<script setup lang="ts">
import BreadCrumbsComponent from "@/components/BreadCrumbsComponent.vue";
import PhoneComponent from "@/components/PhoneComponent.vue";
import SocialMediaComponent from "@/components/SocialMediaComponent.vue";
import MapComponent from "../components/MapComponent.vue";
import ModalComponent from "../components/ModalComponent.vue";

import { root } from "@/stores/index";
import { settings } from "@/stores/settings";
import { computed } from "vue";

const state = root();
const store = settings();

const contacts = computed(() => store.responseData?.contacts[0]);
</script>

<template>
  <main>
    <section>
      <BreadCrumbsComponent crumb="Наши контакты" />

      <h1 class="heading">Наши контакты</h1>
    </section>

    <section>
      <h3>Телефон</h3>

      <PhoneComponent />
    </section>

    <section>
      <h3>Эл.почта</h3>

      <a :href="`mailto:${contacts?.email}`" v-text="contacts?.email" />
    </section>

    <section>
      <h3>Адрес</h3>

      <p v-text="contacts?.address" />
    </section>

    <section>
      <h3>Социальные сети</h3>

      <SocialMediaComponent />

      <button class="button" v-on:click="state.bid_modal = true">Связаться с нами</button>

      <button class="button" v-on:click="state.partner_card_modal = true">Карта партнера</button>
    </section>

    <MapComponent />
  </main>

  <ModalComponent />
</template>

<style scoped lang="scss">
main {
  display: grid;
  grid-template: auto / repeat(3, 1fr);
  gap: 24px;
  padding: clamp(48px, 5vw, 120px) clamp(24px, 2vw, 48px);

  section {
    border-radius: var(--theme-radius);

    &:first-of-type {
      grid-column: 1 / -1;
    }

    &:last-of-type {
      grid-column: span 2;
    }

    &:nth-of-type(5) {
      display: grid;
      grid-template: auto / auto 1fr;
      gap: 24px;
      height: fit-content;

      button {
        white-space: nowrap;
      }

      nav {
        grid-column: 1 / -1;
      }
    }

    &:not(:last-of-type, :nth-of-type(5), :first-of-type) {
      background-color: rgb(var(--color-primary));
      box-shadow: 0 15px 15px -15px rgba(var(--color-dark), 0.2);
      padding: 24px;
    }
  }
}

@media only screen and (max-width: 1280px) {
  main {
    grid-template: auto / repeat(2, 1fr);
  }
}

@media only screen and (max-width: 920px) {
  main {
    grid-template: auto / auto;

    section {
      &:last-of-type {
        grid-column: 1 / -1;
      }
    }
  }
}

@media only screen and (max-width: 720px) {
  main {
    grid-template: auto / auto;

    section {
      &:nth-of-type(5) {
        grid-template: auto / auto;
      }
    }
  }
}
</style>
