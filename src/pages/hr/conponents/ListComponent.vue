<script setup lang="ts">
const props = defineProps({
  title: String,
  data: Object
});
</script>

<template>
  <ul>
    {{
      props.title
    }}

    <li v-for="(el, idx) of props.data" :key="idx">
      <figure></figure>

      {{ el }}
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  color: rgb(var(--color-theme));

  li {
    align-items: center;
    color: rgb(var(--color-dark));
    display: flex;
    gap: 12px;
    margin: 24px 0 0;

    figure {
      border: 2px solid rgb(var(--color-theme));
      border-radius: 50%;
      box-shadow: 0 0 5px 0 rgba(var(--color-theme), 0.4);
      height: 15px;
      min-width: 15px;
    }
  }
}
</style>
