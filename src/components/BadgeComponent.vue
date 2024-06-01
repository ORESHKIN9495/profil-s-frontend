<script setup lang="ts">
const props = defineProps({
  title: String
});
</script>

<template>
  <span v-text="props.title" />
</template>

<style scoped lang="scss">
span {
  background-color: rgb(var(--color-theme));
  border-radius: var(--theme-radius);
  color: rgb(var(--color-light));
  display: block;
  font-size: 14px;
  padding: 10px 24px;
  text-align: center;
}
</style>
