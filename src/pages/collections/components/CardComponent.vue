<script setup lang="ts">
import BadgeComponent from "@/components/BadgeComponent.vue";
import MaskComponent from "@/components/MaskComponent.vue";

const url = import.meta.env.VITE_URL;

const props = defineProps({
  data: Object
});
</script>

<template>
  <RouterLink :to="{ name: 'collection', params: { id: props.data?.id } }" custom v-slot="{ navigate }">
    <article class="card" v-on:click="navigate">
      <picture>
        <img v-if="props.data?.category.file" :src="`${url}/out/${props.data?.category.file.image}.webp`" :alt="props.data?.name" />

        <MaskComponent v-else />
      </picture>

      <h3 v-text="props.data?.characteristic.size" />

      <BadgeComponent v-if="props.data?.category.iso[0]?.name" :title="props.data?.category.iso[0]?.name" />
    </article>
  </RouterLink>
</template>

<style scoped lang="scss">
article {
  background-color: rgb(var(--color-primary));
  &:hover {
    background-color: rgba(var(--color-theme), 0.2);
  }

  h3 {
    margin: 12px 0;
    text-align: center;
  }

  picture {
    display: block;
    margin: auto;
    max-width: 150px;
  }

  span {
    background-color: rgba(var(--color-theme), 0.2);
    color: rgb(var(--color-theme));
  }
}
</style>
