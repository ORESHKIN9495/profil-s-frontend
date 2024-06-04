<script setup lang="ts">
import { root } from "@/stores/index";

const store = root();
</script>

<template>
  <svg width="30" height="20" viewBox="0 0 30 20" fill="none" :class="{ active: store.stateMenu }" v-on:click="store.stateMenu = !store.stateMenu">
    <rect class="top_line" width="30" height="2" fill="currentColor" />
    <rect class="middle_line" y="9" width="30" height="2" fill="currentColor" />
    <rect class="bottom_line" y="18" width="30" height="2" fill="currentColor" />
  </svg>
</template>

<style scoped lang="scss">
svg {
  cursor: pointer;
  margin: 0 0 6px auto;

  &:hover {
    opacity: 0.6;
  }

  rect {
    transition: 0.5s ease-in-out;
    transform-origin: center;
  }

  &.active {
    color: rgb(var(--color-theme));

    rect {
      scale: 0.9;

      y: 9px;

      &.top_line {
        animation: cross_top_line 0.3s ease-in-out 0.5s 1 forwards;

        @keyframes cross_top_line {
          100% {
            transform: rotate(45deg);
          }
        }
      }

      &.middle_line {
        opacity: 0;
      }

      &.bottom_line {
        animation: cross_bottom_line 0.3s ease-in-out 0.5s 1 forwards;

        @keyframes cross_bottom_line {
          100% {
            transform: rotate(-45deg);
          }
        }
      }
    }
  }
}
</style>
