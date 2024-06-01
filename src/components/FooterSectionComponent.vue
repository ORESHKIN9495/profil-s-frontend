<script setup lang="ts">
import SocialMediaComponent from "@/components/SocialMediaComponent.vue";
import PhoneComponent from "./PhoneComponent.vue";
</script>

<template>
  <footer>
    <SocialMediaComponent />

    <PhoneComponent />
  </footer>
</template>

<style scoped lang="scss">
footer {
  align-items: center;
  border-top: 1px solid rgba(var(--color-light), 0.2);
  display: flex;
  padding: 24px 0;
  width: 100%;

  a {
    color: rgb(var(--color-light));
    font-size: 18px;
    margin: 0 0 0 auto;
  }
}
</style>
