<script setup lang="ts">
import { root } from "@/stores/index";
import { navigate } from "@/stores/navigate";
import PhoneComponent from "./PhoneComponent.vue";

const store = navigate();
const state = root();
</script>

<template>
  <aside>
    <nav>
      <RouterLink :to="{ name: el.path }" v-for="el of store.array" :key="el.title" v-outside="() => (state.stateMenu = false)">{{ el.title }}</RouterLink>

      <h4>Телефон</h4>

      <PhoneComponent />
    </nav>
  </aside>
</template>

<style scoped lang="scss">
aside {
  display: grid;
  height: 100%;
  inset: 0 0 auto auto;
  position: fixed;
  width: 270px;

  nav {
    margin: auto;

    a {
      display: block;
      margin: 0 0 5px;

      &:last-of-type {
        color: rgb(var(--color-theme));
        font-size: 18px;
      }
    }

    h4 {
      margin: clamp(20px, 10vw, 200px) 0 0;
    }
  }
}
</style>
