<script setup lang="ts">
import BadgeComponent from "@/components/BadgeComponent.vue";
import { fDate } from "@/composables/date";

const props = defineProps({
  data: Object
});
</script>

<template>
  <article class="card" v-if="props.data">
    <h3 v-text="props.data?.name" />

    <BadgeComponent :title="props.data?.promo ? 'Акция' : 'Новость'" />

    <time v-text="fDate(props.data?.created_at)" />

    <RouterLink class="link" :to="{ name: 'post', params: { id: props.data?.id } }">Читать далее <span>⸻</span></RouterLink>
  </article>
</template>

<style scoped lang="scss">
article {
  cursor: initial;
  display: grid;
  grid-template: 1fr auto / auto 1fr;
  gap: 24px;
  place-items: baseline;

  h3 {
    grid-column: 1 / -1;
  }

  time {
    opacity: 0.6;
  }

  a {
    grid-column: 1 / -1;
  }
}

@media only screen and (max-width: 720px) {
  article {
    grid-template: auto / auto;
  }
}
</style>
