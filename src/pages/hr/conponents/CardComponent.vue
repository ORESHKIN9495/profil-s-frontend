<script setup lang="ts">
import BadgeComponent from "@/components/BadgeComponent.vue";
import { hr } from "../stores";

const store = hr();

const props = defineProps({
  data: Object,
  index: Number
});

const prepare = (navigate: any) => {
  store.index = props.index as number;
  navigate();
};
</script>

<template>
  <RouterLink :to="{ name: !store.resolution ? 'hr' : 'hr-page', params: store.resolution ? { id: props.data?.id } : {} }" custom v-slot="{ navigate }">
    <article :class="['card', { active: store.index === props?.index }]" v-on:click="prepare(navigate)">
      <h3 v-text="props.data?.name" />

      <BadgeComponent :title="props.data?.period" color />

      <small v-text="props.data?.cost" />
    </article>
  </RouterLink>
</template>

<style scoped lang="scss">
article {
  background-color: rgb(var(--color-light));

  span {
    margin: 12px 0;
  }

  small {
    font-size: 14px;
  }

  &.active {
    background-color: rgb(var(--color-theme));
    color: rgb(var(--color-light));
    position: relative;

    span {
      background-color: rgba(var(--color-light), 0.2);
    }

    &::before {
      border: 20px solid transparent;
      border-left: 20px solid rgb(var(--color-theme));
      content: "";
      inset: 35% -30px auto auto;
      position: absolute;
    }
  }
}

@media only screen and (max-width: 920px) {
  article {
    &.active {
      &::before {
        content: none;
      }
    }
  }
}
</style>
