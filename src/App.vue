<script setup lang="ts">
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import ModalComponent from "@/components/ModalComponent.vue";
import NotificationComponent from "@/components/NotificationComponent.vue";
import { root } from "@/stores/index";
import { preloader } from "@/stores/preloader";
import { settings } from "@/stores/settings";
import { watchEffect } from "vue";
import { RouterView, useRoute } from "vue-router";
import MenuComponent from "./components/MenuComponent.vue";
import PreloaderComponent from "./components/PreloaderComponent.vue";

const setting = settings();
const storePreloader = preloader();
const route = useRoute();
const store = root();

setting.find();

watchEffect(() => {
  route.name === "home" ? (document.documentElement.style.overflow = "hidden") : (document.documentElement.style.overflow = "auto");
  storePreloader.state ? document.documentElement.classList.add("pending") : document.documentElement.classList.remove("pending");
});
</script>

<template>
  <PreloaderComponent v-if="storePreloader.state" />

  <div class="wrapper" :class="{ open: store.stateMenu }">
    <HeaderComponent />

    <RouterView />

    <FooterComponent />
  </div>

  <MenuComponent v-if="store.stateMenu" />

  <ModalComponent />

  <NotificationComponent />
</template>

<style lang="scss">
@import "./assets/scss/reset.scss";

:root {
  --color-dark: 44, 83, 109;
  --color-light: 255, 255, 255;
  --color-theme: 92, 158, 255;
  --color-primary: 240, 244, 249;
  --theme-radius: 3px;
  --theme-shadow: 0 4px 16px #0033990a, 0 2px 2px #00339914;
}

.wrapper {
  background-color: rgb(var(--color-light));
  position: relative;
  transition: 0.2s ease-in-out;
  z-index: 10;

  &.open {
    transform: translateX(-270px);
    z-index: 0;
  }

  main {
    box-shadow: 0 15px 30px -20px rgba(var(--color-dark), 0.3);
  }
}

.pending {
  overflow: hidden !important;
}

body {
  color: rgb(var(--color-dark));

  font:
    400 16px / 1.6 system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
}

h1 {
  font-size: clamp(32px, 4vw, 40px);
  line-height: 1.34;
}

h2 {
  font-size: clamp(28px, 4vw, 40px);
}

h3 {
  font-size: clamp(16px, 4vw, 18px);
}

h4 {
  font-weight: 400;
  opacity: 0.2;
  text-transform: uppercase;
}

.router-link-active {
  color: rgb(var(--color-theme));
}

input,
textarea {
  border: 1px solid rgba(var(--color-dark), 0.1);
  border-radius: var(--theme-radius);
  color: rgb(var(--color-dark));
  padding: 10px;
  width: 100%;

  &:focus {
    border: 1px solid rgb(var(--color-theme));
  }
}

button {
  background-color: rgb(var(--color-theme));
  box-shadow: var(--theme-shadow);
  cursor: pointer;
  color: rgb(var(--color-light));
  width: fit-content;

  &:hover {
    background-color: rgba(var(--color-theme), 0.6);
  }
}

.button {
  border-radius: 3px;
  box-shadow:
    0 4px 16px #0033990a,
    0 2px 2px #00339914;
  padding: 12px 48px;
}

.content {
  text-align: justify;
  white-space: break-spaces;
}

.card {
  box-shadow: var(--theme-shadow);
  border-radius: 3px;
  cursor: pointer;
  padding: 24px 48px;
}

.link {
  cursor: pointer;

  &:not(nav > a) {
    text-transform: uppercase;
    color: inherit;

    &:hover {
      color: rgb(var(--color-theme));
    }

    span {
      display: initial;
      margin: 0 0 0 10px !important;
    }
  }
}

.heading {
  font-weight: 400;

  &::after {
    border-bottom: 3px solid rgb(var(--color-theme));
    content: "";
    display: block;
    padding: 0 0 10px;
    width: 100px;
  }
}

.hide {
  opacity: 0;
}

dialog {
  border: none;
  border-radius: var(--theme-radius);
  max-width: 1200px;
  padding: 0;
  width: 100%;

  &::backdrop {
    backdrop-filter: blur(5px);
  }
}

a {
  width: fit-content;
}

q {
  font-style: italic;
}
</style>
