<script setup lang="ts">
import BidComponent from "@/components/BidComponent.vue";
import AdvantagesComponent from "../components/AdvantagesComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";
import ServicesComponent from "../components/ServicesComponent.vue";
</script>

<template>
  <main>
    <HeroComponent />

    <ServicesComponent />

    <AdvantagesComponent />

    <section>
      <BidComponent />
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  section {
    &:last-of-type {
      margin: auto;
      max-width: 1200px;
    }
  }
}
</style>
