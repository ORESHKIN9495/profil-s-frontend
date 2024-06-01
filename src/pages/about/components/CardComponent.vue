<script setup lang="ts">
import { services } from "../stores";

const props = defineProps({
  data: Object,
  index: Number
});

const store = services();
</script>

<template>
  <article :class="['card', { active: store.index === props.index }]">
    <h3 v-text="props.data?.name" />

    <p v-text="props.data?.description" />
    <p class="content selected" v-text="props.data?.content" />

    <q class="selected" v-text="props.data?.quote"></q>
  </article>
</template>

<style scoped lang="scss">
article {
  background-color: rgb(var(--color-light));
  margin: 24px 0 0;

  h3 {
    color: rgb(var(--color-theme));
    padding: 0 0 12px;
  }

  &.active {
    background-color: rgb(var(--color-theme));
    color: rgb(var(--color-light));
    position: relative;

    h3 {
      color: inherit;
    }

    &::before {
      border: 20px solid transparent;
      border-left: 20px solid rgb(var(--color-theme));
      content: "";
      inset: 40% -30px auto auto;
      position: absolute;
    }
  }

  .selected {
    display: none;
    margin: 24px 0 0;
  }

  q {
    border-top: 1px solid rgba(var(--color-light), 0.2);
    padding: 24px 0 0;
  }
}

@media only screen and (max-width: 920px) {
  article {
    &.active {
      &::before {
        content: none;
      }

      .selected {
        display: block;
      }
    }
  }
}
</style>
