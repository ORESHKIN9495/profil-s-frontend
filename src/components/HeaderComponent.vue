<script setup lang="ts">
import IconLogotype from "@/assets/icons/IconLogotype.vue";
import IconMenu from "@/assets/icons/IconMenu.vue";
import { home } from "@/pages/home/stores";
import { navigate } from "@/stores/navigate";
import { useRoute } from "vue-router";

const storeHome = home();
const route = useRoute();
const store = navigate();
</script>

<template>
  <header :class="[{ gray: route.name === 'about' }, { white: route.name !== 'about' && route.name !== 'home' }, { hide: storeHome.index > 3 }]">
    <IconLogotype />

    <nav>
      <RouterLink :to="{ name: el.path }" v-for="el of store.array.slice(1, 5)" :key="el.title">{{ el.title }}</RouterLink>
    </nav>

    <IconMenu />
  </header>
</template>

<style scoped lang="scss">
header {
  color: rgb(var(--color-light));
  display: grid;
  grid-template: auto / 160px 1fr auto;
  gap: 24px;
  inset: 0;
  position: sticky;
  place-items: end center;
  padding: 20px clamp(20px, 2vw, 40px);
  transition: 0.3s ease-in-out;
  z-index: 10;

  &.hide {
    opacity: 0;
    inset: -92px 0 0;
  }

  nav {
    display: flex;
    gap: 28px;

    a {
      font-size: 18px;
      text-transform: uppercase;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  &.gray {
    background-color: rgb(35, 37, 45);
  }

  &.white {
    background-color: rgb(var(--color-light));
    color: rgb(var(--color-dark));
  }
}

@media only screen and (max-width: 920px) {
  header {
    grid-template: auto / 160px auto;

    nav {
      display: none;
    }
  }
}
</style>
