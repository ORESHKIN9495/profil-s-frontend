<script setup lang="ts">
import PhoneComponent from "./PhoneComponent.vue";
import SocialMediaComponent from "./SocialMediaComponent.vue";

import { root } from "@/stores/index";
import { settings } from "@/stores/settings";
import { computed } from "vue";

const state = root();

const store = settings();
const contacts = computed(() => store.responseData?.contacts[0]);
</script>

<template>
  <footer id="tab_5">
    <nav>
      <h4>Адрес</h4>

      <p v-text="contacts?.address" />
    </nav>

    <nav>
      <h4>Телефон</h4>

      <PhoneComponent />
    </nav>

    <nav>
      <h4>Эл.почта</h4>

      <a :href="`mailto:${contacts?.email}`" v-text="contacts?.email" />
    </nav>

    <p class="link" v-on:click="state.bid_modal = true">Написать нам <span>⸻</span></p>

    <SocialMediaComponent />

    <span>
      <p>{{ new Date().getFullYear() }} {{ store.responseData?.abbreviation }} © Все права защищены</p>

      <hr />

      <a href="/"> Политика конфиденциальности</a>
    </span>
  </footer>
</template>

<style scoped lang="scss">
footer {
  display: grid;
  grid-template: auto / auto auto 1fr;
  gap: 24px 48px;
  padding: 48px clamp(24px, 2vw, 48px);

  a {
    color: rgb(var(--color-theme));
  }

  span {
    display: flex;
    grid-column: 1 / -1;
    gap: 20px;
    flex-wrap: wrap;
    line-height: 1;

    &:last-of-type {
      margin: 60px 0 0;
    }

    hr {
      border-style: solid;
      border-width: 0 0 0 1px;
    }
  }
}

@media only screen and (max-width: 720px) {
  footer {
    grid-template: auto / auto;
  }
}
</style>
