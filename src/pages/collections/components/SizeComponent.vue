<script setup lang="ts">
import { root } from "@/stores/index";

const state = root();

const props = defineProps({
  data: Object
});
</script>

<template>
  <article>
    <ol>
      <li>Вес 1 п/м</li>

      <li v-text="props.data?.weight" />
    </ol>

    <ol>
      <li>Цена за 1 п/м c НДС</li>

      <li v-text="props.data?.price" />
    </ol>

    <ol>
      <li>Цена за 1 тонну с НДС</li>

      <li v-text="props.data?.max_price" />
    </ol>

    <ol v-if="props.data?.thickness">
      <li>Толщина стенки</li>

      <li v-text="props.data?.thickness" />
    </ol>

    <button class="button" v-on:click="state.bid_modal = true">Заказать</button>
  </article>
</template>

<style scoped lang="scss">
article {
  border-top: 1px solid rgba(var(--color-dark), 0.2);
  grid-template: auto / repeat(2, 1fr);
  gap: 24px;
  padding: 48px 0;

  ol {
    li {
      &:first-of-type {
        opacity: 0.2;
        text-transform: uppercase;
      }
    }
  }

  button {
    grid-column: 1 / -1;
  }
}
</style>
