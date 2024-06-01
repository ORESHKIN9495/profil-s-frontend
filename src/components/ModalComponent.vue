<script setup lang="ts">
import BidComponent from "@/components/BidComponent.vue";
import { root } from "@/stores/index";
import { ref, watchEffect } from "vue";

const state = root();
const bid_modal = ref();

watchEffect(() => {
  if (bid_modal.value && state.bid_modal) bid_modal.value.showModal();
  if (bid_modal.value && !state.bid_modal) bid_modal.value.close();
});
</script>

<template>
  <dialog ref="bid_modal">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(var(--color-theme))" viewBox="0 0 16 16" v-on:click="state.bid_modal = false">
      <path
        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
      />
    </svg>

    <BidComponent />
  </dialog>
</template>

<style scoped lang="scss">
dialog {
  padding: 48px clamp(24px, 13vw, 240px);

  svg {
    cursor: pointer;
    inset: 24px 24px 0 auto;
    position: absolute;
  }
}
</style>
